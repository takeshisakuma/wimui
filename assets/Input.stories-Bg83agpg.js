import{j as e}from"./jsx-runtime-u17CrQMm.js";import{I as a}from"./Input-CUff1Knh.js";import{L as n}from"./Label-BreNnClC.js";import{F as w}from"./FieldError-D0333T9w.js";import{B as S}from"./Button-BOV1HevS.js";const j={title:"Component/Forms/Input",component:a,parameters:{layout:"centered"},argTypes:{leftIcon:{control:"select",options:["SearchIcon"]},rightIcon:{control:"select",options:["ChevronDownIcon"]},leftIconColor:{control:"select",options:["primary","secondary","tertiary","destructive","positive","caution","informative","disabled"]},rightIconColor:{control:"select",options:["primary","secondary","tertiary","destructive","positive","caution","informative","disabled"]}}},s={render:r=>e.jsx(n,{label:"Default Input",children:e.jsx(a,{...r})}),args:{placeholder:"Enter text..."}},l={render:r=>e.jsx(n,{label:"Search Indicator",children:e.jsx(a,{...r,leftIcon:"SearchIcon",placeholder:"Search..."})}),args:{}},o={render:r=>{const f=()=>alert("Dropdown or Modal would open here!");return e.jsx(n,{label:"Select-like Input",children:e.jsx(a,{...r,onClick:f,onRightIconClick:y=>{y.stopPropagation(),f()}})})},args:{rightIcon:"ChevronDownIcon",placeholder:"Select an option...",readOnly:!0,style:{cursor:"pointer"}}},t={render:r=>e.jsx(n,{label:"Auto-Clearable Input",children:e.jsx(a,{...r,allowClear:!0,placeholder:"Type to see clear button..."})}),args:{defaultValue:"Clear me!"}},d={render:r=>e.jsx(n,{label:"Outline Input",children:e.jsx(a,{...r})}),args:{variant:"outline",placeholder:"Outline variant"}},c={render:r=>e.jsx(n,{label:"Ghost Input",children:e.jsx(a,{...r})}),args:{variant:"ghost",placeholder:"Ghost variant"}},i={render:r=>e.jsx(n,{label:"Error Input",children:e.jsx(a,{...r})}),args:{state:"error",defaultValue:"Invalid input"}},p={render:r=>e.jsx(n,{label:"Disabled Input",children:e.jsx(a,{...r})}),args:{state:"disabled",defaultValue:"Disabled input"}},u={render:r=>e.jsx(n,{label:"Full Width Input",style:{width:"100%"},children:e.jsx(a,{...r})}),args:{fullWidth:!0,placeholder:"Full width input"},parameters:{layout:"padded"}},h={render:r=>e.jsx(n,{label:"Basic Password",children:e.jsx(a,{...r})}),args:{type:"password",placeholder:"Password input",defaultValue:"password123"}},g={render:r=>e.jsx(n,{label:"Password with Toggle (Default)",children:e.jsx(a,{...r})}),args:{type:"password",placeholder:"Enter password...",defaultValue:"shhh-it-is-a-secret"}},m={render:r=>e.jsx(n,{label:"Password without Toggle (Opt-out)",children:e.jsx(a,{...r})}),args:{type:"password",showPasswordToggle:!1,placeholder:"No toggle here..."}},b={render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px",width:"320px"},children:[e.jsx(n,{label:"User Name",required:!0,children:e.jsx(a,{...r,placeholder:"Enter your name"})}),r.state==="error"&&e.jsx(w,{content:"This field is required."})]}),args:{state:"default"}},I={render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px",width:"320px"},children:[e.jsx(n,{label:"Email",required:!0,children:e.jsx(a,{...r,placeholder:"Enter your email"})}),e.jsx(w,{content:"Invalid email address."})]}),args:{state:"error",defaultValue:"invalid-email@"}},x={render:r=>e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"flex-end"},children:[e.jsx(n,{label:"Advanced Search",style:{flex:1},children:e.jsx(a,{...r,leftIcon:"SearchIcon",allowClear:!0,placeholder:"Search keywords..."})}),e.jsx(S,{priority:"secondary",label:"Search",iconName:"SearchIcon"})]}),args:{}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="Default Input">\r
            <Input {...args} />\r
        </Label>,
  args: {
    placeholder: "Enter text..."
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="Search Indicator">\r
            <Input {...args} leftIcon="SearchIcon" placeholder="Search..." />\r
        </Label>,
  args: {}
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => {
    const handleClick = () => alert("Dropdown or Modal would open here!");
    return <Label label="Select-like Input">\r
                <Input {...args} onClick={handleClick} onRightIconClick={e => {
        e.stopPropagation(); // Prevent duplicate alert
        handleClick();
      }} />\r
            </Label>;
  },
  args: {
    rightIcon: "ChevronDownIcon",
    placeholder: "Select an option...",
    readOnly: true,
    style: {
      cursor: "pointer"
    }
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="Auto-Clearable Input">\r
            <Input {...args} allowClear placeholder="Type to see clear button..." />\r
        </Label>,
  args: {
    defaultValue: "Clear me!"
  }
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="Outline Input">\r
            <Input {...args} />\r
        </Label>,
  args: {
    variant: "outline",
    placeholder: "Outline variant"
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="Ghost Input">\r
            <Input {...args} />\r
        </Label>,
  args: {
    variant: "ghost",
    placeholder: "Ghost variant"
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="Error Input">\r
            <Input {...args} />\r
        </Label>,
  args: {
    state: "error",
    defaultValue: "Invalid input"
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="Disabled Input">\r
            <Input {...args} />\r
        </Label>,
  args: {
    state: "disabled",
    defaultValue: "Disabled input"
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="Full Width Input" style={{
    width: "100%"
  }}>\r
            <Input {...args} />\r
        </Label>,
  args: {
    fullWidth: true,
    placeholder: "Full width input"
  },
  parameters: {
    layout: "padded"
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="Basic Password">\r
            <Input {...args} />\r
        </Label>,
  args: {
    type: "password",
    placeholder: "Password input",
    defaultValue: "password123"
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="Password with Toggle (Default)">\r
            <Input {...args} />\r
        </Label>,
  args: {
    type: "password",
    placeholder: "Enter password...",
    defaultValue: "shhh-it-is-a-secret"
  }
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="Password without Toggle (Opt-out)">\r
            <Input {...args} />\r
        </Label>,
  args: {
    type: "password",
    showPasswordToggle: false,
    placeholder: "No toggle here..."
  }
}`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    width: "320px"
  }}>\r
            <Label label="User Name" required>\r
                <Input {...args} placeholder="Enter your name" />\r
            </Label>\r
            {args.state === "error" && <FieldError content="This field is required." />}\r
        </div>,
  args: {
    state: "default"
  }
}`,...b.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    width: "320px"
  }}>\r
            <Label label="Email" required>\r
                <Input {...args} placeholder="Enter your email" />\r
            </Label>\r
            <FieldError content="Invalid email address." />\r
        </div>,
  args: {
    state: "error",
    defaultValue: "invalid-email@"
  }
}`,...I.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "8px",
    alignItems: "flex-end"
  }}>\r
            <Label label="Advanced Search" style={{
      flex: 1
    }}>\r
                <Input {...args} leftIcon="SearchIcon" allowClear placeholder="Search keywords..." />\r
            </Label>\r
            <Button priority="secondary" label="Search" iconName="SearchIcon" />\r
        </div>,
  args: {}
}`,...x.parameters?.docs?.source}}};const v=["Default","SearchIndicator","SelectLike","Clearable","Outline","Ghost","Error","Disabled","FullWidth","Password","PasswordToggle","PasswordNoToggle","WithLabelAndError","InputWithError","FullSearchBar"],T=Object.freeze(Object.defineProperty({__proto__:null,Clearable:t,Default:s,Disabled:p,Error:i,FullSearchBar:x,FullWidth:u,Ghost:c,InputWithError:I,Outline:d,Password:h,PasswordNoToggle:m,PasswordToggle:g,SearchIndicator:l,SelectLike:o,WithLabelAndError:b,__namedExportsOrder:v,default:j},Symbol.toStringTag,{value:"Module"}));export{t as C,s as D,i as E,u as F,c as G,T as I,d as O,g as P,l as S,p as a};
