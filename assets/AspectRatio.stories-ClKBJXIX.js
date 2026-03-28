import{j as t}from"./jsx-runtime-u17CrQMm.js";import{R as u,A as c}from"./iframe-Ctdkiilp.js";import{c as g}from"./index-DSjzljfy.js";import{u as p}from"./useTranslation-BTb00TCF.js";const s=u.forwardRef(({ratio:i=1,children:e,className:a,style:m,...d},l)=>t.jsx("div",{ref:l,className:g("wim-aspect-ratio",a),style:{"--wim-aspect-ratio":i,...m},...d,children:t.jsx("div",{className:"wim-aspect-ratio__inner",children:e})}));s.displayName="AspectRatio";s.__docgenInfo={description:"`AspectRatio` は、指定したアスペクト比を維持しながらコンテンツを表示するためのコンテナです。",methods:[],displayName:"AspectRatio",props:{ratio:{required:!1,tsType:{name:"number"},description:"アスペクト比 (例: 16 / 9, 1, 4 / 3)",defaultValue:{value:"1",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"子要素"}}};const h={title:"Components/Layout/AspectRatio",component:s,tags:[],parameters:{layout:"padded"},argTypes:{ratio:{control:{type:"number"}}}},r={render:function(e){const{t:a}=p(c);return t.jsx(s,{...e,children:t.jsx("img",{src:"https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80",alt:a("story_aspectratio_alt","Landscape")})})},args:{ratio:16/9,style:{width:"100%",maxWidth:"400px",margin:"0 auto"}}},n={render:function(e){const{t:a}=p(c);return t.jsx(s,{...e,children:t.jsx("img",{src:"https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80",alt:a("story_aspectratio_alt","Landscape")})})},args:{ratio:1,style:{width:"100%",maxWidth:"200px",margin:"0 auto"}}},o={render:function(e){const{t:a}=p(c);return t.jsx(s,{...e,children:t.jsx("iframe",{title:a("story_aspectratio_map_title","Map"),src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.8280303808788!2d139.7502393!3d35.685175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c0d02d803c1%3A0x6a1e64115e581404!2z55qH5bGF!5e0!3m2!1sja!2sjp!4v1707641212345!5m2!1sja!2sjp",style:{border:0},allowFullScreen:!0})})},args:{ratio:16/9,style:{width:"100%",maxWidth:"500px",margin:"0 auto"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <AspectRatio {...args}>
        <img src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80" alt={t("story_aspectratio_alt", "Landscape")} />
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
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <AspectRatio {...args}>
        <img src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80" alt={t("story_aspectratio_alt", "Landscape")} />
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
    return <AspectRatio {...args}>
        <iframe title={t("story_aspectratio_map_title", "Map")} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.8280303808788!2d139.7502393!3d35.685175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c0d02d803c1%3A0x6a1e64115e581404!2z55qH5bGF!5e0!3m2!1sja!2sjp!4v1707641212345!5m2!1sja!2sjp" style={{
        border: 0
      }} allowFullScreen />
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
}`,...o.parameters?.docs?.source}}};const f=["Default","Square","Embed"],y=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Embed:o,Square:n,__namedExportsOrder:f,default:h},Symbol.toStringTag,{value:"Module"}));export{y as A,r as D,o as E,n as S};
