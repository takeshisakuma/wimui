import{j as e}from"./jsx-runtime-u17CrQMm.js";import{E as l}from"./EmptyState-Bhf49pUK.js";import{I as c}from"./Icon-NJZqQ_ZW.js";import{B as p}from"./Button-CqiCyHTA.js";const m={title:"Component/Data Indicators/EmptyState",component:l,tags:[],parameters:{layout:"centered"}},r={args:{title:"No data found",description:"We couldn't find any data matching your search. Please try again with different keywords.",icon:e.jsx(c,{name:"SearchIcon",size:"large"}),action:e.jsx(p,{label:"Clear search"})}},t={args:{title:"No messages yet",description:"When you receive messages, they will appear here.",variant:"simple"}},o={args:{title:"List is empty",icon:e.jsx(c,{name:"CircleIcon",size:"large"})}},s={args:{title:"Ready to start?",description:"Create your first project to begin tracking your progress.",icon:e.jsx("svg",{viewBox:"0 0 24 24",width:"48",height:"48",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M12 5v14M5 12h14"})}),action:e.jsxs(e.Fragment,{children:[e.jsx(p,{label:"Browse templates",priority:"secondary"}),e.jsx(p,{label:"Create project",priority:"primary"})]})}},a={args:{title:"メールがありません",description:"受信トレイは空です。新しいメッセージが届くとここに表示されます。",icon:e.jsx(c,{name:"EmailIcon",size:"large"})}},n={args:{title:"動画が見つかりません",description:"アップロードされた動画がまだありません。最初の動画を追加しましょう。",icon:e.jsx(c,{name:"VideoIcon",size:"large"}),action:e.jsx(p,{label:"動画をアップロード",priority:"primary"})}},i={args:{title:"ファイルがありません",description:"このフォルダにはドキュメントが含まれていません。",icon:e.jsx(c,{name:"DocumentIcon",size:"large"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: "No data found",
    description: "We couldn't find any data matching your search. Please try again with different keywords.",
    icon: <Icon name="SearchIcon" size="large" />,
    action: <Button label="Clear search" />
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: "No messages yet",
    description: "When you receive messages, they will appear here.",
    variant: "simple"
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: "List is empty",
    icon: <Icon name="CircleIcon" size="large" />
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Ready to start?",
    description: "Create your first project to begin tracking your progress.",
    icon: <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\r
                <path d="M12 5v14M5 12h14" />\r
            </svg>,
    action: <>\r
                <Button label="Browse templates" priority="secondary" />\r
                <Button label="Create project" priority="primary" />\r
            </>
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: "メールがありません",
    description: "受信トレイは空です。新しいメッセージが届くとここに表示されます。",
    icon: <Icon name="EmailIcon" size="large" />
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: "動画が見つかりません",
    description: "アップロードされた動画がまだありません。最初の動画を追加しましょう。",
    icon: <Icon name="VideoIcon" size="large" />,
    action: <Button label="動画をアップロード" priority="primary" />
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: "ファイルがありません",
    description: "このフォルダにはドキュメントが含まれていません。",
    icon: <Icon name="DocumentIcon" size="large" />
  }
}`,...i.parameters?.docs?.source}}};const d=["Default","Simple","WithoutDescription","CustomAction","NoMessages","NoVideos","NoFiles"],j=Object.freeze(Object.defineProperty({__proto__:null,CustomAction:s,Default:r,NoFiles:i,NoMessages:a,NoVideos:n,Simple:t,WithoutDescription:o,__namedExportsOrder:d,default:m},Symbol.toStringTag,{value:"Module"}));export{s as C,r as D,j as E,t as S};
