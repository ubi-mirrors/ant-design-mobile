webpackJsonp([114,144],{527:function(n,t){n.exports={content:["section",["h2","\u56fe\u6807\u7684\u547d\u540d\u89c4\u8303"],["p","\u6211\u4eec\u4e3a\u6bcf\u4e2a\u56fe\u6807\u8d4b\u4e88\u4e86\u8bed\u4e49\u5316\u7684\u547d\u540d\uff0c\u547d\u540d\u89c4\u5219\u5982\u4e0b:"],["ul",["li",["p","\u5b9e\u5fc3\u548c\u63cf\u7ebf\u56fe\u6807\u4fdd\u6301\u540c\u540d\uff0c\u7528 ",["code","-o"]," \u6765\u533a\u5206\uff0c\u6bd4\u5982 ",["code","question-circle"],"(\u5b9e\u5fc3) \u548c ",["code","question-circle-o"],"(\u63cf\u7ebf)\uff1b"]],["li",["p","\u547d\u540d\u987a\u5e8f\uff1a",["code","[icon\u540d]-[\u5f62\u72b6\u53ef\u9009]-[\u63cf\u7ebf\u4e0e\u5426]-[\u65b9\u5411\u53ef\u9009]"],"\u3002"]]],["h2","\u5982\u4f55\u4f7f\u7528 (WEB \u7248)"],["pre",{lang:"html",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>check<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>'},["code",'<Icon type="check" />']],["h2","\u5982\u4f55\u4f7f\u7528 (RN \u7248)"],["blockquote",["p","RN \u7248\u672c\u7531\u4e8e Icon \u65e0\u6cd5\u505a\u7eaf UI\uff0c\u9700\u8981 native \u652f\u6301"]],["ul",["li",["p","\u4e0b\u8f7d ",["code","https://at.alicdn.com/t/font_r5u29ls31bgldi.ttf"]," \u91cd\u547d\u540d\u4e3a ",["code","anticon.ttf"]]],["li",["p","\u6253\u5f00 iOS \u9879\u76ee ",["code","info.plist"]," \u6587\u4ef6\uff0c\u6dfb\u52a0 ",["code","Fonts provided by application"],"\uff0c\u6307\u5b9a\u4e00\u4e2a item \u7684\u503c\u4e3a ",["code","anticon.ttf"],"\uff0c \u5c06 ",["code","anticon.ttf"]," \u62d6\u8fdb\u9879\u76ee\uff1b"]],["li",["p","Android \u9879\u76ee\u5c06 ",["code","anticon.ttf"]," \u653e\u5728 ",["code","android/app/src/main/assets/fonts/"]," \u76ee\u5f55\u4e0b;"]]],["p","\u4f7f\u7528\u65b9\u5f0f\uff1a"],["pre",{lang:"html",highlighted:'\u5185\u7f6e\u7684\u51e0\u4e2a\u56fe\u6807\uff1a <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>check<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>md<span class="token punctuation">"</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>red<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n\u81ea\u5b9a\u4e49\u56fe\u6807\uff1a&lt;Icon type={\'\\ue601\'} size={55} /> (\u5177\u4f53\u53c2\u770b demo)'},["code",'\u5185\u7f6e\u7684\u51e0\u4e2a\u56fe\u6807\uff1a <Icon type="check" size="md" color="red" />\n\u81ea\u5b9a\u4e49\u56fe\u6807\uff1a<Icon type={\'\\ue601\'} size={55} /> (\u5177\u4f53\u53c2\u770b demo)']],["blockquote",["p","\u6ce8\uff1a \u81ea\u5b9a\u4e49\u56fe\u6807\u9700\u8981\u5148\u67e5\u627e\u5bf9\u5e94\u56fe\u6807\u7684 unicode \u5b57\u7b26\uff0c\u53ef\u4ee5\u53bb ant.design \u5b98\u7f51\u7528 chrome \u8c03\u8bd5\u5de5\u5177\u67e5\u770b\u5bf9\u5e94\u56fe\u6807\u7684\u503c"]]],meta:{category:"Components",type:"Data Display",title:"Icon",subtitle:"\u56fe\u6807",filename:"components/icon/index.zh-CN.md"},api:["section",["h2","API"],["p","\u9002\u7528\u5e73\u53f0\uff1aWEB\u3001React-Native"],["table",["thead",["tr",["th","\u5c5e\u6027"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","type"],["td","\u5185\u7f6e icon \u540d\u79f0 (",["code","web"],") \u6216 unicode (",["code","RN"],")"],["td","String"]],["tr",["td","size"],["td","\u56fe\u6807\u5927\u5c0f"],["td","'xxs'/'xs'/'sm'/'md'/'lg' (",["code","RN/WEB"],")/ number(",["code","RN Only"],")"],["td",["code","md"]]],["tr",["td","color(",["code","RN Only"],")"],["td","\u56fe\u6807\u989c\u8272"],["td","Color"],["td","'#000'"]]]]]}}});