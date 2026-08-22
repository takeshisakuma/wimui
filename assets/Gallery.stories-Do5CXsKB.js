"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,br as a,cr as o,xr as s,yr as c}from"./iframe-F5Up1IQq.js";import{n as l,t as u}from"./Button-Dps1MPAd.js";import{n as d,t as f}from"./Gallery-Bo3-h5ji.js";import{a as p,c as m,i as h,l as g,n as _,o as v,r as y,s as b,t as x,u as S}from"./gallery_desert-yY585wZC.js";import{n as C,t as w}from"./gallery_city-Lb4TsQv8.js";var T=e({Default:()=>k,FourColumns:()=>M,LandscapeAspect:()=>j,Selectable:()=>A,WithCaptions:()=>N,__namedExportsOrder:()=>P,default:()=>O}),E,D,O,k,A,j,M,N,P,F=t((()=>{E=n(r(),1),s(),a(),d(),l(),S(),m(),v(),C(),_(),h(),D=o(),O={title:`Components/Media/Gallery`,component:f,parameters:{layout:`padded`},argTypes:{columns:{control:`number`},gap:{control:`radio`,options:[`xs`,`sm`,`md`,`lg`,`xl`]},aspect:{control:`radio`,options:[`square`,`landscape`,`portrait`,`auto`]},selectable:{control:`boolean`}}},k={render:function(e){let{t}=i(c),n=[{id:`1`,src:g,alt:t(`story.gallery_alt_mountain`),title:t(`story.gallery_title_mountain`)},{id:`2`,src:b,alt:t(`story.gallery_alt_ocean`),title:t(`story.gallery_title_ocean`)},{id:`3`,src:p,alt:t(`story.gallery_alt_forest`),title:t(`story.gallery_title_forest`)},{id:`4`,src:w,alt:t(`story.gallery_alt_city`),title:t(`story.gallery_title_city`)},{id:`5`,src:x,alt:t(`story.gallery_alt_desert`),title:t(`story.gallery_title_desert`)},{id:`6`,src:y,alt:t(`story.gallery_alt_snow`),title:t(`story.gallery_title_snow`)}];return(0,D.jsx)(f,{...e,items:n})},args:{columns:3,gap:`md`,aspect:`square`}},A={render:function(e){let{t}=i(c),[n,r]=(0,E.useState)([]),a=[{id:`1`,src:g,alt:t(`story.gallery_alt_mountain`),title:t(`story.gallery_title_mountain`)},{id:`2`,src:b,alt:t(`story.gallery_alt_ocean`),title:t(`story.gallery_title_ocean`)},{id:`3`,src:p,alt:t(`story.gallery_alt_forest`),title:t(`story.gallery_title_forest`)},{id:`4`,src:w,alt:t(`story.gallery_alt_city`),title:t(`story.gallery_title_city`)},{id:`5`,src:x,alt:t(`story.gallery_alt_desert`),title:t(`story.gallery_title_desert`)},{id:`6`,src:y,alt:t(`story.gallery_alt_snow`),title:t(`story.gallery_title_snow`)}];return(0,D.jsx)(f,{...e,items:a,selected:n,onSelectionChange:r,renderActions:({selectedIds:e,clearSelection:n})=>(0,D.jsxs)(u,{size:`sm`,variant:`outline`,intent:`danger`,onClick:n,children:[t(`story.gallery_delete_btn`),` (`,e.length,`)`]})})},args:{columns:3,gap:`md`,aspect:`square`,selectable:!0}},j={render:function(e){let{t}=i(c),n=[{id:`1`,src:g,alt:t(`story.gallery_alt_mountain`),title:t(`story.gallery_title_mountain`)},{id:`2`,src:b,alt:t(`story.gallery_alt_ocean`),title:t(`story.gallery_title_ocean`)},{id:`3`,src:p,alt:t(`story.gallery_alt_forest`),title:t(`story.gallery_title_forest`)},{id:`4`,src:w,alt:t(`story.gallery_alt_city`),title:t(`story.gallery_title_city`)},{id:`5`,src:x,alt:t(`story.gallery_alt_desert`),title:t(`story.gallery_title_desert`)},{id:`6`,src:y,alt:t(`story.gallery_alt_snow`),title:t(`story.gallery_title_snow`)}];return(0,D.jsx)(f,{...e,items:n})},args:{columns:2,gap:`sm`,aspect:`landscape`}},M={render:function(e){let{t}=i(c),n=[{id:`1`,src:g,alt:t(`story.gallery_alt_mountain`),title:t(`story.gallery_title_mountain`)},{id:`2`,src:b,alt:t(`story.gallery_alt_ocean`),title:t(`story.gallery_title_ocean`)},{id:`3`,src:p,alt:t(`story.gallery_alt_forest`),title:t(`story.gallery_title_forest`)},{id:`4`,src:w,alt:t(`story.gallery_alt_city`),title:t(`story.gallery_title_city`)},{id:`5`,src:x,alt:t(`story.gallery_alt_desert`),title:t(`story.gallery_title_desert`)},{id:`6`,src:y,alt:t(`story.gallery_alt_snow`),title:t(`story.gallery_title_snow`)},{id:`7`,src:g,alt:t(`story.gallery_alt_mountain`),title:t(`story.gallery_title_mountain`)},{id:`8`,src:b,alt:t(`story.gallery_alt_ocean`),title:t(`story.gallery_title_ocean`)}];return(0,D.jsx)(f,{...e,items:n})},args:{columns:4,gap:`xs`,aspect:`square`}},N={render:function(e){let{t}=i(c),n=[{id:`1`,src:g,alt:t(`story.gallery_alt_mountain`),title:t(`story.gallery_title_mountain`),caption:t(`story.gallery_caption_year`)},{id:`2`,src:b,alt:t(`story.gallery_alt_ocean`),title:t(`story.gallery_title_ocean`),caption:t(`story.gallery_caption_year`)},{id:`3`,src:p,alt:t(`story.gallery_alt_forest`),title:t(`story.gallery_title_forest`),caption:t(`story.gallery_caption_year`)},{id:`4`,src:w,alt:t(`story.gallery_alt_city`),title:t(`story.gallery_title_city`),caption:t(`story.gallery_caption_year`)},{id:`5`,src:x,alt:t(`story.gallery_alt_desert`),title:t(`story.gallery_title_desert`),caption:t(`story.gallery_caption_year`)},{id:`6`,src:y,alt:t(`story.gallery_alt_snow`),title:t(`story.gallery_title_snow`),caption:t(`story.gallery_caption_year`)}];return(0,D.jsx)(f,{...e,items:n})},args:{columns:3,gap:`md`,aspect:`landscape`}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
    }];
    return <Gallery {...args} items={items} />;
  },
  args: {
    columns: 2,
    gap: "sm",
    aspect: "landscape"
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P=[`Default`,`Selectable`,`LandscapeAspect`,`FourColumns`,`WithCaptions`]}));F();export{k as Default,M as FourColumns,j as LandscapeAspect,A as Selectable,N as WithCaptions,P as __namedExportsOrder,O as default,F as n,T as t};