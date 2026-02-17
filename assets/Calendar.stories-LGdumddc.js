import{j as l}from"./jsx-runtime-u17CrQMm.js";import{r as c}from"./iframe-BRU7EeOW.js";import{C as s}from"./Calendar-Cslp0svu.js";const u={title:"Component/Data Indicators/Calendar",component:s,parameters:{layout:"centered"},argTypes:{value:{control:"date"},defaultValue:{control:"date"},onChange:{action:"changed"},disabled:{control:"boolean"}}},e={args:{defaultValue:new Date}},a={args:{defaultValue:new Date(2023,0,1)}},r={args:{defaultValue:new Date,disabled:!0}},t={render:o=>{const[n,d]=c.useState(new Date);return l.jsx(s,{...o,value:n,onChange:d})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: new Date()
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: new Date(2023, 0, 1)
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: new Date(),
    disabled: true
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [date, setDate] = useState(new Date());
    return <Calendar {...args as any} value={date} onChange={setDate} />;
  }
}`,...t.parameters?.docs?.source}}};const m=["Default","SelectedDate","Disabled","Controlled"],D=Object.freeze(Object.defineProperty({__proto__:null,Controlled:t,Default:e,Disabled:r,SelectedDate:a,__namedExportsOrder:m,default:u},Symbol.toStringTag,{value:"Module"}));export{D as C,e as D,a as S,r as a};
