import{j as s}from"./jsx-runtime-u17CrQMm.js";import{L as n,a as e}from"./List-BqxZTbPA.js";import{A as i}from"./iframe-LKGfyusM.js";import{u as o}from"./useTranslation-1YWFUbjG.js";const u={title:"Components/Data Structures/List",component:n,argTypes:{as:{control:"select",options:["ul","ol"]},size:{control:"select",options:["small","medium","large"]},spacing:{control:"select",options:["tight","normal","loose"]}}},l={render:function(r){const{t}=o(i);return s.jsxs(n,{...r,as:"ul",children:[s.jsx(e,{children:t("story_list_item1")}),s.jsx(e,{children:t("story_list_item2")}),s.jsxs(e,{children:[t("story_list_item3")," ",t("story_list_item3_desc")]})]})}},c={render:function(r){const{t}=o(i);return s.jsxs(n,{...r,as:"ol",children:[s.jsx(e,{children:t("story_list_step1")}),s.jsx(e,{children:t("story_list_step2")}),s.jsx(e,{children:t("story_list_step3")})]})}},m={render:function(r){const{t}=o(i);return s.jsxs(n,{...r,size:"small",children:[s.jsxs(e,{children:[t("story_list_item_small")," 1"]}),s.jsxs(e,{children:[t("story_list_item_small")," 2"]})]})}},_={render:function(r){const{t}=o(i);return s.jsxs(n,{...r,size:"large",children:[s.jsxs(e,{children:[t("story_list_item_large")," 1"]}),s.jsxs(e,{children:[t("story_list_item_large")," 2"]})]})}},d={render:function(r){const{t}=o(i);return s.jsxs(n,{...r,spacing:"loose",children:[s.jsxs(e,{children:[t("story_list_loose")," 1"]}),s.jsxs(e,{children:[t("story_list_loose")," 2"]})]})}},L={render:function(r){const{t}=o(i);return s.jsxs(n,{...r,children:[s.jsx(e,{iconName:"CheckIcon",children:t("story_list_task_completed")}),s.jsx(e,{iconName:"PdfIcon",children:t("story_list_manual_pdf")}),s.jsx(e,{iconName:"ImageIcon",children:t("story_list_gallery")}),s.jsx(e,{iconName:"EmailIcon",children:t("story_list_email")}),s.jsx(e,{iconName:"PhoneIcon",children:t("story_list_phone")}),s.jsx(e,{iconName:"ExternalLinkIcon",iconPosition:"right",children:t("story_list_view_details")})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <List {...args} as="ul">\r
        <ListItem>{t("story_list_item1")}</ListItem>\r
        <ListItem>{t("story_list_item2")}</ListItem>\r
        <ListItem>\r
          {t("story_list_item3")} {t("story_list_item3_desc")}\r
        </ListItem>\r
      </List>;
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <List {...args} as="ol">\r
        <ListItem>{t("story_list_step1")}</ListItem>\r
        <ListItem>{t("story_list_step2")}</ListItem>\r
        <ListItem>{t("story_list_step3")}</ListItem>\r
      </List>;
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <List {...args} size="small">\r
        <ListItem>\r
          {t("story_list_item_small")} 1\r
        </ListItem>\r
        <ListItem>\r
          {t("story_list_item_small")} 2\r
        </ListItem>\r
      </List>;
  }
}`,...m.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <List {...args} size="large">\r
        <ListItem>\r
          {t("story_list_item_large")} 1\r
        </ListItem>\r
        <ListItem>\r
          {t("story_list_item_large")} 2\r
        </ListItem>\r
      </List>;
  }
}`,..._.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <List {...args} spacing="loose">\r
        <ListItem>\r
          {t("story_list_loose")} 1\r
        </ListItem>\r
        <ListItem>\r
          {t("story_list_loose")} 2\r
        </ListItem>\r
      </List>;
  }
}`,...d.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <List {...args}>\r
        <ListItem iconName="CheckIcon">{t("story_list_task_completed")}</ListItem>\r
        <ListItem iconName="PdfIcon">{t("story_list_manual_pdf")}</ListItem>\r
        <ListItem iconName="ImageIcon">{t("story_list_gallery")}</ListItem>\r
        <ListItem iconName="EmailIcon">{t("story_list_email")}</ListItem>\r
        <ListItem iconName="PhoneIcon">{t("story_list_phone")}</ListItem>\r
        <ListItem iconName="ExternalLinkIcon" iconPosition="right">\r
          {t("story_list_view_details")}\r
        </ListItem>\r
      </List>;
  }
}`,...L.parameters?.docs?.source}}};const p=["Unordered","Ordered","Small","Large","LooseSpacing","WithIcons"],x=Object.freeze(Object.defineProperty({__proto__:null,Large:_,LooseSpacing:d,Ordered:c,Small:m,Unordered:l,WithIcons:L,__namedExportsOrder:p,default:u},Symbol.toStringTag,{value:"Module"}));export{x as L,c as O,m as S,l as U,L as W,_ as a,d as b};
