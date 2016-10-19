package com.theironyard;

import java.util.ArrayList;

/**
 * Created by stevenburris on 10/19/16.
 */
public class GalleryWrapper {
    ArrayList<Gallery> galleries;

    public GalleryWrapper() {
    }

    public GalleryWrapper(ArrayList<Gallery> galleries) {
        this.galleries = galleries;
    }

    public ArrayList<Gallery> getGalleries() {
        return galleries;
    }

    public void setGalleries(ArrayList<Gallery> galleries) {
        this.galleries = galleries;
    }
}
