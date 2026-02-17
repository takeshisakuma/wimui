import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as u}from"./iframe-DMMO2qZF.js";import{c as o}from"./index-DmpUDI89.js";import{I as h}from"./Icon-cM6mll1K.js";const j=({children:i,align:n="left",className:m})=>e.jsx("div",{className:o("wim-timeline",`wim-timeline--${n}`,m),children:u.Children.map(i,c=>u.isValidElement(c)?u.cloneElement(c,{align:n}):c)}),r=({children:i,className:n,align:m})=>e.jsx("div",{className:o("wim-timeline-item",`wim-timeline-item--${m}`,n),children:i}),t=({children:i,className:n})=>e.jsx("div",{className:o("wim-timeline-separator",n),children:i}),l=({className:i})=>e.jsx("div",{className:o("wim-timeline-connector",i)}),a=({children:i,variant:n,className:m})=>{const c=!!i;return e.jsx("div",{className:o("wim-timeline-point",n&&`wim-timeline-point--${n}`,c&&"wim-timeline-point--icon",m),children:i})},s=({children:i,className:n})=>e.jsx("div",{className:o("wim-timeline-content",n),children:i}),x=({children:i,className:n})=>e.jsx("div",{className:o("wim-timeline-opposite-content",n),children:i});j.__docgenInfo={description:"",methods:[],displayName:"Timeline",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},align:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'alternate'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'alternate'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};r.__docgenInfo={description:"",methods:[],displayName:"TimelineItem",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},align:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'alternate'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'alternate'"}]},description:""}}};t.__docgenInfo={description:"",methods:[],displayName:"TimelineSeparator",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};l.__docgenInfo={description:"",methods:[],displayName:"TimelineConnector",props:{className:{required:!1,tsType:{name:"string"},description:""}}};a.__docgenInfo={description:"",methods:[],displayName:"TimelinePoint",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'error' | 'success'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'error'"},{name:"literal",value:"'success'"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};s.__docgenInfo={description:"",methods:[],displayName:"TimelineContent",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};x.__docgenInfo={description:"",methods:[],displayName:"TimelineOppositeContent",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const C={title:"Component/Data Display/Timeline",component:j},d={args:{align:"left"},render:i=>e.jsxs(j,{...i,children:[e.jsxs(r,{children:[e.jsxs(t,{children:[e.jsx(a,{variant:"primary"}),e.jsx(l,{})]}),e.jsx(s,{children:"Eat"})]}),e.jsxs(r,{children:[e.jsxs(t,{children:[e.jsx(a,{variant:"secondary"}),e.jsx(l,{})]}),e.jsx(s,{children:"Code"})]}),e.jsxs(r,{children:[e.jsxs(t,{children:[e.jsx(a,{variant:"success"}),e.jsx(l,{})]}),e.jsx(s,{children:"Sleep"})]}),e.jsxs(r,{children:[e.jsx(t,{children:e.jsx(a,{})}),e.jsx(s,{children:"Repeat"})]})]})},p={args:{align:"alternate"},render:i=>e.jsxs(j,{...i,children:[e.jsxs(r,{children:[e.jsx(x,{children:"09:00 AM"}),e.jsxs(t,{children:[e.jsx(a,{variant:"primary"}),e.jsx(l,{})]}),e.jsx(s,{children:"Eat"})]}),e.jsxs(r,{children:[e.jsx(x,{children:"10:00 AM"}),e.jsxs(t,{children:[e.jsx(a,{variant:"secondary"}),e.jsx(l,{})]}),e.jsx(s,{children:"Code"})]}),e.jsxs(r,{children:[e.jsx(x,{children:"12:00 PM"}),e.jsxs(t,{children:[e.jsx(a,{variant:"success"}),e.jsx(l,{})]}),e.jsx(s,{children:"Sleep"})]})]})},T={render:i=>e.jsxs(j,{...i,children:[e.jsxs(r,{children:[e.jsxs(t,{children:[e.jsx(a,{variant:"primary",children:e.jsx(h,{name:"CheckIcon",size:"small"})}),e.jsx(l,{})]}),e.jsx(s,{children:"Step 1 Completed"})]}),e.jsxs(r,{children:[e.jsxs(t,{children:[e.jsx(a,{variant:"secondary",children:e.jsx(h,{name:"CircleIcon",size:"small"})}),e.jsx(l,{})]}),e.jsx(s,{children:"Step 2 Processing"})]}),e.jsxs(r,{children:[e.jsx(t,{children:e.jsx(a,{variant:"error",children:e.jsx(h,{name:"CloseIcon",size:"small"})})}),e.jsx(s,{children:"Step 3 Error"})]})]})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    align: 'left'
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
    align: 'alternate'
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
