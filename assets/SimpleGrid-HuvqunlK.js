import{j as f}from"./jsx-runtime-u17CrQMm.js";import{R as b}from"./iframe-Dq24M1Fk.js";import{c as y}from"./index-Dq8OH074.js";import{g as T}from"./grid-utils-0MLss220.js";const m=b.forwardRef(({cols:a=1,spacing:e=16,verticalSpacing:r,minChildWidth:n,className:s,style:t,children:u,...i},l)=>{const o=T(a,"--wim-simple-grid-cols",d=>`repeat(${d}, minmax(0, 1fr))`),p={display:"grid",gap:typeof e=="number"?`${e}px`:e,rowGap:r?typeof r=="number"?`${r}px`:r:typeof e=="number"?`${e}px`:e,gridTemplateColumns:n?`repeat(auto-fill, minmax(${typeof n=="number"?`${n}px`:n}, 1fr))`:void 0,...o,...t};return f.jsx("div",{ref:l,className:y("wim-simple-grid",s),style:p,...i,children:u})});m.displayName="SimpleGrid";m.__docgenInfo={description:"",methods:[],displayName:"SimpleGrid",props:{cols:{required:!1,tsType:{name:"union",raw:`| T\r
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
}`,signature:{properties:[{key:"base",value:{name:"number",required:!1}},{key:"sm",value:{name:"number",required:!1}},{key:"md",value:{name:"number",required:!1}},{key:"lg",value:{name:"number",required:!1}},{key:"xl",value:{name:"number",required:!1}}]}}]},description:"",defaultValue:{value:"1",computed:!1}},spacing:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"16",computed:!1}},verticalSpacing:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},minChildWidth:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""}}};export{m as S};
