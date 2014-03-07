function getAttributeProperties(e,t){var n=UNDERSCORE+t+ATTRIBUTE_PROPERTIES;return e.hasOwnProperty(n)?e[n]:Object.defineProperty(e,n,{enumerable:!1,configurable:!1,writable:!1,value:Object.create(getAttributeProperties(Object.getPrototypeOf(e),t))})[n]}require("collections/shim"),require("core/shim/object"),require("core/shim/array"),require("core/shim/string"),require("core/extras/object"),require("core/extras/array"),require("core/extras/date"),require("core/extras/element"),require("core/extras/function"),require("core/extras/regexp"),require("core/extras/string");var ATTRIBUTE_PROPERTIES="AttributeProperties",UNDERSCORE="_",PROTO="__proto__",VALUE="value",ENUMERABLE="enumerable",DISTINCT="distinct",SERIALIZABLE="serializable",MODIFY="modify",Array_prototype=Array.prototype,Object_prototype=Object.prototype,Montage=exports.Montage={};Object.defineProperty(Montage,"create",{configurable:!0,value:function(e,t){if(e!==undefined&&typeof e!="object")throw new TypeError("Object prototype may only be an Object or null, not '"+e+"'");if(!t){var n=Object.create(typeof e=="undefined"?this:e);return typeof n.didCreate=="function"&&n.didCreate(),n}var r=Object.create(e);return Montage.defineProperties(r,t),r}});var extendedPropertyAttributes=[SERIALIZABLE];extendedPropertyAttributes.forEach(function(e){Object.defineProperty(Object.prototype,UNDERSCORE+e+ATTRIBUTE_PROPERTIES,{enumerable:!1,configurable:!1,writable:!1,value:{}})}),Object.defineProperty(Montage,"defineProperty",{value:function(e,t,n){if(typeof e!="object"||e===null)throw new TypeError("Object must be an object, not '"+e+"'");var r=n.dependencies,i=VALUE in n;if(DISTINCT in n&&!i)throw"Cannot use distinct attribute on non-value property '"+t+"'";if(PROTO in n)n.__proto__=i?typeof n.value=="function"?_defaultFunctionValueProperty:_defaultObjectValueProperty:_defaultAccessorProperty;else{var s;i?typeof n.value=="function"?s=_defaultFunctionValueProperty:s=_defaultObjectValueProperty:s=_defaultAccessorProperty;for(var o in s)o in n||(n[o]=s[o])}!n.hasOwnProperty(ENUMERABLE)&&t.charAt(0)===UNDERSCORE&&(n.enumerable=!1),n.hasOwnProperty(SERIALIZABLE)||(n.enumerable?n.get&&!n.set?n.serializable=!1:n.writable===!1&&(n.serializable=!1):n.serializable=!1);if(r){var u=0,a;for(;a=r[u];u++)Montage.addDependencyToProperty(e,a,t)}SERIALIZABLE in n&&(getAttributeProperties(e,SERIALIZABLE)[t]=n.serializable);if(n.distinct!==!0||typeof n.value!="object")return Object.defineProperty(e,t,n);(function(e,t,n,r){var i=function(e,t,n){Object.defineProperty(e,t,{enumerable:!1,configurable:!0,writable:!0,value:n})};n.constructor===Object&&Object.getPrototypeOf(n)===Object_prototype?Object.keys(n).length!==0?Object.defineProperty(r,e,{configurable:!0,get:function(){var e=this[t];if(!e){var r;e={};for(r in n)e[r]=n[r];this.hasOwnProperty(t)?this[t]=e:i(this,t,e)}return e},set:function(e){this.hasOwnProperty(t)?this[t]=e:i(this,t,e)}}):Object.defineProperty(r,e,{configurable:!0,get:function(){var e=this[t];return e||(e={},this.hasOwnProperty(t)?this[t]=e:i(this,t,e)),e},set:function(e){this.hasOwnProperty(t)?this[t]=e:i(this,t,e)}}):(n.__proto__||Object.getPrototypeOf(n))===Array_prototype?n.length!==0?Object.defineProperty(r,e,{configurable:!0,get:function(){var e=this[t];if(!e){var r,s;e=[];for(r=0;typeof (s=n[r])!="undefined";r++)e[r]=s;this.hasOwnProperty(t)?this[t]=e:i(this,t,e)}return e},set:function(e){this.hasOwnProperty(t)?this[t]=e:i(this,t,e)}}):Object.defineProperty(r,e,{configurable:!0,get:function(){var e=this[t];return e||(e=[],this.hasOwnProperty(t)?this[t]=e:i(this,t,e)),e},set:function(e){this.hasOwnProperty(t)?this[t]=e:i(this,t,e)}}):n.constructor.prototype===Object.getPrototypeOf(n)?Object.defineProperty(r,e,{configurable:!0,get:function(){var e=this[t];if(!e){var r;e=new n.constructor;for(r in n)e[r]=n[r];this.hasOwnProperty(t)?this[t]=e:i(this,t,e)}return e},set:function(e){this.hasOwnProperty(t)?this[t]=e:i(this,t,e)}}):Object.defineProperty(r,e,{configurable:!0,get:function(){var e=this[t];return e||(e=Object.create(n.__proto__||Object.getPrototypeOf(n)),this.hasOwnProperty(t)?this[t]=e:i(this,t,e)),e},set:function(e){this.hasOwnProperty(t)?this[t]=e:i(this,t,e)}})})(t,UNDERSCORE+t,n.value,e)}}),Object.defineProperty(Montage,"defineProperties",{value:function(e,t){if(typeof t!="object"||t===null)throw new TypeError("Properties must be an object, not '"+t+"'");for(var n in t)"_bindingDescriptors"!==n&&this.defineProperty(e,n,t[n]);return e}});var _defaultAccessorProperty={enumerable:!0,configurable:!0,serializable:"reference"},_defaultObjectValueProperty={writable:!0,enumerable:!0,configurable:!0,serializable:"reference"},_defaultFunctionValueProperty={writable:!0,enumerable:!1,configurable:!0,serializable:!1};Montage.defineProperty(Montage,"addDependencyToProperty",{value:function(e,t,n){e._dependenciesForProperty||Montage.defineProperty(e,"_dependenciesForProperty",{value:{}}),e._dependenciesForProperty[n]||(e._dependenciesForProperty[n]=[]),e._dependenciesForProperty[n].push(t)}}),Montage.defineProperty(Montage,"removeDependencyFromProperty",{value:function(e,t,n){if(!e._dependenciesForProperty)return;var r=e._dependenciesForProperty[n];r&&(r=r.filter(function(e){return e!==t}))}}),Montage.defineProperty(Montage,"getSerializablePropertyNames",{value:function(e){var t=[],n=e._serializableAttributeProperties;if(n)for(var r in n)n[r]&&t.push(r);return t}}),Montage.defineProperty(Montage,"getPropertyAttribute",{value:function(e,t,n){var r=UNDERSCORE+n+ATTRIBUTE_PROPERTIES,i=e[r];if(i)return i[t]}}),Montage.defineProperty(Montage,"getPropertyAttributes",{value:function(e,t){var n={},r=UNDERSCORE+t+ATTRIBUTE_PROPERTIES,i=e[r];if(!i)return;for(var s in i)n[s]=i[s];return n}});var _instanceMetadataDescriptor={isInstance:{value:!0}},_functionInstanceMetadataDescriptor={objectName:{value:"Function"},isInstance:{value:!0}};Montage.defineProperty(Montage,"getInfoForObject",{value:function(e){var t,n;if(hasOwnProperty.call(e,"_montage_metadata"))return e._montage_metadata;t=e._montage_metadata||e.constructor&&e.constructor._montage_metadata||null,e.constructor===Function?n=_functionInstanceMetadataDescriptor:n=_instanceMetadataDescriptor;try{return Object.defineProperty(e,"_montage_metadata",{enumerable:!1,writable:!0,value:Object.create(t,n)})._montage_metadata}catch(r){return e._montage_metadata=Object.create(t,n)}}}),Object.defineProperty(Montage,"doNothing",{value:function(){}}),Object.defineProperty(Montage,"self",{value:function(){return this}}),Object.defineProperty(Montage,"__OBJECT_COUNT",{value:0,writable:!0});var UUID=require("core/uuid");typeof window!="undefined"&&(window.uuid=UUID.generate());var hasOwnProperty=Object.prototype.hasOwnProperty,uuidGetGenerator=function(){var e=UUID.generate(),t=Montage.getInfoForObject(this);try{if(t!==null&&t.isInstance===!1)this._uuid=e,Object.defineProperty(this,"uuid",{get:function(){return this.hasOwnProperty("uuid")?this._uuid:uuidGetGenerator.call(this)}});else{t.isInstance&&Object.defineProperty(this,"uuid",{configurable:!0,enumerable:!1,writable:!1,value:e});if(this instanceof Element||!t.isInstance||!(VALUE in Object.getOwnPropertyDescriptor(this,"uuid"))||!(PROTO in this))this._uuid=e}}catch(n){this._uuid=e}return e},defaultUuidGet=function(){return hasOwnProperty.call(this,"_uuid")?this._uuid:uuidGetGenerator.call(this)};Object.defineProperty(Object.prototype,"_uuid",{enumerable:!1,value:null,writable:!0}),Object.defineProperty(Object.prototype,"uuid",{configurable:!0,get:defaultUuidGet,set:function(){}}),Montage.defineProperty(Montage,"identifier",{value:null,serializable:!0}),Object.defineProperty(Montage,"equals",{value:function(e){return this===e||this.uuid===e.uuid}}),Object.defineProperty(Montage,"callDelegateMethod",{value:function(e){var t=this.delegate,n,r;if(typeof this.identifier=="string"){n=this.identifier+e.toCapitalized();if(t&&typeof (r=t[n])=="function")return Array_prototype.shift.call(arguments),r.apply(t,arguments)}if(t&&typeof (r=t[e])=="function")return Array_prototype.shift.call(arguments),r.apply(t,arguments)}}),exports._blueprintModuleIdDescriptor={serializable:!1,enumerable:!1,get:function(){var e=Montage.getInfoForObject(this),t=e&&!e.isInstance?this:Object.getPrototypeOf(this);if(!Object.getOwnPropertyDescriptor(t,"_blueprintModuleId")||!t._blueprintModuleId){e=Montage.getInfoForObject(t);var n=e.moduleId,r=n.lastIndexOf("/"),i=n.lastIndexOf(".");r=r===-1?0:r+1,i=i===-1?n.length:i,i=i<r?n.length:i,Montage.defineProperty(t,"_blueprintModuleId",{enumerable:!1,value:n.slice(0,i)+"-blueprint.json"})}return t._blueprintModuleId}},exports._blueprintDescriptor={serializable:!1,enumerable:!1,get:function(){var e=Montage.getInfoForObject(this),t=e&&!e.isInstance?this:Object.getPrototypeOf(this);if(!Object.getOwnPropertyDescriptor(t,"_blueprint")||!t._blueprint){var n=t.blueprintModuleId;if(n==="")throw new TypeError("Blueprint moduleId undefined for the module '"+JSON.stringify(t)+"'");exports._blueprintDescriptor.BlueprintModulePromise||(exports._blueprintDescriptor.BlueprintModulePromise=require.async("core/meta/blueprint").get("Blueprint")),Montage.defineProperty(t,"_blueprint",{enumerable:!1,value:exports._blueprintDescriptor.BlueprintModulePromise.then(function(e){var r=Montage.getInfoForObject(t);return e.getBlueprintWithModuleId(n,r.require).then(null,function(){var r=e.createDefaultBlueprintForObject(t);return r.blueprintInstanceModuleId=n,r})})})}return t._blueprint},set:function(e){var t=Montage.getInfoForObject(this),n,r=t&&!t.isInstance?this:Object.getPrototypeOf(this);if(e===null)n=null;else{if(typeof e.then=="function")throw new TypeError("Object blueprint should not be a promise '"+JSON.stringify(e)+"'");e.blueprintInstanceModuleId=r.blueprintModuleId,n=require("core/promise").Promise.resolve(e)}Montage.defineProperty(r,"_blueprint",{enumerable:!1,value:n})}}