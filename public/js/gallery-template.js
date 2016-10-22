var showGallery = function (galleryList){
    bigList = '';
    bigList += '<div class="row">'
    bigList +=    '<div class="col-lg-12 col-sm-6 text-center galleryList">'
    bigList +=       '<h1> Galleries Around the World</h1>'
   //  bigList +=    '<div>'
   //  bigList +=       '<p class="maryMartinPic thumbnail text-center">Mary Martin Gallery</p>'
   //  bigList +=       '<div class="maryMartinText">'
	//  bigList +=         '<p>The Mary Martin Gallery is located at 103 Broad Street and was named one of the top 25 galleries in America in 2013 by the American Art Awards 2013, 2014, and 2015.</p>'
   //  bigList +=        '</div>'
   //  bigList +=     '</div>'
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
