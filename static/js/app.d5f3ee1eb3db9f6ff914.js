webpackJsonp([1],{"7zck":function(e,t){},"8bth":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("/5sW"),r=n("3EgV"),o=n.n(r),i=(n("7zck"),n("NYxO")),a=n("BO1k"),c=n.n(a),l=n("mvHQ"),u=n.n(l),m=n("//Fk"),v=n.n(m),d=n("mtWM"),g=n.n(d),f=n("/ocq"),p={computed:{languages:function(){return this.$store.getters.languages},isOnline:function(){return navigator.onLine}},mounted:function(){this.$store.dispatch("fetchLanguages")},methods:{selectLanguageAndFetchVerses:function(e){this.$store.dispatch("fetchVerses",{lang:e}),this.$router.push({path:"Verse"})}}},h={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",sm6:"","offset-sm3":""}},[n("img",{attrs:{src:"static/images/logos/easyvedaznamelogo-192x192.png",width:"120px"}}),e._v(" "),n("br"),n("br"),e._v(" "),n("h2",[e._v("||Bhagvad Gita||")]),e._v(" "),n("h3",[e._v("Select Language")]),n("br")]),e._v(" "),e._l(e.languages,function(t){return n("v-flex",{key:t.code,staticClass:"text-xs-center",attrs:{xs12:"",sm6:"","offset-sm3":""}},[n("v-btn",{attrs:{block:"",large:"",round:"",color:"error"},on:{click:function(n){e.selectLanguageAndFetchVerses(t.code)}}},[e._v(e._s(t.name))])],1)}),e._v(" "),n("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",sm6:"","offset-sm3":""}},[n("br"),e._v(" "),n("span",{staticClass:"messageText"},[e._v("\n            To change language make sure that you are connected to the internet.\n          ")])])],2)],1)},staticRenderFns:[]};var I=n("VU/8")(p,h,!1,function(e){n("aJcG")},null,null).exports,x={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",sm6:"","offset-sm3":""}},[n("h2",[e._v("||Bhagvad Gita||")]),e._v(" "),n("h3",[e._v("Select Adhyay / Chapter")])]),e._v(" "),e._l(e.chapters,function(t){return n("v-flex",{key:t.id,staticClass:"text-xs-center",attrs:{xs12:""}},[n("v-btn",{attrs:{block:"",large:"",round:"",color:"error"},on:{click:function(n){e.changeChapter(t.id)}}},[e._v(e._s(t.name))])],1)})],2)],1)},staticRenderFns:[]},k=n("VU/8")({computed:{chapters:function(){return this.$store.getters.chapters}},mounted:function(){this.$store.dispatch("fetchChapters")},methods:{changeChapter:function(e){this.$store.dispatch("changeChapter",{chapterId:e}),this.$router.push({path:"Verse"})}}},x,!1,null,null,null).exports,C={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{row:"",wrap:"","align-center":"","justify-center":""}},[n("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",sm6:"","offset-sm3":""}},[n("v-dialog",{attrs:{"align-center":"","justify-center":"","max-width":"40px"},model:{value:e.showProgress,callback:function(t){e.showProgress=t},expression:"showProgress"}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"red"}})],1)],1)],1)},staticRenderFns:[]};var _={computed:{currentVerseId:function(){return this.$store.getters.currentVerseId},isLike:function(){return this.$store.getters.verseByIndex.isLike},verseText:function(){return this.$store.getters.verseText},sanskritVerseText:function(){return this.$store.getters.sanskritVerseText},verseOfDayId:function(){return this.$store.getters.verseOfDayId},isVerseOfDay:function(){return this.verseOfDayId===this.currentVerseId},isLoadingVerses:function(){return this.$store.getters.isLoadingVerses}},methods:{nextVerse:function(){this.$store.dispatch("incrementVerseIndex"),this.$router.replace({query:{id:this.currentVerseId}}),this.$store.dispatch("fetchVerseComments")},previousVerse:function(){this.$store.dispatch("decrementVerseIndex"),this.$router.replace({query:{id:this.currentVerseId}}),this.$store.dispatch("fetchVerseComments")},resumeReading:function(){this.$store.dispatch("resumeReading"),this.$router.replace({query:{id:this.currentVerseId}}),this.$store.dispatch("fetchVerseComments")},toggleVerseLike:function(e,t){console.log("in toggleverselike",e),this.$store.dispatch("toggleVerseLike",{verseId:e,isLike:t})}}},y={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",sm6:"","offset-sm3":""}},[n("div",{attrs:{tabindex:"-1"},on:{keyup:[function(t){return"button"in t||!e._k(t.keyCode,"left",37,t.key)?"button"in t&&0!==t.button?null:void e.previousVerse(t):null},function(t){return"button"in t||!e._k(t.keyCode,"right",39,t.key)?"button"in t&&2!==t.button?null:void e.nextVerse(t):null}]}},[n("v-card",[n("v-card-title",[n("div",[e.isVerseOfDay?n("span",[e._v("||Shloka of the day||"),n("br")]):e._e(),e._v(" "),n("span",{staticClass:"primaryText",domProps:{innerHTML:e._s(e.verseText)}}),e._v(" "),n("br"),n("br"),e._v(" "),n("span",{staticClass:"secondaryText",domProps:{innerHTML:e._s(e.sanskritVerseText)}})])]),e._v(" "),n("v-card-actions",[n("v-layout",[n("v-flex",{attrs:{xs4:""}},[n("v-btn",{attrs:{flat:""},on:{click:function(t){e.previousVerse()}}},[n("v-icon",[e._v("arrow_back")]),e._v("Back")],1)],1),e._v(" "),n("v-flex",{attrs:{xs4:""}},[n("v-btn",{attrs:{icon:""},on:{click:function(t){e.toggleVerseLike(e.currentVerseId,e.isLike)}}},[e.isLike?n("v-icon",{attrs:{color:"pink"}},[e._v("favorite")]):n("v-icon",{attrs:{disabled:""}},[e._v("favorite")])],1)],1),e._v(" "),n("v-flex",{attrs:{xs4:""}},[e.isVerseOfDay?n("v-btn",{attrs:{flat:""},on:{click:function(t){e.resumeReading()}}},[n("v-icon",[e._v("settings_backup_restore")]),e._v("Resume")],1):e._e(),n("br")],1)],1)],1)],1)],1)])],1)},staticRenderFns:[]};var V={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",[n("v-flex",[n("v-btn",{staticClass:"fixedButton",attrs:{color:"error",dark:"",medium:"",fab:""},on:{click:function(t){e.nextVerse()}}},[n("v-icon",[e._v("arrow_forward")])],1)],1)],1)},staticRenderFns:[]};var L={props:["parentCommentId"],data:function(){return{commentText:""}},computed:{labelText:function(){return this.parentCommentId?"Reply":"Comment"}},methods:{submitVerseComment:function(){var e=this;console.log("in submit",this.parentCommentId),this.$store.dispatch("saveVerseComment",{commentText:this.commentText,parentCommentId:this.parentCommentId}).then(function(t){e.commentText=null})}}},b={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs12:""}},[n("form",{on:{submit:function(t){t.preventDefault(),e.submit(t)}}},[n("div",{class:{commentTextbox:!e.parentCommentId}},[n("v-text-field",{attrs:{flat:"","multi-line":"",rows:"1","single-line":"",counter:"300","auto-grow":"",label:e.labelText,"append-icon":"send","append-icon-cb":e.submitVerseComment},model:{value:e.commentText,callback:function(t){e.commentText=t},expression:"commentText"}})],1)])])],1)},staticRenderFns:[]};var w={props:["isReply"],data:function(){return{dialogDeleteComment:!1,commentIdToDelete:0,parentCommentId:null}},computed:{verseComments:function(){return this.isReply?this.$store.getters.verseCommentReplies:this.$store.getters.verseComments},loggedinUserId:function(){return this.$store.getters.user?Number(this.$store.getters.user.userInfo.id):0}},methods:{deleteVerseCommentAlert:function(e){this.commentIdToDelete=e,this.dialogDeleteComment=!0},deleteVerseComment:function(){this.dialogDeleteComment=!1,this.$store.dispatch("deleteVerseComment",{commentId:this.commentIdToDelete,isReply:this.isReply})},toggleVerseCommentLike:function(e,t){this.$store.dispatch("toggleVerseCommentLike",{commentId:e,isLike:t,isReply:this.isReply})},toggleVerseCommentDislike:function(e,t){console.log("toggleVerseCommentDislike",e,t),this.$store.dispatch("toggleVerseCommentDislike",{commentId:e,isLike:t,isReply:this.isReply})}}},S={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs12:""}},[n("div",{staticStyle:{"padding-bottom":"100px","padding-top":"20px"}},e._l(e.verseComments,function(t){return n("div",{key:t.id,staticStyle:{padding:"10px"}},[n("v-layout",[n("v-flex",{attrs:{xs2:""}},[n("v-avatar",[n("img",{attrs:{src:t.owner.image,alt:""}})])],1),e._v(" "),n("v-flex",{attrs:{xs10:""}},[n("h4",[e._v(e._s(t.owner.name))]),e._v(" "),n("div",[e._v(e._s(t.commentText))])])],1),e._v(" "),n("v-layout",[n("v-flex",{attrs:{"offset-xs2":"",xs2:""}},[n("v-btn",{attrs:{icon:""},on:{click:function(n){e.toggleVerseCommentLike(t.id,t.isLike)}}},[n("strong",[e._v(e._s(t.likeCount))]),e._v("  \r\n                  "),t.isLike?n("v-icon",{attrs:{color:"red"}},[e._v("thumb_up")]):n("v-icon",{attrs:{color:"grey lighten-1"}},[e._v("thumb_up")])],1)],1),e._v(" "),n("v-flex",{attrs:{x3:""}},[n("v-btn",{attrs:{icon:""},on:{click:function(n){e.toggleVerseCommentDislike(t.id,t.isLike)}}},[n("strong",[e._v(e._s(t.dislikeCount))]),e._v("  \r\n                  "),!1===t.isLike?n("v-icon",{attrs:{color:"black"}},[e._v("thumb_down")]):n("v-icon",{attrs:{color:"grey lighten-1"}},[e._v("thumb_down")])],1)],1),e._v(" "),e.isReply?e._e():n("v-flex",{attrs:{xs3:""}},[n("v-btn",{attrs:{icon:""},on:{click:function(n){e.$emit("openCommentReply",t.id)}}},[n("v-icon",{attrs:{color:"grey"}},[e._v("reply")]),e._v("  \r\n                  "),n("strong",[e._v(e._s(t.replyCount))])],1)],1),e._v(" "),n("v-flex",{attrs:{xs2:""}},[t.owner.id===e.loggedinUserId?n("v-btn",{attrs:{icon:""},on:{click:function(n){e.deleteVerseCommentAlert(t.id)}}},[n("v-icon",{attrs:{color:"grey lighten-1"}},[e._v("delete")])],1):e._e()],1)],1),e._v(" "),n("hr")],1)}))])],1),e._v(" "),n("v-layout",{attrs:{row:"","justify-center":""}},[n("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:e.dialogDeleteComment,callback:function(t){e.dialogDeleteComment=t},expression:"dialogDeleteComment"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[e._v("Delete")]),e._v(" "),n("v-card-text",[e._v("Do you want to delete the comment?")]),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"green darken-1",flat:""},nativeOn:{click:function(t){e.dialogDeleteComment=!1}}},[e._v("No")]),e._v(" "),n("v-btn",{attrs:{color:"green darken-1",flat:""},nativeOn:{click:function(t){e.deleteVerseComment()}}},[e._v("Yes")])],1)],1)],1)],1)],1)},staticRenderFns:[]};var R={components:{tatvaLoader:n("VU/8")({computed:{showProgress:function(){return this.isSaving||this.isLoading||this.isLoadingVerses},isLoading:function(){return this.$store.getters.isLoading},isSaving:function(){return this.$store.getters.isSaving},isLoadingVerses:function(){return this.$store.getters.isLoadingVerses}}},C,!1,function(e){n("8bth")},"data-v-59217f22",null).exports,verseText:n("VU/8")(_,y,!1,function(e){n("TPiX")},"data-v-5ed254fa",null).exports,nextVerseButton:n("VU/8")({methods:{nextVerse:function(){this.$store.dispatch("incrementVerseIndex"),this.$router.replace({query:{id:this.currentVerseId}}),this.$store.dispatch("fetchVerseComments")}}},V,!1,function(e){n("wl05")},"data-v-71b36928",null).exports,tatvaCommentTextbox:n("VU/8")(L,b,!1,function(e){n("zWRL")},"data-v-874836ee",null).exports,tatvaComments:n("VU/8")(w,S,!1,function(e){n("w0mO")},"data-v-52c32aa4",null).exports},data:function(){return{isReply:!1,parentCommentId:null}},mounted:function(){var e=this.$route.query.id;e&&this.$store.dispatch("changeIndexToVerseOfDay",{id:e}),this.$store.dispatch("fetchVerseComments")},computed:{currentVerseId:function(){return this.$store.getters.currentVerseId},isLoggedIn:function(){return this.$store.getters.isLoggedIn},verseCommentReplies:function(){return this.$store.getters.verseCommentReplies}},methods:{openCommentReplyDialog:function(e){console.log("event fired",e),this.isReply=!0,this.parentCommentId=e,this.$store.dispatch("fetchVerseCommentReplies",e)}}},$={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{tabindex:"-1"},on:{keyup:[function(t){return"button"in t||!e._k(t.keyCode,"left",37,t.key)?"button"in t&&0!==t.button?null:void e.previousVerse(t):null},function(t){return"button"in t||!e._k(t.keyCode,"right",39,t.key)?"button"in t&&2!==t.button?null:void e.nextVerse(t):null}]}},[n("v-container",{staticClass:"mycontainer",attrs:{fluid:""}},[n("tatva-loader"),e._v(" "),n("verse-text"),e._v(" "),n("next-verse-button"),e._v(" "),n("tatva-comments",{on:{openCommentReply:e.openCommentReplyDialog}}),e._v(" "),n("v-dialog",{staticStyle:{margin:"50px",padding:"20px"},attrs:{fullscreen:"",persistent:"","max-width":"290"},model:{value:e.isReply,callback:function(t){e.isReply=t},expression:"isReply"}},[n("v-card",[n("v-toolbar",{attrs:{card:"",dark:"",color:"primary"}},[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{icon:"",dark:""},nativeOn:{click:function(t){e.isReply=!1}}},[n("v-icon",[e._v("close")])],1)],1),e._v(" "),n("div",{staticStyle:{padding:"10px"}},[n("tatva-comment-textbox",{attrs:{parentCommentId:e.parentCommentId}})],1),e._v(" "),n("tatva-comments",{attrs:{isReply:"true"}})],1)],1),e._v(" "),n("tatva-comment-textbox")],1)],1)},staticRenderFns:[]};var T=n("VU/8")(R,$,!1,function(e){n("sGGI")},"data-v-6a4db002",null).exports,O={mounted:function(){window.gapi.signin2.render("google-signin-btn",{onsuccess:this.onSignIn})},methods:{onSignIn:function(e){this.$store.dispatch("authNetwork","google");var t=e.getAuthResponse().id_token,n=this;this.$store.dispatch("authenticate",t).then(function(){n.$router.go(-1),window.OneSignal&&window.OneSignal.isPushNotificationsEnabled().then(function(e){e?window.OneSignal.getUserId().then(function(e){n.$store.dispatch("submitPlayerId",e),n.$router.go(-1)}):window.OneSignal.push(function(){window.OneSignal.registerForPushNotifications({modalPrompt:!0}),window.OneSignal.setSubscription(!0),window.OneSignal.getUserId().then(function(e){n.$store.dispatch("submitPlayerId",e)})})})})}}},D={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("v-container",{staticClass:"mycontainer"},[t("v-layout",{attrs:{row:"",wrap:""}},[t("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",sm6:"","offset-sm3":""}},[t("br"),t("br"),this._v("Login/Register using Google/Gmail Account"),t("br"),t("br"),this._v(" "),t("div",{attrs:{id:"google-signin-btn"}})])],1)],1)],1)},staticRenderFns:[]},N=n("VU/8")(O,D,!1,null,null,null).exports,B={render:function(){var e=this.$createElement,t=this._self._c||e;return t("v-container",{staticClass:"mycontainer"},[t("v-layout",{attrs:{row:"",wrap:""}},[t("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",sm6:"","offset-sm3":""}},[t("v-card",[t("v-card-title",[this._v("\r\n          For any queries please mail us on support@easyvedaz.com\r\n        ")])],1)],1)],1)],1)},staticRenderFns:[]},P=n("VU/8")(null,B,!1,null,null,null).exports;s.a.use(f.a);var F=new f.a({routes:[{path:"/",name:"Home",component:T},{path:"/Languages",name:"Languages",component:I},{path:"/Chapters",name:"Chapters",component:k},{path:"/Verse",name:"Verse",component:T},{path:"/Login",name:"Login",component:N},{path:"/About",name:"About",component:P}]}),U=g.a.create({baseURL:"https://api.easyvedaz.com/api"});U.interceptors.request.use(function(e){var t=JSON.parse(localStorage.getItem("user")),n=t?t.accessToken:null;return e.headers.authorization=n?"Bearer "+n:"",e},function(e){return v.a.reject(e)});var E=!1;U.interceptors.response.use(function(e){return e},function(e){var t=e.config;if(e.config&&e.response&&401===e.response.status&&!E){if(!localStorage.getItem("user"))return console.error("registration required for this action"),void F.push({path:"Login"});E=!0;var n={refreshToken:JSON.parse(localStorage.getItem("user")).refreshToken,grantType:"refresh_token",id:JSON.parse(localStorage.getItem("user")).userInfo.id};U.post("token",n).then(function(e){localStorage.removeItem("user"),localStorage.setItem("user",u()(e.data)),E=!1}).then(function(e){return setTimeout(function(){return U(t)},500)}).catch(function(e){console.error("retry failed"),F.push({path:"Login"})})}return v.a.reject(e)});var A={state:{scriptureId:1,lang:null,verses:null,verseIndex:null,verseIndexBackup:null,languages:null,chapters:null,deferredPrompt:null,verseOfDayId:null,verseImage:null,isLoadingVerses:!1},getters:{scriptureId:function(e){return null==e.scriptureId&&(e.scriptureId=localStorage.getItem("scriptureId")),e.scriptureId},lang:function(e){return null==e.lang&&(e.lang=localStorage.getItem("lang")),e.lang},languages:function(e){return null==e.languages&&(e.languages=JSON.parse(localStorage.getItem("languages"))),e.languages},chapters:function(e){return null==e.chapters&&(e.chapters=JSON.parse(localStorage.getItem("chapters"))),e.chapters},verses:function(e){return null==e.verses&&(e.verses=JSON.parse(localStorage.getItem("verses"))),e.verses},verseIndex:function(e){return null==e.verseIndex&&(e.verseIndex=localStorage.getItem("verseIndex"),null==e.verseIndex&&(e.verseIndex=0,localStorage.setItem("verseIndex",0))),e.verseIndex},verseIndexBackup:function(e){return null==e.verseIndexBackup&&(e.verseIndexBackup=localStorage.getItem("verseIndexBackup"),null==e.verseIndexBackup&&(e.verseIndexBackup=0)),e.verseIndexBackup},verseByIndex:function(e,t){return t.verses?t.verses[t.verseIndex]:null},currentVerseId:function(e,t){return t.verseByIndex.id},verseText:function(e,t){if(t.verseByIndex)return t.verseByIndex.content[t.lang].title.replace(/\n/g,"<br />")},sanskritVerseText:function(e,t){if(t.verseByIndex)return t.verseByIndex.content.sa.title.replace(/\n/g,"<br />")},verseOfDayId:function(e){return null==e.verseOfDayId&&(e.verseOfDayId=localStorage.getItem("verseOfDayId")),Number(e.verseOfDayId)},isLoadingVerses:function(e){return e.isLoadingVerses}},mutations:{verses:function(e,t){e.verses=t,localStorage.setItem("verses",u()(e.verses))},lang:function(e,t){e.lang=t,localStorage.setItem("lang",e.lang)},languages:function(e,t){e.languages=t,localStorage.setItem("languages",u()(e.languages))},chapters:function(e,t){e.chapters=t,localStorage.setItem("chapters",u()(e.chapters))},incrementVerseIndex:function(e){700!==e.verseIndex&&(e.verseIndex=parseInt(e.verseIndex)+1,localStorage.setItem("verseIndex",e.verseIndex))},decrementVerseIndex:function(e){0!==e.verseIndex&&(e.verseIndex=parseInt(e.verseIndex)-1,localStorage.setItem("verseIndex",e.verseIndex))},verseIndex:function(e,t){e.verseIndex=t,localStorage.setItem("verseIndex",e.verseIndex)},verseIndexBackup:function(e,t){e.verseIndexBackup=t,localStorage.setItem("verseIndexBackup",e.verseIndexBackup)},verseOfDayId:function(e,t){e.verseOfDayId=t,localStorage.setItem("verseOfDayId",e.verseOfDayId)},resetState:function(e){e.scriptureId=1,e.lang=null,e.verses=null,e.verseIndex=null,e.isLoading=!1,e.error=null,localStorage.clear(),caches.keys().then(function(e){var t=!0,n=!1,s=void 0;try{for(var r,o=c()(e);!(t=(r=o.next()).done);t=!0){var i=r.value;caches.delete(i)}}catch(e){n=!0,s=e}finally{try{!t&&o.return&&o.return()}finally{if(n)throw s}}})},toggleVerseLike:function(e,t){console.log("in toggle verse like mutation");for(var n=0;n<e.verses.length;n++)if(e.verses[n].id===t){e.verses[n].isLike=!e.verses[n].isLike;break}},isLoadingVerses:function(e,t){e.isLoadingVerses=t}},actions:{fetchVerses:function(e,t){var n=e.commit,s=e.getters;n("isLoading",!0),n("isLoadingVerses",!0),n("lang",t.lang),U.get("verses",{params:{scriptureId:s.scriptureId,lang:s.lang}}).then(function(e){n("verses",e.data),n("isLoading",!1),n("isLoadingVerses",!1)}).catch(function(e){n("error",e),n("isLoading",!1),n("isLoadingVerses",!1)})},fetchLanguages:function(e,t){var n=e.commit;e.getters;n("isLoading",!0),U.get("languages").then(function(e){n("languages",e.data),n("isLoading",!1)}).catch(function(e){n("error",e),n("isLoading",!1)})},fetchChapters:function(e,t){var n=e.commit,s=e.getters;n("isLoading",!0),U.get("chapters",{params:{scriptureId:s.scriptureId,lang:s.lang}}).then(function(e){n("chapters",e.data),n("isLoading",!1)}).catch(function(e){n("error",e),n("isLoading",!1)})},incrementVerseIndex:function(e){(0,e.commit)("incrementVerseIndex")},decrementVerseIndex:function(e){(0,e.commit)("decrementVerseIndex")},verseIndex:function(e,t){(0,e.commit)("verseIndex",t)},changeChapter:function(e,t){for(var n=e.commit,s=e.getters,r=s.verses.length,o=0;o<r;o++){if(s.verses[o].chapterId===t.chapterId){n("verseIndex",o);break}}},resetState:function(e){(0,e.commit)("resetState")},changeIndexToVerseOfDay:function(e,t){var n=e.commit,s=e.getters,r=Number(t.id);n("verseOfDayId",r);for(var o=0,i=0;i<s.verses.length;i++)if(s.verses[i].id===r){o=i;break}n("verseIndexBackup",s.verseIndex),n("verseIndex",o)},resumeReading:function(e){var t=e.commit,n=e.getters;t("verseOfDayId",null),t("verseIndex",n.verseIndexBackup)},toggleVerseLike:function(e,t){var n=e.commit,s=e.getters,r="verses/"+s.currentVerseId+"/likes";!0===t.isLike?U.delete(r):U.post(r),n("toggleVerseLike",s.currentVerseId)}}},G={state:{user:null,authNetwork:null},getters:{user:function(e){return null==e.user&&(e.user=JSON.parse(localStorage.getItem("user"))),e.user},authNetwork:function(e){return null==e.authNetwork&&(e.authNetwork=localStorage.getItem("authNetwork")),e.authNetwork},isLoggedIn:function(e,t){return null!=t.user},token:function(e,t){return t.user?t.user.accessToken:null}},mutations:{user:function(e,t){e.user=t,localStorage.setItem("user",u()(e.user))},logout:function(e){localStorage.removeItem("user"),localStorage.removeItem("authNetwork")},authNetwork:function(e,t){e.authNetwork=t,localStorage.setItem("authNetwork",e.authNetwork)}},actions:{authenticate:function(e,t){var n=e.commit,s=e.getters;return new v.a(function(e,r){var o="google"===s.authNetwork?1:2,i={thirdPartyAccessToken:t,GrantType:"implicit",notificationPlayerId:t.notificationPlayerId,tokenProvider:o};n("isLoading",!0),U.post("token",i).then(function(t){n("user",t.data),n("isLoading",!1),e()}).catch(function(e){n("error",e),n("isLoading",!1),r(e)})})},logout:function(e){(0,e.commit)("logout",null)},authNetwork:function(e,t){(0,e.commit)("authNetwork",t)},submitPlayerId:function(e,t){var n=e.commit,s=(e.getters,{notificationPlayerId:t});U.post("pushnotification/subscriptions",s).then(function(e){}).catch(function(e){n("error",e),console.log(e)})}}},q={state:{verseComments:[],verseCommentReplies:[]},getters:{verseComments:function(e){return e.verseComments},verseCommentReplies:function(e){return e.verseCommentReplies}},mutations:{verseComments:function(e,t){e.verseComments=t},verseCommentReplies:function(e,t){e.verseCommentReplies=t},pushNewVerseComment:function(e,t){if(t.parentCommentId){e.verseCommentReplies.unshift(t);for(var n=0;n<=e.verseComments.length;n++)if(e.verseComments[n].id===t.parentCommentId){e.verseComments[n].replyCount++;break}}else e.verseComments.unshift(t)},removeVerseComment:function(e,t){if(console.log("in remove verse comment mutation",t.isReply),t.isReply){for(var n=0,s=0;s<e.verseCommentReplies.length;s++)if(e.verseCommentReplies[s].id===t.commentId){n=e.verseCommentReplies[s].parentCommentId,e.verseCommentReplies.splice(s,1);break}for(console.log("parentCommentId",n),s=0;s<=e.verseComments.length;s++)if(e.verseComments[s].id===n){e.verseComments[s].replyCount--;break}}else for(var r=0;r<e.verseComments.length;r++)if(e.verseComments[r].id===t.commentId){e.verseComments.splice(r,1);break}},toggleVerseCommentLike:function(e,t){if(console.log("toggleVerseCommentLike",t.isReply),t.isReply){for(var n=0;n<e.verseCommentReplies.length;n++)if(e.verseCommentReplies[n].id===t.commentId){var s=e.verseCommentReplies[n].isLike;e.verseCommentReplies[n].isLike=t.isLike,!0===t.isLike?e.verseCommentReplies[n].likeCount++:!1===t.isLike&&e.verseCommentReplies[n].dislikeCount++,!0===s?e.verseCommentReplies[n].likeCount--:!1===s&&e.verseCommentReplies[n].dislikeCount--;break}}else for(var r=0;r<e.verseComments.length;r++)if(e.verseComments[r].id===t.commentId){s=e.verseComments[r].isLike,e.verseComments[r].isLike=t.isLike,!0===t.isLike?e.verseComments[r].likeCount++:!1===t.isLike&&e.verseComments[r].dislikeCount++,!0===s?e.verseComments[r].likeCount--:!1===s&&e.verseComments[r].dislikeCount--;break}}},actions:{fetchVerseComments:function(e){var t=e.commit,n=e.getters;console.log("online",navigator.onLine),navigator.onLine&&(t("isLoading",!0),U.get("verses/"+n.currentVerseId+"/comments",{params:{lang:n.lang}}).then(function(e){t("verseComments",e.data),t("isLoading",!1)}).catch(function(e){t("error",e),t("isLoading",!1)}))},fetchVerseCommentReplies:function(e,t){var n=e.commit,s=e.getters;if(console.log("online",navigator.onLine),navigator.onLine){n("isLoading",!0);var r="verses/"+s.currentVerseId+"/comments/"+t+"/replies";U.get(r,{params:{lang:s.lang}}).then(function(e){n("verseCommentReplies",e.data),n("isLoading",!1)}).catch(function(e){n("error",e),n("isLoading",!1)})}},saveVerseComment:function(e,t){var n=e.commit,s=e.getters;return console.log("in saveVerseComment",t.commentText),new v.a(function(e,r){n("isSaving",!0);var o={verseId:s.currentVerseId,commentText:t.commentText,lang:s.lang,parentCommentId:t.parentCommentId},i="verses/"+s.currentVerseId+"/comments";U.post(i,o).then(function(t){n("pushNewVerseComment",t.data),n("isSaving",!1),e()}).catch(function(e){n("error",e),n("isSaving",!1),r(e)})})},deleteVerseComment:function(e,t){var n=e.commit,s=e.getters;console.log("in delete verse comment action",t.isReply),n("isSaving",!0);var r="verses/"+s.currentVerseId+"/comments/"+t.commentId;U.delete(r).then(function(e){n("removeVerseComment",{commentId:t.commentId,isReply:t.isReply}),n("isSaving",!1)}).catch(function(e){n("error",e),n("isSaving",!1)})},toggleVerseCommentLike:function(e,t){var n=e.commit,s=e.getters;n("isSaving",!0);var r="verses/"+s.currentVerseId+"/comments/"+t.commentId+"/likes";!0===t.isLike?U.delete(r).then(function(e){n("toggleVerseCommentLike",{commentId:t.commentId,isReply:t.isReply,isLike:null}),n("isSaving",!1)}).catch(function(e){n("isSaving",!1)}):U.post(r).then(function(e){n("toggleVerseCommentLike",{commentId:t.commentId,isReply:t.isReply,isLike:!0}),n("isSaving",!1)}).catch(function(e){n("isSaving",!1)})},toggleVerseCommentDislike:function(e,t){var n=e.commit,s=e.getters;n("isSaving",!0);var r="verses/"+s.currentVerseId+"/comments/"+t.commentId+"/dislikes";!1===t.isLike?U.delete(r).then(function(e){n("toggleVerseCommentLike",{commentId:t.commentId,isReply:t.isReply,isLike:null}),n("isSaving",!1)}).catch(function(e){n("isSaving",!1)}):U.post(r).then(function(e){n("toggleVerseCommentLike",{commentId:t.commentId,isReply:t.isReply,isLike:!1}),n("isSaving",!1)}).catch(function(e){n("isSaving",!1)})}}};s.a.use(i.a);var J=new i.a.Store({modules:{verse:A,user:G,shared:{state:{isLoading:!1,isSaving:!1,error:null},getters:{isLoading:function(e){return e.isLoading},isSaving:function(e){return e.isSaving},error:function(e){return e.error}},mutations:{isLoading:function(e,t){e.isLoading=t},isSaving:function(e,t){e.isSaving=t},error:function(e,t){e.error=t}},actions:{isLoading:function(e,t){(0,e.commit)("isLoading",t)},isSaving:function(e,t){(0,e.commit)("isSaving",t)},error:function(e,t){(0,e.commit)("error",t)}}},verseComments:q}}),z={name:"App",data:function(){return{drawer:null,items:[{title:"Home",icon:"dashboard",link:"/"},{title:"Change Aadyay",icon:"list",link:"/chapters"},{title:"Change Language",icon:"build",link:"/languages"},{title:"Contact us",icon:"question_answer",link:"/about"}]}},computed:{isLoggedIn:function(){return this.$store.getters.isLoggedIn},user:function(){return this.$store.getters.user.userInfo},userImage:function(){return this.isLoggedIn?this.user.image:"static/images/default-profile.png"}},methods:{reset:function(){this.$store.dispatch("resetState"),this.$router.push({path:"/"}),window.location.reload(!0)},logout:function(){this.$store.dispatch("logout"),this.$router.push({path:"/"}),window.location.reload(!0)},login:function(){this.$router.push({path:"/login"})}}},j={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("v-app",[n("v-navigation-drawer",{attrs:{temporary:"",absolute:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list",{staticClass:"pa-1"},[n("v-list-tile",{attrs:{avatar:""}},[n("v-list-tile-avatar",[e.userImage?n("div",[n("img",{staticStyle:{width:"40px"},attrs:{src:e.userImage}})]):e._e(),e._v(" "),e.userImage?e._e():n("div",[n("img",{staticStyle:{width:"40px"},attrs:{src:"https://www.vccircle.com/wp-content/uploads/2017/03/default-profile.png"}})])]),e._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[e._v(e._s(e.isLoggedIn?e.user.name:"Guest"))])],1)],1)],1),e._v(" "),n("v-list",{staticClass:"pt-0",attrs:{dense:""}},[n("v-divider"),e._v(" "),e.isLoggedIn?e._e():n("v-list-tile",{on:{click:e.login}},[n("v-list-tile-action",[n("v-icon",[e._v("face")])],1),e._v(" "),n("v-list-tile-content",[e._v("Signin")])],1),e._v(" "),e.isLoggedIn?e._e():n("v-divider"),e._v(" "),e._l(e.items,function(t){return n("v-list-tile",{key:t.title,attrs:{to:t.link}},[n("v-list-tile-action",[n("v-icon",[e._v(e._s(t.icon))])],1),e._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[e._v(e._s(t.title))])],1)],1)}),e._v(" "),n("v-divider"),e._v(" "),e.isLoggedIn?n("v-list-tile",{on:{click:e.logout}},[n("v-list-tile-action",[n("v-icon",[e._v("exit_to_app")])],1),e._v(" "),n("v-list-tile-content",[e._v("Logout")])],1):e._e(),e._v(" "),n("v-list-tile",{on:{click:e.reset}},[n("v-list-tile-action",[n("v-icon",[e._v("refresh")])],1),e._v(" "),n("v-list-tile-content",[e._v("Reset/Repair")])],1)],2)],1),e._v(" "),n("v-toolbar",{attrs:{app:"",height:"45px"}},[n("v-toolbar-side-icon",{on:{click:function(t){e.drawer=!e.drawer}}}),e._v("\n    Easyvedaz\n  ")],1),e._v(" "),n("v-content",[n("router-view")],1)],1)],1)},staticRenderFns:[]},H=n("VU/8")(z,j,!1,null,null,null).exports;n("j1ja");s.a.config.productionTip=!1,s.a.use(o.a),new s.a({el:"#app",store:J,router:F,render:function(e){return e(H)},created:function(){this.$store.getters.verseByIndex||F.push("languages")}})},TPiX:function(e,t){},aJcG:function(e,t){},sGGI:function(e,t){},w0mO:function(e,t){},wl05:function(e,t){},zWRL:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.d5f3ee1eb3db9f6ff914.js.map