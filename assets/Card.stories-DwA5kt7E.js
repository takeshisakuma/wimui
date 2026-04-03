import{j as r}from"./jsx-runtime-u17CrQMm.js";import{C as n}from"./Card-CdIJGQPp.js";import{B as u}from"./Button-BIVXOD9i.js";import{A as l}from"./iframe-Ce8V-Zu8.js";import{u as c}from"./useTranslation-CZV_GknJ.js";const p={title:"Components/Data Containers/Card",component:n,tags:[],parameters:{layout:"padded"},decorators:[a=>r.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"32px"},children:r.jsx(a,{})})],argTypes:{variant:{control:"select",options:["elevated","outline","flat"]},padding:{control:"select",options:["none","sm","md","lg"]},radius:{control:"select",options:["none","sm","md","lg"]}}},s={render:function(t){const{t:e}=c(l);return r.jsx(n,{...t,children:r.jsxs(n.Body,{children:[r.jsx("h3",{children:e("story.card_default_title")}),r.jsx("p",{children:e("story.card_default_desc")})]})})},args:{variant:"elevated",style:{width:"300px"}}},d={render:function(t){const{t:e}=c(l);return r.jsx(n,{...t,children:r.jsxs(n.Body,{children:[r.jsx("h3",{children:e("story.card_outline_title")}),r.jsx("p",{children:e("story.card_outline_desc")})]})})},args:{variant:"outline",style:{width:"300px"}}},o={render:function(t){const{t:e}=c(l);return r.jsx(n,{...t,children:r.jsxs(n.Body,{children:[r.jsx("h3",{children:e("story.card_flat_title")}),r.jsx("p",{children:e("story.card_flat_desc")})]})})},args:{variant:"flat",style:{width:"300px"}}},i={render:function(t){const{t:e}=c(l);return r.jsxs(n,{...t,style:{width:"400px"},children:[r.jsx(n.Header,{children:r.jsx("h4",{style:{margin:0},children:e("story.card_header_title")})}),r.jsx(n.Body,{children:r.jsx("p",{children:e("story.card_body_text")})}),r.jsx(n.Footer,{children:r.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"8px"},children:[r.jsx(u,{variant:"outline",size:"sm",children:e("story.card_cancel")}),r.jsx(u,{variant:"filled",size:"sm",children:e("story.card_save")})]})})]})},args:{variant:"elevated"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Card {...args}>
        <Card.Body>
          <h3>{t("story.card_default_title")}</h3>
          <p>{t("story.card_default_desc")}</p>
        </Card.Body>
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
    return <Card {...args}>
        <Card.Body>
          <h3>{t("story.card_outline_title")}</h3>
          <p>{t("story.card_outline_desc")}</p>
        </Card.Body>
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
    return <Card {...args}>
        <Card.Body>
          <h3>{t("story.card_flat_title")}</h3>
          <p>{t("story.card_flat_desc")}</p>
        </Card.Body>
      </Card>;
  },
  args: {
    variant: "flat",
    style: {
      width: "300px"
    }
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Card {...args} style={{
      width: "400px"
    }}>
        <Card.Header>
          <h4 style={{
          margin: 0
        }}>{t("story.card_header_title")}</h4>
        </Card.Header>
        <Card.Body>
          <p>{t("story.card_body_text")}</p>
        </Card.Body>
        <Card.Footer>
          <div style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "8px"
        }}>
            <Button variant="outline" size="sm">{t("story.card_cancel")}</Button>
            <Button variant="filled" size="sm">{t("story.card_save")}</Button>
          </div>
        </Card.Footer>
      </Card>;
  },
  args: {
    variant: "elevated"
  }
}`,...i.parameters?.docs?.source}}};const y=["Default","Outline","Flat","WithHeaderAndFooter"],C=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Flat:o,Outline:d,WithHeaderAndFooter:i,__namedExportsOrder:y,default:p},Symbol.toStringTag,{value:"Module"}));export{C,s as D,o as F,d as O,i as W};
