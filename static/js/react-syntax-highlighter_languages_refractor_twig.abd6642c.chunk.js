"use strict";(self.webpackChunksmnast_github_io=self.webpackChunksmnast_github_io||[]).push([[3375,6403],{9701:e=>{function t(e){!function(e){function t(e,t){return"___"+e.toUpperCase()+t+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(n,a,o,i){if(n.language===a){var r=n.tokenStack=[];n.code=n.code.replace(o,(function(e){if("function"===typeof i&&!i(e))return e;for(var o,s=r.length;-1!==n.code.indexOf(o=t(a,s));)++s;return r[s]=e,o})),n.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(n,a){if(n.language===a&&n.tokenStack){n.grammar=e.languages[a];var o=0,i=Object.keys(n.tokenStack);!function r(s){for(var u=0;u<s.length&&!(o>=i.length);u++){var l=s[u];if("string"===typeof l||l.content&&"string"===typeof l.content){var g=i[o],p=n.tokenStack[g],c="string"===typeof l?l:l.content,d=t(a,g),f=c.indexOf(d);if(f>-1){++o;var k=c.substring(0,f),m=new e.Token(a,e.tokenize(p,n.grammar),"language-"+a,p),b=c.substring(f+d.length),h=[];k&&h.push.apply(h,r([k])),h.push(m),b&&h.push.apply(h,r([b])),"string"===typeof l?s.splice.apply(s,[u,1].concat(h)):l.content=h}}else l.content&&r(l.content)}return s}(n.tokens)}}}})}(e)}e.exports=t,t.displayName="markupTemplating",t.aliases=[]},8774:(e,t,n)=>{var a=n(9701);function o(e){e.register(a),e.languages.twig={comment:/^\{#[\s\S]*?#\}$/,"tag-name":{pattern:/(^\{%-?\s*)\w+/,lookbehind:!0,alias:"keyword"},delimiter:{pattern:/^\{[{%]-?|-?[%}]\}$/,alias:"punctuation"},string:{pattern:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,inside:{punctuation:/^['"]|['"]$/}},keyword:/\b(?:even|if|odd)\b/,boolean:/\b(?:false|null|true)\b/,number:/\b0x[\dA-Fa-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][-+]?\d+)?/,operator:[{pattern:/(\s)(?:and|b-and|b-or|b-xor|ends with|in|is|matches|not|or|same as|starts with)(?=\s)/,lookbehind:!0},/[=<>]=?|!=|\*\*?|\/\/?|\?:?|[-+~%|]/],punctuation:/[()\[\]{}:.,]/},e.hooks.add("before-tokenize",(function(t){if("twig"===t.language){e.languages["markup-templating"].buildPlaceholders(t,"twig",/\{(?:#[\s\S]*?#|%[\s\S]*?%|\{[\s\S]*?\})\}/g)}})),e.hooks.add("after-tokenize",(function(t){e.languages["markup-templating"].tokenizePlaceholders(t,"twig")}))}e.exports=o,o.displayName="twig",o.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_twig.abd6642c.chunk.js.map