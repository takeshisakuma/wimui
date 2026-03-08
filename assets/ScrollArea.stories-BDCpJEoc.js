import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as u}from"./index-CFIryxeI.js";import{u as c}from"./useTranslation-DccyvZwG.js";const i=({text:a,children:t,scrollAxis:r="y",maxHeight:d="10rem",style:m,className:h,...p})=>{const{t:x}=c(),y={maxHeight:d,overflowX:r==="x"||r==="both"?"auto":"hidden",overflowY:r==="y"||r==="both"?"auto":"hidden",...m};return e.jsx("div",{className:u("wim-scroll-area",h),style:y,...p,children:t||(a?x(a):null)})};i.__docgenInfo={description:"",methods:[],displayName:"ScrollArea",props:{text:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},scrollAxis:{required:!1,tsType:{name:"union",raw:'"x" | "y" | "both"',elements:[{name:"literal",value:'"x"'},{name:"literal",value:'"y"'},{name:"literal",value:'"both"'}]},description:"",defaultValue:{value:'"y"',computed:!1}},maxHeight:{required:!1,tsType:{name:"string"},description:""}}};const g={title:"Components/Utilities/ScrollArea",component:i,parameters:{layout:"centered"},argTypes:{scrollAxis:{control:"select",options:["x","y","both"]},maxHeight:{control:"text"}}},n={args:{text:"sampletextforscrollarea",scrollAxis:"y",maxHeight:"10rem"}},o={render:function(t){const{t:r}=c(["docs","common","components"]);return e.jsx(i,{...t,scrollAxis:"x",style:{width:"100%",maxWidth:"80vw"},children:e.jsxs("div",{style:{width:"150rem",background:"#3b82f6",padding:"1rem",color:"white"},children:[r("story_scrollarea_wide_content")," ",r("story_selectbox_opt4")," ",r("story_scrollarea_wide_content")," ",r("story_selectbox_opt4")," ",r("story_scrollarea_wide_content")," ",r("story_selectbox_opt4")]})})}},s={args:{scrollAxis:"y",maxHeight:"12rem",children:e.jsxs("div",{style:{padding:"1rem"},children:[e.jsx("h4",{style:{margin:"0 0 1rem 0"},children:"Custom Content Area"}),e.jsx("p",{children:"You can wrap any React elements inside ScrollArea."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Item 1"}),e.jsx("li",{children:"Item 2"}),e.jsx("li",{children:"Item 3"}),e.jsx("li",{children:"Item 4"}),e.jsx("li",{children:"Item 5"})]}),e.jsx("p",{children:"Scrolling works perfectly for complex layouts."})]})}},l={args:{scrollAxis:"both",maxHeight:"20rem",style:{width:"100%",maxWidth:"80vw"},children:e.jsxs("div",{style:{width:"40rem",height:"40rem",background:"linear-gradient(135deg, #FF9A9E 0%, #FECFEF 99%, #FECFEF 100%)",padding:"1rem"},children:[e.jsx("h4",{style:{color:"#333"},children:"Both Axes Scrolling"}),e.jsxs("p",{style:{color:"#555"},children:["This container has content that overflows both vertically and horizontally. ScrollArea handles both directions when"," ",e.jsx("code",{children:'scrollAxis="both"'})," is set."]}),e.jsx("div",{style:{marginTop:"2rem",display:"grid",gridTemplateColumns:"repeat(5, 1fr)",gap:"1rem"},children:[...Array(20)].map((a,t)=>e.jsxs("div",{style:{background:"rgba(255,255,255,0.5)",padding:"1rem",borderRadius:"4px"},children:["Box ",t+1]},t))})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    text: "sampletextforscrollarea",
    scrollAxis: "y",
    maxHeight: "10rem"
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <ScrollArea {...args} scrollAxis="x" style={{
      width: "100%",
      maxWidth: "80vw"
    }}>\r
        <div style={{
        width: "150rem",
        background: "#3b82f6",
        padding: "1rem",
        color: "white"
      }}>\r
          {t("story_scrollarea_wide_content")} {t("story_selectbox_opt4")} {t("story_scrollarea_wide_content")}{" "}\r
          {t("story_selectbox_opt4")} {t("story_scrollarea_wide_content")} {t("story_selectbox_opt4")}\r
        </div>\r
      </ScrollArea>;
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    scrollAxis: "y",
    maxHeight: "12rem",
    children: <div style={{
      padding: "1rem"
    }}>\r
        <h4 style={{
        margin: "0 0 1rem 0"
      }}>Custom Content Area</h4>\r
        <p>You can wrap any React elements inside ScrollArea.</p>\r
        <ul>\r
          <li>Item 1</li>\r
          <li>Item 2</li>\r
          <li>Item 3</li>\r
          <li>Item 4</li>\r
          <li>Item 5</li>\r
        </ul>\r
        <p>Scrolling works perfectly for complex layouts.</p>\r
      </div>
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    scrollAxis: "both",
    maxHeight: "20rem",
    style: {
      width: "100%",
      maxWidth: "80vw"
    },
    children: <div style={{
      width: "40rem",
      height: "40rem",
      background: "linear-gradient(135deg, #FF9A9E 0%, #FECFEF 99%, #FECFEF 100%)",
      padding: "1rem"
    }}>\r
        <h4 style={{
        color: "#333"
      }}>Both Axes Scrolling</h4>\r
        <p style={{
        color: "#555"
      }}>\r
          This container has content that overflows both vertically and\r
          horizontally. ScrollArea handles both directions when{" "}\r
          <code>scrollAxis=&quot;both&quot;</code> is set.\r
        </p>\r
        <div style={{
        marginTop: "2rem",
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: "1rem"
      }}>\r
          {[...Array(20)].map((_, i) => <div key={i} style={{
          background: "rgba(255,255,255,0.5)",
          padding: "1rem",
          borderRadius: "4px"
        }}>\r
              Box {i + 1}\r
            </div>)}\r
        </div>\r
      </div>
  }
}`,...l.parameters?.docs?.source}}};const _=["Default","HorizontalScroll","WithChildren","Both"],v=Object.freeze(Object.defineProperty({__proto__:null,Both:l,Default:n,HorizontalScroll:o,WithChildren:s,__namedExportsOrder:_,default:g},Symbol.toStringTag,{value:"Module"}));export{l as B,n as D,o as H,v as S,s as W};
