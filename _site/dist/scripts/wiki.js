define("utils/developer-notes-logger",[],function(){function e(){return console&&console.group?(console.group($($("h1").get(0)).text()),$(".wiki-section").each(function(){var e=$(this);e.find("> h2").text()&&console.groupCollapsed(e.find("> h2").text()),t(e),e.find(".sub-section").each(function(){var e=$(this);e.find("> h3").text()&&console.groupCollapsed(e.find("> h3").text()),t(e),e.find(".example").each(function(){var e=$(this);e.find("> h4").text()&&console.groupCollapsed(e.find("> h4").text()),t(e),e.find("> h4").text()&&console.groupEnd()}),e.find("> h3").text()&&console.groupEnd()}),e.find("> h2").text()&&console.groupEnd()}),console.groupEnd(),void 0):(console.log("Please use a real browser for developer notes"),void 0)}function t(e){var t=e.find("> .developer-notes"),i=e.find("> .dependencies").html(),a=e.find("> .init").html();t.each(function(){o($(this).html())}),o(i,"Dependencies"),o(a,"Initialisation"),n(e)}function n(e){var t=e.find("> .demo").attr("data-selector"),n=e.find("> .demo > "+t).not(".developer-notes");n.each(function(){o(this.outerHTML,"'"+this.tagName+"' html")})}function o(e,t){e&&e.trim().length&&(t&&console.groupCollapsed(t),console.log.apply(console,i(e.trim().replace(/&lt;/g,"<").replace(/&gt;/g,">"))),t&&console.groupEnd())}function i(e){var t=null===e.match(/<code>/gi)?0:e.match(/<code>/gi).length,n=e.replace(/<code>/gi,"%c").replace(/<\/code>/gi,"%c"),o=[n];if(n.indexOf("%c")>-1)for(var i=0;t>i;i++)o.push("background: #FDF6E3; color: #777;"),o.push("background:white; color:black;");return o}return e}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.skycons=function(){function e(){var e,t=document,n=(t.documentElement,t.body),o=!1,i=t.createElement("p"),a=t.createElement("style"),s='#testbefore:before { content: "before"; }';return a.type="text/css",i.id="testbefore",a.styleSheet?a.styleSheet.cssText=s:a.appendChild(t.createTextNode(s)),n.appendChild(a),n.appendChild(i),e=t.getElementById("testbefore").offsetHeight,e>=1&&(o=!0),n.removeChild(a),n.removeChild(i),o}function t(e,t){var n=e.innerHTML,i=o[t];e.innerHTML='<span style="font-family: \'skycons\'" class="ie7-skycon">'+i+"</span>"+n}function n(){if(!e()){var n,o,i,a=document.getElementsByTagName("*");for(n=0;i=a[n],i;n+=1)o=i.className,o=o.match(/skycon-[^\s'"]+/),o&&t(i,o[0])}}var o={"skycon-sky":"&#xf100;","skycon-chevron-down":"&#xf101;","skycon-sky-plus":"&#xf102;","skycon-tv":"&#xf103;","skycon-twitter-reply":"&#xf104;","skycon-chevron-up":"&#xf105;","skycon-chevron":"&#xf106;","skycon-facebook":"&#xf107;","skycon-remote-record":"&#xf108;","skycon-warning":"&#xf109;","skycon-carousel-play":"&#xf10a;","skycon-arrow-left":"&#xf10b;","skycon-on-demand":"&#xf10c;","skycon-user-profile":"&#xf10d;","skycon-search":"&#xf10e;","skycon-twitter-retweet":"&#xf10f;","skycon-volume":"&#xf110;","skycon-twitter-favourite":"&#xf111;","skycon-expand":"&#xf112;","skycon-carousel-pause":"&#xf113;","skycon-mouse":"&#xf114;","skycon-share":"&#xf115;","skycon-never-miss":"&#xf116;","skycon-mail":"&#xf117;","skycon-sky-go":"&#xf118;","skycon-twitter-follow":"&#xf119;","skycon-minify":"&#xf11a;","skycon-twitter":"&#xf11b;","skycon-close":"&#xf11c;","skycon-menu":"&#xf11d;","skycon-phone":"&#xf11e;","skycon-cloud":"&#xf11f;","skycon-google-plus":"&#xf120;"};return{add:t,init:n}}(),"function"==typeof window.define&&window.define.amd&&define("utils/skycons",[],function(){return toolkit.skycons}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.hashmanager=function(){function e(){$(window).on("hashchange",t);var e=document.documentMode,n="onhashchange"in window&&(void 0===e||e>7);n||(s.hash=document.location.hash,setInterval(function(){document.location.hash!==s.hash&&$(window).trigger("hashchange")},200)),s.windowLoaded=!0}function t(e){var t,n;e=a("string"==typeof e?e:location.hash),e?(t=s.globalHashList[e],n="callback",s.lastExecutor=e):s.lastExecutor&&(t=s.globalHashList[s.lastExecutor],n="undo"),t&&"function"==typeof t[n]&&t[n](e)}function n(){var e=window.location;"pushState"in history?(location.hash="!",history.pushState("",document.title,e.pathname+e.search)):location.hash="!"}function o(e){location.hash="!"+e}function i(e,n,o){var i=s.globalHashList;$(e).each(function(e,r){if(r=a(r),i[r]){var d="hashManager: hash ("+r+") already exists";throw new Error(d)}i[r]={callback:n,undo:o},s.windowLoaded&&r===a(location.hash)&&t(r)})}function a(e){return e.replace(/[#!]/g,"")}var s={globalHashList:{},hasLoaded:!1,windowLoaded:!1,lastExecutor:null,hash:null};return e(),{register:i,change:o,remove:n,onHashChange:t,cleanHash:a}}(),"function"==typeof window.define&&window.define.amd&&define("utils/hashmanager",[],function(){return toolkit.hashmanager}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.popup=function(){function e(e){var t=e.url,n=e.width||400,o=e.height||n,i=e.top||screen.height/2-o/2,a=e.left||screen.width/2-n/2,s=e.title||"Sky";return window.open(t,s,"top="+i+",left="+a+",width="+n+",height="+o)}function t(){$("body").on("click","[data-popup]",function(t){t.preventDefault();var n=$.extend($(this).data("popup"),{url:$(this).attr("href")});e(n)})}return{init:t,open:e}}(),"function"==typeof window.define&&window.define.amd&&define("utils/popup",[],function(){return toolkit.popup}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.diff=function(){function e(e){var n=e.oldRoute,o=e.newRoute;a(),$("a[data-diff]").each(function(){t(n,o,$(this).attr("data-diff"))})}function t(e,t,n){var i,a,s=n.split("/")[n.split("/").length-1],r=t+"/"+n+".html",d=e+"/"+n+".html";i=$.ajax({crossDomain:!0,url:r,cache:!1}),a=$.ajax({crossDomain:!0,url:d,cache:!1}),$.when(i,a).done(function(e,t){var n=$('<div class="togglee" data-toggle="'+s+'"><table id="'+s+'-table"></table></div>');n.append($('<textarea id="'+s+'" class="hidden latest"></textarea>').val(e)).append($('<textarea id="old-'+s+'" class=hidden></textarea>').val(t)),$("[data-diff-container]").append('<h3 class="has-toggle wiki-h3 smaller" id="'+s+'-header"><span class="toggler" for="'+s+'"></span>'+s+"</h3>").append(n),o(s,t[0].split("\n"),e[0].split("\n"))})}function n(e,t,o,a,s,r){if(s>0&&r>0&&o[r-1]===a[s-1])n(e,t,o,a,s-1,r-1),i(e,s,r," ",o[r-1]);else if(s>0&&(0===r||t[r][s-1]>=t[r-1][s]))n(e,t,o,a,s-1,r),i(e,s,"","+",a[s-1]);else{if(!(r>0&&(0===s||t[r][s-1]<t[r-1][s])))return;n(e,t,o,a,s,r-1),i(e,"",r,"-",o[r-1],"")}}function o(e,t,o){var i,a,s=new Array(t.length+1);for(a=0;a<s.length;a++)for(s[a]=new Array(o.length+1),i=0;i<s[a].length;i++)s[a][i]=0;for(a=1;a<s.length;a++)for(i=1;i<s[a].length;i++)s[a][i]=t[a-1]===o[i-1]?1+s[a-1][i-1]:Math.max(s[a-1][i],s[a][i-1]);try{n(e,s,t,o,i-1,a-1)}catch(r){alert(r)}}function i(e,t,n,o,i){var a=document.getElementById(e+"-table"),s=document.getElementById(e+"-header"),r=document.createElement("tr"),d=document.createElement("td"),c=document.createElement("td"),l=document.createElement("td"),u=document.createTextNode(n),h=document.createTextNode(t),f=document.createTextNode(o+" "+i);"+"===o?(r.className="add",$(s).addClass("add")):"-"===o&&(r.className="del",$(s).addClass("del")),d.className="codekolom",c.className="codekolom",l.className="bredecode",d.appendChild(u),c.appendChild(h),l.appendChild(f),r.appendChild(d),r.appendChild(c),r.appendChild(l),a.appendChild(r)}function a(){$(".sky-form .error").text(""),$(".togglee").remove(),$(".has-toggle").remove()}return e}(),"function"==typeof window.define&&window.define.amd&&define("utils/diff",[],function(){return toolkit.diff}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.tabs=function(e){function t(){h.rememberState?(e.register(n(),o),u.showMore.on("click",function(e){e.preventDefault(),a($(this))}),$("body").on("click",function(e){$(e.target).closest(u.showMore).length||($(u.showMore).parent("div").children("ul").removeClass("dropdown-tab-selected"),$(u.showMore).removeClass("dropdown-tab-selected"))}),u.tabs.on("click",function(e){$(e.target).parents(".dropdown-tab-info").length&&console.log(e.target)}),$(document).ready(function(){c(),s()}),$(window).bind("skycom.resizeend",function(){c(),s()})):(u.tabs.on("click",function(e){e.preventDefault(),o($(this).find("a").attr("href"))}),u.showMore.on("click",function(e){e.preventDefault()}))}function n(){var e=[];return u.tabs.each(function(){e.push($(this).attr("aria-controls"))}),e}function o(e){u.tabTargets.add(u.tabs).removeClass("selected"),$("#"+e+"-tab").add($("#"+e)).addClass("selected"),$this=$("#"+e+"-tab"),$this.parents().is("ul.dropdown-tab-info")?($($("ul.tabs").children("li").last()).prependTo(".dropdown-tab-info"),$this.insertAfter($("ul.tabs").children("li").last()),l(),h.hasSwitchedOut=!0):h.hasSwitchedOut&&($($("ul.tabs").children("li").last()).appendTo(".dropdown-tab-info"),$(".dropdown-tab-info").children("li").first().insertAfter($("ul.tabs").children("li").last()),l(),h.hasSwitchedOut=!1)}function a(e){$(e).parent("div").children("ul").hasClass("dropdown-tab-selected")?($(u.showMore).removeClass("dropdown-tab-selected"),$(e).parent("div").children("ul").removeClass("dropdown-tab-selected")):($(u.showMore).addClass("dropdown-tab-selected"),$(e).parent("div").children("ul").addClass("dropdown-tab-selected"))}function s(){$(".dropdown-tab-info").each(function(){$(this).children("li").length||$(this).parent("div").hide()})}function r(){return $containerWidth=u.tabContainer.width(),totalWidth=0,numberOfTabs=0,$(".tabs [id$=-tab]").each(function(){if(totalWidth+=$(this).find("a span").innerWidth()+30,$containerWidth>totalWidth)numberOfTabs++;else if(totalWidth>$containerWidth)return numberOfTabs}),numberOfTabs}function d(e){i=0,$(".tabs").children("li").each(function(){i>=e?($(this).appendTo(".dropdown-tab-info"),l(),$(".dropdown-tab-select").show()):i++})}function c(){return numberOfTabs=r(),d(numberOfTabs),numberOfTabs>=$(".tabs").children("li").length+1?($(".dropdown-tab-info li").first().insertBefore(".tabs div.dropdown-tab-select"),!1):void 0}function l(){h.sortDropdown=[],$(".dropdown-tab-info li").each(function(){h.sortDropdown.push($(this).attr("data-value"))}),h.sortDropdown.sort(),$.each(h.sortDropdown,function(){$('.dropdown-tab-info li[data-value="'+this+'"').appendTo(".dropdown-tab-info")})}var u={tabContainer:$("section[data-function=tabs]"),tabs:$("section[data-function=tabs] li[role=tab]"),tabTargets:$("section[data-function=tabs] div[role=tabpanel]"),showMore:$("section[data-function=tabs] ul[role=tablist] .dropdown-tab-select a"),dropdownTab:$("section[data-function=tabs] ul[role=tablist] .dropdown-tab-select ul.dropdown-tab-info")},h={rememberState:"true"===u.tabContainer.attr("data-remember-state"),hasSwitchedOut:!1,sortDropdown:[],sortTabs:[]};return t(),{getHashList:n,changeTab:o}}(toolkit.hashmanager),"function"==typeof window.define&&window.define.amd&&define("modules/tabs",["utils/hashmanager"],function(){return toolkit.tabs}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.share=function(){function e(){o.shareCount.on("click keypress",t)}function t(e){e.preventDefault();var t=$(this).parent(),n="keypress "+("ontouchend"in document.documentElement?"touchend":"click");("click"===e.type||"touchend"===e.type||"keypress"===e.type&&13===e.which)&&(t.toggleClass("active"),o.document.on(n,function i(e){$.contains(t[0],e.target)||(t.removeClass("active"),o.document.off(n,i))}))}function n(){e()}var o={document:$(document),shareCount:$(".share-popup .summary")};return{init:n,toggleSharePopover:t}}(),"function"==typeof window.define&&window.define.amd&&define("modules/share",[],function(){return toolkit.share}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.carousel=function(e,t){function n(e,t){this.options=t,this.$viewport=e,this.$slideContainer=e.find(".skycom-carousel-container"),this.$slides=this.$slideContainer.find(">"),this.currentIndex=0,this.slideCount=this.$slides.length,this.timerId=!1,this.touchReset(),this.bindEvents()}function o(e,t){this.carousel=e,this.wrapper=e.$viewport.find(".video-wrapper"),this.wrapper.attr("id","video-"+t.videoId),this.videocontrolcontainer=e.$viewport.find(".videocontrolcontainer"),this.player=e.$viewport.find("video"),this.videocontrolcontainer.find("img").on("error",function(){this.src=t.placeHolderImage}),this.options=t,this.bindEvents()}var i=function(){return"WebKitCSSMatrix"in e&&"m11"in new e.WebKitCSSMatrix}(),a=function(){var e=document.body.style;return void 0!==e.transform||void 0!==e.WebkitTransform||void 0!==e.MozTransform||void 0!==e.OTransform}();n.prototype={unbindTouchEvents:function(){this.$slideContainer.off("touchstart touchmove touchend touchcancel")},bindTouchEvents:function(){this.$slideContainer.on("touchstart",this.touchstart.bind(this)).on("touchmove",this.touchmove.bind(this)).on("touchend",this.touchend.bind(this)).on("touchcancel",this.touchReset.bind(this))},bindEvents:function(){this.bindTouchEvents(),this.$slideContainer.find("a").on("click",this.pause.bind(this))},unbindEvents:function(){this.unbindTouchEvents(),this.$slideContainer.find("a").off("click")},setOffset:function(e,t){var n=this.$slideContainer.removeClass("animate");return t&&n.addClass("animate"),i?n.css("transform","translate3d("+e+"%,0,0) scale3d(1,1,1)"):a?n.css("transform","translate("+e+"%,0)"):t?n.animate({left:2*e+"%"},600):n.css({left:2*e+"%"}),this},moveSlide:function(e){var t,n,o=this,i=this.$slides;return n=e.index>=this.slideCount?0:e.index<0?this.slideCount-1:e.index,t=e.index>this.currentIndex&&!e.reverse?"left":"right",i.filter(":not(:eq("+this.currentIndex+"))").hide(),i.eq(this.currentIndex).css("float",t),i.eq(n).show().css("float","left"==t?"right":"left"),this.setOffset(e.start,!1),"undefined"!=typeof e.end&&(setTimeout(function(){o.setOffset(e.end,!0),o.$viewport.trigger("change",n)},20),this.currentIndex=n,"function"==typeof e.callback&&e.callback(n)),n},"goto":function(e,t,n){return t!==!1&&this.pause(),e!==this.currentIndex?(e>this.currentIndex?this.moveSlide({index:e,start:0,end:-50,callback:n}):this.moveSlide({index:e,start:-50,end:0,callback:n}),this):void 0},next:function(e,t){return this.goto(this.currentIndex+1,e,t),this.$viewport.find(".indicators, .actions").css("display","block"),this},previous:function(){return this.goto(this.currentIndex-1),this.$viewport.find(".indicators, .actions").css("display","block"),this},play:function(e,t){var n=this,o=this.options.interval;return n.timerId=setTimeout(function(){n.next(!1),n.timerId=setTimeout(function e(){n.next(!1,function(){n.timerId=setTimeout(e,o)})},o)},t||this.options.onPlayDelay),this.$viewport.trigger("playing"),"function"==typeof e&&e(),this},pause:function(e){return clearTimeout(this.timerId),this.$viewport.trigger("paused"),"function"==typeof e&&e(),this},touchstart:function(e){var t=e.originalEvent.touches[0];this.pause(),this.swipe.start={x:t.pageX,y:t.pageY}},touchmove:function(e){var t,n=this.swipe,o=e.originalEvent.touches[0],i=o.pageX-n.start.x,a=o.pageY-n.start.y,s=Math.abs(i)>Math.abs(a),r=0>i?this.currentIndex+1:this.currentIndex-1;n.start&&s!==!1&&(e.preventDefault(),t=100*(i/this.$slideContainer.outerWidth(!0)),i>0&&(t-=50),this.swipe.positionAsPercentage=t,this.moveSlide({index:r,start:t}))},touchend:function(e){if(this.swipe.start){var t=this.swipe,n=t.positionAsPercentage,o=e.originalEvent.changedTouches[0],i=o.pageX-t.start.x,a=null,s=75;if(Math.abs(i)>s&&(a=0>i?"left":"right"),"left"===a)this.moveSlide({index:this.currentIndex+1,start:n,end:-50}),this.$viewport.find(".next").trigger("toolkit.track");else if("right"===a)this.moveSlide({index:this.currentIndex-1,start:n,end:0}),this.$viewport.find(".previous").trigger("toolkit.track");else if(0!==n){var r,d=i>0?n+50:n,c=this.currentIndex,l=0;0>d?this.currentIndex=c+1>=this.slideCount?0:c+1:(this.currentIndex-=1,l=-50,d-=50),r=0===this.currentIndex&&c===this.slideCount-1,this.moveSlide({index:c,start:d,end:l,reverse:r})}this.touchReset()}},touchReset:function(){this.swipe={start:!1,positionAsPercentage:0}}},o.prototype={bindEvents:function(){var e=this,t=function(e){e.preventDefault()},n=function(){return e.stop(),o.off("click",t),!1},o=this.wrapper;o.on("click",t).find(".close").one("click touchstart",n),this.player.on("ended webkitendfullscreen",n)},play:function(){var e=this,t=this.carousel.$viewport.find(".actions, .indicators");this.originalHtml=this.videocontrolcontainer.html(),this.carousel.pause(),this.showCanvas(function(){t.hide(),e.carousel.unbindTouchEvents(),e.player.sky_html5player(e.options),setTimeout(function(){sky.html5player.play()},1333)})},stop:function(){var n=this,o=this.carousel.$viewport.find(".actions, .indicators");t(e).off("skycom.resizeend",n.resizeCarousel),sky.html5player.close(this.wrapper),n.videocontrolcontainer.html(n.originalHtml),this.hideCanvas(function(){n.carousel.bindTouchEvents(),o.show()})},showCanvas:function(n){var o,i=this.carousel.$viewport,a=i.find(".video-overlay"),s=i.find(".video-wrapper"),r=i.find(".play-video"),d=i.find(".video-wrapper .close"),c=500,l=this;this.originalHeight=i.height(),s.addClass("playing-video"),a.fadeIn(function(){r.fadeOut(),o=l.calculateHeightForVideo(),i.animate({height:o},c,function(){t(e).on("skycom.resizeend",t.proxy(l.resizeCarousel,l)),s.show(),a.fadeOut(c,function(){d.addClass("active")}),n()})})},calculateHeightForVideo:function(){return Math.round(9*(this.carousel.$viewport.width()/16))},resizeCarousel:function(){this.carousel.$viewport.animate({height:this.calculateHeightForVideo()},250)},hideCanvas:function(e){var t=this.carousel.$viewport,n=t.find(".video-overlay"),o=t.find(".video-wrapper"),i=t.find(".play-video"),a=t.find(".video-wrapper .close"),s=500,r=this.originalHeight;n.fadeIn(s,function(){a.removeClass("active"),t.animate({height:r},s,function(){t.css({height:"auto"}),e(),i.fadeIn(),n.hide(),o.fadeOut(),o.removeClass("playing-video")})})}},t.fn.skycom_carousel=function(e){var i=t.extend(!0,{carousel:{actions:[{id:"play",label:"Play Carousel"},{id:"pause",label:"Pause Carousel"},{id:"previous",label:"Previous"},{id:"next",label:"Next"}],autoplay:!0,startSlideIndex:0,onPlayDelay:500,interval:6e3},video:{token:"8D5B12D4-E1E6-48E8-AF24-F7B13050EE85",autoplay:!1,videoId:null,freewheel:!1,placeHolderImage:"//static.video.sky.com/posterframes/skychasky.jpg"}},e),a={actions:function(e,n){var o,i,a,s,r="",d=n.actions,c=n.onclick;if(n.count<=1)return this;for(a in d)s="",o=d[a].id,i=d[a].label,("next"==o||"previous"==o)&&(s=" hidden-touch "),r+='<a href="#" class="skycom-internal '+s+o+'" >',r+='<span class="icon-carousel-'+o+'"></span>'+i,("next"==o||"previous"==o)&&(r+='<span class="icon-carousel-'+o+'-over over"></span>'),r+="</a>";return e.find(".skycom-carousel-container").before('<div class="actions">'+r+"</div>"),e.find("> .actions > *").each(function(e){t(this).attr("data-action",d[e].id).on("click",function(t){c(d[e].id),t.preventDefault()})}),this},indicators:function(e,n){var o,i,a=n.count,s=n.onclick,r='<div class="indicators"><div class="container">',d=' class="active"';if(1>=a)return this;for(i=a;i--;)r+="<span"+d+' data-tracking data-tracking-label="indicator"></span>',d="";return o=t(r+"</div></div>").on("click","span",function(e){s(t(e.currentTarget).index())}),e.append(o),this},video:function(e){return e.append('<div class="video-overlay"></div>'),this}};return this.each(function(){var e=t(this),s=new n(e,i.carousel),r=function(t){a.indicators(e,{count:t.slideCount,onclick:function(e){t.goto(e)}}).actions(e,{count:t.slideCount,actions:i.carousel.actions,onclick:function(e){t[e]()}}).video(e)};r(s),e.on("click",".play-video",function(e){e.preventDefault(),i.video.videoId=t(this).attr("data-video-id"),i.carousel.videoAds&&(i.video.freewheel=!0);var n=new o(s,i.video);n.play()}).on("change",function(t,n){n=n||0,e.find(".indicators .container > *").removeClass("active").eq(n).addClass("active"),s.$slides.removeClass("active").find("a").attr("tabindex",-1),s.$slides.eq(n).addClass("active").find("a").removeAttr("tabindex")}).on("playing",function(){e.removeClass("paused").addClass("playing")}).on("paused",function(){e.removeClass("playing").addClass("paused")}).on("pause",function(){s.pause()}).on("play",function(){s.play()}).on("refresh",function(t,n){s.$slides=s.$slideContainer.find(">"),s.slideCount=s.$slides.length,e.find(".indicators").remove(),e.find(".actions").remove(),e.find(".video-overlay").remove(),r(s),n=parseInt(n,10),isNaN(n)||0>n?n=0:n>s.slideCount-1&&(n=s.slideCount-1),n>s.currentIndex?s.moveSlide({index:n,start:0,end:-50}):s.moveSlide({index:n,start:-50,end:0})}).on("keyup",function(e){switch(e.keyCode){case 9:s.pause();break;case 37:s.previous();break;case 39:s.next()}}).find(".toggle-terms").on("click",function(){s.$viewport.toggleClass("showing-tandcs")}),s.slideCount>1?(s[i.carousel.autoplay===!0?"play":"pause"](!1,i.carousel.interval),s.goto(i.carousel.startSlideIndex,!1),e.trigger("change")):s.unbindTouchEvents()})}}(window,jQuery),"function"==typeof window.define&&window.define.amd&&define("modules/carousel",[],function(){return toolkit.carousel}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.datepicker=function(){function e(){f.datepicker.keyup(function(){this.value!=this.value.replace(/\D/g,"")&&(this.value=this.value.replace(/\D/g,""))}),f.datepicker.on("focus",function(){$(".calendar").show()}),f.day.on("keyup",function(){f.day.val()>a(m,y)&&f.day.val(a(m,y)),("00"===f.day.val()||"0"===f.day.val())&&f.day.val("01"),2===f.day.val().length&&(v=parseInt(f.day.val(),10),g=parseInt(v,10),t())}).on("blur",function(){f.day.val().length<2&&0!==f.day.val().length&&(v=parseInt(f.day.val(),10),g=parseInt(v,10),"00"!==f.day.val()&&"0"!==f.day.val()?f.day.val("0"+f.day.val()):f.day.val("01"),t())}).on("keydown",function(e){e.shiftKey&&9==e.keyCode&&$(".calendar").hide()}),f.month.on("keyup",function(){f.month.val()>12&&f.month.val("12"),("00"===f.month.val()||"0"===f.month.val())&&f.month.val("01"),2===f.month.val().length&&(m=parseInt(f.month.val(),10)-1,k=parseInt(m,10),t())}).on("blur",function(){f.month.val().length<2&&0!==f.month.val().length&&(m=parseInt(f.month.val(),10)-1,k=parseInt(m,10),"00"!==f.month.val()&&"0"!==f.month.val()?f.month.val("0"+f.month.val()):f.month.val("01"),t())}),f.year.on("keyup",function(){4===f.year.val().length&&(y=parseInt(f.year.val(),10),w=parseInt(y,10),t())}).on("keydown",function(e){console.log(e.keyCode),9===e.keyCode&&$(".calendar").hide()}),$(".monthleft").on("click",o),$(".monthright").on("click",i),$(document).on("keyup",function(e){27==e.keyCode&&$(".calendar").hide()})}function t(){$(".monthyearval").html(p[m]+" "+y),n(a(m,y),s(m,y)),$(".daycontainer .day").on("click",function(){console.log("picked date"),v=this.innerHTML,$(".daycontainer").find(".selected").removeClass("selected"),$(this).addClass("selected"),f.day.val(10>v?"0"+v:v),g=v,f.month.val(10>m+1?"0"+(m+1):m+1),k=m,f.year.val(y),w=y,$(".calendar").hide()}),$(document).click(function(e){"datepicker"==e.target.class||$(".datepicker").find(e.target).length||$(".calendar").hide()}),console.log("rendering calendar"),console.log("values: day: "+v+". month: "+m+". year: "+y),console.log("calender vals: days in month: "+a(m+1,y)+". first day: "+s(m,y)),console.log("Input day: "+g+" input month: "+k+" input year: "+w)}function n(e,t){for(var n="",o=1;t>o;o++)n+="<span></span>";for(var i=1;e>=i;i++)n+=i==g&&m==k&&y==w?x>m&&C>=y||b>i&&x>=m&&C>=y?"<span class='past selected day' data-day='"+i+"'>"+i+"</span>":"<span class='selected day' data-day='"+i+"'>"+i+"</span>":x>m&&C>=y?"<span class='past day' data-day='"+i+"'>"+i+"</span>":b>i&&x>=m&&C>=y?"<span class='past day' data-day='"+i+"'>"+i+"</span>":"<span class='day' data-day='"+i+"'>"+i+"</span>";$(".daycontainer").html(n)}function o(){0===m?(m=11,y--):m--,t()}function i(){11===m?(m=0,y++):m++,t()}function a(e,t){return[31,r(t)?29:28,31,30,31,30,31,31,30,31,30,31][e]}function s(e,t){var n=new Date(t,e,1).getDay();return 0===n?7:n}function r(e){return 0===e%4&&0!==e%100||0===e%400}function d(){return(new Date).getDate()}function c(){return(new Date).getMonth()}function l(){return(new Date).getFullYear()}function u(){$(".datepicker .datepicker-container").append('<div class="calendar"><div class="monthyear"><span class="monthleft">&larr;</span><span class="monthyearval"></span><span class="monthright">&rarr;</span></div><div class="days"><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span></div><div class="daycontainer"></div></div>')}function h(){u(),t(),e()}var f={datepicker:$(".datepicker input"),date:$(".datepicker-input"),day:$("#day"),month:$("#month"),year:$("#year"),monthleft:$(".monthleft"),monthright:$(".monthright"),dayspan:$(".daycontainer .day"),monthyear:$(".monthyear")},p=["January","February","March","April","May","June","July","August","September","October","November","December"],v=d(),m=c(),y=l(),g=v,k=m,w=y,b=v,x=m,C=y;return{init:h}}(),"function"==typeof window.define&&window.define.amd&&define("modules/datepicker",[],function(){return toolkit.datepicker}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.main=function(){function e(){var e=function(){$(document.body).addClass("window-loaded")},t=setTimeout(e,5e3);$(window).load(function(){clearTimeout(t),e()})}e()}(),toolkit.modules=function(){var e=function(e){var t,n=$.extend({skycons:!1,share:!1,popup:!1,datepicker:!1},e);for(t in n)(n[t]||!e)&&toolkit[t]&&toolkit[t].init&&toolkit[t].init()};return{init:e}}(),"function"==typeof window.define&&window.define.amd&&define("modules",[],function(){return toolkit.modules}),"function"==typeof window.define&&window.define.amd&&define("toolkit",["utils/skycons","utils/hashmanager","utils/popup","utils/diff","modules","modules/tabs","modules/share","modules/carousel","modules/datepicker"],function(e,t,n,o,i,a,s,r,d){return{modules:i,skycons:e,hashmanager:t,popup:n,diff:o,tabs:a,share:s,carousel:r,datepicker:d}}),define("wiki",["utils/developer-notes-logger","toolkit"],function(e,t){function n(){$(document).on("click",".toggler",a),$("#check").on("click",o)}function o(e){e.preventDefault();var n=$("#version").val(),o=$(".wiki-header small").text().replace("v",""),i="http://web-toolkit.global.sky.com";(n.split(".").length<3||n.split(".")[0]<1)&&$(".sky-form .error").text("The version number is required, and must be '1.0.0' or higher"),(1===parseInt(n,10)||"0"===n.split(".")[0])&&(n="0.6.9"),t.diff({oldRoute:i+"/"+n+"/_site/_includes/",newRoute:i+"/"+o+"/_site/_includes/"})}function i(){$("#hero").skycom_carousel({carousel:{autoplay:!0,videoAds:!1}}),t.modules.init()}function a(){var e=$(this),t=$("div[data-toggle="+e.attr("for")+"]");t.hasClass("open")?(e.removeClass("open"),t.removeClass("open")):(e.addClass("open"),t.addClass("open"))}e(),i(),n()});