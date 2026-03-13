import{j as s}from"./jsx-runtime-u17CrQMm.js";import{R as l}from"./iframe-BFeRKT7x.js";import{c as u}from"./index-CP8jozY9.js";import{u as i}from"./useTranslation-DVQ5refS.js";const a=l.forwardRef(({ratio:c=1,children:o,className:t,style:d,...p},m)=>s.jsx("div",{ref:m,className:u("wim-aspect-ratio",t),style:{"--wim-aspect-ratio":c,...d},...p,children:s.jsx("div",{className:"wim-aspect-ratio__inner",children:o})}));a.displayName="AspectRatio";a.__docgenInfo={description:"`AspectRatio` は、指定したアスペクト比を維持しながらコンテンツを表示するためのコンテナです。",methods:[],displayName:"AspectRatio",props:{ratio:{required:!1,tsType:{name:"number"},description:"アスペクト比 (例: 16 / 9, 1, 4 / 3)",defaultValue:{value:"1",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"子要素"}}};const _={title:"Components/Layout/AspectRatio",component:a,tags:[],parameters:{layout:"padded"},argTypes:{ratio:{control:{type:"number"}}}},e={render:function(o){const{t}=i(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return s.jsx(a,{...o,children:s.jsx("img",{src:"https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80",alt:t("story_aspectratio_alt","Landscape")})})},args:{ratio:16/9,style:{width:"100%",maxWidth:"400px",margin:"0 auto"}}},r={render:function(o){const{t}=i(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return s.jsx(a,{...o,children:s.jsx("img",{src:"https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80",alt:t("story_aspectratio_alt","Landscape")})})},args:{ratio:1,style:{width:"100%",maxWidth:"200px",margin:"0 auto"}}},n={render:function(o){const{t}=i(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return s.jsx(a,{...o,children:s.jsx("iframe",{title:t("story_aspectratio_map_title","Map"),src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.8280303808788!2d139.7502393!3d35.685175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c0d02d803c1%3A0x6a1e64115e581404!2z55qH5bGF!5e0!3m2!1sja!2sjp!4v1707641212345!5m2!1sja!2sjp",style:{border:0},allowFullScreen:!0})})},args:{ratio:16/9,style:{width:"100%",maxWidth:"500px",margin:"0 auto"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <AspectRatio {...args}>\r
        <img src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80" alt={t("story_aspectratio_alt", "Landscape")} />\r
      </AspectRatio>;
  },
  args: {
    ratio: 16 / 9,
    style: {
      width: "100%",
      maxWidth: "400px",
      margin: "0 auto"
    }
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <AspectRatio {...args}>\r
        <img src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80" alt={t("story_aspectratio_alt", "Landscape")} />\r
      </AspectRatio>;
  },
  args: {
    ratio: 1,
    style: {
      width: "100%",
      maxWidth: "200px",
      margin: "0 auto"
    }
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <AspectRatio {...args}>\r
        <iframe title={t("story_aspectratio_map_title", "Map")} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.8280303808788!2d139.7502393!3d35.685175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c0d02d803c1%3A0x6a1e64115e581404!2z55qH5bGF!5e0!3m2!1sja!2sjp!4v1707641212345!5m2!1sja!2sjp" style={{
        border: 0
      }} allowFullScreen />\r
      </AspectRatio>;
  },
  args: {
    ratio: 16 / 9,
    style: {
      width: "100%",
      maxWidth: "500px",
      margin: "0 auto"
    }
  }
}`,...n.parameters?.docs?.source}}};const g=["Default","Square","Embed"],R=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Embed:n,Square:r,__namedExportsOrder:g,default:_},Symbol.toStringTag,{value:"Module"}));export{R as A,e as D,n as E,r as S};
