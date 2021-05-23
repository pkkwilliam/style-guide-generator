(this["webpackJsonpstyle-guide-generator"]=this["webpackJsonpstyle-guide-generator"]||[]).push([[0],[,,,,function(e){e.exports=JSON.parse('{"projectInfo":{"color":"#FF357B","company":"Bitcode","name":"Project Phoenix"},"style":{"backgrounds":[{"color":"#FFFFFF","type":"Primary"},{"color":"#F8F8F8","type":"Secondary"}],"buttons":[{"background":"#FDE814","borderColor":"#FDE814","borderRadius":30,"color":"#000000","fontSize":16,"fontWeight":"400","type":"Primary Button"},{"background":"#FC9603","borderColor":"#FC9603","borderRadius":30,"color":"#FFFFFF","fontSize":16,"fontWeight":"600","type":"Secondary Button"},{"background":"linear-gradient(90deg,#fc9603 0%,rgba(242, 39, 100, 1) 100%)","borderColor":"linear-gradient(90deg,#fc9603 0%,rgba(242, 39, 100, 1) 100%)","borderRadius":30,"color":"#FFFFFF","fontSize":16,"fontWeight":"600","type":"Gradient Button"},{"border":"none","background":"white","color":"#1fb4ed","fontWeight":"300","fontSize":16,"textDecoration":"underline","type":"Link Button"},{"border":"none","background":"white","color":"#1fb4ed","fontSize":18,"fontWeight":"500","type":"Text Button"},{"border":"none","background":"white","color":"#1fb4ed","fontSize":16,"fontWeight":"300","type":"Text Button Small"},{"border":"none","background":"white","color":"#D9534F","fontSize":14,"fontWeight":"500","type":"Text Button - Danger"}],"colors":[{"color":"#FDE814","type":"Primary"},{"color":"#FC9603","type":"Secondary"},{"color":"#F22764","type":"Tertiary"},{"color":"#ABABAB","type":"Disabled"},{"color":"#C0C4CC","type":"Divider"},{"color":"#D9534F","type":"Danger"}],"typographies":[{"color":"#333333","fontSize":20,"fontWeight":"600","type":"Header"},{"color":"#333333","fontSize":16,"fontWeight":"600","type":"Header Small"},{"color":"#333333","fontSize":14,"fontWeight":"350","type":"Body Text"},{"color":"#ABABAB","fontSize":14,"fontWeight":"350","type":"Caption"},{"color":"#ABABAB","fontSize":12,"fontWeight":"350","type":"Caption Small"}]}}')},,,,,,function(e,t,r){},,function(e,t,r){},function(e,t,r){"use strict";r.r(t);var o=r(2),n=r.n(o),c=r(5),i=r.n(c),l=(r(10),r(1)),d=r(0);function s(e){return Object(d.jsx)("div",{style:{borderTop:"solid",color:"#F5F5F5",borderTopWidth:1}})}function a(e){var t=e.children,r=e.style;return Object(d.jsx)("p",{style:Object(l.a)({margin:0},r),children:t})}function j(e){var t=e.children,r=e.style;return Object(d.jsx)("div",{style:Object(l.a)({display:"flex"},r),children:t})}function b(e){var t=e.projectStyleGuide,r=t.projectInfo,o=t.style;return Object(d.jsxs)(j,{style:m.container,children:[Object(d.jsx)(h,{projectInfo:r}),Object(d.jsx)(u,{style:o})]})}function h(e){var t=e.projectInfo,r=t.color,o=t.company,n=t.name,c=m.projectInfoHeader;return Object(d.jsxs)(j,{style:m.projectInfoContainer,children:[Object(d.jsx)(a,{style:Object(l.a)({color:r},c),children:n}),Object(d.jsx)(a,{style:Object(l.a)({color:r},c),children:o})]})}function u(e){var t=e.style,r=t.backgrounds,o=t.buttons,n=t.colors,c=t.typographies,i=m.styleContainer;return Object(d.jsxs)(j,{style:i,children:[Object(d.jsx)(f,{backgrounds:r}),Object(d.jsx)(y,{colors:n}),Object(d.jsx)(g,{buttons:o}),Object(d.jsx)(p,{typographies:c})]})}function f(e){var t=e.backgrounds.map((function(e){var t=e.color,r=e.type;return Object(d.jsxs)(j,{style:{marginRight:100},children:[Object(d.jsx)(j,{style:{backgroundColor:t,border:"solid",borderColor:"#BBBBBB",borderWidth:1,height:100,width:200}}),Object(d.jsxs)(j,{style:{flexDirection:"column",marginLeft:18},children:[Object(d.jsx)(a,{style:{fontWeight:600},children:r}),Object(d.jsx)(a,{style:{marginTop:8},children:t})]})]})}));return Object(d.jsx)(x,{header:"Backgrounds",children:t})}function g(e){var t=e.buttons.map((function(e){var t=e.background,r=e.borderColor,o=e.borderRadius,n=e.color,c=e.fontSize,i=void 0===c?16:c,s=e.fontWeight,b=e.type;return Object(d.jsxs)(j,{style:{marginRight:38},children:[Object(d.jsx)("button",{style:Object(l.a)({background:t,border:"solid",borderColor:r,borderRadius:o,borderWidth:1,color:n,fontSize:i,fontWeight:s,height:50,width:150},e),children:Object(d.jsx)(a,{children:b})}),Object(d.jsxs)(j,{style:{flexDirection:"column",marginLeft:18},children:[Object(d.jsx)(a,{style:{fontWeight:600},children:b}),Object(d.jsx)(O,{fieldName:"Background",children:t}),Object(d.jsx)(O,{fieldName:"Color",children:n}),Object(d.jsx)(O,{fieldName:"Border Color",children:r}),Object(d.jsx)(O,{fieldName:"Border Radius",children:o}),Object(d.jsx)(O,{fieldName:"Font Size",children:i}),Object(d.jsx)(O,{fieldName:"Font Weight",children:s})]})]})}));return Object(d.jsx)(x,{header:"Buttons",children:F(t,3)})}function y(e){var t=e.colors.map((function(e){var t=e.color,r=e.type;return Object(d.jsxs)(j,{style:{marginRight:100},children:[Object(d.jsx)(j,{style:{backgroundColor:t,border:"solid",borderColor:"#BBBBBB",borderRadius:90,borderWidth:1,height:80,width:80}}),Object(d.jsxs)(j,{style:{flexDirection:"column",marginLeft:18},children:[Object(d.jsx)(a,{style:{fontWeight:600},children:r}),Object(d.jsx)(a,{style:{marginTop:8},children:t})]})]})}));return Object(d.jsx)(x,{header:"Colors",children:F(t,4)})}function p(e){var t=e.typographies.map((function(e){var t=e.color,r=e.fontSize,o=e.fontWeight,n=e.type;return Object(d.jsx)(j,{style:{marginBottom:20},children:Object(d.jsxs)(j,{style:{flexDirection:"column"},children:[Object(d.jsx)(a,{style:Object(l.a)({},e),children:n}),Object(d.jsxs)(j,{children:[Object(d.jsx)(O,{fieldName:"Color",children:t}),Object(d.jsx)(O,{fieldName:"Font Size",children:r}),Object(d.jsx)(O,{fieldName:"Font Weight",children:o})]})]})})}));return Object(d.jsx)(x,{header:"Typographies",children:Object(d.jsx)(j,{style:{flexDirection:"column"},children:t})})}function x(e){var t=e.children,r=e.header,o=m.styleSectionContainer,n=m.styleSectionHeader;return Object(d.jsxs)(j,{style:o,children:[Object(d.jsx)(a,{style:n,children:r}),Object(d.jsx)(s,{}),Object(d.jsx)(j,{style:{marginTop:20},children:t})]})}function O(e){var t=e.children,r=e.fieldName;return Object(d.jsxs)(j,{style:{marginRight:8},children:[Object(d.jsx)(a,{style:{fontWeight:600},children:"".concat(r,": ")}),Object(d.jsx)(a,{children:t})]})}function F(e,t){var r=[],o=[],n=function(e){r.push(Object(d.jsx)("tr",{children:e}))};return e.forEach((function(e,r){o.push(Object(d.jsx)("td",{children:e})),o.length===t&&(n(o),o=[])})),n(o),Object(d.jsx)("table",{style:{borderCollapse:"separate",borderSpacing:"0 1em"},children:r})}var m={container:{backgroundColor:"#EFEFEF",flexDirection:"column",height:"inherit",padding:38},projectInfoContainer:{backgroundColor:"#F5F5F5",flexDirection:"column",padding:50},projectInfoHeader:{fontSize:38,fontWeight:900},styleContainer:{backgroundColor:"#FFFFFF",flexDirection:"column",padding:50},styleSectionContainer:{flexDirection:"column",marginTop:30},styleSectionHeader:{color:"#767676",marginBottom:15,marginTop:15,fontSize:18,fontWeight:400}},B=r(4);r(12);function S(e){var t=function(e){switch(e){case"phoenix":default:return B}}(function(){var e=window.location.search,t=new URLSearchParams(e).get("project");return console.log("load proeject "+t),t}());return Object(d.jsx)("div",{style:C.container,children:Object(d.jsx)(b,{projectStyleGuide:t})})}var C={container:{height:"100%"}},v=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,14)).then((function(t){var r=t.getCLS,o=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;r(e),o(e),n(e),c(e),i(e)}))};i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(S,{})}),document.getElementById("root")),v()}],[[13,1,2]]]);
//# sourceMappingURL=main.20200501.chunk.js.map