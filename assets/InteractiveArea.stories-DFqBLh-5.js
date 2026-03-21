import{j as o}from"./jsx-runtime-u17CrQMm.js";import{I as c}from"./InteractiveArea-Cndq8R37.js";import{B as i}from"./Button-lRD2j2vn.js";import{I as n}from"./Icon-k-DVxQos.js";const l={title:"Internal/InteractiveArea",component:c,parameters:{layout:"centered"}},r={args:{title:"Interact with this area",description:"This is a base component for building interactive surfaces.",variant:"dashed",size:"medium"}},e={args:{title:"Import your data",description:"Click here or drag a file to start the import process.",icon:o.jsx(n,{name:"UploadIcon",size:"large"}),actions:o.jsx(i,{priority:"secondary",children:"Select File"}),isClickable:!0}},a={args:{title:"No results matched",description:"Try adjusting your filters or search terms.",variant:"solid",bgVariant:"muted",icon:o.jsx(n,{name:"SearchIcon",size:"medium"}),actions:o.jsx(i,{priority:"tertiary",children:"Clear filters"})}},t={args:{title:"Small area",size:"small"}},s={args:{title:"Large landing area",description:"Best used for primary dropzones or empty states on main dashboards.",size:"large",actions:o.jsx(i,{priority:"primary",children:"Primary Action"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Interact with this area",
    description: "This is a base component for building interactive surfaces.",
    variant: "dashed",
    size: "medium"
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Import your data",
    description: "Click here or drag a file to start the import process.",
    icon: <Icon name="UploadIcon" size="large" />,
    actions: <Button priority="secondary">Select File</Button>,
    isClickable: true
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: "No results matched",
    description: "Try adjusting your filters or search terms.",
    variant: "solid",
    bgVariant: "muted",
    icon: <Icon name="SearchIcon" size="medium" />,
    actions: <Button priority="tertiary">Clear filters</Button>
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Small area",
    size: "small"
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Large landing area",
    description: "Best used for primary dropzones or empty states on main dashboards.",
    size: "large",
    actions: <Button priority="primary">Primary Action</Button>
  }
}`,...s.parameters?.docs?.source}}};const d=["Default","WithIconAndActions","SolidMuted","Small","Large"],y=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Large:s,Small:t,SolidMuted:a,WithIconAndActions:e,__namedExportsOrder:d,default:l},Symbol.toStringTag,{value:"Module"}));export{r as D,y as I,s as L,a as S,e as W,t as a};
