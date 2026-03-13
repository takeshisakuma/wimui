import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as _}from"./index-EwYXZEMZ.js";import{I as r}from"./Icon-Cun9TPjE.js";import{u as p}from"./useTranslation-CHJ-TYb-.js";const d=({className:s,children:n,...t})=>e.jsx("div",{className:_("wim-bento-grid",s),...t,children:n});d.displayName="BentoGrid";const m=({className:s,title:n,description:t,header:a,icon:o,...l})=>e.jsxs("div",{className:_("wim-bento-grid-item",s),...l,children:[a&&e.jsx("div",{className:"wim-bento-grid-item__header",children:a}),e.jsxs("div",{className:"wim-bento-grid-item__content",children:[o&&e.jsx("div",{className:"wim-bento-grid-item__icon",children:o}),e.jsxs("div",{className:"wim-bento-grid-item__text",children:[n&&e.jsx("div",{className:"wim-bento-grid-item__title",children:n}),t&&e.jsx("div",{className:"wim-bento-grid-item__description",children:t})]})]})]});m.displayName="BentoGridItem";d.__docgenInfo={description:"",methods:[],displayName:"BentoGrid",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};m.__docgenInfo={description:"",methods:[],displayName:"BentoGridItem",props:{title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},header:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const u={title:"Components/Layout/BentoGrid",component:d,tags:[]},c=()=>e.jsx("div",{style:{flex:1,width:"100%",height:"100%",minHeight:"6rem",borderRadius:"0.5rem",background:"linear-gradient(to bottom right, #f3f4f6, #e5e7eb)"}}),i={render:function(n){const{t}=p(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),a=[{title:t("story_bento_ai_title","AI Integration"),description:t("story_bento_ai_desc","Seamlessly integrate AI into your workflow."),header:e.jsx(c,{}),className:"wim-bento-grid-item--col-span-2",icon:e.jsx(r,{name:"CircleIcon"})},{title:t("story_bento_collab_title","Real-time Collaboration"),description:t("story_bento_collab_desc","Work together with your team in real-time."),header:e.jsx(c,{}),className:"wim-bento-grid-item--col-span-1",icon:e.jsx(r,{name:"SquareIcon"})},{title:t("story_bento_analytics_title","Advanced Analytics"),description:t("story_bento_analytics_desc","Discover insights with our powerful analytics tools."),header:e.jsx(c,{}),className:"wim-bento-grid-item--col-span-1",icon:e.jsx(r,{name:"ChevronDownIcon"})},{title:t("story_bento_cloud_title","Cloud Infrastructure"),description:t("story_bento_cloud_desc","Scalable and secure cloud hosting for your apps."),header:e.jsx(c,{}),className:"wim-bento-grid-item--col-span-2",icon:e.jsx(r,{name:"ExternalLinkIcon"})}];return e.jsx(d,{...n,children:a.map((o,l)=>e.jsx(m,{title:o.title,description:o.description,header:o.header,className:o.className,icon:o.icon},l))})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    const items = [{
      title: t("story_bento_ai_title", "AI Integration"),
      description: t("story_bento_ai_desc", "Seamlessly integrate AI into your workflow."),
      header: <Skeleton />,
      className: "wim-bento-grid-item--col-span-2",
      icon: <Icon name="CircleIcon" />
    }, {
      title: t("story_bento_collab_title", "Real-time Collaboration"),
      description: t("story_bento_collab_desc", "Work together with your team in real-time."),
      header: <Skeleton />,
      className: "wim-bento-grid-item--col-span-1",
      icon: <Icon name="SquareIcon" />
    }, {
      title: t("story_bento_analytics_title", "Advanced Analytics"),
      description: t("story_bento_analytics_desc", "Discover insights with our powerful analytics tools."),
      header: <Skeleton />,
      className: "wim-bento-grid-item--col-span-1",
      icon: <Icon name="ChevronDownIcon" />
    }, {
      title: t("story_bento_cloud_title", "Cloud Infrastructure"),
      description: t("story_bento_cloud_desc", "Scalable and secure cloud hosting for your apps."),
      header: <Skeleton />,
      className: "wim-bento-grid-item--col-span-2",
      icon: <Icon name="ExternalLinkIcon" />
    }];
    return <BentoGrid {...args}>\r
        {items.map((item, i) => <BentoGridItem key={i} title={item.title} description={item.description} header={item.header} className={item.className} icon={item.icon} />)}\r
      </BentoGrid>;
  }
}`,...i.parameters?.docs?.source}}};const y=["Default"],w=Object.freeze(Object.defineProperty({__proto__:null,Default:i,__namedExportsOrder:y,default:u},Symbol.toStringTag,{value:"Module"}));export{w as B,i as D};
