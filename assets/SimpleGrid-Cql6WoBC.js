import{j as a}from"./jsx-runtime-u17CrQMm.js";import{R as g}from"./iframe-C9jI6wk5.js";import{c as b}from"./index-BdaCrWBW.js";import{g as y,a as n}from"./grid-utils-DbU2OfY9.js";const s=g.forwardRef(({cols:m=1,spacing:r=16,verticalSpacing:i,minChildWidth:e,className:l,style:t,children:u,...o},p)=>{const d=y(m,"--wim-simple-grid-cols",f=>`repeat(${f}, minmax(0, 1fr))`),c={display:"grid",gap:n(r),rowGap:n(i??r),gridTemplateColumns:e?`repeat(auto-fill, minmax(${typeof e=="number"?`${e}px`:e}, 1fr))`:void 0,...d,...t};return a.jsx("div",{className:"wim-simple-grid-container",children:a.jsx("div",{ref:p,className:b("wim-simple-grid",l),style:c,...o,children:u})})});s.displayName="SimpleGrid";s.__docgenInfo={description:"",methods:[],displayName:"SimpleGrid",props:{cols:{required:!1,tsType:{name:"union",raw:`| T
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
}`,signature:{properties:[{key:"base",value:{name:"number",required:!1}},{key:"sm",value:{name:"number",required:!1}},{key:"md",value:{name:"number",required:!1}},{key:"lg",value:{name:"number",required:!1}},{key:"xl",value:{name:"number",required:!1}}]}}]},description:"",defaultValue:{value:"1",computed:!1}},spacing:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"16",computed:!1}},verticalSpacing:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},minChildWidth:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""}}};export{s as S};
