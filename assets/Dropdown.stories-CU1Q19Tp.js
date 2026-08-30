"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-splidnB2.js";import{$n as c,Qn as l,Zn as u,er as d,t as f}from"./src-CV0le6yM.js";import{t as p}from"./Icon-DKSRBrcV.js";import{t as m}from"./Button-vRcm9ObM.js";var h=e({AlignmentRight:()=>b,Basic:()=>v,WithIcons:()=>y,__namedExportsOrder:()=>x,default:()=>_}),g,_,v,y,b,x,S=t((()=>{n(),o(),i(),f(),g=a(),_={title:`Components/Overlays/Dropdown`,component:u,parameters:{layout:`centered`}},v={render:function(e){let{t}=r(s);return(0,g.jsxs)(u,{...e,children:[(0,g.jsx)(d,{asChild:!0,children:(0,g.jsx)(m,{children:t(`story.dropdown_open`)})}),(0,g.jsxs)(c,{children:[(0,g.jsx)(l,{onClick:()=>console.log(`Profile clicked`),children:t(`story.dropdown_profile`)}),(0,g.jsx)(l,{onClick:()=>console.log(`Settings clicked`),children:t(`story.dropdown_settings`)}),(0,g.jsx)(l,{onClick:()=>console.log(`Logout clicked`),children:t(`story.dropdown_logout`)})]})]})}},y={render:function(e){let{t}=r(s);return(0,g.jsxs)(u,{...e,children:[(0,g.jsx)(d,{asChild:!0,children:(0,g.jsx)(m,{variant:`outline`,children:t(`story.dropdown_options`)})}),(0,g.jsxs)(c,{children:[(0,g.jsxs)(l,{children:[(0,g.jsx)(p,{name:`CheckIcon`,size:`sm`}),` `,t(`story.dropdown_edit`)]}),(0,g.jsxs)(l,{children:[(0,g.jsx)(p,{name:`CopyIcon`,size:`sm`}),` `,t(`story.dropdown_duplicate`)]}),(0,g.jsxs)(l,{disabled:!0,children:[(0,g.jsx)(p,{name:`CloseIcon`,size:`sm`}),` `,t(`story.dropdown_delete`)]})]})]})}},b={render:function(e){let{t}=r(s);return(0,g.jsx)(`div`,{style:{paddingLeft:`200px`},children:(0,g.jsxs)(u,{...e,children:[(0,g.jsx)(d,{asChild:!0,children:(0,g.jsx)(m,{children:t(`story.dropdown_right_aligned`)})}),(0,g.jsxs)(c,{align:`right`,children:[(0,g.jsxs)(l,{children:[t(`story.dropdown_item`),` 1`]}),(0,g.jsxs)(l,{children:[t(`story.dropdown_item`),` 2`]}),(0,g.jsxs)(l,{children:[t(`story.dropdown_item`),` 3`]})]})]})})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      paddingLeft: "200px"
    }}>
        <Dropdown {...args}>
          <DropdownTrigger asChild>
            <Button>{t("story.dropdown_right_aligned")}</Button>
          </DropdownTrigger>
          <DropdownMenu align="right">
            <DropdownItem>
              {t("story.dropdown_item")} 1
            </DropdownItem>
            <DropdownItem>
              {t("story.dropdown_item")} 2
            </DropdownItem>
            <DropdownItem>
              {t("story.dropdown_item")} 3
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>;
  }
}`,...b.parameters?.docs?.source}}},x=[`Basic`,`WithIcons`,`AlignmentRight`]}));S();export{b as AlignmentRight,v as Basic,y as WithIcons,x as __namedExportsOrder,_ as default,S as n,h as t};