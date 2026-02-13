import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as h}from"./iframe-BbDYKtlj.js";import{c as B}from"./index-Bp4MVLTo.js";const d=h.forwardRef(({cols:n,rows:t,gap:o,columnGap:l,rowGap:i,align:c,justify:m,flow:u,inline:p=!1,className:f,style:x,children:g,...b},y)=>{const w={display:p?"inline-grid":"grid",gridTemplateColumns:typeof n=="number"?`repeat(${n}, minmax(0, 1fr))`:n,gridTemplateRows:typeof t=="number"?`repeat(${t}, minmax(0, 1fr))`:t,gap:typeof o=="number"?`${o}px`:o,columnGap:typeof l=="number"?`${l}px`:l,rowGap:typeof i=="number"?`${i}px`:i,alignItems:c,justifyContent:m==="between"?"space-between":m==="around"?"space-around":m,gridAutoFlow:u,...x};return e.jsx("div",{ref:y,className:B("wim-grid",f),style:w,...b,children:g})});d.displayName="Grid";d.__docgenInfo={description:"",methods:[],displayName:"Grid",props:{cols:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},rows:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},gap:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},columnGap:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},rowGap:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},align:{required:!1,tsType:{name:"union",raw:'"start" | "center" | "end" | "stretch"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"center"'},{name:"literal",value:'"end"'},{name:"literal",value:'"stretch"'}]},description:""},justify:{required:!1,tsType:{name:"union",raw:'"start" | "center" | "end" | "between" | "around" | "stretch"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"center"'},{name:"literal",value:'"end"'},{name:"literal",value:'"between"'},{name:"literal",value:'"around"'},{name:"literal",value:'"stretch"'}]},description:""},flow:{required:!1,tsType:{name:"union",raw:'"row" | "column" | "dense" | "row dense" | "column dense"',elements:[{name:"literal",value:'"row"'},{name:"literal",value:'"column"'},{name:"literal",value:'"dense"'},{name:"literal",value:'"row dense"'},{name:"literal",value:'"column dense"'}]},description:""},inline:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const j={title:"Component/Layout/Grid",component:d,tags:[],argTypes:{cols:{control:"text"},rows:{control:"text"},gap:{control:"text"},align:{control:"select",options:["start","center","end","stretch"]},justify:{control:"select",options:["start","center","end","between","around","stretch"]},flow:{control:"select",options:["row","column","dense","row dense","column dense"]}}},r=({children:n,color:t="#3b82f6"})=>e.jsx("div",{style:{backgroundColor:t,color:"white",padding:"20px",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"bold"},children:n}),a={args:{cols:3,gap:16,children:e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"1"}),e.jsx(r,{children:"2"}),e.jsx(r,{children:"3"}),e.jsx(r,{children:"4"}),e.jsx(r,{children:"5"}),e.jsx(r,{children:"6"})]})}},s={args:{cols:"1fr 2fr 1fr",gap:"1rem",children:e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"1fr"}),e.jsx(r,{children:"2fr"}),e.jsx(r,{children:"1fr"})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    cols: 3,
    gap: 16,
    children: <>\r
                <Box>1</Box>\r
                <Box>2</Box>\r
                <Box>3</Box>\r
                <Box>4</Box>\r
                <Box>5</Box>\r
                <Box>6</Box>\r
            </>
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    cols: "1fr 2fr 1fr",
    gap: "1rem",
    children: <>\r
                <Box>1fr</Box>\r
                <Box>2fr</Box>\r
                <Box>1fr</Box>\r
            </>
  }
}`,...s.parameters?.docs?.source}}};const v=["Basic","CustomColumns"],_=Object.freeze(Object.defineProperty({__proto__:null,Basic:a,CustomColumns:s,__namedExportsOrder:v,default:j},Symbol.toStringTag,{value:"Module"}));export{a as B,s as C,_ as G};
