montageDefine("4c33cfe","list",{dependencies:["./shim","./generic-collection","./generic-order","./listen/property-changes","./listen/range-changes","list"],factory:function(e,t,n){"use strict";function i(e,t,n){if(!(this instanceof i))return new i(e,t,n);var r=this.head=new this.Node;r.next=r,r.prev=r,this.contentEquals=t||Object.equals,this.getDefault=n||Function.noop,this.length=0,this.addEach(e)}function r(e){this.head=e,this.at=e.next}function a(e){this.value=e,this.prev=null,this.next=null}n.exports=i,e("./shim");var o=e("./generic-collection"),s=e("./generic-order"),l=e("./listen/property-changes"),u=e("./listen/range-changes");i.List=i,Object.addEach(i.prototype,o.prototype),Object.addEach(i.prototype,s.prototype),Object.addEach(i.prototype,l.prototype),Object.addEach(i.prototype,u.prototype),i.prototype.constructClone=function(e){return new this.constructor(e,this.contentEquals,this.getDefault)},i.prototype.find=function(e,t){t=t||this.contentEquals;for(var n=this.head,i=n.next;i!==n;){if(t(i.value,e))return i;i=i.next}},i.prototype.findLast=function(e,t){t=t||this.contentEquals;for(var n=this.head,i=n.prev;i!==n;){if(t(i.value,e))return i;i=i.prev}},i.prototype.has=function(e,t){return!!this.find(e,t)},i.prototype.get=function(e,t){var n=this.find(e,t);return n?n.value:this.getDefault(e)},i.prototype["delete"]=function(e,t){var n=this.findLast(e,t);if(n){if(this.dispatchesRangeChanges){var i=[],r=[e];this.dispatchBeforeRangeChange(i,r,n.index)}return n["delete"](),this.length--,this.dispatchesRangeChanges&&(this.updateIndexes(n.next,n.index),this.dispatchRangeChange(i,r,n.index)),!0}return!1},i.prototype.clear=function(){var e,t;this.dispatchesRangeChanges&&(t=this.toArray(),e=[],this.dispatchBeforeRangeChange(e,t,0)),this.head.next=this.head.prev=this.head,this.length=0,this.dispatchesRangeChanges&&this.dispatchRangeChange(e,t,0)},i.prototype.add=function(e){var t=new this.Node(e);return this.dispatchesRangeChanges&&(t.index=this.length,this.dispatchBeforeRangeChange([e],[],t.index)),this.head.addBefore(t),this.length++,this.dispatchesRangeChanges&&this.dispatchRangeChange([e],[],t.index),!0},i.prototype.push=function(){var e=this.head;if(this.dispatchesRangeChanges){var t=Array.prototype.slice.call(arguments),n=[],i=this.length;this.dispatchBeforeRangeChange(t,n,i);var r=this.head.prev}for(var a=0;arguments.length>a;a++){var o=arguments[a],s=new this.Node(o);e.addBefore(s)}this.length+=arguments.length,this.dispatchesRangeChanges&&(this.updateIndexes(r.next,void 0===r.index?0:r.index+1),this.dispatchRangeChange(t,n,i))},i.prototype.unshift=function(){if(this.dispatchesRangeChanges){var e=Array.prototype.slice.call(arguments),t=[];this.dispatchBeforeRangeChange(e,t,0)}for(var n=this.head,i=0;arguments.length>i;i++){var r=arguments[i],a=new this.Node(r);n.addAfter(a),n=a}this.length+=arguments.length,this.dispatchesRangeChanges&&(this.updateIndexes(this.head.next,0),this.dispatchRangeChange(e,t,0))},i.prototype.pop=function(){var e,t=this.head;if(t.prev!==t){if(e=t.prev.value,this.dispatchesRangeChanges){var n=[],i=[e],r=this.length-1;this.dispatchBeforeRangeChange(n,i,r)}t.prev["delete"](),this.length--,this.dispatchesRangeChanges&&this.dispatchRangeChange(n,i,r)}return e},i.prototype.shift=function(){var e,t=this.head;if(t.prev!==t){if(e=t.next.value,this.dispatchesRangeChanges){var n=[],i=[e];this.dispatchBeforeRangeChange(n,i,0)}t.next["delete"](),this.length--,this.dispatchesRangeChanges&&(this.updateIndexes(this.head.next,0),this.dispatchRangeChange(n,i,0))}return e},i.prototype.peek=function(){return this.head!==this.head.next?this.head.next.value:void 0},i.prototype.poke=function(e){this.head!==this.head.next?this.head.next.value=e:this.push(e)},i.prototype.one=function(){return this.peek()},i.prototype.scan=function(e,t){var n=this.head;if("number"==typeof e){var i=e;if(i>=0)for(e=n.next;i&&(i--,e=e.next,e!=n););else for(e=n;0>i&&(i++,e=e.prev,e!=n););return e}return e||t},i.prototype.slice=function(e,t){var n=[],i=this.head;for(e=this.scan(e,i.next),t=this.scan(t,i);e!==t&&e!==i;)n.push(e.value),e=e.next;return n},i.prototype.splice=function(e,t){return this.swap(e,t,Array.prototype.slice.call(arguments,2))},i.prototype.swap=function(e,t,n){var i=e;e=this.scan(e,this.head),null==t&&(t=1/0),n=Array.from(n);for(var r=[],a=e;t--&&t>=0&&a!==this.head;)r.push(a.value),a=a.next;var o,s;this.dispatchesRangeChanges&&(o=e===this.head?this.length:e.prev===this.head?0:e.index,s=e.prev,this.dispatchBeforeRangeChange(n,r,o));for(var a=e,l=0,a=e;r.length>l;l++,a=a.next)a["delete"]();null==i&&a===this.head&&(a=this.head.next);for(var l=0;n.length>l;l++){var u=new this.Node(n[l]);a.addBefore(u)}return this.length+=n.length-r.length,this.dispatchesRangeChanges&&(e===this.head?this.updateIndexes(this.head.next,0):this.updateIndexes(s.next,s.index+1),this.dispatchRangeChange(n,r,o)),r},i.prototype.reverse=function(){if(this.dispatchesRangeChanges){var e=this.toArray(),t=e.reversed();this.dispatchBeforeRangeChange(t,e,0)}var n=this.head;do{var i=n.next;n.next=n.prev,n.prev=i,n=n.next}while(n!==this.head);return this.dispatchesRangeChanges&&this.dispatchRangeChange(t,e,0),this},i.prototype.sort=function(){this.swap(0,this.length,this.sorted())},i.prototype.reduce=function(e,t){for(var n=arguments[2],i=this.head,r=i.next;r!==i;)t=e.call(n,t,r.value,r,this),r=r.next;return t},i.prototype.reduceRight=function(e,t){for(var n=arguments[2],i=this.head,r=i.prev;r!==i;)t=e.call(n,t,r.value,r,this),r=r.prev;return t},i.prototype.updateIndexes=function(e,t){for(;e!==this.head;)e.index=t++,e=e.next},i.prototype.makeObservable=function(){this.head.index=-1,this.updateIndexes(this.head.next,0),this.dispatchesRangeChanges=!0},i.prototype.iterate=function(){return new r(this.head)},r.prototype.next=function(){if(this.at===this.head)throw StopIteration;var e=this.at.value;return this.at=this.at.next,e},i.prototype.Node=a,a.prototype["delete"]=function(){this.prev.next=this.next,this.next.prev=this.prev},a.prototype.addBefore=function(e){var t=this.prev;this.prev=e,e.prev=t,t.next=e,e.next=this},a.prototype.addAfter=function(e){var t=this.next;this.next=e,e.next=t,t.prev=e,e.prev=this}}});