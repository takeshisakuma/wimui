import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as d,A as p}from"./iframe-Bn5mqC8Q.js";import{P as g,a as j,b as C,c as y}from"./Popover-Bj2Oulq2.js";import{B as s}from"./Button-xp1wFFLS.js";import{F as P}from"./FeedbackIcon-FHHOVuFE.js";import{u as m}from"./useTranslation-Cn4N2seM.js";const a=({title:c,description:o,onConfirm:t,onCancel:h,okText:_="OK",cancelText:x="Cancel",okType:b="default",children:l,icon:T,disabled:v=!1})=>{const u=d.useId(),f=d.useId();return v?d.isValidElement(l)?d.cloneElement(l,{disabled:!0}):e.jsx(e.Fragment,{children:l}):e.jsxs(g,{children:[e.jsx(j,{asChild:!0,children:l}),e.jsx(C,{className:"wim-popconfirm-content","aria-labelledby":u,"aria-describedby":o?f:void 0,children:e.jsxs("div",{className:"wim-popconfirm-inner",children:[e.jsxs("div",{className:"wim-popconfirm-message",children:[e.jsx("span",{className:"wim-popconfirm-icon",children:e.jsx(P,{intent:"warning",icon:T,size:"sm",color:"caution"})}),e.jsx("div",{id:u,className:"wim-popconfirm-title",children:c})]}),o&&e.jsx("div",{id:f,className:"wim-popconfirm-description",children:o}),e.jsxs("div",{className:"wim-popconfirm-actions",children:[e.jsx(y,{asChild:!0,children:e.jsx(s,{size:"sm",onClick:h,variant:"ghost",children:x})}),e.jsx(y,{asChild:!0,children:e.jsx(s,{size:"sm",onClick:t,variant:"solid",intent:b,children:_})})]})]})})]})};a.__docgenInfo={description:"",methods:[],displayName:"Popconfirm",props:{title:{required:!0,tsType:{name:"ReactNode"},description:"The title of the confirmation box"},description:{required:!1,tsType:{name:"ReactNode"},description:"The description of the confirmation box"},onConfirm:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when the user clicks the confirm button"},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when the user clicks the cancel button"},okText:{required:!1,tsType:{name:"ReactNode"},description:"Text of the confirm button",defaultValue:{value:'"OK"',computed:!1}},cancelText:{required:!1,tsType:{name:"ReactNode"},description:"Text of the cancel button",defaultValue:{value:'"Cancel"',computed:!1}},okType:{required:!1,tsType:{name:"union",raw:'"default" | "destructive" | "positive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"destructive"'},{name:"literal",value:'"positive"'}]},description:"Color role of the confirm button",defaultValue:{value:'"default"',computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:"The target element which the Popconfirm will be attached to"},icon:{required:!1,tsType:{name:"ReactNode"},description:"Customize the icon"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether to show the popconfirm",defaultValue:{value:"false",computed:!1}}}};const N={title:"Components/Alerts & Notifications/Popconfirm",component:a,tags:[],argTypes:{onConfirm:{action:"confirmed"},onCancel:{action:"cancelled"}}},n={render:function(o){const{t}=m(p);return e.jsx(a,{...o,title:t("story.popconfirm_delete_title"),okText:t("story.popconfirm_yes"),cancelText:t("story.popconfirm_no"),okType:"destructive",children:e.jsx(s,{variant:"solid",children:t("story.popconfirm_delete_btn")})})}},r={render:function(o){const{t}=m(p);return e.jsx(a,{...o,title:t("story.popconfirm_delete_btn"),description:t("story.popconfirm_delete_desc"),okText:t("story.popconfirm_yes"),cancelText:t("story.popconfirm_no"),children:e.jsx(s,{children:t("story.popconfirm_delete_btn")})})}},i={render:function(o){const{t}=m(p);return e.jsx(a,{...o,title:t("story.popconfirm_yes"),disabled:!0,children:e.jsx(s,{children:t("story.popconfirm_disabled_btn")})})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Popconfirm {...args} title={t("story.popconfirm_delete_title")} okText={t("story.popconfirm_yes")} cancelText={t("story.popconfirm_no")} okType="destructive">
        <Button variant="solid">{t("story.popconfirm_delete_btn")}</Button>
      </Popconfirm>;
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Popconfirm {...args} title={t("story.popconfirm_delete_btn")} // Using "Delete the task" title logic in simpler way or re-t
    description={t("story.popconfirm_delete_desc")} okText={t("story.popconfirm_yes")} cancelText={t("story.popconfirm_no")}>
        <Button>{t("story.popconfirm_delete_btn")}</Button>
      </Popconfirm>;
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Popconfirm {...args} title={t("story.popconfirm_yes")} disabled>
        <Button>{t("story.popconfirm_disabled_btn")}</Button>
      </Popconfirm>;
  }
}`,...i.parameters?.docs?.source}}};const w=["Default","WithDescription","Disabled"],B=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Disabled:i,WithDescription:r,__namedExportsOrder:w,default:N},Symbol.toStringTag,{value:"Module"}));export{n as D,B as P,r as W,i as a};
