import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as x}from"./iframe-D-2TzvPc.js";import{c as q}from"./index-YuTxaPzC.js";import{u as v}from"./useTranslation-DD4zKDMJ.js";const p=({content:r,image:n,width:e=120,height:u=64,rotate:f=-22,zIndex:h=9,opacity:_=.15,gap:i=[100,100],offset:g=[50,50],children:k,className:w})=>{const[b,y]=x.useState("");return x.useEffect(()=>{const c=document.createElement("canvas"),t=c.getContext("2d");if(!t)return;const s=window.devicePixelRatio||1,T=(i[0]+e)*s,j=(i[1]+u)*s;if(c.width=T,c.height=j,t.translate(g[0]*s,g[1]*s),t.rotate(f*Math.PI/180),t.globalAlpha=_,n){const o=new Image;o.crossOrigin="anonymous",o.src=n,o.onload=()=>{t.drawImage(o,0,0,e*s,u*s),y(c.toDataURL())}}else if(r){const o=16*s;t.font=`${o}px sans-serif`,t.fillStyle="black",t.textBaseline="top",(Array.isArray(r)?r:[r]).forEach((I,R)=>{t.fillText(I,0,R*o*1.5)}),y(c.toDataURL())}},[r,n,e,u,f,_,i,g]),a.jsxs("div",{className:q("wim-watermark-wrapper",w),children:[k,a.jsx("div",{className:"wim-watermark",style:{zIndex:h,backgroundImage:`url(${b})`,backgroundSize:`${i[0]+e}px ${i[1]+u}px`}})]})};p.__docgenInfo={description:"",methods:[],displayName:"Watermark",props:{content:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},image:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"120",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"64",computed:!1}},rotate:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"-22",computed:!1}},zIndex:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"9",computed:!1}},opacity:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0.15",computed:!1}},gap:{required:!1,tsType:{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]},description:"",defaultValue:{value:"[100, 100]",computed:!1}},offset:{required:!1,tsType:{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]},description:"",defaultValue:{value:"[50, 50]",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const S={title:"Components/Data Indicators/Watermark",component:p,argTypes:{rotate:{control:{type:"range",min:-180,max:180}},opacity:{control:{type:"range",min:0,max:1,step:.1}}}},d={render:function(n){const{t:e}=v(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return a.jsx(p,{...n,content:e("story_watermark_text"),children:a.jsx("div",{style:{height:"400px",background:"#fff",padding:"20px"},children:a.jsx("div",{style:{height:"200px",background:"#f0f0f0",display:"flex",alignItems:"center",justifyContent:"center",marginTop:"24px"},children:e("story_watermark_confidential_mark")})})})}},m={render:function(n){const{t:e}=v(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return a.jsx(p,{...n,content:[e("story_watermark_wimui"),e("story_watermark_confidential_mark"),e("story_watermark_team")],children:a.jsx("div",{style:{height:"400px"}})})},args:{gap:[120,120]}},l={args:{image:"./wimlogo.svg",width:40,height:40,opacity:.1,children:a.jsx("div",{style:{height:"400px"}})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Watermark {...args} content={[t("story_watermark_wimui"), t("story_watermark_confidential_mark"), t("story_watermark_team")]}>\r
        <div style={{
        height: "400px"
      }} />\r
      </Watermark>;
  },
  args: {
    gap: [120, 120]
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    image: "./wimlogo.svg",
    width: 40,
    height: 40,
    opacity: 0.1,
    children: <div style={{
      height: "400px"
    }} />
  }
}`,...l.parameters?.docs?.source}}};const W=["Text","MultiLine","Image"],z=Object.freeze(Object.defineProperty({__proto__:null,Image:l,MultiLine:m,Text:d,__namedExportsOrder:W,default:S},Symbol.toStringTag,{value:"Module"}));export{l as I,m as M,d as T,z as W};
