var Montage=require("montage/core/core").Montage,Effect=require("effect/effect").Effect,EffectLoader=require("effect/effect-loader").EffectLoader,DefaultEffectRepository=require("default-effect-repository/default-effect-repository").DefaultEffectRepository;EffectLibrary=exports.EffectLibrary=Montage.create(Montage,{_repositories:{value:{}},registerEffectRepository:{value:function(e,t){this._repositories[e]=t}},unregisterEffectRepository:{value:function(e){this._repositories[e]=null}},_registerDefaultRepositoryIfNeeded:{value:function(){var e="default";this._repositories[e]||this.registerEffectRepository(e,DefaultEffectRepository.templates)}},effectNames:{get:function(e){var t;this._registerDefaultRepositoryIfNeeded();var n=[];return e?(t=this._repositories[e],n=Object.keys(t)):Object.keys(this._repositories).forEach(function(e){t=this._repositories[e],n=n.concat(Object.keys(t))},this),n}},effectWithName:{value:function(e,t){function r(e,n){t(e,n)}var n=this;this._registerDefaultRepositoryIfNeeded();var i=Object.keys(this._repositories);i&&i.forEach(function(t){var n=this._repositories[t],i=n[e];i&&EffectLoader.loadEffect(r,e,i,n.__builtin_templates,null)},this)}}})