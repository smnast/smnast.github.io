"use strict";(self.webpackChunksmnast_github_io=self.webpackChunksmnast_github_io||[]).push([[2757,1695,2585],{5894:e=>{function t(e){!function(e){var t=e.util.clone(e.languages.javascript),n=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,a=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,s=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function r(e,t){return e=e.replace(/<S>/g,(function(){return n})).replace(/<BRACES>/g,(function(){return a})).replace(/<SPREAD>/g,(function(){return s})),RegExp(e,t)}s=r(s).source,e.languages.jsx=e.languages.extend("markup",t),e.languages.jsx.tag.pattern=r(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.jsx.tag.inside.comment=t.comment,e.languages.insertBefore("inside","attr-name",{spread:{pattern:r(/<SPREAD>/.source),inside:e.languages.jsx}},e.languages.jsx.tag),e.languages.insertBefore("inside","special-attr",{script:{pattern:r(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:e.languages.jsx}}},e.languages.jsx.tag);var i=function(e){return e?"string"===typeof e?e:"string"===typeof e.content?e.content:e.content.map(i).join(""):""},g=function(t){for(var n=[],a=0;a<t.length;a++){var s=t[a],r=!1;if("string"!==typeof s&&("tag"===s.type&&s.content[0]&&"tag"===s.content[0].type?"</"===s.content[0].content[0].content?n.length>0&&n[n.length-1].tagName===i(s.content[0].content[1])&&n.pop():"/>"===s.content[s.content.length-1].content||n.push({tagName:i(s.content[0].content[1]),openedBraces:0}):n.length>0&&"punctuation"===s.type&&"{"===s.content?n[n.length-1].openedBraces++:n.length>0&&n[n.length-1].openedBraces>0&&"punctuation"===s.type&&"}"===s.content?n[n.length-1].openedBraces--:r=!0),(r||"string"===typeof s)&&n.length>0&&0===n[n.length-1].openedBraces){var o=i(s);a<t.length-1&&("string"===typeof t[a+1]||"plain-text"===t[a+1].type)&&(o+=i(t[a+1]),t.splice(a+1,1)),a>0&&("string"===typeof t[a-1]||"plain-text"===t[a-1].type)&&(o=i(t[a-1])+o,t.splice(a-1,1),a--),t[a]=new e.Token("plain-text",o,null,o)}s.content&&"string"!==typeof s.content&&g(s.content)}};e.hooks.add("after-tokenize",(function(e){"jsx"!==e.language&&"tsx"!==e.language||g(e.tokens)}))}(e)}e.exports=t,t.displayName="jsx",t.aliases=[]},8412:(e,t,n)=>{var a=n(5894),s=n(3336);function r(e){e.register(a),e.register(s),function(e){var t=e.util.clone(e.languages.typescript);e.languages.tsx=e.languages.extend("jsx",t),delete e.languages.tsx.parameter,delete e.languages.tsx["literal-property"];var n=e.languages.tsx.tag;n.pattern=RegExp(/(^|[^\w$]|(?=<\/))/.source+"(?:"+n.pattern.source+")",n.pattern.flags),n.lookbehind=!0}(e)}e.exports=r,r.displayName="tsx",r.aliases=[]},3336:e=>{function t(e){!function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"];var t=e.languages.extend("typescript",{});delete t["class-name"],e.languages.typescript["class-name"].inside=t,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:t}}}}),e.languages.ts=e.languages.typescript}(e)}e.exports=t,t.displayName="typescript",t.aliases=["ts"]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_tsx.e8e99a7d.chunk.js.map