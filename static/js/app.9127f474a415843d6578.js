webpackJsonp([1],{"7zck":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("/5sW"),s=n("3EgV"),o=n.n(s),i=(n("7zck"),n("NYxO")),a=n("BO1k"),c=n.n(a),u=n("mvHQ"),l=n.n(u),d=n("//Fk"),v=n.n(d),g=n("mtWM"),m=n.n(g),f=n("/ocq"),h={computed:{languages:function(){return this.$store.getters.languages},isOnline:function(){return navigator.onLine}},mounted:function(){this.$store.dispatch("fetchLanguages")},methods:{selectLanguageAndFetchVerses:function(e){this.$store.dispatch("fetchVerses",{lang:e}),this.$router.push({path:"Verse"})}}},p={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",sm6:"","offset-sm3":""}},[n("img",{attrs:{src:"static/images/logos/easyvedaznamelogo-192x192.png",width:"120px"}}),e._v(" "),n("br"),n("br"),e._v(" "),n("h2",[e._v("||Bhagvad Gita||")]),e._v(" "),n("h3",[e._v("Select Language")]),n("br")]),e._v(" "),e._l(e.languages,function(t){return n("v-flex",{key:t.code,staticClass:"text-xs-center",attrs:{xs12:"",sm6:"","offset-sm3":""}},[n("v-btn",{attrs:{block:"",large:"",round:"",color:"error"},on:{click:function(n){e.selectLanguageAndFetchVerses(t.code)}}},[e._v(e._s(t.name))])],1)}),e._v(" "),n("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",sm6:"","offset-sm3":""}},[n("br"),e._v(" "),n("span",{staticClass:"messageText"},[e._v("\n            To change language make sure that you are connected to the internet.\n          ")])])],2)],1)},staticRenderFns:[]};var I=n("VU/8")(h,p,!1,function(e){n("aJcG")},null,null).exports,x={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",sm6:"","offset-sm3":""}},[n("h2",[e._v("||Bhagvad Gita||")]),e._v(" "),n("h3",[e._v("Select Adhyay / Chapter")])]),e._v(" "),e._l(e.chapters,function(t){return n("v-flex",{key:t.id,staticClass:"text-xs-center",attrs:{xs12:""}},[n("v-btn",{attrs:{block:"",large:"",round:"",color:"error"},on:{click:function(n){e.changeChapter(t.id)}}},[e._v(e._s(t.name))])],1)})],2)],1)},staticRenderFns:[]},_=n("VU/8")({computed:{chapters:function(){return this.$store.getters.chapters}},mounted:function(){this.$store.dispatch("fetchChapters")},methods:{changeChapter:function(e){this.$store.dispatch("changeChapter",{chapterId:e}),this.$router.push({path:"Verse"})}}},x,!1,null,null,null).exports,k={data:function(){return{show:!0,commentText:null,dialog:!1,commentIdToDelete:0}},mounted:function(){var e=this.$route.query.id;e&&this.$store.dispatch("changeIndexToVerseOfDay",{id:e}),this.$store.dispatch("fetchVerseComments")},computed:{currentVerseId:function(){return this.$store.getters.currentVerseId},isLike:function(){return this.$store.getters.verseByIndex.isLike},verseText:function(){return this.$store.getters.verseText},sanskritVerseText:function(){return this.$store.getters.sanskritVerseText},isLoading:function(){return this.$store.getters.isLoading},isLoggedIn:function(){return this.$store.getters.isLoggedIn},isLoadingVerses:function(){return this.$store.getters.isLoadingVerses},verseOfDayId:function(){return this.$store.getters.verseOfDayId},isVerseOfDay:function(){return this.verseOfDayId===this.currentVerseId},verseComments:function(){return this.$store.getters.verseComments},loggedinUserId:function(){return this.$store.getters.user?Number(this.$store.getters.user.userInfo.id):0}},methods:{nextVerse:function(){this.$store.dispatch("incrementVerseIndex"),this.$router.replace({query:{id:this.currentVerseId}}),this.$store.dispatch("fetchVerseComments")},previousVerse:function(){this.$store.dispatch("decrementVerseIndex"),this.$router.replace({query:{id:this.currentVerseId}}),this.$store.dispatch("fetchVerseComments")},resumeReading:function(){this.$store.dispatch("resumeReading"),this.$router.replace({query:{id:this.currentVerseId}}),this.$store.dispatch("fetchVerseComments")},submitVerseComment:function(){var e=this;console.log("in submit comment"),this.$store.dispatch("saveVerseComment",{commentText:this.commentText}).then(function(t){e.commentText=null})},deleteVerseCommentAlert:function(e){this.commentIdToDelete=e,this.dialog=!0},deleteVerseComment:function(){this.dialog=!1,this.$store.dispatch("deleteVerseComment",this.commentIdToDelete)},toggleVerseLike:function(e,t){console.log("in toggleverselike",e),this.$store.dispatch("toggleVerseLike",{verseId:e,isLike:t})},toggleVerseCommentLike:function(e,t){this.$store.dispatch("toggleVerseCommentLike",{commentId:e,isLike:t})}}},L={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{tabindex:"-1"},on:{keyup:[function(t){return"button"in t||!e._k(t.keyCode,"left",37,t.key)?"button"in t&&0!==t.button?null:void e.previousVerse(t):null},function(t){return"button"in t||!e._k(t.keyCode,"right",39,t.key)?"button"in t&&2!==t.button?null:void e.nextVerse(t):null}]}},[n("v-container",{staticClass:"mycontainer",attrs:{fluid:""}},[e.isLoadingVerses?e._e():n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",sm6:"","offset-sm3":""}},[n("v-slide-x-transition",[n("v-card",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}]},[n("v-card-title",[n("div",[e.isVerseOfDay?n("span",[e._v("||Shloka of the day||"),n("br")]):e._e(),e._v(" "),n("span",{staticClass:"primaryText",domProps:{innerHTML:e._s(e.verseText)}}),e._v(" "),n("br"),n("br"),e._v(" "),n("span",{staticClass:"secondaryText",domProps:{innerHTML:e._s(e.sanskritVerseText)}})])]),e._v(" "),n("v-card-actions",[n("v-layout",[n("v-flex",{attrs:{xs4:""}},[n("v-btn",{attrs:{flat:""},on:{click:function(t){e.previousVerse()}}},[n("v-icon",[e._v("arrow_back")]),e._v("Back")],1)],1),e._v(" "),n("v-flex",{attrs:{xs4:""}},[n("v-btn",{attrs:{icon:""},on:{click:function(t){e.toggleVerseLike(e.currentVerseId,e.isLike)}}},[e.isLike?n("v-icon",{attrs:{color:"pink"}},[e._v("favorite")]):n("v-icon",{attrs:{disabled:""}},[e._v("favorite")])],1)],1),e._v(" "),n("v-flex",{attrs:{xs4:""}},[e.isVerseOfDay?n("v-btn",{attrs:{flat:""},on:{click:function(t){e.resumeReading()}}},[n("v-icon",[e._v("settings_backup_restore")]),e._v("Resume")],1):e._e(),n("br")],1)],1)],1)],1)],1)],1),e._v(" "),n("v-flex",[n("v-btn",{staticClass:"fixedButton",attrs:{color:"error",dark:"",medium:"",fab:""},on:{click:function(t){e.nextVerse()}}},[n("v-icon",[e._v("arrow_forward")])],1)],1)],1),e._v(" "),e.isLoading?n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",sm6:"","offset-sm3":""}},[n("br"),n("br"),e._v(" "),n("v-progress-circular",{attrs:{indeterminate:"",size:100,color:"amber"}})],1)],1):e._e(),e._v(" "),e.isLoading?e._e():n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs12:""}},[n("div",{staticStyle:{"padding-bottom":"100px","padding-top":"20px"}},e._l(e.verseComments,function(t){return n("div",{key:t.id,staticStyle:{padding:"10px"}},[n("v-layout",[n("v-flex",{attrs:{xs2:""}},[n("v-avatar",[n("img",{attrs:{src:t.owner.image,alt:""}})])],1),e._v(" "),n("v-flex",{attrs:{xs10:""}},[n("h4",[e._v(e._s(t.owner.name))]),e._v(" "),n("div",[e._v(e._s(t.commentText))])])],1),e._v(" "),n("v-layout",[n("v-flex",{attrs:{"offset-xs8":"",xs2:""}},[n("v-btn",{attrs:{icon:""},on:{click:function(n){e.toggleVerseCommentLike(t.id,t.isLike)}}},[t.isLike?n("v-icon",{attrs:{color:"red"}},[e._v("thumb_up")]):n("v-icon",{attrs:{color:"grey lighten-1"}},[e._v("thumb_up")])],1)],1),e._v(" "),n("v-flex",{attrs:{xs2:""}},[t.owner.id===e.loggedinUserId?n("v-btn",{attrs:{icon:""},on:{click:function(n){e.deleteVerseCommentAlert(t.id)}}},[n("v-icon",{attrs:{color:"grey lighten-1"}},[e._v("delete")])],1):e._e()],1)],1),e._v(" "),n("hr")],1)}))])],1),e._v(" "),n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs12:""}},[n("form",{on:{submit:function(t){t.preventDefault(),e.submit(t)}}},[n("div",{staticClass:"commentTextbox"},[n("v-text-field",{attrs:{flat:"","multi-line":"",rows:"1","single-line":"",counter:"300","auto-grow":"",label:"Comment","append-icon":"send","append-icon-cb":e.submitVerseComment},model:{value:e.commentText,callback:function(t){e.commentText=t},expression:"commentText"}})],1)])])],1),e._v(" "),[n("v-layout",{attrs:{row:"","justify-center":""}},[n("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[e._v("Delete")]),e._v(" "),n("v-card-text",[e._v("Do you want to delete the comment?")]),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"green darken-1",flat:""},nativeOn:{click:function(t){e.dialog=!1}}},[e._v("No")]),e._v(" "),n("v-btn",{attrs:{color:"green darken-1",flat:""},nativeOn:{click:function(t){e.deleteVerseComment()}}},[e._v("Yes")])],1)],1)],1)],1)]],2)],1)},staticRenderFns:[]};var V=n("VU/8")(k,L,!1,function(e){n("gQjK")},"data-v-1d986d8c",null).exports,y={mounted:function(){window.gapi.signin2.render("google-signin-btn",{onsuccess:this.onSignIn})},methods:{onSignIn:function(e){this.$store.dispatch("authNetwork","google");var t=e.getAuthResponse().id_token,n=this;this.$store.dispatch("authenticate",t).then(function(){n.$router.go(-1),window.OneSignal&&window.OneSignal.isPushNotificationsEnabled().then(function(e){e?window.OneSignal.getUserId().then(function(e){n.$store.dispatch("submitPlayerId",e),n.$router.go(-1)}):window.OneSignal.push(function(){window.OneSignal.registerForPushNotifications({modalPrompt:!0}),window.OneSignal.setSubscription(!0),window.OneSignal.getUserId().then(function(e){n.$store.dispatch("submitPlayerId",e)})})})})}}},w={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("v-container",{staticClass:"mycontainer"},[t("v-layout",{attrs:{row:"",wrap:""}},[t("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",sm6:"","offset-sm3":""}},[t("br"),t("br"),this._v("Login/Register using Google/Gmail Account"),t("br"),t("br"),this._v(" "),t("div",{attrs:{id:"google-signin-btn"}})])],1)],1)],1)},staticRenderFns:[]},b=n("VU/8")(y,w,!1,null,null,null).exports,C={render:function(){var e=this.$createElement,t=this._self._c||e;return t("v-container",{staticClass:"mycontainer"},[t("v-layout",{attrs:{row:"",wrap:""}},[t("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",sm6:"","offset-sm3":""}},[t("v-card",[t("v-card-title",[this._v("\r\n          For any queries please mail us on support@easyvedaz.com\r\n        ")])],1)],1)],1)],1)},staticRenderFns:[]},S=n("VU/8")(null,C,!1,null,null,null).exports;r.a.use(f.a);var $=new f.a({routes:[{path:"/",name:"Home",component:V},{path:"/Languages",name:"Languages",component:I},{path:"/Chapters",name:"Chapters",component:_},{path:"/Verse",name:"Verse",component:V},{path:"/Login",name:"Login",component:b},{path:"/About",name:"About",component:S}]}),O=m.a.create({baseURL:"https://api.easyvedaz.com/api"});O.interceptors.request.use(function(e){var t=JSON.parse(localStorage.getItem("user")),n=t?t.accessToken:null;return e.headers.authorization=n?"Bearer "+n:"",e},function(e){return v.a.reject(e)});var T=!1;O.interceptors.response.use(function(e){return e},function(e){var t=e.config;if(e.config&&e.response&&401===e.response.status&&!T){if(!localStorage.getItem("user"))return console.error("registration required for this action"),void $.push({path:"Login"});T=!0;var n={refreshToken:JSON.parse(localStorage.getItem("user")).refreshToken,grantType:"refresh_token",id:JSON.parse(localStorage.getItem("user")).userInfo.id};O.post("token",n).then(function(e){localStorage.removeItem("user"),localStorage.setItem("user",l()(e.data)),T=!1}).then(function(e){return setTimeout(function(){return O(t)},500)}).catch(function(e){console.error("retry failed"),$.push({path:"Login"})})}return v.a.reject(e)});var N={state:{scriptureId:1,lang:null,verses:null,verseIndex:null,verseIndexBackup:null,languages:null,chapters:null,deferredPrompt:null,verseOfDayId:null,verseImage:null,isLoadingVerses:!1},getters:{scriptureId:function(e){return null==e.scriptureId&&(e.scriptureId=localStorage.getItem("scriptureId")),e.scriptureId},lang:function(e){return null==e.lang&&(e.lang=localStorage.getItem("lang")),e.lang},languages:function(e){return null==e.languages&&(e.languages=JSON.parse(localStorage.getItem("languages"))),e.languages},chapters:function(e){return null==e.chapters&&(e.chapters=JSON.parse(localStorage.getItem("chapters"))),e.chapters},verses:function(e){return null==e.verses&&(e.verses=JSON.parse(localStorage.getItem("verses"))),e.verses},verseIndex:function(e){return null==e.verseIndex&&(e.verseIndex=localStorage.getItem("verseIndex"),null==e.verseIndex&&(e.verseIndex=0,localStorage.setItem("verseIndex",0))),e.verseIndex},verseIndexBackup:function(e){return null==e.verseIndexBackup&&(e.verseIndexBackup=localStorage.getItem("verseIndexBackup"),null==e.verseIndexBackup&&(e.verseIndexBackup=0)),e.verseIndexBackup},verseByIndex:function(e,t){return t.verses?t.verses[t.verseIndex]:null},currentVerseId:function(e,t){return t.verseByIndex.id},verseText:function(e,t){if(t.verseByIndex)return t.verseByIndex.content[t.lang].title.replace(/\n/g,"<br />")},sanskritVerseText:function(e,t){if(t.verseByIndex)return t.verseByIndex.content.sa.title.replace(/\n/g,"<br />")},verseOfDayId:function(e){return null==e.verseOfDayId&&(e.verseOfDayId=localStorage.getItem("verseOfDayId")),Number(e.verseOfDayId)},isLoadingVerses:function(e){return e.isLoadingVerses}},mutations:{verses:function(e,t){e.verses=t,localStorage.setItem("verses",l()(e.verses))},lang:function(e,t){e.lang=t,localStorage.setItem("lang",e.lang)},languages:function(e,t){e.languages=t,localStorage.setItem("languages",l()(e.languages))},chapters:function(e,t){e.chapters=t,localStorage.setItem("chapters",l()(e.chapters))},incrementVerseIndex:function(e){700!==e.verseIndex&&(e.verseIndex=parseInt(e.verseIndex)+1,localStorage.setItem("verseIndex",e.verseIndex))},decrementVerseIndex:function(e){0!==e.verseIndex&&(e.verseIndex=parseInt(e.verseIndex)-1,localStorage.setItem("verseIndex",e.verseIndex))},verseIndex:function(e,t){e.verseIndex=t,localStorage.setItem("verseIndex",e.verseIndex)},verseIndexBackup:function(e,t){e.verseIndexBackup=t,localStorage.setItem("verseIndexBackup",e.verseIndexBackup)},verseOfDayId:function(e,t){e.verseOfDayId=t,localStorage.setItem("verseOfDayId",e.verseOfDayId)},resetState:function(e){e.scriptureId=1,e.lang=null,e.verses=null,e.verseIndex=null,e.isLoading=!1,e.error=null,localStorage.clear(),caches.keys().then(function(e){var t=!0,n=!1,r=void 0;try{for(var s,o=c()(e);!(t=(s=o.next()).done);t=!0){var i=s.value;caches.delete(i)}}catch(e){n=!0,r=e}finally{try{!t&&o.return&&o.return()}finally{if(n)throw r}}})},toggleVerseLike:function(e,t){console.log("in toggle verse like mutation");for(var n=0;n<e.verses.length;n++)if(e.verses[n].id===t){e.verses[n].isLike=!e.verses[n].isLike;break}},isLoadingVerses:function(e,t){e.isLoadingVerses=t}},actions:{fetchVerses:function(e,t){var n=e.commit,r=e.getters;n("isLoading",!0),n("isLoadingVerses",!0),n("lang",t.lang),O.get("verses",{params:{scriptureId:r.scriptureId,lang:r.lang}}).then(function(e){n("verses",e.data),n("isLoading",!1),n("isLoadingVerses",!1)}).catch(function(e){n("error",e),n("isLoading",!1),n("isLoadingVerses",!1)})},fetchLanguages:function(e,t){var n=e.commit;e.getters;n("isLoading",!0),O.get("languages").then(function(e){n("languages",e.data),n("isLoading",!1)}).catch(function(e){n("error",e),n("isLoading",!1)})},fetchChapters:function(e,t){var n=e.commit,r=e.getters;n("isLoading",!0),O.get("chapters",{params:{scriptureId:r.scriptureId,lang:r.lang}}).then(function(e){n("chapters",e.data),n("isLoading",!1)}).catch(function(e){n("error",e),n("isLoading",!1)})},incrementVerseIndex:function(e){(0,e.commit)("incrementVerseIndex")},decrementVerseIndex:function(e){(0,e.commit)("decrementVerseIndex")},verseIndex:function(e,t){(0,e.commit)("verseIndex",t)},changeChapter:function(e,t){for(var n=e.commit,r=e.getters,s=r.verses.length,o=0;o<s;o++){if(r.verses[o].chapterId===t.chapterId){n("verseIndex",o);break}}},resetState:function(e){(0,e.commit)("resetState")},changeIndexToVerseOfDay:function(e,t){var n=e.commit,r=e.getters,s=Number(t.id);n("verseOfDayId",s);for(var o=0,i=0;i<r.verses.length;i++)if(r.verses[i].id===s){o=i;break}n("verseIndexBackup",r.verseIndex),n("verseIndex",o)},resumeReading:function(e){var t=e.commit,n=e.getters;t("verseOfDayId",null),t("verseIndex",n.verseIndexBackup)},toggleVerseLike:function(e,t){var n=e.commit,r=e.getters,s="verses/"+r.currentVerseId+"/likes";!0===t.isLike?O.delete(s):O.post(s),n("toggleVerseLike",r.currentVerseId)}}},B={state:{user:null,authNetwork:null},getters:{user:function(e){return null==e.user&&(e.user=JSON.parse(localStorage.getItem("user"))),e.user},authNetwork:function(e){return null==e.authNetwork&&(e.authNetwork=localStorage.getItem("authNetwork")),e.authNetwork},isLoggedIn:function(e,t){return null!=t.user},token:function(e,t){return t.user?t.user.accessToken:null}},mutations:{user:function(e,t){e.user=t,localStorage.setItem("user",l()(e.user))},logout:function(e){localStorage.removeItem("user"),localStorage.removeItem("authNetwork")},authNetwork:function(e,t){e.authNetwork=t,localStorage.setItem("authNetwork",e.authNetwork)}},actions:{authenticate:function(e,t){var n=e.commit,r=e.getters;return new v.a(function(e,s){var o="google"===r.authNetwork?1:2,i={thirdPartyAccessToken:t,GrantType:"implicit",notificationPlayerId:t.notificationPlayerId,tokenProvider:o};n("isLoading",!0),O.post("token",i).then(function(t){n("user",t.data),n("isLoading",!1),e()}).catch(function(e){n("error",e),n("isLoading",!1),s(e)})})},logout:function(e){(0,e.commit)("logout",null)},authNetwork:function(e,t){(0,e.commit)("authNetwork",t)},submitPlayerId:function(e,t){var n=e.commit,r=(e.getters,{notificationPlayerId:t});O.post("pushnotification/subscriptions",r).then(function(e){}).catch(function(e){n("error",e),console.log(e)})}}},D={state:{verseComments:[]},getters:{verseComments:function(e){return e.verseComments}},mutations:{verseComments:function(e,t){e.verseComments=t},pushNewVerseComment:function(e,t){e.verseComments.unshift(t)},removeVerseComment:function(e,t){for(var n=0;n<e.verseComments.length;n++)if(e.verseComments[n].id===t){e.verseComments.splice(n,1);break}},toggleVerseCommentLike:function(e,t){for(var n=0;n<e.verseComments.length;n++)if(e.verseComments[n].id===t){e.verseComments[n].isLike=!+e.verseComments[n].isLike;break}}},actions:{fetchVerseComments:function(e,t){var n=e.commit,r=e.getters;console.log("online",navigator.onLine),navigator.onLine&&(n("isLoading",!0),O.get("verses/"+r.currentVerseId+"/comments",{params:{lang:r.lang}}).then(function(e){n("verseComments",e.data),n("isLoading",!1)}).catch(function(e){n("error",e),n("isLoading",!1)}))},saveVerseComment:function(e,t){var n=e.commit,r=e.getters;return new v.a(function(e,s){n("isLoading",!0);var o={verseId:r.currentVerseId,commentText:t.commentText,lang:r.lang},i="verses/"+r.currentVerseId+"/comments";O.post(i,o).then(function(t){n("pushNewVerseComment",t.data),n("isLoading",!1),e()}).catch(function(e){n("error",e),n("isLoading",!1),s(e)})})},deleteVerseComment:function(e,t){var n=e.commit,r=e.getters;n("isLoading",!0);var s="verses/"+r.currentVerseId+"/comments/"+t;O.delete(s).then(function(e){n("removeVerseComment",t),n("isLoading",!1)}).catch(function(e){n("error",e),n("isLoading",!1)})},toggleVerseCommentLike:function(e,t){var n=e.commit,r="verses/"+e.getters.currentVerseId+"/comments/"+t.commentId+"/likes";!0===t.isLike?O.delete(r):O.post(r),n("toggleVerseCommentLike",t.commentId)}}};r.a.use(i.a);var R=new i.a.Store({modules:{verse:N,user:B,shared:{state:{isLoading:!1,error:null},getters:{isLoading:function(e){return e.isLoading},error:function(e){return e.error}},mutations:{isLoading:function(e,t){e.isLoading=t},error:function(e,t){e.error=t}},actions:{isLoading:function(e,t){(0,e.commit)("isLoading",t)},error:function(e,t){(0,e.commit)("error",t)}}},verseComments:D}}),P={name:"App",data:function(){return{drawer:null,items:[{title:"Home",icon:"dashboard",link:"/"},{title:"Change Aadyay",icon:"list",link:"/chapters"},{title:"Change Language",icon:"build",link:"/languages"},{title:"Contact us",icon:"question_answer",link:"/about"}]}},computed:{isLoggedIn:function(){return this.$store.getters.isLoggedIn},user:function(){return this.$store.getters.user.userInfo},userImage:function(){return this.isLoggedIn?this.user.image:"static/images/default-profile.png"}},methods:{reset:function(){this.$store.dispatch("resetState"),this.$router.push({path:"/"}),window.location.reload(!0)},logout:function(){this.$store.dispatch("logout"),this.$router.push({path:"/"}),window.location.reload(!0)},login:function(){this.$router.push({path:"/login"})}}},A={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("v-app",[n("v-navigation-drawer",{attrs:{temporary:"",absolute:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list",{staticClass:"pa-1"},[n("v-list-tile",{attrs:{avatar:""}},[n("v-list-tile-avatar",[e.userImage?n("div",[n("img",{staticStyle:{width:"40px"},attrs:{src:e.userImage}})]):e._e(),e._v(" "),e.userImage?e._e():n("div",[n("img",{staticStyle:{width:"40px"},attrs:{src:"https://www.vccircle.com/wp-content/uploads/2017/03/default-profile.png"}})])]),e._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[e._v(e._s(e.isLoggedIn?e.user.name:"Guest"))])],1)],1)],1),e._v(" "),n("v-list",{staticClass:"pt-0",attrs:{dense:""}},[n("v-divider"),e._v(" "),e.isLoggedIn?e._e():n("v-list-tile",{on:{click:e.login}},[n("v-list-tile-action",[n("v-icon",[e._v("face")])],1),e._v(" "),n("v-list-tile-content",[e._v("Signin")])],1),e._v(" "),e.isLoggedIn?e._e():n("v-divider"),e._v(" "),e._l(e.items,function(t){return n("v-list-tile",{key:t.title,attrs:{to:t.link}},[n("v-list-tile-action",[n("v-icon",[e._v(e._s(t.icon))])],1),e._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[e._v(e._s(t.title))])],1)],1)}),e._v(" "),n("v-divider"),e._v(" "),e.isLoggedIn?n("v-list-tile",{on:{click:e.logout}},[n("v-list-tile-action",[n("v-icon",[e._v("exit_to_app")])],1),e._v(" "),n("v-list-tile-content",[e._v("Logout")])],1):e._e(),e._v(" "),n("v-list-tile",{on:{click:e.reset}},[n("v-list-tile-action",[n("v-icon",[e._v("refresh")])],1),e._v(" "),n("v-list-tile-content",[e._v("Reset/Repair")])],1)],2)],1),e._v(" "),n("v-toolbar",{attrs:{app:"",height:"45px"}},[n("v-toolbar-side-icon",{on:{click:function(t){e.drawer=!e.drawer}}}),e._v("\n    Easyvedaz\n  ")],1),e._v(" "),n("v-content",[n("router-view")],1)],1)],1)},staticRenderFns:[]},F=n("VU/8")(P,A,!1,null,null,null).exports;n("j1ja");r.a.config.productionTip=!1,r.a.use(o.a),new r.a({el:"#app",store:R,router:$,render:function(e){return e(F)},created:function(){this.$store.getters.verseByIndex||$.push("languages")}})},aJcG:function(e,t){},gQjK:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.9127f474a415843d6578.js.map