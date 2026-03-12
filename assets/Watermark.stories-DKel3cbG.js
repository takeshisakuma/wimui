import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as h}from"./iframe-BisTGuVC.js";import{c as q}from"./index-Ckw0h7AD.js";import{u as _}from"./useTranslation-BH3LN071.js";const p=({content:a,image:n,width:e=120,height:u=64,rotate:g=-22,zIndex:k=9,opacity:y=.15,gap:i=[100,100],offset:f=[50,50],children:w,className:v})=>{const[b,x]=h.useState("");return h.useEffect(()=>{const m=document.createElement("canvas"),r=m.getContext("2d");if(!r)return;const s=window.devicePixelRatio||1,T=(i[0]+e)*s,j=(i[1]+u)*s;if(m.width=T,m.height=j,r.translate(f[0]*s,f[1]*s),r.rotate(g*Math.PI/180),r.globalAlpha=y,n){const o=new Image;o.crossOrigin="anonymous",o.src=n,o.onload=()=>{r.drawImage(o,0,0,e*s,u*s),x(m.toDataURL())}}else if(a){const o=16*s;r.font=`${o}px sans-serif`,r.fillStyle="black",r.textBaseline="top",(Array.isArray(a)?a:[a]).forEach((I,R)=>{r.fillText(I,0,R*o*1.5)}),x(m.toDataURL())}},[a,n,e,u,g,y,i,f]),t.jsxs("div",{className:q("wim-watermark-wrapper",v),children:[w,t.jsx("div",{className:"wim-watermark",style:{zIndex:k,backgroundImage:`url(${b})`,backgroundSize:`${i[0]+e}px ${i[1]+u}px`}})]})};p.__docgenInfo={description:"",methods:[],displayName:"Watermark",props:{content:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},image:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"120",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"64",computed:!1}},rotate:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"-22",computed:!1}},zIndex:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"9",computed:!1}},opacity:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0.15",computed:!1}},gap:{required:!1,tsType:{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]},description:"",defaultValue:{value:"[100, 100]",computed:!1}},offset:{required:!1,tsType:{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]},description:"",defaultValue:{value:"[50, 50]",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const S={title:"Components/Data Indicators/Watermark",component:p,argTypes:{rotate:{control:{type:"range",min:-180,max:180}},opacity:{control:{type:"range",min:0,max:1,step:.1}}}},c={render:function(n){const{t:e}=_(["docs","common","components"]);return t.jsx(p,{...n,content:e("story_watermark_text"),children:t.jsx("div",{style:{height:"400px",background:"#fff",padding:"20px"},children:t.jsx("div",{style:{height:"200px",background:"#f0f0f0",display:"flex",alignItems:"center",justifyContent:"center",marginTop:"24px"},children:e("story_watermark_confidential_mark")})})})}},d={render:function(n){const{t:e}=_(["docs","common","components"]);return t.jsx(p,{...n,content:[e("story_watermark_wimui"),e("story_watermark_confidential_mark"),e("story_watermark_team")],children:t.jsx("div",{style:{height:"400px"}})})},args:{gap:[120,120]}},l={args:{image:"./wimlogo.svg",width:40,height:40,opacity:.1,children:t.jsx("div",{style:{height:"400px"}})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Watermark {...args} content={t("story_watermark_text")}>\r
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
            {t("story_watermark_confidential_mark")}\r
          </div>\r
        </div>\r
      </Watermark>;
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Watermark {...args} content={[t("story_watermark_wimui"), t("story_watermark_confidential_mark"), t("story_watermark_team")]}>\r
        <div style={{
        height: "400px"
      }} />\r
      </Watermark>;
  },
  args: {
    gap: [120, 120]
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    image: "./wimlogo.svg",
    width: 40,
    height: 40,
    opacity: 0.1,
    children: <div style={{
      height: "400px"
    }} />
  }
}`,...l.parameters?.docs?.source}}};const W=["Text","MultiLine","Image"],z=Object.freeze(Object.defineProperty({__proto__:null,Image:l,MultiLine:d,Text:c,__namedExportsOrder:W,default:S},Symbol.toStringTag,{value:"Module"}));export{l as I,d as M,c as T,z as W};
