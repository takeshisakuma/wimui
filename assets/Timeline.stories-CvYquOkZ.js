import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as j}from"./iframe-BPuV0Si6.js";import{I as x}from"./Icon-Ct3azGo-.js";const T=({children:n,align:i="left",className:o=""})=>e.jsx("div",{className:`wim-timeline wim-timeline--${i} ${o}`,children:j.Children.map(n,m=>j.isValidElement(m)?j.cloneElement(m,{align:i}):m)}),r=({children:n,className:i="",align:o})=>e.jsx("div",{className:`wim-timeline-item wim-timeline-item--${o} ${i}`,children:n}),t=({children:n,className:i=""})=>e.jsx("div",{className:`wim-timeline-separator ${i}`,children:n}),l=({className:n=""})=>e.jsx("div",{className:`wim-timeline-connector ${n}`}),a=({children:n,variant:i,className:o=""})=>{const m=!!n,h=i?`wim-timeline-point--${i}`:"",C=m?"wim-timeline-point--icon":"";return e.jsx("div",{className:`wim-timeline-point ${h} ${C} ${o}`,children:n})},s=({children:n,className:i=""})=>e.jsx("div",{className:`wim-timeline-content ${i}`,children:n}),u=({children:n,className:i=""})=>e.jsx("div",{className:`wim-timeline-opposite-content ${i}`,children:n});T.__docgenInfo={description:"",methods:[],displayName:"Timeline",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},align:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'alternate'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'alternate'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};r.__docgenInfo={description:"",methods:[],displayName:"TimelineItem",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'alternate'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'alternate'"}]},description:""}}};t.__docgenInfo={description:"",methods:[],displayName:"TimelineSeparator",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};l.__docgenInfo={description:"",methods:[],displayName:"TimelineConnector",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};a.__docgenInfo={description:"",methods:[],displayName:"TimelinePoint",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'error' | 'success'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'error'"},{name:"literal",value:"'success'"}]},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};s.__docgenInfo={description:"",methods:[],displayName:"TimelineContent",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};u.__docgenInfo={description:"",methods:[],displayName:"TimelineOppositeContent",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const f={title:"Component/Data Display/Timeline",component:T},c={render:n=>e.jsxs(T,{...n,align:"left",children:[e.jsxs(r,{children:[e.jsxs(t,{children:[e.jsx(a,{variant:"primary"}),e.jsx(l,{})]}),e.jsx(s,{children:"Eat"})]}),e.jsxs(r,{children:[e.jsxs(t,{children:[e.jsx(a,{variant:"secondary"}),e.jsx(l,{})]}),e.jsx(s,{children:"Code"})]}),e.jsxs(r,{children:[e.jsxs(t,{children:[e.jsx(a,{variant:"success"}),e.jsx(l,{})]}),e.jsx(s,{children:"Sleep"})]}),e.jsxs(r,{children:[e.jsx(t,{children:e.jsx(a,{})}),e.jsx(s,{children:"Repeat"})]})]})},d={render:n=>e.jsxs(T,{...n,align:"alternate",children:[e.jsxs(r,{children:[e.jsx(u,{children:"09:00 AM"}),e.jsxs(t,{children:[e.jsx(a,{variant:"primary"}),e.jsx(l,{})]}),e.jsx(s,{children:"Eat"})]}),e.jsxs(r,{children:[e.jsx(u,{children:"10:00 AM"}),e.jsxs(t,{children:[e.jsx(a,{variant:"secondary"}),e.jsx(l,{})]}),e.jsx(s,{children:"Code"})]}),e.jsxs(r,{children:[e.jsx(u,{children:"12:00 PM"}),e.jsxs(t,{children:[e.jsx(a,{variant:"success"}),e.jsx(l,{})]}),e.jsx(s,{children:"Sleep"})]})]})},p={render:n=>e.jsxs(T,{...n,children:[e.jsxs(r,{children:[e.jsxs(t,{children:[e.jsx(a,{variant:"primary",children:e.jsx(x,{name:"CheckIcon",size:"small"})}),e.jsx(l,{})]}),e.jsx(s,{children:"Step 1 Completed"})]}),e.jsxs(r,{children:[e.jsxs(t,{children:[e.jsx(a,{variant:"secondary",children:e.jsx(x,{name:"CircleIcon",size:"small"})}),e.jsx(l,{})]}),e.jsx(s,{children:"Step 2 Processing"})]}),e.jsxs(r,{children:[e.jsx(t,{children:e.jsx(a,{variant:"error",children:e.jsx(x,{name:"CloseIcon",size:"small"})})}),e.jsx(s,{children:"Step 3 Error"})]})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <Timeline {...args} align="left">\r
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
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <Timeline {...args} align="alternate">\r
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
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const v=["LeftAligned","Alternate","WithIcons"],S=Object.freeze(Object.defineProperty({__proto__:null,Alternate:d,LeftAligned:c,WithIcons:p,__namedExportsOrder:v,default:f},Symbol.toStringTag,{value:"Module"}));export{d as A,c as L,S as T,p as W};
