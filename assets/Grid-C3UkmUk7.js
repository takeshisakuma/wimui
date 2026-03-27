import{j as t}from"./jsx-runtime-u17CrQMm.js";import{R as N}from"./iframe-D0D_YrNH.js";import{c as O}from"./index-BT-z7k4m.js";import{g as m,a as i}from"./grid-utils-CGbVCsz0.js";const l=N.forwardRef(({cols:u,rows:n,gap:o,columnGap:g,rowGap:d,align:b,justify:r,flow:p,inline:c=!1,className:w,style:f,children:T,...y},v)=>{const q=m(u,"--wim-grid-cols",e=>typeof e=="number"?`repeat(${e}, minmax(0, 1fr))`:String(e)),a=e=>e===void 0?{}:typeof e=="object"&&e!==null?e:{base:e},s=a(o),k=a(g),x=a(d),j=()=>{const e={...s,...k};if(Object.keys(e).length!==0)return e},G=()=>{const e={...s,...x};if(Object.keys(e).length!==0)return e},h=m(j(),"--wim-grid-col-gap",e=>typeof e=="number"?`${e}px`:i(e)||String(e)),S=m(G(),"--wim-grid-row-gap",e=>typeof e=="number"?`${e}px`:i(e)||String(e)),R={display:c?"inline-grid":"grid",gridTemplateRows:typeof n=="number"?`repeat(${n}, minmax(0, 1fr))`:n,alignItems:b,justifyContent:r==="between"?"space-between":r==="around"?"space-around":r,gridAutoFlow:p,...q,...h,...S,...f};return t.jsx("div",{className:"wim-grid-container",children:t.jsx("div",{ref:v,className:O("wim-grid",w),style:R,...y,children:T})})});l.displayName="Grid";l.__docgenInfo={description:"",methods:[],displayName:"Grid",props:{cols:{required:!1,tsType:{name:"union",raw:`| T
| {
    base?: T;
    sm?: T;
    md?: T;
    lg?: T;
    xl?: T;
  }`,elements:[{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"sm",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"md",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"lg",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"xl",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}}]}}]},description:""},rows:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},gap:{required:!1,tsType:{name:"union",raw:`| T
| {
    base?: T;
    sm?: T;
    md?: T;
    lg?: T;
    xl?: T;
  }`,elements:[{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"sm",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"md",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"lg",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"xl",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}}]}}]},description:""},columnGap:{required:!1,tsType:{name:"union",raw:`| T
| {
    base?: T;
    sm?: T;
    md?: T;
    lg?: T;
    xl?: T;
  }`,elements:[{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"sm",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"md",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"lg",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"xl",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}}]}}]},description:""},rowGap:{required:!1,tsType:{name:"union",raw:`| T
| {
    base?: T;
    sm?: T;
    md?: T;
    lg?: T;
    xl?: T;
  }`,elements:[{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"sm",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"md",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"lg",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"xl",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}}]}}]},description:""},align:{required:!1,tsType:{name:"union",raw:'"start" | "center" | "end" | "stretch"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"center"'},{name:"literal",value:'"end"'},{name:"literal",value:'"stretch"'}]},description:""},justify:{required:!1,tsType:{name:"union",raw:'"start" | "center" | "end" | "between" | "around" | "stretch"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"center"'},{name:"literal",value:'"end"'},{name:"literal",value:'"between"'},{name:"literal",value:'"around"'},{name:"literal",value:'"stretch"'}]},description:""},flow:{required:!1,tsType:{name:"union",raw:'"row" | "column" | "dense" | "row dense" | "column dense"',elements:[{name:"literal",value:'"row"'},{name:"literal",value:'"column"'},{name:"literal",value:'"dense"'},{name:"literal",value:'"row dense"'},{name:"literal",value:'"column dense"'}]},description:""},inline:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};export{l as G};
