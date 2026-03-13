import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as y}from"./iframe-D4gOfWnt.js";import{c as m}from"./index-Cl0yRb9X.js";import{I as j}from"./Icon-FTO_0HBc.js";import{u as x}from"./useTranslation-BONq47qB.js";const _=({children:r,align:n="left",className:i})=>e.jsx("div",{className:m("wim-timeline",`wim-timeline--${n}`,i),children:y.Children.map(r,c=>y.isValidElement(c)?y.cloneElement(c,{align:n}):c)}),t=({children:r,className:n,align:i})=>e.jsx("div",{className:m("wim-timeline-item",`wim-timeline-item--${i}`,n),children:r}),s=({children:r,className:n})=>e.jsx("div",{className:m("wim-timeline-separator",n),children:r}),l=({className:r})=>e.jsx("div",{className:m("wim-timeline-connector",r)}),o=({children:r,variant:n,className:i})=>{const c=!!r;return e.jsx("div",{className:m("wim-timeline-point",n&&`wim-timeline-point--${n}`,c&&"wim-timeline-point--icon",i),children:r})},a=({children:r,className:n})=>e.jsx("div",{className:m("wim-timeline-content",n),children:r}),u=({children:r,className:n})=>e.jsx("div",{className:m("wim-timeline-opposite-content",n),children:r});_.__docgenInfo={description:"",methods:[],displayName:"Timeline",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},align:{required:!1,tsType:{name:"union",raw:'"left" | "right" | "alternate"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'},{name:"literal",value:'"alternate"'}]},description:"",defaultValue:{value:'"left"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};t.__docgenInfo={description:"",methods:[],displayName:"TimelineItem",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},align:{required:!1,tsType:{name:"union",raw:'"left" | "right" | "alternate"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'},{name:"literal",value:'"alternate"'}]},description:""}}};s.__docgenInfo={description:"",methods:[],displayName:"TimelineSeparator",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};l.__docgenInfo={description:"",methods:[],displayName:"TimelineConnector",props:{className:{required:!1,tsType:{name:"string"},description:""}}};o.__docgenInfo={description:"",methods:[],displayName:"TimelinePoint",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "error" | "success"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"error"'},{name:"literal",value:'"success"'}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};a.__docgenInfo={description:"",methods:[],displayName:"TimelineContent",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};u.__docgenInfo={description:"",methods:[],displayName:"TimelineOppositeContent",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const h={title:"Components/Data Structures/Timeline",component:_},d={args:{align:"left"},render:function(n){const{t:i}=x(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsxs(_,{...n,children:[e.jsxs(t,{children:[e.jsxs(s,{children:[e.jsx(o,{variant:"primary"}),e.jsx(l,{})]}),e.jsx(a,{children:i("story_timeline_eat")})]}),e.jsxs(t,{children:[e.jsxs(s,{children:[e.jsx(o,{variant:"secondary"}),e.jsx(l,{})]}),e.jsx(a,{children:i("story_timeline_code")})]}),e.jsxs(t,{children:[e.jsxs(s,{children:[e.jsx(o,{variant:"success"}),e.jsx(l,{})]}),e.jsx(a,{children:i("story_timeline_sleep")})]}),e.jsxs(t,{children:[e.jsx(s,{children:e.jsx(o,{})}),e.jsx(a,{children:i("story_timeline_repeat")})]})]})}},p={args:{align:"alternate"},render:function(n){const{t:i}=x(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsxs(_,{...n,children:[e.jsxs(t,{children:[e.jsx(u,{children:"09:00 AM"}),e.jsxs(s,{children:[e.jsx(o,{variant:"primary"}),e.jsx(l,{})]}),e.jsx(a,{children:i("story_timeline_eat")})]}),e.jsxs(t,{children:[e.jsx(u,{children:"10:00 AM"}),e.jsxs(s,{children:[e.jsx(o,{variant:"secondary"}),e.jsx(l,{})]}),e.jsx(a,{children:i("story_timeline_code")})]}),e.jsxs(t,{children:[e.jsx(u,{children:"12:00 PM"}),e.jsxs(s,{children:[e.jsx(o,{variant:"success"}),e.jsx(l,{})]}),e.jsx(a,{children:i("story_timeline_sleep")})]})]})}},T={render:function(n){const{t:i}=x(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsxs(_,{...n,children:[e.jsxs(t,{children:[e.jsxs(s,{children:[e.jsx(o,{variant:"primary",children:e.jsx(j,{name:"CheckIcon",size:"small"})}),e.jsx(l,{})]}),e.jsx(a,{children:i("story_timeline_step1_comp")})]}),e.jsxs(t,{children:[e.jsxs(s,{children:[e.jsx(o,{variant:"secondary",children:e.jsx(j,{name:"CircleIcon",size:"small"})}),e.jsx(l,{})]}),e.jsx(a,{children:i("story_timeline_step2_proc")})]}),e.jsxs(t,{children:[e.jsx(s,{children:e.jsx(o,{variant:"error",children:e.jsx(j,{name:"CloseIcon",size:"small"})})}),e.jsx(a,{children:i("story_timeline_step3_err")})]})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    align: "left"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...T.parameters?.docs?.source}}};const g=["LeftAligned","Alternate","WithIcons"],R=Object.freeze(Object.defineProperty({__proto__:null,Alternate:p,LeftAligned:d,WithIcons:T,__namedExportsOrder:g,default:h},Symbol.toStringTag,{value:"Module"}));export{p as A,d as L,R as T,T as W};
