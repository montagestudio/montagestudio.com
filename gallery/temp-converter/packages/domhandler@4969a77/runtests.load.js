montageDefine("4969a77","runtests",{dependencies:["fs","path","assert","htmlparser2","./"],factory:function(e){function t(e,n){if(i.equal(typeof e,typeof n,"types didn't match"),"object"!=typeof e||null===e)i.strictEqual(e,n,"result doesn't equal expected");else for(var r in e)i.ok(r in n,"result didn't contain property "+r),t(e[r],n[r])}var n=e("fs"),r=e("path"),i=e("assert"),a=e("htmlparser2").Parser,o=e("./"),s=r.resolve(__dirname,"tests"),l=5;n.readdirSync(s).filter(RegExp.prototype.test,/\.json$/).map(function(e){return r.resolve(s,e)}).map(e).forEach(function(e){console.log("Testing:",e.name);for(var n=new o(function(n,r){i.ifError(n),t(e.expected,r)},e.options.handler),r=e.html,s=new a(n,e.options.parser),u=0;r.length>u;u+=l)s.write(r.substring(u,u+l));s.done(),s.parseComplete(r)}),console.log("\nAll tests passed!")}});