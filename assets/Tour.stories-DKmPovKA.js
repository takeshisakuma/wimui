import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as m,A as T}from"./iframe-DKmwcFSw.js";import{c as S}from"./index-DF_nXgT0.js";import{P as N}from"./Portal-Cm7CPGnZ.js";import{B as x}from"./Button-BKQogAGJ.js";import{u as E}from"./useTranslation-cHJIwR7k.js";const y=({steps:c,open:d,onClose:r,onFinish:f})=>{const[n,p]=m.useState(0),[e,h]=m.useState(null),s=c[n];if(m.useEffect(()=>{if(d&&s){const i=()=>{const a=document.querySelector(s.target);a?(h(a.getBoundingClientRect()),a.scrollIntoView({behavior:"smooth",block:"center"})):h(null)};i();const u=setTimeout(i,100);return()=>clearTimeout(u)}else h(null)},[d,n,s]),m.useEffect(()=>{const i=()=>{if(d&&s){const u=document.querySelector(s.target);u&&h(u.getBoundingClientRect())}};return window.addEventListener("resize",i),window.addEventListener("scroll",i),()=>{window.removeEventListener("resize",i),window.removeEventListener("scroll",i)}},[d,s]),!d||!s)return null;const j=()=>{n<c.length-1?p(n+1):(f?f():r(),p(0))},k=()=>{n>0&&p(n-1)},o={};if(e){const a=window.innerWidth,b=Math.min(300,a-32);let l=s.placement||"bottom";if(a<640&&(l==="left"||l==="right")&&(l="bottom"),l==="top"||l==="bottom"){let v=e.left+e.width/2;const w=b/2+16,_=a-b/2-16;w>_?v=a/2:v=Math.max(w,Math.min(_,v)),o.left=v,l==="top"?(o.top=e.top-12,o.transform="translate(-50%, -100%)"):(o.top=e.bottom+12,o.transform="translateX(-50%)")}else l==="left"?(o.left=e.left-12,o.top=e.top+e.height/2,o.transform="translate(-100%, -50%)"):l==="right"&&(o.left=e.right+12,o.top=e.top+e.height/2,o.transform="translateY(-50%)")}return t.jsxs(N,{children:[t.jsx("div",{className:"wim-tour-mask",onClick:r,role:"button",tabIndex:0,onKeyDown:i=>{(i.key==="Enter"||i.key===" ")&&r()}}),e&&t.jsx("div",{className:"wim-tour-highlight",style:{top:e.top-4,left:e.left-4,width:e.width+8,height:e.height+8}}),t.jsx("div",{className:S("wim-tour-bubble",`wim-tour-bubble--${s.placement||"bottom"}`),style:o,children:t.jsxs("div",{className:"wim-tour-bubble-inner",children:[t.jsx("h3",{className:"wim-tour-title",children:s.title}),t.jsx("p",{className:"wim-tour-description",children:s.description}),t.jsxs("div",{className:"wim-tour-footer",children:[t.jsxs("span",{className:"wim-tour-progress",children:[n+1," / ",c.length]}),t.jsxs("div",{className:"wim-tour-buttons",children:[n>0&&t.jsx(x,{size:"sm",variant:"outlined",onClick:k,children:"Back"}),t.jsx(x,{size:"sm",variant:"filled",onClick:j,children:n===c.length-1?"Finish":"Next"})]})]})]})})]})};y.__docgenInfo={description:"",methods:[],displayName:"Tour",props:{steps:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  target: string; // CSS selector
  title: string;
  description: string;
  placement?: "top" | "bottom" | "left" | "right";
}`,signature:{properties:[{key:"target",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!0}},{key:"placement",value:{name:"union",raw:'"top" | "bottom" | "left" | "right"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}],required:!1}}]}}],raw:"TourStep[]"},description:""},open:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onFinish:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const C={title:"Components/Overlays/Tour",component:y},g={render:function(d){const{t:r}=E(T),[f,n]=m.useState(!1),p=[{target:"#tour-step-1",title:r("story.tour_welcome_title"),description:r("story.tour_welcome_desc"),placement:"bottom"},{target:"#tour-step-2",title:r("story.tour_feature_title"),description:r("story.tour_feature_desc"),placement:"right"},{target:"#tour-step-3",title:r("story.tour_help_title"),description:r("story.tour_help_desc"),placement:"top"}];return t.jsxs("div",{style:{padding:"40px",height:"1000px"},children:[t.jsx(x,{onClick:()=>n(!0),children:r("story.tour_start")}),t.jsxs("div",{style:{marginTop:"100px",display:"flex",gap:"20px",flexWrap:"wrap"},children:[t.jsx("div",{id:"tour-step-1",style:{padding:"20px",background:"var(--wim-color-surface-variant)",border:"1px solid var(--wim-color-border)",minWidth:"120px"},children:r("story.tour_step_target",{n:1})}),t.jsx("div",{id:"tour-step-2",style:{padding:"20px",background:"var(--wim-color-surface-variant)",border:"1px solid var(--wim-color-border)",minWidth:"120px"},children:r("story.tour_step_target",{n:2})})]}),t.jsx("div",{id:"tour-step-3",style:{marginTop:"400px",padding:"20px",background:"var(--wim-color-surface-variant)",border:"1px solid var(--wim-color-border)",width:"150px"},children:r("story.tour_step_target",{n:3})}),t.jsx(y,{...d,open:f,steps:p,onClose:()=>n(!1)})]})}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [open, setOpen] = useState(false);
    const steps = [{
      target: "#tour-step-1",
      title: t("story.tour_welcome_title"),
      description: t("story.tour_welcome_desc"),
      placement: "bottom" as const
    }, {
      target: "#tour-step-2",
      title: t("story.tour_feature_title"),
      description: t("story.tour_feature_desc"),
      placement: "right" as const
    }, {
      target: "#tour-step-3",
      title: t("story.tour_help_title"),
      description: t("story.tour_help_desc"),
      placement: "top" as const
    }];
    return <div style={{
      padding: "40px",
      height: "1000px"
    }}>
        <Button onClick={() => setOpen(true)}>{t("story.tour_start")}</Button>

        <div style={{
        marginTop: "100px",
        display: "flex",
        gap: "20px",
        flexWrap: "wrap"
      }}>
          <div id="tour-step-1" style={{
          padding: "20px",
          background: "var(--wim-color-surface-variant)",
          border: "1px solid var(--wim-color-border)",
          minWidth: "120px"
        }}>
            {t("story.tour_step_target", {
            n: 1
          })}
          </div>
          <div id="tour-step-2" style={{
          padding: "20px",
          background: "var(--wim-color-surface-variant)",
          border: "1px solid var(--wim-color-border)",
          minWidth: "120px"
        }}>
            {t("story.tour_step_target", {
            n: 2
          })}
          </div>
        </div>

        <div id="tour-step-3" style={{
        marginTop: "400px",
        padding: "20px",
        background: "var(--wim-color-surface-variant)",
        border: "1px solid var(--wim-color-border)",
        width: "150px"
      }}>
          {t("story.tour_step_target", {
          n: 3
        })}
        </div>

        <Tour {...args} open={open} steps={steps} onClose={() => setOpen(false)} />
      </div>;
  }
}`,...g.parameters?.docs?.source}}};const q=["Default"],z=Object.freeze(Object.defineProperty({__proto__:null,Default:g,__namedExportsOrder:q,default:C},Symbol.toStringTag,{value:"Module"}));export{g as D,z as T};
