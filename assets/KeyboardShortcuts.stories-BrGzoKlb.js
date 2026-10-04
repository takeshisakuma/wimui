"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./useTranslation-BDKsuBAo.js";import{n as o,t as s}from"./i18nConstants-BhvmnjLS.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{t as l}from"./classnames-D09xBJOL.js";import{n as u,t as d}from"./Kbd-C7IKTKwy.js";var f,p,m,h,g,_,v,y,b,x;function S(){return(S=t((()=>{f=`_root_18nd2_4`,p=`_title_18nd2_9`,m=`_list_18nd2_17`,h=`_item_18nd2_24`,g=`_label_18nd2_35`,_=`_keys_18nd2_39`,v=`_separator_18nd2_46`,y=`_sm_18nd2_51`,b=`_lg_18nd2_60`,x={root:f,title:p,list:m,item:h,label:g,keys:_,separator:v,sm:y,lg:b}})))()}var C,w,T,E;function D(){return(D=t((()=>{C=e(r(),1),w=e(l(),1),u(),S(),T=c(),E=C.forwardRef(({shortcuts:e,title:t,titleLevel:n,separator:r=`+`,size:i=`md`,className:a,...o},s)=>{let c=n?`h${n}`:null;return(0,T.jsxs)(`div`,{className:(0,w.default)(`wim-keyboard-shortcuts`,x.root,x[i],a),children:[t&&(c?(0,T.jsx)(c,{className:x.title,children:t}):(0,T.jsx)(`p`,{className:x.title,children:t})),(0,T.jsx)(`dl`,{ref:s,className:x.list,...o,children:e.map((e,t)=>(0,T.jsxs)(`div`,{className:x.item,children:[(0,T.jsx)(`dt`,{className:x.label,children:e.label}),(0,T.jsx)(`dd`,{className:x.keys,children:e.keys.map((e,t)=>(0,T.jsxs)(C.Fragment,{children:[t>0&&(0,T.jsx)(`span`,{className:x.separator,"aria-hidden":`true`,children:r}),(0,T.jsx)(d,{size:i,children:e})]},t))})]},t))})]})}),E.displayName=`KeyboardShortcuts`,E.__docgenInfo={description:`Displays a list of keyboard shortcuts.`,methods:[],displayName:`KeyboardShortcuts`,props:{shortcuts:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  /** Description label of the shortcut */
  label: string;
  /** Keys of the shortcut (e.g. ["Ctrl", "K"]) */
  keys: string[];
}`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0},description:`Description label of the shortcut`},{key:`keys`,value:{name:`Array`,elements:[{name:`string`}],raw:`string[]`,required:!0},description:`Keys of the shortcut (e.g. ["Ctrl", "K"])`}]}}],raw:`ShortcutItem[]`},description:`List of shortcuts to display`},title:{required:!1,tsType:{name:`string`},description:`Section title`},titleLevel:{required:!1,tsType:{name:`union`,raw:`2 | 3 | 4 | 5 | 6`,elements:[{name:`literal`,value:`2`},{name:`literal`,value:`3`},{name:`literal`,value:`4`},{name:`literal`,value:`5`},{name:`literal`,value:`6`}]},description:"`title` を見出しとして描くときの段（T211）。渡さなければ見出しにならず `p` のまま。\n\nショートカット一覧は「編集」「移動」のように節ごとに積んで使うので、段で辿れると\n効く。ただし既定を見出しにはしない ── 段を決め打つとページに `h1` / `h2` がある\n場合に段が飛び、axe の `heading-order` が鳴る（T191 で `Footer` が実際に踏んだ）。\n段を決めるのはページ側の構造を知っている呼び出し元の仕事で、`Alert` の `titleTag`\n（既定 `div`）と同じ形。"},separator:{required:!1,tsType:{name:`string`},description:`Separator displayed between keys
@default "+"`,defaultValue:{value:`"+"`,computed:!1}},size:{required:!1,tsType:{name:`Extract`,elements:[{name:`union`,raw:`"xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl"`,elements:[{name:`literal`,value:`"xs"`},{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`},{name:`literal`,value:`"xl"`},{name:`literal`,value:`"2xl"`},{name:`literal`,value:`"3xl"`},{name:`literal`,value:`"4xl"`},{name:`literal`,value:`"5xl"`}]},{name:`union`,raw:`"sm" | "md" | "lg"`,elements:[{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`}]}],raw:`Extract<ComponentSize, "sm" | "md" | "lg">`},description:`Size of the list
@default "md"`,defaultValue:{value:`"md"`,computed:!1}}}}})))()}var O=n({Default:()=>j,Large:()=>P,MacStyle:()=>F,Small:()=>N,WithTitle:()=>M,__namedExportsOrder:()=>I,default:()=>A}),k,A,j,M,N,P,F,I;function L(){return(L=t((()=>{a(),o(),D(),k=c(),A={title:`Components/Navigation Utilities/KeyboardShortcuts`,component:E,parameters:{layout:`centered`},argTypes:{size:{control:`radio`,options:[`sm`,`md`,`lg`]},separator:{control:`text`}}},j={render:function(e){let{t}=i(s);return(0,k.jsx)(E,{...e,size:`md`,shortcuts:[{label:t(`story.ks_open_cmd_palette`),keys:[`Ctrl`,`K`]},{label:t(`story.ks_save`),keys:[`Ctrl`,`S`]},{label:t(`story.ks_undo`),keys:[`Ctrl`,`Z`]},{label:t(`story.ks_redo`),keys:[`Ctrl`,`Shift`,`Z`]},{label:t(`story.ks_find`),keys:[`Ctrl`,`F`]}]})}},M={render:function(e){let{t}=i(s);return(0,k.jsx)(E,{...e,size:`md`,title:t(`story.ks_general`),shortcuts:[{label:t(`story.ks_open_cmd_palette`),keys:[`Ctrl`,`K`]},{label:t(`story.ks_save`),keys:[`Ctrl`,`S`]},{label:t(`story.ks_undo`),keys:[`Ctrl`,`Z`]},{label:t(`story.ks_redo`),keys:[`Ctrl`,`Shift`,`Z`]},{label:t(`story.ks_find`),keys:[`Ctrl`,`F`]}]})}},N={render:function(e){let{t}=i(s);return(0,k.jsx)(E,{...e,size:`sm`,shortcuts:[{label:t(`story.ks_open_cmd_palette`),keys:[`Ctrl`,`K`]},{label:t(`story.ks_save`),keys:[`Ctrl`,`S`]},{label:t(`story.ks_undo`),keys:[`Ctrl`,`Z`]},{label:t(`story.ks_redo`),keys:[`Ctrl`,`Shift`,`Z`]},{label:t(`story.ks_find`),keys:[`Ctrl`,`F`]}]})}},P={render:function(e){let{t}=i(s);return(0,k.jsx)(E,{...e,size:`lg`,shortcuts:[{label:t(`story.ks_open_cmd_palette`),keys:[`Ctrl`,`K`]},{label:t(`story.ks_save`),keys:[`Ctrl`,`S`]},{label:t(`story.ks_undo`),keys:[`Ctrl`,`Z`]},{label:t(`story.ks_redo`),keys:[`Ctrl`,`Shift`,`Z`]},{label:t(`story.ks_find`),keys:[`Ctrl`,`F`]}]})}},F={render:function(e){let{t}=i(s);return(0,k.jsx)(E,{...e,size:`md`,title:t(`story.ks_editing`),shortcuts:[{label:t(`story.ks_open_cmd_palette`),keys:[`⌘`,`K`]},{label:t(`story.ks_save`),keys:[`⌘`,`S`]},{label:t(`story.ks_undo`),keys:[`⌘`,`Z`]},{label:t(`story.ks_redo`),keys:[`⌘`,`⇧`,`Z`]},{label:t(`story.ks_select_all`),keys:[`⌘`,`A`]}]})}},I=[`Default`,`WithTitle`,`Small`,`Large`,`MacStyle`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <KeyboardShortcuts {...args} size="md" shortcuts={[{
      label: t("story.ks_open_cmd_palette"),
      keys: ["Ctrl", "K"]
    }, {
      label: t("story.ks_save"),
      keys: ["Ctrl", "S"]
    }, {
      label: t("story.ks_undo"),
      keys: ["Ctrl", "Z"]
    }, {
      label: t("story.ks_redo"),
      keys: ["Ctrl", "Shift", "Z"]
    }, {
      label: t("story.ks_find"),
      keys: ["Ctrl", "F"]
    }]} />;
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <KeyboardShortcuts {...args} size="md" title={t("story.ks_general")} shortcuts={[{
      label: t("story.ks_open_cmd_palette"),
      keys: ["Ctrl", "K"]
    }, {
      label: t("story.ks_save"),
      keys: ["Ctrl", "S"]
    }, {
      label: t("story.ks_undo"),
      keys: ["Ctrl", "Z"]
    }, {
      label: t("story.ks_redo"),
      keys: ["Ctrl", "Shift", "Z"]
    }, {
      label: t("story.ks_find"),
      keys: ["Ctrl", "F"]
    }]} />;
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <KeyboardShortcuts {...args} size="sm" shortcuts={[{
      label: t("story.ks_open_cmd_palette"),
      keys: ["Ctrl", "K"]
    }, {
      label: t("story.ks_save"),
      keys: ["Ctrl", "S"]
    }, {
      label: t("story.ks_undo"),
      keys: ["Ctrl", "Z"]
    }, {
      label: t("story.ks_redo"),
      keys: ["Ctrl", "Shift", "Z"]
    }, {
      label: t("story.ks_find"),
      keys: ["Ctrl", "F"]
    }]} />;
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <KeyboardShortcuts {...args} size="lg" shortcuts={[{
      label: t("story.ks_open_cmd_palette"),
      keys: ["Ctrl", "K"]
    }, {
      label: t("story.ks_save"),
      keys: ["Ctrl", "S"]
    }, {
      label: t("story.ks_undo"),
      keys: ["Ctrl", "Z"]
    }, {
      label: t("story.ks_redo"),
      keys: ["Ctrl", "Shift", "Z"]
    }, {
      label: t("story.ks_find"),
      keys: ["Ctrl", "F"]
    }]} />;
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <KeyboardShortcuts {...args} size="md" title={t("story.ks_editing")} shortcuts={[{
      label: t("story.ks_open_cmd_palette"),
      keys: ["⌘", "K"]
    }, {
      label: t("story.ks_save"),
      keys: ["⌘", "S"]
    }, {
      label: t("story.ks_undo"),
      keys: ["⌘", "Z"]
    }, {
      label: t("story.ks_redo"),
      keys: ["⌘", "⇧", "Z"]
    }, {
      label: t("story.ks_select_all"),
      keys: ["⌘", "A"]
    }]} />;
  }
}`,...F.parameters?.docs?.source}}}})))()}export{N as a,F as i,O as n,M as o,P as r,L as s,j as t};