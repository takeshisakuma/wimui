import{j as s}from"./jsx-runtime-u17CrQMm.js";import{C as r}from"./Card-INrna_W1.js";import{B as l}from"./Button-dW8UAzVq.js";import{u as i}from"./useTranslation-R4wwOoyb.js";const _={title:"Components/Data Containers/Card",component:r,tags:[],parameters:{layout:"padded"},decorators:[t=>s.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"32px"},children:s.jsx(t,{})})],argTypes:{variant:{control:"select",options:["elevated","outline","flat"]},padding:{control:"select",options:["none","sm","md","lg"]},radius:{control:"select",options:["none","sm","md","lg"]}}},e={render:function(n){const{t:o}=i(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return s.jsx(r,{...n,children:s.jsxs(r.Body,{children:[s.jsx("h3",{children:o("story_card_default_title")}),s.jsx("p",{children:o("story_card_default_desc")})]})})},args:{variant:"elevated",style:{width:"300px"}}},d={render:function(n){const{t:o}=i(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return s.jsx(r,{...n,children:s.jsxs(r.Body,{children:[s.jsx("h3",{children:o("story_card_outline_title")}),s.jsx("p",{children:o("story_card_outline_desc")})]})})},args:{variant:"outline",style:{width:"300px"}}},a={render:function(n){const{t:o}=i(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return s.jsx(r,{...n,children:s.jsxs(r.Body,{children:[s.jsx("h3",{children:o("story_card_flat_title")}),s.jsx("p",{children:o("story_card_flat_desc")})]})})},args:{variant:"flat",style:{width:"300px"}}},c={render:function(n){const{t:o}=i(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return s.jsxs(r,{...n,style:{width:"400px"},children:[s.jsx(r.Header,{children:s.jsx("h4",{style:{margin:0},children:o("story_card_header_title")})}),s.jsx(r.Body,{children:s.jsx("p",{children:o("story_card_body_text")})}),s.jsx(r.Footer,{children:s.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"8px"},children:[s.jsx(l,{priority:"secondary",size:"small",label:o("story_card_cancel")}),s.jsx(l,{priority:"primary",size:"small",label:o("story_card_save")})]})})]})},args:{variant:"elevated"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Card {...args}>\r
        <Card.Body>\r
          <h3>{t("story_card_default_title")}</h3>\r
          <p>{t("story_card_default_desc")}</p>\r
        </Card.Body>\r
      </Card>;
  },
  args: {
    variant: "elevated",
    style: {
      width: "300px"
    }
  }
}`,...e.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Card {...args}>\r
        <Card.Body>\r
          <h3>{t("story_card_outline_title")}</h3>\r
          <p>{t("story_card_outline_desc")}</p>\r
        </Card.Body>\r
      </Card>;
  },
  args: {
    variant: "outline",
    style: {
      width: "300px"
    }
  }
}`,...d.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Card {...args}>\r
        <Card.Body>\r
          <h3>{t("story_card_flat_title")}</h3>\r
          <p>{t("story_card_flat_desc")}</p>\r
        </Card.Body>\r
      </Card>;
  },
  args: {
    variant: "flat",
    style: {
      width: "300px"
    }
  }
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Card {...args} style={{
      width: "400px"
    }}>\r
        <Card.Header>\r
          <h4 style={{
          margin: 0
        }}>{t("story_card_header_title")}</h4>\r
        </Card.Header>\r
        <Card.Body>\r
          <p>{t("story_card_body_text")}</p>\r
        </Card.Body>\r
        <Card.Footer>\r
          <div style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "8px"
        }}>\r
            <Button priority="secondary" size="small" label={t("story_card_cancel")} />\r
            <Button priority="primary" size="small" label={t("story_card_save")} />\r
          </div>\r
        </Card.Footer>\r
      </Card>;
  },
  args: {
    variant: "elevated"
  }
}`,...c.parameters?.docs?.source}}};const p=["Default","Outline","Flat","WithHeaderAndFooter"],x=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Flat:a,Outline:d,WithHeaderAndFooter:c,__namedExportsOrder:p,default:_},Symbol.toStringTag,{value:"Module"}));export{x as C,e as D,a as F,d as O,c as W};
