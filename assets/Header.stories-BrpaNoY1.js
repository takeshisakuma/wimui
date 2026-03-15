import{j as e}from"./jsx-runtime-u17CrQMm.js";import{H as n}from"./Header-D5IQLw1K.js";import{A as c}from"./i18nConstants-BpHxieg5.js";import{u as l}from"./useTranslation-7X4DMM5t.js";const g={title:"Components/Application Shell/Header",component:n,parameters:{layout:"fullscreen"},tags:[],argTypes:{fixed:{control:"boolean",description:"Fix header to top"},sticky:{control:"boolean",description:"Make header sticky on scroll"},bordered:{control:"boolean",description:"Show border at bottom"},glass:{control:"boolean",description:"Apply glassmorphism effect"},background:{control:"select",options:["primary","secondary","transparent"],description:"Background color"},children:{table:{disable:!0}}}},a={render:function(t){const{t:r}=l(c);return e.jsxs(n,{...t,children:[e.jsx(n.Section,{align:"start",children:e.jsx("div",{style:{fontWeight:"bold",fontSize:"1.2rem"},children:"WIM UI"})}),e.jsx(n.Section,{align:"center",children:e.jsxs("nav",{style:{display:"flex",gap:"20px"},children:[e.jsx("a",{href:"/",children:r("story_header_home")}),e.jsx("a",{href:"/",children:r("story_header_about")}),e.jsx("a",{href:"/",children:r("story_header_contact")})]})}),e.jsx(n.Section,{align:"end",children:e.jsx("button",{children:r("story_header_login")})})]})}},o={render:function(t){const{t:r}=l(c);return e.jsxs(n,{...t,bordered:!0,children:[e.jsx(n.Section,{align:"start",children:e.jsx("div",{style:{fontWeight:"bold",fontSize:"1.2rem"},children:"WIM UI"})}),e.jsx(n.Section,{align:"center",children:e.jsxs("nav",{style:{display:"flex",gap:"20px"},children:[e.jsx("a",{href:"/",children:r("story_header_home")}),e.jsx("a",{href:"/",children:r("story_header_about")}),e.jsx("a",{href:"/",children:r("story_header_contact")})]})}),e.jsx(n.Section,{align:"end",children:e.jsx("button",{children:r("story_header_login")})})]})}},s={parameters:{backgrounds:{default:"dark"}},render:function(t){const{t:r}=l(c);return e.jsxs(n,{...t,glass:!0,background:"transparent",children:[e.jsx(n.Section,{align:"start",children:e.jsx("div",{style:{fontWeight:"bold",fontSize:"1.2rem"},children:"WIM UI"})}),e.jsx(n.Section,{align:"center",children:e.jsxs("nav",{style:{display:"flex",gap:"20px"},children:[e.jsx("a",{href:"/",children:r("story_header_home")}),e.jsx("a",{href:"/",children:r("story_header_about")}),e.jsx("a",{href:"/",children:r("story_header_contact")})]})}),e.jsx(n.Section,{align:"end",children:e.jsx("button",{children:r("story_header_login")})})]})}},d={render:function(t){const{t:r}=l(c);return e.jsxs("div",{style:{height:"200vh",background:"linear-gradient(to bottom, #f0f0f0, #e0e0e0)"},children:[e.jsxs(n,{...t,sticky:!0,bordered:!0,children:[e.jsx(n.Section,{align:"start",children:e.jsx("div",{style:{fontWeight:"bold"},children:"Sticky Header"})}),e.jsx(n.Section,{align:"end",children:e.jsx("button",{children:r("story_header_action")})})]}),e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("p",{children:r("story_header_scroll_desc")}),Array.from({length:10}).map((y,p)=>e.jsxs("p",{style:{margin:"20px 0"},children:[r("story_header_content_block")," ",p+1]},p))]})]})}},i={args:{bordered:!0,glass:!1,background:"primary"},render:function(t){const{t:r}=l(c);return e.jsxs("div",{style:{height:"300px",position:"relative",border:"1px dashed #ccc"},children:[e.jsxs(n,{...t,style:{position:"absolute",top:0,left:0,width:"100%"},children:[e.jsx(n.Section,{align:"start",children:e.jsx("div",{style:{fontWeight:"bold",fontSize:"1.2rem"},children:"WIM UI"})}),e.jsx(n.Section,{align:"center",children:e.jsxs("nav",{style:{display:"flex",gap:"20px"},children:[e.jsx("a",{href:"/",children:r("story_header_home")}),e.jsx("a",{href:"/",children:r("story_header_about")}),e.jsx("a",{href:"/",children:r("story_header_contact")})]})}),e.jsx(n.Section,{align:"end",children:e.jsx("button",{children:r("story_header_login")})})]}),e.jsxs("div",{style:{padding:"100px 20px 20px"},children:[e.jsx("p",{children:r("story_header_playground_desc")}),e.jsx("p",{children:r("story_header_control_desc")})]})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Header {...args}>\r
        <Header.Section align="start">\r
          <div style={{
          fontWeight: "bold",
          fontSize: "1.2rem"
        }}>WIM UI</div>\r
        </Header.Section>\r
        <Header.Section align="center">\r
          <nav style={{
          display: "flex",
          gap: "20px"
        }}>\r
            <a href="/">{t("story_header_home")}</a>\r
            <a href="/">{t("story_header_about")}</a>\r
            <a href="/">{t("story_header_contact")}</a>\r
          </nav>\r
        </Header.Section>\r
        <Header.Section align="end">\r
          <button>{t("story_header_login")}</button>\r
        </Header.Section>\r
      </Header>;
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Header {...args} bordered>\r
        <Header.Section align="start">\r
          <div style={{
          fontWeight: "bold",
          fontSize: "1.2rem"
        }}>WIM UI</div>\r
        </Header.Section>\r
        <Header.Section align="center">\r
          <nav style={{
          display: "flex",
          gap: "20px"
        }}>\r
            <a href="/">{t("story_header_home")}</a>\r
            <a href="/">{t("story_header_about")}</a>\r
            <a href="/">{t("story_header_contact")}</a>\r
          </nav>\r
        </Header.Section>\r
        <Header.Section align="end">\r
          <button>{t("story_header_login")}</button>\r
        </Header.Section>\r
      </Header>;
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: "dark"
    }
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Header {...args} glass background="transparent">\r
        <Header.Section align="start">\r
          <div style={{
          fontWeight: "bold",
          fontSize: "1.2rem"
        }}>WIM UI</div>\r
        </Header.Section>\r
        <Header.Section align="center">\r
          <nav style={{
          display: "flex",
          gap: "20px"
        }}>\r
            <a href="/">{t("story_header_home")}</a>\r
            <a href="/">{t("story_header_about")}</a>\r
            <a href="/">{t("story_header_contact")}</a>\r
          </nav>\r
        </Header.Section>\r
        <Header.Section align="end">\r
          <button>{t("story_header_login")}</button>\r
        </Header.Section>\r
      </Header>;
  }
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args: HeaderProps) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      height: "200vh",
      background: "linear-gradient(to bottom, #f0f0f0, #e0e0e0)"
    }}>\r
        <Header {...args} sticky bordered>\r
          <Header.Section align="start">\r
            <div style={{
            fontWeight: "bold"
          }}>Sticky Header</div>\r
          </Header.Section>\r
          <Header.Section align="end">\r
            <button>{t("story_header_action")}</button>\r
          </Header.Section>\r
        </Header>\r
        <div style={{
        padding: "20px"
      }}>\r
          <p>{t("story_header_scroll_desc")}</p>\r
          {Array.from({
          length: 10
        }).map((_, i) => <p key={i} style={{
          margin: "20px 0"
        }}>\r
              {t("story_header_content_block")} {i + 1}\r
            </p>)}\r
        </div>\r
      </div>;
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    bordered: true,
    glass: false,
    background: "primary"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      height: "300px",
      position: "relative",
      border: "1px dashed #ccc"
    }}>\r
        <Header {...args} style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%"
      }}>\r
          <Header.Section align="start">\r
            <div style={{
            fontWeight: "bold",
            fontSize: "1.2rem"
          }}>WIM UI</div>\r
          </Header.Section>\r
          <Header.Section align="center">\r
            <nav style={{
            display: "flex",
            gap: "20px"
          }}>\r
              <a href="/">{t("story_header_home")}</a>\r
              <a href="/">{t("story_header_about")}</a>\r
              <a href="/">{t("story_header_contact")}</a>\r
            </nav>\r
          </Header.Section>\r
          <Header.Section align="end">\r
            <button>{t("story_header_login")}</button>\r
          </Header.Section>\r
        </Header>\r
        <div style={{
        padding: "100px 20px 20px"
      }}>\r
          <p>{t("story_header_playground_desc")}</p>\r
          <p>{t("story_header_control_desc")}</p>\r
        </div>\r
      </div>;
  }
}`,...i.parameters?.docs?.source}}};const _=["Default","Bordered","Glass","Sticky","Playground"],b=Object.freeze(Object.defineProperty({__proto__:null,Bordered:o,Default:a,Glass:s,Playground:i,Sticky:d,__namedExportsOrder:_,default:g},Symbol.toStringTag,{value:"Module"}));export{o as B,a as D,s as G,b as H,i as P,d as S};
