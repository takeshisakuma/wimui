import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as w,R as j}from"./iframe-CycZabT0.js";import{c as b}from"./index-8n2lLd6p.js";import{B as c}from"./Button-CEcBRwig.js";const B=j.createContext({isOpen:!1,open:()=>{},close:()=>{}}),r=({children:o,className:a="",delay:u=200,isOpen:n,onOpenChange:s})=>{const[p,m]=w.useState(!1),d=n!==void 0,C=d?n:p,t=w.useRef(null),T=()=>{t.current&&(window.clearTimeout(t.current),t.current=null),t.current=window.setTimeout(()=>{d||m(!0),s?.(!0)},u)},N=()=>{t.current&&(window.clearTimeout(t.current),t.current=null),d||m(!1),s?.(!1)};return w.useEffect(()=>()=>{t.current&&window.clearTimeout(t.current)},[]),e.jsx(B.Provider,{value:{isOpen:C,open:T,close:N},children:e.jsx("div",{className:b("wim-tooltip",a),children:o})})},i=({children:o,className:a="",asChild:u})=>{const{open:n,close:s}=j.useContext(B),p=t=>{n()},m=t=>{s()},d=t=>{n()},C=t=>{s()};return u&&j.isValidElement(o)?j.cloneElement(o,{onMouseEnter:t=>{o.props.onMouseEnter?.(t),p()},onMouseLeave:t=>{o.props.onMouseLeave?.(t),m()},onFocus:t=>{o.props.onFocus?.(t),d()},onBlur:t=>{o.props.onBlur?.(t),C()},className:b(a,o.props.className)}):e.jsx("button",{className:b("wim-tooltip-trigger",a),onMouseEnter:p,onMouseLeave:m,onFocus:d,onBlur:C,type:"button",children:o})},l=({children:o,className:a="",align:u="center",side:n="top",...s})=>{const{isOpen:p}=j.useContext(B);return p?e.jsxs("div",{className:b("wim-tooltip-content",`wim-tooltip-content--align-${u}`,`wim-tooltip-content--${n}`,a),role:"tooltip",...s,children:[o,e.jsx("div",{className:"wim-tooltip-arrow"})]}):null};r.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},delay:{required:!1,tsType:{name:"number"},description:"Delay before showing the tooltip in ms.",defaultValue:{value:"200",computed:!1}},isOpen:{required:!1,tsType:{name:"boolean"},description:"If provided, controls the open state."},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Callback when open state changes."}}};i.__docgenInfo={description:"",methods:[],displayName:"TooltipTrigger",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},asChild:{required:!1,tsType:{name:"boolean"},description:""}}};l.__docgenInfo={description:"",methods:[],displayName:"TooltipContent",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},align:{required:!1,tsType:{name:"union",raw:'"left" | "right" | "center"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'},{name:"literal",value:'"center"'}]},description:"",defaultValue:{value:'"center"',computed:!1}},side:{required:!1,tsType:{name:"union",raw:'"top" | "bottom" | "left" | "right"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"top"',computed:!1}}}};const R={title:"Component/Overlays/Tooltip",component:r,parameters:{layout:"centered"},argTypes:{delay:{control:"number"},isOpen:{control:"boolean"}}},g={render:o=>e.jsxs(r,{...o,children:[e.jsx(i,{asChild:!0,children:e.jsx(c,{label:"Hover me"})}),e.jsx(l,{children:"This is a tooltip"})]})},h={render:o=>e.jsx("div",{style:{padding:"50px"},children:e.jsxs(r,{...o,children:[e.jsx(i,{asChild:!0,children:e.jsx(c,{label:"Top"})}),e.jsx(l,{side:"top",children:"Tooltip on top"})]})})},f={render:o=>e.jsx("div",{style:{padding:"50px"},children:e.jsxs(r,{...o,children:[e.jsx(i,{asChild:!0,children:e.jsx(c,{label:"Bottom"})}),e.jsx(l,{side:"bottom",children:"Tooltip on bottom"})]})})},x={render:o=>e.jsx("div",{style:{padding:"50px"},children:e.jsxs(r,{...o,children:[e.jsx(i,{asChild:!0,children:e.jsx(c,{label:"Left"})}),e.jsx(l,{side:"left",children:"Tooltip on left"})]})})},v={render:o=>e.jsx("div",{style:{padding:"50px"},children:e.jsxs(r,{...o,children:[e.jsx(i,{asChild:!0,children:e.jsx(c,{label:"Right"})}),e.jsx(l,{side:"right",children:"Tooltip on right"})]})})},y={args:{delay:1e3},render:o=>e.jsxs(r,{...o,children:[e.jsx(i,{asChild:!0,children:e.jsx(c,{label:"Hover for 1s"})}),e.jsx(l,{children:"Delayed tooltip"})]})};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <Tooltip {...args}>\r
            <TooltipTrigger asChild>\r
                <Button label="Hover me" />\r
            </TooltipTrigger>\r
            <TooltipContent>\r
                This is a tooltip\r
            </TooltipContent>\r
        </Tooltip>
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    padding: "50px"
  }}>\r
            <Tooltip {...args}>\r
                <TooltipTrigger asChild>\r
                    <Button label="Top" />\r
                </TooltipTrigger>\r
                <TooltipContent side="top">\r
                    Tooltip on top\r
                </TooltipContent>\r
            </Tooltip>\r
        </div>
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    padding: "50px"
  }}>\r
            <Tooltip {...args}>\r
                <TooltipTrigger asChild>\r
                    <Button label="Bottom" />\r
                </TooltipTrigger>\r
                <TooltipContent side="bottom">\r
                    Tooltip on bottom\r
                </TooltipContent>\r
            </Tooltip>\r
        </div>
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    padding: "50px"
  }}>\r
            <Tooltip {...args}>\r
                <TooltipTrigger asChild>\r
                    <Button label="Left" />\r
                </TooltipTrigger>\r
                <TooltipContent side="left">\r
                    Tooltip on left\r
                </TooltipContent>\r
            </Tooltip>\r
        </div>
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    padding: "50px"
  }}>\r
            <Tooltip {...args}>\r
                <TooltipTrigger asChild>\r
                    <Button label="Right" />\r
                </TooltipTrigger>\r
                <TooltipContent side="right">\r
                    Tooltip on right\r
                </TooltipContent>\r
            </Tooltip>\r
        </div>
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};const q=["Default","Top","Bottom","Left","Right","WithDelay"],L=Object.freeze(Object.defineProperty({__proto__:null,Bottom:f,Default:g,Left:x,Right:v,Top:h,WithDelay:y,__namedExportsOrder:q,default:R},Symbol.toStringTag,{value:"Module"}));export{f as B,g as D,x as L,v as R,L as T,y as W,h as a};
