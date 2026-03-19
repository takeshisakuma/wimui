import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as j}from"./iframe-Db9rXbo4.js";import{c as m}from"./index-BeEGmSlY.js";import{I as x}from"./Icon-BR9xtm29.js";import{A as y}from"./i18nConstants-BpHxieg5.js";import{u as h}from"./useTranslation-CwCoJP0K.js";const u=({children:r,align:n="left",className:i})=>e.jsx("div",{className:m("wim-timeline",`wim-timeline--${n}`,i),children:j.Children.map(r,c=>j.isValidElement(c)?j.cloneElement(c,{align:n}):c)}),t=({children:r,className:n,align:i})=>e.jsx("div",{className:m("wim-timeline-item",`wim-timeline-item--${i}`,n),children:r}),s=({children:r,className:n})=>e.jsx("div",{className:m("wim-timeline-separator",n),children:r}),o=({className:r})=>e.jsx("div",{className:m("wim-timeline-connector",r)}),a=({children:r,variant:n,className:i})=>{const c=!!r;return e.jsx("div",{className:m("wim-timeline-point",n&&`wim-timeline-point--${n}`,c&&"wim-timeline-point--icon",i),children:r})},l=({children:r,className:n})=>e.jsx("div",{className:m("wim-timeline-content",n),children:r}),_=({children:r,className:n})=>e.jsx("div",{className:m("wim-timeline-opposite-content",n),children:r});u.__docgenInfo={description:"",methods:[],displayName:"Timeline",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},align:{required:!1,tsType:{name:"union",raw:'"left" | "right" | "alternate"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'},{name:"literal",value:'"alternate"'}]},description:"",defaultValue:{value:'"left"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};t.__docgenInfo={description:"",methods:[],displayName:"TimelineItem",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},align:{required:!1,tsType:{name:"union",raw:'"left" | "right" | "alternate"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'},{name:"literal",value:'"alternate"'}]},description:""}}};s.__docgenInfo={description:"",methods:[],displayName:"TimelineSeparator",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};o.__docgenInfo={description:"",methods:[],displayName:"TimelineConnector",props:{className:{required:!1,tsType:{name:"string"},description:""}}};a.__docgenInfo={description:"",methods:[],displayName:"TimelinePoint",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "error" | "success"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"error"'},{name:"literal",value:'"success"'}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};l.__docgenInfo={description:"",methods:[],displayName:"TimelineContent",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};_.__docgenInfo={description:"",methods:[],displayName:"TimelineOppositeContent",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const C={title:"Components/Data Structures/Timeline",component:u},d={args:{align:"left"},render:function(n){const{t:i}=h(y);return e.jsxs(u,{...n,children:[e.jsxs(t,{children:[e.jsxs(s,{children:[e.jsx(a,{variant:"primary"}),e.jsx(o,{})]}),e.jsx(l,{children:i("story_timeline_eat")})]}),e.jsxs(t,{children:[e.jsxs(s,{children:[e.jsx(a,{variant:"secondary"}),e.jsx(o,{})]}),e.jsx(l,{children:i("story_timeline_code")})]}),e.jsxs(t,{children:[e.jsxs(s,{children:[e.jsx(a,{variant:"success"}),e.jsx(o,{})]}),e.jsx(l,{children:i("story_timeline_sleep")})]}),e.jsxs(t,{children:[e.jsx(s,{children:e.jsx(a,{})}),e.jsx(l,{children:i("story_timeline_repeat")})]})]})}},p={args:{align:"alternate"},render:function(n){const{t:i}=h(y);return e.jsxs(u,{...n,children:[e.jsxs(t,{children:[e.jsx(_,{children:"09:00 AM"}),e.jsxs(s,{children:[e.jsx(a,{variant:"primary"}),e.jsx(o,{})]}),e.jsx(l,{children:i("story_timeline_eat")})]}),e.jsxs(t,{children:[e.jsx(_,{children:"10:00 AM"}),e.jsxs(s,{children:[e.jsx(a,{variant:"secondary"}),e.jsx(o,{})]}),e.jsx(l,{children:i("story_timeline_code")})]}),e.jsxs(t,{children:[e.jsx(_,{children:"12:00 PM"}),e.jsxs(s,{children:[e.jsx(a,{variant:"success"}),e.jsx(o,{})]}),e.jsx(l,{children:i("story_timeline_sleep")})]})]})}},T={render:function(n){const{t:i}=h(y);return e.jsxs(u,{...n,children:[e.jsxs(t,{children:[e.jsxs(s,{children:[e.jsx(a,{variant:"primary",children:e.jsx(x,{name:"CheckIcon",size:"small"})}),e.jsx(o,{})]}),e.jsx(l,{children:i("story_timeline_step1_comp")})]}),e.jsxs(t,{children:[e.jsxs(s,{children:[e.jsx(a,{variant:"secondary",children:e.jsx(x,{name:"CircleIcon",size:"small"})}),e.jsx(o,{})]}),e.jsx(l,{children:i("story_timeline_step2_proc")})]}),e.jsxs(t,{children:[e.jsx(s,{children:e.jsx(a,{variant:"error",children:e.jsx(x,{name:"CloseIcon",size:"small"})})}),e.jsx(l,{children:i("story_timeline_step3_err")})]})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    align: "left"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Timeline {...args}>\r
        <TimelineItem>\r
          <TimelineSeparator>\r
            <TimelinePoint variant="primary" />\r
            <TimelineConnector />\r
          </TimelineSeparator>\r
          <TimelineContent>{t("story_timeline_eat")}</TimelineContent>\r
        </TimelineItem>\r
        <TimelineItem>\r
          <TimelineSeparator>\r
            <TimelinePoint variant="secondary" />\r
            <TimelineConnector />\r
          </TimelineSeparator>\r
          <TimelineContent>{t("story_timeline_code")}</TimelineContent>\r
        </TimelineItem>\r
        <TimelineItem>\r
          <TimelineSeparator>\r
            <TimelinePoint variant="success" />\r
            <TimelineConnector />\r
          </TimelineSeparator>\r
          <TimelineContent>{t("story_timeline_sleep")}</TimelineContent>\r
        </TimelineItem>\r
        <TimelineItem>\r
          <TimelineSeparator>\r
            <TimelinePoint />\r
          </TimelineSeparator>\r
          <TimelineContent>{t("story_timeline_repeat")}</TimelineContent>\r
        </TimelineItem>\r
      </Timeline>;
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    align: "alternate"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Timeline {...args}>\r
        <TimelineItem>\r
          <TimelineOppositeContent>09:00 AM</TimelineOppositeContent>\r
          <TimelineSeparator>\r
            <TimelinePoint variant="primary" />\r
            <TimelineConnector />\r
          </TimelineSeparator>\r
          <TimelineContent>{t("story_timeline_eat")}</TimelineContent>\r
        </TimelineItem>\r
        <TimelineItem>\r
          <TimelineOppositeContent>10:00 AM</TimelineOppositeContent>\r
          <TimelineSeparator>\r
            <TimelinePoint variant="secondary" />\r
            <TimelineConnector />\r
          </TimelineSeparator>\r
          <TimelineContent>{t("story_timeline_code")}</TimelineContent>\r
        </TimelineItem>\r
        <TimelineItem>\r
          <TimelineOppositeContent>12:00 PM</TimelineOppositeContent>\r
          <TimelineSeparator>\r
            <TimelinePoint variant="success" />\r
            <TimelineConnector />\r
          </TimelineSeparator>\r
          <TimelineContent>{t("story_timeline_sleep")}</TimelineContent>\r
        </TimelineItem>\r
      </Timeline>;
  }
}`,...p.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Timeline {...args}>\r
        <TimelineItem>\r
          <TimelineSeparator>\r
            <TimelinePoint variant="primary">\r
              <Icon name="CheckIcon" size="small" />\r
            </TimelinePoint>\r
            <TimelineConnector />\r
          </TimelineSeparator>\r
          <TimelineContent>{t("story_timeline_step1_comp")}</TimelineContent>\r
        </TimelineItem>\r
        <TimelineItem>\r
          <TimelineSeparator>\r
            <TimelinePoint variant="secondary">\r
              <Icon name="CircleIcon" size="small" />\r
            </TimelinePoint>\r
            <TimelineConnector />\r
          </TimelineSeparator>\r
          <TimelineContent>{t("story_timeline_step2_proc")}</TimelineContent>\r
        </TimelineItem>\r
        <TimelineItem>\r
          <TimelineSeparator>\r
            <TimelinePoint variant="error">\r
              <Icon name="CloseIcon" size="small" />\r
            </TimelinePoint>\r
          </TimelineSeparator>\r
          <TimelineContent>{t("story_timeline_step3_err")}</TimelineContent>\r
        </TimelineItem>\r
      </Timeline>;
  }
}`,...T.parameters?.docs?.source}}};const f=["LeftAligned","Alternate","WithIcons"],A=Object.freeze(Object.defineProperty({__proto__:null,Alternate:p,LeftAligned:d,WithIcons:T,__namedExportsOrder:f,default:C},Symbol.toStringTag,{value:"Module"}));export{p as A,d as L,A as T,T as W};
