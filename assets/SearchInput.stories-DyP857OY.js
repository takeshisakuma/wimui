import{j as r}from"./jsx-runtime-u17CrQMm.js";import{I as s}from"./Input-DsNMX1Lb.js";import{L as c}from"./Label-DUEiJYXV.js";import{u as l}from"./useTranslation-oYtfLuBR.js";const o=n=>r.jsx(s,{leftIcon:"SearchIcon",allowClear:!0,...n});o.__docgenInfo={description:`検索に特化した入力コンポーネント。
検索アイコンを標準装備し、入力がある場合はクリアボタンを表示します。`,methods:[],displayName:"SearchInput"};const p={title:"Components/Basic Inputs/SearchInput",component:o,tags:[]},e={render:function(a){const{t}=l(["docs","common","components"]);return r.jsx(c,{label:t("doc_search"),children:r.jsx(o,{...a,placeholder:t("story_searchinput_placeholder")})})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Label label={t("doc_search")}>\r
        <SearchInput {...args} placeholder={t("story_searchinput_placeholder")} />\r
      </Label>;
  }
}`,...e.parameters?.docs?.source}}};const u=["Default"],_=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:u,default:p},Symbol.toStringTag,{value:"Module"}));export{e as D,_ as S};
