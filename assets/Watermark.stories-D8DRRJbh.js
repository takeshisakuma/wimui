import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as x}from"./iframe-BMpY0rva.js";import{c as S}from"./index-DfrzlIWo.js";const h=({content:n,image:u,width:m=120,height:d=64,rotate:f=-22,zIndex:v=9,opacity:g=.15,gap:s=[100,100],offset:p=[50,50],children:b,className:w})=>{const[T,y]=x.useState("");return x.useEffect(()=>{const i=document.createElement("canvas"),e=i.getContext("2d");if(!e)return;const a=window.devicePixelRatio||1,k=(s[0]+m)*a,I=(s[1]+d)*a;if(i.width=k,i.height=I,e.translate(p[0]*a,p[1]*a),e.rotate(f*Math.PI/180),e.globalAlpha=g,u){const t=new Image;t.crossOrigin="anonymous",t.src=u,t.onload=()=>{e.drawImage(t,0,0,m*a,d*a),y(i.toDataURL())}}else if(n){const t=16*a;e.font=`${t}px sans-serif`,e.fillStyle="black",e.textBaseline="top",(Array.isArray(n)?n:[n]).forEach((j,q)=>{e.fillText(j,0,q*t*1.5)}),y(i.toDataURL())}},[n,u,m,d,f,g,s,p]),r.jsxs("div",{className:S("wim-watermark-wrapper",w),children:[b,r.jsx("div",{className:"wim-watermark",style:{zIndex:v,backgroundImage:`url(${T})`,backgroundSize:`${s[0]+m}px ${s[1]+d}px`}})]})};h.__docgenInfo={description:"",methods:[],displayName:"Watermark",props:{content:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},image:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"120",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"64",computed:!1}},rotate:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"-22",computed:!1}},zIndex:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"9",computed:!1}},opacity:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0.15",computed:!1}},gap:{required:!1,tsType:{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]},description:"",defaultValue:{value:"[100, 100]",computed:!1}},offset:{required:!1,tsType:{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]},description:"",defaultValue:{value:"[50, 50]",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const R={title:"Component/Data Display/Watermark",component:h,argTypes:{rotate:{control:{type:"range",min:-180,max:180}},opacity:{control:{type:"range",min:0,max:1,step:.1}}}},o={args:{content:"wimui watermark",children:r.jsxs("div",{style:{height:"400px",background:"#fff",padding:"20px"},children:[r.jsx("p",{children:"このコンテンツはウォーターマークで保護されています。 コピーや転載を制限したい場合に有効です。"}),r.jsx("div",{style:{height:"200px",background:"#f0f0f0",display:"flex",alignItems:"center",justifyContent:"center"},children:"機密情報エリア"})]})}},l={args:{content:["wimui","Confidential","Wim UI Team"],gap:[120,120],children:r.jsx("div",{style:{height:"400px"}})}},c={args:{image:"./wimlogo.svg",width:40,height:40,opacity:.1,children:r.jsx("div",{style:{height:"400px"}})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    content: "wimui watermark",
    children: <div style={{
      height: "400px",
      background: "#fff",
      padding: "20px"
    }}>\r
                <p>\r
                    このコンテンツはウォーターマークで保護されています。\r
                    コピーや転載を制限したい場合に有効です。\r
                </p>\r
                <div style={{
        height: "200px",
        background: "#f0f0f0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>\r
                    機密情報エリア\r
                </div>\r
            </div>
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    content: ["wimui", "Confidential", "Wim UI Team"],
    gap: [120, 120],
    children: <div style={{
      height: "400px"
    }} />
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    image: "./wimlogo.svg",
    width: 40,
    height: 40,
    opacity: 0.1,
    children: <div style={{
      height: "400px"
    }} />
  }
}`,...c.parameters?.docs?.source}}};const W=["Text","MultiLine","Image"],E=Object.freeze(Object.defineProperty({__proto__:null,Image:c,MultiLine:l,Text:o,__namedExportsOrder:W,default:R},Symbol.toStringTag,{value:"Module"}));export{c as I,l as M,o as T,E as W};
