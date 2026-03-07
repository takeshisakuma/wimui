import{j as t}from"./jsx-runtime-u17CrQMm.js";import{L as r,a as e}from"./List-CGE_srxF.js";import{u as o}from"./useTranslation-C1Yfhr6h.js";const p={title:"Components/Data Structures/List",component:r,argTypes:{as:{control:"select",options:["ul","ol"]},size:{control:"select",options:["small","medium","large"]},spacing:{control:"select",options:["tight","normal","loose"]}}},c={render:function(n){const{t:s}=o(["docs","common","components"]);return t.jsxs(r,{...n,as:"ul",children:[t.jsx(e,{children:s("story_list_item1")}),t.jsx(e,{children:s("story_list_item2")}),t.jsxs(e,{children:[s("story_list_item3")," ",s("story_list_item3_desc")]})]})}},a={render:function(n){const{t:s}=o(["docs","common","components"]);return t.jsxs(r,{...n,as:"ol",children:[t.jsx(e,{children:s("story_list_step1")}),t.jsx(e,{children:s("story_list_step2")}),t.jsx(e,{children:s("story_list_step3")})]})}},m={render:function(n){const{t:s}=o(["docs","common","components"]);return t.jsxs(r,{...n,size:"small",children:[t.jsxs(e,{children:[s("story_list_item_small")," 1"]}),t.jsxs(e,{children:[s("story_list_item_small")," 2"]})]})}},l={render:function(n){const{t:s}=o(["docs","common","components"]);return t.jsxs(r,{...n,size:"large",children:[t.jsxs(e,{children:[s("story_list_item_large")," 1"]}),t.jsxs(e,{children:[s("story_list_item_large")," 2"]})]})}},d={render:function(n){const{t:s}=o(["docs","common","components"]);return t.jsxs(r,{...n,spacing:"loose",children:[t.jsxs(e,{children:[s("story_list_loose")," 1"]}),t.jsxs(e,{children:[s("story_list_loose")," 2"]})]})}},_={render:function(n){const{t:s}=o(["docs","common","components"]);return t.jsxs(r,{...n,children:[t.jsx(e,{iconName:"CheckIcon",children:s("story_list_task_completed")}),t.jsx(e,{iconName:"PdfIcon",children:s("story_list_manual_pdf")}),t.jsx(e,{iconName:"ImageIcon",children:s("story_list_gallery")}),t.jsx(e,{iconName:"EmailIcon",children:s("story_list_email")}),t.jsx(e,{iconName:"PhoneIcon",children:s("story_list_phone")}),t.jsx(e,{iconName:"ExternalLinkIcon",iconPosition:"right",children:s("story_list_view_details")})]})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <List {...args} as="ul">\r
        <ListItem>{t("story_list_item1")}</ListItem>\r
        <ListItem>{t("story_list_item2")}</ListItem>\r
        <ListItem>\r
          {t("story_list_item3")} {t("story_list_item3_desc")}\r
        </ListItem>\r
      </List>;
  }
}`,...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <List {...args} as="ol">\r
        <ListItem>{t("story_list_step1")}</ListItem>\r
        <ListItem>{t("story_list_step2")}</ListItem>\r
        <ListItem>{t("story_list_step3")}</ListItem>\r
      </List>;
  }
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <List {...args} size="small">\r
        <ListItem>\r
          {t("story_list_item_small")} 1\r
        </ListItem>\r
        <ListItem>\r
          {t("story_list_item_small")} 2\r
        </ListItem>\r
      </List>;
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <List {...args} size="large">\r
        <ListItem>\r
          {t("story_list_item_large")} 1\r
        </ListItem>\r
        <ListItem>\r
          {t("story_list_item_large")} 2\r
        </ListItem>\r
      </List>;
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <List {...args} spacing="loose">\r
        <ListItem>\r
          {t("story_list_loose")} 1\r
        </ListItem>\r
        <ListItem>\r
          {t("story_list_loose")} 2\r
        </ListItem>\r
      </List>;
  }
}`,...d.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,..._.parameters?.docs?.source}}};const u=["Unordered","Ordered","Small","Large","LooseSpacing","WithIcons"],g=Object.freeze(Object.defineProperty({__proto__:null,Large:l,LooseSpacing:d,Ordered:a,Small:m,Unordered:c,WithIcons:_,__namedExportsOrder:u,default:p},Symbol.toStringTag,{value:"Module"}));export{g as L,a as O,m as S,c as U,_ as W,l as a,d as b};
