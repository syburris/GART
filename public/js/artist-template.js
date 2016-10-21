var showArtist = function(artistList){
  bigList = ''
  bigList += '<div class="col-md-12 col-sm-6 artistList">'
  bigList += '<li> Ã‰douard Manet <li>'
  bigList +=   '<li> Claude Monet <li>'
  bigList +=   '<li> Gustav Klimt <li>'
  bigList +=   '<li> Henri Matisse <li>'
  bigList +=   '<li> Kerry James Marshall<li>'
  bigList +=   '<li> Tamera de Lempicka<li>'
  bigList +=   '<li> Frida Kahlo <li>'
  bigList +=   '<li> Joan Mitchell<li>'
  bigList += '<li> Kara Walker <li>'
  bigList += '</div>'

  console.log(bigList)
  document.querySelector('#app-container').innerHTML = bigList

}
