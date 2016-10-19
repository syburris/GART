package com.theironyard;

import jodd.json.JsonSerializer;
import spark.Session;
import spark.Spark;

import java.sql.*;

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
                    Session session = request.session();
                    session.attribute("username", name);
                    response.redirect("/");
                    return null;
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
    }
}
