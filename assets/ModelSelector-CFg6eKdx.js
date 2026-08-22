"use client";
import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Bn as r,Hn as i,cr as a,z as o}from"./iframe-F5Up1IQq.js";import{t as s}from"./classnames-DyhsJ24V.js";import{n as c,t as l}from"./Transition-NGN2YMVb.js";import{n as u,t as d}from"./Icon-dyTmj1rn.js";var f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L=e((()=>{f=`_root_xt16d_4`,p=`_fullWidth_xt16d_16`,m=`_disabled_xt16d_19`,h=`_trigger_xt16d_23`,g=`_triggerLabel_xt16d_53`,_=`_triggerName_xt16d_60`,v=`_placeholder_xt16d_66`,y=`_chevron_xt16d_72`,b=`_chevronOpen_xt16d_77`,x=`_badge_xt16d_80`,S=`_dropdownWrapper_xt16d_90`,C=`_dropdown_xt16d_90`,w=`_option_xt16d_112`,T=`_active_xt16d_120`,E=`_optionDisabled_xt16d_123`,D=`_check_xt16d_127`,O=`_optionBody_xt16d_136`,k=`_optionHeader_xt16d_142`,A=`_optionName_xt16d_147`,j=`_description_xt16d_155`,M=`_metaRow_xt16d_159`,N=`_meta_xt16d_159`,P=`_sm_xt16d_173`,F=`_lg_xt16d_177`,I={root:f,fullWidth:p,disabled:m,trigger:h,triggerLabel:g,triggerName:_,placeholder:v,chevron:y,chevronOpen:b,badge:x,dropdownWrapper:S,dropdown:C,option:w,active:T,optionDisabled:E,check:D,optionBody:O,optionHeader:k,optionName:A,description:j,metaRow:M,meta:N,sm:P,lg:F}})),R,z,B,V,H,U,W=e((()=>{R=t(n(),1),z=t(s(),1),u(),c(),o(),L(),B=a(),V=e=>e>=1e6?`${(e/1e6).toFixed(e%1e6==0?0:1)}M`:e>=1e3?`${(e/1e3).toFixed(e%1e3==0?0:1)}K`:String(e),H=(e,t=`$`)=>`${t}${e}`,U=R.forwardRef(({models:e,value:t,defaultValue:n,onChange:a,size:o=`md`,disabled:s=!1,fullWidth:c=!1,showPricing:u=!0,showContext:f=!0,labels:p,className:m,...h},g)=>{let{placeholder:_=`Select a model`,contextLabel:v=`Context`,inputLabel:y=`In`,outputLabel:b=`Out`,perTokensLabel:x=`/1M`,triggerAriaLabel:S=`Select a model`}=p??{},C=t!==void 0,[w,T]=(0,R.useState)(n),E=C?t:w,D=e.find(e=>e.id===E),[O,k]=(0,R.useState)(!1),[A,j]=(0,R.useState)(-1),M=(0,R.useRef)(null),N=(0,R.useRef)(null),P=(0,R.useId)(),F=`${P}-listbox`,L=(0,R.useCallback)(e=>{M.current=e,typeof g==`function`?g(e):g&&(g.current=e)},[g]);(0,R.useEffect)(()=>{if(!O)return;let e=e=>{M.current&&!M.current.contains(e.target)&&k(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[O]);let U=e=>{e.disabled||(C||T(e.id),a?.(e.id,e),k(!1))},W=t=>{if(!s)if(t.key===`ArrowDown`||t.key===`Enter`||t.key===` `){if(t.preventDefault(),!O){k(!0);let t=e.findIndex(e=>e.id===E);j(t>=0?t:0)}}else t.key===`Escape`&&k(!1)},G=t=>{j(n=>{let r=n;for(let n=0;n<e.length&&(r=(r+t+e.length)%e.length,e[r]?.disabled);n++);return r})},K=t=>{if(t.key===`ArrowDown`)t.preventDefault(),G(1);else if(t.key===`ArrowUp`)t.preventDefault(),G(-1);else if(t.key===`Enter`||t.key===` `){t.preventDefault();let n=e[A];n&&U(n)}else t.key===`Escape`&&(t.preventDefault(),k(!1),M.current?.querySelector(`button`)?.focus())};(0,R.useEffect)(()=>{O&&A>=0&&(N.current?.querySelectorAll(`[role="option"]`)?.[A])?.scrollIntoView({block:`nearest`})},[A,O]);let q=e=>{let t=[];if(f&&e.contextLength&&t.push((0,B.jsxs)(`span`,{className:I.meta,children:[v,` `,V(e.contextLength)]},`ctx`)),u&&e.pricing){let{input:n,output:r,currency:i}=e.pricing;n!==void 0&&t.push((0,B.jsxs)(`span`,{className:I.meta,children:[y,` `,H(n,i),x]},`in`)),r!==void 0&&t.push((0,B.jsxs)(`span`,{className:I.meta,children:[b,` `,H(r,i),x]},`out`))}return t.length===0?null:(0,B.jsx)(`span`,{className:I.metaRow,children:t})};return(0,B.jsxs)(`div`,{ref:L,className:(0,z.default)(`wim-model-selector`,I.root,I[o],c&&I.fullWidth,s&&I.disabled,m),...h,children:[(0,B.jsxs)(`button`,{type:`button`,className:I.trigger,"aria-haspopup":`listbox`,"aria-expanded":O,"aria-controls":O?F:void 0,"aria-label":S,disabled:s,onClick:()=>{if(s)return;k(e=>!e);let t=e.findIndex(e=>e.id===E);j(t>=0?t:0)},onKeyDown:W,children:[(0,B.jsx)(`span`,{className:I.triggerLabel,children:D?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(`span`,{className:I.triggerName,children:D.name}),D.badge&&(0,B.jsx)(`span`,{className:I.badge,children:D.badge})]}):(0,B.jsx)(`span`,{className:I.placeholder,children:_})}),(0,B.jsx)(d,{component:r,size:`sm`,className:(0,z.default)(I.chevron,O&&I.chevronOpen)})]}),(0,B.jsx)(l,{show:O,preset:`scale`,unmount:!0,className:I.dropdownWrapper,children:(0,B.jsx)(`ul`,{ref:N,id:F,role:`listbox`,tabIndex:-1,className:I.dropdown,onKeyDown:K,"aria-activedescendant":A>=0?`${P}-opt-${A}`:void 0,children:e.map((e,t)=>{let n=e.id===E;return(0,B.jsxs)(`li`,{id:`${P}-opt-${t}`,role:`option`,"aria-selected":n,"aria-disabled":e.disabled||void 0,className:(0,z.default)(I.option,t===A&&I.active,e.disabled&&I.optionDisabled),onMouseEnter:()=>j(t),onClick:()=>U(e),children:[(0,B.jsx)(`span`,{className:I.check,"aria-hidden":`true`,children:n&&(0,B.jsx)(d,{component:i,size:`sm`})}),(0,B.jsxs)(`span`,{className:I.optionBody,children:[(0,B.jsxs)(`span`,{className:I.optionHeader,children:[(0,B.jsx)(`span`,{className:I.optionName,children:e.name}),e.badge&&(0,B.jsx)(`span`,{className:I.badge,children:e.badge})]}),e.description&&(0,B.jsx)(`span`,{className:I.description,children:e.description}),q(e)]})]},e.id)})})})]})}),U.displayName=`ModelSelector`,U.__docgenInfo={description:`ModelSelector is a dropdown for switching between AI models, surfacing the
metadata that matters when choosing one — context window and per-token pricing.

Composition Contract:
- Managed by: App consumption
- Scroll lock: No`,methods:[],displayName:`ModelSelector`,props:{models:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  /** Unique identifier of the model */
  id: string;
  /** Human-readable model name */
  name: string;
  /** Short description or the provider name */
  description?: string;
  /** Context window size in tokens (shown formatted, e.g. "128K") */
  contextLength?: number;
  /** Pricing metadata (per 1M tokens) */
  pricing?: ModelPricing;
  /** Short badge shown next to the name (e.g. "New", "Beta") */
  badge?: string;
  /** Whether the model cannot be selected */
  disabled?: boolean;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0},description:`Unique identifier of the model`},{key:`name`,value:{name:`string`,required:!0},description:`Human-readable model name`},{key:`description`,value:{name:`string`,required:!1},description:`Short description or the provider name`},{key:`contextLength`,value:{name:`number`,required:!1},description:`Context window size in tokens (shown formatted, e.g. "128K")`},{key:`pricing`,value:{name:`signature`,type:`object`,raw:`{
  /** Input (prompt) price per 1M tokens */
  input?: number;
  /** Output (completion) price per 1M tokens */
  output?: number;
  /** Currency symbol shown before the price (default "$") */
  currency?: string;
}`,signature:{properties:[{key:`input`,value:{name:`number`,required:!1},description:`Input (prompt) price per 1M tokens`},{key:`output`,value:{name:`number`,required:!1},description:`Output (completion) price per 1M tokens`},{key:`currency`,value:{name:`string`,required:!1},description:`Currency symbol shown before the price (default "$")`}]},required:!1},description:`Pricing metadata (per 1M tokens)`},{key:`badge`,value:{name:`string`,required:!1},description:`Short badge shown next to the name (e.g. "New", "Beta")`},{key:`disabled`,value:{name:`boolean`,required:!1},description:`Whether the model cannot be selected`}]}}],raw:`ModelOption[]`},description:`List of selectable models`},value:{required:!1,tsType:{name:`string`},description:`Selected model id (controlled)`},defaultValue:{required:!1,tsType:{name:`string`},description:`Initially selected model id (uncontrolled)`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(id: string, model: ModelOption) => void`,signature:{arguments:[{type:{name:`string`},name:`id`},{type:{name:`signature`,type:`object`,raw:`{
  /** Unique identifier of the model */
  id: string;
  /** Human-readable model name */
  name: string;
  /** Short description or the provider name */
  description?: string;
  /** Context window size in tokens (shown formatted, e.g. "128K") */
  contextLength?: number;
  /** Pricing metadata (per 1M tokens) */
  pricing?: ModelPricing;
  /** Short badge shown next to the name (e.g. "New", "Beta") */
  badge?: string;
  /** Whether the model cannot be selected */
  disabled?: boolean;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0},description:`Unique identifier of the model`},{key:`name`,value:{name:`string`,required:!0},description:`Human-readable model name`},{key:`description`,value:{name:`string`,required:!1},description:`Short description or the provider name`},{key:`contextLength`,value:{name:`number`,required:!1},description:`Context window size in tokens (shown formatted, e.g. "128K")`},{key:`pricing`,value:{name:`signature`,type:`object`,raw:`{
  /** Input (prompt) price per 1M tokens */
  input?: number;
  /** Output (completion) price per 1M tokens */
  output?: number;
  /** Currency symbol shown before the price (default "$") */
  currency?: string;
}`,signature:{properties:[{key:`input`,value:{name:`number`,required:!1},description:`Input (prompt) price per 1M tokens`},{key:`output`,value:{name:`number`,required:!1},description:`Output (completion) price per 1M tokens`},{key:`currency`,value:{name:`string`,required:!1},description:`Currency symbol shown before the price (default "$")`}]},required:!1},description:`Pricing metadata (per 1M tokens)`},{key:`badge`,value:{name:`string`,required:!1},description:`Short badge shown next to the name (e.g. "New", "Beta")`},{key:`disabled`,value:{name:`boolean`,required:!1},description:`Whether the model cannot be selected`}]}},name:`model`}],return:{name:`void`}}},description:`Callback when the selected model changes`},size:{required:!1,tsType:{name:`Extract`,elements:[{name:`union`,raw:`"xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl"`,elements:[{name:`literal`,value:`"xs"`},{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`},{name:`literal`,value:`"xl"`},{name:`literal`,value:`"2xl"`},{name:`literal`,value:`"3xl"`},{name:`literal`,value:`"4xl"`},{name:`literal`,value:`"5xl"`}]},{name:`union`,raw:`"sm" | "md" | "lg"`,elements:[{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`}]}],raw:`Extract<ComponentSize, "sm" | "md" | "lg">`},description:`Size of the trigger`,defaultValue:{value:`"md"`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:`Whether the selector is disabled`,defaultValue:{value:`false`,computed:!1}},fullWidth:{required:!1,tsType:{name:`boolean`},description:`Whether to take full width of parent`,defaultValue:{value:`false`,computed:!1}},showPricing:{required:!1,tsType:{name:`boolean`},description:`Whether to show pricing metadata in the dropdown`,defaultValue:{value:`true`,computed:!1}},showContext:{required:!1,tsType:{name:`boolean`},description:`Whether to show the context-length metadata in the dropdown`,defaultValue:{value:`true`,computed:!1}},labels:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{
  /** Placeholder shown when nothing is selected */
  placeholder?: string;
  /** Prefix for the context-length meta (default "Context") */
  contextLabel?: string;
  /** Prefix for the input price meta (default "In") */
  inputLabel?: string;
  /** Prefix for the output price meta (default "Out") */
  outputLabel?: string;
  /** Suffix appended to prices (default "/1M") */
  perTokensLabel?: string;
  /** Accessible label for the trigger button */
  triggerAriaLabel?: string;
}`,signature:{properties:[{key:`placeholder`,value:{name:`string`,required:!1},description:`Placeholder shown when nothing is selected`},{key:`contextLabel`,value:{name:`string`,required:!1},description:`Prefix for the context-length meta (default "Context")`},{key:`inputLabel`,value:{name:`string`,required:!1},description:`Prefix for the input price meta (default "In")`},{key:`outputLabel`,value:{name:`string`,required:!1},description:`Prefix for the output price meta (default "Out")`},{key:`perTokensLabel`,value:{name:`string`,required:!1},description:`Suffix appended to prices (default "/1M")`},{key:`triggerAriaLabel`,value:{name:`string`,required:!1},description:`Accessible label for the trigger button`}]}},description:`Labels for internationalization`},className:{required:!1,tsType:{name:`string`},description:`Additional class names`}},composes:[`Omit`]}}));export{W as n,U as t};