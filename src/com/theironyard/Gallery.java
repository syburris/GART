package com.theironyard;

/**
 * Created by stevenburris on 10/19/16.
 */

//stmt.execute("CREATE TABLE IF NOT EXISTS galleries (id IDENTITY, gallery VARCHAR, " +
//                "artist VARCHAR, genre VARCHAR, time VARCHAR, user_id INT)");
public class Gallery {
    int id;
    String galleryName;
    String artist;
    String genre;
    String time;
    int userId;

    public Gallery() {
    }

    public Gallery(String galleryName, String artist, String genre, String time, int userId) {
        this.galleryName = galleryName;
        this.artist = artist;
        this.genre = genre;
        this.time = time;
        this.userId = userId;
    }

    public Gallery(int id, String galleryName, String artist, String genre, String time, int userId) {
        this.id = id;
        this.galleryName = galleryName;
        this.artist = artist;
        this.genre = genre;
        this.time = time;
        this.userId = userId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getGalleryName() {
        return galleryName;
    }

    public void setGalleryName(String galleryName) {
        this.galleryName = galleryName;
    }

    public String getArtist() {
        return artist;
    }

    public void setArtist(String artist) {
        this.artist = artist;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }
}
