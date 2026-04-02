import{j as s}from"./jsx-runtime-u17CrQMm.js";import{L as r,a as e}from"./List-BaK4cCGp.js";import{A as i}from"./iframe-Dh8ZUv-I.js";import{u as o}from"./useTranslation-CdCoNx2v.js";const u={title:"Components/Data Structures/List",component:r,argTypes:{as:{control:"select",options:["ul","ol"]},size:{control:"radio",options:["sm","md","lg"]},spacing:{control:"select",options:["tight","normal","loose"]}}},c={render:function(n){const{t}=o(i);return s.jsxs(r,{...n,as:"ul",children:[s.jsx(e,{children:t("story.list_item1")}),s.jsx(e,{children:t("story.list_item2")}),s.jsxs(e,{children:[t("story.list_item3")," ",t("story.list_item3_desc")]})]})}},l={render:function(n){const{t}=o(i);return s.jsxs(r,{...n,as:"ol",children:[s.jsx(e,{children:t("story.list_step1")}),s.jsx(e,{children:t("story.list_step2")}),s.jsx(e,{children:t("story.list_step3")})]})}},m={render:function(n){const{t}=o(i);return s.jsxs(r,{...n,size:"sm",children:[s.jsxs(e,{children:[t("story.list_item_small")," 1"]}),s.jsxs(e,{children:[t("story.list_item_small")," 2"]})]})}},d={render:function(n){const{t}=o(i);return s.jsxs(r,{...n,size:"lg",children:[s.jsxs(e,{children:[t("story.list_item_large")," 1"]}),s.jsxs(e,{children:[t("story.list_item_large")," 2"]})]})}},L={render:function(n){const{t}=o(i);return s.jsxs(r,{...n,spacing:"loose",children:[s.jsxs(e,{children:[t("story.list_loose")," 1"]}),s.jsxs(e,{children:[t("story.list_loose")," 2"]})]})}},_={render:function(n){const{t}=o(i);return s.jsxs(r,{...n,children:[s.jsx(e,{iconName:"CheckIcon",children:t("story.list_task_completed")}),s.jsx(e,{iconName:"PdfIcon",children:t("story.list_manual_pdf")}),s.jsx(e,{iconName:"ImageIcon",children:t("story.list_gallery")}),s.jsx(e,{iconName:"EmailIcon",children:t("story.list_email")}),s.jsx(e,{iconName:"PhoneIcon",children:t("story.list_phone")}),s.jsx(e,{iconName:"ExternalLinkIcon",iconPosition:"right",children:t("story.list_view_details")})]})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <List {...args} as="ul">
        <ListItem>{t("story.list_item1")}</ListItem>
        <ListItem>{t("story.list_item2")}</ListItem>
        <ListItem>
          {t("story.list_item3")} {t("story.list_item3_desc")}
        </ListItem>
      </List>;
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <List {...args} as="ol">
        <ListItem>{t("story.list_step1")}</ListItem>
        <ListItem>{t("story.list_step2")}</ListItem>
        <ListItem>{t("story.list_step3")}</ListItem>
      </List>;
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};const p=["Unordered","Ordered","Small","Large","LooseSpacing","WithIcons"],x=Object.freeze(Object.defineProperty({__proto__:null,Large:d,LooseSpacing:L,Ordered:l,Small:m,Unordered:c,WithIcons:_,__namedExportsOrder:p,default:u},Symbol.toStringTag,{value:"Module"}));export{x as L,l as O,m as S,c as U,_ as W,d as a,L as b};
