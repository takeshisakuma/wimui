import{j as e}from"./jsx-runtime-u17CrQMm.js";import{P as i}from"./index-BM83QGBi.js";import{B as r}from"./Button-D0CprGkH.js";const o=({children:t,gap:p="8px",className:d="",joined:u=!1})=>{const m=["wim-button-group",u?"wim-button-group--joined":"",d].filter(Boolean).join(" "),b=u?{}:{gap:p};return e.jsx("div",{className:m,style:b,children:t})};o.propTypes={children:i.node.isRequired,gap:i.string,className:i.string,joined:i.bool};o.__docgenInfo={description:"",methods:[],displayName:"ButtonGroup",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",type:{name:"node"}},gap:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"8px"',computed:!1},type:{name:"string"}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1},type:{name:"string"}},joined:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}}}};const c={title:"Component/Actions/ButtonGroup",component:o,parameters:{layout:"centered"},argTypes:{gap:{control:"text"},joined:{control:"boolean"}}},a={render:t=>e.jsxs(o,{...t,children:[e.jsx(r,{size:"large",label:"button_label",priority:"primary"}),e.jsx(r,{size:"large",label:"button_label",priority:"secondary"}),e.jsx(r,{size:"large",label:"button_label",priority:"tertiary"})]})},s={render:t=>e.jsxs(o,{...t,children:[e.jsx(r,{size:"medium",label:"button_label",priority:"primary"}),e.jsx(r,{size:"medium",label:"button_label",priority:"secondary"}),e.jsx(r,{size:"medium",label:"button_label",priority:"tertiary"})]})},n={render:t=>e.jsxs(o,{...t,children:[e.jsx(r,{size:"small",label:"button_label",priority:"primary"}),e.jsx(r,{size:"small",label:"button_label",priority:"secondary"}),e.jsx(r,{size:"small",label:"button_label",priority:"tertiary"})]})},l={args:{joined:!0},render:t=>e.jsxs(o,{...t,children:[e.jsx(r,{size:"medium",label:"button_label",priority:"secondary"}),e.jsx(r,{size:"medium",label:"button_label",priority:"secondary"}),e.jsx(r,{size:"medium",label:"button_label",priority:"secondary"})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <ButtonGroup {...args}>\r
            <Button size="large" label="button_label" priority="primary" />\r
            <Button size="large" label="button_label" priority="secondary" />\r
            <Button size="large" label="button_label" priority="tertiary" />\r
        </ButtonGroup>
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <ButtonGroup {...args}>\r
            <Button size="medium" label="button_label" priority="primary" />\r
            <Button size="medium" label="button_label" priority="secondary" />\r
            <Button size="medium" label="button_label" priority="tertiary" />\r
        </ButtonGroup>
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <ButtonGroup {...args}>\r
            <Button size="small" label="button_label" priority="primary" />\r
            <Button size="small" label="button_label" priority="secondary" />\r
            <Button size="small" label="button_label" priority="tertiary" />\r
        </ButtonGroup>
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    joined: true
  },
  render: args => <ButtonGroup {...args}>\r
            <Button size="medium" label="button_label" priority="secondary" />\r
            <Button size="medium" label="button_label" priority="secondary" />\r
            <Button size="medium" label="button_label" priority="secondary" />\r
        </ButtonGroup>
}`,...l.parameters?.docs?.source}}};const y=["LargeGroup","MediumGroup","SmallGroup","JoinedGroup"],j=Object.freeze(Object.defineProperty({__proto__:null,JoinedGroup:l,LargeGroup:a,MediumGroup:s,SmallGroup:n,__namedExportsOrder:y,default:c},Symbol.toStringTag,{value:"Module"}));export{j as B,l as J,a as L,s as M,n as S};
