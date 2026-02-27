import{j as e}from"./jsx-runtime-u17CrQMm.js";import{I as a}from"./Input-BpMH2Dw5.js";import{L as n}from"./Label-CxGWCi3y.js";import{F as h}from"./FieldError-BvCuccpk.js";const b={title:"Components/Basic Inputs/Input",component:a,parameters:{layout:"centered"},argTypes:{leftIcon:{control:"select",options:["SearchIcon"]},rightIcon:{control:"select",options:["ChevronDownIcon"]},leftIconColor:{control:"select",options:["primary","secondary","tertiary","destructive","positive","caution","informative","disabled"]},rightIconColor:{control:"select",options:["primary","secondary","tertiary","destructive","positive","caution","informative","disabled"]}}},o={render:r=>e.jsx(n,{label:"お名前",children:e.jsx(a,{...r})}),args:{placeholder:"山田太郎"}},l={render:r=>{const m=()=>alert("Dropdown or Modal would open here!");return e.jsx(n,{label:"部署",children:e.jsx(a,{...r,onClick:m,onRightIconClick:g=>{g.stopPropagation(),m()}})})},args:{rightIcon:"ChevronDownIcon",placeholder:"営業部",readOnly:!0,style:{cursor:"pointer"}}},s={render:r=>e.jsx(n,{label:"キーワード",children:e.jsx(a,{...r,allowClear:!0,placeholder:"Tシャツ"})}),args:{defaultValue:"Yシャツ"}},t={render:r=>e.jsx(n,{label:"会社名",children:e.jsx(a,{...r})}),args:{variant:"outline",placeholder:"株式会社Example"}},c={render:r=>e.jsx(n,{label:"備考",children:e.jsx(a,{...r})}),args:{variant:"ghost",placeholder:"機能の改善点について"}},d={render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(n,{label:"メールアドレス",required:!0,children:e.jsx(a,{...r,placeholder:"taro.yamada@example.com"})}),e.jsx(h,{content:"有効なメールアドレスを入力してください。"})]}),args:{state:"error",defaultValue:"invalid-email@"}},i={render:r=>e.jsx(n,{label:"ユーザーID",children:e.jsx(a,{...r})}),args:{disabled:!0,placeholder:"WIM-1234"}},p={render:r=>e.jsx(n,{label:"連絡先",style:{width:"100%"},children:e.jsx(a,{...r})}),args:{fullWidth:!0,placeholder:"info@example.com"},parameters:{layout:"padded"}},u={render:r=>e.jsx(n,{label:"コンポーネント検索",children:e.jsx(a,{...r,leftIcon:"SearchIcon"})}),args:{placeholder:"Button"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="お名前">\r
      <Input {...args} />\r
    </Label>,
  args: {
    placeholder: "山田太郎"
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    const handleClick = () => alert("Dropdown or Modal would open here!");
    return <Label label="部署">\r
        <Input {...args} onClick={handleClick} onRightIconClick={e => {
        e.stopPropagation(); // Prevent duplicate alert
        handleClick();
      }} />\r
      </Label>;
  },
  args: {
    rightIcon: "ChevronDownIcon",
    placeholder: "営業部",
    readOnly: true,
    style: {
      cursor: "pointer"
    }
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="キーワード">\r
      <Input {...args} allowClear placeholder="Tシャツ" />\r
    </Label>,
  args: {
    defaultValue: "Yシャツ"
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="会社名">\r
      <Input {...args} />\r
    </Label>,
  args: {
    variant: "outline",
    placeholder: "株式会社Example"
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="備考">\r
      <Input {...args} />\r
    </Label>,
  args: {
    variant: "ghost",
    placeholder: "機能の改善点について"
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  }}>\r
      <Label label="メールアドレス" required>\r
        <Input {...args} placeholder="taro.yamada@example.com" />\r
      </Label>\r
      <FieldError content="有効なメールアドレスを入力してください。" />\r
    </div>,
  args: {
    state: "error",
    defaultValue: "invalid-email@"
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="ユーザーID">\r
      <Input {...args} />\r
    </Label>,
  args: {
    disabled: true,
    placeholder: "WIM-1234"
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="連絡先" style={{
    width: "100%"
  }}>\r
      <Input {...args} />\r
    </Label>,
  args: {
    fullWidth: true,
    placeholder: "info@example.com"
  },
  parameters: {
    layout: "padded"
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="コンポーネント検索">\r
      <Input {...args} leftIcon="SearchIcon" />\r
    </Label>,
  args: {
    placeholder: "Button"
  }
}`,...u.parameters?.docs?.source}}};const I=["Default","SelectLike","Clearable","Outline","Ghost","ErrorStatus","Disabled","FullWidth","SearchIndicator"],L=Object.freeze(Object.defineProperty({__proto__:null,Clearable:s,Default:o,Disabled:i,ErrorStatus:d,FullWidth:p,Ghost:c,Outline:t,SearchIndicator:u,SelectLike:l,__namedExportsOrder:I,default:b},Symbol.toStringTag,{value:"Module"}));export{s as C,o as D,d as E,p as F,c as G,L as I,t as O,u as S,i as a};
