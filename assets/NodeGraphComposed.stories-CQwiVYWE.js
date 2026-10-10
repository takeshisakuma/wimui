"use client";
import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Stack-CrCPoxQ1.js";import{n as u,t as d}from"./Button-DSrkNfg0.js";import{n as f,t as p}from"./Badge-B1Em0jvH.js";import{n as m,t as h}from"./Text-1X1ZsZfu.js";import{a as g,c as _,d as v,f as y,p as b,u as x}from"./style-CSNAvOJD.js";import{n as S,t as C}from"./NodeGraph-De9r-0Qd.js";var w,T,E;function D(){return(D=t((()=>{w=`_frame_mti92_1`,T=`_body_mti92_6`,E={frame:w,body:T}})))()}function O({data:e}){return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(g,{type:`target`,position:b.Left}),(0,N.jsxs)(l,{className:E.body,gap:`xs`,p:`sm`,align:`start`,children:[(0,N.jsx)(p,{intent:`warning`,size:`sm`,children:e.badge}),(0,N.jsx)(h,{size:`sm`,truncate:!0,children:e.title})]}),(0,N.jsx)(g,{type:`source`,position:b.Right})]})}function k({data:e}){return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(g,{type:`target`,position:b.Left}),(0,N.jsx)(l,{className:E.body,gap:`xs`,p:`sm`,align:`start`,children:(0,N.jsx)(h,{size:`sm`,children:e.body})}),(0,N.jsx)(g,{type:`source`,position:b.Right})]})}function A({data:e}){return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(g,{type:`target`,position:b.Left}),(0,N.jsxs)(l,{className:E.body,gap:`xs`,p:`sm`,align:`start`,children:[(0,N.jsx)(h,{size:`sm`,children:e.line}),(0,N.jsx)(d,{className:`nodrag nopan`,size:`sm`,type:`button`,children:e.call})]})]})}function j({initialNodes:e,initialEdges:t}){let[n,,r]=y(e),[i,a,o]=v(t),s=(0,M.useCallback)(e=>a(t=>_(e,t)),[a]);return(0,N.jsx)(`div`,{className:E.frame,children:(0,N.jsx)(C,{nodes:n,edges:i,onNodesChange:r,onEdgesChange:o,onConnect:s,nodeTypes:F})})}var M,N,P,F,I,L;function R(){return(R=t((()=>{M=e(n(),1),i(),a(),S(),f(),u(),c(),m(),x(),D(),N=s(),P={title:`Components/Visualization/NodeGraph`,component:C,parameters:{layout:`fullscreen`,docs:{description:{component:`Look-see: WIM 部品を nodeTypes でノードの中に置く。
T199 の Realistic 単体（Selected）とは別。カタログに残す。`}}}},F={counter:O,note:k,desk:A},I={args:{showControls:!0,showMiniMap:!1},render:function(){let{t:e,i18n:t}=r(o),n=t.language,i=(0,M.useMemo)(()=>[{id:`counter`,type:`counter`,position:{x:48,y:120},data:{title:e(`story.nodegraph_composed_counter`),badge:e(`story.nodegraph_composed_badge`)}},{id:`note`,type:`note`,position:{x:340,y:40},data:{body:e(`story.nodegraph_composed_note`)}},{id:`desk`,type:`desk`,position:{x:340,y:240},data:{line:e(`story.nodegraph_composed_desk`),call:e(`story.nodegraph_composed_call`)}}],[n]),a=(0,M.useMemo)(()=>[{id:`e-counter-note`,source:`counter`,target:`note`,label:e(`story.nodegraph_composed_edge_note`)},{id:`e-counter-desk`,source:`counter`,target:`desk`,label:e(`story.nodegraph_composed_edge_desk`)}],[n]);return(0,N.jsx)(j,{initialNodes:i,initialEdges:a},n)}},L=[`Composed`],I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    showControls: true,
    showMiniMap: false
  },
  render: function Render() {
    const {
      t,
      i18n
    } = useTranslation(ALL_NAMESPACES);
    const lang = i18n.language;
    const nodes: Node[] = useMemo(() => [{
      id: "counter",
      type: "counter",
      position: {
        x: 48,
        y: 120
      },
      data: {
        title: t("story.nodegraph_composed_counter"),
        badge: t("story.nodegraph_composed_badge")
      }
    }, {
      id: "note",
      type: "note",
      position: {
        x: 340,
        y: 40
      },
      data: {
        body: t("story.nodegraph_composed_note")
      }
    }, {
      id: "desk",
      type: "desk",
      position: {
        x: 340,
        y: 240
      },
      data: {
        line: t("story.nodegraph_composed_desk"),
        call: t("story.nodegraph_composed_call")
      }
    }],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [lang]);
    const edges: Edge[] = useMemo(() => [{
      id: "e-counter-note",
      source: "counter",
      target: "note",
      label: t("story.nodegraph_composed_edge_note")
    }, {
      id: "e-counter-desk",
      source: "counter",
      target: "desk",
      label: t("story.nodegraph_composed_edge_desk")
    }],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [lang]);
    return <Graph key={lang} initialNodes={nodes} initialEdges={edges} />;
  }
}`,...I.parameters?.docs?.source}}}})))()}R();export{I as Composed,L as __namedExportsOrder,P as default};