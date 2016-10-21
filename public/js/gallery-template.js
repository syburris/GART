var showGallery = function (galleryList){
    bigList = '';
    bigList += '<div class="row">'
    bigList +=    '<div class="col-lg-12 col-sm-6 text-center galleryList">'
    bigList +=       '<li><img src="/Users/Dolpator/TIY/assignments/Assignment-21-GART/public/images/download.jpeg"/> Mary martin Gallery </li>'
    bigList +=       '<li><img src="/Users/Dolpator/TIY/assignments/Assignment-21-GART/public/images/download (1).jpeg"/> Atelier Gallery </li>'
    bigList +=       '<li><img src="/Users/Dolpator/TIY/assignments/Assignment-21-GART/public/images/main.mv.jpeg"/> Martin Gallery </li>'
    bigList +=       '<li><img src="/Users/Dolpator/TIY/assignments/Assignment-21-GART/public/images/images (1).jpeg"/> Robert Lange Studios </li>'
    bigList +=    '</div>'
    bigList +=  '</div>'
    bigList += '<div class="row">'
    bigList +=    '<div class="col-lg-12 col-sm-6 galleryList">'
    bigList +=       '<li><img src="/Users/Dolpator/TIY/assignments/Assignment-21-GART/public/images/images (2).jpeg"/> Horton Hayes Gallery </li>'
    bigList +=       '<li><img src="/Users/Dolpator/TIY/assignments/Assignment-21-GART/public/images/download (2).jpeg"/> Gordon Wheeler </li>'
    bigList +=       '<li><img src="/Users/Dolpator/TIY/assignments/Assignment-21-GART/public/images/images.jpeg"/> Halsey Institute </li>'
    bigList +=       '<li><img src="/Users/Dolpator/TIY/assignments/Assignment-21-GART/public/images/images (3).jpeg"/>Audobon Gallery </li>'
    bigList +=     '</div>'
    bigList += '</div>'
    document.querySelector('#app-container').innerHTML = bigList

}
