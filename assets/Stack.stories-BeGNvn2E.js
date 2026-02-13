import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as x}from"./iframe-DMgQDpBx.js";import{c as y}from"./index-MafWY-Pw.js";import{B as n}from"./Box-CUvTicz_.js";const w=r=>r==="start"?"flex-start":r==="end"?"flex-end":r,S=r=>r==="start"?"flex-start":r==="end"?"flex-end":r==="between"?"space-between":r==="around"?"space-around":r==="evenly"?"space-evenly":r,a=x.forwardRef(({direction:r="column",gap:m="md",align:l,justify:d,style:p,className:u,children:c,...f},g)=>{const b=t=>typeof t=="number"?`${t}px`:typeof t=="string"&&["3xs","2xs","xs","sm","md","lg","xl","2xl","3xl","4xl","5xl"].includes(t)?`var(--spacing-${t})`:t;return e.jsx(n,{ref:g,display:"flex",className:y("wim-stack",u),style:{flexDirection:r,gap:b(m),alignItems:w(l),justifyContent:S(d),...p},...f,children:c})});a.displayName="Stack";a.__docgenInfo={description:"Stack component is used to distribute space between elements in a vertical or horizontal layout.",methods:[],displayName:"Stack",props:{as:{required:!1,tsType:{name:"C"},description:"The component used for the root node. Either a string to use a HTML element or a component."},p:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Padding"},pt:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Padding top"},pr:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Padding right"},pb:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Padding bottom"},pl:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Padding left"},px:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Padding horizontal"},py:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Padding vertical"},m:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Margin"},mt:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Margin top"},mr:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Margin right"},mb:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Margin bottom"},ml:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Margin left"},mx:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Margin horizontal"},my:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Margin vertical"},bg:{required:!1,tsType:{name:"string"},description:"Background color"},w:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Width"},h:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Height"},radius:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Border radius"},shadow:{required:!1,tsType:{name:"string"},description:"Box shadow"},display:{required:!1,tsType:{name:'ReactCSSProperties["display"]',raw:'React.CSSProperties["display"]'},description:"Display"},position:{required:!1,tsType:{name:'ReactCSSProperties["position"]',raw:'React.CSSProperties["position"]'},description:"Position"},gap:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Gap between children. Can be a number (px) or a spacing token (e.g., 'sm', 'md', 'lg').",defaultValue:{value:'"md"',computed:!1}},direction:{required:!1,tsType:{name:"union",raw:'"row" | "column"',elements:[{name:"literal",value:'"row"'},{name:"literal",value:'"column"'}]},description:"Stack direction",defaultValue:{value:'"column"',computed:!1}},align:{required:!1,tsType:{name:"union",raw:'"start" | "center" | "end" | "stretch" | "baseline" | React.CSSProperties["alignItems"]',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"center"'},{name:"literal",value:'"end"'},{name:"literal",value:'"stretch"'},{name:"literal",value:'"baseline"'},{name:'ReactCSSProperties["alignItems"]',raw:'React.CSSProperties["alignItems"]'}]},description:"Align-items"},justify:{required:!1,tsType:{name:"union",raw:`| "start"\r
| "center"\r
| "end"\r
| "between"\r
| "around"\r
| "evenly"\r
| "stretch"\r
| React.CSSProperties["justifyContent"]`,elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"center"'},{name:"literal",value:'"end"'},{name:"literal",value:'"between"'},{name:"literal",value:'"around"'},{name:"literal",value:'"evenly"'},{name:"literal",value:'"stretch"'},{name:'ReactCSSProperties["justifyContent"]',raw:'React.CSSProperties["justifyContent"]'}]},description:"Justify-content"}}};const h={title:"Component/Layout/Stack",component:a,tags:[],argTypes:{direction:{control:"radio",options:["row","column"]},gap:{control:"select",options:["xs","sm","md","lg","xl",10,20,40]}}},s={args:{direction:"column",gap:"md",children:[e.jsx(n,{bg:"#eff6ff",p:20,radius:8,style:{border:"1px solid #3b82f6"},children:"Item 1"},"1"),e.jsx(n,{bg:"#f0fdf4",p:20,radius:8,style:{border:"1px solid #22c55e"},children:"Item 2"},"2"),e.jsx(n,{bg:"#fff7ed",p:20,radius:8,style:{border:"1px solid #f97316"},children:"Item 3"},"3")]}},i={args:{direction:"row",gap:"lg",children:[e.jsx(n,{bg:"#eff6ff",p:20,radius:8,style:{border:"1px solid #3b82f6"},children:"Item 1"},"1"),e.jsx(n,{bg:"#f0fdf4",p:20,radius:8,style:{border:"1px solid #22c55e"},children:"Item 2"},"2"),e.jsx(n,{bg:"#fff7ed",p:20,radius:8,style:{border:"1px solid #f97316"},children:"Item 3"},"3")]}},o={render:()=>e.jsxs(a,{gap:"xl",children:[e.jsx(n,{bg:"#f8fafc",p:10,children:"Gap: xl"}),e.jsxs(a,{direction:"row",gap:"xs",children:[e.jsx(n,{bg:"#eff6ff",p:10,children:"Gap: xs"}),e.jsx(n,{bg:"#eff6ff",p:10,children:"Gap: xs"}),e.jsx(n,{bg:"#eff6ff",p:10,children:"Gap: xs"})]}),e.jsxs(a,{direction:"row",gap:"lg",children:[e.jsx(n,{bg:"#f0fdf4",p:10,children:"Gap: lg"}),e.jsx(n,{bg:"#f0fdf4",p:10,children:"Gap: lg"}),e.jsx(n,{bg:"#f0fdf4",p:10,children:"Gap: lg"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    direction: "column",
    gap: "md",
    children: [<Box key="1" bg="#eff6ff" p={20} radius={8} style={{
      border: "1px solid #3b82f6"
    }}>Item 1</Box>, <Box key="2" bg="#f0fdf4" p={20} radius={8} style={{
      border: "1px solid #22c55e"
    }}>Item 2</Box>, <Box key="3" bg="#fff7ed" p={20} radius={8} style={{
      border: "1px solid #f97316"
    }}>Item 3</Box>]
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    direction: "row",
    gap: "lg",
    children: [<Box key="1" bg="#eff6ff" p={20} radius={8} style={{
      border: "1px solid #3b82f6"
    }}>Item 1</Box>, <Box key="2" bg="#f0fdf4" p={20} radius={8} style={{
      border: "1px solid #22c55e"
    }}>Item 2</Box>, <Box key="3" bg="#fff7ed" p={20} radius={8} style={{
      border: "1px solid #f97316"
    }}>Item 3</Box>]
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="xl">\r
            <Box bg="#f8fafc" p={10}>Gap: xl</Box>\r
            <Stack direction="row" gap="xs">\r
                <Box bg="#eff6ff" p={10}>Gap: xs</Box>\r
                <Box bg="#eff6ff" p={10}>Gap: xs</Box>\r
                <Box bg="#eff6ff" p={10}>Gap: xs</Box>\r
            </Stack>\r
            <Stack direction="row" gap="lg">\r
                <Box bg="#f0fdf4" p={10}>Gap: lg</Box>\r
                <Box bg="#f0fdf4" p={10}>Gap: lg</Box>\r
                <Box bg="#f0fdf4" p={10}>Gap: lg</Box>\r
            </Stack>\r
        </Stack>
}`,...o.parameters?.docs?.source}}};const T=["Default","Row","SpacingTokens"],C=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Row:i,SpacingTokens:o,__namedExportsOrder:T,default:h},Symbol.toStringTag,{value:"Module"}));export{s as D,i as R,C as S,o as a};
