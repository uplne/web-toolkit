define("utils/developer-notes-logger",[],function(){function e(){return console&&console.group?(console.group($($("h1").get(0)).text()),$(".wiki-section").each(function(){var e=$(this);e.find("> h2").text()&&console.groupCollapsed(e.find("> h2").text()),t(e),e.find(".sub-section").each(function(){var e=$(this);e.find("> h3").text()&&console.groupCollapsed(e.find("> h3").text()),t(e),e.find(".example").each(function(){var e=$(this);e.find("> h4").text()&&console.groupCollapsed(e.find("> h4").text()),t(e),e.find("> h4").text()&&console.groupEnd()}),e.find("> h3").text()&&console.groupEnd()}),e.find("> h2").text()&&console.groupEnd()}),console.groupEnd(),void 0):(console.log("Please use a real browser for developer notes"),void 0)}function t(e){var t=e.find("> .developer-notes"),o=e.find("> .dependencies").html(),a=e.find("> .init").html();t.each(function(){i($(this).html())}),i(o,"Dependencies"),i(a,"Initialisation"),n(e)}function n(e){var t=e.find("> .demo").attr("data-selector"),n=e.find("> .demo > "+t).not(".developer-notes");n.each(function(){i(this.outerHTML,"'"+this.tagName+"' html")})}function i(e,t){e&&e.trim().length&&(t&&console.groupCollapsed(t),console.log.apply(console,o(e.trim().replace(/&lt;/g,"<").replace(/&gt;/g,">"))),t&&console.groupEnd())}function o(e){var t=null===e.match(/<code>/gi)?0:e.match(/<code>/gi).length,n=e.replace(/<code>/gi,"%c").replace(/<\/code>/gi,"%c"),i=[n];if(n.indexOf("%c")>-1)for(var o=0;t>o;o++)i.push("background: #FDF6E3; color: #777;"),i.push("background:white; color:black;");return i}return e}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.skycons=function(){function e(){var e,t=document,n=(t.documentElement,t.body),i=!1,o=t.createElement("p"),a=t.createElement("style"),s='#testbefore:before { content: "before"; }';return a.type="text/css",o.id="testbefore",a.styleSheet?a.styleSheet.cssText=s:a.appendChild(t.createTextNode(s)),n.appendChild(a),n.appendChild(o),e=t.getElementById("testbefore").offsetHeight,e>=1&&(i=!0),n.removeChild(a),n.removeChild(o),i}function t(e,t){var n=e.innerHTML,o=i[t];e.innerHTML='<span style="font-family: \'skycons\'" class="ie7-skycon">'+o+"</span>"+n}function n(){if(!e()){var n,i,o,a=document.getElementsByTagName("*");for(n=0;o=a[n],o;n+=1)i=o.className,i=i.match(/skycon-[^\s'"]+/),i&&t(o,i[0])}}var i={"skycon-sky":"&#xf100;","skycon-chevron-down":"&#xf101;","skycon-arrow-right":"&#xf102;","skycon-plus-circle":"&#xf103;","skycon-sky-plus":"&#xf104;","skycon-tv":"&#xf105;","skycon-twitter-reply":"&#xf106;","skycon-arrow-down-left":"&#xf107;","skycon-chevron-up":"&#xf108;","skycon-chevron":"&#xf109;","skycon-facebook":"&#xf10a;","skycon-tick":"&#xf10b;","skycon-remote-record":"&#xf10c;","skycon-warning":"&#xf10d;","skycon-carousel-play":"&#xf10e;","skycon-arrow-left":"&#xf10f;","skycon-chevron-left":"&#xf110;","skycon-on-demand":"&#xf111;","skycon-user-profile":"&#xf112;","skycon-search":"&#xf113;","skycon-twitter-retweet":"&#xf114;","skycon-volume":"&#xf115;","skycon-twitter-favourite":"&#xf116;","skycon-expand":"&#xf117;","skycon-carousel-pause":"&#xf118;","skycon-mouse":"&#xf119;","skycon-share":"&#xf11a;","skycon-never-miss":"&#xf11b;","skycon-mail":"&#xf11c;","skycon-sky-go":"&#xf11d;","skycon-twitter-follow":"&#xf11e;","skycon-minify":"&#xf11f;","skycon-twitter":"&#xf120;","skycon-close":"&#xf121;","skycon-menu":"&#xf122;","skycon-phone":"&#xf123;","skycon-cloud":"&#xf124;","skycon-video-play":"&#xf125;","skycon-google-plus":"&#xf126;"};return{add:t,init:n}}(),"function"==typeof window.define&&window.define.amd&&define("utils/skycons",[],function(){return toolkit.skycons}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.hashmanager=function(){function e(){$(window).on("hashchange",t);var e=document.documentMode,n="onhashchange"in window&&(void 0===e||e>7);n||(r.hash=document.location.hash,setInterval(function(){document.location.hash!==r.hash&&$(window).trigger("hashchange")},200)),r.windowLoaded=!0}function t(e){var t,n;e=s("string"==typeof e?e:location.hash),e?(t=r.globalHashList[e],n="callback",r.lastExecutor=e):r.lastExecutor&&(t=r.globalHashList[r.lastExecutor],n="undo"),t&&"function"==typeof t[n]&&t[n](e)}function n(){var e=window.location;"pushState"in history?(location.hash="!",history.pushState("",document.title,e.pathname+e.search)):location.hash="!"}function i(e){location.hash="!"+e}function o(e,n,i){var o=r.globalHashList;$(e).each(function(e,a){if(a=s(a),o[a]){var d="hashManager: hash ("+a+") already exists";throw new Error(d)}o[a]={callback:n,undo:i},r.windowLoaded&&a===s(location.hash)&&t(a)})}function a(){r.globalHashList=[]}function s(e){return e.replace(/[#!]/g,"")}var r={globalHashList:{},hasLoaded:!1,windowLoaded:!1,lastExecutor:null,hash:null};return e(),{register:o,change:i,remove:n,onHashChange:t,resetHash:a,cleanHash:s}}(),"function"==typeof window.define&&window.define.amd&&define("utils/hashmanager",[],function(){return toolkit.hashmanager}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.popup=function(){function e(e){var t=e.url,n=e.width||400,i=e.height||n,o=e.top||screen.height/2-i/2,a=e.left||screen.width/2-n/2,s=e.title||"Sky";return window.open(t,s,"top="+o+",left="+a+",width="+n+",height="+i)}function t(){$("body").on("click","[data-popup]",function(t){t.preventDefault();var n=$.extend($(this).data("popup"),{url:$(this).attr("href")});e(n)})}return{init:t,open:e}}(),"function"==typeof window.define&&window.define.amd&&define("utils/popup",[],function(){return toolkit.popup}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.toggle=function(){function e(e,t){return h&&e.css({height:t,overflow:"hidden",transition:"height 0.5s ease-in-out"}),e.toggleClass("toggle-hidden",0===t),e}function t(e){return void 0===e.data("openHeight")||d||c?($("body").append($('<div id="toggle-tmp-height" class="skycom-container"></div>').append(e.clone().attr("style","").removeClass("toggle-hidden"))),e.data("openHeight",$("#toggle-tmp-height > div").height()),$("#toggle-tmp-height").remove(),e.data("openHeight")):e.data("openHeight")}function n(e){var t=e.find("span").length>0?e.find("span"):e,n=t.text();t.text(e.attr("data-toggle-text")),e.attr("data-toggle-text",n).attr("data-tracking-label",n)}function i(e){e.find("i").toggleClass("rotate-180")}function o(n){var i=t(n);e(n,i)}function a(t){e(t,0)}function s(e,t){"shown"==e?l[t.selector]={state:e,$elementToToggle:t}:delete l[t.selector]}function r(e){var t=e.$elClicked,r=e.$container||$(t.attr("data-toggle")),d=e.action,l=t&&t.attr("data-toggle-state");c=void 0!==e.contentChanged?e.contentChanged:!1,"shown"===l||"hide"==d?(a(r),l="hidden"):(o(r),l="shown"),s(l,r),t||(t=$('[data-toggle="#'+r.attr("id")+'"]')),t&&l!==t.attr("data-toggle-state")&&(n(t,l),i(t),t.attr("data-toggle-state",l))}var d=!1,c=!1,l={},h=function(){var e=document.body||document.documentElement;return"string"==typeof e.style.transition}();return $(window).on("skycom.resizeend",function(){d=!0;var n,i;for(i in l)if(n=l[i],"shown"===n.state){var o=t(n.$elementToToggle);e(n.$elementToToggle,o)}d=!1}),r}(),"function"==typeof window.define&&window.define.amd&&define("utils/toggle",[],function(){return toolkit.toggle}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.diff=function(){function e(e){var n=e.oldRoute,i=e.newRoute;a(),$("a[data-diff]").each(function(){t(n,i,$(this).attr("data-diff"))})}function t(e,t,n){var o,a,s=n.split("/")[n.split("/").length-1],r=t+"/"+n+".html",d=e+"/"+n+".html";o=$.ajax({crossDomain:!0,url:r,cache:!1}),a=$.ajax({crossDomain:!0,url:d,cache:!1}),$.when(o,a).done(function(e,t){var n=$('<div class="togglee" data-toggle="'+s+'"><table id="'+s+'-table"></table></div>');n.append($('<textarea id="'+s+'" class="hidden latest"></textarea>').val(e)).append($('<textarea id="old-'+s+'" class=hidden></textarea>').val(t)),$("[data-diff-container]").append('<h3 class="has-toggle wiki-h3 smaller" id="'+s+'-header"><span class="toggler" for="'+s+'"></span>'+s+"</h3>").append(n),i(s,t[0].split("\n"),e[0].split("\n"))})}function n(e,t,i,a,s,r){if(s>0&&r>0&&i[r-1]===a[s-1])n(e,t,i,a,s-1,r-1),o(e,s,r," ",i[r-1]);else if(s>0&&(0===r||t[r][s-1]>=t[r-1][s]))n(e,t,i,a,s-1,r),o(e,s,"","+",a[s-1]);else{if(!(r>0&&(0===s||t[r][s-1]<t[r-1][s])))return;n(e,t,i,a,s,r-1),o(e,"",r,"-",i[r-1],"")}}function i(e,t,i){var o,a,s=new Array(t.length+1);for(a=0;a<s.length;a++)for(s[a]=new Array(i.length+1),o=0;o<s[a].length;o++)s[a][o]=0;for(a=1;a<s.length;a++)for(o=1;o<s[a].length;o++)s[a][o]=t[a-1]===i[o-1]?1+s[a-1][o-1]:Math.max(s[a-1][o],s[a][o-1]);try{n(e,s,t,i,o-1,a-1)}catch(r){alert(r)}}function o(e,t,n,i,o){var a=document.getElementById(e+"-table"),s=document.getElementById(e+"-header"),r=document.createElement("tr"),d=document.createElement("td"),c=document.createElement("td"),l=document.createElement("td"),h=document.createTextNode(n),u=document.createTextNode(t),f=document.createTextNode(i+" "+o);"+"===i?(r.className="add",$(s).addClass("add")):"-"===i&&(r.className="del",$(s).addClass("del")),d.className="codekolom",c.className="codekolom",l.className="bredecode",d.appendChild(h),c.appendChild(u),l.appendChild(f),r.appendChild(d),r.appendChild(c),r.appendChild(l),a.appendChild(r)}function a(){$(".sky-form .error").text(""),$(".togglee").remove(),$(".has-toggle").remove()}return e}(),"function"==typeof window.define&&window.define.amd&&define("utils/diff",[],function(){return toolkit.diff}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.inPageNav=function(e){function t(e){this.$tabContainer=e,this.$tabs=e.find("li[role=tab]"),this.$tabTargets=e.find("div[role=tabpanel]"),this.$showMore=e.find(".dropdown-tab-select > a"),this.$moreTabsContainer=e.find(".dropdown-tab-select"),this.$moreTabsLink=e.find(".more-tabs"),this.numberOfTabsToShow=0,this.saveTabOrder(),this.bindEvents(),this.initTabs()}function n(e){var t=[];e.find("li").each(function(){t.push($(this).attr("data-position"))}),t.sort(),$.each(t,function(){e.find('li[data-position="'+this+'"]').appendTo(e)})}t.prototype={bindEvents:function(){var t=this;e.register(this.getHashList(),this.changeTab.bind(t)),this.$tabs.on("click",function(){t.changeTab($(this).find("a").attr("href"))}),this.$showMore.on("click",this.toggleShowMore.bind(t)),$("body").on("click",this.hideMore.bind(t)),$(window).bind("skycom.resizeend",this.initTabs.bind(t))},getHashList:function(){var e=[];return this.$tabs.each(function(){e.push($(this).attr("aria-controls"))}),e},saveTabOrder:function(){this.$tabs.each(function(e){$(this).attr("data-position",e)})},initTabs:function(){this.moveTabsToList(),this.moveTabsToDropdown()},changeTab:function(e){e=e.replace("#!","");var t=$("#"+e+"-tab"),n=$("#"+e);this.$tabTargets.add(this.$tabs).removeClass("selected"),t.add(n).addClass("selected"),this.initTabs()},hideMore:function(e){$(e.target).closest(this.$showMore).length||this.toggleShowMore("hide")},toggleShowMore:function(e){var t=this.$moreTabsLink.hasClass("dropdown-tab-selected")||"hide"===e?"remove":"add";this.$showMore.add(this.$moreTabsLink)[t+"Class"]("dropdown-tab-selected")},getNumberOfTabsToShow:function(){var e=this.$tabContainer.outerWidth(!0)-this.$moreTabsContainer.show().outerWidth(!0)-this.$tabs.filter(".selected").outerWidth(!0),t=0,n=0;return this.$tabs.not(".selected").attr("style","float:left").each(function(){t+=$(this).outerWidth(!0),t>e||n++}),this.$tabs.add(this.$moreTabsContainer).removeAttr("style"),n},moveTabsToList:function(){var e=this;this.$tabs.each(function(){$(this).appendTo(e.$tabContainer.find(".tabs"))}),n(this.$tabContainer.find(".tabs")),this.numberOfTabsToShow=this.getNumberOfTabsToShow()},moveTabsToDropdown:function(){var e=this;this.$tabs.not(".selected").each(function(t){t<e.numberOfTabsToShow||($(this).appendTo(e.$moreTabsLink),e.$moreTabsContainer.show())}),n(this.$moreTabsLink)}},$.fn.inPageNav=function(e){return this.each(function(){new t($(this),e)})}}(toolkit.hashmanager),"function"==typeof window.define&&window.define.amd&&define("modules/inPageNav",["utils/hashmanager"],function(){return toolkit.inPageNav}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.accordion=function(e){function t(e){this.$container=e,this.$headings=e.find(".accordion-heading"),this.bindEvents()}return t.prototype={bindEvents:function(){this.$headings.on("click",this.toggleContent.bind(this))},toggleContent:function(t){t.preventDefault();var n=e(t.currentTarget);toolkit.toggle({$elClicked:n})}},e.fn.accordion=function(){return this.each(function(){new t(e(this))})},t}(jQuery,toolkit.toggle),"function"==typeof window.define&&window.define.amd&&define("modules/accordion",["utils/toggle"],function(){return toolkit.accordion}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.datePicker=function(){function e(e,t){return[null,31,n(t)?29:28,31,30,31,30,31,31,30,31,30,31][e]}function t(e,t){var n=new Date(t,e-1,1).getDay();return 0===n?7:n-1}function n(e){return 0===e%4&&0!==e%100||0===e%400}function i(e){return e.toString().length<2?"0"+e:e}function o(e){this.calendarDate=$.extend(s),this.$container=e,this.$day=e.find(".day"),this.$month=e.find(".month"),this.$year=e.find(".year"),this.addCalendarHTML(),this.bindEvents()}var a=["","January","February","March","April","May","June","July","August","September","October","November","December"],s={day:(new Date).getDate(),month:(new Date).getMonth()+1,year:(new Date).getFullYear()};o.prototype={bindEvents:function(){var e=this;e.$calendar.on("click",".date",e.selectDate.bind(e)).on("click",".prev",e.displayPreviousMonth.bind(e)).on("click",".next",e.displayNextMonth.bind(e)),e.$container.on("keyup","input",e.updateCalendarView.bind(e)).on("focus","input",e.show.bind(e)).on("keydown","input",function(t){9==t.keyCode&&e.hide()}),$(document).on("keydown",function(t){27==t.keyCode&&e.hide()}).on("click",function(t){"date-picker"==t.target.className||e.$container.find(t.target).length||e.hide()})},show:function(){this.$calendar.removeClass("hidden")},hide:function(){this.$calendar.addClass("hidden")},addCalendarHTML:function(){var e=$('<div class="calendar hidden" aria-hidden="true"></div>'),t=$('<div class="header"></div>'),n=$('<span class="prev"><i class="skycon-arrow-left"></i></span>'),i=$('<span class="next"><i class="skycon-arrow-right"></i></span>'),o=$("<span data-date></span>"),a=$('<div class="days"><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span></div>'),s=$('<div class="day-container"></div>');t.append(n).append(o).append(i),e.append(t).append(a).append(s),this.$container.append(e),this.$calendar=e,this.$dateDescription=o,this.$dayContainer=s,this.renderCalendar()},renderCalendar:function(){var n=this;n.$dateDescription.text(a[n.calendarDate.month]+" "+n.calendarDate.year),n.fillDays(e(n.calendarDate.month,n.calendarDate.year),t(n.calendarDate.month,n.calendarDate.year))},fillDays:function(e,t){var n=1,i=1,o=this,a=o.calendarDate,r=[],d=[],c=!1,l=!1,h=!1,u=a.month<s.month&&a.year<=s.year||a.year<s.year,f=a.month==s.month&&a.year==s.year,p=a.month==o.$month.val()&&a.year==o.$year.val();for(n;t>n;n++)r.push("<span></span>");for(i;e>=i;i++)d=[],l=i==o.$day.val()&&p,h=i<s.day&&f||u,c=i==s.day&&f,l&&d.push("selected"),h&&d.push("past"),c&&d.push("today"),r.push("<span class='date "+d.join(" ")+"' >"+i+"</span>");o.$dayContainer.html(r.join(""))},selectDate:function(e){var t=this;t.$container.find(".selected").removeClass("selected"),$(e.currentTarget).addClass("selected"),t.calendarDate.day=parseInt(e.currentTarget.innerText,10),t.$day.val(i(t.calendarDate.day)),t.$month.val(i(t.calendarDate.month)),t.$year.val(i(t.calendarDate.year)),t.hide()},displayPreviousMonth:function(){var e=this;1===e.calendarDate.month?(e.calendarDate.month=12,e.calendarDate.year--):e.calendarDate.month--,e.renderCalendar()},displayNextMonth:function(){var e=this;12===e.calendarDate.month?(e.calendarDate.month=1,e.calendarDate.year++):e.calendarDate.month++,e.renderCalendar()},updateCalendarView:function(){var e=this;e.calendarDate.day=parseInt(e.$day.val(),10)||s.day,e.calendarDate.month=parseInt(e.$month.val(),10)||s.month,e.calendarDate.year=parseInt(e.$year.val(),10)||s.year,e.renderCalendar()}},$.fn.datePicker=function(){return this.each(function(){new o($(this))})},$(".date-picker").datePicker()}(),"function"==typeof window.define&&window.define.amd&&define("modules/datePicker",[],function(){return toolkit.datePicker}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.form=function(e){function t(){var e=navigator.userAgent.toLowerCase();return-1!=e.indexOf("safari")?-1===e.indexOf("chrome"):!1}function n(e){var t=null;return e.is("[type=checkbox]")?e.is(":checked"):e.is("[type=radio]")?(t=e.parents("form").find('input[name="'+e.attr("name")+'"]')).filter(":checked").length>0:e.val()}function i(e,t){function n(){""===e.value?t.emptyText&&e.setCustomValidity(t.emptyText):e.setCustomValidity("")}function i(){""===e.value?t.emptyText&&e.setCustomValidity(t.emptyText):t.invalidText&&e.setCustomValidity(t.invalidText)}t.emptyText&&e.setCustomValidity(t.defaultText),e.addEventListener("change",n),e.addEventListener("input",n),e.addEventListener("invalid",i)}function o(e){this.$container=e,this.$requiredInputs=e.find("input[required]"),this.$patternInputs=e.find("input[pattern]"),this.errors=[],this.hasError=!1,this.customiseHTML5Messages(),this.bindEvents()}var a=!("required"in document.createElement("input")&&"pattern"in document.createElement("input")&&!t()),s="setCustomValidity"in document.createElement("input");return o.prototype={bindEvents:function(){var e=this;a&&e.$container.on("submit",function(t){e.validate(t)})},customiseHTML5Messages:function(){s&&this.$container.find(".feedback[data-for]").each(function(){var t=document.getElementById(e(this).attr("data-for"));new i(t,{invalidText:this.innerText||this.innerHTML})})},addErrorMessageToInput:function(t){var n=t.attr("id"),i=this.$container.find("label.descriptor[for="+n+"]"),o=this.$container.find(".feedback[data-for="+n+"]");this.hasError=!0,o.length>0?o.removeClass("hidden"):o=e('<span class="form-error feedback" data-for="'+t.attr("id")+'">'+i.text()+" is required</span>").insertAfter(t),t.hasClass("form-error")||(t.addClass("form-error"),e('<i class="form-error skycon-warning"></i>').insertAfter(t)),this.errors.push(o.first())},removeErrorsFromInput:function(e){var t=e.attr("id"),n=this.$container.find(".feedback[data-for="+t+"]");e.hasClass("form-error")&&(e.removeClass("form-error"),e.next(".skycon-warning").remove()),n.addClass("hidden")},createErrorsAtTop:function(){var e,t='<div id="feedback-list-container" class="row" aria-live="polite"><p><i class="form-error skycon-warning"></i>Please correct the highlighted fields below:</p><ul class="feedback-list">';for(e=0;e<this.errors.length;e++)t+='<li class="form-error">'+this.errors[e].text()+"</li>";t+="</ul></div>",this.$container.prepend(t),window.location.href=window.location.href.split("#")[0]+"#feedback-list-container"},resetErrors:function(){this.hasError=!1,this.errors=[],this.$container.find("#feedback-list-container").remove()},validateRequired:function(t,n){var i=e(n),o=this;""===i.val()?o.addErrorMessageToInput(i):o.removeErrorsFromInput(i)},validatePattern:function(t,i){var o=e(i),a=this,s=o.attr("pattern"),r=new RegExp("^(?:"+s+")$"),d=n(o);d&&!r.test(d)?a.addErrorMessageToInput(o):a.removeErrorsFromInput(o)},validate:function(e){var t=this;t.resetErrors(),this.$requiredInputs.each(this.validateRequired.bind(t)),this.$patternInputs.each(this.validatePattern.bind(t)),t.hasError&&(e.preventDefault(),t.createErrorsAtTop())}},e.fn.validation=function(){return this.each(function(){new o(e(this))})},e(".sky-form").validation(),o}(jQuery),"function"==typeof window.define&&window.define.amd&&define("modules/validation",[],function(){return toolkit.validation}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.share=function(){function e(){i.shareCount.on("click keypress",t)}function t(e){e.preventDefault();var t=$(this).parent(),n="keypress "+("ontouchend"in document.documentElement?"touchend":"click");("click"===e.type||"touchend"===e.type||"keypress"===e.type&&13===e.which)&&(t.toggleClass("active"),i.document.on(n,function o(e){$.contains(t[0],e.target)||(t.removeClass("active"),i.document.off(n,o))}))}function n(){e()}var i={document:$(document),shareCount:$(".share-popup .summary")};return{init:n,toggleSharePopover:t}}(),"function"==typeof window.define&&window.define.amd&&define("modules/share",[],function(){return toolkit.share}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.video=function(e,t){function n(e,t){e.attr("data-video-id")&&(this.$container=e,this.options={token:t.token,freewheel:t.displayAdverts,animationSpeed:void 0!==t.animationSpeed?t.animationSpeed:500,autoplay:!1,videoId:e.attr("data-video-id"),onPlay:t.onPlay,closeCallback:t.closeCallback,$wrapperLocation:t.$wrapperLocation||this.$container},this.bindEvents())}return n.prototype={bindEvents:function(){var e=this;e.$container.on("click",".play-video",function(t){e.createWrapper(),e.play(t)})},bindWrapperEvents:function(){var e=this;t("body").one("keydown",e.stopOnEscape.bind(e)),e.$wrapper.one("click touchstart",".close",e.stop.bind(e)),e.$player.one("ended webkitendfullscreen",e.stop.bind(e))},createWrapper:function(){this.options.$wrapperLocation.append('<div class="video-wrapper"><a href="#!" class="close"><i class="skycon-close" aria-hidden=true></i><span class="speak">Close</span></a><div class="videocontrolcontainer"><video></video><img class="posterFrame"/></div></div>'),this.options.$wrapperLocation.find(".posterFrame").on("error",function(){this.src=options.placeHolderImage}),this.options.$wrapperLocation.append('<div class="video-overlay"></div>'),this.$player=this.options.$wrapperLocation.parent().find("video"),this.$wrapper=this.options.$wrapperLocation.find(".video-wrapper"),this.$wrapper.attr("id","video-"+this.options.videoId),this.bindWrapperEvents()},removeWrapper:function(){this.$wrapper.removeClass("playing-video").remove(),this.options.$wrapperLocation.find(".video-overlay").remove()},play:function(e){e&&e.preventDefault();var t=this;t.options.onPlay&&t.options.onPlay(),this.showCanvas(function(){t.$player.sky_html5player(t.options),setTimeout(function(){sky.html5player.play()},1333)})},stopOnEscape:function(e){27===e.keyCode&&(e.preventDefault(),this.stop())},stop:function(n){n&&n.preventDefault();var i=this;t(e).off("skycom.resizeend",i.resizeContainer),sky.html5player.close(this.$wrapper),this.hideCanvas()},showCanvas:function(n){var i,o=this.$container,a=this.options.$wrapperLocation,s=a.find(".video-overlay"),r=a.find(".video-wrapper"),d=o.find(".play-video"),c=r.find(".close"),l=0===this.options.animationSpeed?0:this.options.animationSpeed||500,h=this;this.originalHeight=o.height(),r.addClass("playing-video"),s.fadeIn(l,function(){d.fadeOut(l),i=h.calculateHeight(),o.animate({height:i},l,function(){t(e).on("skycom.resizeend",t.proxy(h.resizeContainer,h)),r.show(),s.fadeOut(l,function(){c.addClass("active")}),n()})})},calculateHeight:function(){return Math.round(9*(this.$container.width()/16))},resizeContainer:function(){this.$container.animate({height:this.calculateHeight()},250)},hideCanvas:function(){var e=this,t=this.$container,n=this.options.$wrapperLocation,i=n.find(".video-overlay"),o=n.find(".video-wrapper"),a=t.find(".play-video"),s=o.find(".close"),r=0===this.options.animationSpeed?0:this.options.animationSpeed||500,d=this.originalHeight;i.fadeIn(r,function(){s.removeClass("active"),t.animate({height:d},r,function(){t.css({height:"auto"}),e.options.closeCallback&&e.options.closeCallback(),a.fadeIn(r),i.hide(),o.fadeOut(r,e.removeWrapper.bind(e))})})}},t.fn.video=function(e){return this.each(function(){new n(t(this),e)})},n}(window,jQuery),"function"==typeof window.define&&window.define.amd&&define("modules/video",[],function(){return toolkit.video}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.carousel=function(e,t){function n(e,t){this.options=t,this.$viewport=e,this.$slideContainer=e.find(".skycom-carousel-container"),this.$slides=this.$slideContainer.find(">"),this.currentIndex=0,this.slideCount=this.$slides.length,this.timerId=!1,this.touchReset(),this.bindEvents(),this.initialiseVideos()}var i=function(){return"WebKitCSSMatrix"in e&&"m11"in new e.WebKitCSSMatrix}(),o=function(){var e=document.body.style;return void 0!==e.transform||void 0!==e.WebkitTransform||void 0!==e.MozTransform||void 0!==e.OTransform}();n.prototype={unbindTouchEvents:function(){this.$slideContainer.off("touchstart touchmove touchend touchcancel")},bindTouchEvents:function(){this.$slideContainer.on("touchstart",this.touchstart.bind(this)).on("touchmove",this.touchmove.bind(this)).on("touchend",this.touchend.bind(this)).on("touchcancel",this.touchReset.bind(this))},bindEvents:function(){this.bindTouchEvents(),this.$slideContainer.find("a").on("click",this.pause.bind(this))},unbindEvents:function(){this.unbindTouchEvents(),this.$slideContainer.find("a").off("click")},setOffset:function(e,t){var n=this.$slideContainer.removeClass("animate");return t&&n.addClass("animate"),i?n.css("transform","translate3d("+e+"%,0,0) scale3d(1,1,1)"):o?n.css("transform","translate("+e+"%,0)"):t?n.animate({left:2*e+"%"},600):n.css({left:2*e+"%"}),this},toggleTermsContent:function(){this.pause();var e=0===this.$viewport.next(".terms-content").find(".terms").length;this[e?"showTermsContent":"hideTermsContent"]()},showTermsContent:function(){this.hideTermsContent();var e=t(this.$slides[this.currentIndex]).find(".terms");e.length&&this.$viewport.next(".terms-content").append(e.clone(!0).removeClass("speak").attr("aria-hidden","true")).fadeIn(200)},hideTermsContent:function(){this.$viewport.next(".terms-content").fadeOut(200,function(){t(this).find(".terms").remove()})},showTermsLink:function(e){this.hideTermsLink();var n=t(this.$slides[e]).find(".terms");n.length&&this.$viewport.find(".terms-link").removeClass("hidden").fadeIn(200)},hideTermsLink:function(){this.$viewport.find(".terms-link").fadeOut(200),this.hideTermsContent()},initialiseVideos:function(){var e=this;this.$slides.video({$wrapperLocation:e.$viewport,token:"8D5B12D4-E1E6-48E8-AF24-F7B13050EE85",displayAdverts:!1,onPlay:function(){e.pause(),e.$viewport.find(".actions, .indicators, .terms-link").fadeOut(500)},closeCallback:function(){e.$viewport.find(".actions, .indicators, .terms-link").fadeIn(500)}})},moveSlide:function(e){var t,n,i=this,o=this.$slides;return n=e.index>=this.slideCount?0:e.index<0?this.slideCount-1:e.index,t=e.index>this.currentIndex&&!e.reverse?"left":"right",o.filter(":not(:eq("+this.currentIndex+"))").hide(),o.eq(this.currentIndex).css("float",t),o.eq(n).show().css("float","left"==t?"right":"left"),this.setOffset(e.start,!1),"undefined"!=typeof e.end&&(setTimeout(function(){i.setOffset(e.end,!0),i.showTermsLink(n),i.$viewport.trigger("change",n)},20),this.currentIndex=n,"function"==typeof e.callback&&e.callback(n)),n},"goto":function(e,t,n){return t!==!1&&this.pause(),e!==this.currentIndex?(e>this.currentIndex?this.moveSlide({index:e,start:0,end:-50,callback:n}):this.moveSlide({index:e,start:-50,end:0,callback:n}),this):void 0},next:function(e,t){return this.goto(this.currentIndex+1,e,t),this.$viewport.find(".indicators, .actions").css("display","block"),this},previous:function(){return this.goto(this.currentIndex-1),this.$viewport.find(".indicators, .actions").css("display","block"),this},play:function(e,t){var n=this,i=this.options.interval;return n.timerId=setTimeout(function(){n.next(!1),n.timerId=setTimeout(function e(){n.next(!1,function(){n.timerId=setTimeout(e,i)})},i)},t||this.options.onPlayDelay),this.$viewport.trigger("playing"),"function"==typeof e&&e(),this},pause:function(e){return clearTimeout(this.timerId),this.$viewport.trigger("paused"),"function"==typeof e&&e(),this},touchstart:function(e){var t=e.originalEvent.touches[0];this.pause(),this.swipe.start={x:t.pageX,y:t.pageY}},touchmove:function(e){var t,n=this.swipe,i=e.originalEvent.touches[0],o=i.pageX-n.start.x,a=i.pageY-n.start.y,s=Math.abs(o)>Math.abs(a),r=0>o?this.currentIndex+1:this.currentIndex-1;n.start&&s!==!1&&(e.preventDefault(),t=100*(o/this.$slideContainer.outerWidth(!0)),o>0&&(t-=50),this.swipe.positionAsPercentage=t,this.moveSlide({index:r,start:t}))},touchend:function(e){if(this.swipe.start){var t=this.swipe,n=t.positionAsPercentage,i=e.originalEvent.changedTouches[0],o=i.pageX-t.start.x,a=null,s=75;if(Math.abs(o)>s&&(a=0>o?"left":"right"),"left"===a)this.moveSlide({index:this.currentIndex+1,start:n,end:-50}),this.$viewport.find(".next").trigger("toolkit.track");else if("right"===a)this.moveSlide({index:this.currentIndex-1,start:n,end:0}),this.$viewport.find(".previous").trigger("toolkit.track");else if(0!==n){var r,d=o>0?n+50:n,c=this.currentIndex,l=0;0>d?this.currentIndex=c+1>=this.slideCount?0:c+1:(this.currentIndex-=1,l=-50,d-=50),r=0===this.currentIndex&&c===this.slideCount-1,this.moveSlide({index:c,start:d,end:l,reverse:r})}this.touchReset()}},touchReset:function(){this.swipe={start:!1,positionAsPercentage:0}}},t.fn.skycom_carousel=function(e){var i=t.extend(!0,{carousel:{actions:[{id:"play",label:"Play Carousel",icon:"carousel-play"},{id:"pause",label:"Pause Carousel",icon:"carousel-pause"},{id:"previous",label:"Previous",icon:"chevron-left",speak:!0},{id:"next",label:"Next",icon:"chevron",speak:!0}],autoplay:!0,startSlideIndex:0,onPlayDelay:500,interval:6e3}},e),o={actions:function(e,n){var i,o,a,s,r,d,c="",l=n.actions,h=n.onclick;if(n.count<=1)return this;for(a in l)d=l[a],i=d.id,s="next"==i||"previous"==i?" hidden-touch ":"",r="skycon-"+d.icon,o=d.speak?'<span class="speak">'+d.label+"</span>":d.label,c+='<a href="#" class="skycom-internal supportive '+s+i+'" >',c+='<span class="semi-circle"><i class="'+r+'" aria-hidden="true"></i></span>'+o,c+="</a>";return e.find(".skycom-carousel-container").before('<div class="actions">'+c+"</div>"),e.find("> .actions > *").each(function(e){t(this).attr("data-action",l[e].id).on("click",function(t){h(l[e].id),t.preventDefault()})}),this},indicators:function(e,n){var i,o,a=n.count,s=n.onclick,r='<div class="indicators"><div class="container">',d=' class="active"';if(1>=a)return this;for(o=a;o--;)r+="<span"+d+' data-tracking data-tracking-label="indicator"></span>',d="";return i=t(r+"</div></div>").on("click","span",function(e){s(t(e.currentTarget).index())}),e.append(i),this},terms:function(e){var n=t('<a href="#!" class="terms-link carousel-content cushioned hidden black internal-link supportive" aria-hidden="true">Terms and Conditions</a>'),i=t('<div class="terms-content carousel-content  cushioned hidden"></div>');return e.find(".terms").length&&(e.append(n),e.after(i),e.addClass("has-terms")),this},video:function(e){return e.append('<div class="video-overlay"></div>'),this}};return this.each(function(){var e=t(this),a=new n(e,i.carousel),s=function(t){o.indicators(e,{count:t.slideCount,onclick:function(e){t.goto(e)}}).terms(e).actions(e,{count:t.slideCount,actions:i.carousel.actions,onclick:function(e){t[e]()}})};s(a),e.on("click",".terms-link",function(){a.toggleTermsContent()}).on("change",function(t,n){n=n||0,e.find(".indicators .container > *").removeClass("active").eq(n).addClass("active"),a.$slides.removeClass("active").find("a").attr("tabindex",-1),a.$slides.eq(n).addClass("active").find("a").removeAttr("tabindex")}).on("playing",function(){e.removeClass("paused").addClass("playing")}).on("paused",function(){e.removeClass("playing").addClass("paused")}).on("pause",function(){a.pause()}).on("play",function(){a.play()}).on("refresh",function(t,n){a.$slides=a.$slideContainer.find(">"),a.slideCount=a.$slides.length,e.find(".indicators").remove(),e.find(".actions").remove(),e.find(".video-overlay").remove(),s(a),n=parseInt(n,10),isNaN(n)||0>n?n=0:n>a.slideCount-1&&(n=a.slideCount-1),n>a.currentIndex?a.moveSlide({index:n,start:0,end:-50}):a.moveSlide({index:n,start:-50,end:0})}).on("keyup",function(e){switch(e.keyCode){case 9:a.pause();break;case 37:a.previous();
break;case 39:a.next()}}).find(".toggle-terms").on("click",function(){a.$viewport.toggleClass("showing-tandcs")}),a.slideCount>1?(a[i.carousel.autoplay===!0?"play":"pause"](!1,i.carousel.interval),a.goto(i.carousel.startSlideIndex,!1),a.showTermsLink(0),e.trigger("change")):a.unbindTouchEvents()})}}(window,jQuery,toolkit.video),"function"==typeof window.define&&window.define.amd&&define("modules/carousel",["modules/video"],function(){return toolkit.carousel}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.main=function(){function e(){var e=function(){$(document.body).addClass("window-loaded")},t=setTimeout(e,5e3);$(window).load(function(){clearTimeout(t),e()})}e()}(),toolkit.modules=function(){var e=function(e){var t,n=$.extend({skycons:!1,share:!1,popup:!1,inPageNav:!1,accordion:!1,datePicker:!1},e);for(t in n)(n[t]||!e)&&toolkit[t]&&toolkit[t].init&&toolkit[t].init()};return{init:e}}(),"function"==typeof window.define&&window.define.amd&&define("modules",[],function(){return toolkit.modules}),"function"==typeof window.define&&window.define.amd&&define("toolkit",["utils/skycons","utils/hashmanager","utils/popup","utils/toggle","utils/diff","modules","modules/inPageNav","modules/accordion","modules/datePicker","modules/validation","modules/share","modules/video","modules/carousel"],function(e,t,n,i,o,a,s,r,d,c,l,h,u){return{modules:a,skycons:e,hashmanager:t,popup:n,diff:o,inPageNav:s,accordion:r,datePicker:d,validation:c,share:l,video:h,carousel:u}}),define("wiki",["utils/developer-notes-logger","toolkit"],function(e,t){function n(){$(document).on("click",".toggler",a),$("#check").on("click",i)}function i(e){e.preventDefault();var n=$("#version").val(),i=$(".wiki-header small").text().replace("v",""),o="http://web-toolkit.global.sky.com";(n.split(".").length<3||n.split(".")[0]<1)&&$(".sky-form .error").text("The version number is required, and must be '1.0.0' or higher"),(1===parseFloat(n,10)||"0"===n.split(".")[0])&&(n="0.6.9"),t.diff({oldRoute:o+"/"+n+"/_site/_includes/",newRoute:o+"/"+i+"/_site/_includes/"})}function o(){$("#hero").skycom_carousel({carousel:{autoplay:!0,videoAds:!1}}),$("#hero-skinny").skycom_carousel({carousel:{autoplay:!0,videoAds:!1}}),$("#demo-classc-tabs").inPageNav(),$("#demo-inpage-nav-tabs").inPageNav(),$("#demo-video .video").video({token:"8D5B12D4-E1E6-48E8-AF24-F7B13050EE85",freewheel:!1}),$(".accordion").accordion(),t.modules.init()}function a(){var e=$(this),t=$("div[data-toggle="+e.attr("for")+"]");t.hasClass("open")?(e.removeClass("open"),t.removeClass("open")):(e.addClass("open"),t.addClass("open"))}e(),o(),n()});