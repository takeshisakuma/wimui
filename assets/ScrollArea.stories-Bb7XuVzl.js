import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as x}from"./index-DhHn5T7W.js";import{A as d}from"./iframe-By123agS.js";import{u as m}from"./useTranslation-svuQDxOH.js";const l=({text:i,children:t,scrollAxis:r="y",maxHeight:p="10rem",style:c,className:y,...u})=>{const h={maxHeight:p,overflowX:r==="x"||r==="both"?"auto":"hidden",overflowY:r==="y"||r==="both"?"auto":"hidden",...c};return e.jsx("div",{className:x("wim-scroll-area",y),style:h,tabIndex:0,...u,children:t||i})};l.__docgenInfo={description:"",methods:[],displayName:"ScrollArea",props:{text:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},scrollAxis:{required:!1,tsType:{name:"union",raw:'"x" | "y" | "both"',elements:[{name:"literal",value:'"x"'},{name:"literal",value:'"y"'},{name:"literal",value:'"both"'}]},description:"",defaultValue:{value:'"y"',computed:!1}},maxHeight:{required:!1,tsType:{name:"string"},description:""}}};const _={title:"Components/Utilities/ScrollArea",component:l,parameters:{layout:"centered"},argTypes:{scrollAxis:{control:"select",options:["x","y","both"]},maxHeight:{control:"text"}}},n={args:{text:"sampletextforscrollarea",scrollAxis:"y",maxHeight:"10rem"}},o={render:function(t){const{t:r}=m(d);return e.jsx(l,{...t,scrollAxis:"x",style:{width:"100%",maxWidth:"80vw"},children:e.jsxs("div",{style:{width:"150rem",background:"var(--wim-color-primary)",padding:"1rem",color:"var(--wim-color-text-on-primary)"},children:[r("story.scrollarea_wide_content")," ",r("story.selectbox_opt4")," ",r("story.scrollarea_wide_content")," ",r("story.selectbox_opt4")," ",r("story.scrollarea_wide_content")," ",r("story.selectbox_opt4")]})})}},s={args:{scrollAxis:"y",maxHeight:"12rem"},render:function(t){const{t:r}=m(d);return e.jsx(l,{...t,children:e.jsxs("div",{style:{padding:"1rem"},children:[e.jsx("h4",{style:{margin:"0 0 1rem 0"},children:r("story.scrollarea_custom_title")}),e.jsx("p",{children:r("story.scrollarea_custom_desc")}),e.jsxs("ul",{children:[e.jsx("li",{children:r("story.scrollarea_item",{count:1})}),e.jsx("li",{children:r("story.scrollarea_item",{count:2})}),e.jsx("li",{children:r("story.scrollarea_item",{count:3})}),e.jsx("li",{children:r("story.scrollarea_item",{count:4})}),e.jsx("li",{children:r("story.scrollarea_item",{count:5})})]}),e.jsx("p",{children:r("story.scrollarea_scrolling_works")})]})})}},a={args:{scrollAxis:"both",maxHeight:"20rem",style:{width:"100%",maxWidth:"80vw"}},render:function(t){const{t:r}=m(d);return e.jsx(l,{...t,children:e.jsxs("div",{style:{width:"40rem",height:"40rem",background:"linear-gradient(135deg, #FF9A9E 0%, #FECFEF 99%, #FECFEF 100%)",padding:"1rem"},children:[e.jsx("h4",{style:{color:"#333"},children:r("story.scrollarea_both_title")}),e.jsx("p",{style:{color:"#555"},children:r("story.scrollarea_both_desc")}),e.jsx("div",{style:{marginTop:"2rem",display:"grid",gridTemplateColumns:"repeat(5, 1fr)",gap:"1rem"},children:[...Array(20)].map((p,c)=>e.jsx("div",{style:{background:"rgba(255,255,255,0.5)",padding:"1rem",borderRadius:"4px"},children:r("story.scrollarea_box",{count:c+1})},c))})]})})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    text: "sampletextforscrollarea",
    scrollAxis: "y",
    maxHeight: "10rem"
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <ScrollArea {...args} scrollAxis="x" style={{
      width: "100%",
      maxWidth: "80vw"
    }}>
        <div style={{
        width: "150rem",
        background: "var(--wim-color-primary)",
        padding: "1rem",
        color: "var(--wim-color-text-on-primary)"
      }}>
          {t("story.scrollarea_wide_content")} {t("story.selectbox_opt4")} {t("story.scrollarea_wide_content")}{" "}
          {t("story.selectbox_opt4")} {t("story.scrollarea_wide_content")} {t("story.selectbox_opt4")}
        </div>
      </ScrollArea>;
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    scrollAxis: "y",
    maxHeight: "12rem"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <ScrollArea {...args}>
        <div style={{
        padding: "1rem"
      }}>
          <h4 style={{
          margin: "0 0 1rem 0"
        }}>{t("story.scrollarea_custom_title")}</h4>
          <p>{t("story.scrollarea_custom_desc")}</p>
          <ul>
            <li>{t("story.scrollarea_item", {
              count: 1
            })}</li>
            <li>{t("story.scrollarea_item", {
              count: 2
            })}</li>
            <li>{t("story.scrollarea_item", {
              count: 3
            })}</li>
            <li>{t("story.scrollarea_item", {
              count: 4
            })}</li>
            <li>{t("story.scrollarea_item", {
              count: 5
            })}</li>
          </ul>
          <p>{t("story.scrollarea_scrolling_works")}</p>
        </div>
      </ScrollArea>;
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    scrollAxis: "both",
    maxHeight: "20rem",
    style: {
      width: "100%",
      maxWidth: "80vw"
    }
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <ScrollArea {...args}>
        <div style={{
        width: "40rem",
        height: "40rem",
        background: "linear-gradient(135deg, #FF9A9E 0%, #FECFEF 99%, #FECFEF 100%)",
        padding: "1rem"
      }}>
          <h4 style={{
          color: "#333"
        }}>{t("story.scrollarea_both_title")}</h4>
          <p style={{
          color: "#555"
        }}>
            {t("story.scrollarea_both_desc")}
          </p>
          <div style={{
          marginTop: "2rem",
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "1rem"
        }}>
            {[...Array(20)].map((_, i) => <div key={i} style={{
            background: "rgba(255,255,255,0.5)",
            padding: "1rem",
            borderRadius: "4px"
          }}>
                {t("story.scrollarea_box", {
              count: i + 1
            })}
              </div>)}
          </div>
        </div>
      </ScrollArea>;
  }
}`,...a.parameters?.docs?.source}}};const g=["Default","HorizontalScroll","WithChildren","Both"],S=Object.freeze(Object.defineProperty({__proto__:null,Both:a,Default:n,HorizontalScroll:o,WithChildren:s,__namedExportsOrder:g,default:_},Symbol.toStringTag,{value:"Module"}));export{a as B,n as D,o as H,S,s as W};
