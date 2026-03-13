import{j as e}from"./jsx-runtime-u17CrQMm.js";import{H as r}from"./Header-B2xlhazW.js";import{u as i}from"./useTranslation-BJQcmf5i.js";const h={title:"Components/Application Shell/Header",component:r,parameters:{layout:"fullscreen"},tags:[],argTypes:{fixed:{control:"boolean",description:"Fix header to top"},sticky:{control:"boolean",description:"Make header sticky on scroll"},bordered:{control:"boolean",description:"Show border at bottom"},glass:{control:"boolean",description:"Apply glassmorphism effect"},background:{control:"select",options:["primary","secondary","transparent"],description:"Background color"},children:{table:{disable:!0}}}},t={render:function(o){const{t:n}=i(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsxs(r,{...o,children:[e.jsx(r.Section,{align:"start",children:e.jsx("div",{style:{fontWeight:"bold",fontSize:"1.2rem"},children:"WIM UI"})}),e.jsx(r.Section,{align:"center",children:e.jsxs("nav",{style:{display:"flex",gap:"20px"},children:[e.jsx("a",{href:"/",children:n("story_header_home")}),e.jsx("a",{href:"/",children:n("story_header_about")}),e.jsx("a",{href:"/",children:n("story_header_contact")})]})}),e.jsx(r.Section,{align:"end",children:e.jsx("button",{children:n("story_header_login")})})]})}},s={render:function(o){const{t:n}=i(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsxs(r,{...o,bordered:!0,children:[e.jsx(r.Section,{align:"start",children:e.jsx("div",{style:{fontWeight:"bold",fontSize:"1.2rem"},children:"WIM UI"})}),e.jsx(r.Section,{align:"center",children:e.jsxs("nav",{style:{display:"flex",gap:"20px"},children:[e.jsx("a",{href:"/",children:n("story_header_home")}),e.jsx("a",{href:"/",children:n("story_header_about")}),e.jsx("a",{href:"/",children:n("story_header_contact")})]})}),e.jsx(r.Section,{align:"end",children:e.jsx("button",{children:n("story_header_login")})})]})}},a={parameters:{backgrounds:{default:"dark"}},render:function(o){const{t:n}=i(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsxs(r,{...o,glass:!0,background:"transparent",children:[e.jsx(r.Section,{align:"start",children:e.jsx("div",{style:{fontWeight:"bold",fontSize:"1.2rem"},children:"WIM UI"})}),e.jsx(r.Section,{align:"center",children:e.jsxs("nav",{style:{display:"flex",gap:"20px"},children:[e.jsx("a",{href:"/",children:n("story_header_home")}),e.jsx("a",{href:"/",children:n("story_header_about")}),e.jsx("a",{href:"/",children:n("story_header_contact")})]})}),e.jsx(r.Section,{align:"end",children:e.jsx("button",{children:n("story_header_login")})})]})}},d={render:function(o){const{t:n}=i(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsxs("div",{style:{height:"200vh",background:"linear-gradient(to bottom, #f0f0f0, #e0e0e0)"},children:[e.jsxs(r,{...o,sticky:!0,bordered:!0,children:[e.jsx(r.Section,{align:"start",children:e.jsx("div",{style:{fontWeight:"bold"},children:"Sticky Header"})}),e.jsx(r.Section,{align:"end",children:e.jsx("button",{children:n("story_header_action")})})]}),e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("p",{children:n("story_header_scroll_desc")}),Array.from({length:10}).map((y,_)=>e.jsxs("p",{style:{margin:"20px 0"},children:[n("story_header_content_block")," ",_+1]},_))]})]})}},c={args:{bordered:!0,glass:!1,background:"primary"},render:function(o){const{t:n}=i(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsxs("div",{style:{height:"300px",position:"relative",border:"1px dashed #ccc"},children:[e.jsxs(r,{...o,style:{position:"absolute",top:0,left:0,width:"100%"},children:[e.jsx(r.Section,{align:"start",children:e.jsx("div",{style:{fontWeight:"bold",fontSize:"1.2rem"},children:"WIM UI"})}),e.jsx(r.Section,{align:"center",children:e.jsxs("nav",{style:{display:"flex",gap:"20px"},children:[e.jsx("a",{href:"/",children:n("story_header_home")}),e.jsx("a",{href:"/",children:n("story_header_about")}),e.jsx("a",{href:"/",children:n("story_header_contact")})]})}),e.jsx(r.Section,{align:"end",children:e.jsx("button",{children:n("story_header_login")})})]}),e.jsxs("div",{style:{padding:"100px 20px 20px"},children:[e.jsx("p",{children:n("story_header_playground_desc")}),e.jsx("p",{children:n("story_header_control_desc")})]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: "dark"
    }
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args: HeaderProps) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    bordered: true,
    glass: false,
    background: "primary"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...c.parameters?.docs?.source}}};const p=["Default","Bordered","Glass","Sticky","Playground"],x=Object.freeze(Object.defineProperty({__proto__:null,Bordered:s,Default:t,Glass:a,Playground:c,Sticky:d,__namedExportsOrder:p,default:h},Symbol.toStringTag,{value:"Module"}));export{s as B,t as D,a as G,x as H,c as P,d as S};
