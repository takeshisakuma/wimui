"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Button-DrO46Brn.js";import{n as u,t as d}from"./ButtonGroup--DsEPyiU.js";var f=t({JoinedGroup:()=>v,JoinedGroupPrimary:()=>y,Justify:()=>S,LargeGroup:()=>h,MediumGroup:()=>g,PriorityOverride:()=>b,SmallGroup:()=>_,Variants:()=>x,__namedExportsOrder:()=>C,default:()=>m}),p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{n(),i(),a(),c(),u(),p=s(),m={title:`Components/Buttons/ButtonGroup`,component:d,parameters:{layout:`centered`},argTypes:{gap:{control:`text`},joined:{control:`boolean`},variant:{control:`select`,options:[`solid`,`outline`,`ghost`]},justify:{control:`select`,options:[`start`,`center`,`end`,`stretch`]}}},h={render:function(e){let{t}=r(o);return(0,p.jsxs)(d,{...e,children:[(0,p.jsx)(l,{size:`lg`,variant:`solid`,children:t(`story.button_click_me`)}),(0,p.jsx)(l,{size:`lg`,variant:`outline`,children:t(`story.button_click_me`)}),(0,p.jsx)(l,{size:`lg`,variant:`ghost`,children:t(`story.button_click_me`)})]})}},g={render:function(e){let{t}=r(o);return(0,p.jsxs)(d,{...e,children:[(0,p.jsx)(l,{size:`md`,variant:`solid`,children:t(`story.button_click_me`)}),(0,p.jsx)(l,{size:`md`,variant:`outline`,children:t(`story.button_click_me`)}),(0,p.jsx)(l,{size:`md`,variant:`ghost`,children:t(`story.button_click_me`)})]})}},_={render:function(e){let{t}=r(o);return(0,p.jsxs)(d,{...e,children:[(0,p.jsx)(l,{size:`sm`,variant:`solid`,children:t(`story.button_click_me`)}),(0,p.jsx)(l,{size:`sm`,variant:`outline`,children:t(`story.button_click_me`)}),(0,p.jsx)(l,{size:`sm`,variant:`ghost`,children:t(`story.button_click_me`)})]})}},v={args:{joined:!0},render:function(e){let{t}=r(o);return(0,p.jsxs)(d,{...e,children:[(0,p.jsx)(l,{size:`md`,variant:`outline`,children:t(`story.button_click_me`)}),(0,p.jsx)(l,{size:`md`,variant:`outline`,children:t(`story.button_click_me`)}),(0,p.jsx)(l,{size:`md`,variant:`outline`,children:t(`story.button_click_me`)})]})}},y={args:{joined:!0,variant:`solid`},render:function(e){let{t}=r(o);return(0,p.jsxs)(d,{...e,children:[(0,p.jsx)(l,{size:`md`,variant:`outline`,children:t(`story.button_click_me`)}),(0,p.jsx)(l,{size:`md`,variant:`outline`,children:t(`story.button_click_me`)}),(0,p.jsx)(l,{size:`md`,variant:`outline`,children:t(`story.button_click_me`)})]})}},b={args:{variant:`ghost`,gap:`10px`},render:function(e){let{t}=r(o);return(0,p.jsxs)(d,{...e,children:[(0,p.jsx)(l,{size:`md`,variant:`solid`,children:t(`story.buttongroup_primary`)}),(0,p.jsx)(l,{size:`md`,variant:`outline`,children:t(`story.buttongroup_secondary`)}),(0,p.jsx)(l,{size:`md`,variant:`ghost`,children:t(`story.buttongroup_tertiary`)})]})}},x={render:function(e){let{t}=r(o);return(0,p.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--wim-spacing-md)`,alignItems:`flex-start`},children:[`solid`,`outline`,`ghost`].map(n=>(0,p.jsxs)(d,{...e,variant:n,children:[(0,p.jsx)(l,{size:`md`,children:t(`story.button_click_me`)}),(0,p.jsx)(l,{size:`md`,children:t(`story.button_click_me`)}),(0,p.jsx)(l,{size:`md`,children:t(`story.button_click_me`)})]},n))})}},S={parameters:{layout:`padded`},render:function(e){let{t}=r(o);return(0,p.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--wim-spacing-lg)`},children:[`start`,`center`,`end`,`stretch`].map(n=>(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--wim-spacing-xs)`},children:[(0,p.jsx)(`code`,{children:`justify="${n}"`}),(0,p.jsxs)(d,{...e,justify:n,children:[(0,p.jsx)(l,{size:`md`,variant:`outline`,children:t(`action.back`)}),(0,p.jsx)(l,{size:`md`,variant:`solid`,children:t(`action.next`)})]})]},n))})}},C=[`LargeGroup`,`MediumGroup`,`SmallGroup`,`JoinedGroup`,`JoinedGroupPrimary`,`PriorityOverride`,`Variants`,`Justify`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <ButtonGroup {...args}>
        <Button size="lg" variant="solid">{t("story.button_click_me")}</Button>
        <Button size="lg" variant="outline">{t("story.button_click_me")}</Button>
        <Button size="lg" variant="ghost">{t("story.button_click_me")}</Button>
      </ButtonGroup>;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <ButtonGroup {...args}>
        <Button size="md" variant="solid">{t("story.button_click_me")}</Button>
        <Button size="md" variant="outline">{t("story.button_click_me")}</Button>
        <Button size="md" variant="ghost">{t("story.button_click_me")}</Button>
      </ButtonGroup>;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <ButtonGroup {...args}>
        <Button size="sm" variant="solid">{t("story.button_click_me")}</Button>
        <Button size="sm" variant="outline">{t("story.button_click_me")}</Button>
        <Button size="sm" variant="ghost">{t("story.button_click_me")}</Button>
      </ButtonGroup>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    joined: true
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <ButtonGroup {...args}>
        <Button size="md" variant="outline">{t("story.button_click_me")}</Button>
        <Button size="md" variant="outline">{t("story.button_click_me")}</Button>
        <Button size="md" variant="outline">{t("story.button_click_me")}</Button>
      </ButtonGroup>;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    joined: true,
    variant: "solid"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <ButtonGroup {...args}>
        <Button size="md" variant="outline">{t("story.button_click_me")}</Button>
        <Button size="md" variant="outline">{t("story.button_click_me")}</Button>
        <Button size="md" variant="outline">{t("story.button_click_me")}</Button>
      </ButtonGroup>;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "ghost",
    gap: "10px"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <ButtonGroup {...args}>
        <Button size="md" variant="solid">{t("story.buttongroup_primary")}</Button>
        <Button size="md" variant="outline">{t("story.buttongroup_secondary")}</Button>
        <Button size="md" variant="ghost">{t("story.buttongroup_tertiary")}</Button>
      </ButtonGroup>;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--wim-spacing-md)",
      alignItems: "flex-start"
    }}>
        {(["solid", "outline", "ghost"] as const).map(variant => <ButtonGroup key={variant} {...args} variant={variant}>
            <Button size="md">{t("story.button_click_me")}</Button>
            <Button size="md">{t("story.button_click_me")}</Button>
            <Button size="md">{t("story.button_click_me")}</Button>
          </ButtonGroup>)}
      </div>;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "padded"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--wim-spacing-lg)"
    }}>
        {(["start", "center", "end", "stretch"] as const).map(justify => <div key={justify} style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--wim-spacing-xs)"
      }}>
            <code>{\`justify="\${justify}"\`}</code>
            <ButtonGroup {...args} justify={justify}>
              <Button size="md" variant="outline">{t("action.back")}</Button>
              <Button size="md" variant="solid">{t("action.next")}</Button>
            </ButtonGroup>
          </div>)}
      </div>;
  }
}`,...S.parameters?.docs?.source},description:{story:`揃えの 4 値を同じ幅の行に並べる（T286）。既定の start は内容の幅で左に寄り、
center / end / stretch は行を丸ごと取って寄せる（stretch はボタンを均等に伸ばす）。`,...S.parameters?.docs?.description}}}})))()}export{h as a,x as c,S as i,w as l,v as n,g as o,y as r,_ as s,f as t};