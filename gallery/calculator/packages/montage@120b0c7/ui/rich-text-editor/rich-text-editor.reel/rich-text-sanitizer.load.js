montageDefine("120b0c7","ui/rich-text-editor/rich-text-editor.reel/rich-text-sanitizer",{dependencies:["montage"],factory:function(e,t,n){var r=e("montage").Montage;t.Sanitizer=r.create(r,{willSetValue:{value:function(e,t){return this._scopeCSS(e,t)}},didGetValue:{value:function(e,t){return this._unscopeCSS(e,t)}},willInsertHtmlData:{value:function(e,t){return this._scopeCSS(this._removeScript(e),t)}},_scopeCSS:{enumerable:!0,value:function(e,t){var n=".editor-"+t+" ";return typeof e=="string"&&(e=e.replace(/(<style ?[^>]*>)([^<]*)(<\/style>)/ig,function(e,t,r,i){return r=r.replace(/\t|\n|\r/g,function(e){return e=="	"?" ":""}),r=r.replace(/\*\.editor-[^ ] +/g,"body"),r=r.replace(/\.editor-[^ ]+ /g,""),r=r.replace(/([^{]+)({[^}]*})/ig,function(e,t,r){return t=t.replace(/ *([^,]+)/g,function(e,t){return t.toLowerCase()=="body"?"*"+n:n+t}),t+r}),t+r+i})),e}},_unscopeCSS:{enumerable:!0,value:function(e,t){return typeof e=="string"&&(e=e.replace(/(<style ?[^>]*>)([^<]*)(<\/style>)/ig,function(e,t,n,r){return n=n.replace(/\*\.editor-[^ ] +/g,"body"),n=n.replace(/\.editor-[^ ]+ /g,""),t+n+r})),e}},_removeScript:{enumerable:!0,value:function(e){var t=document.createElement("div"),n=function(e){var t=e.children,r,i=t.length,s=e.attributes,o,u=s.length,a;for(a=0;a<u;a++){o=s[a];if(o.name.match(/^on[a-z]+/i)||o.value.match(/^javascript:/))e.removeAttribute(o.name),a--,u--}for(a=0;a<i;a++)r=t[a],r.tagName=="SCRIPT"?(r.parentNode.removeChild(r),a--,i--):n(r)};return t.innerHTML=e,n(t),t.innerHTML}}})}})