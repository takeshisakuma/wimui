import{j as e}from"./jsx-runtime-u17CrQMm.js";import{I as a}from"./Input-D9XkAdcq.js";import{L as s}from"./Label-DspC_5Tz.js";import{F as f}from"./FieldError-B1QIckcK.js";import{B as y}from"./Button-BjmuKRxN.js";import"./iframe-D8SaYk7p.js";import"./preload-helper-PPVm8Dsz.js";import"./index-bAe9LTCE.js";import"./Icon-D_YolTEB.js";import"./Badge-Cx3I02VL.js";import"./useTranslation-D75gICRM.js";import"./index-BWW_-k64.js";import"./Paragraph-BfRVWdfK.js";const N={title:"Component/Forms/Input",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{leftIcon:{control:"select",options:[void 0,"SearchIcon"]},rightIcon:{control:"select",options:[void 0,"ChevronDownIcon"]},leftIconColor:{control:"select",options:[void 0,"primary","secondary","tertiary","destructive","positive","caution","informative","disabled"]},rightIconColor:{control:"select",options:[void 0,"primary","secondary","tertiary","destructive","positive","caution","informative","disabled"]}}},n={render:r=>e.jsx(s,{label:"Default Input",children:e.jsx(a,{...r})}),args:{placeholder:"Enter text..."}},o={render:r=>e.jsx(s,{label:"Search Indicator",children:e.jsx(a,{...r,leftIcon:"SearchIcon",placeholder:"Search..."})}),args:{}},l={render:r=>{const x=()=>alert("Dropdown or Modal would open here!");return e.jsx(s,{label:"Select-like Input",children:e.jsx(a,{...r,onClick:x,onRightIconClick:w=>{w.stopPropagation(),x()}})})},args:{rightIcon:"ChevronDownIcon",placeholder:"Select an option...",readOnly:!0,style:{cursor:"pointer"}}},t={render:r=>e.jsx(s,{label:"Auto-Clearable Input",children:e.jsx(a,{...r,allowClear:!0,placeholder:"Type to see clear button..."})}),args:{defaultValue:"Clear me!"}},d={render:r=>e.jsx(s,{label:"Outline Input",children:e.jsx(a,{...r})}),args:{variant:"outline",placeholder:"Outline variant"}},c={render:r=>e.jsx(s,{label:"Ghost Input",children:e.jsx(a,{...r})}),args:{variant:"ghost",placeholder:"Ghost variant"}},i={render:r=>e.jsx(s,{label:"Error Input",children:e.jsx(a,{...r})}),args:{state:"error",defaultValue:"Invalid input"}},p={render:r=>e.jsx(s,{label:"Disabled Input",children:e.jsx(a,{...r})}),args:{state:"disabled",defaultValue:"Disabled input"}},u={render:r=>e.jsx(s,{label:"Full Width Input",style:{width:"100%"},children:e.jsx(a,{...r})}),args:{fullWidth:!0,placeholder:"Full width input"},parameters:{layout:"padded"}},h={render:r=>e.jsx(s,{label:"Basic Password",children:e.jsx(a,{...r})}),args:{type:"password",placeholder:"Password input",defaultValue:"password123"}},g={render:r=>e.jsx(s,{label:"Password with Toggle (Default)",children:e.jsx(a,{...r})}),args:{type:"password",placeholder:"Enter password...",defaultValue:"shhh-it-is-a-secret"}},m={render:r=>e.jsx(s,{label:"Password without Toggle (Opt-out)",children:e.jsx(a,{...r})}),args:{type:"password",showPasswordToggle:!1,placeholder:"No toggle here..."}},b={render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px",width:"320px"},children:[e.jsx(s,{label:"User Name",required:!0,children:e.jsx(a,{...r,placeholder:"Enter your name"})}),r.state==="error"&&e.jsx(f,{content:"This field is required."})]}),args:{state:"default"}},I={render:r=>e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"flex-end"},children:[e.jsx(s,{label:"Advanced Search",style:{flex:1},children:e.jsx(a,{...r,leftIcon:"SearchIcon",allowClear:!0,placeholder:"Search keywords..."})}),e.jsx(y,{priority:"secondary",label:"Search",iconName:"SearchIcon"})]}),args:{}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="Default Input">\r
            <Input {...args} />\r
        </Label>,
  args: {
    placeholder: "Enter text..."
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="Search Indicator">\r
            <Input {...args} leftIcon="SearchIcon" placeholder="Search..." />\r
        </Label>,
  args: {}
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};const W=["Default","SearchIndicator","SelectLike","Clearable","Outline","Ghost","Error","Disabled","FullWidth","Password","PasswordToggle","PasswordNoToggle","WithLabelAndError","FullSearchBar"];export{t as Clearable,n as Default,p as Disabled,i as Error,I as FullSearchBar,u as FullWidth,c as Ghost,d as Outline,h as Password,m as PasswordNoToggle,g as PasswordToggle,o as SearchIndicator,l as SelectLike,b as WithLabelAndError,W as __namedExportsOrder,N as default};
