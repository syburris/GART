var forEach = function(arr, cb){
   for(var i = 0 ; i < arr.length; i+=1){
      cb(arr[i], i, arr)
   }
}

var showGalleriesPage = function(galleryArr){
  var upComingShowStr = ''
      upComingShowStr += '<div class="container galleryshows">'
      upComingShowStr +=    '<table class="table">'
      upComingShowStr +=      '<thead>'
      upComingShowStr +=       '<tr>'
      upComingShowStr +=          '<th>Gallery</th>'
      upComingShowStr +=          '<th>Artist</th>'
      upComingShowStr +=          '<th>Genre</th>'
      upComingShowStr +=          '<th>Time</th>'
      upComingShowStr +=       '</tr>'
      upComingShowStr +=      '</thead>'
      upComingShowStr +=    '<tbody>'

forEach(galleryArr, function(galleryData){
      upComingShowStr +=        '<tr>'
      upComingShowStr +=          '<td>'+galleryData.galleryName+'</td>'
      upComingShowStr +=           '<td>'+galleryData.artist+'</td>'
      upComingShowStr +=           '<td>'+galleryData.genre+'</td>'
      upComingShowStr +=           '<td>'+galleryData.time+'</td>'
      upComingShowStr +=         '</tr>'
   })
      upComingShowStr +=    '</tbody>'
      upComingShowStr +=   '</table>'
      upComingShowStr += '</div>'

   document.querySelector('#app-container').innerHTML = upComingShowStr

}
