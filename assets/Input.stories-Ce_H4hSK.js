import{j as e}from"./jsx-runtime-u17CrQMm.js";import{I as a}from"./Input-BbB1BsG_.js";import{L as n}from"./Label-BY6NQfNd.js";import{F as I}from"./FieldError-7Jdz06Zo.js";const f={title:"Component/Form Inputs/Input",component:a,parameters:{layout:"centered"},argTypes:{leftIcon:{control:"select",options:["SearchIcon"]},rightIcon:{control:"select",options:["ChevronDownIcon"]},leftIconColor:{control:"select",options:["primary","secondary","tertiary","destructive","positive","caution","informative","disabled"]},rightIconColor:{control:"select",options:["primary","secondary","tertiary","destructive","positive","caution","informative","disabled"]}}},t={render:r=>e.jsx(n,{label:"Default Input",children:e.jsx(a,{...r})}),args:{placeholder:"Enter text..."}},l={render:r=>{const b=()=>alert("Dropdown or Modal would open here!");return e.jsx(n,{label:"Select-like Input",children:e.jsx(a,{...r,onClick:b,onRightIconClick:x=>{x.stopPropagation(),b()}})})},args:{rightIcon:"ChevronDownIcon",placeholder:"Select an option...",readOnly:!0,style:{cursor:"pointer"}}},s={render:r=>e.jsx(n,{label:"Auto-Clearable Input",children:e.jsx(a,{...r,allowClear:!0,placeholder:"Type to see clear button..."})}),args:{defaultValue:"Clear me!"}},o={render:r=>e.jsx(n,{label:"Outline Input",children:e.jsx(a,{...r})}),args:{variant:"outline",placeholder:"Outline variant"}},d={render:r=>e.jsx(n,{label:"Ghost Input",children:e.jsx(a,{...r})}),args:{variant:"ghost",placeholder:"Ghost variant"}},c={render:r=>e.jsx(n,{label:"Error Input",children:e.jsx(a,{...r})}),args:{state:"error",defaultValue:"Invalid input"}},i={render:r=>e.jsx(n,{label:"Disabled Input",children:e.jsx(a,{...r})}),args:{state:"disabled",defaultValue:"Disabled input"}},p={render:r=>e.jsx(n,{label:"Full Width Input",style:{width:"100%"},children:e.jsx(a,{...r})}),args:{fullWidth:!0,placeholder:"Full width input"},parameters:{layout:"padded"}},u={render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px",width:"320px"},children:[e.jsx(n,{label:"User Name",required:!0,children:e.jsx(a,{...r,placeholder:"Enter your name"})}),r.state==="error"&&e.jsx(I,{content:"This field is required."})]}),args:{state:"default"}},m={render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px",width:"320px"},children:[e.jsx(n,{label:"Email",required:!0,children:e.jsx(a,{...r,placeholder:"Enter your email"})}),e.jsx(I,{content:"Invalid email address."})]}),args:{state:"error",defaultValue:"invalid-email@"}},h={render:r=>e.jsx(n,{label:"Password Input",children:e.jsx(a,{...r,type:"password"})}),args:{defaultValue:"password123"}},g={render:r=>e.jsx(n,{label:"Search Input",children:e.jsx(a,{...r,leftIcon:"SearchIcon"})}),args:{placeholder:"Search components..."}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="Default Input">\r
            <Input {...args} />\r
        </Label>,
  args: {
    placeholder: "Enter text..."
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="Auto-Clearable Input">\r
            <Input {...args} allowClear placeholder="Type to see clear button..." />\r
        </Label>,
  args: {
    defaultValue: "Clear me!"
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="Outline Input">\r
            <Input {...args} />\r
        </Label>,
  args: {
    variant: "outline",
    placeholder: "Outline variant"
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="Ghost Input">\r
            <Input {...args} />\r
        </Label>,
  args: {
    variant: "ghost",
    placeholder: "Ghost variant"
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="Error Input">\r
            <Input {...args} />\r
        </Label>,
  args: {
    state: "error",
    defaultValue: "Invalid input"
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="Disabled Input">\r
            <Input {...args} />\r
        </Label>,
  args: {
    state: "disabled",
    defaultValue: "Disabled input"
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="Password Input">\r
            <Input {...args} type="password" />\r
        </Label>,
  args: {
    defaultValue: "password123"
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="Search Input">\r
            <Input {...args} leftIcon="SearchIcon" />\r
        </Label>,
  args: {
    placeholder: "Search components..."
  }
}`,...g.parameters?.docs?.source}}};const y=["Default","SelectLike","Clearable","Outline","Ghost","Error","Disabled","FullWidth","WithLabelAndError","InputWithError","PasswordToggle","SearchIndicator"],w=Object.freeze(Object.defineProperty({__proto__:null,Clearable:s,Default:t,Disabled:i,Error:c,FullWidth:p,Ghost:d,InputWithError:m,Outline:o,PasswordToggle:h,SearchIndicator:g,SelectLike:l,WithLabelAndError:u,__namedExportsOrder:y,default:f},Symbol.toStringTag,{value:"Module"}));export{s as C,t as D,c as E,p as F,d as G,w as I,o as O,h as P,g as S,i as a};
