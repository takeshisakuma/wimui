import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as b}from"./iframe-BisTGuVC.js";import{c as m}from"./index-Ckw0h7AD.js";import{B as t}from"./Badge-C8x5xURE.js";import{G as u}from"./Group-CFZmsefu.js";import{u as i}from"./useTranslation-BH3LN071.js";const o=({duration:n=20,reverse:r=!1,pauseOnHover:p=!0,vertical:_=!1,repeat:g=2,className:y,children:f,style:h,...q})=>{const x=e.jsx("div",{className:m("wim-marquee__content",{"wim-marquee__content--reverse":r,"wim-marquee__content--vertical":_}),children:f});return e.jsx("div",{className:m("wim-marquee",y),style:{"--duration":`${n}s`,"--pause-on-hover":p?"paused":"running",...h},...q,children:Array.from({length:g}).map((w,j)=>e.jsx(b.Fragment,{children:x},j))})};o.__docgenInfo={description:"テキストや画像を水平・垂直方向にスクロールさせるためのアニメーションコンポーネント。",methods:[],displayName:"Marquee",props:{duration:{required:!1,tsType:{name:"number"},description:"アニメーションの速度（秒）。デフォルトは `20`。",defaultValue:{value:"20",computed:!1}},reverse:{required:!1,tsType:{name:"boolean"},description:"アニメーションを逆方向にするかどうか。",defaultValue:{value:"false",computed:!1}},pauseOnHover:{required:!1,tsType:{name:"boolean"},description:"ホバー時にアニメーションを一時停止するかどうか。",defaultValue:{value:"true",computed:!1}},vertical:{required:!1,tsType:{name:"boolean"},description:"垂直方向に流すかどうか。",defaultValue:{value:"false",computed:!1}},repeat:{required:!1,tsType:{name:"number"},description:"コンテンツの繰り返し回数。シームレスなループのために調整が必要な場合があります。デフォルトは `2`。",defaultValue:{value:"2",computed:!1}}}};const v={title:"Components/Utilities/Marquee",component:o},s={render:n=>{const{t:r}=i(["docs","common","components"]);return e.jsx(o,{...n,children:e.jsxs(u,{gap:"xl",children:[e.jsx(t,{color:"primary",children:r("story_marquee_new_feature")}),e.jsx("span",{style:{fontSize:"1.2rem",fontWeight:"bold"},children:r("story_marquee_welcome")}),e.jsx(t,{color:"secondary",children:r("story_marquee_update")}),e.jsx("span",{style:{fontSize:"1.2rem",fontWeight:"bold"},children:r("story_marquee_check_out")})]})})}},a={args:{duration:5},render:n=>{const{t:r}=i(["docs","common","components"]);return e.jsx(o,{...n,children:e.jsxs(u,{gap:"xl",children:[e.jsx(t,{color:"primary",children:r("story_marquee_new_feature")}),e.jsx("span",{style:{fontSize:"1.2rem",fontWeight:"bold"},children:r("story_marquee_welcome")}),e.jsx(t,{color:"secondary",children:r("story_marquee_update")}),e.jsx("span",{style:{fontSize:"1.2rem",fontWeight:"bold"},children:r("story_marquee_check_out")})]})})}},c={args:{duration:40},render:n=>{const{t:r}=i(["docs","common","components"]);return e.jsx(o,{...n,children:e.jsxs(u,{gap:"xl",children:[e.jsx(t,{color:"primary",children:r("story_marquee_new_feature")}),e.jsx("span",{style:{fontSize:"1.2rem",fontWeight:"bold"},children:r("story_marquee_welcome")}),e.jsx(t,{color:"secondary",children:r("story_marquee_update")}),e.jsx("span",{style:{fontSize:"1.2rem",fontWeight:"bold"},children:r("story_marquee_check_out")})]})})}},d={args:{reverse:!0},render:n=>{const{t:r}=i(["docs","common","components"]);return e.jsx(o,{...n,children:e.jsxs(u,{gap:"xl",children:[e.jsx(t,{color:"primary",children:r("story_marquee_new_feature")}),e.jsx("span",{style:{fontSize:"1.2rem",fontWeight:"bold"},children:r("story_marquee_welcome")}),e.jsx(t,{color:"secondary",children:r("story_marquee_update")}),e.jsx("span",{style:{fontSize:"1.2rem",fontWeight:"bold"},children:r("story_marquee_check_out")})]})})}},l={render:n=>{const{t:r}=i(["docs","common","components"]);return e.jsx("div",{style:{height:"200px",border:"1px solid #ccc"},children:e.jsxs(o,{...n,vertical:!0,duration:5,children:[e.jsx("div",{style:{padding:"10px",textAlign:"center",fontWeight:"bold"},children:r("story_marquee_item",{count:1})}),e.jsx("div",{style:{padding:"10px",textAlign:"center",fontWeight:"bold"},children:r("story_marquee_item",{count:2})}),e.jsx("div",{style:{padding:"10px",textAlign:"center",fontWeight:"bold"},children:r("story_marquee_item",{count:3})})]})})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    duration: 5
  },
  render: args => {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
    } = useTranslation(["docs", "common", "components"]);
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
    } = useTranslation(["docs", "common", "components"]);
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
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,...l.parameters?.docs?.source}}};const S=["Default","Fast","Slow","Reverse","Vertical"],k=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Fast:a,Reverse:d,Slow:c,Vertical:l,__namedExportsOrder:S,default:v},Symbol.toStringTag,{value:"Module"}));export{s as D,k as M};
