import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as c}from"./iframe-C4lXaGCv.js";import{P as s}from"./index-CXuirWey.js";import{P as j}from"./Portal-D6RJlSPM.js";import{B as y}from"./Button-CgzFQIVM.js";const b=({steps:l,open:a,onClose:p,onFinish:m})=>{const[i,x]=c.useState(0),[t,g]=c.useState(null),n=l[i];if(c.useEffect(()=>{if(a&&n){const o=()=>{const h=document.querySelector(n.target);h?(g(h.getBoundingClientRect()),h.scrollIntoView({behavior:"smooth",block:"center"})):g(null)};o();const d=setTimeout(o,100);return()=>clearTimeout(d)}else g(null)},[a,i,n]),c.useEffect(()=>{const o=()=>{if(a&&n){const d=document.querySelector(n.target);d&&g(d.getBoundingClientRect())}};return window.addEventListener("resize",o),window.addEventListener("scroll",o),()=>{window.removeEventListener("resize",o),window.removeEventListener("scroll",o)}},[a,n]),!a||!n)return null;const v=()=>{i<l.length-1?x(i+1):(m?m():p(),x(0))},w=()=>{i>0&&x(i-1)},r={};if(t){let f=t.left+t.width/2;const T=300/2+16,k=window.innerWidth-300/2-16;switch(f=Math.max(T,Math.min(k,f)),n.placement||"bottom"){case"top":r.top=t.top-12,r.left=f,r.transform="translate(-50%, -100%)";break;case"bottom":r.top=t.bottom+12,r.left=f,r.transform="translateX(-50%)";break;case"left":r.left=t.left-12,r.top=t.top+t.height/2,r.transform="translate(-100%, -50%)";break;case"right":r.left=t.right+12,r.top=t.top+t.height/2,r.transform="translateY(-50%)";break}}return e.jsxs(j,{children:[e.jsx("div",{className:"wim-tour-mask",onClick:p}),t&&e.jsx("div",{className:"wim-tour-highlight",style:{top:t.top-4,left:t.left-4,width:t.width+8,height:t.height+8}}),e.jsx("div",{className:`wim-tour-bubble wim-tour-bubble--${n.placement||"bottom"}`,style:r,children:e.jsxs("div",{className:"wim-tour-bubble-inner",children:[e.jsx("h3",{className:"wim-tour-title",children:n.title}),e.jsx("p",{className:"wim-tour-description",children:n.description}),e.jsxs("div",{className:"wim-tour-footer",children:[e.jsxs("span",{className:"wim-tour-progress",children:[i+1," / ",l.length]}),e.jsxs("div",{className:"wim-tour-buttons",children:[i>0&&e.jsx(y,{size:"small",priority:"secondary",label:"Back",onClick:w}),e.jsx(y,{size:"small",priority:"primary",label:i===l.length-1?"Finish":"Next",onClick:v})]})]})]})})]})};b.propTypes={steps:s.arrayOf(s.shape({target:s.string.isRequired,title:s.string.isRequired,description:s.string.isRequired,placement:s.oneOf(["top","bottom","left","right"])})).isRequired,open:s.bool.isRequired,onClose:s.func.isRequired,onFinish:s.func};b.__docgenInfo={description:"",methods:[],displayName:"Tour",props:{steps:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
    target: string; // CSS selector\r
    title: string;\r
    description: string;\r
    placement?: "top" | "bottom" | "left" | "right";\r
}`,signature:{properties:[{key:"target",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!0}},{key:"placement",value:{name:"union",raw:'"top" | "bottom" | "left" | "right"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}],required:!1}}]}}],raw:"TourStep[]"},description:"",type:{name:"arrayOf",value:{name:"shape",value:{target:{name:"string",required:!0},title:{name:"string",required:!0},description:{name:"string",required:!0},placement:{name:"enum",value:[{value:'"top"',computed:!1},{value:'"bottom"',computed:!1},{value:'"left"',computed:!1},{value:'"right"',computed:!1}],required:!1}}}}},open:{required:!0,tsType:{name:"boolean"},description:"",type:{name:"bool"}},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",type:{name:"func"}},onFinish:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",type:{name:"func"}}}};const S={title:"Component/Data Display/Tour",component:b},u={render:l=>{const[a,p]=c.useState(!1),m=[{target:"#tour-step-1",title:"Welcome!",description:"This is the first step of the tour.",placement:"bottom"},{target:"#tour-step-2",title:"Key Feature",description:"Here is a key feature you should know about.",placement:"right"},{target:"#tour-step-3",title:"Need help?",description:"Click here to get help anytime.",placement:"top"}];return e.jsxs("div",{style:{padding:"40px",height:"1000px"},children:[e.jsx(y,{label:"Start Tour",onClick:()=>p(!0)}),e.jsxs("div",{style:{marginTop:"100px",display:"flex",gap:"200px"},children:[e.jsx("div",{id:"tour-step-1",style:{padding:"20px",background:"#eee",border:"1px solid #ccc"},children:"Step 1 Target"}),e.jsx("div",{id:"tour-step-2",style:{padding:"20px",background:"#eee",border:"1px solid #ccc"},children:"Step 2 Target"})]}),e.jsx("div",{id:"tour-step-3",style:{marginTop:"400px",padding:"20px",background:"#eee",border:"1px solid #ccc",width:"150px"},children:"Step 3 Target"}),e.jsx(b,{...l,open:a,steps:m,onClose:()=>p(!1)})]})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const q=["Default"],_=Object.freeze(Object.defineProperty({__proto__:null,Default:u,__namedExportsOrder:q,default:S},Symbol.toStringTag,{value:"Module"}));export{u as D,_ as T};
