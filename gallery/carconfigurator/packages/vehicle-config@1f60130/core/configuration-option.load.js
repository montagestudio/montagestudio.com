montageDefine("1f60130","core/configuration-option",{dependencies:["montage"],factory:function(e,t,n){var r=e("montage").Montage,i=t.ConfigurationOption=r.create(r,{initWithNameAndCost:{value:function(e,t){return this.name=e,this.cost=t||0,this}},name:{value:null},cost:{value:0}});t.BooleanConfigurationOption=r.create(i,{chosen:{value:!1}})}})