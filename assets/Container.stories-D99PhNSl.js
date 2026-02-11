import{j as n}from"./jsx-runtime-u17CrQMm.js";import{R as g}from"./iframe-BdHo9cuV.js";import{P as r}from"./index-BxUS1-Uu.js";import{B as o}from"./Box-rZQK8Bap.js";const b={xs:"540px",sm:"720px",md:"960px",lg:"1140px",xl:"1320px"},i=g.forwardRef(({size:e="lg",fluid:m=!1,style:l,className:d,children:u,...p},c)=>{const f=m?"100%":b[e]||(typeof e=="number"?`${e}px`:e);return n.jsx(o,{ref:c,className:["wim-container",d].filter(Boolean).join(" "),mx:"auto",w:"100%",style:{maxWidth:f,...l},...p,children:u})});i.displayName="Container";i.propTypes={size:r.oneOfType([r.oneOf(["xs","sm","md","lg","xl"]),r.number,r.string]),fluid:r.bool};i.__docgenInfo={description:"Container component is used to center content horizontally and limit its maximum width.",methods:[],displayName:"Container",props:{as:{required:!1,tsType:{name:"C"},description:"The component used for the root node. Either a string to use a HTML element or a component."},p:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Padding"},pt:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Padding top"},pr:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Padding right"},pb:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Padding bottom"},pl:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Padding left"},px:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Padding horizontal"},py:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Padding vertical"},m:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Margin"},mt:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Margin top"},mr:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Margin right"},mb:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Margin bottom"},ml:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Margin left"},mx:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Margin horizontal"},my:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Margin vertical"},bg:{required:!1,tsType:{name:"string"},description:"Background color"},w:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Width"},h:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Height"},radius:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Border radius"},shadow:{required:!1,tsType:{name:"string"},description:"Box shadow"},display:{required:!1,tsType:{name:'ReactCSSProperties["display"]',raw:'React.CSSProperties["display"]'},description:"Display"},position:{required:!1,tsType:{name:'ReactCSSProperties["position"]',raw:'React.CSSProperties["position"]'},description:"Position"},size:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg" | "xl" | number | string',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'},{name:"number"},{name:"string"}]},description:"Container max-width",defaultValue:{value:'"lg"',computed:!1},type:{name:"union",value:[{name:"enum",value:[{value:'"xs"',computed:!1},{value:'"sm"',computed:!1},{value:'"md"',computed:!1},{value:'"lg"',computed:!1},{value:'"xl"',computed:!1}]},{name:"number"},{name:"string"}]}},fluid:{required:!1,tsType:{name:"boolean"},description:"Whether the container should be fluid (100% width)",defaultValue:{value:"false",computed:!1},type:{name:"bool"}}}};const x={title:"Layout/Container",component:i,tags:[],argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl"]}}},a={args:{children:n.jsx(o,{bg:"#f0f0f0",p:20,style:{border:"1px solid #ccc"},children:"Container content"}),bg:"#f9f9f9"}},t={render:()=>n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:["xs","sm","md","lg","xl"].map(e=>n.jsx(i,{size:e,bg:"#f8fafc",p:10,children:n.jsxs(o,{bg:"#eff6ff",p:10,style:{textAlign:"center",border:"1px dashed #3b82f6"},children:["Size: ",e]})},e))})},s={args:{fluid:!0,bg:"#f8fafc",children:n.jsx(o,{bg:"#eff6ff",p:20,style:{textAlign:"center",border:"1px dashed #3b82f6"},children:"Fluid Container (100% width)"})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Box bg="#f0f0f0" p={20} style={{
      border: "1px solid #ccc"
    }}>\r
                Container content\r
            </Box>,
    bg: "#f9f9f9"
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  }}>\r
            {(["xs", "sm", "md", "lg", "xl"] as const).map(size => <Container key={size} size={size} bg="#f8fafc" p={10}>\r
                    <Box bg="#eff6ff" p={10} style={{
        textAlign: "center",
        border: "1px dashed #3b82f6"
      }}>\r
                        Size: {size}\r
                    </Box>\r
                </Container>)}\r
        </div>
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    fluid: true,
    bg: "#f8fafc",
    children: <Box bg="#eff6ff" p={20} style={{
      textAlign: "center",
      border: "1px dashed #3b82f6"
    }}>\r
                Fluid Container (100% width)\r
            </Box>
  }
}`,...s.parameters?.docs?.source}}};const y=["Default","Sizes","Fluid"],S=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Fluid:s,Sizes:t,__namedExportsOrder:y,default:x},Symbol.toStringTag,{value:"Module"}));export{S as C,a as D,s as F,t as S};
