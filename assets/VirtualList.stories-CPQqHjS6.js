import{j as t}from"./jsx-runtime-u17CrQMm.js";import{V as l}from"./VirtualList-BIkNzIWv.js";import{A as c}from"./iframe-Dh8ZUv-I.js";import{u}from"./useTranslation-CdCoNx2v.js";const h={title:"Components/Data Structures/VirtualList",component:l,argTypes:{itemHeight:{control:"number"},height:{control:"number"},overscan:{control:"number"}}},g=s=>Array.from({length:s},(r,e)=>({id:e+1,label:`Item ${e+1}`})),o={render:function(r){const{t:e}=u(c),n=g(1e3);return t.jsx(l,{...r,items:n,itemHeight:48,height:300,renderItem:i=>t.jsx("div",{style:{padding:"0 16px",width:"100%"},children:e("story.virtuallist_item_label",{id:i.id})})})}},a={render:function(r){const{t:e}=u(c),n=g(1e4);return t.jsx(l,{...r,items:n,itemHeight:40,height:400,renderItem:i=>t.jsx("div",{style:{padding:"0 16px",width:"100%"},children:e("story.virtuallist_item_label",{id:i.id})})})}},d={render:function(r){const{t:e}=u(c),n=g(500);return t.jsx(l,{...r,items:n,itemHeight:64,height:320,renderItem:i=>t.jsxs("div",{style:{padding:"8px 16px",width:"100%",borderBottom:"1px solid var(--wim-color-border, #e5e7eb)"},children:[t.jsx("div",{style:{fontWeight:"bold"},children:e("story.virtuallist_item_label",{id:i.id})}),t.jsx("div",{style:{fontSize:"var(--wim-font-size-sm)",color:"var(--wim-color-text-muted, #6b7280)"},children:e("story.virtuallist_item_sublabel")})]})})}},m={render:function(r){const{t:e}=u(c),n=g(1e3);return t.jsx(l,{...r,items:n,itemHeight:48,height:300,overscan:10,renderItem:i=>t.jsx("div",{style:{padding:"0 16px",width:"100%"},children:e("story.virtuallist_item_label",{id:i.id})})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const items = generateItems(1000);
    return <VirtualList {...args} items={items} itemHeight={48} height={300} renderItem={item => <div style={{
      padding: "0 16px",
      width: "100%"
    }}>
            {t("story.virtuallist_item_label", {
        id: item.id
      })}
          </div>} />;
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const items = generateItems(10000);
    return <VirtualList {...args} items={items} itemHeight={40} height={400} renderItem={item => <div style={{
      padding: "0 16px",
      width: "100%"
    }}>
            {t("story.virtuallist_item_label", {
        id: item.id
      })}
          </div>} />;
  }
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const items = generateItems(500);
    return <VirtualList {...args} items={items} itemHeight={64} height={320} renderItem={item => <div style={{
      padding: "8px 16px",
      width: "100%",
      borderBottom: "1px solid var(--wim-color-border, #e5e7eb)"
    }}>
            <div style={{
        fontWeight: "bold"
      }}>
              {t("story.virtuallist_item_label", {
          id: item.id
        })}
            </div>
            <div style={{
        fontSize: "var(--wim-font-size-sm)",
        color: "var(--wim-color-text-muted, #6b7280)"
      }}>
              {t("story.virtuallist_item_sublabel")}
            </div>
          </div>} />;
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const items = generateItems(1000);
    return <VirtualList {...args} items={items} itemHeight={48} height={300} overscan={10} renderItem={item => <div style={{
      padding: "0 16px",
      width: "100%"
    }}>
            {t("story.virtuallist_item_label", {
        id: item.id
      })}
          </div>} />;
  }
}`,...m.parameters?.docs?.source}}};const p=["Default","LargeDataset","WithCustomItemHeight","WithOverscan"],y=Object.freeze(Object.defineProperty({__proto__:null,Default:o,LargeDataset:a,WithCustomItemHeight:d,WithOverscan:m,__namedExportsOrder:p,default:h},Symbol.toStringTag,{value:"Module"}));export{o as D,a as L,y as V,d as W,m as a};
