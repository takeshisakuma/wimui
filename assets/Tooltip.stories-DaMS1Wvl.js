import{j as o}from"./jsx-runtime-u17CrQMm.js";import{T as r,a as t,b as n}from"./Tooltip-DE_hISb2.js";import{B as l}from"./Button-BceFFgd2.js";const T={title:"Components/Overlays/Tooltip",component:r,parameters:{layout:"centered"},argTypes:{delay:{control:"number"},isOpen:{control:"boolean"},placement:{control:"select",options:["top","bottom","left","right"]}}},s={render:e=>o.jsxs(r,{...e,children:[o.jsx(t,{asChild:!0,children:o.jsx(l,{label:"Hover me"})}),o.jsx(n,{children:"This is a tooltip"})]})},i={render:e=>o.jsx("div",{style:{padding:"50px"},children:o.jsxs(r,{...e,placement:"top",children:[o.jsx(t,{asChild:!0,children:o.jsx(l,{label:"Top"})}),o.jsx(n,{children:"Tooltip on top"})]})})},a={render:e=>o.jsx("div",{style:{padding:"50px"},children:o.jsxs(r,{...e,placement:"bottom",children:[o.jsx(t,{asChild:!0,children:o.jsx(l,{label:"Bottom"})}),o.jsx(n,{children:"Tooltip on bottom"})]})})},p={render:e=>o.jsx("div",{style:{padding:"50px"},children:o.jsxs(r,{...e,placement:"left",children:[o.jsx(t,{asChild:!0,children:o.jsx(l,{label:"Left"})}),o.jsx(n,{children:"Tooltip on left"})]})})},d={render:e=>o.jsx("div",{style:{padding:"50px"},children:o.jsxs(r,{...e,placement:"right",children:[o.jsx(t,{asChild:!0,children:o.jsx(l,{label:"Right"})}),o.jsx(n,{children:"Tooltip on right"})]})})},c={args:{delay:1e3},render:e=>o.jsxs(r,{...e,children:[o.jsx(t,{asChild:!0,children:o.jsx(l,{label:"Hover for 1s"})}),o.jsx(n,{children:"Delayed tooltip"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <Tooltip {...args}>\r
      <TooltipTrigger asChild>\r
        <Button label="Hover me" />\r
      </TooltipTrigger>\r
      <TooltipContent>This is a tooltip</TooltipContent>\r
    </Tooltip>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    padding: "50px"
  }}>\r
      <Tooltip {...args} placement="top">\r
        <TooltipTrigger asChild>\r
          <Button label="Top" />\r
        </TooltipTrigger>\r
        <TooltipContent>Tooltip on top</TooltipContent>\r
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
        <TooltipContent>Tooltip on bottom</TooltipContent>\r
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
        <TooltipContent>Tooltip on left</TooltipContent>\r
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
        <TooltipContent>Tooltip on right</TooltipContent>\r
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
      <TooltipContent>Delayed tooltip</TooltipContent>\r
    </Tooltip>
}`,...c.parameters?.docs?.source}}};const g=["Default","Top","Bottom","Left","Right","WithDelay"],x=Object.freeze(Object.defineProperty({__proto__:null,Bottom:a,Default:s,Left:p,Right:d,Top:i,WithDelay:c,__namedExportsOrder:g,default:T},Symbol.toStringTag,{value:"Module"}));export{a as B,s as D,p as L,d as R,x as T,c as W,i as a};
