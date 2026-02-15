import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as c}from"./iframe-D3pom0L-.js";import{c as T}from"./index-f500GYMe.js";import{P as j}from"./Portal-K0G8ZizA.js";import{B as f}from"./Button-b3C_UOdH.js";const x=({steps:a,open:o,onClose:l,onFinish:u})=>{const[i,b]=c.useState(0),[t,m]=c.useState(null),n=a[i];if(c.useEffect(()=>{if(o&&n){const s=()=>{const g=document.querySelector(n.target);g?(m(g.getBoundingClientRect()),g.scrollIntoView({behavior:"smooth",block:"center"})):m(null)};s();const p=setTimeout(s,100);return()=>clearTimeout(p)}else m(null)},[o,i,n]),c.useEffect(()=>{const s=()=>{if(o&&n){const p=document.querySelector(n.target);p&&m(p.getBoundingClientRect())}};return window.addEventListener("resize",s),window.addEventListener("scroll",s),()=>{window.removeEventListener("resize",s),window.removeEventListener("scroll",s)}},[o,n]),!o||!n)return null;const y=()=>{i<a.length-1?b(i+1):(u?u():l(),b(0))},v=()=>{i>0&&b(i-1)},r={};if(t){let h=t.left+t.width/2;const w=300/2+16,k=window.innerWidth-300/2-16;switch(h=Math.max(w,Math.min(k,h)),n.placement||"bottom"){case"top":r.top=t.top-12,r.left=h,r.transform="translate(-50%, -100%)";break;case"bottom":r.top=t.bottom+12,r.left=h,r.transform="translateX(-50%)";break;case"left":r.left=t.left-12,r.top=t.top+t.height/2,r.transform="translate(-100%, -50%)";break;case"right":r.left=t.right+12,r.top=t.top+t.height/2,r.transform="translateY(-50%)";break}}return e.jsxs(j,{children:[e.jsx("div",{className:"wim-tour-mask",onClick:l,role:"button",tabIndex:0,onKeyDown:s=>{(s.key==="Enter"||s.key===" ")&&l()}}),t&&e.jsx("div",{className:"wim-tour-highlight",style:{top:t.top-4,left:t.left-4,width:t.width+8,height:t.height+8}}),e.jsx("div",{className:T("wim-tour-bubble",`wim-tour-bubble--${n.placement||"bottom"}`),style:r,children:e.jsxs("div",{className:"wim-tour-bubble-inner",children:[e.jsx("h3",{className:"wim-tour-title",children:n.title}),e.jsx("p",{className:"wim-tour-description",children:n.description}),e.jsxs("div",{className:"wim-tour-footer",children:[e.jsxs("span",{className:"wim-tour-progress",children:[i+1," / ",a.length]}),e.jsxs("div",{className:"wim-tour-buttons",children:[i>0&&e.jsx(f,{size:"small",priority:"secondary",label:"Back",onClick:v}),e.jsx(f,{size:"small",priority:"primary",label:i===a.length-1?"Finish":"Next",onClick:y})]})]})]})})]})};x.__docgenInfo={description:"",methods:[],displayName:"Tour",props:{steps:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
    target: string; // CSS selector\r
    title: string;\r
    description: string;\r
    placement?: "top" | "bottom" | "left" | "right";\r
}`,signature:{properties:[{key:"target",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!0}},{key:"placement",value:{name:"union",raw:'"top" | "bottom" | "left" | "right"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}],required:!1}}]}}],raw:"TourStep[]"},description:""},open:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onFinish:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const S={title:"Component/Data Display/Tour",component:x},d={render:a=>{const[o,l]=c.useState(!1),u=[{target:"#tour-step-1",title:"Welcome!",description:"This is the first step of the tour.",placement:"bottom"},{target:"#tour-step-2",title:"Key Feature",description:"Here is a key feature you should know about.",placement:"right"},{target:"#tour-step-3",title:"Need help?",description:"Click here to get help anytime.",placement:"top"}];return e.jsxs("div",{style:{padding:"40px",height:"1000px"},children:[e.jsx(f,{label:"Start Tour",onClick:()=>l(!0)}),e.jsxs("div",{style:{marginTop:"100px",display:"flex",gap:"200px"},children:[e.jsx("div",{id:"tour-step-1",style:{padding:"20px",background:"#eee",border:"1px solid #ccc"},children:"Step 1 Target"}),e.jsx("div",{id:"tour-step-2",style:{padding:"20px",background:"#eee",border:"1px solid #ccc"},children:"Step 2 Target"})]}),e.jsx("div",{id:"tour-step-3",style:{marginTop:"400px",padding:"20px",background:"#eee",border:"1px solid #ccc",width:"150px"},children:"Step 3 Target"}),e.jsx(x,{...a,open:o,steps:u,onClose:()=>l(!1)})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
        gap: "200px"
      }}>\r
                    <div id="tour-step-1" style={{
          padding: "20px",
          background: "#eee",
          border: "1px solid #ccc"
        }}>\r
                        Step 1 Target\r
                    </div>\r
                    <div id="tour-step-2" style={{
          padding: "20px",
          background: "#eee",
          border: "1px solid #ccc"
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
}`,...d.parameters?.docs?.source}}};const N=["Default"],O=Object.freeze(Object.defineProperty({__proto__:null,Default:d,__namedExportsOrder:N,default:S},Symbol.toStringTag,{value:"Module"}));export{d as D,O as T};
