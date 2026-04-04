import{j as e}from"./jsx-runtime-u17CrQMm.js";import{H as r}from"./Header-3zHk1jSn.js";import{A as c}from"./iframe-Bn5mqC8Q.js";import{u as l}from"./useTranslation-Cn4N2seM.js";const g={title:"Components/Application Shell/Header",component:r,parameters:{layout:"fullscreen"},tags:[],argTypes:{fixed:{control:"boolean",description:"Fix header to top"},sticky:{control:"boolean",description:"Make header sticky on scroll"},bordered:{control:"boolean",description:"Show border at bottom"},glass:{control:"boolean",description:"Apply glassmorphism effect"},background:{control:"select",options:["primary","secondary","transparent"],description:"Background color"},children:{table:{disable:!0}}}},a={render:function(t){const{t:n}=l(c);return e.jsxs(r,{...t,children:[e.jsx(r.Section,{align:"start",children:e.jsx("div",{style:{fontWeight:"bold",fontSize:"1.2rem"},children:"WIM UI"})}),e.jsx(r.Section,{align:"center",children:e.jsxs("nav",{style:{display:"flex",gap:"20px"},children:[e.jsx("a",{href:"/",children:n("story.header_home")}),e.jsx("a",{href:"/",children:n("story.header_about")}),e.jsx("a",{href:"/",children:n("story.header_contact")})]})}),e.jsx(r.Section,{align:"end",children:e.jsx("button",{children:n("story.header_login")})})]})}},o={render:function(t){const{t:n}=l(c);return e.jsxs(r,{...t,bordered:!0,children:[e.jsx(r.Section,{align:"start",children:e.jsx("div",{style:{fontWeight:"bold",fontSize:"1.2rem"},children:"WIM UI"})}),e.jsx(r.Section,{align:"center",children:e.jsxs("nav",{style:{display:"flex",gap:"20px"},children:[e.jsx("a",{href:"/",children:n("story.header_home")}),e.jsx("a",{href:"/",children:n("story.header_about")}),e.jsx("a",{href:"/",children:n("story.header_contact")})]})}),e.jsx(r.Section,{align:"end",children:e.jsx("button",{children:n("story.header_login")})})]})}},s={parameters:{backgrounds:{default:"dark"}},render:function(t){const{t:n}=l(c);return e.jsxs(r,{...t,glass:!0,background:"transparent",children:[e.jsx(r.Section,{align:"start",children:e.jsx("div",{style:{fontWeight:"bold",fontSize:"1.2rem"},children:"WIM UI"})}),e.jsx(r.Section,{align:"center",children:e.jsxs("nav",{style:{display:"flex",gap:"20px"},children:[e.jsx("a",{href:"/",children:n("story.header_home")}),e.jsx("a",{href:"/",children:n("story.header_about")}),e.jsx("a",{href:"/",children:n("story.header_contact")})]})}),e.jsx(r.Section,{align:"end",children:e.jsx("button",{children:n("story.header_login")})})]})}},d={render:function(t){const{t:n}=l(c);return e.jsxs("div",{style:{height:"200vh",background:"linear-gradient(to bottom, #f0f0f0, #e0e0e0)"},children:[e.jsxs(r,{...t,sticky:!0,bordered:!0,children:[e.jsx(r.Section,{align:"start",children:e.jsx("div",{style:{fontWeight:"bold"},children:"Sticky Header"})}),e.jsx(r.Section,{align:"end",children:e.jsx("button",{children:n("story.header_action")})})]}),e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("p",{children:n("story.header_scroll_desc")}),Array.from({length:10}).map((u,p)=>e.jsxs("p",{style:{margin:"20px 0"},children:[n("story.header_content_block")," ",p+1]},p))]})]})}},i={args:{bordered:!0,glass:!1,background:"primary"},render:function(t){const{t:n}=l(c);return e.jsxs("div",{style:{height:"300px",position:"relative",border:"1px dashed #ccc"},children:[e.jsxs(r,{...t,style:{position:"absolute",top:0,left:0,width:"100%"},children:[e.jsx(r.Section,{align:"start",children:e.jsx("div",{style:{fontWeight:"bold",fontSize:"1.2rem"},children:"WIM UI"})}),e.jsx(r.Section,{align:"center",children:e.jsxs("nav",{style:{display:"flex",gap:"20px"},children:[e.jsx("a",{href:"/",children:n("story.header_home")}),e.jsx("a",{href:"/",children:n("story.header_about")}),e.jsx("a",{href:"/",children:n("story.header_contact")})]})}),e.jsx(r.Section,{align:"end",children:e.jsx("button",{children:n("story.header_login")})})]}),e.jsxs("div",{style:{padding:"100px 20px 20px"},children:[e.jsx("p",{children:n("story.header_playground_desc")}),e.jsx("p",{children:n("story.header_control_desc")})]})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Header {...args}>
        <Header.Section align="start">
          <div style={{
          fontWeight: "bold",
          fontSize: "1.2rem"
        }}>WIM UI</div>
        </Header.Section>
        <Header.Section align="center">
          <nav style={{
          display: "flex",
          gap: "20px"
        }}>
            <a href="/">{t("story.header_home")}</a>
            <a href="/">{t("story.header_about")}</a>
            <a href="/">{t("story.header_contact")}</a>
          </nav>
        </Header.Section>
        <Header.Section align="end">
          <button>{t("story.header_login")}</button>
        </Header.Section>
      </Header>;
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Header {...args} bordered>
        <Header.Section align="start">
          <div style={{
          fontWeight: "bold",
          fontSize: "1.2rem"
        }}>WIM UI</div>
        </Header.Section>
        <Header.Section align="center">
          <nav style={{
          display: "flex",
          gap: "20px"
        }}>
            <a href="/">{t("story.header_home")}</a>
            <a href="/">{t("story.header_about")}</a>
            <a href="/">{t("story.header_contact")}</a>
          </nav>
        </Header.Section>
        <Header.Section align="end">
          <button>{t("story.header_login")}</button>
        </Header.Section>
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
    return <Header {...args} glass background="transparent">
        <Header.Section align="start">
          <div style={{
          fontWeight: "bold",
          fontSize: "1.2rem"
        }}>WIM UI</div>
        </Header.Section>
        <Header.Section align="center">
          <nav style={{
          display: "flex",
          gap: "20px"
        }}>
            <a href="/">{t("story.header_home")}</a>
            <a href="/">{t("story.header_about")}</a>
            <a href="/">{t("story.header_contact")}</a>
          </nav>
        </Header.Section>
        <Header.Section align="end">
          <button>{t("story.header_login")}</button>
        </Header.Section>
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
    }}>
        <Header {...args} sticky bordered>
          <Header.Section align="start">
            <div style={{
            fontWeight: "bold"
          }}>Sticky Header</div>
          </Header.Section>
          <Header.Section align="end">
            <button>{t("story.header_action")}</button>
          </Header.Section>
        </Header>
        <div style={{
        padding: "20px"
      }}>
          <p>{t("story.header_scroll_desc")}</p>
          {Array.from({
          length: 10
        }).map((_, i) => <p key={i} style={{
          margin: "20px 0"
        }}>
              {t("story.header_content_block")} {i + 1}
            </p>)}
        </div>
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
    }}>
        <Header {...args} style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%"
      }}>
          <Header.Section align="start">
            <div style={{
            fontWeight: "bold",
            fontSize: "1.2rem"
          }}>WIM UI</div>
          </Header.Section>
          <Header.Section align="center">
            <nav style={{
            display: "flex",
            gap: "20px"
          }}>
              <a href="/">{t("story.header_home")}</a>
              <a href="/">{t("story.header_about")}</a>
              <a href="/">{t("story.header_contact")}</a>
            </nav>
          </Header.Section>
          <Header.Section align="end">
            <button>{t("story.header_login")}</button>
          </Header.Section>
        </Header>
        <div style={{
        padding: "100px 20px 20px"
      }}>
          <p>{t("story.header_playground_desc")}</p>
          <p>{t("story.header_control_desc")}</p>
        </div>
      </div>;
  }
}`,...i.parameters?.docs?.source}}};const y=["Default","Bordered","Glass","Sticky","Playground"],m=Object.freeze(Object.defineProperty({__proto__:null,Bordered:o,Default:a,Glass:s,Playground:i,Sticky:d,__namedExportsOrder:y,default:g},Symbol.toStringTag,{value:"Module"}));export{o as B,a as D,s as G,m as H,i as P,d as S};
