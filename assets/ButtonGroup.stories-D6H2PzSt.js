import{j as r}from"./jsx-runtime-u17CrQMm.js";import{R as d}from"./iframe-DDn5rYTw.js";import{P as a}from"./index-DZY4SCiT.js";import{B as e}from"./Button-CV-adhb9.js";const o=({children:t,gap:b="8px",className:g="",joined:y=!1,priority:c})=>{const B=["wim-button-group",y?"wim-button-group--joined":"",g].filter(Boolean).join(" "),_=y?{}:{gap:b},j=c?d.Children.map(t,m=>d.isValidElement(m)?d.cloneElement(m,{priority:c}):m):t;return r.jsx("div",{className:B,style:_,children:j})};o.propTypes={children:a.node.isRequired,gap:a.string,className:a.string,joined:a.bool,priority:a.oneOf(["primary","secondary","tertiary"])};o.__docgenInfo={description:"",methods:[],displayName:"ButtonGroup",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",type:{name:"node"}},gap:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"8px"',computed:!1},type:{name:"string"}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1},type:{name:"string"}},joined:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},priority:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "tertiary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'}]},description:"",type:{name:"enum",value:[{value:'"primary"',computed:!1},{value:'"secondary"',computed:!1},{value:'"tertiary"',computed:!1}]}}}};const z={title:"Component/Buttons & Actions/ButtonGroup",component:o,parameters:{layout:"centered"},argTypes:{gap:{control:"text"},joined:{control:"boolean"},priority:{control:"select",options:["primary","secondary","tertiary"]}}},i={render:t=>r.jsxs(o,{...t,children:[r.jsx(e,{size:"large",label:"button_label",priority:"primary"}),r.jsx(e,{size:"large",label:"button_label",priority:"secondary"}),r.jsx(e,{size:"large",label:"button_label",priority:"tertiary"})]})},n={render:t=>r.jsxs(o,{...t,children:[r.jsx(e,{size:"medium",label:"button_label",priority:"primary"}),r.jsx(e,{size:"medium",label:"button_label",priority:"secondary"}),r.jsx(e,{size:"medium",label:"button_label",priority:"tertiary"})]})},s={render:t=>r.jsxs(o,{...t,children:[r.jsx(e,{size:"small",label:"button_label",priority:"primary"}),r.jsx(e,{size:"small",label:"button_label",priority:"secondary"}),r.jsx(e,{size:"small",label:"button_label",priority:"tertiary"})]})},l={args:{joined:!0},render:t=>r.jsxs(o,{...t,children:[r.jsx(e,{size:"medium",label:"button_label",priority:"secondary"}),r.jsx(e,{size:"medium",label:"button_label",priority:"secondary"}),r.jsx(e,{size:"medium",label:"button_label",priority:"secondary"})]})},u={args:{joined:!0,priority:"primary"},parameters:{docs:{description:{story:"【注意】UXの観点からは、プライマリボタンを複数並べることは推奨されません。技術的な統一機能のデモンストレーションとして参照してください。"}}},render:t=>r.jsxs(o,{...t,children:[r.jsx(e,{size:"medium",label:"button_label",priority:"secondary"}),r.jsx(e,{size:"medium",label:"button_label",priority:"secondary"}),r.jsx(e,{size:"medium",label:"button_label",priority:"secondary"})]})},p={args:{priority:"tertiary",gap:"10px"},render:t=>r.jsxs(o,{...t,children:[r.jsx(e,{size:"medium",label:"Primary Button",priority:"primary"}),r.jsx(e,{size:"medium",label:"Secondary Button",priority:"secondary"}),r.jsx(e,{size:"medium",label:"Tertiary Button",priority:"tertiary"})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <ButtonGroup {...args}>\r
            <Button size="large" label="button_label" priority="primary" />\r
            <Button size="large" label="button_label" priority="secondary" />\r
            <Button size="large" label="button_label" priority="tertiary" />\r
        </ButtonGroup>
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <ButtonGroup {...args}>\r
            <Button size="medium" label="button_label" priority="primary" />\r
            <Button size="medium" label="button_label" priority="secondary" />\r
            <Button size="medium" label="button_label" priority="tertiary" />\r
        </ButtonGroup>
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <ButtonGroup {...args}>\r
            <Button size="small" label="button_label" priority="primary" />\r
            <Button size="small" label="button_label" priority="secondary" />\r
            <Button size="small" label="button_label" priority="tertiary" />\r
        </ButtonGroup>
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    joined: true
  },
  render: args => <ButtonGroup {...args}>\r
            <Button size="medium" label="button_label" priority="secondary" />\r
            <Button size="medium" label="button_label" priority="secondary" />\r
            <Button size="medium" label="button_label" priority="secondary" />\r
        </ButtonGroup>
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    priority: "tertiary",
    gap: "10px"
  },
  render: args => <ButtonGroup {...args}>\r
            <Button size="medium" label="Primary Button" priority="primary" />\r
            <Button size="medium" label="Secondary Button" priority="secondary" />\r
            <Button size="medium" label="Tertiary Button" priority="tertiary" />\r
        </ButtonGroup>
}`,...p.parameters?.docs?.source}}};const x=["LargeGroup","MediumGroup","SmallGroup","JoinedGroup","JoinedGroupPrimary","PriorityOverride"],T=Object.freeze(Object.defineProperty({__proto__:null,JoinedGroup:l,JoinedGroupPrimary:u,LargeGroup:i,MediumGroup:n,PriorityOverride:p,SmallGroup:s,__namedExportsOrder:x,default:z},Symbol.toStringTag,{value:"Module"}));export{T as B,l as J,i as L,n as M,s as S,u as a};
