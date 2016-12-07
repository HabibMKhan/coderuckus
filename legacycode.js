#chooseChar {
  height: 139px;
  width: auto;
  font-size: 36px;
  background-color: #14ab1b;
  color: white;
  cursor: pointer;
  padding: 5px 30px;
  position: fixed;
  top: 30%;
  a, a:visited {
    color: white;
  }
}


backnav {
height: 120px;
width: auto;
font-size: 36px;
background-color: #14ab1b;
color: white;
cursor: pointer;
padding: 5px 30px;
position: fixed;
top: 30%;
}

}


.showTips {
  position: fixed;
  bottom: 5%;
  left: 3%;
  background-color: $cr-orange;
  color: white;
  font-size: 24px;
  width: 130px;
  height: 80px;
}




div(class="tipForUser charPage" ng-show="showTips") {{tipForUser}}













//Legacy Stats.Jade Code

button(class="back-char" class="btn" ui-sref="char")
 a(ui-sref="char") Back to Character selection
button(class="back-home" class="btn" style="margin-top:150px;" ui-sref="home")
 a(ui-sref="home") Back home
button(class="go-edit" class="btn" ng-click="setCharstats()" ui-sref="edit({chartype:chartype,subclass:subclass,name:charName})" ng-show="subclass !== 'defaultSubclass'")
 a(ng-click="setCharstats()" ui-sref="edit({chartype:chartype,subclass:subclass,name:charName})") Go Edit

//Legacy Edit.Jade Code


button(class="back-char" class="btn" ui-sref="char")
 a(ui-sref="char") Back to Character selection
button(class="back-home" class="btn" style="margin-top:150px;" ui-sref="home")
 a(ui-sref="home") Back home
img(class="char" ng-src="{{imgUrl}}")

//Legacy Village.Jade Code
button(class="back-char" class="btn")
 a(ui-sref="char") Back to Character selection
button(class="back-home" class="btn" style="margin-top:150px;")
 a(ui-sref="home") Back home
img(class="char char-village" ng-src="{{imgUrl}}")

//Legacy Battle.Jade Code
button(class="back-char" class="btn" ui-sref="char")
 a(ui-sref="char") Back to Character selection
button(class="back-home" class="btn" style="margin-top:150px;" ui-sref="home")
 a(ui-sref="home") Back home



// Copy Paste Link Code
a(class="init-chartype link--javascript charPage" target="_blank" href="linkaka" title="linkaka") Var, Let, and Const
