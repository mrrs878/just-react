(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{361:function(e,t,r){"use strict";r.r(t);var v=r(43),_=Object(v.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("在上一节中我们了解了"),r("code",[e._v("React")]),e._v("的理念，简单概括就是"),r("strong",[e._v("速度快，响应自然")]),e._v("。")]),e._v(" "),r("p",[r("code",[e._v("React")]),e._v("从v15升级到v16后重构了整个架构。本节我们聊聊v15，看看他为什么不能满足"),r("strong",[e._v("速度快，响应自然")]),e._v("的理念，以至于被重构。")]),e._v(" "),r("h2",{attrs:{id:"react15架构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#react15架构"}},[e._v("#")]),e._v(" React15架构")]),e._v(" "),r("p",[e._v("React15架构可以分为两层：")]),e._v(" "),r("ul",[r("li",[e._v("Reconciler（协调器）—— 负责找出变化的组件")]),e._v(" "),r("li",[e._v("Renderer（渲染器）—— 负责将变化的组件渲染到页面上")])]),e._v(" "),r("h3",{attrs:{id:"reconciler（协调器）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#reconciler（协调器）"}},[e._v("#")]),e._v(" Reconciler（协调器）")]),e._v(" "),r("p",[e._v("我们知道，在"),r("code",[e._v("React")]),e._v("中可以通过"),r("code",[e._v("this.setState")]),e._v("、"),r("code",[e._v("this.forceUpdate")]),e._v("、"),r("code",[e._v("ReactDOM.render")]),e._v("等API触发更新。")]),e._v(" "),r("p",[e._v("每当有更新发生时，"),r("strong",[e._v("Reconciler")]),e._v("会做如下工作：")]),e._v(" "),r("ul",[r("li",[e._v("调用函数组件、或class组件的"),r("code",[e._v("render")]),e._v("方法，将返回的JSX转化为虚拟DOM")]),e._v(" "),r("li",[e._v("将虚拟DOM和上次更新时的虚拟DOM对比")]),e._v(" "),r("li",[e._v("通过对比找出本次更新中变化的虚拟DOM")]),e._v(" "),r("li",[e._v("通知"),r("strong",[e._v("Renderer")]),e._v("将变化的虚拟DOM渲染到页面上")])]),e._v(" "),r("blockquote",[r("p",[e._v("你可以在"),r("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/codebase-overview.html#reconcilers",target:"_blank",rel:"noopener noreferrer"}},[e._v("这里"),r("OutboundLink")],1),e._v("看到"),r("code",[e._v("React")]),e._v("官方对"),r("strong",[e._v("Reconciler")]),e._v("的解释")])]),e._v(" "),r("h3",{attrs:{id:"renderer（渲染器）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#renderer（渲染器）"}},[e._v("#")]),e._v(" Renderer（渲染器）")]),e._v(" "),r("p",[e._v("由于"),r("code",[e._v("React")]),e._v("支持跨平台，所以不同平台有不同的"),r("strong",[e._v("Renderer")]),e._v("。我们前端最熟悉的是负责在浏览器环境渲染的"),r("strong",[e._v("Renderer")]),e._v(" —— "),r("a",{attrs:{href:"https://www.npmjs.com/package/react-dom",target:"_blank",rel:"noopener noreferrer"}},[e._v("ReactDOM"),r("OutboundLink")],1),e._v("。")]),e._v(" "),r("p",[e._v("除此之外，还有：")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.npmjs.com/package/react-native",target:"_blank",rel:"noopener noreferrer"}},[e._v("ReactNative"),r("OutboundLink")],1),e._v("渲染器，渲染App原生组件")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.npmjs.com/package/react-test-Renderer",target:"_blank",rel:"noopener noreferrer"}},[e._v("ReactTest"),r("OutboundLink")],1),e._v("渲染器，渲染出纯Js对象用于测试")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.npmjs.com/package/react-art",target:"_blank",rel:"noopener noreferrer"}},[e._v("ReactArt"),r("OutboundLink")],1),e._v("渲染器，渲染到Canvas, SVG 或 VML (IE8)")])]),e._v(" "),r("p",[e._v("在每次更新发生时，"),r("strong",[e._v("Renderer")]),e._v("接到"),r("strong",[e._v("Reconciler")]),e._v("通知，将变化的组件渲染在当前宿主环境。")]),e._v(" "),r("blockquote",[r("p",[e._v("你可以在"),r("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/codebase-overview.html#renderers",target:"_blank",rel:"noopener noreferrer"}},[e._v("这里"),r("OutboundLink")],1),e._v("看到"),r("code",[e._v("React")]),e._v("官方对"),r("strong",[e._v("Renderer")]),e._v("的解释")])]),e._v(" "),r("h2",{attrs:{id:"react15架构的缺点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#react15架构的缺点"}},[e._v("#")]),e._v(" React15架构的缺点")]),e._v(" "),r("p",[e._v("在"),r("strong",[e._v("Reconciler")]),e._v("中，"),r("code",[e._v("mount")]),e._v("的组件会调用"),r("a",{attrs:{href:"https://github.com/facebook/react/blob/15-stable/src/renderers/dom/shared/ReactDOMComponent.js#L498",target:"_blank",rel:"noopener noreferrer"}},[e._v("mountComponent"),r("OutboundLink")],1),e._v("，"),r("code",[e._v("update")]),e._v("的组件会调用"),r("a",{attrs:{href:"https://github.com/facebook/react/blob/15-stable/src/renderers/dom/shared/ReactDOMComponent.js#L877",target:"_blank",rel:"noopener noreferrer"}},[e._v("updateComponent"),r("OutboundLink")],1),e._v("。这两个方法都会递归更新子组件。")]),e._v(" "),r("h3",{attrs:{id:"递归更新的缺点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#递归更新的缺点"}},[e._v("#")]),e._v(" 递归更新的缺点")]),e._v(" "),r("p",[e._v("主流的浏览器刷新频率为60Hz，即每（1000ms / 60Hz）16.6ms浏览器刷新一次。我们知道，JS可以操作DOM，"),r("code",[e._v("GUI渲染线程")]),e._v("与"),r("code",[e._v("JS线程")]),e._v("是互斥的。所以"),r("strong",[e._v("JS脚本执行")]),e._v("和"),r("strong",[e._v("浏览器布局、绘制")]),e._v("不能同时执行。")]),e._v(" "),r("p",[e._v("在每16.6ms时间内，需要完成如下工作：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("JS脚本执行 -----  样式布局 ----- 样式绘制\n")])])]),r("p",[e._v("当JS执行时间过长，超出了16.6ms，这次刷新就没有时间执行"),r("strong",[e._v("样式布局")]),e._v("和"),r("strong",[e._v("样式绘制")]),e._v("了。")]),e._v(" "),r("p",[e._v("对于用户在输入框输入内容这个行为来说，就体现为按下了键盘按键但是页面上不实时显示输入。")]),e._v(" "),r("p",[e._v("对于"),r("code",[e._v("React")]),e._v("的更新来说，由于递归执行，所以更新一旦开始，中途就无法中断。当层级很深时，递归更新时间超过了16ms，用户交互就会卡顿。")]),e._v(" "),r("p",[e._v("在上一节中，我们已经提出了解决办法——用"),r("strong",[e._v("可中断的异步更新")]),e._v("代替"),r("strong",[e._v("同步的更新")]),e._v("。那么React15的架构支持异步更新么？让我们看一个例子：")]),e._v(" "),r("details",{staticClass:"custom-block details"},[r("summary",[e._v("乘法小Demo")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://code.h5jun.com/jaluv/1/edit?html,js,output",target:"_blank",rel:"noopener noreferrer"}},[e._v("Demo"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("初始化时"),r("code",[e._v("state.count = 1")]),e._v("，每次点击按钮"),r("code",[e._v("state.count++")])]),e._v(" "),r("p",[e._v("列表中3个元素的值分别为1，2，3乘以"),r("code",[e._v("state.count")]),e._v("的结果")])]),e._v(" "),r("p",[e._v("我用红色标注了更新的步骤。\n"),r("img",{attrs:{src:e.$withBase("/img/v15.png"),alt:"更新流程"}})]),e._v(" "),r("p",[e._v("我们可以看到，"),r("strong",[e._v("Reconciler")]),e._v("和"),r("strong",[e._v("Renderer")]),e._v("是交替工作的，当第一个"),r("code",[e._v("li")]),e._v("在页面上已经变化后，第二个"),r("code",[e._v("li")]),e._v("再进入"),r("strong",[e._v("Reconciler")]),e._v("。")]),e._v(" "),r("p",[e._v("由于整个过程都是同步的，所以在用户看来所有DOM是同时更新的。")]),e._v(" "),r("p",[e._v("让我们看看在React15架构中如果中途中断更新会怎么样？\n"),r("img",{attrs:{src:e.$withBase("/img/dist.png"),alt:"中断更新流程"}})]),e._v(" "),r("p",[e._v("当第一个"),r("code",[e._v("li")]),e._v("完成更新时中断更新，即步骤3完成后中断更新，此时后面的步骤都还未执行。")]),e._v(" "),r("p",[e._v("用户本来期望"),r("code",[e._v("123")]),e._v("变为"),r("code",[e._v("246")]),e._v("。实际却看见更新不完全的DOM！（即"),r("code",[e._v("223")]),e._v("）")]),e._v(" "),r("p",[e._v("基于这个原因，"),r("code",[e._v("React")]),e._v("决定重写整个架构。")])])}),[],!1,null,null,null);t.default=_.exports}}]);