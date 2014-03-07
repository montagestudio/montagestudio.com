function PropertyChanges(){throw new Error("This is an abstract interface. Mix it. Don't construct it")}require("../shim");var WeakMap=require("weak-map"),object_owns=Object.prototype.hasOwnProperty,propertyChangeDescriptors=new WeakMap,overriddenObjectDescriptors=new WeakMap;module.exports=PropertyChanges,PropertyChanges.debug=!0,PropertyChanges.prototype.getOwnPropertyChangeDescriptor=function(e){propertyChangeDescriptors.has(this)||propertyChangeDescriptors.set(this,{});var t=propertyChangeDescriptors.get(this);return object_owns.call(t,e)||(t[e]={willChangeListeners:[],changeListeners:[]}),t[e]},PropertyChanges.prototype.hasOwnPropertyChangeDescriptor=function(e){if(!propertyChangeDescriptors.has(this))return!1;if(!e)return!0;var t=propertyChangeDescriptors.get(this);return object_owns.call(t,e)?!0:!1},PropertyChanges.prototype.addOwnPropertyChangeListener=function(e,t,n){this.makeObservable&&!this.isObservable&&this.makeObservable();var r=PropertyChanges.getOwnPropertyChangeDescriptor(this,e),i;n?i=r.willChangeListeners:i=r.changeListeners,PropertyChanges.makePropertyObservable(this,e),i.push(t);var s=this;return function(){PropertyChanges.removeOwnPropertyChangeListener(s,e,i,n),s=null}},PropertyChanges.prototype.addBeforeOwnPropertyChangeListener=function(e,t){return PropertyChanges.addOwnPropertyChangeListener(this,e,t,!0)},PropertyChanges.prototype.removeOwnPropertyChangeListener=function(e,t,n){var r=PropertyChanges.getOwnPropertyChangeDescriptor(this,e),i;n?i=r.willChangeListeners:i=r.changeListeners;var s=i.lastIndexOf(t);if(s===-1)throw new Error("Can't remove listener: does not exist.");i.splice(s,1),r.changeListeners.length+r.willChangeListeners.length===0&&PropertyChanges.makePropertyUnobservable(this,e)},PropertyChanges.prototype.removeBeforeOwnPropertyChangeListener=function(e,t){return PropertyChanges.removeOwnPropertyChangeListener(this,e,t,!0)},PropertyChanges.prototype.dispatchOwnPropertyChange=function(e,t,n){var r=PropertyChanges.getOwnPropertyChangeDescriptor(this,e);if(r.isActive)return;r.isActive=!0;var i;n?i=r.willChangeListeners:i=r.changeListeners;var s=(n?"Will":"")+"Change",o="handleProperty"+s,u=String(e);u=u&&u[0].toUpperCase()+u.slice(1);var a="handle"+u+s;try{i.forEach(function(n){var r=n;n=n[a]||n[o]||n,n.call(r,t,e,this)},this)}finally{r.isActive=!1}},PropertyChanges.prototype.dispatchBeforeOwnPropertyChange=function(e,t){return PropertyChanges.dispatchOwnPropertyChange(this,e,t,!0)},PropertyChanges.prototype.makePropertyObservable=function(e){if(Array.isArray(this))return;if(!Object.isExtensible(this,e))throw new Error("Can't make property "+JSON.stringify(e)+" observable on "+this+" because object is not extensible");var t;typeof this.__state__=="object"?t=this.__state__:(t={},Object.isExtensible(this,"__state__")&&Object.defineProperty(this,"__state__",{value:t,writable:!0,enumerable:!1})),t[e]=this[e],overriddenObjectDescriptors.has(this)||(n={},overriddenObjectDescriptors.set(this,n));var n=overriddenObjectDescriptors.get(this);if(object_owns.call(n,e))return;var r,i=this,s=Object.getOwnPropertyDescriptor(i,e);do{r=Object.getOwnPropertyDescriptor(i,e);if(r)break;i=Object.getPrototypeOf(i)}while(i);r=r||{value:undefined,enumerable:!0,writable:!0,configurable:!0};if(!r.configurable)throw new Error("Can't observe non-configurable properties");n[e]=r;if(!r.writable&&!r.set)return;var o;"value"in r?o={get:function(){return r.value},set:function(n){return n===r.value?n:(PropertyChanges.dispatchBeforeOwnPropertyChange(this,e,r.value),r.value=n,t[e]=n,PropertyChanges.dispatchOwnPropertyChange(this,e,n),n)},enumerable:r.enumerable,configurable:!0}:o={get:function(){if(r.get)return r.get.apply(this,arguments)},set:function(n){var i;return r.get&&(i=r.get.apply(this,arguments)),r.set&&r.set.apply(this,arguments),r.get&&(n=r.get.apply(this,arguments),t[e]=n),n===i?n:(PropertyChanges.dispatchBeforeOwnPropertyChange(this,e,i),PropertyChanges.dispatchOwnPropertyChange(this,e,n),n)},enumerable:r.enumerable,configurable:!0},Object.defineProperty(this,e,o)},PropertyChanges.prototype.makePropertyUnobservable=function(e){if(Array.isArray(this))return;if(!overriddenObjectDescriptors.has(this))throw new Error("Can't uninstall observer on property");var t=overriddenObjectDescriptors.get(this);if(!t[e])throw new Error("Can't uninstall observer on property");var n=t[e];delete t[e];var r;typeof this.__state__=="object"?r=this.__state__:(r={},Object.isExtensible(this,"__state__")&&Object.defineProperty(this,"__state__",{value:r,writable:!0,enumerable:!1})),delete r[e],Object.defineProperty(this,e,n)},PropertyChanges.getOwnPropertyChangeDescriptor=function(e,t){return e.getOwnPropertyChangeDescriptor?e.getOwnPropertyChangeDescriptor(t):PropertyChanges.prototype.getOwnPropertyChangeDescriptor.call(e,t)},PropertyChanges.hasOwnPropertyChangeDescriptor=function(e,t){return e.hasOwnPropertyChangeDescriptor?e.hasOwnPropertyChangeDescriptor(t):PropertyChanges.prototype.hasOwnPropertyChangeDescriptor.call(e,t)},PropertyChanges.addOwnPropertyChangeListener=function(e,t,n,r){if(!!Object.isObject(e))return e.addOwnPropertyChangeListener?e.addOwnPropertyChangeListener(t,n,r):PropertyChanges.prototype.addOwnPropertyChangeListener.call(e,t,n,r)},PropertyChanges.removeOwnPropertyChangeListener=function(e,t,n,r){if(!!Object.isObject(e))return e.removeOwnPropertyChangeListener?e.removeOwnPropertyChangeListener(t,n,r):PropertyChanges.prototype.removeOwnPropertyChangeListener.call(e,t,n,r)},PropertyChanges.dispatchOwnPropertyChange=function(e,t,n,r){if(!!Object.isObject(e))return e.dispatchOwnPropertyChange?e.dispatchOwnPropertyChange(t,n,r):PropertyChanges.prototype.dispatchOwnPropertyChange.call(e,t,n,r)},PropertyChanges.addBeforeOwnPropertyChangeListener=function(e,t,n){return PropertyChanges.addOwnPropertyChangeListener(e,t,n,!0)},PropertyChanges.removeBeforeOwnPropertyChangeListener=function(e,t,n){return PropertyChanges.removeOwnPropertyChangeListener(e,t,n,!0)},PropertyChanges.dispatchBeforeOwnPropertyChange=function(e,t,n){return PropertyChanges.dispatchOwnPropertyChange(e,t,n,!0)},PropertyChanges.makePropertyObservable=function(e,t){return e.makePropertyObservable?e.makePropertyObservable(t):PropertyChanges.prototype.makePropertyObservable.call(e,t)},PropertyChanges.makePropertyUnobservable=function(e,t){return e.makePropertyUnobservable?e.makePropertyUnobservable(t):PropertyChanges.prototype.makePropertyUnobservable.call(e,t)}