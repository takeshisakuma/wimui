import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as b,A as u}from"./iframe-GzHoau5L.js";import{c as p}from"./index-DP26yAW4.js";import{B as t}from"./Badge-er48_M4L.js";import{G as m}from"./Group-C7vdsiaW.js";import{u as c}from"./useTranslation-Ckw9ivsw.js";const a=({duration:n=20,reverse:r=!1,pauseOnHover:g=!0,vertical:y=!1,repeat:f=2,className:_,children:h,style:q,...x})=>{const S=e.jsx("div",{className:p("wim-marquee__content",{"wim-marquee__content--reverse":r,"wim-marquee__content--vertical":y}),children:h});return e.jsx("div",{className:p("wim-marquee",_),style:{"--duration":`${n}s`,"--pause-on-hover":g?"paused":"running",...q},...x,children:Array.from({length:f}).map((w,j)=>e.jsx(b.Fragment,{children:S},j))})};a.__docgenInfo={description:"テキストや画像を水平・垂直方向にスクロールさせるためのアニメーションコンポーネント。",methods:[],displayName:"Marquee",props:{duration:{required:!1,tsType:{name:"number"},description:"アニメーションの速度（秒）。デフォルトは `20`。",defaultValue:{value:"20",computed:!1}},reverse:{required:!1,tsType:{name:"boolean"},description:"アニメーションを逆方向にするかどうか。",defaultValue:{value:"false",computed:!1}},pauseOnHover:{required:!1,tsType:{name:"boolean"},description:"ホバー時にアニメーションを一時停止するかどうか。",defaultValue:{value:"true",computed:!1}},vertical:{required:!1,tsType:{name:"boolean"},description:"垂直方向に流すかどうか。",defaultValue:{value:"false",computed:!1}},repeat:{required:!1,tsType:{name:"number"},description:"コンテンツの繰り返し回数。シームレスなループのために調整が必要な場合があります。デフォルトは `2`。",defaultValue:{value:"2",computed:!1}}}};const v={title:"Components/Utilities/Marquee",component:a},o={render:n=>{const{t:r}=c(u);return e.jsx(a,{...n,children:e.jsxs(m,{gap:"xl",children:[e.jsx(t,{color:"primary",children:r("story.marquee_new_feature")}),e.jsx("span",{style:{fontSize:"1.2rem",fontWeight:"bold"},children:r("story.marquee_welcome")}),e.jsx(t,{color:"secondary",children:r("story.marquee_update")}),e.jsx("span",{style:{fontSize:"1.2rem",fontWeight:"bold"},children:r("story.marquee_check_out")})]})})}},s={args:{duration:5},render:n=>{const{t:r}=c(u);return e.jsx(a,{...n,children:e.jsxs(m,{gap:"xl",children:[e.jsx(t,{color:"primary",children:r("story.marquee_new_feature")}),e.jsx("span",{style:{fontSize:"1.2rem",fontWeight:"bold"},children:r("story.marquee_welcome")}),e.jsx(t,{color:"secondary",children:r("story.marquee_update")}),e.jsx("span",{style:{fontSize:"1.2rem",fontWeight:"bold"},children:r("story.marquee_check_out")})]})})}},l={args:{duration:40},render:n=>{const{t:r}=c(u);return e.jsx(a,{...n,children:e.jsxs(m,{gap:"xl",children:[e.jsx(t,{color:"primary",children:r("story.marquee_new_feature")}),e.jsx("span",{style:{fontSize:"1.2rem",fontWeight:"bold"},children:r("story.marquee_welcome")}),e.jsx(t,{color:"secondary",children:r("story.marquee_update")}),e.jsx("span",{style:{fontSize:"1.2rem",fontWeight:"bold"},children:r("story.marquee_check_out")})]})})}},i={args:{reverse:!0},render:n=>{const{t:r}=c(u);return e.jsx(a,{...n,children:e.jsxs(m,{gap:"xl",children:[e.jsx(t,{color:"primary",children:r("story.marquee_new_feature")}),e.jsx("span",{style:{fontSize:"1.2rem",fontWeight:"bold"},children:r("story.marquee_welcome")}),e.jsx(t,{color:"secondary",children:r("story.marquee_update")}),e.jsx("span",{style:{fontSize:"1.2rem",fontWeight:"bold"},children:r("story.marquee_check_out")})]})})}},d={render:n=>{const{t:r}=c(u);return e.jsx("div",{style:{height:"200px",border:"1px solid #ccc"},children:e.jsxs(a,{...n,vertical:!0,duration:5,children:[e.jsx("div",{style:{padding:"10px",textAlign:"center",fontWeight:"bold"},children:r("story.marquee_item",{count:1})}),e.jsx("div",{style:{padding:"10px",textAlign:"center",fontWeight:"bold"},children:r("story.marquee_item",{count:2})}),e.jsx("div",{style:{padding:"10px",textAlign:"center",fontWeight:"bold"},children:r("story.marquee_item",{count:3})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Marquee {...args}>
        <Group gap="xl">
          <Badge color="primary">{t("story.marquee_new_feature")}</Badge>
          <span style={{
          fontSize: "1.2rem",
          fontWeight: "bold"
        }}>
            {t("story.marquee_welcome")}
          </span>
          <Badge color="secondary">{t("story.marquee_update")}</Badge>
          <span style={{
          fontSize: "1.2rem",
          fontWeight: "bold"
        }}>
            {t("story.marquee_check_out")}
          </span>
        </Group>
      </Marquee>;
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    duration: 5
  },
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Marquee {...args}>
        <Group gap="xl">
          <Badge color="primary">{t("story.marquee_new_feature")}</Badge>
          <span style={{
          fontSize: "1.2rem",
          fontWeight: "bold"
        }}>
            {t("story.marquee_welcome")}
          </span>
          <Badge color="secondary">{t("story.marquee_update")}</Badge>
          <span style={{
          fontSize: "1.2rem",
          fontWeight: "bold"
        }}>
            {t("story.marquee_check_out")}
          </span>
        </Group>
      </Marquee>;
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    duration: 40
  },
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Marquee {...args}>
        <Group gap="xl">
          <Badge color="primary">{t("story.marquee_new_feature")}</Badge>
          <span style={{
          fontSize: "1.2rem",
          fontWeight: "bold"
        }}>
            {t("story.marquee_welcome")}
          </span>
          <Badge color="secondary">{t("story.marquee_update")}</Badge>
          <span style={{
          fontSize: "1.2rem",
          fontWeight: "bold"
        }}>
            {t("story.marquee_check_out")}
          </span>
        </Group>
      </Marquee>;
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    reverse: true
  },
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Marquee {...args}>
        <Group gap="xl">
          <Badge color="primary">{t("story.marquee_new_feature")}</Badge>
          <span style={{
          fontSize: "1.2rem",
          fontWeight: "bold"
        }}>
            {t("story.marquee_welcome")}
          </span>
          <Badge color="secondary">{t("story.marquee_update")}</Badge>
          <span style={{
          fontSize: "1.2rem",
          fontWeight: "bold"
        }}>
            {t("story.marquee_check_out")}
          </span>
        </Group>
      </Marquee>;
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      height: "200px",
      border: "1px solid #ccc"
    }}>
        <Marquee {...args} vertical duration={5}>
          <div style={{
          padding: "10px",
          textAlign: "center",
          fontWeight: "bold"
        }}>
            {t("story.marquee_item", {
            count: 1
          })}
          </div>
          <div style={{
          padding: "10px",
          textAlign: "center",
          fontWeight: "bold"
        }}>
            {t("story.marquee_item", {
            count: 2
          })}
          </div>
          <div style={{
          padding: "10px",
          textAlign: "center",
          fontWeight: "bold"
        }}>
            {t("story.marquee_item", {
            count: 3
          })}
          </div>
        </Marquee>
      </div>;
  }
}`,...d.parameters?.docs?.source}}};const A=["Default","Fast","Slow","Reverse","Vertical"],T=Object.freeze(Object.defineProperty({__proto__:null,Default:o,Fast:s,Reverse:i,Slow:l,Vertical:d,__namedExportsOrder:A,default:v},Symbol.toStringTag,{value:"Module"}));export{o as D,T as M};
