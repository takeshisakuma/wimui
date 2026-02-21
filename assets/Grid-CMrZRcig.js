import{j as R}from"./jsx-runtime-u17CrQMm.js";import{R as S}from"./iframe-C7vM9vVS.js";import{c as O}from"./index-BBYmpAPu.js";import{g as m}from"./grid-utils-0MLss220.js";const t=S.forwardRef(({cols:i,rows:n,gap:l,columnGap:u,rowGap:o,align:g,justify:r,flow:d,inline:b=!1,className:p,style:c,children:w,...f},T)=>{const y=m(i,"--wim-grid-cols",e=>typeof e=="number"?`repeat(${e}, minmax(0, 1fr))`:String(e)),a=e=>e===void 0?{}:typeof e=="object"&&e!==null?e:{base:e},s=a(l),v=a(u),q=a(o),k=()=>{const e={...s,...v};if(Object.keys(e).length!==0)return e},x=()=>{const e={...s,...q};if(Object.keys(e).length!==0)return e},j=m(k(),"--wim-grid-col-gap",e=>typeof e=="number"?`${e}px`:String(e)),G=m(x(),"--wim-grid-row-gap",e=>typeof e=="number"?`${e}px`:String(e)),h={display:b?"inline-grid":"grid",gridTemplateRows:typeof n=="number"?`repeat(${n}, minmax(0, 1fr))`:n,alignItems:g,justifyContent:r==="between"?"space-between":r==="around"?"space-around":r,gridAutoFlow:d,...y,...j,...G,...c};return R.jsx("div",{ref:T,className:O("wim-grid",p),style:h,...f,children:w})});t.displayName="Grid";t.__docgenInfo={description:"",methods:[],displayName:"Grid",props:{cols:{required:!1,tsType:{name:"union",raw:`| T\r
| {\r
    base?: T;\r
    sm?: T;\r
    md?: T;\r
    lg?: T;\r
    xl?: T;\r
}`,elements:[{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},{name:"signature",type:"object",raw:`{\r
    base?: T;\r
    sm?: T;\r
    md?: T;\r
    lg?: T;\r
    xl?: T;\r
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"sm",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"md",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"lg",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"xl",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}}]}}]},description:""},rows:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},gap:{required:!1,tsType:{name:"union",raw:`| T\r
| {\r
    base?: T;\r
    sm?: T;\r
    md?: T;\r
    lg?: T;\r
    xl?: T;\r
}`,elements:[{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},{name:"signature",type:"object",raw:`{\r
    base?: T;\r
    sm?: T;\r
    md?: T;\r
    lg?: T;\r
    xl?: T;\r
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"sm",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"md",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"lg",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"xl",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}}]}}]},description:""},columnGap:{required:!1,tsType:{name:"union",raw:`| T\r
| {\r
    base?: T;\r
    sm?: T;\r
    md?: T;\r
    lg?: T;\r
    xl?: T;\r
}`,elements:[{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},{name:"signature",type:"object",raw:`{\r
    base?: T;\r
    sm?: T;\r
    md?: T;\r
    lg?: T;\r
    xl?: T;\r
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"sm",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"md",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"lg",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"xl",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}}]}}]},description:""},rowGap:{required:!1,tsType:{name:"union",raw:`| T\r
| {\r
    base?: T;\r
    sm?: T;\r
    md?: T;\r
    lg?: T;\r
    xl?: T;\r
}`,elements:[{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},{name:"signature",type:"object",raw:`{\r
    base?: T;\r
    sm?: T;\r
    md?: T;\r
    lg?: T;\r
    xl?: T;\r
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"sm",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"md",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"lg",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"xl",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}}]}}]},description:""},align:{required:!1,tsType:{name:"union",raw:'"start" | "center" | "end" | "stretch"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"center"'},{name:"literal",value:'"end"'},{name:"literal",value:'"stretch"'}]},description:""},justify:{required:!1,tsType:{name:"union",raw:'"start" | "center" | "end" | "between" | "around" | "stretch"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"center"'},{name:"literal",value:'"end"'},{name:"literal",value:'"between"'},{name:"literal",value:'"around"'},{name:"literal",value:'"stretch"'}]},description:""},flow:{required:!1,tsType:{name:"union",raw:'"row" | "column" | "dense" | "row dense" | "column dense"',elements:[{name:"literal",value:'"row"'},{name:"literal",value:'"column"'},{name:"literal",value:'"dense"'},{name:"literal",value:'"row dense"'},{name:"literal",value:'"column dense"'}]},description:""},inline:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};export{t as G};
