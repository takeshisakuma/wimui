import{j as i}from"./jsx-runtime-u17CrQMm.js";import{R as o}from"./iframe-Ci_rN21J.js";import{c as l}from"./index-Bb6xnl8m.js";import{B as h}from"./Box-Ckm67Zko.js";const m=o.forwardRef(({columns:t=3,spacing:e=16,className:c,style:p,children:u,...g},d)=>{const y={columnCount:t,columnGap:typeof e=="number"?`${e}px`:e,...p},f={marginBottom:typeof e=="number"?`${e}px`:e};return i.jsx("div",{ref:d,className:l("wim-masonry",c),style:y,...g,children:o.Children.map(u,s=>{if(o.isValidElement(s)){const x=s.props.style||{};return o.cloneElement(s,{style:{...f,...x},className:l("wim-masonry-item",s.props.className)})}return s})})});m.displayName="Masonry";m.__docgenInfo={description:`Masonry layout component.\r
It arranges items in columns, filling in gaps to minimize empty space.`,methods:[],displayName:"Masonry",props:{columns:{required:!1,tsType:{name:"number"},description:"Number of columns",defaultValue:{value:"3",computed:!1}},spacing:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Spacing between items",defaultValue:{value:"16",computed:!1}}}};const b={title:"Component/Layout/Masonry",component:m,tags:[],argTypes:{columns:{control:{type:"number",min:1,max:10}},spacing:{control:{type:"number"}}}},S=[150,200,100,250,180,220,120,300,140,190],n={args:{columns:3,spacing:16,children:S.map((t,e)=>i.jsx(h,{bg:`hsl(${e*40}, 70%, 80%)`,radius:8,h:t,display:"flex",style:{alignItems:"center",justifyContent:"center",fontSize:"24px",fontWeight:"bold",color:`hsl(${e*40}, 70%, 30%)`},children:e+1},e))}},r={args:{...n.args,columns:5,spacing:10}},a={args:{...n.args,columns:3,spacing:40}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    columns: 3,
    spacing: 16,
    children: heights.map((height, index) => <Box key={index} bg={\`hsl(\${index * 40}, 70%, 80%)\`} radius={8} h={height} display="flex" style={{
      alignItems: "center",
      justifyContent: "center",
      fontSize: "24px",
      fontWeight: "bold",
      color: \`hsl(\${index * 40}, 70%, 30%)\`
    }}>\r
                {index + 1}\r
            </Box>)
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    columns: 5,
    spacing: 10
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    columns: 3,
    spacing: 40
  }
}`,...a.parameters?.docs?.source}}};const M=["Default","ManyColumns","LargeSpacing"],$=Object.freeze(Object.defineProperty({__proto__:null,Default:n,LargeSpacing:a,ManyColumns:r,__namedExportsOrder:M,default:b},Symbol.toStringTag,{value:"Module"}));export{n as D,a as L,$ as M,r as a};
