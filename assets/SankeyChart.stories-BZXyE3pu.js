"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{Cr as n,br as r,cr as i,xr as a,yr as o}from"./iframe-splidnB2.js";import{c as s,t as c}from"./charts-Dg5J96mY.js";var l=e({Default:()=>f,MultipleStages:()=>p,WithoutTitle:()=>m,__namedExportsOrder:()=>h,default:()=>d}),u,d,f,p,m,h,g=t((()=>{a(),r(),c(),u=i(),d={title:`Components/Visualization/SankeyChart`,component:s},f={render:function(e){let{t}=n(o),r=[t(`story.sankey_node_search`),t(`story.sankey_node_direct`),t(`story.sankey_node_newsletter`),t(`story.sankey_node_pricing`),t(`story.sankey_node_left`),t(`story.sankey_node_signup`)],[i,a,c,l,d,f]=r;return(0,u.jsx)(s,{...e,title:t(`story.sankey_title_traffic`),nodes:r,links:[{source:i,target:l,value:2840},{source:i,target:d,value:1160},{source:a,target:l,value:910},{source:a,target:d,value:430},{source:c,target:l,value:260},{source:l,target:f,value:1490},{source:l,target:d,value:2520}]})}},p={render:function(e){let{t}=n(o),r=[t(`story.sankey_node_ordered`),t(`story.sankey_node_picked`),t(`story.sankey_node_backorder`),t(`story.sankey_node_shipped`),t(`story.sankey_node_returned`),t(`story.sankey_node_kept`)],[i,a,c,l,d,f]=r;return(0,u.jsx)(s,{...e,title:t(`story.sankey_title_fulfilment`),height:340,nodes:r,links:[{source:i,target:a,value:1284},{source:i,target:c,value:147},{source:c,target:a,value:118},{source:a,target:l,value:1402},{source:l,target:d,value:96},{source:l,target:f,value:1306}]})}},m={render:function(e){let{t}=n(o),r=[t(`story.sankey_node_search`),t(`story.sankey_node_direct`),t(`story.sankey_node_pricing`),t(`story.sankey_node_signup`)],[i,a,c,l]=r;return(0,u.jsx)(s,{...e,"aria-label":t(`story.sankey_title_traffic`),height:220,nodes:r,links:[{source:i,target:c,value:2840},{source:a,target:c,value:910},{source:c,target:l,value:1490}]})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:"名前だけのとき（`title` を渡さない）。図には名前が要るので、\n見出しを別に持っている画面では `aria-label` で渡す。",...m.parameters?.docs?.description}}},h=[`Default`,`MultipleStages`,`WithoutTitle`]}));g();export{f as Default,p as MultipleStages,m as WithoutTitle,h as __namedExportsOrder,d as default,g as n,l as t};