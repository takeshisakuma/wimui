"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-DiXuc7DI.js";import{t as c}from"./src-BE5jBQ9L.js";import{t as l}from"./VirtualList-DzIod9NH.js";var u=e({Default:()=>m,LargeDataset:()=>h,WithCustomItemHeight:()=>g,WithOverscan:()=>_,__namedExportsOrder:()=>v,default:()=>f}),d,f,p,m,h,g,_,v,y=t((()=>{n(),o(),i(),c(),d=a(),f={title:`Components/Data Structures/VirtualList`,component:l,argTypes:{itemHeight:{control:`number`},height:{control:`number`},overscan:{control:`number`}}},p=e=>Array.from({length:e},(e,t)=>({id:t+1,label:`Item ${t+1}`})),m={render:function(e){let{t}=r(s),n=p(1e3);return(0,d.jsx)(l,{...e,items:n,itemHeight:48,height:300,"aria-label":t(`story.virtuallist_aria_label`),renderItem:e=>(0,d.jsx)(`div`,{style:{padding:`0 16px`,width:`100%`},children:t(`story.virtuallist_item_label`,{id:e.id})})})}},h={render:function(e){let{t}=r(s),n=p(1e4);return(0,d.jsx)(l,{...e,items:n,itemHeight:40,height:400,"aria-label":t(`story.virtuallist_aria_label`),renderItem:e=>(0,d.jsx)(`div`,{style:{padding:`0 16px`,width:`100%`},children:t(`story.virtuallist_item_label`,{id:e.id})})})}},g={render:function(e){let{t}=r(s),n=p(500);return(0,d.jsx)(l,{...e,items:n,itemHeight:64,height:320,"aria-label":t(`story.virtuallist_aria_label`),renderItem:e=>(0,d.jsxs)(`div`,{style:{padding:`8px 16px`,width:`100%`,borderBottom:`1px solid var(--wim-color-border)`},children:[(0,d.jsx)(`div`,{style:{fontWeight:`bold`,color:`var(--wim-color-text-primary)`},children:t(`story.virtuallist_item_label`,{id:e.id})}),(0,d.jsx)(`div`,{style:{fontSize:`var(--wim-font-size-sm)`,color:`var(--wim-color-text-secondary)`},children:t(`story.virtuallist_item_sublabel`)})]})})}},_={render:function(e){let{t}=r(s),n=p(1e3);return(0,d.jsx)(l,{...e,items:n,itemHeight:48,height:300,overscan:10,"aria-label":t(`story.virtuallist_aria_label`),renderItem:e=>(0,d.jsx)(`div`,{style:{padding:`0 16px`,width:`100%`},children:t(`story.virtuallist_item_label`,{id:e.id})})})}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const items = generateItems(1000);
    return <VirtualList {...args} items={items} itemHeight={48} height={300} aria-label={t("story.virtuallist_aria_label")} renderItem={item => <div style={{
      padding: "0 16px",
      width: "100%"
    }}>
            {t("story.virtuallist_item_label", {
        id: item.id
      })}
          </div>} />;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const items = generateItems(10000);
    return <VirtualList {...args} items={items} itemHeight={40} height={400} aria-label={t("story.virtuallist_aria_label")} renderItem={item => <div style={{
      padding: "0 16px",
      width: "100%"
    }}>
            {t("story.virtuallist_item_label", {
        id: item.id
      })}
          </div>} />;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const items = generateItems(500);
    return <VirtualList {...args} items={items} itemHeight={64} height={320} aria-label={t("story.virtuallist_aria_label")} renderItem={item => <div style={{
      padding: "8px 16px",
      width: "100%",
      borderBottom: "1px solid var(--wim-color-border)"
    }}>
            <div style={{
        fontWeight: "bold",
        color: "var(--wim-color-text-primary)"
      }}>
              {t("story.virtuallist_item_label", {
          id: item.id
        })}
            </div>
            <div style={{
        fontSize: "var(--wim-font-size-sm)",
        color: "var(--wim-color-text-secondary)"
      }}>
              {t("story.virtuallist_item_sublabel")}
            </div>
          </div>} />;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const items = generateItems(1000);
    return <VirtualList {...args} items={items} itemHeight={48} height={300} overscan={10} aria-label={t("story.virtuallist_aria_label")} renderItem={item => <div style={{
      padding: "0 16px",
      width: "100%"
    }}>
            {t("story.virtuallist_item_label", {
        id: item.id
      })}
          </div>} />;
  }
}`,..._.parameters?.docs?.source}}},v=[`Default`,`LargeDataset`,`WithCustomItemHeight`,`WithOverscan`]}));y();export{m as Default,h as LargeDataset,g as WithCustomItemHeight,_ as WithOverscan,v as __namedExportsOrder,f as default,y as n,u as t};