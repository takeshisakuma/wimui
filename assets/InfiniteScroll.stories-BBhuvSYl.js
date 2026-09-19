"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,Sr as a,Tr as o,ur as s,xr as c}from"./iframe-wf1-Tomv.js";import{ot as l,t as u}from"./src--JUR9phw.js";import{t as d}from"./Stack-CSVZoS0F.js";import{t as f}from"./Card-B_e_84jO.js";var p=e({Default:()=>_,__namedExportsOrder:()=>v,default:()=>g}),m,h,g,_,v,y=t((()=>{m=n(r(),1),i(),a(),u(),h=s(),g={title:`Components/Utilities/InfiniteScroll`,component:l,parameters:{layout:`fullscreen`}},_={render:e=>{let{t}=o(c),[n,r]=(0,m.useState)(Array.from({length:20},(e,n)=>t(`story.infscroll_item`,{index:n+1}))),[i,a]=(0,m.useState)(!1),[s,u]=(0,m.useState)(!0),p=()=>{i||!s||(a(!0),setTimeout(()=>{let e=Array.from({length:10},(e,r)=>t(`story.infscroll_item`,{index:n.length+r+1}));r(t=>[...t,...e]),a(!1),n.length>50&&u(!1)},1e3))};return(0,h.jsx)(`div`,{tabIndex:0,style:{height:`400px`,overflowY:`auto`,padding:`20px`},children:(0,h.jsx)(l,{...e,loading:i,hasMore:s,onLoadMore:p,children:(0,h.jsx)(d,{gap:`md`,children:n.map(e=>(0,h.jsx)(f,{padding:`md`,children:e},e))})})})}},v=[`Default`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [items, setItems] = useState(Array.from({
      length: 20
    }, (_, i) => t("story.infscroll_item", {
      index: i + 1
    })));
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const loadMore = () => {
      if (loading || !hasMore) return;
      setLoading(true);
      setTimeout(() => {
        const newItems = Array.from({
          length: 10
        }, (_, i) => t("story.infscroll_item", {
          index: items.length + i + 1
        }));
        setItems(prev => [...prev, ...newItems]);
        setLoading(false);
        if (items.length > 50) {
          setHasMore(false);
        }
      }, 1000);
    };
    return <div tabIndex={0} style={{
      height: "400px",
      overflowY: "auto",
      padding: "20px"
    }}>
        <InfiniteScroll {...args} loading={loading} hasMore={hasMore} onLoadMore={loadMore}>
          <Stack gap="md">
            {items.map(item => <Card key={item} padding="md">
                {item}
              </Card>)}
          </Stack>
        </InfiniteScroll>
      </div>;
  }
}`,..._.parameters?.docs?.source}}}}));y();export{_ as Default,v as __namedExportsOrder,g as default,y as n,p as t};