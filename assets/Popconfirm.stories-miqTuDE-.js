import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as p}from"./iframe-BisTGuVC.js";import{P as v,a as j,b as C,c as _}from"./Popover-UsFFtHUF.js";import{B as a}from"./Button-DcecViuG.js";import{F as P}from"./FeedbackIcon-XA-Kb3pa.js";import{u as m}from"./useTranslation-BH3LN071.js";const c=({title:r,description:t,onConfirm:o,onCancel:y,okText:b="OK",cancelText:h="Cancel",okType:x="default",children:l,icon:T,disabled:g=!1})=>{const{t:d}=m();if(g)return p.isValidElement(l)?p.cloneElement(l,{disabled:!0}):e.jsx(e.Fragment,{children:l});const u=p.useId(),f=p.useId();return e.jsxs(v,{children:[e.jsx(j,{asChild:!0,children:l}),e.jsx(C,{className:"wim-popconfirm-content","aria-labelledby":u,"aria-describedby":t?f:void 0,children:e.jsxs("div",{className:"wim-popconfirm-inner",children:[e.jsxs("div",{className:"wim-popconfirm-message",children:[e.jsx("span",{className:"wim-popconfirm-icon",children:e.jsx(P,{status:"warning",icon:T,size:"small",color:"caution"})}),e.jsx("div",{id:u,className:"wim-popconfirm-title",children:typeof r=="string"?d(r):r})]}),t&&e.jsx("div",{id:f,className:"wim-popconfirm-description",children:typeof t=="string"?d(t):t}),e.jsxs("div",{className:"wim-popconfirm-actions",children:[e.jsx(_,{asChild:!0,children:e.jsx(a,{size:"small",label:h,onClick:y,priority:"tertiary"})}),e.jsx(_,{asChild:!0,children:e.jsx(a,{size:"small",label:b,onClick:o,priority:"primary",role:x})})]})]})})]})};c.__docgenInfo={description:"",methods:[],displayName:"Popconfirm",props:{title:{required:!0,tsType:{name:"ReactNode"},description:"The title of the confirmation box"},description:{required:!1,tsType:{name:"ReactNode"},description:"The description of the confirmation box"},onConfirm:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when the user clicks the confirm button"},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when the user clicks the cancel button"},okText:{required:!1,tsType:{name:"string"},description:"Text of the confirm button",defaultValue:{value:'"OK"',computed:!1}},cancelText:{required:!1,tsType:{name:"string"},description:"Text of the cancel button",defaultValue:{value:'"Cancel"',computed:!1}},okType:{required:!1,tsType:{name:"union",raw:'"default" | "destructive" | "positive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"destructive"'},{name:"literal",value:'"positive"'}]},description:"Color role of the confirm button",defaultValue:{value:'"default"',computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:"The target element which the Popconfirm will be attached to"},icon:{required:!1,tsType:{name:"ReactNode"},description:"Customize the icon"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether to show the popconfirm",defaultValue:{value:"false",computed:!1}}}};const w={title:"Components/Alerts & Notifications/Popconfirm",component:c,tags:[],argTypes:{onConfirm:{action:"confirmed"},onCancel:{action:"cancelled"}}},n={render:function(t){const{t:o}=m(["docs","common","components"]);return e.jsx(c,{...t,title:o("story_popconfirm_delete_title"),okText:o("story_popconfirm_yes"),cancelText:o("story_popconfirm_no"),okType:"destructive",children:e.jsx(a,{priority:"primary",label:o("story_popconfirm_delete_btn")})})}},s={render:function(t){const{t:o}=m(["docs","common","components"]);return e.jsx(c,{...t,title:o("story_popconfirm_delete_btn"),description:o("story_popconfirm_delete_desc"),okText:o("story_popconfirm_yes"),cancelText:o("story_popconfirm_no"),children:e.jsx(a,{label:o("story_popconfirm_delete_btn")})})}},i={render:function(t){const{t:o}=m(["docs","common","components"]);return e.jsx(c,{...t,title:o("story_popconfirm_yes"),disabled:!0,children:e.jsx(a,{label:o("story_popconfirm_disabled_btn")})})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const k=["Default","WithDescription","Disabled"],z=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Disabled:i,WithDescription:s,__namedExportsOrder:k,default:w},Symbol.toStringTag,{value:"Module"}));export{n as D,z as P,s as W,i as a};
