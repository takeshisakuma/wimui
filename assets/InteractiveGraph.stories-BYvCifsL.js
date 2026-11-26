"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-sJBDdmOt.js";import{t as r}from"./react-BGJ90fIb.js";import{n as i,t as a}from"./useTranslation-CpMdOj2B.js";import{n as o,t as s}from"./i18nConstants-YD8z3mm4.js";import{t as c}from"./jsx-runtime-MKhVqBIO.js";import{t as l}from"./classnames-DQoS6hca.js";import{a as u,c as d,d as f,n as p,o as m,u as h}from"./style-BQ-R6Wxy.js";var g,_,v,y;function b(){return(b=t((()=>{g=`_root_eo42r_4`,_=`_minimap_eo42r_25`,v=`_controls_eo42r_38`,y={root:g,minimap:_,controls:v}})))()}var x,S,C,w,T;function E(){return(E=t((()=>{x=e(r(),1),d(),S=e(l(),1),b(),C=c(),w=({nodes:e,edges:t,height:n=500,width:r=`100%`,className:i,showGrid:a=!0,showMiniMap:o=!0,showControls:s=!0})=>{let c=(0,x.useMemo)(()=>({height:n,width:r}),[n,r]);return(0,C.jsx)(`div`,{className:(0,S.default)(`wim-interactive-graph`,y.root,i),style:c,children:(0,C.jsxs)(m,{nodes:e,edges:t,fitView:!0,children:[a&&(0,C.jsx)(u,{}),o&&(0,C.jsx)(p,{className:y.minimap}),s&&(0,C.jsx)(f,{className:y.controls})]})})},T=e=>(0,C.jsx)(h,{children:(0,C.jsx)(w,{...e})}),T.displayName=`InteractiveGraph`,T.__docgenInfo={description:``,methods:[],displayName:`InteractiveGraph`,props:{nodes:{required:!0,tsType:{name:`Array`,elements:[{name:`Node`}],raw:`Node[]`},description:`Initial nodes`},edges:{required:!0,tsType:{name:`Array`,elements:[{name:`Edge`}],raw:`Edge[]`},description:`Initial edges`},height:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:`Height of the container`},width:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:`Width of the container`},className:{required:!1,tsType:{name:`string`},description:`Additional CSS class`},showGrid:{required:!1,tsType:{name:`boolean`},description:`Whether to show the background grid`},showMiniMap:{required:!1,tsType:{name:`boolean`},description:`Whether to show the minimap`},showControls:{required:!1,tsType:{name:`boolean`},description:`Whether to show controls`}}}})))()}var D=n({Default:()=>A,__namedExportsOrder:()=>j,default:()=>k}),O,k,A,j;function M(){return(M=t((()=>{r(),E(),a(),o(),O=c(),k={title:`Components/AI/InteractiveGraph`,component:T,parameters:{layout:`fullscreen`}},A={render:function(){let{t:e}=i(s),t=[{id:`1`,position:{x:200,y:0},data:{label:e(`story.interactive_graph_node1`)}},{id:`2`,position:{x:200,y:150},data:{label:e(`story.interactive_graph_node2`)}},{id:`3`,position:{x:200,y:300},data:{label:e(`story.interactive_graph_node3`)}}];return(0,O.jsx)(`div`,{style:{width:`100%`,height:`500px`,padding:`20px`,boxSizing:`border-box`},children:(0,O.jsx)(`div`,{style:{width:`100%`,height:`100%`,border:`1px solid var(--wim-color-border)`,borderRadius:`8px`,overflow:`hidden`},children:(0,O.jsx)(T,{nodes:t,edges:[{id:`e1-2`,source:`1`,target:`2`,animated:!0},{id:`e2-3`,source:`2`,target:`3`,animated:!0}],height:`100%`})})})}},j=[`Default`],A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}}})))()}export{D as n,M as r,A as t};