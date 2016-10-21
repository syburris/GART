console.log('wired up!')
console.log($)
console.log(_)
console.log(Backbone)

var idToHash = function(evt){
   window.location.hash = evt.currentTarget.dataset.route
}

var inputRouter = function(){
   var currentHash = window.location.hash.slice(1)

   if (currentHash.length === 0){
      mainDisplayContainer()
      document.querySelector('.gallery').addEventListener('click', idToHash )
      document.querySelector('.artist').addEventListener('click', idToHash )
      document.querySelector('.createShow').addEventListener('click', idToHash )
      document.querySelector('.showGalleries').addEventListener('click',idToHash)
      return;
   }


   switch(currentHash){
      case "login":
         showAuthPage();
         break;

      case "gallery-form":
         showGallery();
         break;

      case "artist-form":
         showArtist();
         break;

      case "show-form":
         showGalleriesPage();
         break;

         case "gallery-listings":
          var galleryDataArray = [
             {
                   galleryName: 'Atelier Gallery',
                   artist: 'Claude Monet',
                   genre: "Impressionism",
                   time: "6:00pm"
             },
             {
                   galleryName: 'Corrigan Gallery',
                   artist: 'Frida Kahlo',
                   genre: 'portrait' ,
                   time: "7:00pm"
             },
             {
                   galleryName: 'Hasley Gallery',
                   artist: 'Gustav Klimt',
                   genre: 'Symbolism' ,
                   time: "5:00pm"
             },
          ]


          $.getJSON("/GART").then(function(serverRes){
              console.log(serverRes)
             showCacklesPage(serverRes);
          })

      case "create-form":
         showGalleryPage()
         document.querySelector('#new-gallery-form').addEventListener('submit', function(evt){
           evt.preventDefault()
               var createFormEl = evt.target

               var objForData = {
                  gallery: createFormEl.galleryName.value,
                  artist:  createFormEl.artist.value,
                  genre: createFormEl.genre.value,
                  time: createFormEl.time.value
                       }
              console.log(objForData);

$.post('/GART', JSON.stringify(objForData)).then(function(serverRes){
      window.location.hash = "gallery-listings"
    })
  })

      break;
      default:
         document.querySelector('#app-container').innerHTML = "<h1 class='bg-warning'>PAGE NOT FOUND</h1>";
   }
}
var authenticateUser = function(evt){
   evt.preventDefault()
   console.log("email", evt.target.email.value)
   console.log("passord", evt.target.password.value)
   var dataForServer = {
      email: evt.target.email.value,
      password: evt.target.password.value
   }

   console.log('to server:', JSON.stringify(dataForServer))

   $.post( '/login', JSON.stringify(dataForServer) ).then(function(whateversentback){
      console.log('Success !!!!')
      window.location.hash = "user-profile/" +dataForServer.email
   })

}

inputRouter()
window.addEventListener('hashchange', inputRouter)
