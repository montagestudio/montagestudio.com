var Montage=require("montage/core/core").Montage,AnimationManager=require("animation/animation-manager").AnimationManager,Template=require("montage/ui/template").Template,SimpleAnimation=Montage.create(Montage,{_path:{value:null},_type:{value:null},_startValue:{value:null},_endValue:{value:null},_context:{value:null},_delegate:{value:null},_duration:{value:0},_startTime:{value:0},_intervalRequest:{value:0},init:{value:function(e,t,n,r,i,s,o){this._type=t,this._startValue=n,this._endValue=r,this._context=s,this._delegate=o,this._duration=i,this._path=e}},handleUpdate:{value:function(){var e=new Date,t=e.getTime()/1e3,n=(t-this._startTime)/this._duration;if(this._delegate){var r;this._type==="vec4"?(r=[0,0,0,0],r[0]=(1-n)*this._startValue[0]+n*this._endValue[0],r[1]=(1-n)*this._startValue[1]+n*this._endValue[1],r[2]=(1-n)*this._startValue[2]+n*this._endValue[2],r[3]=(1-n)*this._startValue[3]+n*this._endValue[3]):this._type==="float"&&(r=(1-n)*this._startValue+n*this._endValue),this._delegate.handleAnimationValueUpdate&&this._delegate.handleAnimationValueUpdate(this,this._path,r)}}},stopAnimation:{value:function(){clearInterval(this._intervalRequest)}},run:{value:function(){var e=new Date,t=e.getTime()/1e3,n=this;this._startTime=t,this._intervalRequest=setInterval(function(){n.handleUpdate.call(n)},1/30),setTimeout(function(){n.stopAnimation.call(n)},this._duration*1e3)}}});Effect=exports.Effect=Montage.create(Montage,{_name:{enumerable:!0,value:""},name:{enumerable:!1,get:function(){return this._name},set:function(e){this._name=e}},_profiles:{enumerable:!0,value:{}},profiles:{enumerable:!1,get:function(){return this._profiles},set:function(e){this._profiles=e}},_template:{enumerable:!0,value:{}},template:{enumerable:!1,get:function(){return this._template},set:function(e){this._template=e}},loadTemplate:{value:function(e,t,n,r){if(this.template&&(!this._isTemplateLoaded||!this._isTemplateLoading)){this._isTemplateLoading=!0;var i=this,s,o,u=this.inputs,a=function(n){n.instantiateWithOwnerAndDocument(i,window.document,function(n){n.name=t;if(u){var i=Object.keys(u);i.forEach(function(e){n.inputs[e].value=u[e].value},this)}e&&e(n,r)}),i._isTemplateLoaded=!0,i._isTemplateLoading=!1},f;n?(s=Montage.getInfoForObject(this),f=s.require):f=window.require,Template.templateWithModuleId(f,this.template,a)}}},_inputsDidChange:{value:function(){var e=this.inputKeys,t=this;e.forEach(function(e){var t=this.inputs[e].value;Montage.defineProperty(this.inputs[e],"_value",{writable:!0,value:null}),Montage.defineProperty(this.inputs[e],"handleAnimationValueUpdate",{value:function(e,t,n){this.animatedValue=n}}),Montage.defineProperty(this.inputs[e],"animatedValue",{writable:!0,value:null}),Montage.defineProperty(this.inputs[e],"value",{get:function(){return this._value},set:function(e){var t=AnimationManager.animationDuration>0;if(t&&this._value!==null&&this.type==="vec4"){var n=Montage.create(SimpleAnimation);n.init(null,"vec4",this._value,e,AnimationManager.animationDuration,this,this),n.run()}else this.animatedValue=e;this._value=e}}),this.inputs[e].animatedValue=t,this.inputs[e].value=t},this)}},_inputs:{enumerable:!1,value:null},inputs:{enumerable:!0,get:function(){return this._inputs},set:function(e){this._inputs=e,this._inputsDidChange()}},inputKeys:{enumerable:!1,get:function(){return this._inputs?Object.keys(this._inputs):[]}}})