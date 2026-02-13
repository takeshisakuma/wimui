import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-DI7J9QVw.js";import{M as t,P as s,a as p,d as e}from"./index-wQ-fu4Ac.js";import{D as c,W as h,A as l}from"./Dropdown.stories-DWxtBbQ7.js";import{T as m}from"./T-BBfoCICe.js";import"./iframe-8PFyu00w.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D8Mn0_-2.js";import"./index-CNF4RscW.js";import"./index-Bgsm3l6N.js";import"./index-CsnEVgKO.js";import"./index-v9oG74FQ.js";import"./index-D8TpllMe.js";import"./Button-Bp7GRDi3.js";import"./Icon-D4Pw3yPr.js";import"./useTranslation-Cyt_ZMVf.js";function i(r){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:c}),`
`,n.jsx(o.h1,{id:"dropdown",children:"Dropdown"}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(m,{k:"doc_dropdown_title"})}),`
`,n.jsxs(o.p,{children:[`一般的なアクションメニューやナビゲーションメニューを表示するためのコンポーネントです。\r
`,n.jsx(o.code,{children:"Selectbox"}),"とは異なり、フォーム入力のためではなく、コマンドの実行やリンクへの遷移に使用されます。"]}),`
`,n.jsx(o.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-tsx",children:`import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "wimui";\r
import { T } from "../T";\r
\r
<Dropdown>\r
  <DropdownTrigger>\r
    <Button label="Open Menu" />\r
  </DropdownTrigger>\r
  <DropdownMenu>\r
    <DropdownItem onClick={handleProfile}>Profile</DropdownItem>\r
    <DropdownItem onClick={handleSettings}>Settings</DropdownItem>\r
  </DropdownMenu>\r
</Dropdown>
`})}),`
`,n.jsx(s,{}),`
`,n.jsx(o.h2,{id:"components",children:"Components"}),`
`,n.jsx(o.h3,{id:"dropdown-1",children:"Dropdown"}),`
`,n.jsx(o.p,{children:"ルートコンポーネント。開閉状態を管理します。"}),`
`,n.jsx(o.h3,{id:"dropdowntrigger",children:"DropdownTrigger"}),`
`,n.jsxs(o.p,{children:["メニューを開閉するトリガーとなる要素をラップします。通常は ",n.jsx(o.code,{children:"Button"})," や ",n.jsx(o.code,{children:"Icon"})," などを含めます。"]}),`
`,n.jsx(o.h3,{id:"dropdownmenu",children:"DropdownMenu"}),`
`,n.jsxs(o.p,{children:["ドロップダウンのメニュー本体です。",n.jsx(o.code,{children:"align"})," プロパティで表示位置（左寄せ/右寄せ）を制御できます。"]}),`
`,n.jsx(o.h3,{id:"dropdownitem",children:"DropdownItem"}),`
`,n.jsxs(o.p,{children:["メニュー内の各項目です。",n.jsx(o.code,{children:"onClick"})," ハンドラを設定したり、Disabled状態にすることができます。"]}),`
`,n.jsx(p,{}),`
`,n.jsx(o.h2,{id:"stories",children:"Stories"}),`
`,n.jsx(o.h3,{id:"with-icons",children:"With Icons"}),`
`,n.jsx(o.p,{children:"アイコンを含めたメニュー項目の例です。"}),`
`,n.jsx(e,{of:h}),`
`,n.jsx(o.h3,{id:"right-alignment",children:"Right Alignment"}),`
`,n.jsx(o.p,{children:"メニューを右寄せにする例です。画面の右端にあるトリガーに適しています。"}),`
`,n.jsx(e,{of:l})]})}function _(r={}){const{wrapper:o}={...d(),...r.components};return o?n.jsx(o,{...r,children:n.jsx(i,{...r})}):i(r)}export{_ as default};
