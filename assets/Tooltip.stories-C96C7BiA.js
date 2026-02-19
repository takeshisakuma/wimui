import{j as r}from"./jsx-runtime-u17CrQMm.js";import{T as e,a as t,b as n}from"./Tooltip-miL87so0.js";import{B as l}from"./Button-BXnGthi0.js";const T={title:"Component/Overlays/Tooltip",component:e,parameters:{layout:"centered"},argTypes:{delay:{control:"number"},isOpen:{control:"boolean"},placement:{control:"select",options:["top","bottom","left","right"]}}},s={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{asChild:!0,children:r.jsx(l,{label:"Hover me"})}),r.jsx(n,{children:"This is a tooltip"})]})},i={render:o=>r.jsx("div",{style:{padding:"50px"},children:r.jsxs(e,{...o,placement:"top",children:[r.jsx(t,{asChild:!0,children:r.jsx(l,{label:"Top"})}),r.jsx(n,{children:"Tooltip on top"})]})})},a={render:o=>r.jsx("div",{style:{padding:"50px"},children:r.jsxs(e,{...o,placement:"bottom",children:[r.jsx(t,{asChild:!0,children:r.jsx(l,{label:"Bottom"})}),r.jsx(n,{children:"Tooltip on bottom"})]})})},p={render:o=>r.jsx("div",{style:{padding:"50px"},children:r.jsxs(e,{...o,placement:"left",children:[r.jsx(t,{asChild:!0,children:r.jsx(l,{label:"Left"})}),r.jsx(n,{children:"Tooltip on left"})]})})},d={render:o=>r.jsx("div",{style:{padding:"50px"},children:r.jsxs(e,{...o,placement:"right",children:[r.jsx(t,{asChild:!0,children:r.jsx(l,{label:"Right"})}),r.jsx(n,{children:"Tooltip on right"})]})})},c={args:{delay:1e3},render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{asChild:!0,children:r.jsx(l,{label:"Hover for 1s"})}),r.jsx(n,{children:"Delayed tooltip"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <Tooltip {...args}>\r
            <TooltipTrigger asChild>\r
                <Button label="Hover me" />\r
            </TooltipTrigger>\r
            <TooltipContent>\r
                This is a tooltip\r
            </TooltipContent>\r
        </Tooltip>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    padding: "50px"
  }}>\r
            <Tooltip {...args} placement="top">\r
                <TooltipTrigger asChild>\r
                    <Button label="Top" />\r
                </TooltipTrigger>\r
                <TooltipContent>\r
                    Tooltip on top\r
                </TooltipContent>\r
            </Tooltip>\r
        </div>
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    padding: "50px"
  }}>\r
            <Tooltip {...args} placement="bottom">\r
                <TooltipTrigger asChild>\r
                    <Button label="Bottom" />\r
                </TooltipTrigger>\r
                <TooltipContent>\r
                    Tooltip on bottom\r
                </TooltipContent>\r
            </Tooltip>\r
        </div>
}`,...a.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    padding: "50px"
  }}>\r
            <Tooltip {...args} placement="left">\r
                <TooltipTrigger asChild>\r
                    <Button label="Left" />\r
                </TooltipTrigger>\r
                <TooltipContent>\r
                    Tooltip on left\r
                </TooltipContent>\r
            </Tooltip>\r
        </div>
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    padding: "50px"
  }}>\r
            <Tooltip {...args} placement="right">\r
                <TooltipTrigger asChild>\r
                    <Button label="Right" />\r
                </TooltipTrigger>\r
                <TooltipContent>\r
                    Tooltip on right\r
                </TooltipContent>\r
            </Tooltip>\r
        </div>
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    delay: 1000
  },
  render: args => <Tooltip {...args}>\r
            <TooltipTrigger asChild>\r
                <Button label="Hover for 1s" />\r
            </TooltipTrigger>\r
            <TooltipContent>\r
                Delayed tooltip\r
            </TooltipContent>\r
        </Tooltip>
}`,...c.parameters?.docs?.source}}};const g=["Default","Top","Bottom","Left","Right","WithDelay"],x=Object.freeze(Object.defineProperty({__proto__:null,Bottom:a,Default:s,Left:p,Right:d,Top:i,WithDelay:c,__namedExportsOrder:g,default:T},Symbol.toStringTag,{value:"Module"}));export{a as B,s as D,p as L,d as R,x as T,c as W,i as a};
