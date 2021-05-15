(this["webpackJsonpstyle-guide-generator"]=this["webpackJsonpstyle-guide-generator"]||[]).push([[0],[,,,,function(e){e.exports=JSON.parse('{"projectInfo":{"color":"#FF357B","company":"Bitcode","name":"Project Phoenix"},"style":{"backgrounds":[{"color":"#FFFFFF","type":"Primary"},{"color":"#8F8F8F","type":"Secondary"}],"buttons":[{"background":"#FDE814","borderColor":"#FDE814","borderRadius":30,"color":"#000000","fontWeight":"600","type":"Primary Button"},{"background":"#FC9603","borderColor":"#FC9603","borderRadius":30,"color":"#FFFFFF","fontWeight":"600","type":"Secondary Button"},{"background":"linear-gradient(90deg,#fc9603 0%,rgba(242, 39, 100, 1) 100%)","borderColor":"linear-gradient(90deg,#fc9603 0%,rgba(242, 39, 100, 1) 100%)","borderRadius":30,"color":"#FFFFFF","fontWeight":"600","type":"Gradient Button"},{"border":"none","background":"white","color":"#33ccff","fontWeight":"300","textDecoration":"underline","type":"Link Button"},{"border":"none","background":"white","color":"#FC9603","fontWeight":"300","type":"Text Button"}],"colors":[{"color":"#FDE814","type":"Primary"},{"color":"#FC9603","type":"Secondary"},{"color":"#F22764","type":"Tertiary"},{"color":"#ABABAB","type":"Disabled"},{"color":"#C0C4CC","type":"Divider"}],"typographies":[{"color":"#333333","fontSize":22,"fontWeight":"600","type":"Header Large"},{"color":"#333333","fontSize":18,"fontWeight":"600","type":"Header Small"},{"color":"#333333","fontSize":16,"fontWeight":"300","type":"Body Text"},{"color":"#ABABAB","fontSize":16,"fontWeight":"300","type":"Caption"}]}}')},,,,,,function(e,t,r){},,function(e,t,r){},function(e,t,r){"use strict";r.r(t);var o=r(2),n=r.n(o),c=r(5),i=r.n(c),l=(r(10),r(1)),s=r(0);function d(e){return Object(s.jsx)("div",{style:{borderTop:"solid",color:"#F5F5F5",borderTopWidth:1}})}function a(e){var t=e.children,r=e.style;return Object(s.jsx)("p",{style:Object(l.a)({margin:0},r),children:t})}function j(e){var t=e.children,r=e.style;return Object(s.jsx)("div",{style:Object(l.a)({display:"flex"},r),children:t})}function h(e){var t=e.projectStyleGuide,r=t.projectInfo,o=t.style;return Object(s.jsxs)(j,{style:m.container,children:[Object(s.jsx)(b,{projectInfo:r}),Object(s.jsx)(u,{style:o})]})}function b(e){var t=e.projectInfo,r=t.color,o=t.company,n=t.name,c=m.projectInfoHeader;return Object(s.jsxs)(j,{style:m.projectInfoContainer,children:[Object(s.jsx)(a,{style:Object(l.a)({color:r},c),children:n}),Object(s.jsx)(a,{style:Object(l.a)({color:r},c),children:o})]})}function u(e){var t=e.style,r=t.backgrounds,o=t.buttons,n=t.colors,c=t.typographies,i=m.styleContainer;return Object(s.jsxs)(j,{style:i,children:[Object(s.jsx)(f,{backgrounds:r}),Object(s.jsx)(y,{colors:n}),Object(s.jsx)(g,{buttons:o}),Object(s.jsx)(x,{typographies:c})]})}function f(e){var t=e.backgrounds.map((function(e){var t=e.color,r=e.type;return Object(s.jsxs)(j,{style:{marginRight:100},children:[Object(s.jsx)(j,{style:{backgroundColor:t,border:"solid",borderColor:"#BBBBBB",borderWidth:1,height:100,width:200}}),Object(s.jsxs)(j,{style:{flexDirection:"column",marginLeft:18},children:[Object(s.jsx)(a,{style:{fontWeight:600},children:r}),Object(s.jsx)(a,{style:{marginTop:8},children:t})]})]})}));return Object(s.jsx)(p,{header:"Backgrounds",children:t})}function g(e){var t=e.buttons.map((function(e){var t=e.background,r=e.borderColor,o=e.borderRadius,n=e.color,c=e.fontWeight,i=e.type;return Object(s.jsxs)(j,{style:{marginRight:38},children:[Object(s.jsx)("button",{style:Object(l.a)({background:t,border:"solid",borderColor:r,borderRadius:o,borderWidth:1,color:n,fontWeight:c,height:50,width:150},e),children:Object(s.jsx)(a,{style:{fontSize:16},children:i})}),Object(s.jsxs)(j,{style:{flexDirection:"column",marginLeft:18},children:[Object(s.jsx)(a,{style:{fontWeight:600},children:i}),Object(s.jsx)(O,{fieldName:"Background",children:t}),Object(s.jsx)(O,{fieldName:"Color",children:n}),Object(s.jsx)(O,{fieldName:"Border Color",children:r}),Object(s.jsx)(O,{fieldName:"Border Radius",children:o}),Object(s.jsx)(O,{fieldName:"Font Weight",children:c})]})]})}));return Object(s.jsx)(p,{header:"Buttons",children:F(t,3)})}function y(e){var t=e.colors.map((function(e){var t=e.color,r=e.type;return Object(s.jsxs)(j,{style:{marginRight:100},children:[Object(s.jsx)(j,{style:{backgroundColor:t,border:"solid",borderColor:"#BBBBBB",borderRadius:90,borderWidth:1,height:80,width:80}}),Object(s.jsxs)(j,{style:{flexDirection:"column",marginLeft:18},children:[Object(s.jsx)(a,{style:{fontWeight:600},children:r}),Object(s.jsx)(a,{style:{marginTop:8},children:t})]})]})}));return Object(s.jsx)(p,{header:"Colors",children:F(t,4)})}function x(e){var t=e.typographies.map((function(e){var t=e.color,r=e.fontSize,o=e.fontWeight,n=e.type;return Object(s.jsx)(j,{style:{marginBottom:20},children:Object(s.jsxs)(j,{style:{flexDirection:"column"},children:[Object(s.jsx)(a,{style:Object(l.a)({},e),children:n}),Object(s.jsxs)(j,{children:[Object(s.jsx)(O,{fieldName:"Color",children:t}),Object(s.jsx)(O,{fieldName:"Font Size",children:r}),Object(s.jsx)(O,{fieldName:"Font Weight",children:o})]})]})})}));return Object(s.jsx)(p,{header:"Typographies",children:Object(s.jsx)(j,{style:{flexDirection:"column"},children:t})})}function p(e){var t=e.children,r=e.header,o=m.styleSectionContainer,n=m.styleSectionHeader;return Object(s.jsxs)(j,{style:o,children:[Object(s.jsx)(a,{style:n,children:r}),Object(s.jsx)(d,{}),Object(s.jsx)(j,{style:{marginTop:20},children:t})]})}function O(e){var t=e.children,r=e.fieldName;return Object(s.jsxs)(j,{style:{marginRight:8},children:[Object(s.jsx)(a,{style:{fontWeight:600},children:"".concat(r,": ")}),Object(s.jsx)(a,{children:t})]})}function F(e,t){var r=[],o=[],n=function(e){r.push(Object(s.jsx)("tr",{children:e}))};return e.forEach((function(e,r){o.push(Object(s.jsx)("td",{children:e})),o.length===t&&(n(o),o=[])})),n(o),Object(s.jsx)("table",{style:{borderCollapse:"separate",borderSpacing:"0 1em"},children:r})}var m={container:{backgroundColor:"#EFEFEF",flexDirection:"column",height:"inherit",padding:38},projectInfoContainer:{backgroundColor:"#F5F5F5",flexDirection:"column",padding:50},projectInfoHeader:{fontSize:38,fontWeight:900},styleContainer:{backgroundColor:"#FFFFFF",flexDirection:"column",padding:50},styleSectionContainer:{flexDirection:"column",marginTop:30},styleSectionHeader:{color:"#767676",marginBottom:15,marginTop:15,fontSize:18,fontWeight:400}},B=r(4);r(12);function C(e){var t=function(e){switch(e){case"phoenix":default:return B}}(function(){var e=window.location.search,t=new URLSearchParams(e).get("project");return console.log("load proeject "+t),t}());return Object(s.jsx)("div",{style:v.container,children:Object(s.jsx)(h,{projectStyleGuide:t})})}var v={container:{height:"100%"}},S=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,14)).then((function(t){var r=t.getCLS,o=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;r(e),o(e),n(e),c(e),i(e)}))};i.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(C,{})}),document.getElementById("root")),S()}],[[13,1,2]]]);
//# sourceMappingURL=main.048235b2.chunk.js.map