import{j as r}from"./jsx-runtime-u17CrQMm.js";import{C as e}from"./Card-XQ4WPRl0.js";import{B as d}from"./Button-Br8ONUgx.js";const l={title:"Component/Data Display/Card",component:e,tags:[],parameters:{layout:"centered"},argTypes:{variant:{control:"select",options:["elevated","outline","flat"]},padding:{control:"select",options:["none","sm","md","lg"]},radius:{control:"select",options:["none","sm","md","lg"]}}},n={args:{variant:"elevated",children:r.jsxs(e.Body,{children:[r.jsx("h3",{children:"デフォルトカード"}),r.jsx("p",{children:"これは基本のカード（elevated）です。ホバーすると少し浮き上がります。"})]}),style:{width:"300px"}}},a={args:{variant:"outline",children:r.jsxs(e.Body,{children:[r.jsx("h3",{children:"アウトラインカード"}),r.jsx("p",{children:"枠線のみのシンプルなカードです。"})]}),style:{width:"300px"}}},t={args:{variant:"flat",children:r.jsxs(e.Body,{children:[r.jsx("h3",{children:"フラットカード"}),r.jsx("p",{children:"背景色のみで影のないカードです。"})]}),style:{width:"300px"}}},s={render:o=>r.jsxs(e,{...o,style:{width:"400px"},children:[r.jsx(e.Header,{children:r.jsx("h4",{style:{margin:0},children:"カードヘッダー"})}),r.jsx(e.Body,{children:r.jsx("p",{children:"ヘッダー、ボディ、フッターを組み合わせた構成です。 サブコンポーネントを使用することで柔軟にレイアウトを作成できます。"})}),r.jsx(e.Footer,{children:r.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"8px"},children:[r.jsx(d,{priority:"secondary",size:"small",label:"キャンセル"}),r.jsx(d,{priority:"primary",size:"small",label:"保存"})]})})]}),args:{variant:"elevated"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "elevated",
    children: <Card.Body>\r
                <h3>デフォルトカード</h3>\r
                <p>これは基本のカード（elevated）です。ホバーすると少し浮き上がります。</p>\r
            </Card.Body>,
    style: {
      width: "300px"
    }
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    children: <Card.Body>\r
                <h3>アウトラインカード</h3>\r
                <p>枠線のみのシンプルなカードです。</p>\r
            </Card.Body>,
    style: {
      width: "300px"
    }
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "flat",
    children: <Card.Body>\r
                <h3>フラットカード</h3>\r
                <p>背景色のみで影のないカードです。</p>\r
            </Card.Body>,
    style: {
      width: "300px"
    }
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <Card {...args} style={{
    width: "400px"
  }}>\r
            <Card.Header>\r
                <h4 style={{
        margin: 0
      }}>カードヘッダー</h4>\r
            </Card.Header>\r
            <Card.Body>\r
                <p>\r
                    ヘッダー、ボディ、フッターを組み合わせた構成です。\r
                    サブコンポーネントを使用することで柔軟にレイアウトを作成できます。\r
                </p>\r
            </Card.Body>\r
            <Card.Footer>\r
                <div style={{
        display: "flex",
        justifyContent: "flex-end",
        gap: "8px"
      }}>\r
                    <Button priority="secondary" size="small" label="キャンセル" />\r
                    <Button priority="primary" size="small" label="保存" />\r
                </div>\r
            </Card.Footer>\r
        </Card>,
  args: {
    variant: "elevated"
  }
}`,...s.parameters?.docs?.source}}};const i=["Default","Outline","Flat","WithHeaderAndFooter"],m=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Flat:t,Outline:a,WithHeaderAndFooter:s,__namedExportsOrder:i,default:l},Symbol.toStringTag,{value:"Module"}));export{m as C,n as D,t as F,a as O,s as W};
