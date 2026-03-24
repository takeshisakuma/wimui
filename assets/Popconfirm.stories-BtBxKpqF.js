import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as p,A as m}from"./iframe-CF4lwqoS.js";import{P as j,a as C,b as P,c as y}from"./Popover-By9EEh4r.js";import{B as a}from"./Button-BhV4Rc6Y.js";import{F as w}from"./FeedbackIcon-BuUEp8xM.js";import{u as d}from"./useTranslation-DtEA5sc5.js";const c=({title:r,description:o,onConfirm:t,onCancel:b,okText:h="OK",cancelText:x="Cancel",okType:T="default",children:l,icon:g,disabled:v=!1})=>{const{t:u}=d(),f=p.useId(),_=p.useId();return v?p.isValidElement(l)?p.cloneElement(l,{disabled:!0}):e.jsx(e.Fragment,{children:l}):e.jsxs(j,{children:[e.jsx(C,{asChild:!0,children:l}),e.jsx(P,{className:"wim-popconfirm-content","aria-labelledby":f,"aria-describedby":o?_:void 0,children:e.jsxs("div",{className:"wim-popconfirm-inner",children:[e.jsxs("div",{className:"wim-popconfirm-message",children:[e.jsx("span",{className:"wim-popconfirm-icon",children:e.jsx(w,{status:"warning",icon:g,size:"small",color:"caution"})}),e.jsx("div",{id:f,className:"wim-popconfirm-title",children:typeof r=="string"?u(r):r})]}),o&&e.jsx("div",{id:_,className:"wim-popconfirm-description",children:typeof o=="string"?u(o):o}),e.jsxs("div",{className:"wim-popconfirm-actions",children:[e.jsx(y,{asChild:!0,children:e.jsx(a,{size:"small",label:x,onClick:b,priority:"tertiary"})}),e.jsx(y,{asChild:!0,children:e.jsx(a,{size:"small",label:h,onClick:t,priority:"primary",role:T})})]})]})})]})};c.__docgenInfo={description:"",methods:[],displayName:"Popconfirm",props:{title:{required:!0,tsType:{name:"ReactNode"},description:"The title of the confirmation box"},description:{required:!1,tsType:{name:"ReactNode"},description:"The description of the confirmation box"},onConfirm:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when the user clicks the confirm button"},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when the user clicks the cancel button"},okText:{required:!1,tsType:{name:"string"},description:"Text of the confirm button",defaultValue:{value:'"OK"',computed:!1}},cancelText:{required:!1,tsType:{name:"string"},description:"Text of the cancel button",defaultValue:{value:'"Cancel"',computed:!1}},okType:{required:!1,tsType:{name:"union",raw:'"default" | "destructive" | "positive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"destructive"'},{name:"literal",value:'"positive"'}]},description:"Color role of the confirm button",defaultValue:{value:'"default"',computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:"The target element which the Popconfirm will be attached to"},icon:{required:!1,tsType:{name:"ReactNode"},description:"Customize the icon"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether to show the popconfirm",defaultValue:{value:"false",computed:!1}}}};const N={title:"Components/Alerts & Notifications/Popconfirm",component:c,tags:[],argTypes:{onConfirm:{action:"confirmed"},onCancel:{action:"cancelled"}}},n={render:function(o){const{t}=d(m);return e.jsx(c,{...o,title:t("story_popconfirm_delete_title"),okText:t("story_popconfirm_yes"),cancelText:t("story_popconfirm_no"),okType:"destructive",children:e.jsx(a,{priority:"primary",label:t("story_popconfirm_delete_btn")})})}},s={render:function(o){const{t}=d(m);return e.jsx(c,{...o,title:t("story_popconfirm_delete_btn"),description:t("story_popconfirm_delete_desc"),okText:t("story_popconfirm_yes"),cancelText:t("story_popconfirm_no"),children:e.jsx(a,{label:t("story_popconfirm_delete_btn")})})}},i={render:function(o){const{t}=d(m);return e.jsx(c,{...o,title:t("story_popconfirm_yes"),disabled:!0,children:e.jsx(a,{label:t("story_popconfirm_disabled_btn")})})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Popconfirm {...args} title={t("story_popconfirm_delete_title")} okText={t("story_popconfirm_yes")} cancelText={t("story_popconfirm_no")} okType="destructive">
        <Button priority="primary" label={t("story_popconfirm_delete_btn")} />
      </Popconfirm>;
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Popconfirm {...args} title={t("story_popconfirm_delete_btn")} // Using "Delete the task" title logic in simpler way or re-t
    description={t("story_popconfirm_delete_desc")} okText={t("story_popconfirm_yes")} cancelText={t("story_popconfirm_no")}>
        <Button label={t("story_popconfirm_delete_btn")} />
      </Popconfirm>;
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Popconfirm {...args} title={t("story_popconfirm_yes")} disabled>
        <Button label={t("story_popconfirm_disabled_btn")} />
      </Popconfirm>;
  }
}`,...i.parameters?.docs?.source}}};const k=["Default","WithDescription","Disabled"],L=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Disabled:i,WithDescription:s,__namedExportsOrder:k,default:N},Symbol.toStringTag,{value:"Module"}));export{n as D,L as P,s as W,i as a};
