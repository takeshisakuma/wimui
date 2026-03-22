import{j as R}from"./jsx-runtime-u17CrQMm.js";import{R as O}from"./iframe-CbS9gB6V.js";import{c as N}from"./index-OGIV44ur.js";import{g as m,a as t}from"./grid-utils-CGbVCsz0.js";const i=O.forwardRef(({cols:l,rows:n,gap:u,columnGap:o,rowGap:g,align:d,justify:r,flow:b,inline:p=!1,className:c,style:w,children:f,...T},y)=>{const q=m(l,"--wim-grid-cols",e=>typeof e=="number"?`repeat(${e}, minmax(0, 1fr))`:String(e)),a=e=>e===void 0?{}:typeof e=="object"&&e!==null?e:{base:e},s=a(u),v=a(o),k=a(g),x=()=>{const e={...s,...v};if(Object.keys(e).length!==0)return e},j=()=>{const e={...s,...k};if(Object.keys(e).length!==0)return e},G=m(x(),"--wim-grid-col-gap",e=>typeof e=="number"?`${e}px`:t(e)||String(e)),S=m(j(),"--wim-grid-row-gap",e=>typeof e=="number"?`${e}px`:t(e)||String(e)),h={display:p?"inline-grid":"grid",gridTemplateRows:typeof n=="number"?`repeat(${n}, minmax(0, 1fr))`:n,alignItems:d,justifyContent:r==="between"?"space-between":r==="around"?"space-around":r,gridAutoFlow:b,...q,...G,...S,...w};return R.jsx("div",{ref:y,className:N("wim-grid",c),style:h,...T,children:f})});i.displayName="Grid";i.__docgenInfo={description:"",methods:[],displayName:"Grid",props:{cols:{required:!1,tsType:{name:"union",raw:`| T
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
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"sm",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"md",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"lg",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"xl",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}}]}}]},description:""},align:{required:!1,tsType:{name:"union",raw:'"start" | "center" | "end" | "stretch"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"center"'},{name:"literal",value:'"end"'},{name:"literal",value:'"stretch"'}]},description:""},justify:{required:!1,tsType:{name:"union",raw:'"start" | "center" | "end" | "between" | "around" | "stretch"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"center"'},{name:"literal",value:'"end"'},{name:"literal",value:'"between"'},{name:"literal",value:'"around"'},{name:"literal",value:'"stretch"'}]},description:""},flow:{required:!1,tsType:{name:"union",raw:'"row" | "column" | "dense" | "row dense" | "column dense"',elements:[{name:"literal",value:'"row"'},{name:"literal",value:'"column"'},{name:"literal",value:'"dense"'},{name:"literal",value:'"row dense"'},{name:"literal",value:'"column dense"'}]},description:""},inline:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};export{i as G};
