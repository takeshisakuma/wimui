import{j as t}from"./jsx-runtime-u17CrQMm.js";import{R as u}from"./iframe-DC3HBgeO.js";import{c as g}from"./index-Cpe1KNws.js";import{A as c}from"./i18nConstants-BpHxieg5.js";import{u as p}from"./useTranslation-rn74mnfg.js";const r=u.forwardRef(({ratio:i=1,children:e,className:a,style:m,...d},l)=>t.jsx("div",{ref:l,className:g("wim-aspect-ratio",a),style:{"--wim-aspect-ratio":i,...m},...d,children:t.jsx("div",{className:"wim-aspect-ratio__inner",children:e})}));r.displayName="AspectRatio";r.__docgenInfo={description:"`AspectRatio` は、指定したアスペクト比を維持しながらコンテンツを表示するためのコンテナです。",methods:[],displayName:"AspectRatio",props:{ratio:{required:!1,tsType:{name:"number"},description:"アスペクト比 (例: 16 / 9, 1, 4 / 3)",defaultValue:{value:"1",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"子要素"}}};const f={title:"Components/Layout/AspectRatio",component:r,tags:[],parameters:{layout:"padded"},argTypes:{ratio:{control:{type:"number"}}}},s={render:function(e){const{t:a}=p(c);return t.jsx(r,{...e,children:t.jsx("img",{src:"https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80",alt:a("story_aspectratio_alt","Landscape")})})},args:{ratio:16/9,style:{width:"100%",maxWidth:"400px",margin:"0 auto"}}},n={render:function(e){const{t:a}=p(c);return t.jsx(r,{...e,children:t.jsx("img",{src:"https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80",alt:a("story_aspectratio_alt","Landscape")})})},args:{ratio:1,style:{width:"100%",maxWidth:"200px",margin:"0 auto"}}},o={render:function(e){const{t:a}=p(c);return t.jsx(r,{...e,children:t.jsx("iframe",{title:a("story_aspectratio_map_title","Map"),src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.8280303808788!2d139.7502393!3d35.685175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c0d02d803c1%3A0x6a1e64115e581404!2z55qH5bGF!5e0!3m2!1sja!2sjp!4v1707641212345!5m2!1sja!2sjp",style:{border:0},allowFullScreen:!0})})},args:{ratio:16/9,style:{width:"100%",maxWidth:"500px",margin:"0 auto"}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,...o.parameters?.docs?.source}}};const h=["Default","Square","Embed"],w=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Embed:o,Square:n,__namedExportsOrder:h,default:f},Symbol.toStringTag,{value:"Module"}));export{w as A,s as D,o as E,n as S};
