import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as m}from"./iframe-D4gOfWnt.js";import{c as T}from"./index-Cl0yRb9X.js";import{P as S}from"./Portal-6FWmTHsc.js";import{B as y}from"./Button-D3SwmJug.js";import{u as N}from"./useTranslation-BONq47qB.js";const x=({steps:d,open:c,onClose:r,onFinish:_})=>{const[n,p]=m.useState(0),[e,f]=m.useState(null),s=d[n];if(m.useEffect(()=>{if(c&&s){const i=()=>{const a=document.querySelector(s.target);a?(f(a.getBoundingClientRect()),a.scrollIntoView({behavior:"smooth",block:"center"})):f(null)};i();const u=setTimeout(i,100);return()=>clearTimeout(u)}else f(null)},[c,n,s]),m.useEffect(()=>{const i=()=>{if(c&&s){const u=document.querySelector(s.target);u&&f(u.getBoundingClientRect())}};return window.addEventListener("resize",i),window.addEventListener("scroll",i),()=>{window.removeEventListener("resize",i),window.removeEventListener("scroll",i)}},[c,s]),!c||!s)return null;const j=()=>{n<d.length-1?p(n+1):(_?_():r(),p(0))},k=()=>{n>0&&p(n-1)},o={};if(e){const a=window.innerWidth,b=Math.min(300,a-32);let l=s.placement||"bottom";if(a<640&&(l==="left"||l==="right")&&(l="bottom"),l==="top"||l==="bottom"){let h=e.left+e.width/2;const v=b/2+16,w=a-b/2-16;v>w?h=a/2:h=Math.max(v,Math.min(w,h)),o.left=h,l==="top"?(o.top=e.top-12,o.transform="translate(-50%, -100%)"):(o.top=e.bottom+12,o.transform="translateX(-50%)")}else l==="left"?(o.left=e.left-12,o.top=e.top+e.height/2,o.transform="translate(-100%, -50%)"):l==="right"&&(o.left=e.right+12,o.top=e.top+e.height/2,o.transform="translateY(-50%)")}return t.jsxs(S,{children:[t.jsx("div",{className:"wim-tour-mask",onClick:r,role:"button",tabIndex:0,onKeyDown:i=>{(i.key==="Enter"||i.key===" ")&&r()}}),e&&t.jsx("div",{className:"wim-tour-highlight",style:{top:e.top-4,left:e.left-4,width:e.width+8,height:e.height+8}}),t.jsx("div",{className:T("wim-tour-bubble",`wim-tour-bubble--${s.placement||"bottom"}`),style:o,children:t.jsxs("div",{className:"wim-tour-bubble-inner",children:[t.jsx("h3",{className:"wim-tour-title",children:s.title}),t.jsx("p",{className:"wim-tour-description",children:s.description}),t.jsxs("div",{className:"wim-tour-footer",children:[t.jsxs("span",{className:"wim-tour-progress",children:[n+1," / ",d.length]}),t.jsxs("div",{className:"wim-tour-buttons",children:[n>0&&t.jsx(y,{size:"small",priority:"secondary",label:"Back",onClick:k}),t.jsx(y,{size:"small",priority:"primary",label:n===d.length-1?"Finish":"Next",onClick:j})]})]})]})})]})};x.__docgenInfo={description:"",methods:[],displayName:"Tour",props:{steps:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  target: string; // CSS selector
  title: string;
  description: string;
  placement?: "top" | "bottom" | "left" | "right";
}`,signature:{properties:[{key:"target",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!0}},{key:"placement",value:{name:"union",raw:'"top" | "bottom" | "left" | "right"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}],required:!1}}]}}],raw:"TourStep[]"},description:""},open:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onFinish:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const C={title:"Components/Overlays/Tour",component:x},g={render:function(c){const{t:r}=N(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),[_,n]=m.useState(!1),p=[{target:"#tour-step-1",title:r("story_tour_welcome_title"),description:r("story_tour_welcome_desc"),placement:"bottom"},{target:"#tour-step-2",title:r("story_tour_feature_title"),description:r("story_tour_feature_desc"),placement:"right"},{target:"#tour-step-3",title:r("story_tour_help_title"),description:r("story_tour_help_desc"),placement:"top"}];return t.jsxs("div",{style:{padding:"40px",height:"1000px"},children:[t.jsx(y,{label:r("story_tour_start"),onClick:()=>n(!0)}),t.jsxs("div",{style:{marginTop:"100px",display:"flex",gap:"20px",flexWrap:"wrap"},children:[t.jsx("div",{id:"tour-step-1",style:{padding:"20px",background:"#eee",border:"1px solid #ccc",minWidth:"120px"},children:r("story_tour_step_target",{n:1})}),t.jsx("div",{id:"tour-step-2",style:{padding:"20px",background:"#eee",border:"1px solid #ccc",minWidth:"120px"},children:r("story_tour_step_target",{n:2})})]}),t.jsx("div",{id:"tour-step-3",style:{marginTop:"400px",padding:"20px",background:"#eee",border:"1px solid #ccc",width:"150px"},children:r("story_tour_step_target",{n:3})}),t.jsx(x,{...c,open:_,steps:p,onClose:()=>n(!1)})]})}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    const [open, setOpen] = useState(false);
    const steps = [{
      target: "#tour-step-1",
      title: t("story_tour_welcome_title"),
      description: t("story_tour_welcome_desc"),
      placement: "bottom" as const
    }, {
      target: "#tour-step-2",
      title: t("story_tour_feature_title"),
      description: t("story_tour_feature_desc"),
      placement: "right" as const
    }, {
      target: "#tour-step-3",
      title: t("story_tour_help_title"),
      description: t("story_tour_help_desc"),
      placement: "top" as const
    }];
    return <div style={{
      padding: "40px",
      height: "1000px"
    }}>\r
        <Button label={t("story_tour_start")} onClick={() => setOpen(true)} />\r
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
            {t("story_tour_step_target", {
            n: 1
          })}\r
          </div>\r
          <div id="tour-step-2" style={{
          padding: "20px",
          background: "#eee",
          border: "1px solid #ccc",
          minWidth: "120px"
        }}>\r
            {t("story_tour_step_target", {
            n: 2
          })}\r
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
          {t("story_tour_step_target", {
          n: 3
        })}\r
        </div>\r
\r
        <Tour {...args} open={open} steps={steps} onClose={() => setOpen(false)} />\r
      </div>;
  }
}`,...g.parameters?.docs?.source}}};const q=["Default"],L=Object.freeze(Object.defineProperty({__proto__:null,Default:g,__namedExportsOrder:q,default:C},Symbol.toStringTag,{value:"Module"}));export{g as D,L as T};
