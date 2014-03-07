montageDefine("4c33cfe","generic-set",{dependencies:[],factory:function(e,t,n){function i(){throw Error("Can't construct. GenericSet is a mixin.")}n.exports=i,i.prototype.union=function(e){var t=this.constructClone(this);return t.addEach(e),t},i.prototype.intersection=function(e){return this.constructClone(this.filter(function(t){return e.has(t)}))},i.prototype.difference=function(e){var t=this.constructClone(this);return t.deleteEach(e),t},i.prototype.symmetricDifference=function(e){var t=this.union(e),n=this.intersection(e);return t.difference(n)},i.prototype.equals=function(e,t){var n=this;return Object.can(e,"reduce")&&this.length===e.length&&e.reduce(function(e,i){return e&&n.has(i,t)},!0)},i.prototype.contains=function(e){return this.has(e)},i.prototype.remove=function(e){return this["delete"](e)},i.prototype.toggle=function(e){this.has(e)?this["delete"](e):this.add(e)}}});