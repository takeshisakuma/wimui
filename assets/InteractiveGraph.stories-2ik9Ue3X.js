"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./useTranslation-BDKsuBAo.js";import{n as o,t as s}from"./i18nConstants-BhvmnjLS.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{Mn as l,On as u,jn as d,kn as f}from"./iframe-Dbq8JC-l.js";import{t as p}from"./classnames-D09xBJOL.js";import{n as m,t as h}from"./theme-BDicCiWb.js";import{n as g,t as _}from"./presets-BpfcQuoU.js";import{i as v,l as y,n as b,o as x,s as S,u as C}from"./style-CSNAvOJD.js";function w(e=void 0){if(typeof document>`u`)return`none`;let t=(e??document.documentElement).getAttribute?.(T);return t&&E.has(t)?t:`none`}var T,E;function D(){return(D=t((()=>{g(),T=`data-wim-preset`,E=new Set(_.map(e=>e.name))})))()}function O(){return(0,k.useContext)(A)||{theme:h(),density:u(),locale:d(),preset:w()}}var k,A;function j(){return(j=t((()=>{k=e(r(),1),f(),l(),D(),m(),c(),A=(0,k.createContext)(null)})))()}var M,N,P,F;function I(){return(I=t((()=>{M=`_root_79hvk_4`,N=`_minimap_79hvk_21`,P=`_controls_79hvk_33`,F={root:M,minimap:N,controls:P}})))()}function L(){let{theme:e}=O(),[t,n]=(0,R.useState)(()=>h());return(0,R.useEffect)(()=>{let e=document.documentElement,t=()=>n(h());t();let r=new MutationObserver(t);return r.observe(e,{attributes:!0,attributeFilter:[`data-theme`]}),()=>r.disconnect()},[e]),t===`system`?e:t}var R,z,B,V,H;function U(){return(U=t((()=>{R=e(r(),1),C(),z=e(p(),1),j(),m(),I(),B=c(),V=({nodes:e,edges:t,height:n=500,width:r=`100%`,className:i,showGrid:a=!0,showMiniMap:o=!0,showControls:s=!0})=>{let c=L(),l=(0,R.useMemo)(()=>({height:n,width:r}),[n,r]);return(0,B.jsx)(`div`,{className:(0,z.default)(`wim-interactive-graph`,F.root,i),style:l,children:(0,B.jsxs)(y,{nodes:e,edges:t,fitView:!0,colorMode:c,children:[a&&(0,B.jsx)(b,{}),o&&(0,B.jsx)(x,{className:F.minimap}),s&&(0,B.jsx)(v,{className:F.controls})]})})},H=e=>(0,B.jsx)(S,{children:(0,B.jsx)(V,{...e})}),H.displayName=`InteractiveGraph`,H.__docgenInfo={description:``,methods:[],displayName:`InteractiveGraph`,props:{nodes:{required:!0,tsType:{name:`Array`,elements:[{name:`Node`}],raw:`Node[]`},description:`Initial nodes`},edges:{required:!0,tsType:{name:`Array`,elements:[{name:`Edge`}],raw:`Edge[]`},description:`Initial edges`},height:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:`Height of the container`},width:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:`Width of the container`},className:{required:!1,tsType:{name:`string`},description:`Additional CSS class`},showGrid:{required:!1,tsType:{name:`boolean`},description:`Whether to show the background grid`},showMiniMap:{required:!1,tsType:{name:`boolean`},description:`Whether to show the minimap`},showControls:{required:!1,tsType:{name:`boolean`},description:`Whether to show controls`}}}})))()}var W=n({Default:()=>q,__namedExportsOrder:()=>J,default:()=>K}),G,K,q,J;function Y(){return(Y=t((()=>{r(),U(),a(),o(),G=c(),K={title:`Components/AI/InteractiveGraph`,component:H,parameters:{layout:`fullscreen`}},q={render:function(){let{t:e}=i(s),t=[{id:`1`,position:{x:200,y:0},data:{label:e(`story.interactive_graph_node1`)}},{id:`2`,position:{x:200,y:150},data:{label:e(`story.interactive_graph_node2`)}},{id:`3`,position:{x:200,y:300},data:{label:e(`story.interactive_graph_node3`)}}];return(0,G.jsx)(`div`,{style:{width:`100%`,height:`500px`,padding:`20px`,boxSizing:`border-box`},children:(0,G.jsx)(`div`,{style:{width:`100%`,height:`100%`,border:`1px solid var(--wim-color-border)`,borderRadius:`8px`,overflow:`hidden`},children:(0,G.jsx)(H,{nodes:t,edges:[{id:`e1-2`,source:`1`,target:`2`,animated:!0},{id:`e2-3`,source:`2`,target:`3`,animated:!0}],height:`100%`})})})}},J=[`Default`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}}})))()}export{W as n,Y as r,q as t};