webpackJsonp([1],{"7zck":function(e,t){},B9tO:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("/5sW"),s=n("3EgV"),a=n.n(s),o=(n("7zck"),n("mvHQ")),c=n.n(o),i=n("NYxO"),l=n("mtWM"),u=n.n(l).a.create({baseURL:"https://api.easyvedaz.com/api"});r.a.use(i.a);var g=new i.a.Store({state:{scriptureId:1,lang:null,verses:null,verseIndex:null,isLoading:!1,error:null,languages:null,chapters:null,isOnline:null},getters:{scriptureId:function(e){return null==e.scriptureId&&(e.scriptureId=localStorage.getItem("scriptureId")),e.scriptureId},lang:function(e){return null==e.lang&&(e.lang=localStorage.getItem("lang")),e.lang},languages:function(e){return null==e.languages&&(e.languages=JSON.parse(localStorage.getItem("languages"))),e.languages},chapters:function(e){return null==e.chapters&&(e.chapters=JSON.parse(localStorage.getItem("chapters"))),e.chapters},verses:function(e){return null==e.verses&&(e.verses=JSON.parse(localStorage.getItem("verses"))),e.verses},verseIndex:function(e){return null==e.verseIndex&&(e.verseIndex=localStorage.getItem("verseIndex"),null==e.verseIndex&&(e.verseIndex=0)),e.verseIndex},isLoading:function(e){return e.isLoading},error:function(e){return e.error},verse:function(e,t){return t.verses?t.verses[t.verseIndex]:null},verseText:function(e,t){if(t.verse)return t.verse.content[t.lang].title.replace(/\n/g,"<br />")},sanskritVerseText:function(e,t){if(t.verse)return t.verse.content.sa.title.replace(/\n/g,"<br />")},isOnline:function(e){return e.isOnline}},mutations:{verses:function(e,t){e.verses=t,localStorage.setItem("verses",c()(e.verses))},lang:function(e,t){e.lang=t,localStorage.setItem("lang",e.lang)},languages:function(e,t){e.languages=t,localStorage.setItem("languages",c()(e.languages))},chapters:function(e,t){e.chapters=t,localStorage.setItem("chapters",c()(e.chapters))},incrementVerseIndex:function(e){700!==e.verseIndex&&(e.verseIndex=parseInt(e.verseIndex)+1,localStorage.setItem("verseIndex",e.verseIndex))},decrementVerseIndex:function(e){0!==e.verseIndex&&(e.verseIndex=parseInt(e.verseIndex)-1,localStorage.setItem("verseIndex",e.verseIndex))},isLoading:function(e,t){e.isLoading=t},verseIndex:function(e,t){e.verseIndex=t,localStorage.setItem("verseIndex",e.verseIndex)},resetState:function(e){e.scriptureId=1,e.lang=null,e.verses=null,e.verseIndex=null,e.isLoading=!1,e.error=null,localStorage.clear()},isOnline:function(e,t){e.isOnline=t}},actions:{fetchVerses:function(e,t){var n=e.commit,r=e.getters;n("isLoading",!0),n("lang",t.lang),u.get("verses",{params:{scriptureId:r.scriptureId,lang:r.lang}}).then(function(e){n("verses",e.data),n("isLoading",!1)}).catch(function(e){n("error",e),n("isLoading",!1)})},fetchLanguages:function(e,t){var n=e.commit;e.getters;n("isLoading",!0),u.get("languages").then(function(e){n("languages",e.data),n("isLoading",!1)}).catch(function(e){n("error",e),n("isLoading",!1)})},fetchChapters:function(e,t){var n=e.commit;e.getters;console.log("in fechchapters pre"),n("isLoading",!0),u.get("chapters",{params:{scriptureId:g.getters.scriptureId,lang:g.getters.lang}}).then(function(e){n("chapters",e.data),console.log("in fechchapters post",e.data),n("isLoading",!1)}).catch(function(e){n("error",e),n("isLoading",!1)})},incrementVerseIndex:function(e){(0,e.commit)("incrementVerseIndex")},decrementVerseIndex:function(e){(0,e.commit)("decrementVerseIndex")},isLoading:function(e,t){(0,e.commit)("isLoading",t)},changeChapter:function(e,t){var n=e.commit,r=e.getters;console.log("in change chapter action");for(var s=r.verses.length,a=0;a<s;a++){if(console.log(),r.verses[a].chapterId===t.chapterId){n("verseIndex",a);break}}},resetState:function(e){(0,e.commit)("resetState")},isOnline:function(e,t){(0,e.commit)("isOnline",t)}}}),v={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("v-app",[t("router-view")],1)],1)},staticRenderFns:[]},d=n("VU/8")({name:"App"},v,!1,null,null,null).exports,h=n("/ocq"),p={computed:{languages:function(){return this.$store.getters.languages},isOnline:function(){return navigator.onLine}},mounted:function(){this.$store.dispatch("fetchLanguages")},methods:{selectLanguageAndFetchVerses:function(e){this.$store.dispatch("fetchVerses",{lang:e}),this.$router.push({path:"Verse"})}}},f={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",sm6:"","offset-sm3":""}},[n("img",{attrs:{src:"static/images/logos/easyvedaznamelogo-192x192.png",width:"120px"}}),e._v(" "),n("br"),n("br"),e._v(" "),n("h2",[e._v("||Bhagvad Gita||")]),e._v(" "),n("h3",[e._v("Select Language")]),n("br")]),e._v(" "),e._l(e.languages,function(t){return n("v-flex",{key:t.code,staticClass:"text-xs-center",attrs:{xs12:"",sm6:"","offset-sm3":""}},[n("v-btn",{attrs:{block:"",large:"",round:"",color:"error"},on:{click:function(n){e.selectLanguageAndFetchVerses(t.code)}}},[e._v(e._s(t.name))])],1)}),e._v(" "),n("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",sm6:"","offset-sm3":""}},[n("br"),e._v(" "),e.isOnline?e._e():n("span",{staticClass:"messageText"},[e._v("\n            To change language make sure that you are connected to the internet.\n          ")])])],2)],1)},staticRenderFns:[]};var m=n("VU/8")(p,f,!1,function(e){n("xbt+")},null,null).exports,x={computed:{chapters:function(){return this.$store.getters.chapters}},mounted:function(){this.$store.dispatch("fetchChapters")},methods:{changeChapter:function(e){console.log("in changechapter method",e),this.$store.dispatch("changeChapter",{chapterId:e}),this.$router.push({path:"Verse"})}}},I={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",sm6:"","offset-sm3":""}},[n("h2",[e._v("||Bhagvad Gita||")]),e._v(" "),n("h3",[e._v("Select Adhyay / Chapter")])]),e._v(" "),e._l(e.chapters,function(t){return n("v-flex",{key:t.id,staticClass:"text-xs-center",attrs:{xs12:""}},[n("v-btn",{attrs:{block:"",large:"",round:"",color:"error"},on:{click:function(n){e.changeChapter(t.id)}}},[e._v(e._s(t.name))])],1)})],2)],1)},staticRenderFns:[]},_=n("VU/8")(x,I,!1,null,null,null).exports,L={computed:{verseText:function(){return this.$store.getters.verseText},sanskritVerseText:function(){return this.$store.getters.sanskritVerseText},isLoading:function(){return console.log("loading",this.$store.getters.isLoading),this.$store.getters.isLoading}},methods:{nextVerse:function(){this.$store.dispatch("incrementVerseIndex")},previousVerse:function(){this.$store.dispatch("decrementVerseIndex")},reset:function(){this.$store.dispatch("resetState"),this.$router.push({path:"/"}),this.$router.reload()},changeChapter:function(){this.$router.push({path:"Chapters"})}}},b={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"mycontainer"},[e.isLoading?n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",sm6:"","offset-sm3":""}},[n("br"),n("br"),e._v(" "),n("v-progress-circular",{attrs:{indeterminate:"",size:100,color:"amber"}})],1)],1):e._e(),e._v(" "),e.isLoading?e._e():n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",sm6:"","offset-sm3":""}},[n("v-card",[n("v-card-title",[n("div",[n("span",{staticClass:"primaryText",domProps:{innerHTML:e._s(e.verseText)}}),e._v(" "),n("br"),n("br"),e._v(" "),n("span",{staticClass:"secondaryText",domProps:{innerHTML:e._s(e.sanskritVerseText)}})])])],1),e._v(" "),n("v-btn",{staticClass:"fixedButton",attrs:{color:"error",dark:"",medium:"",fab:""},on:{click:function(t){e.nextVerse()}}},[n("v-icon",[e._v("arrow_forward")])],1)],1),e._v(" "),n("v-flex",{attrs:{xs12:"",sm4:"","offset-sm4":""}},[n("br"),n("br"),e._v(" "),n("v-btn",{attrs:{color:"gray",flat:""},on:{click:function(t){e.previousVerse()}}},[n("v-icon",[e._v("arrow_back")]),e._v("Back")],1),e._v(" "),n("v-btn",{attrs:{color:"gray",flat:""},on:{click:function(t){e.changeChapter()}}},[n("v-icon",[e._v("list")]),e._v(" Change Adhyay / Chapter")],1),e._v(" "),n("v-btn",{attrs:{color:"gray",flat:"",to:"/Languages"}},[n("v-icon",[e._v("build")]),e._v(" Change Language")],1),e._v(" "),n("v-btn",{attrs:{color:"gray",flat:""},on:{click:e.reset}},[n("v-icon",[e._v("refresh")]),e._v(" Reset")],1)],1)],1)],1)},staticRenderFns:[]};var V=n("VU/8")(L,b,!1,function(e){n("B9tO")},null,null).exports;r.a.use(h.a);var C=new h.a({routes:[{path:"/",name:"Home",component:m},{path:"/Languages",name:"Languages",component:m},{path:"/Chapters",name:"Chapters",component:_},{path:"/Verse",name:"Verse",component:V}]});r.a.config.productionTip=!1,r.a.use(a.a),new r.a({el:"#app",store:g,router:C,render:function(e){return e(d)},created:function(){this.$store.getters.verse?C.push("verse"):C.push("languages")}})},"xbt+":function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.js.map