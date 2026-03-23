import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as m,A as T}from"./iframe-R6z5wUgf.js";import{c as S}from"./index-CliG8xe-.js";import{P as N}from"./Portal-BUtbCyT5.js";import{B as x}from"./Button-D9Dml_tD.js";import{u as E}from"./useTranslation-ByGRA6ap.js";const y=({steps:c,open:p,onClose:r,onFinish:f})=>{const[n,d]=m.useState(0),[e,_]=m.useState(null),o=c[n];if(m.useEffect(()=>{if(p&&o){const i=()=>{const a=document.querySelector(o.target);a?(_(a.getBoundingClientRect()),a.scrollIntoView({behavior:"smooth",block:"center"})):_(null)};i();const u=setTimeout(i,100);return()=>clearTimeout(u)}else _(null)},[p,n,o]),m.useEffect(()=>{const i=()=>{if(p&&o){const u=document.querySelector(o.target);u&&_(u.getBoundingClientRect())}};return window.addEventListener("resize",i),window.addEventListener("scroll",i),()=>{window.removeEventListener("resize",i),window.removeEventListener("scroll",i)}},[p,o]),!p||!o)return null;const j=()=>{n<c.length-1?d(n+1):(f?f():r(),d(0))},k=()=>{n>0&&d(n-1)},s={};if(e){const a=window.innerWidth,b=Math.min(300,a-32);let l=o.placement||"bottom";if(a<640&&(l==="left"||l==="right")&&(l="bottom"),l==="top"||l==="bottom"){let h=e.left+e.width/2;const v=b/2+16,w=a-b/2-16;v>w?h=a/2:h=Math.max(v,Math.min(w,h)),s.left=h,l==="top"?(s.top=e.top-12,s.transform="translate(-50%, -100%)"):(s.top=e.bottom+12,s.transform="translateX(-50%)")}else l==="left"?(s.left=e.left-12,s.top=e.top+e.height/2,s.transform="translate(-100%, -50%)"):l==="right"&&(s.left=e.right+12,s.top=e.top+e.height/2,s.transform="translateY(-50%)")}return t.jsxs(N,{children:[t.jsx("div",{className:"wim-tour-mask",onClick:r,role:"button",tabIndex:0,onKeyDown:i=>{(i.key==="Enter"||i.key===" ")&&r()}}),e&&t.jsx("div",{className:"wim-tour-highlight",style:{top:e.top-4,left:e.left-4,width:e.width+8,height:e.height+8}}),t.jsx("div",{className:S("wim-tour-bubble",`wim-tour-bubble--${o.placement||"bottom"}`),style:s,children:t.jsxs("div",{className:"wim-tour-bubble-inner",children:[t.jsx("h3",{className:"wim-tour-title",children:o.title}),t.jsx("p",{className:"wim-tour-description",children:o.description}),t.jsxs("div",{className:"wim-tour-footer",children:[t.jsxs("span",{className:"wim-tour-progress",children:[n+1," / ",c.length]}),t.jsxs("div",{className:"wim-tour-buttons",children:[n>0&&t.jsx(x,{size:"small",priority:"secondary",label:"Back",onClick:k}),t.jsx(x,{size:"small",priority:"primary",label:n===c.length-1?"Finish":"Next",onClick:j})]})]})]})})]})};y.__docgenInfo={description:"",methods:[],displayName:"Tour",props:{steps:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  target: string; // CSS selector
  title: string;
  description: string;
  placement?: "top" | "bottom" | "left" | "right";
}`,signature:{properties:[{key:"target",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!0}},{key:"placement",value:{name:"union",raw:'"top" | "bottom" | "left" | "right"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}],required:!1}}]}}],raw:"TourStep[]"},description:""},open:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onFinish:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const C={title:"Components/Overlays/Tour",component:y},g={render:function(p){const{t:r}=E(T),[f,n]=m.useState(!1),d=[{target:"#tour-step-1",title:r("story_tour_welcome_title"),description:r("story_tour_welcome_desc"),placement:"bottom"},{target:"#tour-step-2",title:r("story_tour_feature_title"),description:r("story_tour_feature_desc"),placement:"right"},{target:"#tour-step-3",title:r("story_tour_help_title"),description:r("story_tour_help_desc"),placement:"top"}];return t.jsxs("div",{style:{padding:"40px",height:"1000px"},children:[t.jsx(x,{label:r("story_tour_start"),onClick:()=>n(!0)}),t.jsxs("div",{style:{marginTop:"100px",display:"flex",gap:"20px",flexWrap:"wrap"},children:[t.jsx("div",{id:"tour-step-1",style:{padding:"20px",background:"#eee",border:"1px solid #ccc",minWidth:"120px"},children:r("story_tour_step_target",{n:1})}),t.jsx("div",{id:"tour-step-2",style:{padding:"20px",background:"#eee",border:"1px solid #ccc",minWidth:"120px"},children:r("story_tour_step_target",{n:2})})]}),t.jsx("div",{id:"tour-step-3",style:{marginTop:"400px",padding:"20px",background:"#eee",border:"1px solid #ccc",width:"150px"},children:r("story_tour_step_target",{n:3})}),t.jsx(y,{...p,open:f,steps:d,onClose:()=>n(!1)})]})}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
    }}>
        <Button label={t("story_tour_start")} onClick={() => setOpen(true)} />

        <div style={{
        marginTop: "100px",
        display: "flex",
        gap: "20px",
        flexWrap: "wrap"
      }}>
          <div id="tour-step-1" style={{
          padding: "20px",
          background: "#eee",
          border: "1px solid #ccc",
          minWidth: "120px"
        }}>
            {t("story_tour_step_target", {
            n: 1
          })}
          </div>
          <div id="tour-step-2" style={{
          padding: "20px",
          background: "#eee",
          border: "1px solid #ccc",
          minWidth: "120px"
        }}>
            {t("story_tour_step_target", {
            n: 2
          })}
          </div>
        </div>

        <div id="tour-step-3" style={{
        marginTop: "400px",
        padding: "20px",
        background: "#eee",
        border: "1px solid #ccc",
        width: "150px"
      }}>
          {t("story_tour_step_target", {
          n: 3
        })}
        </div>

        <Tour {...args} open={open} steps={steps} onClose={() => setOpen(false)} />
      </div>;
  }
}`,...g.parameters?.docs?.source}}};const q=["Default"],z=Object.freeze(Object.defineProperty({__proto__:null,Default:g,__namedExportsOrder:q,default:C},Symbol.toStringTag,{value:"Module"}));export{g as D,z as T};
