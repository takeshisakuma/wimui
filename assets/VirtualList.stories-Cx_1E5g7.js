import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as j}from"./iframe-Ck4sjCvr.js";import{c as A}from"./index-BGo_XZDM.js";import{A as u}from"./i18nConstants-BpHxieg5.js";import{u as p}from"./useTranslation-CrQtSC0V.js";function a({items:n,itemHeight:e,height:t,renderItem:s,overscan:i=3,className:x,style:y,...f}){const[_,b]=j.useState(0),S=n.length*e,o=Math.max(0,Math.floor(_/e)-i),w=Math.min(n.length-1,Math.ceil((_+t)/e)+i),I=n.slice(o,w+1),L=o*e,T=g=>{b(g.target.scrollTop)};return r.jsx("div",{className:A("wim-virtual-list",x),style:{...y,height:t,overflowY:"auto"},onScroll:T,role:"list",...f,children:r.jsx("div",{className:"wim-virtual-list__inner",style:{height:S,position:"relative"},children:r.jsx("div",{className:"wim-virtual-list__viewport",style:{transform:`translateY(${L}px)`},children:I.map((g,v)=>r.jsx("div",{className:"wim-virtual-list__item",style:{height:e},role:"listitem","aria-setsize":n.length,"aria-posinset":o+v+1,children:s(g,o+v)},o+v))})})})}a.__docgenInfo={description:`大量のデータを効率よく表示するための仮想化リストコンポーネント。\r
表示領域内のアイテムのみをレンダリングすることで、パフォーマンスを最適化します。`,methods:[],displayName:"VirtualList",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:"レンダリング対象のアイテム配列。"},itemHeight:{required:!0,tsType:{name:"number"},description:"各アイテムの高さ（px）。"},height:{required:!0,tsType:{name:"number"},description:"リストコンテナの表示高さ（px）。"},renderItem:{required:!0,tsType:{name:"signature",type:"function",raw:"(item: T, index: number) => React.ReactNode",signature:{arguments:[{type:{name:"T"},name:"item"},{type:{name:"number"},name:"index"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:"各アイテムをレンダリングする関数。"},overscan:{required:!1,tsType:{name:"number"},description:"表示領域の外側に追加レンダリングするアイテム数。デフォルトは 3。",defaultValue:{value:"3",computed:!1}}}};const R={title:"Components/Data Structures/VirtualList",component:a,argTypes:{itemHeight:{control:"number"},height:{control:"number"},overscan:{control:"number"}}},h=n=>Array.from({length:n},(e,t)=>({id:t+1,label:`Item ${t+1}`})),l={render:function(e){const{t}=p(u),s=h(1e3);return r.jsx(a,{...e,items:s,itemHeight:48,height:300,renderItem:i=>r.jsx("div",{style:{padding:"0 16px",width:"100%"},children:t("story_virtuallist_item_label",{id:i.id})})})}},d={render:function(e){const{t}=p(u),s=h(1e4);return r.jsx(a,{...e,items:s,itemHeight:40,height:400,renderItem:i=>r.jsx("div",{style:{padding:"0 16px",width:"100%"},children:t("story_virtuallist_item_label",{id:i.id})})})}},m={render:function(e){const{t}=p(u),s=h(500);return r.jsx(a,{...e,items:s,itemHeight:64,height:320,renderItem:i=>r.jsxs("div",{style:{padding:"8px 16px",width:"100%",borderBottom:"1px solid var(--wim-color-border, #e5e7eb)"},children:[r.jsx("div",{style:{fontWeight:"bold"},children:t("story_virtuallist_item_label",{id:i.id})}),r.jsx("div",{style:{fontSize:"var(--font-size-small)",color:"var(--wim-color-text-muted, #6b7280)"},children:t("story_virtuallist_item_sublabel")})]})})}},c={render:function(e){const{t}=p(u),s=h(1e3);return r.jsx(a,{...e,items:s,itemHeight:48,height:300,overscan:10,renderItem:i=>r.jsx("div",{style:{padding:"0 16px",width:"100%"},children:t("story_virtuallist_item_label",{id:i.id})})})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const items = generateItems(1000);
    return <VirtualList {...args} items={items} itemHeight={48} height={300} renderItem={item => <div style={{
      padding: "0 16px",
      width: "100%"
    }}>\r
            {t("story_virtuallist_item_label", {
        id: item.id
      })}\r
          </div>} />;
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const items = generateItems(10000);
    return <VirtualList {...args} items={items} itemHeight={40} height={400} renderItem={item => <div style={{
      padding: "0 16px",
      width: "100%"
    }}>\r
            {t("story_virtuallist_item_label", {
        id: item.id
      })}\r
          </div>} />;
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const items = generateItems(500);
    return <VirtualList {...args} items={items} itemHeight={64} height={320} renderItem={item => <div style={{
      padding: "8px 16px",
      width: "100%",
      borderBottom: "1px solid var(--wim-color-border, #e5e7eb)"
    }}>\r
            <div style={{
        fontWeight: "bold"
      }}>\r
              {t("story_virtuallist_item_label", {
          id: item.id
        })}\r
            </div>\r
            <div style={{
        fontSize: "var(--font-size-small)",
        color: "var(--wim-color-text-muted, #6b7280)"
      }}>\r
              {t("story_virtuallist_item_sublabel")}\r
            </div>\r
          </div>} />;
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const items = generateItems(1000);
    return <VirtualList {...args} items={items} itemHeight={48} height={300} overscan={10} renderItem={item => <div style={{
      padding: "0 16px",
      width: "100%"
    }}>\r
            {t("story_virtuallist_item_label", {
        id: item.id
      })}\r
          </div>} />;
  }
}`,...c.parameters?.docs?.source}}};const N=["Default","LargeDataset","WithCustomItemHeight","WithOverscan"],W=Object.freeze(Object.defineProperty({__proto__:null,Default:l,LargeDataset:d,WithCustomItemHeight:m,WithOverscan:c,__namedExportsOrder:N,default:R},Symbol.toStringTag,{value:"Module"}));export{l as D,d as L,W as V,m as W,c as a};
