import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as x,A as h}from"./iframe-BCX1a7Lk.js";import{c as m}from"./index-ClwcDBe6.js";import{I as y}from"./Icon-CCssd2AI.js";import{u as C}from"./useTranslation-C4U93Ik6.js";const u=({children:t,align:n="left",className:i})=>e.jsx("div",{className:m("wim-timeline",`wim-timeline--${n}`,i),children:x.Children.map(t,c=>x.isValidElement(c)?x.cloneElement(c,{align:n}):c)}),r=({children:t,className:n,align:i})=>e.jsx("div",{className:m("wim-timeline-item",`wim-timeline-item--${i}`,n),children:t}),s=({children:t,className:n})=>e.jsx("div",{className:m("wim-timeline-separator",n),children:t}),o=({className:t})=>e.jsx("div",{className:m("wim-timeline-connector",t)}),a=({children:t,variant:n,className:i})=>{const c=!!t;return e.jsx("div",{className:m("wim-timeline-point",n&&`wim-timeline-point--${n}`,c&&"wim-timeline-point--icon",i),children:t})},l=({children:t,className:n})=>e.jsx("div",{className:m("wim-timeline-content",n),children:t}),j=({children:t,className:n})=>e.jsx("div",{className:m("wim-timeline-opposite-content",n),children:t});u.__docgenInfo={description:"",methods:[],displayName:"Timeline",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},align:{required:!1,tsType:{name:"union",raw:'"left" | "right" | "alternate"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'},{name:"literal",value:'"alternate"'}]},description:"",defaultValue:{value:'"left"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};r.__docgenInfo={description:"",methods:[],displayName:"TimelineItem",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},align:{required:!1,tsType:{name:"union",raw:'"left" | "right" | "alternate"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'},{name:"literal",value:'"alternate"'}]},description:""}}};s.__docgenInfo={description:"",methods:[],displayName:"TimelineSeparator",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};o.__docgenInfo={description:"",methods:[],displayName:"TimelineConnector",props:{className:{required:!1,tsType:{name:"string"},description:""}}};a.__docgenInfo={description:"",methods:[],displayName:"TimelinePoint",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "error" | "success"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"error"'},{name:"literal",value:'"success"'}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};l.__docgenInfo={description:"",methods:[],displayName:"TimelineContent",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};j.__docgenInfo={description:"",methods:[],displayName:"TimelineOppositeContent",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const _={title:"Components/Data Structures/Timeline",component:u},d={args:{align:"left"},render:function(n){const{t:i}=C(h);return e.jsxs(u,{...n,children:[e.jsxs(r,{children:[e.jsxs(s,{children:[e.jsx(a,{variant:"primary"}),e.jsx(o,{})]}),e.jsx(l,{children:i("story.timeline_eat")})]}),e.jsxs(r,{children:[e.jsxs(s,{children:[e.jsx(a,{variant:"secondary"}),e.jsx(o,{})]}),e.jsx(l,{children:i("story.timeline_code")})]}),e.jsxs(r,{children:[e.jsxs(s,{children:[e.jsx(a,{variant:"success"}),e.jsx(o,{})]}),e.jsx(l,{children:i("story.timeline_sleep")})]}),e.jsxs(r,{children:[e.jsx(s,{children:e.jsx(a,{})}),e.jsx(l,{children:i("story.timeline_repeat")})]})]})}},p={args:{align:"alternate"},render:function(n){const{t:i}=C(h);return e.jsxs(u,{...n,children:[e.jsxs(r,{children:[e.jsx(j,{children:"09:00 AM"}),e.jsxs(s,{children:[e.jsx(a,{variant:"primary"}),e.jsx(o,{})]}),e.jsx(l,{children:i("story.timeline_eat")})]}),e.jsxs(r,{children:[e.jsx(j,{children:"10:00 AM"}),e.jsxs(s,{children:[e.jsx(a,{variant:"secondary"}),e.jsx(o,{})]}),e.jsx(l,{children:i("story.timeline_code")})]}),e.jsxs(r,{children:[e.jsx(j,{children:"12:00 PM"}),e.jsxs(s,{children:[e.jsx(a,{variant:"success"}),e.jsx(o,{})]}),e.jsx(l,{children:i("story.timeline_sleep")})]})]})}},T={render:function(n){const{t:i}=C(h);return e.jsxs(u,{...n,children:[e.jsxs(r,{children:[e.jsxs(s,{children:[e.jsx(a,{variant:"primary",children:e.jsx(y,{name:"CheckIcon",size:"sm"})}),e.jsx(o,{})]}),e.jsx(l,{children:i("story.timeline_step1_comp")})]}),e.jsxs(r,{children:[e.jsxs(s,{children:[e.jsx(a,{variant:"secondary",children:e.jsx(y,{name:"CircleIcon",size:"sm"})}),e.jsx(o,{})]}),e.jsx(l,{children:i("story.timeline_step2_proc")})]}),e.jsxs(r,{children:[e.jsx(s,{children:e.jsx(a,{variant:"error",children:e.jsx(y,{name:"CloseIcon",size:"sm"})})}),e.jsx(l,{children:i("story.timeline_step3_err")})]})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    align: "left"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Timeline {...args}>
        <TimelineItem>
          <TimelineSeparator>
            <TimelinePoint variant="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>{t("story.timeline_eat")}</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelinePoint variant="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>{t("story.timeline_code")}</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelinePoint variant="success" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>{t("story.timeline_sleep")}</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelinePoint />
          </TimelineSeparator>
          <TimelineContent>{t("story.timeline_repeat")}</TimelineContent>
        </TimelineItem>
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
    return <Timeline {...args}>
        <TimelineItem>
          <TimelineOppositeContent>09:00 AM</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelinePoint variant="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>{t("story.timeline_eat")}</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>10:00 AM</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelinePoint variant="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>{t("story.timeline_code")}</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>12:00 PM</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelinePoint variant="success" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>{t("story.timeline_sleep")}</TimelineContent>
        </TimelineItem>
      </Timeline>;
  }
}`,...p.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Timeline {...args}>
        <TimelineItem>
          <TimelineSeparator>
            <TimelinePoint variant="primary">
              <Icon name="CheckIcon" size="sm" />
            </TimelinePoint>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>{t("story.timeline_step1_comp")}</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelinePoint variant="secondary">
              <Icon name="CircleIcon" size="sm" />
            </TimelinePoint>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>{t("story.timeline_step2_proc")}</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelinePoint variant="error">
              <Icon name="CloseIcon" size="sm" />
            </TimelinePoint>
          </TimelineSeparator>
          <TimelineContent>{t("story.timeline_step3_err")}</TimelineContent>
        </TimelineItem>
      </Timeline>;
  }
}`,...T.parameters?.docs?.source}}};const f=["LeftAligned","Alternate","WithIcons"],R=Object.freeze(Object.defineProperty({__proto__:null,Alternate:p,LeftAligned:d,WithIcons:T,__namedExportsOrder:f,default:_},Symbol.toStringTag,{value:"Module"}));export{p as A,d as L,R as T,T as W};
