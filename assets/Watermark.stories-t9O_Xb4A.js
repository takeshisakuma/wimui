import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as h}from"./iframe-8vWRHjs9.js";import{c as q}from"./index-BgvlPezX.js";import{u as R}from"./useTranslation-oYtfLuBR.js";const f=({content:r,image:i,width:s=120,height:u=64,rotate:g=-22,zIndex:v=9,opacity:y=.15,gap:o=[100,100],offset:p=[50,50],children:b,className:w})=>{const[T,x]=h.useState("");return h.useEffect(()=>{const m=document.createElement("canvas"),e=m.getContext("2d");if(!e)return;const a=window.devicePixelRatio||1,k=(o[0]+s)*a,I=(o[1]+u)*a;if(m.width=k,m.height=I,e.translate(p[0]*a,p[1]*a),e.rotate(g*Math.PI/180),e.globalAlpha=y,i){const n=new Image;n.crossOrigin="anonymous",n.src=i,n.onload=()=>{e.drawImage(n,0,0,s*a,u*a),x(m.toDataURL())}}else if(r){const n=16*a;e.font=`${n}px sans-serif`,e.fillStyle="black",e.textBaseline="top",(Array.isArray(r)?r:[r]).forEach((j,_)=>{e.fillText(j,0,_*n*1.5)}),x(m.toDataURL())}},[r,i,s,u,g,y,o,p]),t.jsxs("div",{className:q("wim-watermark-wrapper",w),children:[b,t.jsx("div",{className:"wim-watermark",style:{zIndex:v,backgroundImage:`url(${T})`,backgroundSize:`${o[0]+s}px ${o[1]+u}px`}})]})};f.__docgenInfo={description:"",methods:[],displayName:"Watermark",props:{content:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},image:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"120",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"64",computed:!1}},rotate:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"-22",computed:!1}},zIndex:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"9",computed:!1}},opacity:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0.15",computed:!1}},gap:{required:!1,tsType:{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]},description:"",defaultValue:{value:"[100, 100]",computed:!1}},offset:{required:!1,tsType:{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]},description:"",defaultValue:{value:"[50, 50]",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const S={title:"Components/Data Indicators/Watermark",component:f,argTypes:{rotate:{control:{type:"range",min:-180,max:180}},opacity:{control:{type:"range",min:0,max:1,step:.1}}}},c={render:function(i){const{t:s}=R(["docs","common","components"]);return t.jsx(f,{...i,content:"wimui watermark",children:t.jsx("div",{style:{height:"400px",background:"#fff",padding:"20px"},children:t.jsx("div",{style:{height:"200px",background:"#f0f0f0",display:"flex",alignItems:"center",justifyContent:"center",marginTop:"24px"},children:s("story_watermark_confidential")})})})}},l={args:{content:["wimui","Confidential","Wim UI Team"],gap:[120,120],children:t.jsx("div",{style:{height:"400px"}})}},d={args:{image:"./wimlogo.svg",width:40,height:40,opacity:.1,children:t.jsx("div",{style:{height:"400px"}})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Watermark {...args} content="wimui watermark">\r
        <div style={{
        height: "400px",
        background: "#fff",
        padding: "20px"
      }}>\r
          <div style={{
          height: "200px",
          background: "#f0f0f0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "24px"
        }}>\r
            {t("story_watermark_confidential")}\r
          </div>\r
        </div>\r
      </Watermark>;
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    content: ["wimui", "Confidential", "Wim UI Team"],
    gap: [120, 120],
    children: <div style={{
      height: "400px"
    }} />
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    image: "./wimlogo.svg",
    width: 40,
    height: 40,
    opacity: 0.1,
    children: <div style={{
      height: "400px"
    }} />
  }
}`,...d.parameters?.docs?.source}}};const W=["Text","MultiLine","Image"],$=Object.freeze(Object.defineProperty({__proto__:null,Image:d,MultiLine:l,Text:c,__namedExportsOrder:W,default:S},Symbol.toStringTag,{value:"Module"}));export{d as I,l as M,c as T,$ as W};
