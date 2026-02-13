import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as h}from"./index-MafWY-Pw.js";import{u as f}from"./useTranslation-BcpEdxCw.js";import{I as d}from"./Icon-WCf84-EP.js";import{B as o}from"./Button-BfxcO7p9.js";const m=({title:u,description:i,icon:n,action:c,variant:l="default",className:y,...g})=>{const{t:p}=f();return e.jsxs("div",{className:h("wim-empty-state",l!=="default"&&`wim-empty-state--${l}`,y),...g,children:[n&&e.jsx("div",{className:"wim-empty-state__icon",children:n}),e.jsx("h3",{className:"wim-empty-state__title",children:p(u)}),i&&e.jsx("p",{className:"wim-empty-state__description",children:p(i)}),c&&e.jsx("div",{className:"wim-empty-state__action",children:c})]})};m.__docgenInfo={description:"データが空の場合や、検索結果がない場合などに表示するプレースホルダーコンポーネント。",methods:[],displayName:"EmptyState",props:{title:{required:!0,tsType:{name:"string"},description:"表示するタイトル（翻訳キーも可）。"},description:{required:!1,tsType:{name:"string"},description:"表示する説明文（翻訳キーも可）。"},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"表示するアイコン。"},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"アクションとして表示する要素（ボタンなど）。"},variant:{required:!1,tsType:{name:"union",raw:'"default" | "simple"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"simple"'}]},description:"デザインバリエーション。",defaultValue:{value:'"default"',computed:!1}}}};const j={title:"Component/Data Display/EmptyState",component:m,tags:[],parameters:{layout:"centered"}},t={args:{title:"No data found",description:"We couldn't find any data matching your search. Please try again with different keywords.",icon:e.jsx(d,{name:"SearchIcon",size:"large"}),action:e.jsx(o,{label:"Clear search"})}},r={args:{title:"No messages yet",description:"When you receive messages, they will appear here.",variant:"simple"}},a={args:{title:"List is empty",icon:e.jsx(d,{name:"CircleIcon",size:"large"})}},s={args:{title:"Ready to start?",description:"Create your first project to begin tracking your progress.",icon:e.jsx("svg",{viewBox:"0 0 24 24",width:"48",height:"48",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M12 5v14M5 12h14"})}),action:e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(o,{label:"Browse templates",priority:"secondary"}),e.jsx(o,{label:"Create project",priority:"primary"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: "No data found",
    description: "We couldn't find any data matching your search. Please try again with different keywords.",
    icon: <Icon name="SearchIcon" size="large" />,
    action: <Button label="Clear search" />
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: "No messages yet",
    description: "When you receive messages, they will appear here.",
    variant: "simple"
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: "List is empty",
    icon: <Icon name="CircleIcon" size="large" />
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Ready to start?",
    description: "Create your first project to begin tracking your progress.",
    icon: <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\r
                <path d="M12 5v14M5 12h14" />\r
            </svg>,
    action: <div style={{
      display: "flex",
      gap: "8px"
    }}>\r
                <Button label="Browse templates" priority="secondary" />\r
                <Button label="Create project" priority="primary" />\r
            </div>
  }
}`,...s.parameters?.docs?.source}}};const x=["Default","Simple","WithoutDescription","CustomAction"],C=Object.freeze(Object.defineProperty({__proto__:null,CustomAction:s,Default:t,Simple:r,WithoutDescription:a,__namedExportsOrder:x,default:j},Symbol.toStringTag,{value:"Module"}));export{s as C,t as D,C as E,r as S};
