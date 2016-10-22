var showAuthPage = function(){
   var passHTMLStr = ''
         passHTMLStr += '<div class="row">'
         passHTMLStr +=    '<form class="col-sm-offset-3 col-sm-6" id="auth-form">'
         passHTMLStr +=    '<h2 class="text-primary">GART Sign Up</h2>'
         passHTMLStr +=     ' <div class="form-group">'
         passHTMLStr +=       ' <label for="email">Email address</label>'
         passHTMLStr +=        '<input type="email" class="form-control" id="email" placeholder="Email">'
         passHTMLStr +=      '</div>'
         passHTMLStr +=      '<div class="form-group">'
         passHTMLStr +=        '<label for="pw">Password</label>'
         passHTMLStr +=        '<input type="password" class="form-control" id="password" placeholder="Password">'
         passHTMLStr +=      '</div>'
         passHTMLStr +=      '<button type="submit" class="btn btn-default">Submit</button>'
         passHTMLStr +=    '</form>'
         passHTMLStr += '</div>'

   document.querySelector('#app-container').innerHTML = passHTMLStr
   
}
