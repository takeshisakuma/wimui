import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as f}from"./iframe-BmbQ4tjy.js";import{c as b}from"./index-CmpatR6L.js";import{g as j}from"./grid-utils-0MLss220.js";const m=f.forwardRef(({cols:l=1,spacing:n=16,verticalSpacing:i,minChildWidth:t,className:d,style:x,children:c,...p},u)=>{const g=j(l,"--wim-simple-grid-cols",h=>`repeat(${h}, minmax(0, 1fr))`),B={display:"grid",gap:typeof n=="number"?`${n}px`:n,rowGap:i?typeof i=="number"?`${i}px`:i:typeof n=="number"?`${n}px`:n,gridTemplateColumns:t?`repeat(auto-fill, minmax(${typeof t=="number"?`${t}px`:t}, 1fr))`:void 0,...g,...x};return e.jsx("div",{ref:u,className:b("wim-simple-grid",d),style:B,...p,children:c})});m.displayName="SimpleGrid";m.__docgenInfo={description:"",methods:[],displayName:"SimpleGrid",props:{cols:{required:!1,tsType:{name:"union",raw:`| T\r
| {\r
    base?: T;\r
    sm?: T;\r
    md?: T;\r
    lg?: T;\r
    xl?: T;\r
}`,elements:[{name:"number"},{name:"signature",type:"object",raw:`{\r
    base?: T;\r
    sm?: T;\r
    md?: T;\r
    lg?: T;\r
    xl?: T;\r
}`,signature:{properties:[{key:"base",value:{name:"number",required:!1}},{key:"sm",value:{name:"number",required:!1}},{key:"md",value:{name:"number",required:!1}},{key:"lg",value:{name:"number",required:!1}},{key:"xl",value:{name:"number",required:!1}}]}}]},description:"",defaultValue:{value:"1",computed:!1}},spacing:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"16",computed:!1}},verticalSpacing:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},minChildWidth:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""}}};const y={title:"Component/Layout/SimpleGrid",component:m,tags:[],argTypes:{cols:{control:"object"},spacing:{control:"text"},minChildWidth:{control:"text"}}},r=({children:l})=>e.jsx("div",{style:{backgroundColor:"#10b981",color:"white",padding:"20px",borderRadius:"8px",textAlign:"center",fontWeight:"bold"},children:l}),s={args:{cols:3,spacing:"md",children:e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"1"}),e.jsx(r,{children:"2"}),e.jsx(r,{children:"3"}),e.jsx(r,{children:"4"}),e.jsx(r,{children:"5"})]})}},o={args:{minChildWidth:200,spacing:16,children:e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"Min 200px"}),e.jsx(r,{children:"Min 200px"}),e.jsx(r,{children:"Min 200px"}),e.jsx(r,{children:"Min 200px"}),e.jsx(r,{children:"Min 200px"})]})}},a={args:{cols:{base:1,sm:2,md:3,lg:4},spacing:16,children:e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"1"}),e.jsx(r,{children:"2"}),e.jsx(r,{children:"3"}),e.jsx(r,{children:"4"}),e.jsx(r,{children:"5"}),e.jsx(r,{children:"6"}),e.jsx(r,{children:"7"}),e.jsx(r,{children:"8"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    cols: 3,
    spacing: "md",
    children: <>\r
                <Box>1</Box>\r
                <Box>2</Box>\r
                <Box>3</Box>\r
                <Box>4</Box>\r
                <Box>5</Box>\r
            </>
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    minChildWidth: 200,
    spacing: 16,
    children: <>\r
                <Box>Min 200px</Box>\r
                <Box>Min 200px</Box>\r
                <Box>Min 200px</Box>\r
                <Box>Min 200px</Box>\r
                <Box>Min 200px</Box>\r
            </>
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    cols: {
      base: 1,
      sm: 2,
      md: 3,
      lg: 4
    },
    spacing: 16,
    children: <>\r
                <Box>1</Box>\r
                <Box>2</Box>\r
                <Box>3</Box>\r
                <Box>4</Box>\r
                <Box>5</Box>\r
                <Box>6</Box>\r
                <Box>7</Box>\r
                <Box>8</Box>\r
            </>
  }
}`,...a.parameters?.docs?.source}}};const T=["FixedColumns","ResponsiveAuto","ResponsiveBreakpoints"],w=Object.freeze(Object.defineProperty({__proto__:null,FixedColumns:s,ResponsiveAuto:o,ResponsiveBreakpoints:a,__namedExportsOrder:T,default:y},Symbol.toStringTag,{value:"Module"}));export{s as F,o as R,w as S,a};
