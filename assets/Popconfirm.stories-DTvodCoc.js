import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as d}from"./iframe-D-INtma0.js";import{P as T,a as g,b as v,c as u}from"./Popover-DL9pRp9f.js";import{B as a}from"./Button-22ALOdY4.js";import{I as j}from"./Icon-B-pnkG7W.js";import{u as p}from"./useTranslation-gsjwUuWZ.js";const c=({title:r,description:t,onConfirm:o,onCancel:f,okText:_="OK",cancelText:y="Cancel",okType:h="default",children:l,icon:b,disabled:x=!1})=>{const{t:m}=p();return x?d.isValidElement(l)?d.cloneElement(l,{disabled:!0}):e.jsx(e.Fragment,{children:l}):e.jsxs(T,{children:[e.jsx(g,{asChild:!0,children:l}),e.jsx(v,{className:"wim-popconfirm-content",children:e.jsxs("div",{className:"wim-popconfirm-inner",children:[e.jsxs("div",{className:"wim-popconfirm-message",children:[e.jsx("span",{className:"wim-popconfirm-icon",children:b||e.jsx(j,{name:"CircleIcon",color:"caution",size:"small"})}),e.jsx("div",{className:"wim-popconfirm-title",children:typeof r=="string"?m(r):r})]}),t&&e.jsx("div",{className:"wim-popconfirm-description",children:typeof t=="string"?m(t):t}),e.jsxs("div",{className:"wim-popconfirm-actions",children:[e.jsx(u,{asChild:!0,children:e.jsx(a,{size:"small",label:y,onClick:f,priority:"tertiary"})}),e.jsx(u,{asChild:!0,children:e.jsx(a,{size:"small",label:_,onClick:o,priority:"primary",role:h})})]})]})})]})};c.__docgenInfo={description:"",methods:[],displayName:"Popconfirm",props:{title:{required:!0,tsType:{name:"ReactNode"},description:"The title of the confirmation box"},description:{required:!1,tsType:{name:"ReactNode"},description:"The description of the confirmation box"},onConfirm:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when the user clicks the confirm button"},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when the user clicks the cancel button"},okText:{required:!1,tsType:{name:"string"},description:"Text of the confirm button",defaultValue:{value:'"OK"',computed:!1}},cancelText:{required:!1,tsType:{name:"string"},description:"Text of the cancel button",defaultValue:{value:'"Cancel"',computed:!1}},okType:{required:!1,tsType:{name:"union",raw:'"default" | "destructive" | "positive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"destructive"'},{name:"literal",value:'"positive"'}]},description:"Color role of the confirm button",defaultValue:{value:'"default"',computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:"The target element which the Popconfirm will be attached to"},icon:{required:!1,tsType:{name:"ReactNode"},description:"Customize the icon"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether to show the popconfirm",defaultValue:{value:"false",computed:!1}}}};const C={title:"Components/Alerts & Notifications/Popconfirm",component:c,tags:[],argTypes:{onConfirm:{action:"confirmed"},onCancel:{action:"cancelled"}}},n={render:function(t){const{t:o}=p(["docs","common","components"]);return e.jsx(c,{...t,title:o("story_popconfirm_delete_title"),okText:o("story_popconfirm_yes"),cancelText:o("story_popconfirm_no"),okType:"destructive",children:e.jsx(a,{priority:"primary",label:o("story_popconfirm_delete_btn")})})}},s={render:function(t){const{t:o}=p(["docs","common","components"]);return e.jsx(c,{...t,title:o("story_popconfirm_delete_btn"),description:o("story_popconfirm_delete_desc"),okText:o("story_popconfirm_yes"),cancelText:o("story_popconfirm_no"),children:e.jsx(a,{label:o("story_popconfirm_delete_btn")})})}},i={render:function(t){const{t:o}=p(["docs","common","components"]);return e.jsx(c,{...t,title:o("story_popconfirm_yes"),disabled:!0,children:e.jsx(a,{label:o("story_popconfirm_disabled_btn")})})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Popconfirm {...args} title={t("story_popconfirm_delete_title")} okText={t("story_popconfirm_yes")} cancelText={t("story_popconfirm_no")} okType="destructive">\r
        <Button priority="primary" label={t("story_popconfirm_delete_btn")} />\r
      </Popconfirm>;
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Popconfirm {...args} title={t("story_popconfirm_delete_btn")} // Using "Delete the task" title logic in simpler way or re-t
    description={t("story_popconfirm_delete_desc")} okText={t("story_popconfirm_yes")} cancelText={t("story_popconfirm_no")}>\r
        <Button label={t("story_popconfirm_delete_btn")} />\r
      </Popconfirm>;
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Popconfirm {...args} title={t("story_popconfirm_yes")} disabled>\r
        <Button label={t("story_popconfirm_disabled_btn")} />\r
      </Popconfirm>;
  }
}`,...i.parameters?.docs?.source}}};const P=["Default","WithDescription","Disabled"],S=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Disabled:i,WithDescription:s,__namedExportsOrder:P,default:C},Symbol.toStringTag,{value:"Module"}));export{n as D,S as P,s as W,i as a};
