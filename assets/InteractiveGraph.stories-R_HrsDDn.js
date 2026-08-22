"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,br as a,cr as o,xr as s,yr as c}from"./iframe-F5Up1IQq.js";import{t as l}from"./classnames-DyhsJ24V.js";import{n as u,t as d}from"./theme-zO_lqtRm.js";import{n as f,t as p}from"./WimProvider-DCEsFAD5.js";import{i as m,l as h,n as g,o as _,s as v,t as y,u as b}from"./style-BvEMnXRc.js";var x,S,C,w,T=t((()=>{x=`_root_1e18y_3`,S=`_minimap_1e18y_84`,C=`_controls_1e18y_96`,w={root:x,minimap:S,controls:C}}));function E(){let{theme:e}=f(),[t,n]=(0,D.useState)(()=>d());return(0,D.useEffect)(()=>{let e=document.documentElement,t=()=>n(d());t();let r=new MutationObserver(t);return r.observe(e,{attributes:!0,attributeFilter:[`data-theme`]}),()=>r.disconnect()},[e]),t===`system`?e:t}var D,O,k,A,j,M=t((()=>{D=n(r(),1),b(),y(),O=n(l(),1),p(),u(),T(),k=o(),A=({nodes:e,edges:t,height:n=500,width:r=`100%`,className:i,showGrid:a=!0,showMiniMap:o=!0,showControls:s=!0})=>{let c=E(),l=(0,D.useMemo)(()=>({height:n,width:r}),[n,r]);return(0,k.jsx)(`div`,{className:(0,O.default)(`wim-interactive-graph`,w.root,i),style:l,children:(0,k.jsxs)(h,{nodes:e,edges:t,fitView:!0,colorMode:c,children:[a&&(0,k.jsx)(g,{}),o&&(0,k.jsx)(_,{className:w.minimap}),s&&(0,k.jsx)(m,{className:w.controls})]})})},j=e=>(0,k.jsx)(v,{children:(0,k.jsx)(A,{...e})}),j.displayName=`InteractiveGraph`,j.__docgenInfo={description:``,methods:[],displayName:`InteractiveGraph`,props:{nodes:{required:!0,tsType:{name:`Array`,elements:[{name:`Node`}],raw:`Node[]`},description:`Initial nodes`},edges:{required:!0,tsType:{name:`Array`,elements:[{name:`Edge`}],raw:`Edge[]`},description:`Initial edges`},height:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:`Height of the container`},width:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:`Width of the container`},className:{required:!1,tsType:{name:`string`},description:`Additional CSS class`},showGrid:{required:!1,tsType:{name:`boolean`},description:`Whether to show the background grid`},showMiniMap:{required:!1,tsType:{name:`boolean`},description:`Whether to show the minimap`},showControls:{required:!1,tsType:{name:`boolean`},description:`Whether to show controls`}}}})),N=e({Default:()=>I,__namedExportsOrder:()=>L,default:()=>F}),P,F,I,L,R=t((()=>{r(),M(),s(),a(),P=o(),F={title:`Components/AI/InteractiveGraph`,component:j,parameters:{layout:`fullscreen`}},I={render:function(){let{t:e}=i(c);return(0,P.jsx)(`div`,{style:{width:`100%`,height:`500px`,padding:`20px`,boxSizing:`border-box`},children:(0,P.jsx)(`div`,{style:{width:`100%`,height:`100%`,border:`1px solid var(--wim-color-border)`,borderRadius:`8px`,overflow:`hidden`},children:(0,P.jsx)(j,{nodes:[{id:`1`,position:{x:200,y:0},data:{label:e(`story.interactive_graph_node1`)}},{id:`2`,position:{x:200,y:150},data:{label:e(`story.interactive_graph_node2`)}},{id:`3`,position:{x:200,y:300},data:{label:e(`story.interactive_graph_node3`)}}],edges:[{id:`e1-2`,source:`1`,target:`2`,animated:!0},{id:`e2-3`,source:`2`,target:`3`,animated:!0}],height:`100%`})})})}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const graphNodes = [{
      id: "1",
      position: {
        x: 200,
        y: 0
      },
      data: {
        label: t("story.interactive_graph_node1")
      }
    }, {
      id: "2",
      position: {
        x: 200,
        y: 150
      },
      data: {
        label: t("story.interactive_graph_node2")
      }
    }, {
      id: "3",
      position: {
        x: 200,
        y: 300
      },
      data: {
        label: t("story.interactive_graph_node3")
      }
    }];
    const graphEdges = [{
      id: "e1-2",
      source: "1",
      target: "2",
      animated: true
    }, {
      id: "e2-3",
      source: "2",
      target: "3",
      animated: true
    }];
    return <div style={{
      width: "100%",
      height: "500px",
      padding: "20px",
      boxSizing: "border-box"
    }}>
        <div style={{
        width: "100%",
        height: "100%",
        border: "1px solid var(--wim-color-border)",
        borderRadius: "8px",
        overflow: "hidden"
      }}>
          <InteractiveGraph nodes={graphNodes} edges={graphEdges} height="100%" />
        </div>
      </div>;
  }
}`,...I.parameters?.docs?.source}}},L=[`Default`]}));R();export{I as Default,L as __namedExportsOrder,F as default,R as n,N as t};