var AbstractLanguage=require("./abstract-language").AbstractLanguage,Parser=require("./parser").Parser,Semantics=require("./semantics").Semantics,LANGUAGE=require("./language"),VALUE="value",LITERAL="literal",GET="get",BEGIN="begin",END="end",MAP="map",COMMA="comma",IT="it",DOT=".",ARRAY="array",SORTED="sorted",PropertyLanguage=exports.PropertyLanguage=AbstractLanguage.create(AbstractLanguage,{semantics:{value:Semantics},stringToToken:{value:{"(":{type:BEGIN},")":{type:END},"*":{type:MAP},",":{type:COMMA}}},tokenRe:{value:/\(|\)|\d+|\w[\w\d]*|,|\*|\.|./g},termStartRe:{value:/[\(\w\d\*]/},separatorsRe:{value:/[\(\)\.,]/},tokenize:{value:function(e,t){var n;t||(n=[],t=function(e){n.push(e)});var r=this,i=!1,s=!0,o="";return e.replace(r.tokenRe,function(n){if(i){if(!r.separatorsRe.test(n))throw new Error("Expected punctuation after: "+JSON.stringify(o)+", got: "+JSON.stringify(e.slice(o.length)));i=!1}if(s&&!r.termStartRe.test(n))throw new Error("Expected term after: "+JSON.stringify(o)+", got: "+JSON.stringify(e.slice(o.length)));if(n===DOT)s=!0;else if(r.stringToToken[n])t(r.stringToToken[n]),s=!1;else if(/^\d+$/.test(n))t({type:LITERAL,value:+n}),i=!0,s=!1;else{if(!/^\w[\w\d]*$/.test(n))throw new Error("Unexpected character: "+JSON.stringify(n));t({type:LITERAL,value:n}),i=!0,s=!1}o+=n}),n}},parse:{value:function(e){var t=this,n,r=Parser.newWithLanguage(t,function(e){n=e});return t.tokenize(e,function(e){r.emit(e)}),r.emit(LANGUAGE.Language.tokens.eof),n}},grammar:{value:function(){var e=this;e.primary=e.parsePrimary(function(t){return e.parseExpression(t)});var t=e.parseTuple();e.parseExpression=e.precedence()}},parseTerm:{value:function(e,t){var n=this;return function(r){return r.type===LITERAL?n.optional(BEGIN,function(t){return t?n.primary(function(t){return n.expect(END,function(){return e({call:!0,type:r.value,arg:t})})}):e({type:GET,arg:r})}):r.type===MAP?n.parseTerm(function(t){return e({type:MAP,arg:{type:t.type,args:[{type:VALUE},t.arg]}})},function(){return e({type:IT,arg:{type:VALUE}})}):r.type===BEGIN?n.parseExpression(function(t){return n.expect(END,function(){return e({type:IT,arg:t})})}):t()(r)}}},parsePrimary:{value:function(e){var t=this,n=t.precedence(function(e){return function(e,r){return r=r||{type:VALUE},t.parseTerm(function(t){var i;return t.call?(t.arg.type!==VALUE&&(r={type:MAP,args:[r,t.arg]}),i={type:t.type,args:[r,{type:"value"}]}):i={type:t.type,args:[r,t.arg]},i.type===SORTED&&i.args.push({type:"literal",value:!1}),i.type===IT&&i.args[0].type===VALUE&&(i=i.args[1]),n(e,i)},function(){return e(r||LANGUAGE.Language.tokens.value)})}});return n}},parseTuple:{value:function(){var e=this;e.requireTokens([COMMA]);var t=e.precedence(function(n){return function(r,i){return e.optional(END,function(s,o){return s?o(r({type:ARRAY,terms:i||[]})):n(function(n){return e.optional(COMMA,function(e,s){return e?t(r,(i||[]).concat([n])):i?r({type:ARRAY,terms:i.concat([n])}):r(n)})})})}});return t}},reemit:{value:function(e,t,n){n=n||LANGUAGE.Language.tokens;if(e.type!==VALUE)if(e.type===GET)this.reemit(e.args[0],t),t(n.get),t(e.args[1]);else if(e.type===ARRAY){t(n.array);var r=e.terms,i=r.length-1;r.forEach(function(e,r){this.reemit(e,t),(r!==i||r===0)&&t(n.comma)},this),t(n.end)}else e.type===SORTED?(t(n.begin),this.reemit(e.args[0],t),t(n.sorted),t(n.by),this.reemit(e.args[1],t),t(n.end)):(t(n.begin),this.reemit(e.args[0],t),t(n[e.type]),this.reemit(e.args[1],t),t(n.end))}},compile:{value:function(e){var t=this.parse(e);return this.semantics.compile(t)}},evaluate:{value:function(e,t){return this.compile(e)(t)}}})