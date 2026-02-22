import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as u}from"./iframe-C53Tyytv.js";import{c as S}from"./index-pqrI1YvK.js";import{P as N}from"./Portal-D1PmH47u.js";import{B as b}from"./Button-C0XQG329.js";const y=({steps:p,open:l,onClose:d,onFinish:g})=>{const[s,x]=u.useState(0),[t,h]=u.useState(null),n=p[s];if(u.useEffect(()=>{if(l&&n){const i=()=>{const o=document.querySelector(n.target);o?(h(o.getBoundingClientRect()),o.scrollIntoView({behavior:"smooth",block:"center"})):h(null)};i();const c=setTimeout(i,100);return()=>clearTimeout(c)}else h(null)},[l,s,n]),u.useEffect(()=>{const i=()=>{if(l&&n){const c=document.querySelector(n.target);c&&h(c.getBoundingClientRect())}};return window.addEventListener("resize",i),window.addEventListener("scroll",i),()=>{window.removeEventListener("resize",i),window.removeEventListener("scroll",i)}},[l,n]),!l||!n)return null;const k=()=>{s<p.length-1?x(s+1):(g?g():d(),x(0))},j=()=>{s>0&&x(s-1)},r={};if(t){const o=window.innerWidth,v=Math.min(300,o-32);let a=n.placement||"bottom";if(o<640&&(a==="left"||a==="right")&&(a="bottom"),a==="top"||a==="bottom"){let f=t.left+t.width/2;const w=v/2+16,T=o-v/2-16;w>T?f=o/2:f=Math.max(w,Math.min(T,f)),r.left=f,a==="top"?(r.top=t.top-12,r.transform="translate(-50%, -100%)"):(r.top=t.bottom+12,r.transform="translateX(-50%)")}else a==="left"?(r.left=t.left-12,r.top=t.top+t.height/2,r.transform="translate(-100%, -50%)"):a==="right"&&(r.left=t.right+12,r.top=t.top+t.height/2,r.transform="translateY(-50%)")}return e.jsxs(N,{children:[e.jsx("div",{className:"wim-tour-mask",onClick:d,role:"button",tabIndex:0,onKeyDown:i=>{(i.key==="Enter"||i.key===" ")&&d()}}),t&&e.jsx("div",{className:"wim-tour-highlight",style:{top:t.top-4,left:t.left-4,width:t.width+8,height:t.height+8}}),e.jsx("div",{className:S("wim-tour-bubble",`wim-tour-bubble--${n.placement||"bottom"}`),style:r,children:e.jsxs("div",{className:"wim-tour-bubble-inner",children:[e.jsx("h3",{className:"wim-tour-title",children:n.title}),e.jsx("p",{className:"wim-tour-description",children:n.description}),e.jsxs("div",{className:"wim-tour-footer",children:[e.jsxs("span",{className:"wim-tour-progress",children:[s+1," / ",p.length]}),e.jsxs("div",{className:"wim-tour-buttons",children:[s>0&&e.jsx(b,{size:"small",priority:"secondary",label:"Back",onClick:j}),e.jsx(b,{size:"small",priority:"primary",label:s===p.length-1?"Finish":"Next",onClick:k})]})]})]})})]})};y.__docgenInfo={description:"",methods:[],displayName:"Tour",props:{steps:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
    target: string; // CSS selector\r
    title: string;\r
    description: string;\r
    placement?: "top" | "bottom" | "left" | "right";\r
}`,signature:{properties:[{key:"target",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!0}},{key:"placement",value:{name:"union",raw:'"top" | "bottom" | "left" | "right"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}],required:!1}}]}}],raw:"TourStep[]"},description:""},open:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onFinish:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const C={title:"Component/Overlays/Tour",component:y},m={render:p=>{const[l,d]=u.useState(!1),g=[{target:"#tour-step-1",title:"Welcome!",description:"This is the first step of the tour.",placement:"bottom"},{target:"#tour-step-2",title:"Key Feature",description:"Here is a key feature you should know about.",placement:"right"},{target:"#tour-step-3",title:"Need help?",description:"Click here to get help anytime.",placement:"top"}];return e.jsxs("div",{style:{padding:"40px",height:"1000px"},children:[e.jsx(b,{label:"Start Tour",onClick:()=>d(!0)}),e.jsxs("div",{style:{marginTop:"100px",display:"flex",gap:"20px",flexWrap:"wrap"},children:[e.jsx("div",{id:"tour-step-1",style:{padding:"20px",background:"#eee",border:"1px solid #ccc",minWidth:"120px"},children:"Step 1 Target"}),e.jsx("div",{id:"tour-step-2",style:{padding:"20px",background:"#eee",border:"1px solid #ccc",minWidth:"120px"},children:"Step 2 Target"})]}),e.jsx("div",{id:"tour-step-3",style:{marginTop:"400px",padding:"20px",background:"#eee",border:"1px solid #ccc",width:"150px"},children:"Step 3 Target"}),e.jsx(y,{...p,open:l,steps:g,onClose:()=>d(!1)})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const steps = [{
      target: "#tour-step-1",
      title: "Welcome!",
      description: "This is the first step of the tour.",
      placement: "bottom" as const
    }, {
      target: "#tour-step-2",
      title: "Key Feature",
      description: "Here is a key feature you should know about.",
      placement: "right" as const
    }, {
      target: "#tour-step-3",
      title: "Need help?",
      description: "Click here to get help anytime.",
      placement: "top" as const
    }];
    return <div style={{
      padding: "40px",
      height: "1000px"
    }}>\r
                <Button label="Start Tour" onClick={() => setOpen(true)} />\r
\r
                <div style={{
        marginTop: "100px",
        display: "flex",
        gap: "20px",
        flexWrap: "wrap"
      }}>\r
                    <div id="tour-step-1" style={{
          padding: "20px",
          background: "#eee",
          border: "1px solid #ccc",
          minWidth: "120px"
        }}>\r
                        Step 1 Target\r
                    </div>\r
                    <div id="tour-step-2" style={{
          padding: "20px",
          background: "#eee",
          border: "1px solid #ccc",
          minWidth: "120px"
        }}>\r
                        Step 2 Target\r
                    </div>\r
                </div>\r
\r
                <div id="tour-step-3" style={{
        marginTop: "400px",
        padding: "20px",
        background: "#eee",
        border: "1px solid #ccc",
        width: "150px"
      }}>\r
                    Step 3 Target\r
                </div>\r
\r
                <Tour {...args} open={open} steps={steps} onClose={() => setOpen(false)} />\r
            </div>;
  }
}`,...m.parameters?.docs?.source}}};const W=["Default"],R=Object.freeze(Object.defineProperty({__proto__:null,Default:m,__namedExportsOrder:W,default:C},Symbol.toStringTag,{value:"Module"}));export{m as D,R as T};
