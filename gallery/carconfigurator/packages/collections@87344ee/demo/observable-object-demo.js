require("../observable-object");var object={};Object.addOwnPropertyChangeListener(object,"a",function(e,t,n){console.log("changed",e)}),object.a=10,object.a=20