import{j as r}from"./jsx-runtime-u17CrQMm.js";import{C as n}from"./Card-CiaMm1fw.js";import{B as p}from"./Button-W2TybLPR.js";import{A as i}from"./i18nConstants-BpHxieg5.js";import{u as c}from"./useTranslation-Cpo6ITo8.js";const _={title:"Components/Data Containers/Card",component:n,tags:[],parameters:{layout:"padded"},decorators:[a=>r.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"32px"},children:r.jsx(a,{})})],argTypes:{variant:{control:"select",options:["elevated","outline","flat"]},padding:{control:"select",options:["none","sm","md","lg"]},radius:{control:"select",options:["none","sm","md","lg"]}}},s={render:function(t){const{t:e}=c(i);return r.jsx(n,{...t,children:r.jsxs(n.Body,{children:[r.jsx("h3",{children:e("story_card_default_title")}),r.jsx("p",{children:e("story_card_default_desc")})]})})},args:{variant:"elevated",style:{width:"300px"}}},d={render:function(t){const{t:e}=c(i);return r.jsx(n,{...t,children:r.jsxs(n.Body,{children:[r.jsx("h3",{children:e("story_card_outline_title")}),r.jsx("p",{children:e("story_card_outline_desc")})]})})},args:{variant:"outline",style:{width:"300px"}}},o={render:function(t){const{t:e}=c(i);return r.jsx(n,{...t,children:r.jsxs(n.Body,{children:[r.jsx("h3",{children:e("story_card_flat_title")}),r.jsx("p",{children:e("story_card_flat_desc")})]})})},args:{variant:"flat",style:{width:"300px"}}},l={render:function(t){const{t:e}=c(i);return r.jsxs(n,{...t,style:{width:"400px"},children:[r.jsx(n.Header,{children:r.jsx("h4",{style:{margin:0},children:e("story_card_header_title")})}),r.jsx(n.Body,{children:r.jsx("p",{children:e("story_card_body_text")})}),r.jsx(n.Footer,{children:r.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"8px"},children:[r.jsx(p,{priority:"secondary",size:"small",label:e("story_card_cancel")}),r.jsx(p,{priority:"primary",size:"small",label:e("story_card_save")})]})})]})},args:{variant:"elevated"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,...l.parameters?.docs?.source}}};const y=["Default","Outline","Flat","WithHeaderAndFooter"],C=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Flat:o,Outline:d,WithHeaderAndFooter:l,__namedExportsOrder:y,default:_},Symbol.toStringTag,{value:"Module"}));export{C,s as D,o as F,d as O,l as W};
