"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Icon-TGLZuM2d.js";import{n as u,t as d}from"./Button-DSrkNfg0.js";import{a as f,i as p,n as m,r as h,t as g}from"./Dropdown-WIX4HipB.js";var _=t({AlignmentRight:()=>S,Basic:()=>b,WithIcons:()=>x,__namedExportsOrder:()=>C,default:()=>y}),v,y,b,x,S,C;function w(){return(w=e((()=>{n(),i(),a(),u(),f(),c(),v=s(),y={title:`Components/Overlays/Dropdown`,component:g,parameters:{layout:`centered`}},b={render:function(e){let{t}=r(o);return(0,v.jsxs)(g,{...e,children:[(0,v.jsx)(p,{asChild:!0,children:(0,v.jsx)(d,{children:t(`story.dropdown_open`)})}),(0,v.jsxs)(h,{children:[(0,v.jsx)(m,{onClick:()=>console.log(`Profile clicked`),children:t(`story.dropdown_profile`)}),(0,v.jsx)(m,{onClick:()=>console.log(`Settings clicked`),children:t(`story.dropdown_settings`)}),(0,v.jsx)(m,{onClick:()=>console.log(`Logout clicked`),children:t(`story.dropdown_logout`)})]})]})}},x={render:function(e){let{t}=r(o);return(0,v.jsxs)(g,{...e,children:[(0,v.jsx)(p,{asChild:!0,children:(0,v.jsx)(d,{variant:`outline`,children:t(`story.dropdown_options`)})}),(0,v.jsxs)(h,{children:[(0,v.jsxs)(m,{children:[(0,v.jsx)(l,{name:`CheckIcon`,size:`sm`}),` `,t(`story.dropdown_edit`)]}),(0,v.jsxs)(m,{children:[(0,v.jsx)(l,{name:`CopyIcon`,size:`sm`}),` `,t(`story.dropdown_duplicate`)]}),(0,v.jsxs)(m,{disabled:!0,children:[(0,v.jsx)(l,{name:`CloseIcon`,size:`sm`}),` `,t(`story.dropdown_delete`)]})]})]})}},S={render:function(e){let{t}=r(o);return(0,v.jsx)(`div`,{style:{paddingLeft:`200px`},children:(0,v.jsxs)(g,{...e,defaultOpen:!0,children:[(0,v.jsx)(p,{asChild:!0,children:(0,v.jsx)(d,{children:t(`story.dropdown_right_aligned`)})}),(0,v.jsxs)(h,{align:`right`,children:[(0,v.jsx)(m,{children:t(`story.dropdown_rename`)}),(0,v.jsx)(m,{children:t(`story.dropdown_copy_link`)}),(0,v.jsx)(m,{children:t(`story.dropdown_archive`)})]})]})})}},C=[`Basic`,`WithIcons`,`AlignmentRight`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Dropdown {...args}>
        <DropdownTrigger asChild>
          <Button>{t("story.dropdown_open")}</Button>
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem onClick={() => console.log("Profile clicked")}>
            {t("story.dropdown_profile")}
          </DropdownItem>
          <DropdownItem onClick={() => console.log("Settings clicked")}>
            {t("story.dropdown_settings")}
          </DropdownItem>
          <DropdownItem onClick={() => console.log("Logout clicked")}>
            {t("story.dropdown_logout")}
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Dropdown {...args}>
        <DropdownTrigger asChild>
          <Button variant="outline">{t("story.dropdown_options")}</Button>
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem>
            <Icon name="CheckIcon" size="sm" /> {t("story.dropdown_edit")}
          </DropdownItem>
          <DropdownItem>
            <Icon name="CopyIcon" size="sm" /> {t("story.dropdown_duplicate")}
          </DropdownItem>
          <DropdownItem disabled>
            <Icon name="CloseIcon" size="sm" /> {t("story.dropdown_delete")}
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      paddingLeft: "200px"
    }}>
        {/* 見せ場は右端そろえなので、開いた状態で置く。閉じたままだと VRT も
            ドキュメントの読み手も、この配置を一度も見ないことになる（T264）。 */}
        <Dropdown {...args} defaultOpen>
          <DropdownTrigger asChild>
            <Button>{t("story.dropdown_right_aligned")}</Button>
          </DropdownTrigger>
          <DropdownMenu align="right">
            <DropdownItem>{t("story.dropdown_rename")}</DropdownItem>
            <DropdownItem>{t("story.dropdown_copy_link")}</DropdownItem>
            <DropdownItem>{t("story.dropdown_archive")}</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>;
  }
}`,...S.parameters?.docs?.source}}}})))()}export{w as i,_ as n,x as r,S as t};