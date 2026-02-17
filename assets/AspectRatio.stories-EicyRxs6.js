import{j as t}from"./jsx-runtime-u17CrQMm.js";import{R as d}from"./iframe-BypDdRGc.js";import{c as l}from"./index-BviBMDxs.js";const r=d.forwardRef(({ratio:o=1,children:c,className:p,style:m,...i},n)=>t.jsx("div",{ref:n,className:l("wim-aspect-ratio",p),style:{"--wim-aspect-ratio":o,...m},...i,children:t.jsx("div",{className:"wim-aspect-ratio__inner",children:c})}));r.displayName="AspectRatio";r.__docgenInfo={description:"`AspectRatio` は、指定したアスペクト比を維持しながらコンテンツを表示するためのコンテナです。",methods:[],displayName:"AspectRatio",props:{ratio:{required:!1,tsType:{name:"number"},description:"アスペクト比 (例: 16 / 9, 1, 4 / 3)",defaultValue:{value:"1",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"子要素"}}};const u={title:"Component/Layout/AspectRatio",component:r,tags:[],parameters:{layout:"centered"},argTypes:{ratio:{control:{type:"number"}}}},e={args:{ratio:16/9,children:t.jsx("img",{src:"https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80",alt:"Landscape"}),style:{width:"400px"}}},a={args:{ratio:1,children:t.jsx("img",{src:"https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80",alt:"Landscape"}),style:{width:"200px"}}},s={args:{ratio:16/9,children:t.jsx("iframe",{title:"Imperial Palace",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.8280303808788!2d139.7502393!3d35.685175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c0d02d803c1%3A0x6a1e64115e581404!2z55qH5bGF!5e0!3m2!1sja!2sjp!4v1707641212345!5m2!1sja!2sjp",style:{border:0},allowFullScreen:!0}),style:{width:"500px"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    ratio: 16 / 9,
    children: <img src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80" alt="Landscape" />,
    style: {
      width: "400px"
    }
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ratio: 1,
    children: <img src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80" alt="Landscape" />,
    style: {
      width: "200px"
    }
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ratio: 16 / 9,
    children: <iframe title="Imperial Palace" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.8280303808788!2d139.7502393!3d35.685175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c0d02d803c1%3A0x6a1e64115e581404!2z55qH5bGF!5e0!3m2!1sja!2sjp!4v1707641212345!5m2!1sja!2sjp" style={{
      border: 0
    }} allowFullScreen />,
    style: {
      width: "500px"
    }
  }
}`,...s.parameters?.docs?.source}}};const h=["Default","Square","Embed"],b=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Embed:s,Square:a,__namedExportsOrder:h,default:u},Symbol.toStringTag,{value:"Module"}));export{b as A,e as D,s as E,a as S};
