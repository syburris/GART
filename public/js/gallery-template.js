var showGallery = function (galleryList){
    bigList = '';
    bigList += '<div class="row">'
    bigList +=    '<div class="col-lg-12 col-sm-6 text-center galleryList">'
    bigList +=       '<h1> Galleries Around the World</h1>'
    bigList +=       '<li thumbnail text-center><img src="images/download.jpeg"/> Mary Martin Gallery</li>'
    bigList +=       '<li thumbnail text-center><img src="images/download (1).jpeg"/> Atelier Gallery </li>'
    bigList +=       '<li thumbnail text-center><img src="images/main.mv.jpeg"/> Martin Gallery </li>'
    bigList +=       '<li thumbnail text-center><img src="images/images (1).jpeg"/> Robert Lange Studios </li>'
    bigList +=       '<li thumbnail text-center><img src="images/images (2).jpeg"/> Horton Hayes Gallery </li>'
    bigList +=       '<li thumbnail text-center><img src="images/download (2).jpeg"/> Gordon Wheeler </li>'
    bigList +=       '<li thumbnail text-center><img src="images/images.jpeg"/> Halsey Institute </li>'
    bigList +=       '<li thumbnail text-center><img src="images/images (3).jpeg"/>Audobon Gallery </li>'
    bigList +=    '</div>'
    bigList += '</div>'

    document.querySelector('#app-container').innerHTML = bigList

}
