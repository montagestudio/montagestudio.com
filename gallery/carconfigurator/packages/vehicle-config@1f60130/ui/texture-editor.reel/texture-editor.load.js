montageDefine("1f60130","ui/texture-editor.reel/texture-editor",{dependencies:["montage","montage/ui/component"],factory:function(e,t,n){var r=e("montage").Montage,i=e("montage/ui/component").Component;t.TextureEditor=r.create(i,{hasTemplate:{value:!1},_stringValue:{value:null},stringValue:{get:function(){return this._stringValue},set:function(e){if(e===this._stringValue)return;this._stringValue=e,this.needsDraw=!0}},prepareForDraw:{value:function(){this.context=this.element.getContext("2d")}},willDraw:{value:function(){this.width=this.element.offsetWidth,this.height=this.element.offsetHeight}},draw:{value:function(){var e=this.context;e.clearRect(0,0,this.width,this.height),e.font="20pt Smart",null!=this.stringValue&&e.fillText(this.stringValue,0,40)}}})}})