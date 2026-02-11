import{j as l}from"./jsx-runtime-u17CrQMm.js";import{R as o}from"./iframe-CAZkMdaF.js";import{P as t}from"./index-BoT4MqqS.js";import{B as x}from"./Box-0sBJw_2c.js";const m=o.forwardRef(({columns:i=3,spacing:e=16,className:c,style:p,children:u,...g},y)=>{const d={columnCount:i,columnGap:typeof e=="number"?`${e}px`:e,...p},f={marginBottom:typeof e=="number"?`${e}px`:e};return l.jsx("div",{ref:y,className:["wim-masonry",c].filter(Boolean).join(" "),style:d,...g,children:o.Children.map(u,s=>{if(o.isValidElement(s)){const b=s.props.style||{};return o.cloneElement(s,{style:{...f,...b},className:["wim-masonry-item",s.props.className].filter(Boolean).join(" ")})}return s})})});m.displayName="Masonry";m.propTypes={columns:t.number,spacing:t.oneOfType([t.number,t.string])};m.__docgenInfo={description:`Masonry layout component.\r
It arranges items in columns, filling in gaps to minimize empty space.`,methods:[],displayName:"Masonry",props:{columns:{required:!1,tsType:{name:"number"},description:"Number of columns",defaultValue:{value:"3",computed:!1},type:{name:"number"}},spacing:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Spacing between items",defaultValue:{value:"16",computed:!1},type:{name:"union",value:[{name:"number"},{name:"string"}]}}}};const h={title:"Layout/Masonry",component:m,tags:[],argTypes:{columns:{control:{type:"number",min:1,max:10}},spacing:{control:{type:"number"}}}},S=[150,200,100,250,180,220,120,300,140,190],n={args:{columns:3,spacing:16,children:S.map((i,e)=>l.jsx(x,{bg:`hsl(${e*40}, 70%, 80%)`,radius:8,h:i,display:"flex",style:{alignItems:"center",justifyContent:"center",fontSize:"24px",fontWeight:"bold",color:`hsl(${e*40}, 70%, 30%)`},children:e+1},e))}},r={args:{...n.args,columns:5,spacing:10}},a={args:{...n.args,columns:3,spacing:40}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const j=["Default","ManyColumns","LargeSpacing"],C=Object.freeze(Object.defineProperty({__proto__:null,Default:n,LargeSpacing:a,ManyColumns:r,__namedExportsOrder:j,default:h},Symbol.toStringTag,{value:"Module"}));export{n as D,a as L,C as M,r as a};
