import{j as e}from"./jsx-runtime-u17CrQMm.js";import{P as t}from"./index-CXuirWey.js";import{u as v}from"./useTranslation-M0t7pCqY.js";import{I as u}from"./Icon-Bm4I9m_T.js";import{B as o}from"./Button-CgzFQIVM.js";const n=({title:y,description:c,icon:l,action:p,variant:d="default",className:g="",...f})=>{const{t:m}=v(),h=d!=="default"?`wim-empty-state--${d}`:"";return e.jsxs("div",{className:["wim-empty-state",h,g].filter(Boolean).join(" "),...f,children:[l&&e.jsx("div",{className:"wim-empty-state__icon",children:l}),e.jsx("h3",{className:"wim-empty-state__title",children:m(y)}),c&&e.jsx("p",{className:"wim-empty-state__description",children:m(c)}),p&&e.jsx("div",{className:"wim-empty-state__action",children:p})]})};n.propTypes={title:t.string.isRequired,description:t.string,icon:t.node,action:t.node,variant:t.oneOf(["default","simple"]),className:t.string};n.__docgenInfo={description:"データが空の場合や、検索結果がない場合などに表示するプレースホルダーコンポーネント。",methods:[],displayName:"EmptyState",props:{title:{required:!0,tsType:{name:"string"},description:"表示するタイトル（翻訳キーも可）。",type:{name:"string"}},description:{required:!1,tsType:{name:"string"},description:"表示する説明文（翻訳キーも可）。",type:{name:"string"}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"表示するアイコン。",type:{name:"node"}},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"アクションとして表示する要素（ボタンなど）。",type:{name:"node"}},variant:{required:!1,tsType:{name:"union",raw:'"default" | "simple"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"simple"'}]},description:"デザインバリエーション。",defaultValue:{value:'"default"',computed:!1},type:{name:"enum",value:[{value:'"default"',computed:!1},{value:'"simple"',computed:!1}]}},className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1}}};const j={title:"Component/Data Display/EmptyState",component:n,tags:[],parameters:{layout:"centered"}},a={args:{title:"No data found",description:"We couldn't find any data matching your search. Please try again with different keywords.",icon:e.jsx(u,{name:"SearchIcon",size:"large"}),action:e.jsx(o,{label:"Clear search"})}},r={args:{title:"No messages yet",description:"When you receive messages, they will appear here.",variant:"simple"}},s={args:{title:"List is empty",icon:e.jsx(u,{name:"CircleIcon",size:"large"})}},i={args:{title:"Ready to start?",description:"Create your first project to begin tracking your progress.",icon:e.jsx("svg",{viewBox:"0 0 24 24",width:"48",height:"48",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M12 5v14M5 12h14"})}),action:e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(o,{label:"Browse templates",priority:"secondary"}),e.jsx(o,{label:"Create project",priority:"primary"})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: "No data found",
    description: "We couldn't find any data matching your search. Please try again with different keywords.",
    icon: <Icon name="SearchIcon" size="large" />,
    action: <Button label="Clear search" />
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: "No messages yet",
    description: "When you receive messages, they will appear here.",
    variant: "simple"
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: "List is empty",
    icon: <Icon name="CircleIcon" size="large" />
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const x=["Default","Simple","WithoutDescription","CustomAction"],k=Object.freeze(Object.defineProperty({__proto__:null,CustomAction:i,Default:a,Simple:r,WithoutDescription:s,__namedExportsOrder:x,default:j},Symbol.toStringTag,{value:"Module"}));export{i as C,a as D,k as E,r as S};
