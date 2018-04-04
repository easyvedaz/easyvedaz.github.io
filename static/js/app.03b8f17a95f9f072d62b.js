webpackJsonp([1],{"7zck":function(e,t){},"8Cqy":function(e,t){},GsD1:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("/5sW"),s=n("3EgV"),o=n.n(s),a=(n("7zck"),n("NYxO")),i=n("BO1k"),c=n.n(i),l=n("mvHQ"),u=n.n(l),g=n("//Fk"),v=n.n(g),d=n("mtWM"),h=n.n(d),f=n("/ocq"),p={computed:{languages:function(){return this.$store.getters.languages},isOnline:function(){return navigator.onLine}},mounted:function(){this.$store.dispatch("fetchLanguages")},methods:{selectLanguageAndFetchVerses:function(e){this.$store.dispatch("fetchVerses",{lang:e}),this.$router.push({path:"Verse"})}}},m={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",sm6:"","offset-sm3":""}},[n("img",{attrs:{src:"static/images/logos/easyvedaznamelogo-192x192.png",width:"120px"}}),e._v(" "),n("br"),n("br"),e._v(" "),n("h2",[e._v("||Bhagvad Gita||")]),e._v(" "),n("h3",[e._v("Select Language")]),n("br")]),e._v(" "),e._l(e.languages,function(t){return n("v-flex",{key:t.code,staticClass:"text-xs-center",attrs:{xs12:"",sm6:"","offset-sm3":""}},[n("v-btn",{attrs:{block:"",large:"",round:"",color:"error"},on:{click:function(n){e.selectLanguageAndFetchVerses(t.code)}}},[e._v(e._s(t.name))])],1)}),e._v(" "),n("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",sm6:"","offset-sm3":""}},[n("br"),e._v(" "),n("span",{staticClass:"messageText"},[e._v("\n            To change language make sure that you are connected to the internet.\n          ")])])],2)],1)},staticRenderFns:[]};var x=n("VU/8")(p,m,!1,function(e){n("aJcG")},null,null).exports,_={computed:{chapters:function(){return this.$store.getters.chapters}},mounted:function(){this.$store.dispatch("fetchChapters")},methods:{changeChapter:function(e){console.log("in changechapter method",e),this.$store.dispatch("changeChapter",{chapterId:e}),this.$router.push({path:"Verse"})}}},I={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",sm6:"","offset-sm3":""}},[n("h2",[e._v("||Bhagvad Gita||")]),e._v(" "),n("h3",[e._v("Select Adhyay / Chapter")])]),e._v(" "),e._l(e.chapters,function(t){return n("v-flex",{key:t.id,staticClass:"text-xs-center",attrs:{xs12:""}},[n("v-btn",{attrs:{block:"",large:"",round:"",color:"error"},on:{click:function(n){e.changeChapter(t.id)}}},[e._v(e._s(t.name))])],1)})],2)],1)},staticRenderFns:[]},k=n("VU/8")(_,I,!1,null,null,null).exports,w={data:function(){return{show:!0}},computed:{verseText:function(){return this.$store.getters.verseText},sanskritVerseText:function(){return this.$store.getters.sanskritVerseText},isLoading:function(){return this.$store.getters.isLoading},isLoggedIn:function(){return console.log("login status",this.$store.getters.isLoggedIn),this.$store.getters.isLoggedIn}},methods:{nextVerse:function(){this.$store.dispatch("incrementVerseIndex")},previousVerse:function(){this.$store.dispatch("decrementVerseIndex")},authtest:function(){this.$store.dispatch("authtest")},test:function(){var e=window.OneSignal||[];e.push(function(){e.getSubscription(function(t){t&&e.registerForPushNotifications({modalPrompt:!0})})})}}},b={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{tabindex:"-1"},on:{keyup:[function(t){return"button"in t||!e._k(t.keyCode,"left",37,t.key)?"button"in t&&0!==t.button?null:void e.previousVerse(t):null},function(t){return"button"in t||!e._k(t.keyCode,"right",39,t.key)?"button"in t&&2!==t.button?null:void e.nextVerse(t):null}]}},[n("v-container",{staticClass:"mycontainer"},[e.isLoading?n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",sm6:"","offset-sm3":""}},[n("br"),n("br"),e._v(" "),n("v-progress-circular",{attrs:{indeterminate:"",size:100,color:"amber"}})],1)],1):e._e(),e._v(" "),e.isLoading?e._e():n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",sm6:"","offset-sm3":""}},[n("v-slide-x-transition",[n("v-card",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}]},[n("v-card-title",[n("div",[n("span",{staticClass:"primaryText",domProps:{innerHTML:e._s(e.verseText)}}),e._v(" "),n("br"),n("br"),e._v(" "),n("span",{staticClass:"secondaryText",domProps:{innerHTML:e._s(e.sanskritVerseText)}})])]),e._v(" "),n("v-card-actions",[n("v-btn",{attrs:{flat:""},on:{click:function(t){e.previousVerse()}}},[n("v-icon",[e._v("arrow_back")]),e._v("Back")],1),n("br")],1)],1)],1),e._v(" "),n("v-btn",{staticClass:"fixedButton",attrs:{color:"error",dark:"",medium:"",fab:""},on:{click:function(t){e.nextVerse()}}},[n("v-icon",[e._v("arrow_forward")])],1)],1)],1),e._v(" "),n("br"),n("br"),n("br"),n("br"),n("br")],1)],1)},staticRenderFns:[]};var L=n("VU/8")(w,b,!1,function(e){n("GsD1")},"data-v-6d571be4",null).exports,y={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"mycontainer"},[e.isLoading?n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",sm6:"","offset-sm3":""}},[n("br"),n("br"),e._v(" "),n("v-progress-circular",{attrs:{indeterminate:"",size:100,color:"amber"}})],1)],1):e._e(),e._v(" "),e.isLoading?e._e():n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",sm6:"","offset-sm3":""}},[n("v-slide-x-transition",[n("v-card",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}]},[n("v-card-media",{attrs:{src:""}}),e._v(" "),n("v-card-title",[n("div",[n("span",{staticClass:"primaryText",domProps:{innerHTML:e._s(e.verseText)}}),e._v(" "),n("br"),n("br"),e._v(" "),n("span",{staticClass:"secondaryText",domProps:{innerHTML:e._s(e.sanskritVerseText)}})])])],1)],1)],1),e._v(" "),n("v-flex",{attrs:{xs12:"",sm4:"","offset-sm4":""}},[n("br"),n("br"),e._v(" "),n("v-btn",{attrs:{color:"gray",flat:""},on:{click:e.gotoVerse}},[e._v("Continue Reading")]),e._v(" "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")],1)],1)],1)},staticRenderFns:[]};var S=n("VU/8")({data:function(){return{show:!0}},computed:{verseText:function(){return this.$store.getters.verseText},sanskritVerseText:function(){return this.$store.getters.sanskritVerseText},isLoading:function(){return this.$store.getters.isLoading}},methods:{gotoVerse:function(){this.$router.push({path:"Verse"})}}},y,!1,function(e){n("ZJFw")},"data-v-0584ac32",null).exports,C={methods:{auth:function(e){this.$store.dispatch("helloNetwork",e);var t=this,n=this.hello;n(e).login({scope:"email"}).then(function(){n(e).api("me").then(function(e){e.notificationPlayerId=null,t.$store.dispatch("authenticate",e),t.$router.go(-1)}).catch(function(e){console.log("error: ",e)})})}}},V={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-container",{staticClass:"mycontainer"},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",sm6:"","offset-sm3":""}},[n("br"),n("br"),e._v(" "),n("button",{staticClass:"loginBtn loginBtn--google",on:{click:function(t){e.auth("google")}}},[e._v("Login with Google")]),e._v(" "),n("button",{staticClass:"loginBtn loginBtn--facebook",on:{click:function(t){e.auth("facebook")}}},[e._v("Login with Facebook")])])],1)],1)],1)},staticRenderFns:[]};var T=n("VU/8")(C,V,!1,function(e){n("8Cqy")},"data-v-0581ccdc",null).exports,$={render:function(){var e=this.$createElement,t=this._self._c||e;return t("v-container",{staticClass:"mycontainer"},[t("v-layout",{attrs:{row:"",wrap:""}},[t("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",sm6:"","offset-sm3":""}},[t("v-card",[t("v-card-title",[this._v("\r\n          For any queries please mail us on support@easyvedaz.com\r\n        ")])],1)],1)],1)],1)},staticRenderFns:[]},N=n("VU/8")(null,$,!1,null,null,null).exports;r.a.use(f.a);var O=new f.a({routes:[{path:"/",name:"Home",component:x},{path:"/Languages",name:"Languages",component:x},{path:"/Chapters",name:"Chapters",component:k},{path:"/Verse",name:"Verse",component:L},{path:"/VerseOfDay",name:"VerseOfDay",component:S},{path:"/Login",name:"Login",component:T},{path:"/About",name:"About",component:N}]}),F=h.a.create({baseURL:"https://api.easyvedaz.com/api"});F.interceptors.request.use(function(e){var t=JSON.parse(localStorage.getItem("user")),n=t?t.accessToken:null;return e.headers.authorization=n?"Bearer "+n:"",e},function(e){return v.a.reject(e)});var J=!1;F.interceptors.response.use(function(e){return e},function(e){var t=e.config;if(console.log("orignalrequest",t),console.log("isrefreshing",J),e.config&&e.response&&401===e.response.status&&!J){J=!0;var n={refreshToken:JSON.parse(localStorage.getItem("user")).refreshToken,grantType:"refresh_token",id:JSON.parse(localStorage.getItem("user")).userInfo.id};F.post("token",n).then(function(e){localStorage.removeItem("user"),localStorage.setItem("user",u()(e.data)),J=!1}).then(function(e){return setTimeout(function(){return F(t)},500)}).catch(function(e){console.error("retry failed"),O.push({path:"Login"})})}return v.a.reject(e)});var P={state:{scriptureId:1,lang:null,verses:null,verseIndex:null,languages:null,chapters:null,deferredPrompt:null,verseOfDayId:null,verseOfDayImage:null},getters:{scriptureId:function(e){return null==e.scriptureId&&(e.scriptureId=localStorage.getItem("scriptureId")),e.scriptureId},lang:function(e){return null==e.lang&&(e.lang=localStorage.getItem("lang")),e.lang},languages:function(e){return null==e.languages&&(e.languages=JSON.parse(localStorage.getItem("languages"))),e.languages},chapters:function(e){return null==e.chapters&&(e.chapters=JSON.parse(localStorage.getItem("chapters"))),e.chapters},verses:function(e){return null==e.verses&&(e.verses=JSON.parse(localStorage.getItem("verses"))),e.verses},verseIndex:function(e){return null==e.verseIndex&&(e.verseIndex=localStorage.getItem("verseIndex"),null==e.verseIndex&&(e.verseIndex=0)),e.verseIndex},verse:function(e,t){return t.verses?t.verses[t.verseIndex]:null},verseText:function(e,t){if(t.verse)return t.verse.content[t.lang].title.replace(/\n/g,"<br />")},sanskritVerseText:function(e,t){if(t.verse)return t.verse.content.sa.title.replace(/\n/g,"<br />")}},mutations:{verses:function(e,t){e.verses=t,localStorage.setItem("verses",u()(e.verses))},lang:function(e,t){e.lang=t,localStorage.setItem("lang",e.lang)},languages:function(e,t){e.languages=t,localStorage.setItem("languages",u()(e.languages))},chapters:function(e,t){e.chapters=t,localStorage.setItem("chapters",u()(e.chapters))},incrementVerseIndex:function(e){700!==e.verseIndex&&(e.verseIndex=parseInt(e.verseIndex)+1,localStorage.setItem("verseIndex",e.verseIndex))},decrementVerseIndex:function(e){0!==e.verseIndex&&(e.verseIndex=parseInt(e.verseIndex)-1,localStorage.setItem("verseIndex",e.verseIndex))},verseIndex:function(e,t){e.verseIndex=t,localStorage.setItem("verseIndex",e.verseIndex)},resetState:function(e){e.scriptureId=1,e.lang=null,e.verses=null,e.verseIndex=null,e.isLoading=!1,e.error=null,localStorage.clear(),caches.keys().then(function(e){var t=!0,n=!1,r=void 0;try{for(var s,o=c()(e);!(t=(s=o.next()).done);t=!0){var a=s.value;caches.delete(a)}}catch(e){n=!0,r=e}finally{try{!t&&o.return&&o.return()}finally{if(n)throw r}}})}},actions:{fetchVerses:function(e,t){var n=e.commit,r=e.getters;n("isLoading",!0),n("lang",t.lang),F.get("verses",{params:{scriptureId:r.scriptureId,lang:r.lang}}).then(function(e){n("verses",e.data),n("isLoading",!1)}).catch(function(e){n("error",e),n("isLoading",!1)})},fetchLanguages:function(e,t){var n=e.commit;e.getters;n("isLoading",!0),F.get("languages").then(function(e){n("languages",e.data),n("isLoading",!1)}).catch(function(e){n("error",e),n("isLoading",!1)})},fetchChapters:function(e,t){var n=e.commit,r=e.getters;console.log("in fechchapters pre"),n("isLoading",!0),F.get("chapters",{params:{scriptureId:r.scriptureId,lang:r.lang}}).then(function(e){n("chapters",e.data),console.log("in fechchapters post",e.data),n("isLoading",!1)}).catch(function(e){n("error",e),n("isLoading",!1)})},incrementVerseIndex:function(e){(0,e.commit)("incrementVerseIndex")},decrementVerseIndex:function(e){(0,e.commit)("decrementVerseIndex")},changeChapter:function(e,t){var n=e.commit,r=e.getters;console.log("in change chapter action");for(var s=r.verses.length,o=0;o<s;o++){if(console.log(),r.verses[o].chapterId===t.chapterId){n("verseIndex",o);break}}},resetState:function(e){(0,e.commit)("resetState")},authtest:function(e){var t=e.commit;console.log("in authtest"),t("isLoading",!0),F.get("test/authtest").then(function(e){console.log("authtest response",e.data),t("isLoading",!1)}).catch(function(e){t("error",e),t("isLoading",!1)})}}},R={state:{user:null,helloNetwork:null},getters:{user:function(e){return null==e.user&&(e.user=JSON.parse(localStorage.getItem("user"))),e.user},helloNetwork:function(e){return null==e.helloNetwork&&(e.helloNetwork=localStorage.getItem("helloNetwork")),e.helloNetwork},isLoggedIn:function(e,t){return null!=t.user},token:function(e,t){return t.user?t.user.accessToken:null},helloToken:function(e,t){return null==e.helloToken&&(e.helloToken=JSON.parse(localStorage.getItem("hello"))?JSON.parse(localStorage.getItem("hello"))[t.helloNetwork].access_token:null),e.helloToken}},mutations:{user:function(e,t){e.user=t,localStorage.setItem("user",u()(e.user))},logout:function(e){localStorage.removeItem("user"),localStorage.removeItem("hello")},helloNetwork:function(e,t){e.helloNetwork=t,localStorage.setItem("helloNetwork",e.helloNetwork)}},actions:{authenticate:function(e,t){var n=e.commit,r=e.getters;console.log("in authenticate",t);var s=t.image?t.image.url:null,o=r.helloToken,a="google"===r.helloNetwork?1:2,i={thirdPartyUserId:t.id,name:t.name,image:s?encodeURI(s):null,email:t.email,gender:t.gender,thirdPartyAccessToken:o,GrantType:"implicit",notificationPlayerId:t.notificationPlayerId,tokenProvider:a};n("isLoading",!0),F.post("token",i).then(function(e){n("user",e.data),n("isLoading",!1)}).catch(function(e){n("error",e),n("isLoading",!1)})},logout:function(e){(0,e.commit)("logout",null)},helloNetwork:function(e,t){(0,e.commit)("helloNetwork",t)}}};r.a.use(a.a);var B=new a.a.Store({modules:{verse:P,user:R,shared:{state:{isLoading:!1,error:null},getters:{isLoading:function(e){return e.isLoading},error:function(e){return e.error}},mutations:{isLoading:function(e,t){e.isLoading=t},error:function(e,t){e.error=t}},actions:{isLoading:function(e,t){(0,e.commit)("isLoading",t)},error:function(e,t){(0,e.commit)("error",t)}}}}}),H={name:"App",data:function(){return{drawer:null,items:[{title:"Home",icon:"dashboard",link:"/"},{title:"Change Aadyay",icon:"list",link:"/chapters"},{title:"Change Language",icon:"build",link:"/languages"},{title:"Contact us",icon:"question_answer",link:"/about"}]}},computed:{isLoggedIn:function(){return this.$store.getters.isLoggedIn},user:function(){return this.$store.getters.user.userInfo},userImage:function(){return this.isLoggedIn?this.user.image:"static/images/default-profile.png"}},methods:{reset:function(){this.$store.dispatch("resetState"),this.$router.push({path:"/"}),window.location.reload(!0)},logout:function(){this.$store.dispatch("logout"),this.$router.push({path:"/"}),window.location.reload(!0)},login:function(){this.$router.push({path:"/login"})}}},U={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("v-app",[n("v-navigation-drawer",{attrs:{temporary:"",absolute:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list",{staticClass:"pa-1"},[n("v-list-tile",{attrs:{avatar:""}},[n("v-list-tile-avatar",[n("img",{attrs:{src:e.userImage}})]),e._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[e._v(e._s(e.isLoggedIn?e.user.name:"Guest"))])],1)],1)],1),e._v(" "),n("v-list",{staticClass:"pt-0",attrs:{dense:""}},[n("v-divider"),e._v(" "),e.isLoggedIn?e._e():n("v-list-tile",{on:{click:e.login}},[n("v-list-tile-action",[n("v-icon",[e._v("face")])],1),e._v(" "),n("v-list-tile-content",[e._v("Signin")])],1),e._v(" "),e.isLoggedIn?e._e():n("v-divider"),e._v(" "),e._l(e.items,function(t){return n("v-list-tile",{key:t.title,attrs:{to:t.link}},[n("v-list-tile-action",[n("v-icon",[e._v(e._s(t.icon))])],1),e._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[e._v(e._s(t.title))])],1)],1)}),e._v(" "),n("v-divider"),e._v(" "),e.isLoggedIn?n("v-list-tile",{on:{click:e.logout}},[n("v-list-tile-action",[n("v-icon",[e._v("exit_to_app")])],1),e._v(" "),n("v-list-tile-content",[e._v("Logout")])],1):e._e(),e._v(" "),n("v-list-tile",{on:{click:e.reset}},[n("v-list-tile-action",[n("v-icon",[e._v("refresh")])],1),e._v(" "),n("v-list-tile-content",[e._v("Reset/Repair")])],1)],2)],1),e._v(" "),n("v-toolbar",{attrs:{app:"",height:"45px"}},[n("v-toolbar-side-icon",{on:{click:function(t){e.drawer=!e.drawer}}}),e._v("\n    Easyvedaz\n  ")],1),e._v(" "),n("v-content",[n("router-view")],1),e._v(" "),n("v-footer",{attrs:{app:""}})],1)],1)},staticRenderFns:[]},q=n("VU/8")(H,U,!1,null,null,null).exports,z=(n("j1ja"),n("eh5q")),E=n("3Hnh");z.init({google:"929207747619-p8qfgimtsjvkc72ivkkev3p22iot9fo7.apps.googleusercontent.com",facebook:"2077680882478880"},{redirect_uri:"/"}),r.a.use(E,z),r.a.config.productionTip=!1,r.a.use(o.a),new r.a({el:"#app",store:B,router:O,render:function(e){return e(q)},created:function(){this.$store.getters.verse?O.push("verse"):O.push("languages")}})},ZJFw:function(e,t){},aJcG:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.03b8f17a95f9f072d62b.js.map