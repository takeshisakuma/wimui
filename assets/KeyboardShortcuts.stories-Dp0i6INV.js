"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-sJBDdmOt.js";import{t as r}from"./react-BGJ90fIb.js";import{n as i,t as a}from"./useTranslation-DzWR_e8l.js";import{n as o,t as s}from"./i18nConstants-Dz9WmqoW.js";import{t as c}from"./jsx-runtime-MKhVqBIO.js";import{t as l}from"./classnames-DQoS6hca.js";import{n as u,t as d}from"./VisualUppercase-INViMK6F.js";import{n as f,t as p}from"./Kbd-BZmJ871U.js";var m,h,g,_,v,y,b,x,S,C;function w(){return(w=t((()=>{m=`_root_1vukx_4`,h=`_title_1vukx_9`,g=`_list_1vukx_16`,_=`_item_1vukx_23`,v=`_label_1vukx_34`,y=`_keys_1vukx_38`,b=`_separator_1vukx_45`,x=`_sm_1vukx_50`,S=`_lg_1vukx_59`,C={root:m,title:h,list:g,item:_,label:v,keys:y,separator:b,sm:x,lg:S}})))()}var T,E,D,O;function k(){return(k=t((()=>{T=e(r(),1),E=e(l(),1),f(),w(),u(),D=c(),O=T.forwardRef(({shortcuts:e,title:t,titleLevel:n,separator:r=`+`,size:i=`md`,className:a,...o},s)=>{let c=n?`h${n}`:null;return(0,D.jsxs)(`div`,{className:(0,E.default)(`wim-keyboard-shortcuts`,C.root,C[i],a),children:[t&&(c?(0,D.jsx)(c,{className:C.title,children:(0,D.jsx)(d,{children:t})}):(0,D.jsx)(`p`,{className:C.title,children:(0,D.jsx)(d,{children:t})})),(0,D.jsx)(`dl`,{ref:s,className:C.list,...o,children:e.map((e,t)=>(0,D.jsxs)(`div`,{className:C.item,children:[(0,D.jsx)(`dt`,{className:C.label,children:e.label}),(0,D.jsx)(`dd`,{className:C.keys,children:e.keys.map((e,t)=>(0,D.jsxs)(T.Fragment,{children:[t>0&&(0,D.jsx)(`span`,{className:C.separator,"aria-hidden":`true`,children:r}),(0,D.jsx)(p,{size:i,children:e})]},t))})]},t))})]})}),O.displayName=`KeyboardShortcuts`,O.__docgenInfo={description:`Displays a list of keyboard shortcuts.`,methods:[],displayName:`KeyboardShortcuts`,props:{shortcuts:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  /** Description label of the shortcut */
  label: string;
  /** Keys of the shortcut (e.g. ["Ctrl", "K"]) */
  keys: string[];
}`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0},description:`Description label of the shortcut`},{key:`keys`,value:{name:`Array`,elements:[{name:`string`}],raw:`string[]`,required:!0},description:`Keys of the shortcut (e.g. ["Ctrl", "K"])`}]}}],raw:`ShortcutItem[]`},description:`List of shortcuts to display`},title:{required:!1,tsType:{name:`string`},description:`Section title`},titleLevel:{required:!1,tsType:{name:`union`,raw:`2 | 3 | 4 | 5 | 6`,elements:[{name:`literal`,value:`2`},{name:`literal`,value:`3`},{name:`literal`,value:`4`},{name:`literal`,value:`5`},{name:`literal`,value:`6`}]},description:"`title` を見出しとして描くときの段（T211）。渡さなければ見出しにならず `p` のまま。\n\nショートカット一覧は「編集」「移動」のように節ごとに積んで使うので、段で辿れると\n効く。ただし既定を見出しにはしない ── 段を決め打つとページに `h1` / `h2` がある\n場合に段が飛び、axe の `heading-order` が鳴る（T191 で `Footer` が実際に踏んだ）。\n段を決めるのはページ側の構造を知っている呼び出し元の仕事で、`Alert` の `titleTag`\n（既定 `div`）と同じ形。"},separator:{required:!1,tsType:{name:`string`},description:`Separator displayed between keys
@default "+"`,defaultValue:{value:`"+"`,computed:!1}},size:{required:!1,tsType:{name:`Extract`,elements:[{name:`union`,raw:`"xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl"`,elements:[{name:`literal`,value:`"xs"`},{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`},{name:`literal`,value:`"xl"`},{name:`literal`,value:`"2xl"`},{name:`literal`,value:`"3xl"`},{name:`literal`,value:`"4xl"`},{name:`literal`,value:`"5xl"`}]},{name:`union`,raw:`"sm" | "md" | "lg"`,elements:[{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`}]}],raw:`Extract<ComponentSize, "sm" | "md" | "lg">`},description:`Size of the list
@default "md"`,defaultValue:{value:`"md"`,computed:!1}}}}})))()}var A=n({Default:()=>N,Large:()=>I,MacStyle:()=>L,Small:()=>F,WithTitle:()=>P,__namedExportsOrder:()=>R,default:()=>M}),j,M,N,P,F,I,L,R;function z(){return(z=t((()=>{a(),o(),k(),j=c(),M={title:`Components/Navigation Utilities/KeyboardShortcuts`,component:O,parameters:{layout:`centered`},argTypes:{size:{control:`radio`,options:[`sm`,`md`,`lg`]},separator:{control:`text`}}},N={render:function(e){let{t}=i(s);return(0,j.jsx)(O,{...e,size:`md`,shortcuts:[{label:t(`story.ks_open_cmd_palette`),keys:[`Ctrl`,`K`]},{label:t(`story.ks_save`),keys:[`Ctrl`,`S`]},{label:t(`story.ks_undo`),keys:[`Ctrl`,`Z`]},{label:t(`story.ks_redo`),keys:[`Ctrl`,`Shift`,`Z`]},{label:t(`story.ks_find`),keys:[`Ctrl`,`F`]}]})}},P={render:function(e){let{t}=i(s);return(0,j.jsx)(O,{...e,size:`md`,title:t(`story.ks_general`),shortcuts:[{label:t(`story.ks_open_cmd_palette`),keys:[`Ctrl`,`K`]},{label:t(`story.ks_save`),keys:[`Ctrl`,`S`]},{label:t(`story.ks_undo`),keys:[`Ctrl`,`Z`]},{label:t(`story.ks_redo`),keys:[`Ctrl`,`Shift`,`Z`]},{label:t(`story.ks_find`),keys:[`Ctrl`,`F`]}]})}},F={render:function(e){let{t}=i(s);return(0,j.jsx)(O,{...e,size:`sm`,shortcuts:[{label:t(`story.ks_open_cmd_palette`),keys:[`Ctrl`,`K`]},{label:t(`story.ks_save`),keys:[`Ctrl`,`S`]},{label:t(`story.ks_undo`),keys:[`Ctrl`,`Z`]},{label:t(`story.ks_redo`),keys:[`Ctrl`,`Shift`,`Z`]},{label:t(`story.ks_find`),keys:[`Ctrl`,`F`]}]})}},I={render:function(e){let{t}=i(s);return(0,j.jsx)(O,{...e,size:`lg`,shortcuts:[{label:t(`story.ks_open_cmd_palette`),keys:[`Ctrl`,`K`]},{label:t(`story.ks_save`),keys:[`Ctrl`,`S`]},{label:t(`story.ks_undo`),keys:[`Ctrl`,`Z`]},{label:t(`story.ks_redo`),keys:[`Ctrl`,`Shift`,`Z`]},{label:t(`story.ks_find`),keys:[`Ctrl`,`F`]}]})}},L={render:function(e){let{t}=i(s);return(0,j.jsx)(O,{...e,size:`md`,title:t(`story.ks_editing`),shortcuts:[{label:t(`story.ks_open_cmd_palette`),keys:[`⌘`,`K`]},{label:t(`story.ks_save`),keys:[`⌘`,`S`]},{label:t(`story.ks_undo`),keys:[`⌘`,`Z`]},{label:t(`story.ks_redo`),keys:[`⌘`,`⇧`,`Z`]},{label:t(`story.ks_select_all`),keys:[`⌘`,`A`]}]})}},R=[`Default`,`WithTitle`,`Small`,`Large`,`MacStyle`],N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}}})))()}export{F as a,L as i,A as n,P as o,I as r,z as s,N as t};