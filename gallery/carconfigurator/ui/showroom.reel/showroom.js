var Montage=require("montage").Montage,Component=require("montage/ui/component").Component;exports.Showroom=Montage.create(Component,{configuratorSubstitution:{value:null},_vehicle:{value:null},vehicle:{get:function(){return this._vehicle},set:function(e){if(e===this._vehicle)return;this._vehicle=e,this._isComponentExpanded&&this._loadVehicleViews(),this.needsDraw=!0}},_loadVehicleViews:{value:function(){var e=this;require.async(this.vehicle.moduleName+"/configurator.reel").then(function(t){var n=t.Configurator.create();n.vehicle=e._vehicle,e.configuratorSubstitution.switchComponents[e.vehicle.name]=n,e.configuratorSubstitution.switchValue=e.vehicle.name}).done()}},templateDidLoad:{value:function(){this._vehicle&&this._loadVehicleViews()}},prepareForDraw:{value:function(){this.addEventListener("pick",this,!1)}},handlePick:{value:function(e){var t=this.configuratorSubstitution.content;t&&typeof t.pickFromModel=="function"&&t.pickFromModel(e.detail)}}})