define("extensions/mip-link/0.1/mip-link",["require","customElement"],function(i){function t(i){i.preventDefault();var t=this.getAttribute("href");if(t)if(window.parent!==window){var e=$(this),n={event:"loadiframe",data:{url:t,title:e.attr("title")||e.text().trim().split("\n")[0],click:e.data("click")}};window.parent.postMessage(n,"*")}else location.href=t}function e(){this.isRender||(this.isRender=!0,$(this).on("click",t.bind(this)))}var n=i("customElement");return n.prototype.init=function(){this.build=e},n}),require(["extensions/mip-link/0.1/mip-link"],function(i){MIP.registerMipElement("mip-link",i)});