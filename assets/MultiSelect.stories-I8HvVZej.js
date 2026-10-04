"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./MultiSelect-BS_2fIzv.js";import{n as u,t as d}from"./playOpen-D3Z82aS-.js";var f=t({Default:()=>v,Disabled:()=>x,MultipleSelected:()=>b,Open:()=>C,WithClearButton:()=>S,WithLabel:()=>y,__namedExportsOrder:()=>w,default:()=>_}),p,m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{n(),i(),a(),c(),d(),p=s(),{expect:m,userEvent:h,within:g}=__STORYBOOK_MODULE_TEST__,_={title:`Components/Selection Controls/MultiSelect`,component:l,parameters:{layout:`centered`},args:{disabled:!1},tags:[],argTypes:{disabled:{control:`boolean`},onChange:{action:`changed`}}},v={render:function(e){let{t}=r(o),n=[{label:t(`story.multiselect_apple`),value:`apple`},{label:t(`story.multiselect_banana`),value:`banana`},{label:t(`story.multiselect_orange`),value:`orange`},{label:t(`story.multiselect_grape`),value:`grape`},{label:t(`story.select_opt4`),value:`disabled`,disabled:!0}];return(0,p.jsx)(l,{...e,options:n,placeholder:t(`story.multiselect_fruits`)})}},y={render:function(e){let{t}=r(o),n=[{label:t(`story.multiselect_apple`),value:`apple`},{label:t(`story.multiselect_banana`),value:`banana`},{label:t(`story.multiselect_orange`),value:`orange`},{label:t(`story.multiselect_grape`),value:`grape`},{label:t(`story.select_opt4`),value:`disabled`,disabled:!0}];return(0,p.jsx)(l,{...e,label:t(`story.multiselect_favorites`),options:n,placeholder:t(`story.select_placeholder`)})}},b={render:function(e){let{t}=r(o),n=[{label:t(`story.multiselect_apple`),value:`apple`},{label:t(`story.multiselect_banana`),value:`banana`},{label:t(`story.multiselect_orange`),value:`orange`},{label:t(`story.multiselect_grape`),value:`grape`},{label:t(`story.select_opt4`),value:`disabled`,disabled:!0}];return(0,p.jsx)(l,{...e,options:n,label:t(`story.multiselect_favorites`),defaultValue:[`apple`,`orange`]})}},x={render:function(e){let{t}=r(o),n=[{label:t(`story.multiselect_apple`),value:`apple`},{label:t(`story.multiselect_banana`),value:`banana`},{label:t(`story.multiselect_orange`),value:`orange`},{label:t(`story.multiselect_grape`),value:`grape`},{label:t(`story.select_opt4`),value:`disabled`,disabled:!0}];return(0,p.jsx)(l,{...e,options:n,label:t(`story.multiselect_favorites`),disabled:!0,defaultValue:[`banana`]})}},S={render:function(e){let{t}=r(o),n=[{label:t(`story.multiselect_apple`),value:`apple`},{label:t(`story.multiselect_banana`),value:`banana`},{label:t(`story.multiselect_orange`),value:`orange`},{label:t(`story.multiselect_grape`),value:`grape`},{label:t(`story.select_opt4`),value:`disabled`,disabled:!0}];return(0,p.jsx)(l,{...e,options:n,allowClear:!0,defaultValue:[`apple`,`banana`],placeholder:t(`story.multiselect_fruits`)})},play:async({canvasElement:e})=>{let t=g(e);await m(t.getByText(`Apple`)).toBeInTheDocument(),await m(t.getByText(`Banana`)).toBeInTheDocument();let n=t.getByRole(`button`,{name:/clear/i});await h.click(n),await m(t.queryByText(`Apple`)).not.toBeInTheDocument(),await m(t.queryByText(`Banana`)).not.toBeInTheDocument()}},C={...v,play:u},w=[`Default`,`WithLabel`,`MultipleSelected`,`Disabled`,`WithClearButton`,`Open`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
    return <MultiSelect {...args} label={t("story.multiselect_favorites")} options={options} placeholder={t("story.select_placeholder")} />;
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
    return <MultiSelect {...args} options={options} label={t("story.multiselect_favorites")} defaultValue={["apple", "orange"]} />;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  ...Default,
  play: openFirstPopup
}`,...C.parameters?.docs?.source}}}})))()}export{T as a,y as i,f as n,b as r,x as t};