import{j as e}from"./jsx-runtime-u17CrQMm.js";import{P as o}from"./index-DKSVcYve.js";const a=({variant:n="elevated",padding:r="md",radius:t="md",as:u="div",className:f="",children:v,...h})=>{const y=["wim-card",`wim-card--${n}`,`wim-card--padding-${r}`,`wim-card--radius-${t}`,f].filter(Boolean).join(" ");return e.jsx(u,{className:y,...h,children:v})},p=({className:n="",children:r,...t})=>e.jsx("div",{className:["wim-card__header",n].filter(Boolean).join(" "),...t,children:r}),m=({className:n="",children:r,...t})=>e.jsx("div",{className:["wim-card__body",n].filter(Boolean).join(" "),...t,children:r}),c=({className:n="",children:r,...t})=>e.jsx("div",{className:["wim-card__footer",n].filter(Boolean).join(" "),...t,children:r});a.Header=p;a.Body=m;a.Footer=c;a.propTypes={variant:o.oneOf(["elevated","outline","flat"]),padding:o.oneOf(["none","sm","md","lg"]),radius:o.oneOf(["none","sm","md","lg"]),as:o.elementType,className:o.string,children:o.node};a.__docgenInfo={description:"`Card` はコンテンツをグループ化して表示するためのコンテナコンポーネントです。",methods:[{name:"Header",docblock:null,modifiers:["static"],params:[{name:`{\r
    className = "",\r
    children,\r
    ...props\r
}: React.ComponentPropsWithoutRef<"div">`,optional:!1,type:{name:"ReactComponentPropsWithoutRef",raw:'React.ComponentPropsWithoutRef<"div">',elements:[{name:"literal",value:'"div"'}],alias:"React.ComponentPropsWithoutRef"}}],returns:null},{name:"Body",docblock:null,modifiers:["static"],params:[{name:`{\r
    className = "",\r
    children,\r
    ...props\r
}: React.ComponentPropsWithoutRef<"div">`,optional:!1,type:{name:"ReactComponentPropsWithoutRef",raw:'React.ComponentPropsWithoutRef<"div">',elements:[{name:"literal",value:'"div"'}],alias:"React.ComponentPropsWithoutRef"}}],returns:null},{name:"Footer",docblock:null,modifiers:["static"],params:[{name:`{\r
    className = "",\r
    children,\r
    ...props\r
}: React.ComponentPropsWithoutRef<"div">`,optional:!1,type:{name:"ReactComponentPropsWithoutRef",raw:'React.ComponentPropsWithoutRef<"div">',elements:[{name:"literal",value:'"div"'}],alias:"React.ComponentPropsWithoutRef"}}],returns:null}],displayName:"Card",props:{variant:{required:!1,tsType:{name:"union",raw:'"elevated" | "outline" | "flat"',elements:[{name:"literal",value:'"elevated"'},{name:"literal",value:'"outline"'},{name:"literal",value:'"flat"'}]},description:"カードのバリアント",defaultValue:{value:'"elevated"',computed:!1},type:{name:"enum",value:[{value:'"elevated"',computed:!1},{value:'"outline"',computed:!1},{value:'"flat"',computed:!1}]}},padding:{required:!1,tsType:{name:"union",raw:'"none" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"パディングのサイズ",defaultValue:{value:'"md"',computed:!1},type:{name:"enum",value:[{value:'"none"',computed:!1},{value:'"sm"',computed:!1},{value:'"md"',computed:!1},{value:'"lg"',computed:!1}]}},radius:{required:!1,tsType:{name:"union",raw:'"none" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"角丸のサイズ",defaultValue:{value:'"md"',computed:!1},type:{name:"enum",value:[{value:'"none"',computed:!1},{value:'"sm"',computed:!1},{value:'"md"',computed:!1},{value:'"lg"',computed:!1}]}},as:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"レンダリングするHTML要素",defaultValue:{value:'"div"',computed:!1},type:{name:"elementType"}},className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"node"},required:!1}}};p.__docgenInfo={description:"",methods:[],displayName:"CardHeader",props:{className:{defaultValue:{value:'""',computed:!1},required:!1}}};m.__docgenInfo={description:"",methods:[],displayName:"CardBody",props:{className:{defaultValue:{value:'""',computed:!1},required:!1}}};c.__docgenInfo={description:"",methods:[],displayName:"CardFooter",props:{className:{defaultValue:{value:'""',computed:!1},required:!1}}};const g={title:"Component/Content Containers/Card",component:a,tags:[],parameters:{layout:"centered"},argTypes:{variant:{control:"select",options:["elevated","outline","flat"]},padding:{control:"select",options:["none","sm","md","lg"]},radius:{control:"select",options:["none","sm","md","lg"]}}},l={args:{variant:"elevated",children:e.jsxs(a.Body,{children:[e.jsx("h3",{children:"デフォルトカード"}),e.jsx("p",{children:"これは基本のカード（elevated）です。ホバーすると少し浮き上がります。"})]}),style:{width:"300px"}}},s={args:{variant:"outline",children:e.jsxs(a.Body,{children:[e.jsx("h3",{children:"アウトラインカード"}),e.jsx("p",{children:"枠線のみのシンプルなカードです。"})]}),style:{width:"300px"}}},d={args:{variant:"flat",children:e.jsxs(a.Body,{children:[e.jsx("h3",{children:"フラットカード"}),e.jsx("p",{children:"背景色のみで影のないカードです。"})]}),style:{width:"300px"}}},i={render:n=>e.jsxs(a,{...n,style:{width:"400px"},children:[e.jsx(a.Header,{children:e.jsx("h4",{style:{margin:0},children:"カードヘッダー"})}),e.jsx(a.Body,{children:e.jsx("p",{children:"ヘッダー、ボディ、フッターを組み合わせた構成です。 サブコンポーネントを使用することで柔軟にレイアウトを作成できます。"})}),e.jsx(a.Footer,{children:e.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"8px"},children:[e.jsx("button",{children:"キャンセル"}),e.jsx("button",{style:{backgroundColor:"var(--color-primary)",color:"white",border:"none",padding:"4px 12px",borderRadius:"4px"},children:"保存"})]})})]}),args:{variant:"elevated"}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
                    <button>キャンセル</button>\r
                    <button style={{
          backgroundColor: "var(--color-primary)",
          color: "white",
          border: "none",
          padding: "4px 12px",
          borderRadius: "4px"
        }}>\r
                        保存\r
                    </button>\r
                </div>\r
            </Card.Footer>\r
        </Card>,
  args: {
    variant: "elevated"
  }
}`,...i.parameters?.docs?.source}}};const x=["Default","Outline","Flat","WithHeaderAndFooter"],R=Object.freeze(Object.defineProperty({__proto__:null,Default:l,Flat:d,Outline:s,WithHeaderAndFooter:i,__namedExportsOrder:x,default:g},Symbol.toStringTag,{value:"Module"}));export{R as C,l as D,d as F,s as O,i as W};
