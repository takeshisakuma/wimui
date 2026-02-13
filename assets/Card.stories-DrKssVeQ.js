import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as i}from"./index-Drm8gX_j.js";import{B as m}from"./Button-DixHeOuh.js";const a=({variant:r="elevated",padding:n="md",radius:t="md",as:h="div",className:y,children:v,...f})=>e.jsx(h,{className:i("wim-card",`wim-card--${r}`,`wim-card--padding-${n}`,`wim-card--radius-${t}`,y),...f,children:v}),p=({className:r,children:n,...t})=>e.jsx("div",{className:i("wim-card__header",r),...t,children:n}),c=({className:r,children:n,...t})=>e.jsx("div",{className:i("wim-card__body",r),...t,children:n}),u=({className:r,children:n,...t})=>e.jsx("div",{className:i("wim-card__footer",r),...t,children:n});a.Header=p;a.Body=c;a.Footer=u;a.__docgenInfo={description:"`Card` はコンテンツをグループ化して表示するためのコンテナコンポーネントです。",methods:[{name:"Header",docblock:null,modifiers:["static"],params:[{name:`{\r
    className,\r
    children,\r
    ...props\r
}: React.ComponentPropsWithoutRef<"div">`,optional:!1,type:{name:"ReactComponentPropsWithoutRef",raw:'React.ComponentPropsWithoutRef<"div">',elements:[{name:"literal",value:'"div"'}],alias:"React.ComponentPropsWithoutRef"}}],returns:null},{name:"Body",docblock:null,modifiers:["static"],params:[{name:`{\r
    className,\r
    children,\r
    ...props\r
}: React.ComponentPropsWithoutRef<"div">`,optional:!1,type:{name:"ReactComponentPropsWithoutRef",raw:'React.ComponentPropsWithoutRef<"div">',elements:[{name:"literal",value:'"div"'}],alias:"React.ComponentPropsWithoutRef"}}],returns:null},{name:"Footer",docblock:null,modifiers:["static"],params:[{name:`{\r
    className,\r
    children,\r
    ...props\r
}: React.ComponentPropsWithoutRef<"div">`,optional:!1,type:{name:"ReactComponentPropsWithoutRef",raw:'React.ComponentPropsWithoutRef<"div">',elements:[{name:"literal",value:'"div"'}],alias:"React.ComponentPropsWithoutRef"}}],returns:null}],displayName:"Card",props:{variant:{required:!1,tsType:{name:"union",raw:'"elevated" | "outline" | "flat"',elements:[{name:"literal",value:'"elevated"'},{name:"literal",value:'"outline"'},{name:"literal",value:'"flat"'}]},description:"カードのバリアント",defaultValue:{value:'"elevated"',computed:!1}},padding:{required:!1,tsType:{name:"union",raw:'"none" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"パディングのサイズ",defaultValue:{value:'"md"',computed:!1}},radius:{required:!1,tsType:{name:"union",raw:'"none" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"角丸のサイズ",defaultValue:{value:'"md"',computed:!1}},as:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"レンダリングするHTML要素",defaultValue:{value:'"div"',computed:!1}}}};p.__docgenInfo={description:"",methods:[],displayName:"CardHeader"};c.__docgenInfo={description:"",methods:[],displayName:"CardBody"};u.__docgenInfo={description:"",methods:[],displayName:"CardFooter"};const C={title:"Component/Data Display/Card",component:a,tags:[],parameters:{layout:"centered"},argTypes:{variant:{control:"select",options:["elevated","outline","flat"]},padding:{control:"select",options:["none","sm","md","lg"]},radius:{control:"select",options:["none","sm","md","lg"]}}},s={args:{variant:"elevated",children:e.jsxs(a.Body,{children:[e.jsx("h3",{children:"デフォルトカード"}),e.jsx("p",{children:"これは基本のカード（elevated）です。ホバーすると少し浮き上がります。"})]}),style:{width:"300px"}}},o={args:{variant:"outline",children:e.jsxs(a.Body,{children:[e.jsx("h3",{children:"アウトラインカード"}),e.jsx("p",{children:"枠線のみのシンプルなカードです。"})]}),style:{width:"300px"}}},l={args:{variant:"flat",children:e.jsxs(a.Body,{children:[e.jsx("h3",{children:"フラットカード"}),e.jsx("p",{children:"背景色のみで影のないカードです。"})]}),style:{width:"300px"}}},d={render:r=>e.jsxs(a,{...r,style:{width:"400px"},children:[e.jsx(a.Header,{children:e.jsx("h4",{style:{margin:0},children:"カードヘッダー"})}),e.jsx(a.Body,{children:e.jsx("p",{children:"ヘッダー、ボディ、フッターを組み合わせた構成です。 サブコンポーネントを使用することで柔軟にレイアウトを作成できます。"})}),e.jsx(a.Footer,{children:e.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"8px"},children:[e.jsx(m,{priority:"secondary",size:"small",label:"キャンセル"}),e.jsx(m,{priority:"primary",size:"small",label:"保存"})]})})]}),args:{variant:"elevated"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const x=["Default","Outline","Flat","WithHeaderAndFooter"],w=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Flat:l,Outline:o,WithHeaderAndFooter:d,__namedExportsOrder:x,default:C},Symbol.toStringTag,{value:"Module"}));export{w as C,s as D,l as F,o as O,d as W};
