import{j as i}from"./jsx-runtime-u17CrQMm.js";import{P as e}from"./index-CyF2BHNT.js";import{Q as h,d as b}from"./utils-02Y0UBtw.js";const n=({value:o,size:u=128,level:m="M",bgColor:l="#FFFFFF",fgColor:p="#000000",marginSize:c=0,renderAs:d="svg",imageSettings:g,className:v=""})=>{const f=d==="svg"?h:b;return i.jsx("div",{className:`wim-qrcode ${v}`,children:i.jsx(f,{value:o,size:u,level:m,bgColor:l,fgColor:p,marginSize:c,imageSettings:g})})};n.propTypes={value:e.string.isRequired,size:e.number,level:e.oneOf(["L","M","Q","H"]),bgColor:e.string,fgColor:e.string,marginSize:e.number,renderAs:e.oneOf(["svg","canvas"]),imageSettings:e.shape({src:e.string.isRequired,x:e.number,y:e.number,height:e.number,width:e.number,excavate:e.bool}),className:e.string};n.__docgenInfo={description:"",methods:[],displayName:"QRCode",props:{value:{required:!0,tsType:{name:"string"},description:"",type:{name:"string"}},size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"128",computed:!1},type:{name:"number"}},level:{required:!1,tsType:{name:"union",raw:'"L" | "M" | "Q" | "H"',elements:[{name:"literal",value:'"L"'},{name:"literal",value:'"M"'},{name:"literal",value:'"Q"'},{name:"literal",value:'"H"'}]},description:"",defaultValue:{value:'"M"',computed:!1},type:{name:"enum",value:[{value:'"L"',computed:!1},{value:'"M"',computed:!1},{value:'"Q"',computed:!1},{value:'"H"',computed:!1}]}},bgColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#FFFFFF"',computed:!1},type:{name:"string"}},fgColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#000000"',computed:!1},type:{name:"string"}},marginSize:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1},type:{name:"number"}},renderAs:{required:!1,tsType:{name:"union",raw:'"svg" | "canvas"',elements:[{name:"literal",value:'"svg"'},{name:"literal",value:'"canvas"'}]},description:"",defaultValue:{value:'"svg"',computed:!1},type:{name:"enum",value:[{value:'"svg"',computed:!1},{value:'"canvas"',computed:!1}]}},imageSettings:{required:!1,tsType:{name:'ReactComponentProps["imageSettings"]',raw:'React.ComponentProps<typeof QRCodeSVG>["imageSettings"]'},description:"",type:{name:"shape",value:{src:{name:"string",required:!0},x:{name:"number",required:!1},y:{name:"number",required:!1},height:{name:"number",required:!1},width:{name:"number",required:!1},excavate:{name:"bool",required:!1}}}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1},type:{name:"string"}}}};const y={title:"Component/Data Display/QRCode",component:n,parameters:{layout:"centered"},argTypes:{level:{control:"select",options:["L","M","Q","H"]},renderAs:{control:"select",options:["svg","canvas"]}}},a={args:{value:"https://takeshisakuma.github.io/wimui/"}},s={args:{value:"https://takeshisakuma.github.io/wimui/",size:256}},t={args:{value:"https://takeshisakuma.github.io/wimui/",bgColor:"#f4f4f7",fgColor:"#0052cc"}},r={args:{value:"https://takeshisakuma.github.io/wimui/",imageSettings:{src:"https://avatars.githubusercontent.com/u/1000000?v=4",x:void 0,y:void 0,height:24,width:24,excavate:!0}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    value: "https://takeshisakuma.github.io/wimui/"
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    value: "https://takeshisakuma.github.io/wimui/",
    size: 256
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    value: "https://takeshisakuma.github.io/wimui/",
    bgColor: "#f4f4f7",
    fgColor: "#0052cc"
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    value: "https://takeshisakuma.github.io/wimui/",
    imageSettings: {
      src: "https://avatars.githubusercontent.com/u/1000000?v=4",
      x: undefined,
      y: undefined,
      height: 24,
      width: 24,
      excavate: true
    }
  }
}`,...r.parameters?.docs?.source}}};const C=["Default","Large","CustomColors","WithImage"],w=Object.freeze(Object.defineProperty({__proto__:null,CustomColors:t,Default:a,Large:s,WithImage:r,__namedExportsOrder:C,default:y},Symbol.toStringTag,{value:"Module"}));export{t as C,s as L,w as Q,r as W};
