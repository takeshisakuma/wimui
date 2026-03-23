import{j as g}from"./jsx-runtime-u17CrQMm.js";import{R as c}from"./iframe-CIEHBSGf.js";import{c as b}from"./index-RI8tovNH.js";import{g as y,a}from"./grid-utils-CGbVCsz0.js";const n=c.forwardRef(({cols:s=1,spacing:r=16,verticalSpacing:m,minChildWidth:e,className:i,style:l,children:t,...u},o)=>{const p=y(s,"--wim-simple-grid-cols",f=>`repeat(${f}, minmax(0, 1fr))`),d={display:"grid",gap:a(r),rowGap:a(m??r),gridTemplateColumns:e?`repeat(auto-fill, minmax(${typeof e=="number"?`${e}px`:e}, 1fr))`:void 0,...p,...l};return g.jsx("div",{ref:o,className:b("wim-simple-grid",i),style:d,...u,children:t})});n.displayName="SimpleGrid";n.__docgenInfo={description:"",methods:[],displayName:"SimpleGrid",props:{cols:{required:!1,tsType:{name:"union",raw:`| T
| {
    base?: T;
    sm?: T;
    md?: T;
    lg?: T;
    xl?: T;
  }`,elements:[{name:"number"},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
}`,signature:{properties:[{key:"base",value:{name:"number",required:!1}},{key:"sm",value:{name:"number",required:!1}},{key:"md",value:{name:"number",required:!1}},{key:"lg",value:{name:"number",required:!1}},{key:"xl",value:{name:"number",required:!1}}]}}]},description:"",defaultValue:{value:"1",computed:!1}},spacing:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"16",computed:!1}},verticalSpacing:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},minChildWidth:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""}}};export{n as S};
