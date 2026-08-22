"use client";
import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{cr as r}from"./iframe-F5Up1IQq.js";import{t as i}from"./classnames-DyhsJ24V.js";import{n as a,t as o}from"./Box--bAE-pUN.js";var s,c,l=e((()=>{s=`_root_1in0p_4`,c={root:s}})),u,d,f,p,m,h,g=e((()=>{u=t(n(),1),d=t(i(),1),a(),l(),f=r(),p=e=>e===`start`?`flex-start`:e===`end`?`flex-end`:e,m=e=>e===`start`?`flex-start`:e===`end`?`flex-end`:e===`between`?`space-between`:e===`around`?`space-around`:e===`evenly`?`space-evenly`:e,h=u.forwardRef(({asChild:e=!1,direction:t=`column`,gap:n=`md`,align:r,justify:i,wrap:a,style:s,className:l,children:u,...h},g)=>{let _=e=>typeof e==`number`?`${e}px`:typeof e==`string`&&[`3xs`,`2xs`,`xs`,`sm`,`md`,`lg`,`xl`,`2xl`,`3xl`,`4xl`,`5xl`,`6xl`,`7xl`].includes(e)?`var(--wim-spacing-${e})`:e?String(e):void 0,v=(e=>{if(e===void 0)return{};if(typeof e==`string`)return{"--wim-stack-dir":e};let t={"--wim-stack-dir":e.base||`column`};return e.sm&&(t[`--wim-stack-dir-sm`]=e.sm),e.md&&(t[`--wim-stack-dir-md`]=e.md),e.lg&&(t[`--wim-stack-dir-lg`]=e.lg),e.xl&&(t[`--wim-stack-dir-xl`]=e.xl),t})(t);return(0,f.jsx)(o,{asChild:e,ref:g,display:`flex`,className:(0,d.default)(`wim-stack`,c.root,l),style:{flexDirection:`var(--wim-stack-dir)`,gap:_(n),alignItems:p(r),justifyContent:m(i),flexWrap:typeof a==`boolean`?a?`wrap`:`nowrap`:a,...v,...s},...h,children:u})}),h.displayName=`Stack`,h.__docgenInfo={description:`Stack component is used to distribute space between elements in a vertical or horizontal layout.`,methods:[],displayName:`Stack`,props:{asChild:{required:!1,tsType:{name:`boolean`},description:`Whether to render as a child element.`,defaultValue:{value:`false`,computed:!1}},gap:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:`Gap between children. Can be a number (px) or a spacing token (e.g., 'sm', 'md', 'lg').`,defaultValue:{value:`"md"`,computed:!1}},direction:{required:!1,tsType:{name:`union`,raw:`| T
| {
    base?: T;
    sm?: T;
    md?: T;
    lg?: T;
    xl?: T;
  }`,elements:[{name:`union`,raw:`"row" | "column"`,elements:[{name:`literal`,value:`"row"`},{name:`literal`,value:`"column"`}]},{name:`signature`,type:`object`,raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
}`,signature:{properties:[{key:`base`,value:{name:`union`,raw:`"row" | "column"`,elements:[{name:`literal`,value:`"row"`},{name:`literal`,value:`"column"`}],required:!1}},{key:`sm`,value:{name:`union`,raw:`"row" | "column"`,elements:[{name:`literal`,value:`"row"`},{name:`literal`,value:`"column"`}],required:!1}},{key:`md`,value:{name:`union`,raw:`"row" | "column"`,elements:[{name:`literal`,value:`"row"`},{name:`literal`,value:`"column"`}],required:!1}},{key:`lg`,value:{name:`union`,raw:`"row" | "column"`,elements:[{name:`literal`,value:`"row"`},{name:`literal`,value:`"column"`}],required:!1}},{key:`xl`,value:{name:`union`,raw:`"row" | "column"`,elements:[{name:`literal`,value:`"row"`},{name:`literal`,value:`"column"`}],required:!1}}]}}]},description:`Stack direction`,defaultValue:{value:`"column"`,computed:!1}},align:{required:!1,tsType:{name:`union`,raw:`| "start"
| "center"
| "end"
| "stretch"
| "baseline"
| React.CSSProperties["alignItems"]`,elements:[{name:`literal`,value:`"start"`},{name:`literal`,value:`"center"`},{name:`literal`,value:`"end"`},{name:`literal`,value:`"stretch"`},{name:`literal`,value:`"baseline"`},{name:`ReactCSSProperties["alignItems"]`,raw:`React.CSSProperties["alignItems"]`}]},description:`Align-items`},justify:{required:!1,tsType:{name:`union`,raw:`| "start"
| "center"
| "end"
| "between"
| "around"
| "evenly"
| "stretch"
| React.CSSProperties["justifyContent"]`,elements:[{name:`literal`,value:`"start"`},{name:`literal`,value:`"center"`},{name:`literal`,value:`"end"`},{name:`literal`,value:`"between"`},{name:`literal`,value:`"around"`},{name:`literal`,value:`"evenly"`},{name:`literal`,value:`"stretch"`},{name:`ReactCSSProperties["justifyContent"]`,raw:`React.CSSProperties["justifyContent"]`}]},description:`Justify-content`},wrap:{required:!1,tsType:{name:`union`,raw:`boolean | React.CSSProperties["flexWrap"]`,elements:[{name:`boolean`},{name:`ReactCSSProperties["flexWrap"]`,raw:`React.CSSProperties["flexWrap"]`}]},description:`Whether children should wrap`}}}}));export{g as n,h as t};