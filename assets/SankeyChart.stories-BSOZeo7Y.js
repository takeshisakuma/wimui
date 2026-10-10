"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,t as r}from"./useTranslation-BDKsuBAo.js";import{n as i,t as a}from"./i18nConstants-BhvmnjLS.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{n as s,t as c}from"./SankeyChart-BDJczAea.js";var l=t({Default:()=>f,MultipleStages:()=>p,WithoutTitle:()=>m,__namedExportsOrder:()=>h,default:()=>d}),u,d,f,p,m,h;function g(){return(g=e((()=>{r(),i(),s(),u=o(),d={title:`Components/Visualization/SankeyChart`,component:c},f={render:function(e){let{t}=n(a),r=[t(`story.sankey_node_search`),t(`story.sankey_node_direct`),t(`story.sankey_node_newsletter`),t(`story.sankey_node_pricing`),t(`story.sankey_node_left`),t(`story.sankey_node_signup`)],[i,o,s,l,d,f]=r;return(0,u.jsx)(c,{...e,title:t(`story.sankey_title_traffic`),nodes:r,links:[{source:i,target:l,value:2840},{source:i,target:d,value:1160},{source:o,target:l,value:910},{source:o,target:d,value:430},{source:s,target:l,value:260},{source:l,target:f,value:1490},{source:l,target:d,value:2520}]})}},p={render:function(e){let{t}=n(a),r=[t(`story.sankey_node_ordered`),t(`story.sankey_node_picked`),t(`story.sankey_node_backorder`),t(`story.sankey_node_shipped`),t(`story.sankey_node_returned`),t(`story.sankey_node_kept`)],[i,o,s,l,d,f]=r;return(0,u.jsx)(c,{...e,title:t(`story.sankey_title_fulfilment`),height:340,nodes:r,links:[{source:i,target:o,value:1284},{source:i,target:s,value:147},{source:s,target:o,value:118},{source:o,target:l,value:1402},{source:l,target:d,value:96},{source:l,target:f,value:1306}]})}},m={render:function(e){let{t}=n(a),r=[t(`story.sankey_node_search`),t(`story.sankey_node_direct`),t(`story.sankey_node_pricing`),t(`story.sankey_node_signup`)],[i,o,s,l]=r;return(0,u.jsx)(c,{...e,"aria-label":t(`story.sankey_title_traffic`),height:220,nodes:r,links:[{source:i,target:s,value:2840},{source:o,target:s,value:910},{source:s,target:l,value:1490}]})}},h=[`Default`,`MultipleStages`,`WithoutTitle`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    // \`nodes\` の並び順が色の並び順なので、5 番目は CHART_COLORS の danger に当たる。
    // 「登録」をそこに置くと成功の出口が赤くなるため、離脱のほうを先に置く。
    const nodes = [t("story.sankey_node_search"), t("story.sankey_node_direct"), t("story.sankey_node_newsletter"), t("story.sankey_node_pricing"), t("story.sankey_node_left"), t("story.sankey_node_signup")];
    const [search, direct, newsletter, pricing, left, signedUp] = nodes;
    return <SankeyChart {...args} title={t("story.sankey_title_traffic")} nodes={nodes} links={[{
      source: search,
      target: pricing,
      value: 2840
    }, {
      source: search,
      target: left,
      value: 1160
    }, {
      source: direct,
      target: pricing,
      value: 910
    }, {
      source: direct,
      target: left,
      value: 430
    }, {
      source: newsletter,
      target: pricing,
      value: 260
    }, {
      source: pricing,
      target: signedUp,
      value: 1490
    }, {
      source: pricing,
      target: left,
      value: 2520
    }]} />;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const nodes = [t("story.sankey_node_ordered"), t("story.sankey_node_picked"), t("story.sankey_node_backorder"), t("story.sankey_node_shipped"), t("story.sankey_node_returned"), t("story.sankey_node_kept")];
    const [ordered, picked, backordered, shipped, returned, kept] = nodes;
    return <SankeyChart {...args} title={t("story.sankey_title_fulfilment")} height={340} nodes={nodes} links={[{
      source: ordered,
      target: picked,
      value: 1284
    }, {
      source: ordered,
      target: backordered,
      value: 147
    }, {
      source: backordered,
      target: picked,
      value: 118
    }, {
      source: picked,
      target: shipped,
      value: 1402
    }, {
      source: shipped,
      target: returned,
      value: 96
    }, {
      source: shipped,
      target: kept,
      value: 1306
    }]} />;
  }
}`,...p.parameters?.docs?.source},description:{story:`段が 3 つ以上あっても読めるか。**帯の太さがそのまま量**なので、
細い経路（返品）が太い経路（配送済み）と同じ声量にならない。`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const nodes = [t("story.sankey_node_search"), t("story.sankey_node_direct"), t("story.sankey_node_pricing"), t("story.sankey_node_signup")];
    const [search, direct, pricing, signedUp] = nodes;
    return <SankeyChart {...args} aria-label={t("story.sankey_title_traffic")} height={220} nodes={nodes} links={[{
      source: search,
      target: pricing,
      value: 2840
    }, {
      source: direct,
      target: pricing,
      value: 910
    }, {
      source: pricing,
      target: signedUp,
      value: 1490
    }]} />;
  }
}`,...m.parameters?.docs?.source},description:{story:"名前だけのとき（`title` を渡さない）。図には名前が要るので、\n見出しを別に持っている画面では `aria-label` で渡す。",...m.parameters?.docs?.description}}}})))()}export{g as n,l as t};