import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as b}from"./iframe-CcyVdbW4.js";import{c as l}from"./index-C4AETLLZ.js";import{B as d}from"./Badge-DGpXxqGZ.js";import{G as j}from"./Group-BR4r8uGe.js";const i=({duration:o=20,reverse:c=!1,pauseOnHover:u=!0,vertical:p=!1,repeat:m=2,className:g,children:f,style:x,...h})=>{const v=e.jsx("div",{className:l("wim-marquee__content",{"wim-marquee__content--reverse":c,"wim-marquee__content--vertical":p}),children:f});return e.jsx("div",{className:l("wim-marquee",g),style:{"--duration":`${o}s`,"--pause-on-hover":u?"paused":"running",...x},...h,children:Array.from({length:m}).map((S,y)=>e.jsx(b.Fragment,{children:v},y))})};i.__docgenInfo={description:"テキストや画像を水平・垂直方向にスクロールさせるためのアニメーションコンポーネント。",methods:[],displayName:"Marquee",props:{duration:{required:!1,tsType:{name:"number"},description:"アニメーションの速度（秒）。デフォルトは `20`。",defaultValue:{value:"20",computed:!1}},reverse:{required:!1,tsType:{name:"boolean"},description:"アニメーションを逆方向にするかどうか。",defaultValue:{value:"false",computed:!1}},pauseOnHover:{required:!1,tsType:{name:"boolean"},description:"ホバー時にアニメーションを一時停止するかどうか。",defaultValue:{value:"true",computed:!1}},vertical:{required:!1,tsType:{name:"boolean"},description:"垂直方向に流すかどうか。",defaultValue:{value:"false",computed:!1}},repeat:{required:!1,tsType:{name:"number"},description:"コンテンツの繰り返し回数。シームレスなループのために調整が必要な場合があります。デフォルトは `2`。",defaultValue:{value:"2",computed:!1}}}};const q={title:"Components/Utilities/Marquee",component:i},r={args:{children:e.jsxs(j,{gap:"xl",children:[e.jsx(d,{color:"primary",children:"New Feature"}),e.jsx("span",{style:{fontSize:"1.2rem",fontWeight:"bold"},children:"Welcome to wimui! This is a flexible marquee component."}),e.jsx(d,{color:"secondary",children:"Update"}),e.jsx("span",{style:{fontSize:"1.2rem",fontWeight:"bold"},children:"Check out our latest components."})]})}},t={args:{...r.args,duration:5}},a={args:{...r.args,duration:40}},n={args:{...r.args,reverse:!0}},s={render:o=>e.jsx("div",{style:{height:"200px",border:"1px solid #ccc"},children:e.jsxs(i,{...o,vertical:!0,duration:5,children:[e.jsx("div",{style:{padding:"10px",textAlign:"center",fontWeight:"bold"},children:"Item 1"}),e.jsx("div",{style:{padding:"10px",textAlign:"center",fontWeight:"bold"},children:"Item 2"}),e.jsx("div",{style:{padding:"10px",textAlign:"center",fontWeight:"bold"},children:"Item 3"})]})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Group gap="xl">\r
                <Badge color="primary">New Feature</Badge>\r
                <span style={{
        fontSize: "1.2rem",
        fontWeight: "bold"
      }}>\r
                    Welcome to wimui! This is a flexible marquee component.\r
                </span>\r
                <Badge color="secondary">Update</Badge>\r
                <span style={{
        fontSize: "1.2rem",
        fontWeight: "bold"
      }}>\r
                    Check out our latest components.\r
                </span>\r
            </Group>
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    duration: 5
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    duration: 40
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    reverse: true
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    height: "200px",
    border: "1px solid #ccc"
  }}>\r
            <Marquee {...args} vertical duration={5}>\r
                <div style={{
        padding: "10px",
        textAlign: "center",
        fontWeight: "bold"
      }}>Item 1</div>\r
                <div style={{
        padding: "10px",
        textAlign: "center",
        fontWeight: "bold"
      }}>Item 2</div>\r
                <div style={{
        padding: "10px",
        textAlign: "center",
        fontWeight: "bold"
      }}>Item 3</div>\r
            </Marquee>\r
        </div>
}`,...s.parameters?.docs?.source}}};const _=["Default","Fast","Slow","Reverse","Vertical"],I=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Fast:t,Reverse:n,Slow:a,Vertical:s,__namedExportsOrder:_,default:q},Symbol.toStringTag,{value:"Module"}));export{r as D,I as M};
