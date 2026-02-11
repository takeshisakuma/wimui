import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as f}from"./iframe-s_RWuztI.js";import{P as n}from"./index-BGRTG6NI.js";const m=f.forwardRef(({cols:p=1,spacing:o=16,verticalSpacing:t,minChildWidth:a,className:l,style:d,children:x,...c},u)=>{const g={display:"grid",gap:typeof o=="number"?`${o}px`:o,rowGap:t?typeof t=="number"?`${t}px`:t:typeof o=="number"?`${o}px`:o,gridTemplateColumns:a?`repeat(auto-fill, minmax(${typeof a=="number"?`${a}px`:a}, 1fr))`:`repeat(${p}, minmax(0, 1fr))`,...d};return e.jsx("div",{ref:u,className:["wim-simple-grid",l].filter(Boolean).join(" "),style:g,...c,children:x})});m.displayName="SimpleGrid";m.propTypes={cols:n.number,spacing:n.oneOfType([n.number,n.string]),verticalSpacing:n.oneOfType([n.number,n.string]),minChildWidth:n.oneOfType([n.number,n.string])};m.__docgenInfo={description:"",methods:[],displayName:"SimpleGrid",props:{cols:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1},type:{name:"number"}},spacing:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"16",computed:!1},type:{name:"union",value:[{name:"number"},{name:"string"}]}},verticalSpacing:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",type:{name:"union",value:[{name:"number"},{name:"string"}]}},minChildWidth:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",type:{name:"union",value:[{name:"number"},{name:"string"}]}}}};const y={title:"Layout/SimpleGrid",component:m,tags:[],argTypes:{cols:{control:{type:"number",min:1,max:12}},spacing:{control:"text"},minChildWidth:{control:"text"}}},r=({children:p})=>e.jsx("div",{style:{backgroundColor:"#10b981",color:"white",padding:"20px",borderRadius:"8px",textAlign:"center",fontWeight:"bold"},children:p}),s={args:{cols:3,spacing:"md",children:e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"1"}),e.jsx(r,{children:"2"}),e.jsx(r,{children:"3"}),e.jsx(r,{children:"4"}),e.jsx(r,{children:"5"})]})}},i={args:{minChildWidth:200,spacing:16,children:e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"Min 200px"}),e.jsx(r,{children:"Min 200px"}),e.jsx(r,{children:"Min 200px"}),e.jsx(r,{children:"Min 200px"}),e.jsx(r,{children:"Min 200px"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const b=["FixedColumns","Responsive"],T=Object.freeze(Object.defineProperty({__proto__:null,FixedColumns:s,Responsive:i,__namedExportsOrder:b,default:y},Symbol.toStringTag,{value:"Module"}));export{s as F,i as R,T as S};
