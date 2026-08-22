"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-F5Up1IQq.js";import{Or as c,t as l}from"./src-Ssuy8lr7.js";var u=e({Default:()=>g,Disabled:()=>y,MultipleSelected:()=>v,WithClearButton:()=>b,WithLabel:()=>_,__namedExportsOrder:()=>x,default:()=>h}),d,f,p,m,h,g,_,v,y,b,x,S=t((()=>{n(),o(),i(),l(),d=a(),{expect:f,userEvent:p,within:m}=__STORYBOOK_MODULE_TEST__,h={title:`Components/Selection Controls/MultiSelect`,component:c,parameters:{layout:`centered`},args:{disabled:!1},tags:[],argTypes:{disabled:{control:`boolean`},onChange:{action:`changed`}}},g={render:function(e){let{t}=r(s),n=[{label:t(`story.multiselect_apple`),value:`apple`},{label:t(`story.multiselect_banana`),value:`banana`},{label:t(`story.multiselect_orange`),value:`orange`},{label:t(`story.multiselect_grape`),value:`grape`},{label:t(`story.select_opt4`),value:`disabled`,disabled:!0}];return(0,d.jsx)(c,{...e,options:n,placeholder:t(`story.multiselect_fruits`)})}},_={render:function(e){let{t}=r(s),n=[{label:t(`story.multiselect_apple`),value:`apple`},{label:t(`story.multiselect_banana`),value:`banana`},{label:t(`story.multiselect_orange`),value:`orange`},{label:t(`story.multiselect_grape`),value:`grape`},{label:t(`story.select_opt4`),value:`disabled`,disabled:!0}];return(0,d.jsx)(c,{...e,label:t(`story.multiselect_favorites`),options:n,placeholder:t(`story.select_placeholder`)})}},v={render:function(e){let{t}=r(s),n=[{label:t(`story.multiselect_apple`),value:`apple`},{label:t(`story.multiselect_banana`),value:`banana`},{label:t(`story.multiselect_orange`),value:`orange`},{label:t(`story.multiselect_grape`),value:`grape`},{label:t(`story.select_opt4`),value:`disabled`,disabled:!0}];return(0,d.jsx)(c,{...e,options:n,label:t(`story.multiselect_favorites`),defaultValue:[`apple`,`orange`]})}},y={render:function(e){let{t}=r(s),n=[{label:t(`story.multiselect_apple`),value:`apple`},{label:t(`story.multiselect_banana`),value:`banana`},{label:t(`story.multiselect_orange`),value:`orange`},{label:t(`story.multiselect_grape`),value:`grape`},{label:t(`story.select_opt4`),value:`disabled`,disabled:!0}];return(0,d.jsx)(c,{...e,options:n,label:t(`story.multiselect_favorites`),disabled:!0,defaultValue:[`banana`]})}},b={render:function(e){let{t}=r(s),n=[{label:t(`story.multiselect_apple`),value:`apple`},{label:t(`story.multiselect_banana`),value:`banana`},{label:t(`story.multiselect_orange`),value:`orange`},{label:t(`story.multiselect_grape`),value:`grape`},{label:t(`story.select_opt4`),value:`disabled`,disabled:!0}];return(0,d.jsx)(c,{...e,options:n,allowClear:!0,defaultValue:[`apple`,`banana`],placeholder:t(`story.multiselect_fruits`)})},play:async({canvasElement:e})=>{let t=m(e);await f(t.getByText(`Apple`)).toBeInTheDocument(),await f(t.getByText(`Banana`)).toBeInTheDocument();let n=t.getByRole(`button`,{name:/clear/i});await p.click(n),await f(t.queryByText(`Apple`)).not.toBeInTheDocument(),await f(t.queryByText(`Banana`)).not.toBeInTheDocument()}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const options = [{
      label: t("story.multiselect_apple"),
      value: "apple"
    }, {
      label: t("story.multiselect_banana"),
      value: "banana"
    }, {
      label: t("story.multiselect_orange"),
      value: "orange"
    }, {
      label: t("story.multiselect_grape"),
      value: "grape"
    }, {
      label: t("story.select_opt4"),
      value: "disabled",
      disabled: true
    }];
    return <MultiSelect {...args} options={options} placeholder={t("story.multiselect_fruits")} />;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const options = [{
      label: t("story.multiselect_apple"),
      value: "apple"
    }, {
      label: t("story.multiselect_banana"),
      value: "banana"
    }, {
      label: t("story.multiselect_orange"),
      value: "orange"
    }, {
      label: t("story.multiselect_grape"),
      value: "grape"
    }, {
      label: t("story.select_opt4"),
      value: "disabled",
      disabled: true
    }];
    return <MultiSelect {...args} label={t("story.multiselect_favorites")} options={options} placeholder={t("story.select_placeholder")} />;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const options = [{
      label: t("story.multiselect_apple"),
      value: "apple"
    }, {
      label: t("story.multiselect_banana"),
      value: "banana"
    }, {
      label: t("story.multiselect_orange"),
      value: "orange"
    }, {
      label: t("story.multiselect_grape"),
      value: "grape"
    }, {
      label: t("story.select_opt4"),
      value: "disabled",
      disabled: true
    }];
    return <MultiSelect {...args} options={options} label={t("story.multiselect_favorites")} defaultValue={["apple", "orange"]} />;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const options = [{
      label: t("story.multiselect_apple"),
      value: "apple"
    }, {
      label: t("story.multiselect_banana"),
      value: "banana"
    }, {
      label: t("story.multiselect_orange"),
      value: "orange"
    }, {
      label: t("story.multiselect_grape"),
      value: "grape"
    }, {
      label: t("story.select_opt4"),
      value: "disabled",
      disabled: true
    }];
    return <MultiSelect {...args} options={options} label={t("story.multiselect_favorites")} disabled={true} defaultValue={["banana"]} />;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const options = [{
      label: t("story.multiselect_apple"),
      value: "apple"
    }, {
      label: t("story.multiselect_banana"),
      value: "banana"
    }, {
      label: t("story.multiselect_orange"),
      value: "orange"
    }, {
      label: t("story.multiselect_grape"),
      value: "grape"
    }, {
      label: t("story.select_opt4"),
      value: "disabled",
      disabled: true
    }];
    return <MultiSelect {...args} options={options} allowClear={true} defaultValue={["apple", "banana"]} placeholder={t("story.multiselect_fruits")} />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Check initial chips
    await expect(canvas.getByText("Apple")).toBeInTheDocument();
    await expect(canvas.getByText("Banana")).toBeInTheDocument();

    // Click clear button (this depends on how InputBase renders the clear button, usually it's a button with an icon)
    // Looking at InputBase, it's a button with "Clear selection" aria-label usually? 
    // Wait, let's check InputBase.tsx
    const clearButton = canvas.getByRole("button", {
      name: /clear/i
    });
    await userEvent.click(clearButton);

    // Check if chips are gone
    await expect(canvas.queryByText("Apple")).not.toBeInTheDocument();
    await expect(canvas.queryByText("Banana")).not.toBeInTheDocument();
  }
}`,...b.parameters?.docs?.source}}},x=[`Default`,`WithLabel`,`MultipleSelected`,`Disabled`,`WithClearButton`]}));S();export{g as Default,y as Disabled,v as MultipleSelected,b as WithClearButton,_ as WithLabel,x as __namedExportsOrder,h as default,S as n,u as t};