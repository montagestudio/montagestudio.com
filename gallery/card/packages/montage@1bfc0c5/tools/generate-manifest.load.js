montageDefine("1bfc0c5","tools/generate-manifest",{dependencies:["fs","path"],factory:function(e,t,n){function o(){console.log("Usage: generate-manifest [ directory... ]")}function u(e,t,n){for(var s=0,o=t.length;s<o;s++){var a=t[s];a.lastIndexOf("/")===a.length-1&&(a=a.substr(0,a.length-1));var f=i.join(e,a),l=r.statSync(f);if(l.isDirectory()){var c=n[a]={directory:!0,files:{}};u(f,r.readdirSync(f),c.files)}else n[a]=null}return n}var r=e("fs"),i=e("path"),s={files:{}},a=process.argv;if(a.length>2&&a[2]==="--help")o();else{var f=a.slice(2);f.length===0&&(f=r.readdirSync(".")),u("",f,s.files),r.writeFileSync("manifest.json",JSON.stringify(s),"utf8"),console.log("Wrote manfiest.json")}}})