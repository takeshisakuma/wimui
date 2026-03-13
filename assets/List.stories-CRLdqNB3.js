import{j as o}from"./jsx-runtime-u17CrQMm.js";import{L as n,a as t}from"./List-DafVsuaz.js";import{u as r}from"./useTranslation-BONq47qB.js";const u={title:"Components/Data Structures/List",component:n,argTypes:{as:{control:"select",options:["ul","ol"]},size:{control:"select",options:["small","medium","large"]},spacing:{control:"select",options:["tight","normal","loose"]}}},c={render:function(e){const{t:s}=r(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsxs(n,{...e,as:"ul",children:[o.jsx(t,{children:s("story_list_item1")}),o.jsx(t,{children:s("story_list_item2")}),o.jsxs(t,{children:[s("story_list_item3")," ",s("story_list_item3_desc")]})]})}},a={render:function(e){const{t:s}=r(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsxs(n,{...e,as:"ol",children:[o.jsx(t,{children:s("story_list_step1")}),o.jsx(t,{children:s("story_list_step2")}),o.jsx(t,{children:s("story_list_step3")})]})}},d={render:function(e){const{t:s}=r(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsxs(n,{...e,size:"small",children:[o.jsxs(t,{children:[s("story_list_item_small")," 1"]}),o.jsxs(t,{children:[s("story_list_item_small")," 2"]})]})}},_={render:function(e){const{t:s}=r(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsxs(n,{...e,size:"large",children:[o.jsxs(t,{children:[s("story_list_item_large")," 1"]}),o.jsxs(t,{children:[s("story_list_item_large")," 2"]})]})}},l={render:function(e){const{t:s}=r(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsxs(n,{...e,spacing:"loose",children:[o.jsxs(t,{children:[s("story_list_loose")," 1"]}),o.jsxs(t,{children:[s("story_list_loose")," 2"]})]})}},m={render:function(e){const{t:s}=r(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsxs(n,{...e,children:[o.jsx(t,{iconName:"CheckIcon",children:s("story_list_task_completed")}),o.jsx(t,{iconName:"PdfIcon",children:s("story_list_manual_pdf")}),o.jsx(t,{iconName:"ImageIcon",children:s("story_list_gallery")}),o.jsx(t,{iconName:"EmailIcon",children:s("story_list_email")}),o.jsx(t,{iconName:"PhoneIcon",children:s("story_list_phone")}),o.jsx(t,{iconName:"ExternalLinkIcon",iconPosition:"right",children:s("story_list_view_details")})]})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <List {...args} as="ol">\r
        <ListItem>{t("story_list_step1")}</ListItem>\r
        <ListItem>{t("story_list_step2")}</ListItem>\r
        <ListItem>{t("story_list_step3")}</ListItem>\r
      </List>;
  }
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <List {...args} size="small">\r
        <ListItem>\r
          {t("story_list_item_small")} 1\r
        </ListItem>\r
        <ListItem>\r
          {t("story_list_item_small")} 2\r
        </ListItem>\r
      </List>;
  }
}`,...d.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <List {...args} size="large">\r
        <ListItem>\r
          {t("story_list_item_large")} 1\r
        </ListItem>\r
        <ListItem>\r
          {t("story_list_item_large")} 2\r
        </ListItem>\r
      </List>;
  }
}`,..._.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <List {...args} spacing="loose">\r
        <ListItem>\r
          {t("story_list_loose")} 1\r
        </ListItem>\r
        <ListItem>\r
          {t("story_list_loose")} 2\r
        </ListItem>\r
      </List>;
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...m.parameters?.docs?.source}}};const p=["Unordered","Ordered","Small","Large","LooseSpacing","WithIcons"],I=Object.freeze(Object.defineProperty({__proto__:null,Large:_,LooseSpacing:l,Ordered:a,Small:d,Unordered:c,WithIcons:m,__namedExportsOrder:p,default:u},Symbol.toStringTag,{value:"Module"}));export{I as L,a as O,d as S,c as U,m as W,_ as a,l as b};
