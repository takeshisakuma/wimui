"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-splidnB2.js";import{t as c}from"./src-CV0le6yM.js";import{t as l}from"./Stack-z584y6QE.js";import{t as u}from"./Text-CLDfz7UT.js";import{n as d,t as f}from"./List-h25x1z7b.js";var p=e({Bordered:()=>S,Large:()=>y,LooseSpacing:()=>b,Ordered:()=>_,Small:()=>v,Unordered:()=>g,WithIcons:()=>x,__namedExportsOrder:()=>C,default:()=>h}),m,h,g,_,v,y,b,x,S,C,w=t((()=>{n(),o(),i(),c(),m=a(),h={title:`Components/Data Structures/List`,component:f,argTypes:{size:{control:`radio`,options:[`sm`,`md`,`lg`]},spacing:{control:`select`,options:[`tight`,`normal`,`loose`]}}},g={render:function(e){let{t}=r(s);return(0,m.jsxs)(f,{...e,children:[(0,m.jsx)(d,{children:t(`story.list_item1`)}),(0,m.jsx)(d,{children:t(`story.list_item2`)}),(0,m.jsxs)(d,{children:[t(`story.list_item3`),` `,t(`story.list_item3_desc`)]})]})}},_={render:function(e){let{t}=r(s);return(0,m.jsx)(f,{...e,asChild:!0,children:(0,m.jsxs)(`ol`,{children:[(0,m.jsx)(d,{children:t(`story.list_step1`)}),(0,m.jsx)(d,{children:t(`story.list_step2`)}),(0,m.jsx)(d,{children:t(`story.list_step3`)})]})})}},v={render:function(e){let{t}=r(s);return(0,m.jsxs)(f,{...e,size:`sm`,children:[(0,m.jsxs)(d,{children:[t(`story.list_item_small`),` 1`]}),(0,m.jsxs)(d,{children:[t(`story.list_item_small`),` 2`]})]})}},y={render:function(e){let{t}=r(s);return(0,m.jsxs)(f,{...e,size:`lg`,children:[(0,m.jsxs)(d,{children:[t(`story.list_item_large`),` 1`]}),(0,m.jsxs)(d,{children:[t(`story.list_item_large`),` 2`]})]})}},b={render:function(e){let{t}=r(s);return(0,m.jsxs)(f,{...e,spacing:`loose`,children:[(0,m.jsxs)(d,{children:[t(`story.list_loose`),` 1`]}),(0,m.jsxs)(d,{children:[t(`story.list_loose`),` 2`]})]})}},x={render:function(e){let{t}=r(s);return(0,m.jsxs)(f,{...e,children:[(0,m.jsx)(d,{iconName:`CheckIcon`,children:t(`story.list_task_completed`)}),(0,m.jsx)(d,{iconName:`PdfIcon`,children:t(`story.list_manual_pdf`)}),(0,m.jsx)(d,{iconName:`ImageIcon`,children:t(`story.list_gallery`)}),(0,m.jsx)(d,{iconName:`EmailIcon`,children:t(`story.list_email`)}),(0,m.jsx)(d,{iconName:`PhoneIcon`,children:t(`story.list_phone`)}),(0,m.jsx)(d,{iconName:`ExternalLinkIcon`,iconPosition:`right`,children:t(`story.list_view_details`)})]})}},S={render:function(e){let{t}=r(s);return(0,m.jsxs)(f,{...e,bordered:!0,fullWidth:!0,children:[(0,m.jsx)(d,{children:(0,m.jsxs)(l,{gap:`2xs`,children:[(0,m.jsx)(u,{children:t(`story.list_found_umbrella`)}),(0,m.jsx)(u,{size:`xs`,color:`text-tertiary`,children:t(`story.list_found_umbrella_meta`)})]})}),(0,m.jsx)(d,{children:(0,m.jsxs)(l,{gap:`2xs`,children:[(0,m.jsx)(u,{children:t(`story.list_found_bottle`)}),(0,m.jsx)(u,{size:`xs`,color:`text-tertiary`,children:t(`story.list_found_bottle_meta`)})]})})]})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <List {...args}>
        <ListItem>{t("story.list_item1")}</ListItem>
        <ListItem>{t("story.list_item2")}</ListItem>
        <ListItem>
          {t("story.list_item3")} {t("story.list_item3_desc")}
        </ListItem>
      </List>;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <List {...args} asChild>
        <ol>
          <ListItem>{t("story.list_step1")}</ListItem>
          <ListItem>{t("story.list_step2")}</ListItem>
          <ListItem>{t("story.list_step3")}</ListItem>
        </ol>
      </List>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <List {...args} size="sm">
        <ListItem>
          {t("story.list_item_small")} 1
        </ListItem>
        <ListItem>
          {t("story.list_item_small")} 2
        </ListItem>
      </List>;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <List {...args} size="lg">
        <ListItem>
          {t("story.list_item_large")} 1
        </ListItem>
        <ListItem>
          {t("story.list_item_large")} 2
        </ListItem>
      </List>;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <List {...args} spacing="loose">
        <ListItem>
          {t("story.list_loose")} 1
        </ListItem>
        <ListItem>
          {t("story.list_loose")} 2
        </ListItem>
      </List>;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <List {...args}>
        <ListItem iconName="CheckIcon">{t("story.list_task_completed")}</ListItem>
        <ListItem iconName="PdfIcon">{t("story.list_manual_pdf")}</ListItem>
        <ListItem iconName="ImageIcon">{t("story.list_gallery")}</ListItem>
        <ListItem iconName="EmailIcon">{t("story.list_email")}</ListItem>
        <ListItem iconName="PhoneIcon">{t("story.list_phone")}</ListItem>
        <ListItem iconName="ExternalLinkIcon" iconPosition="right">
          {t("story.list_view_details")}
        </ListItem>
      </List>;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <List {...args} bordered fullWidth>
        <ListItem>
          <Stack gap="2xs">
            <Text>{t("story.list_found_umbrella")}</Text>
            <Text size="xs" color="text-tertiary">
              {t("story.list_found_umbrella_meta")}
            </Text>
          </Stack>
        </ListItem>
        <ListItem>
          <Stack gap="2xs">
            <Text>{t("story.list_found_bottle")}</Text>
            <Text size="xs" color="text-tertiary">
              {t("story.list_found_bottle_meta")}
            </Text>
          </Stack>
        </ListItem>
      </List>;
  }
}`,...S.parameters?.docs?.source},description:{story:`bordered の単体 Default はテキスト子だけ。実際の行はタイトル＋メタのブロック。
inside マーカーだとブロックが次行へ落ちる（T183）。`,...S.parameters?.docs?.description}}},C=[`Unordered`,`Ordered`,`Small`,`Large`,`LooseSpacing`,`WithIcons`,`Bordered`]}));w();export{S as Bordered,y as Large,b as LooseSpacing,_ as Ordered,v as Small,g as Unordered,x as WithIcons,C as __namedExportsOrder,h as default,w as n,p as t};