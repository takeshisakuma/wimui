"use client";
import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{t as i}from"./classnames-D09xBJOL.js";import{c as a,s as o}from"./style-utils-C0B2hRHU.js";import{n as s,t as c}from"./grid-utils-Dh-Z9cjC.js";var l,u,d;function f(){return(f=t((()=>{l=`_container_1xnjl_4`,u=`_root_1xnjl_14`,d={container:l,root:u}})))()}var p,m,h,g;function _(){return(_=t((()=>{p=e(n(),1),m=e(i(),1),f(),s(),a(),h=r(),g=p.forwardRef(({cols:e=1,spacing:t=`2xl`,verticalSpacing:n,minChildWidth:r,className:i,style:a,children:s,...l},u)=>{let f=c(e,`--wim-simple-grid-cols`,e=>`repeat(${e}, minmax(0, 1fr))`),p={display:`grid`,gap:o(t),rowGap:o(n??t),gridTemplateColumns:r?`repeat(auto-fill, minmax(${typeof r==`number`?`${r}px`:r}, 1fr))`:void 0,...f,...a};return(0,h.jsx)(`div`,{className:d.container,children:(0,h.jsx)(`div`,{ref:u,className:(0,m.default)(`wim-simple-grid`,d.root,i),style:p,...l,children:s})})}),g.displayName=`SimpleGrid`,g.__docgenInfo={description:``,methods:[],displayName:`SimpleGrid`,props:{cols:{required:!1,tsType:{name:`union`,raw:`| T
| {
    base?: T;
    sm?: T;
    md?: T;
    lg?: T;
    xl?: T;
  }`,elements:[{name:`number`},{name:`signature`,type:`object`,raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
}`,signature:{properties:[{key:`base`,value:{name:`number`,required:!1}},{key:`sm`,value:{name:`number`,required:!1}},{key:`md`,value:{name:`number`,required:!1}},{key:`lg`,value:{name:`number`,required:!1}},{key:`xl`,value:{name:`number`,required:!1}}]}}]},description:`Number of columns (or a responsive object per breakpoint)`,defaultValue:{value:`1`,computed:!1}},spacing:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:'Spacing between cells: a spacing token name (`"md"`, `"2xl"`, …) or a raw\nnumber of pixels. Prefer the token so the gap follows the theme.\n@default "2xl"',defaultValue:{value:`"2xl"`,computed:!1}},verticalSpacing:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:"Vertical spacing between rows (defaults to `spacing`)"},minChildWidth:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:`Minimum width of each child; columns wrap automatically to fit`}}}})))()}export{_ as n,g as t};