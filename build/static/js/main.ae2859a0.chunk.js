(this.webpackJsonpwebd171assignment7=this.webpackJsonpwebd171assignment7||[]).push([[0],{169:function(e,t,n){e.exports=n.p+"static/media/logo.fa6c55a6.png"},196:function(e,t,n){e.exports=n(377)},205:function(e,t,n){},206:function(e,t,n){},308:function(e,t,n){},309:function(e,t,n){},316:function(e,t,n){e.exports=n.p+"static/media/Icon5.9cf01e14.png"},317:function(e,t,n){},318:function(e,t,n){},319:function(e,t,n){},320:function(e,t,n){},331:function(e,t,n){},332:function(e,t,n){},333:function(e,t,n){},334:function(e,t,n){},348:function(e,t,n){},349:function(e,t,n){},350:function(e,t,n){},352:function(e,t,n){},365:function(e,t,n){},366:function(e,t,n){},367:function(e,t,n){},368:function(e,t,n){},369:function(e,t,n){},370:function(e,t,n){},371:function(e,t,n){},372:function(e,t,n){},377:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(39),i=n.n(o),c=n(15),s=n(16),u=n(18),l=n(17),d=n(23),p=n(9),m="REQUEST",h="SUCCESS",v="FAILURE";function f(e){if(!e)throw new Error("cannot create request type with base = '' or base = null");return[m,h,v].reduce((function(t,n){return t[n]="".concat(e,"_").concat(n),t}),{})}function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(p.a)({type:e},t)}var y=f("VIDEO_CATEGORIES"),g={request:function(){return b(y[m])},success:function(e){return b(y[h],{response:e})},failure:function(e){return b(y[v],{response:e})}},O=f("MOST_POPULAR"),E={request:function(e,t,n){return b(O[m],{amount:e,loadDescription:t,nextPageToken:n})},success:function(e){return b(O[h],{response:e})},failure:function(e){return b(O[v],{response:e})}},j=f("MOST_POPULAR_BY_CATEGORY"),k=function(e){return b(j[m],{categories:e})},C=function(e,t){return b(j[h],{response:e,categories:t})},w=function(e){return b(j[v],e)},x=(n(205),n(396)),I=n(51),T=(n(206),n(26)),L=n(19),P=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.shouldBeHighlighted()?"highlight-item":null;return r.a.createElement(T.b,{to:{pathname:this.props.path}},r.a.createElement(x.a.Item,{className:["sidebar-item",e].join(" ")},r.a.createElement("div",{className:"sidebar-item-alignment-container"},r.a.createElement("span",null,r.a.createElement(I.a,{size:"large",name:this.props.icon})," "),r.a.createElement("span",null,this.props.label))))}},{key:"shouldBeHighlighted",value:function(){var e=this.props.location.pathname;return"/"===this.props.path?e===this.props.path:e.includes(this.props.path)}}]),n}(r.a.Component),N=Object(L.f)(P),V=n(389),R=(n(308),n(182));n(309);function S(e){var t=e.title?e.title.toUpperCase():"Welcome!";return r.a.createElement(x.a.Item,null,r.a.createElement("br",null),r.a.createElement(T.b,{to:"/webd171-7"},r.a.createElement(R.a,{src:n(316),size:"small"})),r.a.createElement("br",null),r.a.createElement(x.a.Header,{className:"side-bar-header"},r.a.createElement("br",null),t))}Object(L.f)(S),n(317);function D(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"footer-block"},r.a.createElement("div",null,r.a.createElement("br",null),"Adapted from ",r.a.createElement("br",null)," \xa9 Productioncoder.com ",r.a.createElement("br",null),r.a.createElement("br",null),"\u2014 A Youtube clone for ",r.a.createElement("br",null),"educational purposes ",r.a.createElement("br",null),"under fair use.")))}var A=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(x.a,{borderless:!0,vertical:!0,stackable:!0,fixed:"left",className:"side-nav"},r.a.createElement(S,null),r.a.createElement(V.a,null),r.a.createElement(N,{path:"/webd171-7",label:"Home",icon:"home"}),r.a.createElement(N,{path:"/webd171-7/feed/trending",label:"Trending",icon:"fire"}),r.a.createElement(V.a,null),r.a.createElement(D,null))}}]),n}(r.a.Component);n(318),n(319);function M(e){return r.a.createElement("div",{className:"video-grid-header"},r.a.createElement("span",{className:"title"},e.title))}n(320);var F=n(394),B=n(167),_=n.n(B),U=["K","M","B","T"];function q(e){for(var t=U.some((function(t,n){var a=Math.pow(1e3,n+1);return e>a&&e<a+10*a}))?1:0,n=U.length-1;n>=0;n--){var a=Math.pow(1e3,n+1);if(e>=a)return(e/a).toFixed(t)+U[n]}return e.toString()}var z=["years","months","days","hours","minutes","seconds"],G="\\d+(?:[\\.,]\\d{0,3})?",Q="(".concat(G,"Y)?(").concat(G,"M)?(").concat(G,"D)?"),Y="T(".concat(G,"H)?(").concat(G,"M)?(").concat(G,"S)?"),H=new RegExp("P(?:".concat(Q,"(?:").concat(Y,")?)"));function W(e){if(!e||""===e)return"";var t=e.match(H).slice(1).reduce((function(e,t,n){return e[z[n]]=parseFloat(t)||0,e}),{}),n=t.days,a=t.hours,r=t.minutes,o=t.seconds,i=o.toString(),c=r.toString(),s=24*n+a;return o<10&&(i=o.toString().padStart(2,"0")),r<10&&0!==a&&(c=c.toString().padStart(2,"0")),s?[s,c,i].join(":"):[c,i].join(":")}F.a.locale(_.a);var X=new F.a("en-US"),J=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.video;if(!e)return r.a.createElement("div",null);var t=W(e.contentDetails?e.contentDetails.duration:null),a=n.getFormattedViewAndTime(e),o=this.props.horizontal?"horizontal":null,i=this.props.expanded?"expanded":null,c=this.props.expanded?e.snippet.description:null;return r.a.createElement(T.b,{to:{pathname:this.props.pathname,search:this.props.search}},r.a.createElement("div",{className:["video-preview",o,i].join(" ")},r.a.createElement("div",{className:"image-container"},r.a.createElement(R.a,{src:e.snippet.thumbnails.medium.url}),r.a.createElement("div",{className:"time-label"},r.a.createElement("span",null,t))),r.a.createElement("div",{className:"video-info"},r.a.createElement("div",{className:["semi-bold","show-max-two-lines",i].join(" ")},e.snippet.title),r.a.createElement("div",{className:"video-preview-metadata-container"},r.a.createElement("div",{className:"channel-title"},e.snippet.channelTitle),r.a.createElement("div",{className:"view-and-time"},a),r.a.createElement("div",{className:"show-max-two-lines"},c)))))}}],[{key:"getFormattedViewAndTime",value:function(e){var t=new Date(e.snippet.publishedAt);if(e.statistics?e.statistics.viewCount:null){var n=q(e.statistics.viewCount);return"".concat(n," views \u2022 ").concat(X.format(t))}return""}}]),n}(r.a.Component);function K(e){if(!e.videos||!e.videos.length)return r.a.createElement("div",null);var t=e.videos.map((function(e){return r.a.createElement(J,{video:e,key:e.id,pathname:"/watch",search:"?v=".concat(e.id)})})),n=e.hideDivider?null:r.a.createElement(V.a,null);return r.a.createElement(r.a.Fragment,null,r.a.createElement(M,{title:e.title}),r.a.createElement("div",{className:"video-grid"},t),n)}n(331);var Z=n(62),$=n(29),ee=f("WATCH_DETAILS"),te=function(e,t){return b(ee[m],{videoId:e,channelId:t})},ne=function(e,t){return b(ee[h],{response:e,videoId:t})},ae=function(e){return b(ee[v],{response:e})},re=f("VIDEO_DETAILS"),oe=function(e){return b(re[h],{response:e})},ie=function(e){return b(re[v],{response:e})},ce=function(e,t){return e&&e.search?new URLSearchParams(e.search).get(t):null},se={byId:{},mostPopular:{},categories:{},byCategory:{},related:{}};function ue(e,t){var n=e.items.reduce((function(e,t){return e[t.id]=t,e}),{}),a=Object.keys(n);e.hasOwnProperty("prevPageToken")&&t.mostPopular&&(a=[].concat(Object(Z.a)(t.mostPopular.items),Object(Z.a)(a)));var r={totalResults:e.pageInfo.totalResults,nextPageToken:e.nextPageToken,items:a};return Object(p.a)(Object(p.a)({},t),{},{mostPopular:r,byId:Object(p.a)(Object(p.a)({},t.byId),n)})}function le(e,t){var n=e.items.reduce((function(e,t){return e[t.id]=t.snippet.title,e}),{});return Object(p.a)(Object(p.a)({},t),{},{categories:n})}function de(e,t,n){var a={},r={};return e.forEach((function(e,n){if(400!==e.status){var o=t[n],i=function(e){var t=e.items,n={},a={totalResults:e.pageInfo.totalResults,nextPageToken:e.nextPageToken,items:[]};return t.forEach((function(e){n[e.id]=e;var t=a.items;t&&t?t.push(e.id):a.items=[e.id]})),{byId:n,byCategory:a}}(e.result),c=i.byId,s=i.byCategory;a=Object(p.a)(Object(p.a)({},a),c),r[o]=s}})),Object(p.a)(Object(p.a)({},n),{},{byId:Object(p.a)(Object(p.a)({},n.byId),a),byCategory:Object(p.a)(Object(p.a)({},n.byCategory),r)})}function pe(e,t){var n=e.find((function(e){return"youtube#videoListResponse"===e.result.kind})).result.items[0],a=function(e){var t=e.find((function(e){return"youtube#searchListResponse"===e.result.kind})).result,n=t.pageInfo,a=t.items,r=t.nextPageToken,o=a.map((function(e){return e.id.videoId}));return{totalResults:n.totalResults,nextPageToken:r,items:o}}(e);return Object(p.a)(Object(p.a)({},t),{},{byId:Object(p.a)(Object(p.a)({},t.byId),{},{[n.id]:n}),related:Object(p.a)(Object(p.a)({},t.related),{},{[n.id]:a})})}function me(e,t){var n=e.filter((function(e){return"youtube#videoListResponse"===e.result.kind})).reduce((function(e,t){var n=t.result.items?t.result.items[0]:null;return n?(e[n.id]=n,e):e}),{});return Object(p.a)(Object(p.a)({},t),{},{byId:Object(p.a)(Object(p.a)({},t.byId),n)})}var he=function(e){return e.videos.mostPopular},ve=Object($.a)((function(e){return e.videos.byId}),he,(function(e,t){return t&&t.items?t.items.map((function(t){return e[t]})):[]})),fe=Object($.a)((function(e){return e.videos.categories}),(function(e){return Object.keys(e||{})})),be=Object($.a)((function(e){return e.videos.byCategory}),(function(e){return e.videos.byId}),(function(e){return e.videos.categories}),(function(e,t,n){return Object.keys(e||{}).reduce((function(a,r){var o=e[r].items;return a[n[r]]=o.map((function(e){return t[e]})),a}),{})})),ye=Object($.a)((function(e){return e.videos.categories}),(function(e){return 0!==Object.keys(e||{}).length})),ge=Object($.a)((function(e){return e.videos.byCategory}),(function(e){return Object.keys(e||{}).length})),Oe=function(e,t){return e.videos.byId[t]},Ee=Object($.a)((function(e,t){var n=e.videos.related[t];return n?n.items:[]}),(function(e){return e.videos.byId}),(function(e,t){return e?e.map((function(e){return t[e]})).filter((function(e){return e})):[]})),je=function(e,t,n){var a=ce(t,n),r=e.videos.byId[a];return r?r.snippet.channelId:null},ke=Object($.a)(Oe,(function(e){return e?e.statistics.commentCount:0})),Ce=Object($.a)([he],(function(e){return(e.items?e.items.length:0)===e.totalResults})),we=Object($.a)([he],(function(e){return e.nextPageToken})),xe=n(168),Ie=n(390);n(332);function Te(e){return r.a.createElement(r.a.Fragment,null,e.children,r.a.createElement(xe.a,{onEnter:e.bottomReachedCallback},r.a.createElement("div",{className:"loader-container"},r.a.createElement(Ie.a,{active:e.showLoader,inline:"centered"}))))}var Le=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.getTrendingVideos(),t=this.getVideoGridsForCategories();return r.a.createElement("div",{className:"home-content"},r.a.createElement("div",{className:"responsive-video-grid-container"},r.a.createElement(Te,{bottomReachedCallback:this.props.bottomReachedCallback,showLoader:this.props.showLoader},r.a.createElement(K,{title:"Trending",videos:e}),t)))}},{key:"getTrendingVideos",value:function(){return this.props.mostPopularVideos.slice(0,12)}},{key:"getVideoGridsForCategories",value:function(){var e=this,t=Object.keys(this.props.videosByCategory||{});return t.map((function(n,a){var o=e.props.videosByCategory[n],i=a===t.length-1;return r.a.createElement(K,{title:n,videos:o,key:n,hideDivider:i})}))}}]),n}(r.a.Component);var Pe=Object(d.b)((function(e){return{videosByCategory:be(e),mostPopularVideos:ve(e)}}),null)(Le),Ne=n(20),Ve=b.bind(null,"YOUTUBE_LIBRARY_LOADED"),Re={libraryLoaded:!1},Se=function(e){return e.api.libraryLoaded},De=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).bottomReachedCallback=function(){a.props.videoCategoriesLoaded&&a.fetchVideosByCategory()},a.state={categoryIndex:0},a}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,null),r.a.createElement(Pe,{bottomReachedCallback:this.bottomReachedCallback,showLoader:this.shouldShowLoader()}))}},{key:"componentDidMount",value:function(){this.props.youtubeLibraryLoaded&&this.fetchCategoriesAndMostPopularVideos()}},{key:"componentDidUpdate",value:function(e){this.props.youtubeLibraryLoaded!==e.youtubeLibraryLoaded?this.fetchCategoriesAndMostPopularVideos():this.props.videoCategories!==e.videoCategories&&this.fetchVideosByCategory()}},{key:"fetchVideosByCategory",value:function(){var e=this.state.categoryIndex,t=this.props.videoCategories.slice(e,e+3);this.props.fetchMostPopularVideosByCategory(t),this.setState((function(e){return{categoryIndex:e.categoryIndex+3}}))}},{key:"fetchCategoriesAndMostPopularVideos",value:function(){this.props.fetchMostPopularVideos(),this.props.fetchVideoCategories()}},{key:"shouldShowLoader",value:function(){return!(!this.props.videoCategoriesLoaded||!this.props.videosByCategoryLoaded)&&this.state.categoryIndex<this.props.videoCategories.length}}]),n}(r.a.Component);var Ae=Object(d.b)((function(e){return{youtubeLibraryLoaded:Se(e),videoCategories:fe(e),videoCategoriesLoaded:ye(e),videosByCategoryLoaded:ge(e)}}),(function(e){var t=E.request,n=g.request,a=k;return Object(Ne.b)({fetchMostPopularVideos:t,fetchVideoCategories:n,fetchMostPopularVideosByCategory:a},e)}))(De),Me=(n(333),n(393)),Fe=n(391),Be=(n(334),n(169)),_e=n.n(Be),Ue=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).onInputChange=function(e){a.setState({query:e.target.value})},a.onSubmit=function(){var e=encodeURI(a.state.query);a.props.history.push("/results?search_query=".concat(e))},a.state={query:""},a}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(x.a,{borderless:!0,className:"top-menu",fixed:"top"},r.a.createElement(x.a.Item,{header:!0,className:"logo"},r.a.createElement(T.b,{to:"/webd171-7"},r.a.createElement(R.a,{src:_e.a,size:"small",alt:"Video Search"}))),r.a.createElement(x.a.Menu,{className:"nav-container"},r.a.createElement(x.a.Item,{className:"search-input"},r.a.createElement(Me.a,{onSubmit:this.onSubmit},r.a.createElement(Me.a.Field,null,r.a.createElement(Fe.a,{placeholder:"Search",size:"small",action:"Go",value:this.state.query,onChange:this.onInputChange}))))))}}]),n}(r.a.Component),qe=Object(L.f)(Ue),ze=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),n}(r.a.Component),Ge=Object(L.f)(ze);function Qe(e){return r.a.createElement(Ge,null,r.a.createElement("div",{className:"app-layout"},r.a.createElement(qe,null),e.children))}n(348);function Ye(e){if(!e.id)return null;var t="".concat("https://www.youtube.com/embed/").concat(e.id);return r.a.createElement("div",{className:"video-container"},r.a.createElement("div",{className:"video"},r.a.createElement("iframe",{className:"video-player",src:t,frameBorder:"0",allow:"autoplay; encrypted-media",allowFullScreen:!0,title:"video"})))}n(349),n(350);var He=n(392);function We(e){var t=null,n=0!==e.likeCount?e.likeCount:null,a=null;if(e.likeCount&&e.dislikeCount){var o=parseFloat(e.likeCount),i=parseFloat(e.dislikeCount),c=o/(o+i)*100;n=q(o),a=q(i),t=r.a.createElement(He.a,{percent:c,size:"tiny"})}return r.a.createElement("div",{className:"rating"},r.a.createElement("div",null,r.a.createElement(I.a,{name:"thumbs outline up"}),r.a.createElement("span",null,n)),r.a.createElement("div",null,r.a.createElement(I.a,{name:"thumbs outline down"}),r.a.createElement("span",null,a)),t)}function Xe(e){if(!e.video||!e.video.statistics)return r.a.createElement("div",null);var t=Number(e.video.statistics.viewCount).toLocaleString();return r.a.createElement("div",{className:"video-metadata"},r.a.createElement("h3",null,e.video.snippet.title),r.a.createElement("div",{className:"video-stats"},r.a.createElement("span",null,t," views"),r.a.createElement("div",{className:"video-actions"},r.a.createElement(We,{likeCount:e.video.statistics.likeCount,dislikeCount:e.video.statistics.dislikeCount}))),r.a.createElement(V.a,null))}n(352);var Je=n(378),Ke=n(181),Ze=n.n(Ke),$e=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).onToggleCollapseButtonClick=function(){a.setState((function(e){return{collapsed:!e.collapsed}}))},a.state={collapsed:!0},a}return Object(s.a)(n,[{key:"render",value:function(){if(!this.props.video||!this.props.channel)return r.a.createElement("div",null);var e,t=this.getDescriptionParagraphs(),n=this.getConfig(),a=n.descriptionTextClass,o=n.buttonTitle,i=(e=this.props.video.snippet.publishedAt)?new Date(Date.parse(e)).toDateString():"",c=this.props.channel,s=this.getSubscriberButtonText(),u=c.snippet.thumbnails.medium.url,l=c.snippet.title;return r.a.createElement("div",null,r.a.createElement("div",{className:"video-info-box"},r.a.createElement(R.a,{className:"channel-image",src:u,circular:!0}),r.a.createElement("div",{className:"video-info"},r.a.createElement("div",{className:"channel-name"},l),r.a.createElement("div",{className:"video-publication-date"},i)),r.a.createElement(Je.a,{className:"subscribe",color:"youtube"},s),r.a.createElement("div",{className:"video-description"},r.a.createElement("div",{className:a},t),r.a.createElement(Je.a,{compact:!0,onClick:this.onToggleCollapseButtonClick},o))),r.a.createElement(V.a,null))}},{key:"getDescriptionParagraphs",value:function(){var e=this.props.video.snippet?this.props.video.snippet.description:null;return e?e.split("\n").map((function(e,t){return r.a.createElement("p",{key:t},r.a.createElement(Ze.a,null,e))})):null}},{key:"getSubscriberButtonText",value:function(){var e=this.props.channel,t=q(Number(e.statistics.subscriberCount));return"".concat(t," Subscribers")}},{key:"getConfig",value:function(){var e="collapsed",t="Show More";return this.state.collapsed||(e="expanded",t="Show Less"),{descriptionTextClass:e,buttonTitle:t}}}]),n}(r.a.Component);n(365);function et(e){return r.a.createElement("div",{className:"comments-header"},r.a.createElement(Je.a,{basic:!0,compact:!0,icon:!0},e.amountComments," Comments"))}n(366);function tt(e){if(!e.comment)return r.a.createElement("div",null);var t=e.comment.snippet.topLevelComment,n=t.snippet,a=n.authorProfileImageUrl,o=n.authorDisplayName,i=n.textOriginal,c=t.snippet.likeCount;return r.a.createElement("div",{className:"comment"},r.a.createElement(R.a,{className:"user-image",src:a,circular:!0}),r.a.createElement("div",null,r.a.createElement("div",{className:"user-name"},o),r.a.createElement("span",null,i),r.a.createElement("div",{className:"comment-actions"},r.a.createElement(We,{likeCount:c}))))}var nt=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){if(!this.props.comments)return r.a.createElement("div",null);var e=this.props.comments.map((function(e){return r.a.createElement(tt,{comment:e,key:e.id})}));return r.a.createElement("div",null,r.a.createElement(et,{amountComments:this.props.amountComments}),e)}}]),n}(r.a.Component);n(367),n(368);function at(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"next-up-container"},r.a.createElement("h4",null,"Related Videos")),r.a.createElement(J,{horizontal:!0,video:e.video,pathname:"/watch",search:"?v=".concat(e.video.id)}),r.a.createElement(V.a,null))}function rt(e){if(!e.videos||!e.videos.length)return r.a.createElement("div",{className:"related-videos"});var t=e.videos[0],n=e.videos.slice(1).map((function(e){return r.a.createElement(J,{video:e,key:e.id,pathname:"/watch",search:"?v=".concat(e.id),horizontal:!0})}));return r.a.createElement("div",{className:"related-videos"},r.a.createElement(at,{video:t}),n)}n(369);var ot={byId:{}};function it(e,t){var n=e.find((function(e){return"youtube#channelListResponse"===e.result.kind})),a={};if(n&&n.result.items){var r=n.result.items[0];a[r.id]=r}return Object(p.a)(Object(p.a)({},t),{},{byId:Object(p.a)(Object(p.a)({},t.byId),a)})}function ct(e,t){var n=e.find((function(e){return"youtube#channelListResponse"===e.result.kind})),a={};if(n&&n.result.items){var r=n.result.items[0];a={[r.id]:r}}return Object(p.a)(Object(p.a)({},t),{},{byId:Object(p.a)(Object(p.a)({},t.byId),a)})}var st=function(e,t){return t?e.channels.byId[t]:null},ut=f("COMMENT_THREAD"),lt={request:function(e,t){return b(ut[m],{videoId:e,nextPageToken:t})},success:function(e,t){return b(ut[h],{response:e,videoId:t})},failure:function(e){return b(ut[v],{response:e})}},dt={byVideo:{},byId:{}};function pt(e,t,n){return mt(e.find((function(e){return"youtube#commentThreadListResponse"===e.result.kind})).result,t,n)}function mt(e,t,n){if(!e)return n;var a=e.items.reduce((function(e,t){return e[t.id]=t,e}),{}),r=n.byVideo[t]?n.byVideo[t].ids:[],o=[].concat(Object(Z.a)(r),Object(Z.a)(Object.keys(a))),i={nextPageToken:e.nextPageToken,ids:o};return Object(p.a)(Object(p.a)({},n),{},{byId:Object(p.a)(Object(p.a)({},n.byId),a),byVideo:Object(p.a)(Object(p.a)({},n.byVideo),{},{[t]:i})})}var ht=Object($.a)((function(e,t){var n=e.comments.byVideo[t];return n?n.ids:[]}),(function(e){return e.comments.byId}),(function(e,t){return e.map((function(e){return t[e]}))})),vt=Object($.a)((function(e,t){var n=ce(t,"v");return e.comments.byVideo[n]}),(function(e){return e?e.nextPageToken:null})),ft=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return this.props.videoId?r.a.createElement(Te,{bottomReachedCallback:this.props.bottomReachedCallback,showLoader:this.shouldShowLoader()},r.a.createElement("div",{className:"watch-grid"},r.a.createElement(Ye,{className:"video",id:this.props.videoId}),r.a.createElement(Xe,{className:"metadata",video:this.props.video}),r.a.createElement($e,{className:"video-info-box",video:this.props.video,channel:this.props.channel}),r.a.createElement(rt,{className:"related-videos",videos:this.props.relatedVideos}),r.a.createElement(nt,{className:"comments",comments:this.props.comments,amountComments:this.props.amountComments}))):r.a.createElement("div",null)}},{key:"shouldShowLoader",value:function(){return!!this.props.nextPageToken}}]),n}(r.a.Component);var bt=Object(d.b)((function(e,t){return{relatedVideos:Ee(e,t.videoId),video:Oe(e,t.videoId),channel:st(e,t.channelId),comments:ht(e,t.videoId),amountComments:ke(e,t.videoId)}}),null)(ft),yt=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).fetchMoreComments=function(){e.props.nextPageToken&&e.props.fetchCommentThread(e.getVideoId(),e.props.nextPageToken)},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.getVideoId();return r.a.createElement(bt,{videoId:e,channelId:this.props.channelId,bottomReachedCallback:this.fetchMoreComments,nextPageToken:this.props.nextPageToken})}},{key:"componentDidMount",value:function(){this.props.youtubeLibraryLoaded&&this.fetchWatchContent()}},{key:"componentDidUpdate",value:function(e){this.props.youtubeLibraryLoaded!==e.youtubeLibraryLoaded&&this.fetchWatchContent()}},{key:"getVideoId",value:function(){return ce(this.props.location,"v")}},{key:"fetchWatchContent",value:function(){var e=this.getVideoId();e||this.props.history.push("/"),this.props.fetchWatchDetails(e,this.props.channelId)}}]),n}(r.a.Component);var gt=Object(L.f)(Object(d.b)((function(e,t){return{youtubeLibraryLoaded:Se(e),channelId:je(e,t.location,"v"),nextPageToken:vt(e,t.location)}}),(function(e){var t=te,n=lt.request;return Object(Ne.b)({fetchWatchDetails:t,fetchCommentThread:n},e)}))(yt)),Ot=(n(370),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.getVideoPreviews();return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,null),r.a.createElement("div",{className:"video-list"},r.a.createElement(Te,{bottomReachedCallback:this.props.bottomReachedCallback,showLoader:this.props.showLoader},e)))}},{key:"getVideoPreviews",value:function(){return this.props.videos&&this.props.videos.length&&this.props.videos[0].snippet.description?this.props.videos.map((function(e){return r.a.createElement(J,{horizontal:!0,expanded:!0,video:e,key:e.id,pathname:"/watch",search:"?v="+e.id})})):null}}]),n}(r.a.Component)),Et=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).fetchMoreVideos=function(){var t=e.props.nextPageToken;e.props.youtubeLibraryLoaded&&t&&e.props.fetchMostPopularVideos(12,!0,t)},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.fetchTrendingVideos()}},{key:"componentDidUpdate",value:function(e){e.youtubeLibraryLoaded!==this.props.youtubeLibraryLoaded&&this.fetchTrendingVideos()}},{key:"render",value:function(){var e=this.shouldShowLoader();return r.a.createElement(Ot,{bottomReachedCallback:this.fetchMoreVideos,showLoader:e,videos:this.props.videos})}},{key:"fetchTrendingVideos",value:function(){this.props.youtubeLibraryLoaded&&this.props.fetchMostPopularVideos(20,!0)}},{key:"shouldShowLoader",value:function(){return!this.props.allMostPopularVideosLoaded}}]),n}(r.a.Component);var jt=Object(d.b)((function(e){return{videos:ve(e),youtubeLibraryLoaded:Se(e),allMostPopularVideosLoaded:Ce(e),nextPageToken:we(e)}}),(function(e){var t=E.request;return Object(Ne.b)({fetchMostPopularVideos:t},e)}))(Et),kt=(n(371),f("SEARCH_FOR_VIDEOS")),Ct={request:function(e,t,n){return b(kt[m],{searchQuery:e,nextPageToken:t,amount:n})},success:function(e,t){return b(kt[h],{response:e,searchQuery:t})},failure:function(e,t){return b(kt[v],{response:e,searchQuery:t})}};function wt(e,t,n){var a=e.items.map((function(e){return Object(p.a)(Object(p.a)({},e),{},{id:e.id.videoId})}));n.query===t&&(a=(n.results||[]).concat(a));return{totalResults:e.pageInfo.totalResults,nextPageToken:e.nextPageToken,query:t,results:a}}var xt=function(e){return e.search.results},It=function(e){return e.search.nextPageToken},Tt=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).bottomReachedCallback=function(){e.props.nextPageToken&&e.props.searchForVideos(e.getSearchQuery(),e.props.nextPageToken,25)},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(Ot,{bottomReachedCallback:this.bottomReachedCallback,showLoader:!0,videos:this.props.searchResults})}},{key:"getSearchQuery",value:function(){return ce(this.props.location,"search_query")}},{key:"componentDidMount",value:function(){this.getSearchQuery()||this.props.history.push("/"),this.searchForVideos()}},{key:"componentDidUpdate",value:function(e){e.youtubeApiLoaded!==this.props.youtubeApiLoaded&&this.searchForVideos()}},{key:"searchForVideos",value:function(){var e=this.getSearchQuery();this.props.youtubeApiLoaded&&this.props.searchForVideos(e)}}]),n}(r.a.Component);var Lt=Object(L.f)(Object(d.b)((function(e,t){return{youtubeApiLoaded:Se(e),searchResults:xt(e,t.location.search),nextPageToken:It(e,t.location.search)}}),(function(e){var t=Ct.request;return Object(Ne.b)({searchForVideos:t},e)}))(Tt)),Pt=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement(Qe,null,r.a.createElement(L.c,null,r.a.createElement(L.a,{path:"/webd171-7/feed/trending",component:jt}),r.a.createElement(L.a,{path:"/webd171-7/results",render:function(){return r.a.createElement(Lt,{key:e.props.location.key})}}),r.a.createElement(L.a,{path:"/webd171-7/watch",render:function(){return r.a.createElement(gt,{key:e.props.location.key})}}),r.a.createElement(L.a,{path:"/webd171-7",component:Ae})))}},{key:"componentDidMount",value:function(){this.loadYoutubeApi()}},{key:"loadYoutubeApi",value:function(){var e=this,t=document.createElement("script");t.src="https://apis.google.com/js/client.js",t.onload=function(){window.gapi.load("client",(function(){window.gapi.client.setApiKey("AIzaSyAx_UmOT4V-ZP8uQzm1QOZmXffk0aCx69w"),window.gapi.client.load("youtube","v3",(function(){e.props.youtubeLibraryLoaded()}))}))},document.body.appendChild(t)}}]),n}(a.Component);var Nt=Object(L.f)(Object(d.b)(null,(function(e){return Object(Ne.b)({youtubeLibraryLoaded:Ve},e)}))(Pt)),Vt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,397)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),o(e),i(e)}))},Rt=(n(372),Object(Ne.c)({api:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"YOUTUBE_LIBRARY_LOADED":return{libraryLoaded:!0};default:return e}},videos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O[h]:return ue(t.response,e);case y[h]:return le(t.response,e);case j[h]:return de(t.response,t.categories,e);case ee[h]:return pe(t.response,e);case re[h]:return me(t.response,e);default:return e}},channels:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ot,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ee[h]:return it(t.response,e);case re[h]:return ct(t.response,e);default:return e}},comments:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:dt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ut[h]:return mt(t.response,t.videoId,e);case ee[h]:return pt(t.response,t.videoId,e);default:return e}},search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case kt[h]:return wt(t.response,t.searchQuery,e);case kt[m]:return t.nextPageToken?e:{};default:return e}}})),St=n(183),Dt=n(14),At=n.n(Dt),Mt=n(12);function Ft(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:12,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2?arguments[2]:void 0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,r="nextPageToken,prevPageToken,items(contentDetails/duration,id,snippet(channelId,channelTitle,publishedAt,thumbnails/medium,title),statistics/viewCount),pageInfo(totalResults)";return t&&(r+=",items/snippet/description"),Gt("GET","/youtube/v3/videos",{part:"snippet,statistics,contentDetails",chart:"mostPopular",maxResults:e,regionCode:"US",pageToken:n,fields:r,videoCategoryId:a},null)}function Bt(e){return Gt("GET","/youtube/v3/videos",{part:"snippet,statistics,contentDetails",id:e,fields:"kind,items(contentDetails/duration,id,snippet(channelId,channelTitle,description,publishedAt,thumbnails/medium,title),statistics)"},null)}function _t(e){return Gt("GET","/youtube/v3/channels",{part:"snippet,statistics",id:e,fields:"kind,items(id,snippet(description,thumbnails/medium,title),statistics/subscriberCount)"},null)}function Ut(e,t){return Gt("GET","/youtube/v3/commentThreads",{part:"id,snippet",pageToken:t,videoId:e},null)}function qt(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:12;return Gt("GET","/youtube/v3/search",{part:"id,snippet",q:e,type:"video",pageToken:t,maxResults:n},null)}function zt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12;return Gt("GET","/youtube/v3/search",{part:"snippet",type:"video",maxResults:t,relatedToVideoId:e},null)}function Gt(e,t,n,a){var r;if(n=function(e){for(var t in e)e[t]&&"undefined"!==e[t]||delete e[t];return e}(n),a){var o=function(e){var t={},n=e;for(var a in e){var r=e[a];if(a&&"[]"===a.substr(-2,2)){var o=a.replace("[]","");r&&(n[o]=r.split(",")),delete n[a]}}for(var i in n)if(n.hasOwnProperty(i)&&n[i])for(var c=i.split("."),s=t,u=0;u<c.length;u++){var l=c[u];u===c.length-1?s[l]=n[i]:s=s[l]=s[l]||{}}return t}(a);r=window.gapi.client.request({body:o,method:e,path:t,params:n})}else r=window.gapi.client.request({method:e,path:t,params:n});return r}var Qt=At.a.mark(Kt),Yt=At.a.mark(Zt),Ht=At.a.mark($t),Wt=At.a.mark(en),Xt=At.a.mark(tn),Jt=On.bind(null,(function(){return Gt("GET","/youtube/v3/videoCategories",{part:"snippet",regionCode:"US"},null)}),g);function Kt(e){var t,n;return At.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.map((function(e){var t=En(Ft,12,!1,null,e);return Object(Mt.b)(t)})),a.prev=1,a.next=4,Object(Mt.a)(t);case 4:return n=a.sent,a.next=7,Object(Mt.d)(C(n,e));case 7:a.next=13;break;case 9:return a.prev=9,a.t0=a.catch(1),a.next=13,Object(Mt.d)(w(a.t0));case 13:case"end":return a.stop()}}),Qt,null,[[1,9]])}function Zt(e,t,n){var a;return At.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=Ft.bind(null,e,t,n),r.next=3,On(a,E);case 3:case"end":return r.stop()}}),Yt)}function $t(){var e,t,n,a;return At.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,Object(Mt.e)(O[m]);case 3:return e=r.sent,t=e.amount,n=e.loadDescription,a=e.nextPageToken,r.next=9,Object(Mt.c)(Zt,t,n,a);case 9:r.next=0;break;case 11:case"end":return r.stop()}}),Ht)}function en(){return At.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Mt.f)(y[m],Jt);case 2:case"end":return e.stop()}}),Wt)}function tn(){var e,t;return At.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,Object(Mt.e)(j[m]);case 3:return e=n.sent,t=e.categories,n.next=7,Object(Mt.c)(Kt,t);case 7:n.next=0;break;case 9:case"end":return n.stop()}}),Xt)}var nn=At.a.mark(on),an=At.a.mark(cn),rn=At.a.mark(sn);function on(e,t){var n,a;return At.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=[Bt.bind(null,e),zt.bind(null,e),Ut.bind(null,e)],t&&n.push(_t.bind(null,t)),r.prev=2,r.next=5,Object(Mt.a)(n.map((function(e){return Object(Mt.b)(e)})));case 5:return a=r.sent,r.next=8,Object(Mt.d)(ne(a,e));case 8:return r.next=10,Object(Mt.b)(cn,a,null===t);case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(2),r.next=16,Object(Mt.d)(ae(r.t0));case 16:case"end":return r.stop()}}),nn,null,[[2,12]])}function cn(e,t){var n,a,r,o,i,c;return At.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return n=e.find((function(e){return"youtube#searchListResponse"===e.result.kind})),a=n.result.items.map((function(e){return e.id.videoId})),r=a.map((function(e){return Bt.bind(null,e)})),t&&(o=e.find((function(e){return"youtube#videoListResponse"===e.result.kind})),(i=o.result.items)&&i.length&&r.push(_t.bind(null,i[0].snippet.channelId))),s.prev=4,s.next=7,Object(Mt.a)(r.map((function(e){return Object(Mt.b)(e)})));case 7:return c=s.sent,s.next=10,Object(Mt.d)(oe(c));case 10:s.next=16;break;case 12:return s.prev=12,s.t0=s.catch(4),s.next=16,Object(Mt.d)(ie(s.t0));case 16:case"end":return s.stop()}}),an,null,[[4,12]])}function sn(){var e,t,n;return At.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=3,Object(Mt.e)(ee[m]);case 3:return e=a.sent,t=e.videoId,n=e.channelId,a.next=8,Object(Mt.c)(on,t,n);case 8:a.next=0;break;case 10:case"end":return a.stop()}}),rn)}var un=At.a.mark(dn),ln=At.a.mark(pn);function dn(e,t){var n;return At.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=Ut.bind(null,e,t),a.next=3,On(n,lt,e);case 3:case"end":return a.stop()}}),un)}function pn(){var e,t,n;return At.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=3,Object(Mt.e)(ut[m]);case 3:return e=a.sent,t=e.videoId,n=e.nextPageToken,a.next=8,Object(Mt.c)(dn,t,n);case 8:a.next=0;break;case 10:case"end":return a.stop()}}),ln)}var mn=At.a.mark(vn),hn=At.a.mark(fn);function vn(e,t,n){var a;return At.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=qt.bind(null,e,t,n),r.next=3,On(a,Ct,e);case 3:case"end":return r.stop()}}),mn)}function fn(){var e,t,n,a;return At.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,Object(Mt.e)(kt[m]);case 3:return e=r.sent,t=e.searchQuery,n=e.amount,a=e.nextPageToken,r.next=9,Object(Mt.c)(vn,t,a,n);case 9:r.next=0;break;case 11:case"end":return r.stop()}}),hn)}var bn=At.a.mark(gn),yn=At.a.mark(On);function gn(){return At.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Mt.a)([Object(Mt.c)($t),Object(Mt.c)(en),Object(Mt.c)(tn),Object(Mt.c)(sn),Object(Mt.c)(pn),Object(Mt.c)(fn)]);case 2:case"end":return e.stop()}}),bn)}function On(e,t){var n,a,r,o,i=arguments;return At.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:for(n=i.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=i[r];return c.prev=1,c.next=4,Object(Mt.b)(e);case 4:return o=c.sent,c.next=7,Object(Mt.d)(t.success.apply(t,[o.result].concat(a)));case 7:c.next=13;break;case 9:return c.prev=9,c.t0=c.catch(1),c.next=13,Object(Mt.d)(t.failure.apply(t,[c.t0].concat(a)));case 13:case"end":return c.stop()}}),yn,null,[[1,9]])}function En(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];return function(){var t=function(e){return e};return e.apply(void 0,n).then(t,t)}}n(374).config();var jn=function(){var e=Object(St.a)(),t=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Ne.d,n=Object(Ne.e)(Rt,t(Object(Ne.a)(e)));return e.run(gn),n}();i.a.render(r.a.createElement(d.a,{store:jn},r.a.createElement(T.a,null,r.a.createElement(Nt,null))),document.getElementById("root")),Vt()}},[[196,1,2]]]);
//# sourceMappingURL=main.ae2859a0.chunk.js.map