define("extensions/ads/0.1/mip-ad",["require","customElement"],function(i){function t(){if(!this.isRender){this.isRender=!0;var i=this.getAttribute("tpl");switch(i){case"onlyImg":n.call(this);break;case"noneImg":a.call(this);break;case"oneImg":e.call(this);break;case"moreImg":s.call(this)}}}function n(){var i=$(this),t=this.getAttribute("href"),n=this.getAttribute("src"),a=i.data("size").trim().split(" "),e=(a[1]/a[0]*100).toFixed(2),s=['<a href="'+t+'" class="c-urljump">','<div class="mip-ad-bannerbox" style="padding-bottom:'+e+'%;">','<img src="'+n+'">',"</div>","</a>"].join("");i.append(s)}function a(){var i=$(this),t=this.getAttribute("url"),n=i.data("title"),a=['<a class="c-blocka" href="'+t+'" class="c-urljump">','    <div class="c-row mip-ad-box">','        <div class="c-span12 c-line-clamp2">',"            "+n,"        </div>","    </div>","</a>"].join("");i.append(a)}function e(){var i=$(this),t=this.getAttribute("url"),n=this.getAttribute("src"),a=i.data("title"),e=['<a class="c-blocka" href="'+t+'" class="c-urljump">','    <div class="c-row mip-ad-box">','        <div class="c-span4">','            <div class="c-img c-img-x">','                <img src="'+n+'">',"            </div>","        </div>",'        <div class="c-span8 c-line-clamp2">',"            "+a,"        </div>","    </div>","</a>"].join("");i.append(e)}function s(){var i=$(this),t=this.getAttribute("url"),n=this.getAttribute("src").split(";"),a=i.data("txt")?i.data("txt").split(";"):[],e=i.data("ads")?i.data("ads").split(";"):[],s=i.data("title")||"",c=n.length<3?n.length:3,o="";if(c>=3){for(var r=0;c>r;r++)o+=['<div class="c-span4">','    <div class="mip-ad-imgbox">','        <div class="c-img c-img-x">','            <img src="'+n[r]+'">',"        </div>","        "+d(e[r]," mip-ad-abs"),"    </div>",""+d(a[r],""),"</div>"].join("");var l=['<a class="c-blocka  mip-ad-box" href="'+t+'" class="c-urljump">','    <div class="c-row c-gap-bottom-small">','        <div class="c-span12 c-title">'+s+"</div>","    </div>",'    <div class="c-row">',"         "+o,"    </div>","</a>"].join("");i.append(l)}}function d(i,t){return i?['<div class="c-line-clamp1'+t+'">',"    "+i,"</div>"].join(""):""}var c=i("customElement");return c.prototype.init=function(){this.build=t},c}),require(["extensions/ads/0.1/mip-ad"],function(i){MIP.css.mipAd=".adv {\n  margin: 10px 0;\n  font-size: 13px;\n  background-color: #fff;\n}\n.mip-ad-bannerbox {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n.mip-ad-bannerbox img {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n}\n.mip-ad-box {\n  padding: 6px 21px;\n  font-size: 13px;\n  line-height: 22px;\n  text-align: justify;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n}\n.mip-ad-imgbox {\n  position: relative;\n}\n.mip-ad-abs {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  line-height: 20px;\n  font-size: 12px;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.6);\n  color: #fff;\n}\n",MIP.registerMipElement("mip-ad",i,MIP.css.mipAd)}),define("extensions/ads/0.1/mip-ad-baidu",["require","customElement"],function(i){function t(){if(!this.isRender){this.isRender=!0;var i=$(this),t=i.data("cproid");t&&(n(),a(i,t))}}function n(){var i=document.getElementById("MIP_DUP_JS");if(!i){var t=document.createElement("script");t.src="//dup.baidustatic.com/js/dm.js",t.id="MIP_DUP_JS",document.body.appendChild(t)}}function a(i,t){var n="_"+Math.random().toString(36).slice(2),a='<div style="" id="'+n+'"></div>';i.append(a),(window.slotbydup=window.slotbydup||[]).push({id:t,container:n,display:"inlay-fix",async:!0})}var e=i("customElement");return e.prototype.init=function(){this.build=t},e}),require(["extensions/ads/0.1/mip-ad-baidu"],function(i){MIP.registerMipElement("mip-ad-baidu",i)});