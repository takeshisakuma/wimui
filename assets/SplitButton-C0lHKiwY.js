"use client";
import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{t as i}from"./classnames-D09xBJOL.js";import{n as a,t as o}from"./Icon-TGLZuM2d.js";import{n as s,t as c}from"./Button-DSrkNfg0.js";import{a as l,i as u,n as d,r as f,t as p}from"./Dropdown-WIX4HipB.js";var m,h,g,_,v,y,b,x;function S(){return(S=t((()=>{m=`_root_apzy1_2`,h=`_main_apzy1_6`,g=`_toggle_apzy1_10`,_=`_outline_apzy1_29`,v=`_ghost_apzy1_32`,y=`_chevron_apzy1_36`,b=`_itemIcon_apzy1_39`,x={root:m,main:h,toggle:g,outline:_,ghost:v,chevron:y,itemIcon:b}})))()}var C,w,T,E;function D(){return(D=t((()=>{C=e(n(),1),w=e(i(),1),s(),a(),l(),S(),T=r(),E=C.forwardRef(({children:e,onClick:t,actions:n,variant:r=`solid`,intent:i=`default`,size:a=`md`,disabled:s=!1,loading:l=!1,toggleLabel:m,className:h,...g},_)=>(0,T.jsxs)(`div`,{ref:_,className:(0,w.default)(`wim-split-button`,x.root,x[a],x[r],h),...g,children:[(0,T.jsx)(c,{className:x.main,variant:r,intent:i,size:a,disabled:s,loading:l,onClick:t,children:e}),(0,T.jsxs)(p,{children:[(0,T.jsx)(u,{asChild:!0,children:(0,T.jsx)(c,{className:x.toggle,variant:r,intent:i,size:a,disabled:s,"aria-label":m,children:(0,T.jsx)(o,{name:`ChevronDownIcon`,className:x.chevron})})}),(0,T.jsx)(f,{children:n.map((e,t)=>(0,T.jsxs)(d,{disabled:e.disabled,onClick:e.onSelect,children:[e.icon&&(0,T.jsx)(`span`,{className:x.itemIcon,children:e.icon}),e.label]},t))})]})]})),E.displayName=`SplitButton`,E.__docgenInfo={description:`A main action with a menu of related actions behind a toggle.

Composition Contract:
- Managed by: App consumption
- Scroll lock: No

\`ButtonGroup\` + \`Dropdown\` で組める形ではあるが、**組み方に落とし穴がある**ので
部品にした（T47 ②）。落とし穴は 2 つ:

  1. **トグル側にアクセシブル名が無くなる**。矢印しか描かないので、
     名前を与えないと \`button\` が無名になる。\`toggleLabel\` を必須にして
     型で防ぐ（T53 で \`Progress\` に入れたのと同じ考え方）
  2. **2 つのボタンが 1 つのコントロールに見えない**。角丸と枠が二重になるので、
     隣り合う辺の角丸を落とし、境界の枠を 1 本に見せる必要がある

主ボタンとトグルは同じ \`variant\` / \`intent\` / \`size\` を受け取る。片方だけ
変えられると「1 つのコントロール」という前提が崩れるため、個別指定は持たない。`,methods:[],displayName:`SplitButton`,props:{children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Text of the main action.`},onClick:{required:!1,tsType:{name:`ReactMouseEventHandler`,raw:`React.MouseEventHandler<HTMLButtonElement>`,elements:[{name:`HTMLButtonElement`}]},description:`Called when the main action is pressed.`},actions:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  /** Text shown in the menu. */
  label: React.ReactNode;
  /** Called when the entry is chosen. */
  onSelect?: () => void;
  /** Icon shown before the label. */
  icon?: React.ReactNode;
  /** Whether the entry is unavailable. */
  disabled?: boolean;
}`,signature:{properties:[{key:`label`,value:{name:`ReactReactNode`,raw:`React.ReactNode`,required:!0},description:`Text shown in the menu.`},{key:`onSelect`,value:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}},required:!1},description:`Called when the entry is chosen.`},{key:`icon`,value:{name:`ReactReactNode`,raw:`React.ReactNode`,required:!1},description:`Icon shown before the label.`},{key:`disabled`,value:{name:`boolean`,required:!1},description:`Whether the entry is unavailable.`}]}}],raw:`SplitButtonAction[]`},description:`Secondary actions listed behind the toggle.`},variant:{required:!1,tsType:{name:`union`,raw:`"solid" | "outline" | "ghost"`,elements:[{name:`literal`,value:`"solid"`},{name:`literal`,value:`"outline"`},{name:`literal`,value:`"ghost"`}]},description:`Visual style, applied to both halves so they read as one control.`,defaultValue:{value:`"solid"`,computed:!1}},intent:{required:!1,tsType:{name:`union`,raw:`| "default"
| "danger"
| "success"`,elements:[{name:`literal`,value:`"default"`},{name:`literal`,value:`"danger"`},{name:`literal`,value:`"success"`}]},description:`Intent (semantic color), applied to both halves.`,defaultValue:{value:`"default"`,computed:!1}},size:{required:!1,tsType:{name:`Extract`,elements:[{name:`union`,raw:`"xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl"`,elements:[{name:`literal`,value:`"xs"`},{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`},{name:`literal`,value:`"xl"`},{name:`literal`,value:`"2xl"`},{name:`literal`,value:`"3xl"`},{name:`literal`,value:`"4xl"`},{name:`literal`,value:`"5xl"`}]},{name:`union`,raw:`"sm" | "md" | "lg"`,elements:[{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`}]}],raw:`Extract<ComponentSize, "sm" | "md" | "lg">`},description:`Size of both halves.`,defaultValue:{value:`"md"`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:`Disable the whole control.`,defaultValue:{value:`false`,computed:!1}},loading:{required:!1,tsType:{name:`boolean`},description:`Show a loading state on the main action.`,defaultValue:{value:`false`,computed:!1}},toggleLabel:{required:!0,tsType:{name:`string`},description:`Accessible name for the toggle half. The main half is named by its own text,
but the toggle only shows a chevron, so it needs one of its own.`}}}})))()}export{D as n,E as t};