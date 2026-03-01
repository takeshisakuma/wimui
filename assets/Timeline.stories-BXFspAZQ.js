import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as x}from"./iframe-CxGJGCEe.js";import{c as o}from"./index-kCw4ylN7.js";import{I as h}from"./Icon-CBegJE_x.js";const j=({children:n,align:i="left",className:m})=>e.jsx("div",{className:o("wim-timeline",`wim-timeline--${i}`,m),children:x.Children.map(n,c=>x.isValidElement(c)?x.cloneElement(c,{align:i}):c)}),r=({children:n,className:i,align:m})=>e.jsx("div",{className:o("wim-timeline-item",`wim-timeline-item--${m}`,i),children:n}),t=({children:n,className:i})=>e.jsx("div",{className:o("wim-timeline-separator",i),children:n}),l=({className:n})=>e.jsx("div",{className:o("wim-timeline-connector",n)}),a=({children:n,variant:i,className:m})=>{const c=!!n;return e.jsx("div",{className:o("wim-timeline-point",i&&`wim-timeline-point--${i}`,c&&"wim-timeline-point--icon",m),children:n})},s=({children:n,className:i})=>e.jsx("div",{className:o("wim-timeline-content",i),children:n}),u=({children:n,className:i})=>e.jsx("div",{className:o("wim-timeline-opposite-content",i),children:n});j.__docgenInfo={description:"",methods:[],displayName:"Timeline",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},align:{required:!1,tsType:{name:"union",raw:'"left" | "right" | "alternate"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'},{name:"literal",value:'"alternate"'}]},description:"",defaultValue:{value:'"left"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};r.__docgenInfo={description:"",methods:[],displayName:"TimelineItem",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},align:{required:!1,tsType:{name:"union",raw:'"left" | "right" | "alternate"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'},{name:"literal",value:'"alternate"'}]},description:""}}};t.__docgenInfo={description:"",methods:[],displayName:"TimelineSeparator",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};l.__docgenInfo={description:"",methods:[],displayName:"TimelineConnector",props:{className:{required:!1,tsType:{name:"string"},description:""}}};a.__docgenInfo={description:"",methods:[],displayName:"TimelinePoint",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "error" | "success"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"error"'},{name:"literal",value:'"success"'}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};s.__docgenInfo={description:"",methods:[],displayName:"TimelineContent",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};u.__docgenInfo={description:"",methods:[],displayName:"TimelineOppositeContent",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const C={title:"Components/Data Structures/Timeline",component:j},d={args:{align:"left"},render:n=>e.jsxs(j,{...n,children:[e.jsxs(r,{children:[e.jsxs(t,{children:[e.jsx(a,{variant:"primary"}),e.jsx(l,{})]}),e.jsx(s,{children:"Eat"})]}),e.jsxs(r,{children:[e.jsxs(t,{children:[e.jsx(a,{variant:"secondary"}),e.jsx(l,{})]}),e.jsx(s,{children:"Code"})]}),e.jsxs(r,{children:[e.jsxs(t,{children:[e.jsx(a,{variant:"success"}),e.jsx(l,{})]}),e.jsx(s,{children:"Sleep"})]}),e.jsxs(r,{children:[e.jsx(t,{children:e.jsx(a,{})}),e.jsx(s,{children:"Repeat"})]})]})},p={args:{align:"alternate"},render:n=>e.jsxs(j,{...n,children:[e.jsxs(r,{children:[e.jsx(u,{children:"09:00 AM"}),e.jsxs(t,{children:[e.jsx(a,{variant:"primary"}),e.jsx(l,{})]}),e.jsx(s,{children:"Eat"})]}),e.jsxs(r,{children:[e.jsx(u,{children:"10:00 AM"}),e.jsxs(t,{children:[e.jsx(a,{variant:"secondary"}),e.jsx(l,{})]}),e.jsx(s,{children:"Code"})]}),e.jsxs(r,{children:[e.jsx(u,{children:"12:00 PM"}),e.jsxs(t,{children:[e.jsx(a,{variant:"success"}),e.jsx(l,{})]}),e.jsx(s,{children:"Sleep"})]})]})},T={render:n=>e.jsxs(j,{...n,children:[e.jsxs(r,{children:[e.jsxs(t,{children:[e.jsx(a,{variant:"primary",children:e.jsx(h,{name:"CheckIcon",size:"small"})}),e.jsx(l,{})]}),e.jsx(s,{children:"Step 1 Completed"})]}),e.jsxs(r,{children:[e.jsxs(t,{children:[e.jsx(a,{variant:"secondary",children:e.jsx(h,{name:"CircleIcon",size:"small"})}),e.jsx(l,{})]}),e.jsx(s,{children:"Step 2 Processing"})]}),e.jsxs(r,{children:[e.jsx(t,{children:e.jsx(a,{variant:"error",children:e.jsx(h,{name:"CloseIcon",size:"small"})})}),e.jsx(s,{children:"Step 3 Error"})]})]})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    align: "left"
  },
  render: args => <Timeline {...args}>\r
      <TimelineItem>\r
        <TimelineSeparator>\r
          <TimelinePoint variant="primary" />\r
          <TimelineConnector />\r
        </TimelineSeparator>\r
        <TimelineContent>Eat</TimelineContent>\r
      </TimelineItem>\r
      <TimelineItem>\r
        <TimelineSeparator>\r
          <TimelinePoint variant="secondary" />\r
          <TimelineConnector />\r
        </TimelineSeparator>\r
        <TimelineContent>Code</TimelineContent>\r
      </TimelineItem>\r
      <TimelineItem>\r
        <TimelineSeparator>\r
          <TimelinePoint variant="success" />\r
          <TimelineConnector />\r
        </TimelineSeparator>\r
        <TimelineContent>Sleep</TimelineContent>\r
      </TimelineItem>\r
      <TimelineItem>\r
        <TimelineSeparator>\r
          <TimelinePoint />\r
        </TimelineSeparator>\r
        <TimelineContent>Repeat</TimelineContent>\r
      </TimelineItem>\r
    </Timeline>
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    align: "alternate"
  },
  render: args => <Timeline {...args}>\r
      <TimelineItem>\r
        <TimelineOppositeContent>09:00 AM</TimelineOppositeContent>\r
        <TimelineSeparator>\r
          <TimelinePoint variant="primary" />\r
          <TimelineConnector />\r
        </TimelineSeparator>\r
        <TimelineContent>Eat</TimelineContent>\r
      </TimelineItem>\r
      <TimelineItem>\r
        <TimelineOppositeContent>10:00 AM</TimelineOppositeContent>\r
        <TimelineSeparator>\r
          <TimelinePoint variant="secondary" />\r
          <TimelineConnector />\r
        </TimelineSeparator>\r
        <TimelineContent>Code</TimelineContent>\r
      </TimelineItem>\r
      <TimelineItem>\r
        <TimelineOppositeContent>12:00 PM</TimelineOppositeContent>\r
        <TimelineSeparator>\r
          <TimelinePoint variant="success" />\r
          <TimelineConnector />\r
        </TimelineSeparator>\r
        <TimelineContent>Sleep</TimelineContent>\r
      </TimelineItem>\r
    </Timeline>
}`,...p.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => <Timeline {...args}>\r
      <TimelineItem>\r
        <TimelineSeparator>\r
          <TimelinePoint variant="primary">\r
            <Icon name="CheckIcon" size="small" />\r
          </TimelinePoint>\r
          <TimelineConnector />\r
        </TimelineSeparator>\r
        <TimelineContent>Step 1 Completed</TimelineContent>\r
      </TimelineItem>\r
      <TimelineItem>\r
        <TimelineSeparator>\r
          <TimelinePoint variant="secondary">\r
            <Icon name="CircleIcon" size="small" />\r
          </TimelinePoint>\r
          <TimelineConnector />\r
        </TimelineSeparator>\r
        <TimelineContent>Step 2 Processing</TimelineContent>\r
      </TimelineItem>\r
      <TimelineItem>\r
        <TimelineSeparator>\r
          <TimelinePoint variant="error">\r
            <Icon name="CloseIcon" size="small" />\r
          </TimelinePoint>\r
        </TimelineSeparator>\r
        <TimelineContent>Step 3 Error</TimelineContent>\r
      </TimelineItem>\r
    </Timeline>
}`,...T.parameters?.docs?.source}}};const I=["LeftAligned","Alternate","WithIcons"],v=Object.freeze(Object.defineProperty({__proto__:null,Alternate:p,LeftAligned:d,WithIcons:T,__namedExportsOrder:I,default:C},Symbol.toStringTag,{value:"Module"}));export{p as A,d as L,v as T,T as W};
