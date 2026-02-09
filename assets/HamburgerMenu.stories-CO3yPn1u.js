import{j as i}from"./jsx-runtime-u17CrQMm.js";import{R as C,r as g}from"./iframe-D3fuJ8Ev.js";import{P as r}from"./index-UmQnWAZl.js";import"./preload-helper-PPVm8Dsz.js";const a=C.forwardRef(({isOpen:e=!1,onClick:c,size:s="medium",color:n,className:d,style:p,...f},h)=>{const b=`wim-hamburger-menu--${{small:"sm",medium:"md",large:"lg"}[s]}`,y=e?"wim-hamburger-menu--open":"";return i.jsx("button",{ref:h,type:"button",className:["wim-hamburger-menu",b,y,d].filter(Boolean).join(" "),onClick:c,"aria-expanded":e,"aria-label":e?"Close menu":"Open menu",style:{...p,...n?{"--wim-hamburger-color":n}:{}},...f,children:i.jsx("div",{className:"wim-hamburger-menu__box",children:i.jsx("div",{className:"wim-hamburger-menu__inner"})})})});a.displayName="HamburgerMenu";a.propTypes={isOpen:r.bool,onClick:r.func,size:r.oneOf(["small","medium","large"]),color:r.string,className:r.string};a.__docgenInfo={description:"",methods:[],displayName:"HamburgerMenu",props:{isOpen:{required:!1,tsType:{name:"boolean"},description:"Check if the menu is open",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},onClick:{required:!1,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:"Callback function when the menu is toggled",type:{name:"func"}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"Size of the hamburger menu",defaultValue:{value:'"medium"',computed:!1},type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1}]}},color:{required:!1,tsType:{name:"string"},description:"Color of the bars",type:{name:"string"}},className:{required:!1,tsType:{name:"string"},description:"Custom class name",type:{name:"string"}}}};const w={title:"Navigation/HamburgerMenu",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{isOpen:{control:"boolean",description:"State of the menu (open/closed)"},size:{control:{type:"select"},options:["small","medium","large"],description:"Size of the hamburger menu"},color:{control:"color",description:"Color of the bars"},onClick:{action:"clicked"}}},u=e=>{const[c,s]=g.useState(e.isOpen||!1);g.useEffect(()=>{s(e.isOpen||!1)},[e.isOpen]);const n=d=>{s(p=>!p),e.onClick?.(d)};return i.jsx(a,{...e,isOpen:c,onClick:n})},t={args:{isOpen:!1,size:"medium"},render:u},o={args:{size:"small"},render:u},l={args:{size:"large"},render:u},m={args:{color:"#ff5722"},render:u};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: false,
    size: "medium"
  },
  render: renderWithState
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small"
  },
  render: renderWithState
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: "large"
  },
  render: renderWithState
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    color: "#ff5722"
  },
  render: renderWithState
}`,...m.parameters?.docs?.source}}};const M=["Default","Small","Large","Colored"];export{m as Colored,t as Default,l as Large,o as Small,M as __namedExportsOrder,w as default};
