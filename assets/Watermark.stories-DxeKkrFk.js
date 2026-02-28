import{j as n}from"./jsx-runtime-u17CrQMm.js";import{r as y}from"./iframe-CWdbcN92.js";import{c as S}from"./index-vtw7FrBa.js";const h=({content:r,image:p,width:l=120,height:d=64,rotate:f=-22,zIndex:v=9,opacity:g=.15,gap:s=[100,100],offset:u=[50,50],children:b,className:w})=>{const[T,x]=y.useState("");return y.useEffect(()=>{const i=document.createElement("canvas"),e=i.getContext("2d");if(!e)return;const a=window.devicePixelRatio||1,k=(s[0]+l)*a,I=(s[1]+d)*a;if(i.width=k,i.height=I,e.translate(u[0]*a,u[1]*a),e.rotate(f*Math.PI/180),e.globalAlpha=g,p){const t=new Image;t.crossOrigin="anonymous",t.src=p,t.onload=()=>{e.drawImage(t,0,0,l*a,d*a),x(i.toDataURL())}}else if(r){const t=16*a;e.font=`${t}px sans-serif`,e.fillStyle="black",e.textBaseline="top",(Array.isArray(r)?r:[r]).forEach((j,q)=>{e.fillText(j,0,q*t*1.5)}),x(i.toDataURL())}},[r,p,l,d,f,g,s,u]),n.jsxs("div",{className:S("wim-watermark-wrapper",w),children:[b,n.jsx("div",{className:"wim-watermark",style:{zIndex:v,backgroundImage:`url(${T})`,backgroundSize:`${s[0]+l}px ${s[1]+d}px`}})]})};h.__docgenInfo={description:"",methods:[],displayName:"Watermark",props:{content:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},image:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"120",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"64",computed:!1}},rotate:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"-22",computed:!1}},zIndex:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"9",computed:!1}},opacity:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0.15",computed:!1}},gap:{required:!1,tsType:{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]},description:"",defaultValue:{value:"[100, 100]",computed:!1}},offset:{required:!1,tsType:{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]},description:"",defaultValue:{value:"[50, 50]",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const R={title:"Components/Data Indicators/Watermark",component:h,argTypes:{rotate:{control:{type:"range",min:-180,max:180}},opacity:{control:{type:"range",min:0,max:1,step:.1}}}},o={args:{content:"wimui watermark",children:n.jsxs("div",{style:{height:"400px",background:"#fff",padding:"20px"},children:[n.jsx("p",{children:"このコンテンツはウォーターマークで保護されています。 コピーや転載を制限したい場合に有効です。"}),n.jsx("div",{style:{height:"200px",background:"#f0f0f0",display:"flex",alignItems:"center",justifyContent:"center",marginTop:"24px"},children:"機密情報エリア"})]})}},m={args:{content:["wimui","Confidential","Wim UI Team"],gap:[120,120],children:n.jsx("div",{style:{height:"400px"}})}},c={args:{image:"./wimlogo.svg",width:40,height:40,opacity:.1,children:n.jsx("div",{style:{height:"400px"}})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
        justifyContent: "center",
        marginTop: "24px"
      }}>\r
          機密情報エリア\r
        </div>\r
      </div>
  }
}`,...o.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    content: ["wimui", "Confidential", "Wim UI Team"],
    gap: [120, 120],
    children: <div style={{
      height: "400px"
    }} />
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    image: "./wimlogo.svg",
    width: 40,
    height: 40,
    opacity: 0.1,
    children: <div style={{
      height: "400px"
    }} />
  }
}`,...c.parameters?.docs?.source}}};const W=["Text","MultiLine","Image"],E=Object.freeze(Object.defineProperty({__proto__:null,Image:c,MultiLine:m,Text:o,__namedExportsOrder:W,default:R},Symbol.toStringTag,{value:"Module"}));export{c as I,m as M,o as T,E as W};
