"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Button-DrO46Brn.js";import{a as u,c as d,d as f,f as p,i as m,l as h,n as g,o as _,r as v,s as y,t as b,u as x}from"./gallery_desert-BaEyN3Hy.js";import{n as S,t as C}from"./gallery_city-C_bxJSDP.js";var w=t({Default:()=>O,FourColumns:()=>j,LandscapeAspect:()=>A,Selectable:()=>k,WithCaptions:()=>M,__namedExportsOrder:()=>N,default:()=>D}),T,E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{T=n(),i(),a(),p(),c(),x(),d(),_(),S(),g(),m(),E=s(),D={title:`Components/Media/Gallery`,component:f,parameters:{layout:`padded`},argTypes:{columns:{control:`number`},gap:{control:`radio`,options:[`xs`,`sm`,`md`,`lg`,`xl`]},aspect:{control:`radio`,options:[`square`,`landscape`,`portrait`,`auto`]},selectable:{control:`boolean`}}},O={render:function(e){let{t}=r(o),n=[{id:`1`,src:h,alt:t(`story.gallery_alt_mountain`),title:t(`story.gallery_title_mountain`)},{id:`2`,src:y,alt:t(`story.gallery_alt_ocean`),title:t(`story.gallery_title_ocean`)},{id:`3`,src:u,alt:t(`story.gallery_alt_forest`),title:t(`story.gallery_title_forest`)},{id:`4`,src:C,alt:t(`story.gallery_alt_city`),title:t(`story.gallery_title_city`)},{id:`5`,src:b,alt:t(`story.gallery_alt_desert`),title:t(`story.gallery_title_desert`)},{id:`6`,src:v,alt:t(`story.gallery_alt_snow`),title:t(`story.gallery_title_snow`)}];return(0,E.jsx)(f,{...e,items:n})},args:{columns:3,gap:`md`,aspect:`square`}},k={render:function(e){let{t}=r(o),[n,i]=(0,T.useState)([]),a=[{id:`1`,src:h,alt:t(`story.gallery_alt_mountain`),title:t(`story.gallery_title_mountain`)},{id:`2`,src:y,alt:t(`story.gallery_alt_ocean`),title:t(`story.gallery_title_ocean`)},{id:`3`,src:u,alt:t(`story.gallery_alt_forest`),title:t(`story.gallery_title_forest`)},{id:`4`,src:C,alt:t(`story.gallery_alt_city`),title:t(`story.gallery_title_city`)},{id:`5`,src:b,alt:t(`story.gallery_alt_desert`),title:t(`story.gallery_title_desert`)},{id:`6`,src:v,alt:t(`story.gallery_alt_snow`),title:t(`story.gallery_title_snow`)}];return(0,E.jsx)(f,{...e,items:a,selected:n,onSelectionChange:i,renderActions:({selectedIds:e,clearSelection:n})=>(0,E.jsxs)(l,{size:`sm`,variant:`outline`,intent:`danger`,onClick:n,children:[t(`story.gallery_delete_btn`),` (`,e.length,`)`]})})},args:{columns:3,gap:`md`,aspect:`square`,selectable:!0}},A={render:function(e){let{t}=r(o),n=[{id:`1`,src:h,alt:t(`story.gallery_alt_mountain`),title:t(`story.gallery_title_mountain`)},{id:`2`,src:y,alt:t(`story.gallery_alt_ocean`),title:t(`story.gallery_title_ocean`)},{id:`3`,src:u,alt:t(`story.gallery_alt_forest`),title:t(`story.gallery_title_forest`)},{id:`4`,src:C,alt:t(`story.gallery_alt_city`),title:t(`story.gallery_title_city`)},{id:`5`,src:b,alt:t(`story.gallery_alt_desert`),title:t(`story.gallery_title_desert`)},{id:`6`,src:v,alt:t(`story.gallery_alt_snow`),title:t(`story.gallery_title_snow`)}];return(0,E.jsx)(f,{...e,items:n})},args:{columns:2,gap:`sm`,aspect:`landscape`}},j={render:function(e){let{t}=r(o),n=[{id:`1`,src:h,alt:t(`story.gallery_alt_mountain`),title:t(`story.gallery_title_mountain`)},{id:`2`,src:y,alt:t(`story.gallery_alt_ocean`),title:t(`story.gallery_title_ocean`)},{id:`3`,src:u,alt:t(`story.gallery_alt_forest`),title:t(`story.gallery_title_forest`)},{id:`4`,src:C,alt:t(`story.gallery_alt_city`),title:t(`story.gallery_title_city`)},{id:`5`,src:b,alt:t(`story.gallery_alt_desert`),title:t(`story.gallery_title_desert`)},{id:`6`,src:v,alt:t(`story.gallery_alt_snow`),title:t(`story.gallery_title_snow`)},{id:`7`,src:h,alt:t(`story.gallery_alt_mountain`),title:t(`story.gallery_title_mountain`)},{id:`8`,src:y,alt:t(`story.gallery_alt_ocean`),title:t(`story.gallery_title_ocean`)}];return(0,E.jsx)(f,{...e,items:n})},args:{columns:4,gap:`xs`,aspect:`square`}},M={render:function(e){let{t}=r(o),n=[{id:`1`,src:h,alt:t(`story.gallery_alt_mountain`),title:t(`story.gallery_title_mountain`),caption:t(`story.gallery_caption_year`)},{id:`2`,src:y,alt:t(`story.gallery_alt_ocean`),title:t(`story.gallery_title_ocean`),caption:t(`story.gallery_caption_year`)},{id:`3`,src:u,alt:t(`story.gallery_alt_forest`),title:t(`story.gallery_title_forest`),caption:t(`story.gallery_caption_year`)},{id:`4`,src:C,alt:t(`story.gallery_alt_city`),title:t(`story.gallery_title_city`),caption:t(`story.gallery_caption_year`)},{id:`5`,src:b,alt:t(`story.gallery_alt_desert`),title:t(`story.gallery_title_desert`),caption:t(`story.gallery_caption_year`)},{id:`6`,src:v,alt:t(`story.gallery_alt_snow`),title:t(`story.gallery_title_snow`),caption:t(`story.gallery_caption_year`)}];return(0,E.jsx)(f,{...e,items:n})},args:{columns:3,gap:`md`,aspect:`landscape`}},N=[`Default`,`Selectable`,`LandscapeAspect`,`FourColumns`,`WithCaptions`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const items: GalleryItem[] = [{
      id: "1",
      src: galleryMountain,
      alt: t("story.gallery_alt_mountain"),
      title: t("story.gallery_title_mountain")
    }, {
      id: "2",
      src: galleryOcean,
      alt: t("story.gallery_alt_ocean"),
      title: t("story.gallery_title_ocean")
    }, {
      id: "3",
      src: galleryForest,
      alt: t("story.gallery_alt_forest"),
      title: t("story.gallery_title_forest")
    }, {
      id: "4",
      src: galleryCity,
      alt: t("story.gallery_alt_city"),
      title: t("story.gallery_title_city")
    }, {
      id: "5",
      src: galleryDesert,
      alt: t("story.gallery_alt_desert"),
      title: t("story.gallery_title_desert")
    }, {
      id: "6",
      src: gallerySnow,
      alt: t("story.gallery_alt_snow"),
      title: t("story.gallery_title_snow")
    }];
    return <Gallery {...args} items={items} />;
  },
  args: {
    columns: 3,
    gap: "md",
    aspect: "square"
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [selected, setSelected] = useState<string[]>([]);
    const items: GalleryItem[] = [{
      id: "1",
      src: galleryMountain,
      alt: t("story.gallery_alt_mountain"),
      title: t("story.gallery_title_mountain")
    }, {
      id: "2",
      src: galleryOcean,
      alt: t("story.gallery_alt_ocean"),
      title: t("story.gallery_title_ocean")
    }, {
      id: "3",
      src: galleryForest,
      alt: t("story.gallery_alt_forest"),
      title: t("story.gallery_title_forest")
    }, {
      id: "4",
      src: galleryCity,
      alt: t("story.gallery_alt_city"),
      title: t("story.gallery_title_city")
    }, {
      id: "5",
      src: galleryDesert,
      alt: t("story.gallery_alt_desert"),
      title: t("story.gallery_title_desert")
    }, {
      id: "6",
      src: gallerySnow,
      alt: t("story.gallery_alt_snow"),
      title: t("story.gallery_title_snow")
    }];
    return <Gallery {...args} items={items} selected={selected} onSelectionChange={setSelected} renderActions={({
      selectedIds,
      clearSelection
    }) => <Button size="sm" variant="outline" intent="danger" onClick={clearSelection}>
            {t("story.gallery_delete_btn")} ({selectedIds.length})
          </Button>} />;
  },
  args: {
    columns: 3,
    gap: "md",
    aspect: "square",
    selectable: true
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const items: GalleryItem[] = [{
      id: "1",
      src: galleryMountain,
      alt: t("story.gallery_alt_mountain"),
      title: t("story.gallery_title_mountain")
    }, {
      id: "2",
      src: galleryOcean,
      alt: t("story.gallery_alt_ocean"),
      title: t("story.gallery_title_ocean")
    }, {
      id: "3",
      src: galleryForest,
      alt: t("story.gallery_alt_forest"),
      title: t("story.gallery_title_forest")
    }, {
      id: "4",
      src: galleryCity,
      alt: t("story.gallery_alt_city"),
      title: t("story.gallery_title_city")
    }, {
      id: "5",
      src: galleryDesert,
      alt: t("story.gallery_alt_desert"),
      title: t("story.gallery_title_desert")
    }, {
      id: "6",
      src: gallerySnow,
      alt: t("story.gallery_alt_snow"),
      title: t("story.gallery_title_snow")
    }];
    return <Gallery {...args} items={items} />;
  },
  args: {
    columns: 2,
    gap: "sm",
    aspect: "landscape"
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const items: GalleryItem[] = [{
      id: "1",
      src: galleryMountain,
      alt: t("story.gallery_alt_mountain"),
      title: t("story.gallery_title_mountain")
    }, {
      id: "2",
      src: galleryOcean,
      alt: t("story.gallery_alt_ocean"),
      title: t("story.gallery_title_ocean")
    }, {
      id: "3",
      src: galleryForest,
      alt: t("story.gallery_alt_forest"),
      title: t("story.gallery_title_forest")
    }, {
      id: "4",
      src: galleryCity,
      alt: t("story.gallery_alt_city"),
      title: t("story.gallery_title_city")
    }, {
      id: "5",
      src: galleryDesert,
      alt: t("story.gallery_alt_desert"),
      title: t("story.gallery_title_desert")
    }, {
      id: "6",
      src: gallerySnow,
      alt: t("story.gallery_alt_snow"),
      title: t("story.gallery_title_snow")
    }, {
      id: "7",
      src: galleryMountain,
      alt: t("story.gallery_alt_mountain"),
      title: t("story.gallery_title_mountain")
    }, {
      id: "8",
      src: galleryOcean,
      alt: t("story.gallery_alt_ocean"),
      title: t("story.gallery_title_ocean")
    }];
    return <Gallery {...args} items={items} />;
  },
  args: {
    columns: 4,
    gap: "xs",
    aspect: "square"
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const items: GalleryItem[] = [{
      id: "1",
      src: galleryMountain,
      alt: t("story.gallery_alt_mountain"),
      title: t("story.gallery_title_mountain"),
      caption: t("story.gallery_caption_year")
    }, {
      id: "2",
      src: galleryOcean,
      alt: t("story.gallery_alt_ocean"),
      title: t("story.gallery_title_ocean"),
      caption: t("story.gallery_caption_year")
    }, {
      id: "3",
      src: galleryForest,
      alt: t("story.gallery_alt_forest"),
      title: t("story.gallery_title_forest"),
      caption: t("story.gallery_caption_year")
    }, {
      id: "4",
      src: galleryCity,
      alt: t("story.gallery_alt_city"),
      title: t("story.gallery_title_city"),
      caption: t("story.gallery_caption_year")
    }, {
      id: "5",
      src: galleryDesert,
      alt: t("story.gallery_alt_desert"),
      title: t("story.gallery_title_desert"),
      caption: t("story.gallery_caption_year")
    }, {
      id: "6",
      src: gallerySnow,
      alt: t("story.gallery_alt_snow"),
      title: t("story.gallery_title_snow"),
      caption: t("story.gallery_caption_year")
    }];
    return <Gallery {...args} items={items} />;
  },
  args: {
    columns: 3,
    gap: "md",
    aspect: "landscape"
  }
}`,...M.parameters?.docs?.source}}}})))()}export{k as a,A as i,j as n,M as o,w as r,P as s,O as t};