import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as x}from"./iframe-CqpHVO8i.js";import{P as e}from"./index-8SIbFkC-.js";const g=({content:s,image:p,width:c=120,height:d=64,rotate:y=-22,zIndex:v=9,opacity:h=.15,gap:i=[100,100],offset:f=[50,50],children:w,className:T=""})=>{const[k,b]=x.useState("");return x.useEffect(()=>{const m=document.createElement("canvas"),a=m.getContext("2d");if(!a)return;const n=window.devicePixelRatio||1,I=(i[0]+c)*n,j=(i[1]+d)*n;if(m.width=I,m.height=j,a.translate(f[0]*n,f[1]*n),a.rotate(y*Math.PI/180),a.globalAlpha=h,p){const r=new Image;r.crossOrigin="anonymous",r.src=p,r.onload=()=>{a.drawImage(r,0,0,c*n,d*n),b(m.toDataURL())}}else if(s){const r=16*n;a.font=`${r}px sans-serif`,a.fillStyle="black",a.textBaseline="top",(Array.isArray(s)?s:[s]).forEach((q,O)=>{a.fillText(q,0,O*r*1.5)}),b(m.toDataURL())}},[s,p,c,d,y,h,i,f]),t.jsxs("div",{className:`wim-watermark-wrapper ${T}`,children:[w,t.jsx("div",{className:"wim-watermark",style:{zIndex:v,backgroundImage:`url(${k})`,backgroundSize:`${i[0]+c}px ${i[1]+d}px`}})]})};g.propTypes={content:e.oneOfType([e.string,e.arrayOf(e.string)]),image:e.string,width:e.number,height:e.number,rotate:e.number,zIndex:e.number,opacity:e.number,gap:e.arrayOf(e.number),offset:e.arrayOf(e.number),children:e.node,className:e.string};g.__docgenInfo={description:"",methods:[],displayName:"Watermark",props:{content:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:"",type:{name:"union",value:[{name:"string"},{name:"arrayOf",value:{name:"string"}}]}},image:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}},width:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"120",computed:!1},type:{name:"number"}},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"64",computed:!1},type:{name:"number"}},rotate:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"-22",computed:!1},type:{name:"number"}},zIndex:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"9",computed:!1},type:{name:"number"}},opacity:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0.15",computed:!1},type:{name:"number"}},gap:{required:!1,tsType:{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]},description:"",defaultValue:{value:"[100, 100]",computed:!1},type:{name:"arrayOf",value:{name:"number"}}},offset:{required:!1,tsType:{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]},description:"",defaultValue:{value:"[50, 50]",computed:!1},type:{name:"arrayOf",value:{name:"number"}}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",type:{name:"node"}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1},type:{name:"string"}}}};const S={title:"Component/Data Display/Watermark",component:g,argTypes:{rotate:{control:{type:"range",min:-180,max:180}},opacity:{control:{type:"range",min:0,max:1,step:.1}}}},o={args:{content:"wimui watermark",children:t.jsxs("div",{style:{height:"400px",background:"#fff",padding:"20px"},children:[t.jsx("p",{children:"このコンテンツはウォーターマークで保護されています。 コピーや転載を制限したい場合に有効です。"}),t.jsx("div",{style:{height:"200px",background:"#f0f0f0",display:"flex",alignItems:"center",justifyContent:"center"},children:"機密情報エリア"})]})}},l={args:{content:["wimui","Confidential","Wim UI Team"],gap:[120,120],children:t.jsx("div",{style:{height:"400px"}})}},u={args:{image:"./wimlogo.svg",width:40,height:40,opacity:.1,children:t.jsx("div",{style:{height:"400px"}})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    image: "./wimlogo.svg",
    width: 40,
    height: 40,
    opacity: 0.1,
    children: <div style={{
      height: "400px"
    }} />
  }
}`,...u.parameters?.docs?.source}}};const R=["Text","MultiLine","Image"],C=Object.freeze(Object.defineProperty({__proto__:null,Image:u,MultiLine:l,Text:o,__namedExportsOrder:R,default:S},Symbol.toStringTag,{value:"Module"}));export{u as I,l as M,o as T,C as W};
