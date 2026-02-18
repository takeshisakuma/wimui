import{j as r}from"./jsx-runtime-u17CrQMm.js";import{R as m}from"./iframe-B9SSQewD.js";import{c as _}from"./index-B5-Yv-Fa.js";import{B as e}from"./Button-CXlyS40c.js";const o=({children:t,gap:c="8px",className:b,joined:d=!1,priority:y})=>{const g=d?{}:{gap:c},B=y?m.Children.map(t,p=>m.isValidElement(p)?m.cloneElement(p,{priority:y}):p):t;return r.jsx("div",{className:_("wim-button-group",d&&"wim-button-group--joined",b),style:g,children:B})};o.__docgenInfo={description:"",methods:[],displayName:"ButtonGroup",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},gap:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"8px"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},joined:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},priority:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "tertiary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'}]},description:""}}};const z={title:"Component/Buttons/ButtonGroup",component:o,parameters:{layout:"centered"},argTypes:{gap:{control:"text"},joined:{control:"boolean"},priority:{control:"select",options:["primary","secondary","tertiary"]}}},a={render:t=>r.jsxs(o,{...t,children:[r.jsx(e,{size:"large",label:"button_label",priority:"primary"}),r.jsx(e,{size:"large",label:"button_label",priority:"secondary"}),r.jsx(e,{size:"large",label:"button_label",priority:"tertiary"})]})},i={render:t=>r.jsxs(o,{...t,children:[r.jsx(e,{size:"medium",label:"button_label",priority:"primary"}),r.jsx(e,{size:"medium",label:"button_label",priority:"secondary"}),r.jsx(e,{size:"medium",label:"button_label",priority:"tertiary"})]})},n={render:t=>r.jsxs(o,{...t,children:[r.jsx(e,{size:"small",label:"button_label",priority:"primary"}),r.jsx(e,{size:"small",label:"button_label",priority:"secondary"}),r.jsx(e,{size:"small",label:"button_label",priority:"tertiary"})]})},s={args:{joined:!0},render:t=>r.jsxs(o,{...t,children:[r.jsx(e,{size:"medium",label:"button_label",priority:"secondary"}),r.jsx(e,{size:"medium",label:"button_label",priority:"secondary"}),r.jsx(e,{size:"medium",label:"button_label",priority:"secondary"})]})},l={args:{joined:!0,priority:"primary"},parameters:{docs:{description:{story:"【注意】UXの観点からは、プライマリボタンを複数並べることは推奨されません。技術的な統一機能のデモンストレーションとして参照してください。"}}},render:t=>r.jsxs(o,{...t,children:[r.jsx(e,{size:"medium",label:"button_label",priority:"secondary"}),r.jsx(e,{size:"medium",label:"button_label",priority:"secondary"}),r.jsx(e,{size:"medium",label:"button_label",priority:"secondary"})]})},u={args:{priority:"tertiary",gap:"10px"},render:t=>r.jsxs(o,{...t,children:[r.jsx(e,{size:"medium",label:"Primary Button",priority:"primary"}),r.jsx(e,{size:"medium",label:"Secondary Button",priority:"secondary"}),r.jsx(e,{size:"medium",label:"Tertiary Button",priority:"tertiary"})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <ButtonGroup {...args}>\r
            <Button size="large" label="button_label" priority="primary" />\r
            <Button size="large" label="button_label" priority="secondary" />\r
            <Button size="large" label="button_label" priority="tertiary" />\r
        </ButtonGroup>
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <ButtonGroup {...args}>\r
            <Button size="medium" label="button_label" priority="primary" />\r
            <Button size="medium" label="button_label" priority="secondary" />\r
            <Button size="medium" label="button_label" priority="tertiary" />\r
        </ButtonGroup>
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <ButtonGroup {...args}>\r
            <Button size="small" label="button_label" priority="primary" />\r
            <Button size="small" label="button_label" priority="secondary" />\r
            <Button size="small" label="button_label" priority="tertiary" />\r
        </ButtonGroup>
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    joined: true
  },
  render: args => <ButtonGroup {...args}>\r
            <Button size="medium" label="button_label" priority="secondary" />\r
            <Button size="medium" label="button_label" priority="secondary" />\r
            <Button size="medium" label="button_label" priority="secondary" />\r
        </ButtonGroup>
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    joined: true,
    priority: "primary"
  },
  parameters: {
    docs: {
      description: {
        story: "【注意】UXの観点からは、プライマリボタンを複数並べることは推奨されません。技術的な統一機能のデモンストレーションとして参照してください。"
      }
    }
  },
  render: args => <ButtonGroup {...args}>\r
            <Button size="medium" label="button_label" priority="secondary" />\r
            <Button size="medium" label="button_label" priority="secondary" />\r
            <Button size="medium" label="button_label" priority="secondary" />\r
        </ButtonGroup>
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    priority: "tertiary",
    gap: "10px"
  },
  render: args => <ButtonGroup {...args}>\r
            <Button size="medium" label="Primary Button" priority="primary" />\r
            <Button size="medium" label="Secondary Button" priority="secondary" />\r
            <Button size="medium" label="Tertiary Button" priority="tertiary" />\r
        </ButtonGroup>
}`,...u.parameters?.docs?.source}}};const j=["LargeGroup","MediumGroup","SmallGroup","JoinedGroup","JoinedGroupPrimary","PriorityOverride"],h=Object.freeze(Object.defineProperty({__proto__:null,JoinedGroup:s,JoinedGroupPrimary:l,LargeGroup:a,MediumGroup:i,PriorityOverride:u,SmallGroup:n,__namedExportsOrder:j,default:z},Symbol.toStringTag,{value:"Module"}));export{h as B,s as J,a as L,i as M,n as S,l as a};
