import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as j}from"./iframe-D4gOfWnt.js";import{c as _}from"./index-Cl0yRb9X.js";import{B as n}from"./Badge-BhZOzjNC.js";import{G as u}from"./Group-ClC-fEu8.js";import{u as l}from"./useTranslation-BONq47qB.js";const s=({duration:o=20,reverse:r=!1,pauseOnHover:m=!0,vertical:p=!1,repeat:y=2,className:g,children:f,style:h,...q})=>{const x=e.jsx("div",{className:_("wim-marquee__content",{"wim-marquee__content--reverse":r,"wim-marquee__content--vertical":p}),children:f});return e.jsx("div",{className:_("wim-marquee",g),style:{"--duration":`${o}s`,"--pause-on-hover":m?"paused":"running",...h},...q,children:Array.from({length:y}).map((w,v)=>e.jsx(j.Fragment,{children:x},v))})};s.__docgenInfo={description:"テキストや画像を水平・垂直方向にスクロールさせるためのアニメーションコンポーネント。",methods:[],displayName:"Marquee",props:{duration:{required:!1,tsType:{name:"number"},description:"アニメーションの速度（秒）。デフォルトは `20`。",defaultValue:{value:"20",computed:!1}},reverse:{required:!1,tsType:{name:"boolean"},description:"アニメーションを逆方向にするかどうか。",defaultValue:{value:"false",computed:!1}},pauseOnHover:{required:!1,tsType:{name:"boolean"},description:"ホバー時にアニメーションを一時停止するかどうか。",defaultValue:{value:"true",computed:!1}},vertical:{required:!1,tsType:{name:"boolean"},description:"垂直方向に流すかどうか。",defaultValue:{value:"false",computed:!1}},repeat:{required:!1,tsType:{name:"number"},description:"コンテンツの繰り返し回数。シームレスなループのために調整が必要な場合があります。デフォルトは `2`。",defaultValue:{value:"2",computed:!1}}}};const b={title:"Components/Utilities/Marquee",component:s},t={render:o=>{const{t:r}=l(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(s,{...o,children:e.jsxs(u,{gap:"xl",children:[e.jsx(n,{color:"primary",children:r("story_marquee_new_feature")}),e.jsx("span",{style:{fontSize:"1.2rem",fontWeight:"bold"},children:r("story_marquee_welcome")}),e.jsx(n,{color:"secondary",children:r("story_marquee_update")}),e.jsx("span",{style:{fontSize:"1.2rem",fontWeight:"bold"},children:r("story_marquee_check_out")})]})})}},a={args:{duration:5},render:o=>{const{t:r}=l(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(s,{...o,children:e.jsxs(u,{gap:"xl",children:[e.jsx(n,{color:"primary",children:r("story_marquee_new_feature")}),e.jsx("span",{style:{fontSize:"1.2rem",fontWeight:"bold"},children:r("story_marquee_welcome")}),e.jsx(n,{color:"secondary",children:r("story_marquee_update")}),e.jsx("span",{style:{fontSize:"1.2rem",fontWeight:"bold"},children:r("story_marquee_check_out")})]})})}},c={args:{duration:40},render:o=>{const{t:r}=l(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(s,{...o,children:e.jsxs(u,{gap:"xl",children:[e.jsx(n,{color:"primary",children:r("story_marquee_new_feature")}),e.jsx("span",{style:{fontSize:"1.2rem",fontWeight:"bold"},children:r("story_marquee_welcome")}),e.jsx(n,{color:"secondary",children:r("story_marquee_update")}),e.jsx("span",{style:{fontSize:"1.2rem",fontWeight:"bold"},children:r("story_marquee_check_out")})]})})}},d={args:{reverse:!0},render:o=>{const{t:r}=l(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(s,{...o,children:e.jsxs(u,{gap:"xl",children:[e.jsx(n,{color:"primary",children:r("story_marquee_new_feature")}),e.jsx("span",{style:{fontSize:"1.2rem",fontWeight:"bold"},children:r("story_marquee_welcome")}),e.jsx(n,{color:"secondary",children:r("story_marquee_update")}),e.jsx("span",{style:{fontSize:"1.2rem",fontWeight:"bold"},children:r("story_marquee_check_out")})]})})}},i={render:o=>{const{t:r}=l(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx("div",{style:{height:"200px",border:"1px solid #ccc"},children:e.jsxs(s,{...o,vertical:!0,duration:5,children:[e.jsx("div",{style:{padding:"10px",textAlign:"center",fontWeight:"bold"},children:r("story_marquee_item",{count:1})}),e.jsx("div",{style:{padding:"10px",textAlign:"center",fontWeight:"bold"},children:r("story_marquee_item",{count:2})}),e.jsx("div",{style:{padding:"10px",textAlign:"center",fontWeight:"bold"},children:r("story_marquee_item",{count:3})})]})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Marquee {...args}>\r
        <Group gap="xl">\r
          <Badge color="primary">{t("story_marquee_new_feature")}</Badge>\r
          <span style={{
          fontSize: "1.2rem",
          fontWeight: "bold"
        }}>\r
            {t("story_marquee_welcome")}\r
          </span>\r
          <Badge color="secondary">{t("story_marquee_update")}</Badge>\r
          <span style={{
          fontSize: "1.2rem",
          fontWeight: "bold"
        }}>\r
            {t("story_marquee_check_out")}\r
          </span>\r
        </Group>\r
      </Marquee>;
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    duration: 5
  },
  render: args => {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Marquee {...args}>\r
        <Group gap="xl">\r
          <Badge color="primary">{t("story_marquee_new_feature")}</Badge>\r
          <span style={{
          fontSize: "1.2rem",
          fontWeight: "bold"
        }}>\r
            {t("story_marquee_welcome")}\r
          </span>\r
          <Badge color="secondary">{t("story_marquee_update")}</Badge>\r
          <span style={{
          fontSize: "1.2rem",
          fontWeight: "bold"
        }}>\r
            {t("story_marquee_check_out")}\r
          </span>\r
        </Group>\r
      </Marquee>;
  }
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    duration: 40
  },
  render: args => {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Marquee {...args}>\r
        <Group gap="xl">\r
          <Badge color="primary">{t("story_marquee_new_feature")}</Badge>\r
          <span style={{
          fontSize: "1.2rem",
          fontWeight: "bold"
        }}>\r
            {t("story_marquee_welcome")}\r
          </span>\r
          <Badge color="secondary">{t("story_marquee_update")}</Badge>\r
          <span style={{
          fontSize: "1.2rem",
          fontWeight: "bold"
        }}>\r
            {t("story_marquee_check_out")}\r
          </span>\r
        </Group>\r
      </Marquee>;
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    reverse: true
  },
  render: args => {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Marquee {...args}>\r
        <Group gap="xl">\r
          <Badge color="primary">{t("story_marquee_new_feature")}</Badge>\r
          <span style={{
          fontSize: "1.2rem",
          fontWeight: "bold"
        }}>\r
            {t("story_marquee_welcome")}\r
          </span>\r
          <Badge color="secondary">{t("story_marquee_update")}</Badge>\r
          <span style={{
          fontSize: "1.2rem",
          fontWeight: "bold"
        }}>\r
            {t("story_marquee_check_out")}\r
          </span>\r
        </Group>\r
      </Marquee>;
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <div style={{
      height: "200px",
      border: "1px solid #ccc"
    }}>\r
        <Marquee {...args} vertical duration={5}>\r
          <div style={{
          padding: "10px",
          textAlign: "center",
          fontWeight: "bold"
        }}>\r
            {t("story_marquee_item", {
            count: 1
          })}\r
          </div>\r
          <div style={{
          padding: "10px",
          textAlign: "center",
          fontWeight: "bold"
        }}>\r
            {t("story_marquee_item", {
            count: 2
          })}\r
          </div>\r
          <div style={{
          padding: "10px",
          textAlign: "center",
          fontWeight: "bold"
        }}>\r
            {t("story_marquee_item", {
            count: 3
          })}\r
          </div>\r
        </Marquee>\r
      </div>;
  }
}`,...i.parameters?.docs?.source}}};const S=["Default","Fast","Slow","Reverse","Vertical"],k=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Fast:a,Reverse:d,Slow:c,Vertical:i,__namedExportsOrder:S,default:b},Symbol.toStringTag,{value:"Module"}));export{t as D,k as M};
