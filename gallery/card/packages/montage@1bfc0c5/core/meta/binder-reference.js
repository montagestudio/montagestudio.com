"use strict";var Montage=require("montage").Montage,Promise=require("core/promise").Promise,RemoteReference=require("core/meta/remote-reference").RemoteReference,BinderModule=require("core/meta/binder"),logger=require("core/logger").logger("blueprint");exports.BinderReference=RemoteReference.create(RemoteReference,{identifier:{get:function(){return this._reference||(this._reference=this.referenceFromValue(this._value)),["binder",this._reference.binderName.toLowerCase(),"reference"].join("_")}},valueFromReference:{value:function(e,t){var n=e.binderName,r=e.binderModuleId,i=Promise.defer(),s=BinderModule.Binder.manager.binderForName(n);if(s)i.resolve(s);else try{var o=t,u=r.indexOf("/");if(u>0){var a=r.substring(0,u),f=t.mappings;a in f&&(r=r.substring(u+1),o=o.getPackage(f[a].location))}i=BinderModule.Binder.getBinderWithModuleId(r,o)}catch(l){i.reject(new Error("Error cannot find Blueprint Binder "+r))}return i.promise}},referenceFromValue:{value:function(e){var t={};return t.binderName=e.name,t.binderModuleId=e.binderModuleId,t}}})