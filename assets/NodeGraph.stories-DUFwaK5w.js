"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./useTranslation-BDKsuBAo.js";import{n as o,t as s}from"./i18nConstants-BhvmnjLS.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{c as l,d as u,f as d,r as f,u as p}from"./style-CSNAvOJD.js";import{n as m,t as h}from"./NodeGraph-of1Iu_PI.js";var g=n({Default:()=>S,ReadOnly:()=>w,Selected:()=>T,WithMiniMap:()=>C,__namedExportsOrder:()=>E,default:()=>b});function _({initialNodes:e,initialEdges:t,...n}){let[r,,i]=d(e),[a,o,s]=u(t),c=(0,v.useCallback)(e=>{o(t=>l(e,t))},[o]);return(0,y.jsx)(h,{nodes:r,edges:a,onNodesChange:i,onEdgesChange:s,onConnect:c,...n})}var v,y,b,x,S,C,w,T,E;function D(){return(D=t((()=>{v=e(r(),1),a(),o(),m(),p(),y=c(),b={title:`Components/Visualization/NodeGraph`,component:h,parameters:{layout:`fullscreen`},argTypes:{showMiniMap:{control:`boolean`},showControls:{control:`boolean`},nodesDraggable:{control:`boolean`},nodesConnectable:{control:`boolean`},deleteKeyCode:{control:!1},backgroundVariant:{control:`radio`,options:[f.Dots,f.Lines,f.Cross]}}},x=()=>{let{t:e,i18n:t}=i(s),n=t.language;return{nodes:(0,v.useMemo)(()=>[{id:`1`,position:{x:100,y:100},data:{label:e(`story.nodegraph_label_start`)},type:`input`},{id:`2`,position:{x:300,y:100},data:{label:e(`story.nodegraph_label_process`)}},{id:`3`,position:{x:500,y:100},data:{label:e(`story.nodegraph_label_end`)},type:`output`},{id:`4`,position:{x:300,y:250},data:{label:e(`story.nodegraph_label_error`)}}],[n]),edges:(0,v.useMemo)(()=>[{id:`e1-2`,source:`1`,target:`2`,label:e(`story.nodegraph_edge_trigger`)},{id:`e2-3`,source:`2`,target:`3`,label:e(`story.nodegraph_edge_success`)},{id:`e2-4`,source:`2`,target:`4`,label:e(`story.nodegraph_edge_error`)}],[n]),lang:n}},S={render:function(e){let{nodes:t,edges:n,lang:r}=x();return(0,y.jsx)(`div`,{style:{width:`100%`,height:`500px`},children:(0,y.jsx)(_,{initialNodes:t,initialEdges:n,...e},r)})},args:{showControls:!0,showMiniMap:!1}},C={render:function(e){let{nodes:t,edges:n,lang:r}=x();return(0,y.jsx)(`div`,{style:{width:`100%`,height:`500px`},children:(0,y.jsx)(_,{initialNodes:t,initialEdges:n,...e},r)})},args:{showMiniMap:!0,showControls:!0}},w={render:function(e){let{nodes:t,edges:n,lang:r}=x();return(0,y.jsx)(`div`,{style:{width:`100%`,height:`500px`},children:(0,y.jsx)(_,{initialNodes:t,initialEdges:n,...e},r)})},args:{nodesDraggable:!1,nodesConnectable:!1,deleteKeyCode:null,showControls:!0}},T={render:function(e){let{nodes:t,edges:n,lang:r}=x(),i=t.map((e,t)=>t===1?{...e,selected:!0}:e);return(0,y.jsx)(`div`,{style:{width:`100%`,height:`500px`},children:(0,y.jsx)(_,{initialNodes:i,initialEdges:n,...e},r)})},args:{showControls:!0,showMiniMap:!1}},E=[`Default`,`WithMiniMap`,`ReadOnly`,`Selected`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      nodes,
      edges,
      lang
    } = useInitialData();
    return <div style={{
      width: "100%",
      height: "500px"
    }}>
        <NodeGraphWithState key={lang} initialNodes={nodes} initialEdges={edges} {...args} />
      </div>;
  },
  args: {
    showControls: true,
    showMiniMap: false
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      nodes,
      edges,
      lang
    } = useInitialData();
    return <div style={{
      width: "100%",
      height: "500px"
    }}>
        <NodeGraphWithState key={lang} initialNodes={nodes} initialEdges={edges} {...args} />
      </div>;
  },
  args: {
    showMiniMap: true,
    showControls: true
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      nodes,
      edges,
      lang
    } = useInitialData();
    return <div style={{
      width: "100%",
      height: "500px"
    }}>
        <NodeGraphWithState key={lang} initialNodes={nodes} initialEdges={edges} {...args} />
      </div>;
  },
  args: {
    nodesDraggable: false,
    nodesConnectable: false,
    deleteKeyCode: null,
    showControls: true
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      nodes,
      edges,
      lang
    } = useInitialData();
    const selectedNodes = nodes.map((node, index) => index === 1 ? {
      ...node,
      selected: true
    } : node);
    return <div style={{
      width: "100%",
      height: "500px"
    }}>
        <NodeGraphWithState key={lang} initialNodes={selectedNodes} initialEdges={edges} {...args} />
      </div>;
  },
  args: {
    showControls: true,
    showMiniMap: false
  }
}`,...T.parameters?.docs?.source},description:{story:`T199: キャンバス上の追加と、選択があると押せる削除。`,...T.parameters?.docs?.description}}}})))()}export{g as n,D as r,S as t};