import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as x}from"./index-DaS8FBbW.js";import{u as v}from"./useTranslation-BXCRfihX.js";import{I as c}from"./Icon-BGLtcWFY.js";import{B as l}from"./Button-Br8ONUgx.js";const y=({title:h,description:p,icon:m,action:d,variant:u="default",className:f,...j})=>{const{t:g}=v();return e.jsxs("div",{className:x("wim-empty-state",u!=="default"&&`wim-empty-state--${u}`,f),...j,children:[m&&e.jsx("div",{className:"wim-empty-state__icon",children:m}),e.jsx("h3",{className:"wim-empty-state__title",children:g(h)}),p&&e.jsx("p",{className:"wim-empty-state__description",children:g(p)}),d&&e.jsx("div",{className:"wim-empty-state__action",children:d})]})};y.__docgenInfo={description:"データが空の場合や、検索結果がない場合などに表示するプレースホルダーコンポーネント。",methods:[],displayName:"EmptyState",props:{title:{required:!0,tsType:{name:"string"},description:"表示するタイトル（翻訳キーも可）。"},description:{required:!1,tsType:{name:"string"},description:"表示する説明文（翻訳キーも可）。"},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"表示するアイコン。"},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"アクションとして表示する要素（ボタンなど）。"},variant:{required:!1,tsType:{name:"union",raw:'"default" | "simple"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"simple"'}]},description:"デザインバリエーション。",defaultValue:{value:'"default"',computed:!1}}}};const w={title:"Component/Data Display/EmptyState",component:y,tags:[],parameters:{layout:"centered"}},t={args:{title:"No data found",description:"We couldn't find any data matching your search. Please try again with different keywords.",icon:e.jsx(c,{name:"SearchIcon",size:"large"}),action:e.jsx(l,{label:"Clear search"})}},r={args:{title:"No messages yet",description:"When you receive messages, they will appear here.",variant:"simple"}},a={args:{title:"List is empty",icon:e.jsx(c,{name:"CircleIcon",size:"large"})}},s={args:{title:"Ready to start?",description:"Create your first project to begin tracking your progress.",icon:e.jsx("svg",{viewBox:"0 0 24 24",width:"48",height:"48",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M12 5v14M5 12h14"})}),action:e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(l,{label:"Browse templates",priority:"secondary"}),e.jsx(l,{label:"Create project",priority:"primary"})]})}},o={args:{title:"メールがありません",description:"受信トレイは空です。新しいメッセージが届くとここに表示されます。",icon:e.jsx(c,{name:"EmailIcon",size:"large"})}},i={args:{title:"動画が見つかりません",description:"アップロードされた動画がまだありません。最初の動画を追加しましょう。",icon:e.jsx(c,{name:"VideoIcon",size:"large"}),action:e.jsx(l,{label:"動画をアップロード",priority:"primary"})}},n={args:{title:"ファイルがありません",description:"このフォルダにはドキュメントが含まれていません。",icon:e.jsx(c,{name:"DocumentIcon",size:"large"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: "メールがありません",
    description: "受信トレイは空です。新しいメッセージが届くとここに表示されます。",
    icon: <Icon name="EmailIcon" size="large" />
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: "動画が見つかりません",
    description: "アップロードされた動画がまだありません。最初の動画を追加しましょう。",
    icon: <Icon name="VideoIcon" size="large" />,
    action: <Button label="動画をアップロード" priority="primary" />
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: "ファイルがありません",
    description: "このフォルダにはドキュメントが含まれていません。",
    icon: <Icon name="DocumentIcon" size="large" />
  }
}`,...n.parameters?.docs?.source}}};const N=["Default","Simple","WithoutDescription","CustomAction","NoMessages","NoVideos","NoFiles"],k=Object.freeze(Object.defineProperty({__proto__:null,CustomAction:s,Default:t,NoFiles:n,NoMessages:o,NoVideos:i,Simple:r,WithoutDescription:a,__namedExportsOrder:N,default:w},Symbol.toStringTag,{value:"Module"}));export{s as C,t as D,k as E,r as S};
