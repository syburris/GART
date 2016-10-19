package com.theironyard;

import jodd.json.JsonParser;
import jodd.json.JsonSerializer;
import spark.Session;
import spark.Spark;

import java.sql.*;
import java.util.ArrayList;

public class Main {

    public static void createTables (Connection conn) throws SQLException {
        Statement stmt = conn.createStatement();
        stmt.execute("CREATE TABLE IF NOT EXISTS users (id IDENTITY, email VARCHAR, password VARCHAR)");
        stmt.execute("CREATE TABLE IF NOT EXISTS galleries (id IDENTITY, gallery VARCHAR, " +
                "artist VARCHAR, genre VARCHAR, time VARCHAR, user_id INT)");
    }

    public static void insertUser(Connection conn, String name, String password) throws SQLException {
        PreparedStatement stmt = conn.prepareStatement("INSERT INTO users VALUES (NULL, ?, ?)");
        stmt.setString(1, name);
        stmt.setString(2, password);
        stmt.execute();
    }

    public static User selectUser(Connection conn, String name) throws SQLException {
        PreparedStatement stmt = conn.prepareStatement("SELECT * FROM users WHERE name = ?");
        stmt.setString(1, name);
        ResultSet results = stmt.executeQuery();
        if (results.next()) {
            int id = results.getInt("id");
            return new User(id, name);
        }
        return null;
    }

    public static void insertGallery(Connection conn, Gallery gallery, User user) throws SQLException {
        PreparedStatement stmt = conn.prepareStatement("INSERT INTO galleries VALUES (NULL, ?, ?, ?, ?, ?)");
        stmt.setString(1, gallery.galleryName);
        stmt.setString(2, gallery.artist);
        stmt.setString(3, gallery.genre);
        stmt.setString(4, gallery.time);
        stmt.setInt(5, user.id);
        stmt.execute();

    }

    static ArrayList<Gallery> selectGalleries(Connection conn) throws SQLException {
        ArrayList<Gallery> galleries = new ArrayList<>();
        PreparedStatement stmt = conn.prepareStatement("SELECT * FROM galleries INNER JOIN users ON galleries.user_id = users.id");
        ResultSet results = stmt.executeQuery();
        while (results.next()) {
            int id = results.getInt("galleries.id");
            String galleryName = results.getString("galleries.gallery");
            String artist = results.getString("galleries.artist");
            String genre = results.getString("galleries.genre");
            String time = results.getString("galleries.time");
            int userId = results.getInt("users.email");
            Gallery gallery = new Gallery(id,galleryName,artist,genre,time,userId);
            galleries.add(gallery);

        }
        return galleries;
    }


    public static void main(String[] args) throws SQLException {
        Connection conn = DriverManager.getConnection("jdbc:h2:./main");
        createTables(conn);
        Spark.externalStaticFileLocation("public");
        Spark.init();

        Spark.post(
                "/login",
                (request, response) -> {
                    String name = request.queryParams("username");
                    String password = request.queryParams("password");
                    User user = selectUser(conn, name);
                    if (user == null) {
                        insertUser(conn, name, password);
                    }
                    else if (!password.equals(user.password)) {
                        Spark.halt(403);
                        return null;
                    }
                    Session session = request.session();
                    session.attribute("username", name);
                    response.redirect("/");
                    return "LOGIN";
                }
        );

        Spark.get(
                "/user",
                (request, response) -> {
                    Session session = request.session();
                    String name = session.attribute("username");
                    if (name == null) {
                        return "";
                    }
                    User user = selectUser(conn, name);
                    JsonSerializer serializer = new JsonSerializer();
                    return serializer.serialize(user);
                }
        );

        Spark.post(
                "gallery",
                (request, response) -> {
                    Session session = request.session();
                    String name = session.attribute("username");
                    if (name == null) {
                        return "";
                    }
                    User user = selectUser(conn, name);
                    String body = request.body();
                    JsonParser parser = new JsonParser();
                    Gallery gallery = parser.parse(body);
                    insertGallery(conn,gallery,user);
                    return "Gallery has been added.";
                }
        );

        Spark.get(
                "gallery",
                (request, response) -> {
                    Session session = request.session();
                    String name = session.attribute("username");
                    if (name == null) {
                        return "";
                    }
                    ArrayList<Gallery> galleries = selectGalleries(conn);
                    JsonSerializer serializer = new JsonSerializer();
                    GalleryWrapper wrapper = new GalleryWrapper(galleries);
                    return serializer.deep(true).serialize(wrapper);
                }
        );

        Spark.post(
                "/logout",
                (request, response) -> {
                    Session session = request.session();
                    session.invalidate();
                    response.redirect("/");
                    return null;
                }
        );
    }
}
