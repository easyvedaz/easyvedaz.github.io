webpackJsonp([1],{"7zck":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("/5sW"),s=n("3EgV"),a=n.n(s),o=(n("7zck"),n("NYxO")),i=n("BO1k"),c=n.n(i),l=n("mvHQ"),u=n.n(l),v=n("mtWM"),g=n.n(v).a.create({baseURL:"https://api.easyvedaz.com/api"}),d={state:{scriptureId:1,lang:null,verses:null,verseIndex:null,languages:null,chapters:null,deferredPrompt:null,verseOfDayId:null,verseOfDayImage:null},getters:{scriptureId:function(e){return null==e.scriptureId&&(e.scriptureId=localStorage.getItem("scriptureId")),e.scriptureId},lang:function(e){return null==e.lang&&(e.lang=localStorage.getItem("lang")),e.lang},languages:function(e){return null==e.languages&&(e.languages=JSON.parse(localStorage.getItem("languages"))),e.languages},chapters:function(e){return null==e.chapters&&(e.chapters=JSON.parse(localStorage.getItem("chapters"))),e.chapters},verses:function(e){return null==e.verses&&(e.verses=JSON.parse(localStorage.getItem("verses"))),e.verses},verseIndex:function(e){return null==e.verseIndex&&(e.verseIndex=localStorage.getItem("verseIndex"),null==e.verseIndex&&(e.verseIndex=0)),e.verseIndex},verse:function(e,t){return t.verses?t.verses[t.verseIndex]:null},verseText:function(e,t){if(t.verse)return t.verse.content[t.lang].title.replace(/\n/g,"<br />")},sanskritVerseText:function(e,t){if(t.verse)return t.verse.content.sa.title.replace(/\n/g,"<br />")}},mutations:{verses:function(e,t){e.verses=t,localStorage.setItem("verses",u()(e.verses))},lang:function(e,t){e.lang=t,localStorage.setItem("lang",e.lang)},languages:function(e,t){e.languages=t,localStorage.setItem("languages",u()(e.languages))},chapters:function(e,t){e.chapters=t,localStorage.setItem("chapters",u()(e.chapters))},incrementVerseIndex:function(e){700!==e.verseIndex&&(e.verseIndex=parseInt(e.verseIndex)+1,localStorage.setItem("verseIndex",e.verseIndex))},decrementVerseIndex:function(e){0!==e.verseIndex&&(e.verseIndex=parseInt(e.verseIndex)-1,localStorage.setItem("verseIndex",e.verseIndex))},verseIndex:function(e,t){e.verseIndex=t,localStorage.setItem("verseIndex",e.verseIndex)},resetState:function(e){e.scriptureId=1,e.lang=null,e.verses=null,e.verseIndex=null,e.isLoading=!1,e.error=null,localStorage.clear(),caches.keys().then(function(e){var t=!0,n=!1,r=void 0;try{for(var s,a=c()(e);!(t=(s=a.next()).done);t=!0){var o=s.value;caches.delete(o)}}catch(e){n=!0,r=e}finally{try{!t&&a.return&&a.return()}finally{if(n)throw r}}})}},actions:{fetchVerses:function(e,t){var n=e.commit,r=e.getters;n("isLoading",!0),n("lang",t.lang),g.get("verses",{params:{scriptureId:r.scriptureId,lang:r.lang}}).then(function(e){n("verses",e.data),n("isLoading",!1)}).catch(function(e){n("error",e),n("isLoading",!1)})},fetchLanguages:function(e,t){var n=e.commit;e.getters;n("isLoading",!0),g.get("languages").then(function(e){n("languages",e.data),n("isLoading",!1)}).catch(function(e){n("error",e),n("isLoading",!1)})},fetchChapters:function(e,t){var n=e.commit,r=e.getters;console.log("in fechchapters pre"),n("isLoading",!0),g.get("chapters",{params:{scriptureId:r.scriptureId,lang:r.lang}}).then(function(e){n("chapters",e.data),console.log("in fechchapters post",e.data),n("isLoading",!1)}).catch(function(e){n("error",e),n("isLoading",!1)})},incrementVerseIndex:function(e){(0,e.commit)("incrementVerseIndex")},decrementVerseIndex:function(e){(0,e.commit)("decrementVerseIndex")},changeChapter:function(e,t){var n=e.commit,r=e.getters;console.log("in change chapter action");for(var s=r.verses.length,a=0;a<s;a++){if(console.log(),r.verses[a].chapterId===t.chapterId){n("verseIndex",a);break}}},resetState:function(e){(0,e.commit)("resetState")}}},h={state:{user:null},getters:{user:function(e){return null==e.user&&(e.user=JSON.parse(localStorage.getItem("user"))),e.user},isLoggedIn:function(e,t){return null!=t.user},token:function(e,t){return t.user?t.user.token:null},helloToken:function(e){return null==e.helloToken&&(e.helloToken=JSON.parse(localStorage.getItem("hello"))?JSON.parse(localStorage.getItem("hello")).google.access_token:null),e.helloToken}},mutations:{user:function(e,t){e.user=t,localStorage.setItem("user",u()(e.user))},logout:function(e){localStorage.removeItem("user"),localStorage.removeItem("hello")}},actions:{authenticate:function(e,t){var n=e.commit,r=e.getters;console.log("in authenticate",t);var s=t.image.url,a=r.helloToken,o={id:t.id,displayName:t.displayName,name:t.name,image:encodeURI(s),email:t.email,gender:t.gender,url:encodeURI(t.url),thirdPartyAccessToken:a};n("isLoading",!0),g.post("token",o).then(function(e){n("user",e.data),n("isLoading",!1)}).catch(function(e){n("error",e),n("isLoading",!1)})},logout:function(e){(0,e.commit)("logout",null)}}};r.a.use(o.a);var f=new o.a.Store({modules:{verse:d,user:h,shared:{state:{isLoading:!1,error:null},getters:{isLoading:function(e){return e.isLoading},error:function(e){return e.error}},mutations:{isLoading:function(e,t){e.isLoading=t},error:function(e,t){e.error=t}},actions:{isLoading:function(e,t){(0,e.commit)("isLoading",t)},error:function(e,t){(0,e.commit)("error",t)}}}}}),p={name:"App",data:function(){return{drawer:null,items:[{title:"Home",icon:"dashboard",link:"/"},{title:"Change Aadyay",icon:"list",link:"/chapters"},{title:"Change Language",icon:"build",link:"/languages"},{title:"Contact us",icon:"question_answer",link:"/about"}]}},computed:{isLoggedIn:function(){return this.$store.getters.isLoggedIn},user:function(){return this.$store.getters.user},userImage:function(){return this.isLoggedIn?this.user.image:"static/images/default-profile.png"}},methods:{reset:function(){this.$store.dispatch("resetState"),this.$router.push({path:"/"}),window.location.reload(!0)},logout:function(){this.$store.dispatch("logout"),this.$router.push({path:"/"}),window.location.reload(!0)},login:function(){this.$router.push({path:"/login"})}}},m={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("v-app",[n("v-navigation-drawer",{attrs:{temporary:"",absolute:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list",{staticClass:"pa-1"},[n("v-list-tile",{attrs:{avatar:""}},[n("v-list-tile-avatar",[n("img",{attrs:{src:e.userImage}})]),e._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[e._v(e._s(e.isLoggedIn?e.user.name:"Guest"))])],1)],1)],1),e._v(" "),n("v-list",{staticClass:"pt-0",attrs:{dense:""}},[n("v-divider"),e._v(" "),e.isLoggedIn?e._e():n("v-list-tile",{on:{click:e.login}},[n("v-list-tile-action",[n("v-icon",[e._v("face")])],1),e._v(" "),n("v-list-tile-content",[e._v("Signin")])],1),e._v(" "),e.isLoggedIn?e._e():n("v-divider"),e._v(" "),e._l(e.items,function(t){return n("v-list-tile",{key:t.title,attrs:{to:t.link}},[n("v-list-tile-action",[n("v-icon",[e._v(e._s(t.icon))])],1),e._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[e._v(e._s(t.title))])],1)],1)}),e._v(" "),n("v-divider"),e._v(" "),e.isLoggedIn?n("v-list-tile",{on:{click:e.logout}},[n("v-list-tile-action",[n("v-icon",[e._v("exit_to_app")])],1),e._v(" "),n("v-list-tile-content",[e._v("Logout")])],1):e._e(),e._v(" "),n("v-list-tile",{on:{click:e.reset}},[n("v-list-tile-action",[n("v-icon",[e._v("refresh")])],1),e._v(" "),n("v-list-tile-content",[e._v("Reset/Repair")])],1)],2)],1),e._v(" "),n("v-toolbar",{attrs:{app:"",height:"45px"}},[n("v-toolbar-side-icon",{on:{click:function(t){e.drawer=!e.drawer}}})],1),e._v(" "),n("v-content",[n("router-view")],1),e._v(" "),n("v-footer",{attrs:{app:""}})],1)],1)},staticRenderFns:[]},x=n("VU/8")(p,m,!1,null,null,null).exports,_=n("/ocq"),I={computed:{languages:function(){return this.$store.getters.languages},isOnline:function(){return navigator.onLine}},mounted:function(){this.$store.dispatch("fetchLanguages")},methods:{selectLanguageAndFetchVerses:function(e){this.$store.dispatch("fetchVerses",{lang:e}),this.$router.push({path:"Verse"})}}},L={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",sm6:"","offset-sm3":""}},[n("img",{attrs:{src:"static/images/logos/easyvedaznamelogo-192x192.png",width:"120px"}}),e._v(" "),n("br"),n("br"),e._v(" "),n("h2",[e._v("||Bhagvad Gita||")]),e._v(" "),n("h3",[e._v("Select Language")]),n("br")]),e._v(" "),e._l(e.languages,function(t){return n("v-flex",{key:t.code,staticClass:"text-xs-center",attrs:{xs12:"",sm6:"","offset-sm3":""}},[n("v-btn",{attrs:{block:"",large:"",round:"",color:"error"},on:{click:function(n){e.selectLanguageAndFetchVerses(t.code)}}},[e._v(e._s(t.name))])],1)}),e._v(" "),n("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",sm6:"","offset-sm3":""}},[n("br"),e._v(" "),n("span",{staticClass:"messageText"},[e._v("\n            To change language make sure that you are connected to the internet.\n          ")])])],2)],1)},staticRenderFns:[]};var b=n("VU/8")(I,L,!1,function(e){n("aJcG")},null,null).exports,w={computed:{chapters:function(){return this.$store.getters.chapters}},mounted:function(){this.$store.dispatch("fetchChapters")},methods:{changeChapter:function(e){console.log("in changechapter method",e),this.$store.dispatch("changeChapter",{chapterId:e}),this.$router.push({path:"Verse"})}}},k={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",sm6:"","offset-sm3":""}},[n("h2",[e._v("||Bhagvad Gita||")]),e._v(" "),n("h3",[e._v("Select Adhyay / Chapter")])]),e._v(" "),e._l(e.chapters,function(t){return n("v-flex",{key:t.id,staticClass:"text-xs-center",attrs:{xs12:""}},[n("v-btn",{attrs:{block:"",large:"",round:"",color:"error"},on:{click:function(n){e.changeChapter(t.id)}}},[e._v(e._s(t.name))])],1)})],2)],1)},staticRenderFns:[]},y=n("VU/8")(w,k,!1,null,null,null).exports,V={data:function(){return{show:!0}},computed:{verseText:function(){return this.$store.getters.verseText},sanskritVerseText:function(){return this.$store.getters.sanskritVerseText},isLoading:function(){return this.$store.getters.isLoading},isLoggedIn:function(){return console.log("login status",this.$store.getters.isLoggedIn),this.$store.getters.isLoggedIn}},methods:{nextVerse:function(){this.$store.dispatch("incrementVerseIndex")},previousVerse:function(){this.$store.dispatch("decrementVerseIndex")}}},C={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"mycontainer"},[e.isLoading?n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",sm6:"","offset-sm3":""}},[n("br"),n("br"),e._v(" "),n("v-progress-circular",{attrs:{indeterminate:"",size:100,color:"amber"}})],1)],1):e._e(),e._v(" "),e.isLoading?e._e():n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",sm6:"","offset-sm3":""}},[n("v-slide-x-transition",[n("v-card",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}]},[n("v-card-title",[n("div",[n("span",{staticClass:"primaryText",domProps:{innerHTML:e._s(e.verseText)}}),e._v(" "),n("br"),n("br"),e._v(" "),n("span",{staticClass:"secondaryText",domProps:{innerHTML:e._s(e.sanskritVerseText)}})])]),e._v(" "),n("v-card-actions",[n("v-btn",{attrs:{flat:""},on:{click:function(t){e.previousVerse()}}},[n("v-icon",[e._v("arrow_back")]),e._v("Back")],1),n("br")],1)],1)],1),e._v(" "),n("v-btn",{staticClass:"fixedButton",attrs:{color:"error",dark:"",medium:"",fab:""},on:{click:function(t){e.nextVerse()}}},[n("v-icon",[e._v("arrow_forward")])],1)],1)],1),e._v(" "),n("br"),n("br"),n("br"),n("br"),n("br")],1)},staticRenderFns:[]};var $=n("VU/8")(V,C,!1,function(e){n("zw2j")},"data-v-7e46a8f1",null).exports,S={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"mycontainer"},[e.isLoading?n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",sm6:"","offset-sm3":""}},[n("br"),n("br"),e._v(" "),n("v-progress-circular",{attrs:{indeterminate:"",size:100,color:"amber"}})],1)],1):e._e(),e._v(" "),e.isLoading?e._e():n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",sm6:"","offset-sm3":""}},[n("v-slide-x-transition",[n("v-card",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}]},[n("v-card-media",{attrs:{src:""}}),e._v(" "),n("v-card-title",[n("div",[n("span",{staticClass:"primaryText",domProps:{innerHTML:e._s(e.verseText)}}),e._v(" "),n("br"),n("br"),e._v(" "),n("span",{staticClass:"secondaryText",domProps:{innerHTML:e._s(e.sanskritVerseText)}})])])],1)],1)],1),e._v(" "),n("v-flex",{attrs:{xs12:"",sm4:"","offset-sm4":""}},[n("br"),n("br"),e._v(" "),n("v-btn",{attrs:{color:"gray",flat:""},on:{click:e.gotoVerse}},[e._v("Continue Reading")]),e._v(" "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")],1)],1)],1)},staticRenderFns:[]};var T=n("VU/8")({data:function(){return{show:!0}},computed:{verseText:function(){return this.$store.getters.verseText},sanskritVerseText:function(){return this.$store.getters.sanskritVerseText},isLoading:function(){return this.$store.getters.isLoading}},methods:{gotoVerse:function(){this.$router.push({path:"Verse"})}}},S,!1,function(e){n("ZJFw")},"data-v-0584ac32",null).exports,O={methods:{auth:function(e){var t=this,n=this.hello;n(e).login({scope:"email"}).then(function(){n(e).api("me").then(function(e){t.$store.dispatch("authenticate",e),t.$router.go(-1)}).catch(function(e){console.log("error: ",e)})})}}},N={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-container",{staticClass:"mycontainer"},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",sm6:"","offset-sm3":""}},[n("br"),n("br"),e._v(" "),n("button",{staticClass:"loginBtn loginBtn--google",on:{click:function(t){e.auth("google")}}},[e._v("Login with Google")])])],1)],1)],1)},staticRenderFns:[]};var R=n("VU/8")(O,N,!1,function(e){n("ricj")},"data-v-45310622",null).exports,F={render:function(){var e=this.$createElement,t=this._self._c||e;return t("v-container",{staticClass:"mycontainer"},[t("v-layout",{attrs:{row:"",wrap:""}},[t("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",sm6:"","offset-sm3":""}},[t("v-card",[t("v-card-title",[this._v("\r\n          For any queries please mail us on support@easyvedaz.com\r\n        ")])],1)],1)],1)],1)},staticRenderFns:[]},J=n("VU/8")(null,F,!1,null,null,null).exports;r.a.use(_.a);var H=new _.a({routes:[{path:"/",name:"Home",component:b},{path:"/Languages",name:"Languages",component:b},{path:"/Chapters",name:"Chapters",component:y},{path:"/Verse",name:"Verse",component:$},{path:"/VerseOfDay",name:"VerseOfDay",component:T},{path:"/Login",name:"Login",component:R},{path:"/About",name:"About",component:J}]}),U=(n("j1ja"),n("eh5q")),z=n("3Hnh");U.init({google:"929207747619-p8qfgimtsjvkc72ivkkev3p22iot9fo7.apps.googleusercontent.com",facebook:""},{redirect_uri:"/"}),r.a.use(z,U),r.a.config.productionTip=!1,r.a.use(a.a),new r.a({el:"#app",store:f,router:H,render:function(e){return e(x)},created:function(){this.$store.getters.verse?H.push("verse"):H.push("languages")}})},ZJFw:function(e,t){},aJcG:function(e,t){},ricj:function(e,t){},zw2j:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.aaaab21cee1cea18b352.js.map