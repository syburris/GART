var mainDisplayContainer = function(){
   var myDisplayStr ='';
   myDisplayStr +=   '<div class="jumbotron text-center display-container">'
   myDisplayStr +=      '<h1 class ="appName">GART</h1>'
   myDisplayStr +=      '<p>Gallery Artist Realtime Tracker</p>'
   myDisplayStr +=      '<p><a class="btn btn-primary btn-lg login-btn" href="#login" role="button">Login</a></p>'
   myDisplayStr +=   '</div>'
   myDisplayStr +=   '<div class ="container text-center">'
   myDisplayStr +=        '<h1 class ="showing-container"> SHOWINGS</h1>'
   myDisplayStr +=    '</div>'
   myDisplayStr +=   '<div class="container-fluid text-center">'
   myDisplayStr +=            '<div class="row">'
   myDisplayStr +=               '<div class="col-xs-12 col-md-3 ">'
   myDisplayStr +=                  '<div class="gallery" data-route="gallery-form" >'
   myDisplayStr +=                     '<i class="fa fa-street-view fa-3x" aria-hidden="true"></i>'
   myDisplayStr +=                     '<h3> Gallery </h3>'
   myDisplayStr +=                     '<p>Art Galleries</p>'
   myDisplayStr +=                  '</div>'
   myDisplayStr +=               '</div>'
   myDisplayStr +=                  '<div class="col-xs-12 col-md-3 ">'
   myDisplayStr +=                     '<div class="artist" data-route="artist-form">'
   myDisplayStr +=                        '<i class="fa fa-universal-access fa-3x" aria-hidden="true"></i>'
   myDisplayStr +=                        '<h3>Artist</h3>'
   myDisplayStr +=                        '<p>Whos Who in Art</p>'
   myDisplayStr +=                     '</div>'
   myDisplayStr +=                  '</div>'
   myDisplayStr +=                  '<div class=" col-xs-12 col-md-3 ">'
   myDisplayStr +=                     '<div class="createShow" data-route="create-form">'
   myDisplayStr +=                        '<i class="fa fa-picture-o fa-3x" aria-hidden="true"></i>'
   myDisplayStr +=                          '<h3> createGalleries<h3>'
   myDisplayStr +=                        '<p> Create a Show</p>'
   myDisplayStr +=                     '</div>'
   myDisplayStr +=                 '</div>'
   myDisplayStr +=                  '<div class=" col-xs-12 col-md-3 ">'
   myDisplayStr +=                     '<div class="showGalleries" data-route="show-form">'
   myDisplayStr +=                        '<i class="fa fa-picture-o fa-3x" aria-hidden="true"></i>'
   myDisplayStr +=                          '<h3> Show Galleries<h3>'
   myDisplayStr +=                        '<p>See Upcoming Shows</p>'
   myDisplayStr +=                     '</div>'
   myDisplayStr +=                 '</div>'
   myDisplayStr +=            '</div>'
   myDisplayStr +=         '</div>'

   document.querySelector('#app-container').innerHTML = myDisplayStr

}
