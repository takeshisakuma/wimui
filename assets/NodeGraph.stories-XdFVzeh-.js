"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,br as a,cr as o,xr as s,yr as c}from"./iframe-DiXuc7DI.js";import{t as l}from"./classnames-DyhsJ24V.js";import{a as u,c as d,d as f,i as p,l as m,n as h,r as g,s as _,t as v,u as y}from"./style-C5wMjoFA.js";var b,x,S,C,w,T,E=t((()=>{b=`_root_1epwu_2`,x=`_flow_1epwu_23`,S=`_background_1epwu_28`,C=`_controls_1epwu_33`,w=`_miniMap_1epwu_43`,T={root:b,flow:x,background:S,controls:C,miniMap:w}})),D,O,k,A,j=t((()=>{D=n(r(),1),O=n(l(),1),m(),v(),E(),k=o(),A=D.forwardRef(({nodes:e,edges:t,onNodesChange:n,onEdgesChange:r,onConnect:i,nodeTypes:a,edgeTypes:o,nodesDraggable:s=!0,nodesConnectable:c=!0,deleteKeyCode:l=`Backspace`,showMiniMap:f=!1,showControls:m=!0,backgroundVariant:_=g.Dots,fitView:v=!0,fitViewOptions:y,defaultEdgeOptions:b,className:x,"aria-label":S=`Node graph`,...C},w)=>(0,k.jsx)(`div`,{ref:w,className:(0,O.default)(`wim-node-graph`,T.root,x),role:`region`,"aria-label":S,...C,children:(0,k.jsxs)(d,{nodes:e,edges:t,onNodesChange:n,onEdgesChange:r,onConnect:i,nodeTypes:a,edgeTypes:o,nodesDraggable:s,nodesConnectable:c,deleteKeyCode:l,fitView:v,fitViewOptions:y,defaultEdgeOptions:b,className:T.flow,children:[(0,k.jsx)(h,{variant:_,className:T.background}),m&&(0,k.jsx)(p,{className:T.controls}),f&&(0,k.jsx)(u,{className:T.miniMap})]})})),A.displayName=`NodeGraph`,A.__docgenInfo={description:`NodeGraph — a controlled wrapper around React Flow.

The consumer manages nodes/edges state via useNodesState / useEdgesState
hooks and passes them as props alongside their change handlers.

Composition Contract:
- Managed by: App consumption; ReactFlow manages its own portal for edge labels
- Scroll lock: No`,methods:[],displayName:`NodeGraph`,props:{nodes:{required:!0,tsType:{name:`Array`,elements:[{name:`Node`}],raw:`Node[]`},description:`Controlled nodes`},edges:{required:!0,tsType:{name:`Array`,elements:[{name:`Edge`}],raw:`Edge[]`},description:`Controlled edges`},onNodesChange:{required:!0,tsType:{name:`OnNodesChange`},description:`Called when nodes change (position, selection, removal)`},onEdgesChange:{required:!0,tsType:{name:`OnEdgesChange`},description:`Called when edges change`},onConnect:{required:!1,tsType:{name:`OnConnect`},description:`Called when a new connection is made`},nodeTypes:{required:!1,tsType:{name:`NodeTypes`},description:`Custom node type renderers`},edgeTypes:{required:!1,tsType:{name:`EdgeTypes`},description:`Custom edge type renderers`},nodesDraggable:{required:!1,tsType:{name:`boolean`},description:`Whether nodes can be dragged`,defaultValue:{value:`true`,computed:!1}},nodesConnectable:{required:!1,tsType:{name:`boolean`},description:`Whether nodes can be connected`,defaultValue:{value:`true`,computed:!1}},deleteKeyCode:{required:!1,tsType:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]},description:`Whether elements can be deleted with Backspace/Delete`,defaultValue:{value:`"Backspace"`,computed:!1}},showMiniMap:{required:!1,tsType:{name:`boolean`},description:`Show the minimap panel`,defaultValue:{value:`false`,computed:!1}},showControls:{required:!1,tsType:{name:`boolean`},description:`Show zoom/fit controls`,defaultValue:{value:`true`,computed:!1}},backgroundVariant:{required:!1,tsType:{name:`BackgroundVariant`},description:`Background grid style`,defaultValue:{value:`BackgroundVariant.Dots`,computed:!0}},fitView:{required:!1,tsType:{name:`boolean`},description:`Fit view options on mount`,defaultValue:{value:`true`,computed:!1}},fitViewOptions:{required:!1,tsType:{name:`FitViewOptions`},description:`Options for the initial fit-view behavior`},defaultEdgeOptions:{required:!1,tsType:{name:`DefaultEdgeOptions`},description:`Default options applied to new edges`},className:{required:!1,tsType:{name:`string`},description:`Additional CSS class`},"aria-label":{required:!1,tsType:{name:`string`},description:`Accessible label for the graph region`,defaultValue:{value:`"Node graph"`,computed:!1}}}}})),M=e({Default:()=>R,ReadOnly:()=>B,WithMiniMap:()=>z,__namedExportsOrder:()=>V,default:()=>I});function N({initialNodes:e,initialEdges:t,...n}){let[r,,i]=f(e),[a,o,s]=y(t);return(0,F.jsx)(A,{nodes:r,edges:a,onNodesChange:i,onEdgesChange:s,onConnect:(0,P.useCallback)(e=>{o(t=>_(e,t))},[o]),...n})}var P,F,I,L,R,z,B,V,H=t((()=>{P=n(r(),1),s(),a(),j(),m(),F=o(),I={title:`Components/Visualization/NodeGraph`,component:A,parameters:{layout:`fullscreen`},argTypes:{showMiniMap:{control:`boolean`},showControls:{control:`boolean`},nodesDraggable:{control:`boolean`},nodesConnectable:{control:`boolean`},backgroundVariant:{control:`radio`,options:[g.Dots,g.Lines,g.Cross]}}},L=()=>{let{t:e,i18n:t}=i(c),n=t.language;return{nodes:(0,P.useMemo)(()=>[{id:`1`,position:{x:100,y:100},data:{label:e(`story.nodegraph_label_start`)},type:`input`},{id:`2`,position:{x:300,y:100},data:{label:e(`story.nodegraph_label_process`)}},{id:`3`,position:{x:500,y:100},data:{label:e(`story.nodegraph_label_end`)},type:`output`},{id:`4`,position:{x:300,y:250},data:{label:e(`story.nodegraph_label_error`)}}],[n]),edges:(0,P.useMemo)(()=>[{id:`e1-2`,source:`1`,target:`2`,label:e(`story.nodegraph_edge_trigger`)},{id:`e2-3`,source:`2`,target:`3`,label:e(`story.nodegraph_edge_success`)},{id:`e2-4`,source:`2`,target:`4`,label:e(`story.nodegraph_edge_error`)}],[n]),lang:n}},R={render:function(e){let{nodes:t,edges:n,lang:r}=L();return(0,F.jsx)(`div`,{style:{width:`100%`,height:`500px`},children:(0,F.jsx)(N,{initialNodes:t,initialEdges:n,...e},r)})},args:{showControls:!0,showMiniMap:!1}},z={render:function(e){let{nodes:t,edges:n,lang:r}=L();return(0,F.jsx)(`div`,{style:{width:`100%`,height:`500px`},children:(0,F.jsx)(N,{initialNodes:t,initialEdges:n,...e},r)})},args:{showMiniMap:!0,showControls:!0}},B={render:function(e){let{nodes:t,edges:n,lang:r}=L();return(0,F.jsx)(`div`,{style:{width:`100%`,height:`500px`},children:(0,F.jsx)(N,{initialNodes:t,initialEdges:n,...e},r)})},args:{nodesDraggable:!1,nodesConnectable:!1,deleteKeyCode:null,showControls:!0}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V=[`Default`,`WithMiniMap`,`ReadOnly`]}));H();export{R as Default,B as ReadOnly,z as WithMiniMap,V as __namedExportsOrder,I as default,H as n,M as t};