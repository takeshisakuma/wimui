import{j as r}from"./jsx-runtime-u17CrQMm.js";import{C as e}from"./Card-Btxq61cC.js";import{B as i}from"./Button-B2l21hRP.js";import{u as l}from"./useTranslation-oYtfLuBR.js";const p={title:"Components/Data Containers/Card",component:e,tags:[],parameters:{layout:"padded"},decorators:[s=>r.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"32px"},children:r.jsx(s,{})})],argTypes:{variant:{control:"select",options:["elevated","outline","flat"]},padding:{control:"select",options:["none","sm","md","lg"]},radius:{control:"select",options:["none","sm","md","lg"]}}},a={render:function(t){const{t:n}=l(["docs","common","components"]);return r.jsx(e,{...t,children:r.jsxs(e.Body,{children:[r.jsx("h3",{children:n("story_card_default_title")}),r.jsx("p",{children:n("story_card_default_desc")})]})})},args:{variant:"elevated",style:{width:"300px"}}},o={render:function(t){const{t:n}=l(["docs","common","components"]);return r.jsx(e,{...t,children:r.jsxs(e.Body,{children:[r.jsx("h3",{children:n("story_card_outline_title")}),r.jsx("p",{children:n("story_card_outline_desc")})]})})},args:{variant:"outline",style:{width:"300px"}}},d={render:function(t){const{t:n}=l(["docs","common","components"]);return r.jsx(e,{...t,children:r.jsxs(e.Body,{children:[r.jsx("h3",{children:n("story_card_flat_title")}),r.jsx("p",{children:n("story_card_flat_desc")})]})})},args:{variant:"flat",style:{width:"300px"}}},c={render:function(t){const{t:n}=l(["docs","common","components"]);return r.jsxs(e,{...t,style:{width:"400px"},children:[r.jsx(e.Header,{children:r.jsx("h4",{style:{margin:0},children:n("story_card_header_title")})}),r.jsx(e.Body,{children:r.jsx("p",{children:n("story_card_body_text")})}),r.jsx(e.Footer,{children:r.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"8px"},children:[r.jsx(i,{priority:"secondary",size:"small",label:n("story_card_cancel")}),r.jsx(i,{priority:"primary",size:"small",label:n("story_card_save")})]})})]})},args:{variant:"elevated"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,...c.parameters?.docs?.source}}};const m=["Default","Outline","Flat","WithHeaderAndFooter"],h=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Flat:d,Outline:o,WithHeaderAndFooter:c,__namedExportsOrder:m,default:p},Symbol.toStringTag,{value:"Module"}));export{h as C,a as D,d as F,o as O,c as W};
