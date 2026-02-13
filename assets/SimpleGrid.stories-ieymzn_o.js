import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as g}from"./iframe-BRQWL27F.js";import{c as f}from"./index-DWoaxWMs.js";const m=g.forwardRef(({cols:a=1,spacing:n=16,verticalSpacing:i,minChildWidth:t,className:l,style:d,children:p,...x},c)=>{const u={display:"grid",gap:typeof n=="number"?`${n}px`:n,rowGap:i?typeof i=="number"?`${i}px`:i:typeof n=="number"?`${n}px`:n,gridTemplateColumns:t?`repeat(auto-fill, minmax(${typeof t=="number"?`${t}px`:t}, 1fr))`:`repeat(${a}, minmax(0, 1fr))`,...d};return e.jsx("div",{ref:c,className:f("wim-simple-grid",l),style:u,...x,children:p})});m.displayName="SimpleGrid";m.__docgenInfo={description:"",methods:[],displayName:"SimpleGrid",props:{cols:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},spacing:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"16",computed:!1}},verticalSpacing:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},minChildWidth:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""}}};const h={title:"Component/Layout/SimpleGrid",component:m,tags:[],argTypes:{cols:{control:{type:"number",min:1,max:12}},spacing:{control:"text"},minChildWidth:{control:"text"}}},r=({children:a})=>e.jsx("div",{style:{backgroundColor:"#10b981",color:"white",padding:"20px",borderRadius:"8px",textAlign:"center",fontWeight:"bold"},children:a}),o={args:{cols:3,spacing:"md",children:e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"1"}),e.jsx(r,{children:"2"}),e.jsx(r,{children:"3"}),e.jsx(r,{children:"4"}),e.jsx(r,{children:"5"})]})}},s={args:{minChildWidth:200,spacing:16,children:e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"Min 200px"}),e.jsx(r,{children:"Min 200px"}),e.jsx(r,{children:"Min 200px"}),e.jsx(r,{children:"Min 200px"}),e.jsx(r,{children:"Min 200px"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const B=["FixedColumns","Responsive"],M=Object.freeze(Object.defineProperty({__proto__:null,FixedColumns:o,Responsive:s,__namedExportsOrder:B,default:h},Symbol.toStringTag,{value:"Module"}));export{o as F,s as R,M as S};
