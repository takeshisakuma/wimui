"use client";
import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{t as i}from"./classnames-D09xBJOL.js";import{r as a,t as o}from"./dist-NUpu5x22.js";import{c as s,s as c}from"./style-utils-C0B2hRHU.js";import{n as l,t as u}from"./grid-utils-Dh-Z9cjC.js";var d,f,p;function m(){return(m=t((()=>{d=`_container_113yt_4`,f=`_root_113yt_14`,p={container:d,root:f}})))()}var h,g,_,v;function y(){return(y=t((()=>{h=e(n(),1),g=e(i(),1),a(),m(),l(),s(),_=r(),v=h.forwardRef(({asChild:e=!1,cols:t,rows:n,gap:r,columnGap:i,rowGap:a,align:s,justify:l,flow:d,inline:f=!1,className:m,style:h,children:v,...y},b)=>{let x=e?o:`div`,S=u(t,`--wim-grid-cols`,e=>typeof e==`number`?`repeat(${e}, minmax(0, 1fr))`:String(e)),C=e=>e===void 0?{}:typeof e==`object`&&e?e:{base:e},w=C(r),T=C(i),E=C(a),D=()=>{let e={...w,...T};if(Object.keys(e).length!==0)return e},O=()=>{let e={...w,...E};if(Object.keys(e).length!==0)return e},k=u(D(),`--wim-grid-col-gap`,e=>typeof e==`number`?`${e}px`:c(e)||String(e)),A=u(O(),`--wim-grid-row-gap`,e=>typeof e==`number`?`${e}px`:c(e)||String(e)),j={display:f?`inline-grid`:`grid`,gridTemplateRows:typeof n==`number`?`repeat(${n}, minmax(0, 1fr))`:n,alignItems:s,justifyContent:l===`between`?`space-between`:l===`around`?`space-around`:l,gridAutoFlow:d,...S,...k,...A,...h};return(0,_.jsx)(`div`,{className:p.container,children:(0,_.jsx)(x,{ref:b,className:(0,g.default)(`wim-grid`,p.root,m),style:j,...y,children:v})})}),v.displayName=`Grid`,v.__docgenInfo={description:``,methods:[],displayName:`Grid`,props:{asChild:{required:!1,tsType:{name:`boolean`},description:`If true, the grid will be rendered as its child, merging its props onto that child.
The container-query wrapper div is preserved to maintain responsive column behaviour.`,defaultValue:{value:`false`,computed:!1}},cols:{required:!1,tsType:{name:`union`,raw:`| T
| {
    base?: T;
    sm?: T;
    md?: T;
    lg?: T;
    xl?: T;
  }`,elements:[{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},{name:`signature`,type:`object`,raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
}`,signature:{properties:[{key:`base`,value:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}],required:!1}},{key:`sm`,value:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}],required:!1}},{key:`md`,value:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}],required:!1}},{key:`lg`,value:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}],required:!1}},{key:`xl`,value:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}],required:!1}}]}}]},description:`Number of columns (or a responsive object per breakpoint)`},rows:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:`Number of rows or an explicit grid-template-rows value`},gap:{required:!1,tsType:{name:`union`,raw:`| T
| {
    base?: T;
    sm?: T;
    md?: T;
    lg?: T;
    xl?: T;
  }`,elements:[{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},{name:`signature`,type:`object`,raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
}`,signature:{properties:[{key:`base`,value:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}],required:!1}},{key:`sm`,value:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}],required:!1}},{key:`md`,value:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}],required:!1}},{key:`lg`,value:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}],required:!1}},{key:`xl`,value:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}],required:!1}}]}}]},description:`Gap between cells (or a responsive object per breakpoint)`},columnGap:{required:!1,tsType:{name:`union`,raw:`| T
| {
    base?: T;
    sm?: T;
    md?: T;
    lg?: T;
    xl?: T;
  }`,elements:[{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},{name:`signature`,type:`object`,raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
}`,signature:{properties:[{key:`base`,value:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}],required:!1}},{key:`sm`,value:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}],required:!1}},{key:`md`,value:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}],required:!1}},{key:`lg`,value:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}],required:!1}},{key:`xl`,value:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}],required:!1}}]}}]},description:`Gap between columns (or a responsive object per breakpoint)`},rowGap:{required:!1,tsType:{name:`union`,raw:`| T
| {
    base?: T;
    sm?: T;
    md?: T;
    lg?: T;
    xl?: T;
  }`,elements:[{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},{name:`signature`,type:`object`,raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
}`,signature:{properties:[{key:`base`,value:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}],required:!1}},{key:`sm`,value:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}],required:!1}},{key:`md`,value:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}],required:!1}},{key:`lg`,value:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}],required:!1}},{key:`xl`,value:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}],required:!1}}]}}]},description:`Gap between rows (or a responsive object per breakpoint)`},align:{required:!1,tsType:{name:`union`,raw:`"start" | "center" | "end" | "stretch"`,elements:[{name:`literal`,value:`"start"`},{name:`literal`,value:`"center"`},{name:`literal`,value:`"end"`},{name:`literal`,value:`"stretch"`}]},description:`Alignment of items along the block (vertical) axis`},justify:{required:!1,tsType:{name:`union`,raw:`"start" | "center" | "end" | "between" | "around" | "stretch"`,elements:[{name:`literal`,value:`"start"`},{name:`literal`,value:`"center"`},{name:`literal`,value:`"end"`},{name:`literal`,value:`"between"`},{name:`literal`,value:`"around"`},{name:`literal`,value:`"stretch"`}]},description:`Justification of items along the inline (horizontal) axis`},flow:{required:!1,tsType:{name:`union`,raw:`"row" | "column" | "dense" | "row dense" | "column dense"`,elements:[{name:`literal`,value:`"row"`},{name:`literal`,value:`"column"`},{name:`literal`,value:`"dense"`},{name:`literal`,value:`"row dense"`},{name:`literal`,value:`"column dense"`}]},description:`Grid auto-flow direction`},inline:{required:!1,tsType:{name:`boolean`},description:`Whether to render as an inline grid`,defaultValue:{value:`false`,computed:!1}}}}})))()}export{y as n,v as t};