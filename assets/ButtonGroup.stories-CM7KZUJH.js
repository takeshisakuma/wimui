import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as b,A as a}from"./iframe-C9jI6wk5.js";import{c as B}from"./index-BdaCrWBW.js";import{B as n}from"./Button-BYsfOEzv.js";import{u as i}from"./useTranslation-f2Ze7WA6.js";const s=({children:o,gap:r="8px",className:t,joined:g=!1,variant:y})=>{const v=g?{}:{gap:r},f=y?b.Children.map(o,_=>b.isValidElement(_)?b.cloneElement(_,{variant:y}):_):o;return e.jsx("div",{className:B("wim-button-group",g&&"wim-button-group--joined",t),style:v,children:f})};s.__docgenInfo={description:"",methods:[],displayName:"ButtonGroup",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},gap:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"8px"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},joined:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"filled" | "outlined" | "ghost"',elements:[{name:"literal",value:'"filled"'},{name:"literal",value:'"outlined"'},{name:"literal",value:'"ghost"'}]},description:""}}};const z={title:"Components/Buttons/ButtonGroup",component:s,parameters:{layout:"centered"},argTypes:{gap:{control:"text"},joined:{control:"boolean"},variant:{control:"select",options:["filled","outlined","ghost"]}}},l={render:function(r){const{t}=i(a);return e.jsxs(s,{...r,children:[e.jsx(n,{size:"lg",label:t("story.button_click_me"),variant:"filled"}),e.jsx(n,{size:"lg",label:t("story.button_click_me"),variant:"outlined"}),e.jsx(n,{size:"lg",label:t("story.button_click_me"),variant:"ghost"})]})}},u={render:function(r){const{t}=i(a);return e.jsxs(s,{...r,children:[e.jsx(n,{size:"md",label:t("story.button_click_me"),variant:"filled"}),e.jsx(n,{size:"md",label:t("story.button_click_me"),variant:"outlined"}),e.jsx(n,{size:"md",label:t("story.button_click_me"),variant:"ghost"})]})}},c={render:function(r){const{t}=i(a);return e.jsxs(s,{...r,children:[e.jsx(n,{size:"sm",label:t("story.button_click_me"),variant:"filled"}),e.jsx(n,{size:"sm",label:t("story.button_click_me"),variant:"outlined"}),e.jsx(n,{size:"sm",label:t("story.button_click_me"),variant:"ghost"})]})}},d={args:{joined:!0},render:function(r){const{t}=i(a);return e.jsxs(s,{...r,children:[e.jsx(n,{size:"md",label:t("story.button_click_me"),variant:"outlined"}),e.jsx(n,{size:"md",label:t("story.button_click_me"),variant:"outlined"}),e.jsx(n,{size:"md",label:t("story.button_click_me"),variant:"outlined"})]})}},m={args:{joined:!0,variant:"filled"},render:function(r){const{t}=i(a);return e.jsxs(s,{...r,children:[e.jsx(n,{size:"md",label:t("story.button_click_me"),variant:"outlined"}),e.jsx(n,{size:"md",label:t("story.button_click_me"),variant:"outlined"}),e.jsx(n,{size:"md",label:t("story.button_click_me"),variant:"outlined"})]})}},p={args:{variant:"ghost",gap:"10px"},render:function(r){const{t}=i(a);return e.jsxs(s,{...r,children:[e.jsx(n,{size:"md",label:t("story.buttongroup_primary"),variant:"filled"}),e.jsx(n,{size:"md",label:t("story.buttongroup_secondary"),variant:"outlined"}),e.jsx(n,{size:"md",label:t("story.buttongroup_tertiary"),variant:"ghost"})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <ButtonGroup {...args}>
        <Button size="lg" label={t("story.button_click_me")} variant="filled" />
        <Button size="lg" label={t("story.button_click_me")} variant="outlined" />
        <Button size="lg" label={t("story.button_click_me")} variant="ghost" />
      </ButtonGroup>;
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <ButtonGroup {...args}>
        <Button size="md" label={t("story.button_click_me")} variant="filled" />
        <Button size="md" label={t("story.button_click_me")} variant="outlined" />
        <Button size="md" label={t("story.button_click_me")} variant="ghost" />
      </ButtonGroup>;
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <ButtonGroup {...args}>
        <Button size="sm" label={t("story.button_click_me")} variant="filled" />
        <Button size="sm" label={t("story.button_click_me")} variant="outlined" />
        <Button size="sm" label={t("story.button_click_me")} variant="ghost" />
      </ButtonGroup>;
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    joined: true
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <ButtonGroup {...args}>
        <Button size="md" label={t("story.button_click_me")} variant="outlined" />
        <Button size="md" label={t("story.button_click_me")} variant="outlined" />
        <Button size="md" label={t("story.button_click_me")} variant="outlined" />
      </ButtonGroup>;
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    joined: true,
    variant: "filled"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <ButtonGroup {...args}>
        <Button size="md" label={t("story.button_click_me")} variant="outlined" />
        <Button size="md" label={t("story.button_click_me")} variant="outlined" />
        <Button size="md" label={t("story.button_click_me")} variant="outlined" />
      </ButtonGroup>;
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "ghost",
    gap: "10px"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <ButtonGroup {...args}>
        <Button size="md" label={t("story.buttongroup_primary")} variant="filled" />
        <Button size="md" label={t("story.buttongroup_secondary")} variant="outlined" />
        <Button size="md" label={t("story.buttongroup_tertiary")} variant="ghost" />
      </ButtonGroup>;
  }
}`,...p.parameters?.docs?.source}}};const j=["LargeGroup","MediumGroup","SmallGroup","JoinedGroup","JoinedGroupPrimary","PriorityOverride"],A=Object.freeze(Object.defineProperty({__proto__:null,JoinedGroup:d,JoinedGroupPrimary:m,LargeGroup:l,MediumGroup:u,PriorityOverride:p,SmallGroup:c,__namedExportsOrder:j,default:z},Symbol.toStringTag,{value:"Module"}));export{A as B,d as J,l as L,u as M,c as S,m as a};
