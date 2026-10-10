"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./useTranslation-BDKsuBAo.js";import{n as o,t as s}from"./i18nConstants-BhvmnjLS.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{t as l}from"./classnames-D09xBJOL.js";import{n as u,t as d}from"./Stack-CrCPoxQ1.js";import{n as f,t as p}from"./Card-CbECOvhR.js";var m,h,g;function _(){return(_=t((()=>{m=`_root_m60k5_2`,h=`_loader_m60k5_5`,g={root:m,loader:h}})))()}var v,y,b,x;function S(){return(S=t((()=>{v=e(r(),1),y=e(l(),1),_(),b=c(),x=({children:e,hasMore:t=!1,loading:n=!1,onLoadMore:r,loader:i,threshold:a=250,className:o,container:s})=>{let c=(0,v.useRef)(null),l=(0,v.useCallback)(e=>{let[n]=e;n.isIntersecting&&t&&r()},[t,r]);return(0,v.useEffect)(()=>{let e={root:s?.current||null,rootMargin:`0px 0px ${a}px 0px`,threshold:0},t=new IntersectionObserver(l,e),n=c.current;return n&&t.observe(n),()=>{n&&t.unobserve(n)}},[l,s,a]),(0,b.jsxs)(`div`,{className:(0,y.default)(`wim-infinite-scroll`,g.root,o),children:[e,n&&(0,b.jsx)(`div`,{role:`status`,className:g.loader,children:i}),t&&(0,b.jsx)(`div`,{ref:c,className:g.loader})]})},x.__docgenInfo={description:`Infinite-scroll component that automatically loads content when the user
reaches the bottom of the page.`,methods:[],displayName:`InfiniteScroll`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Content to display.`},hasMore:{required:!1,tsType:{name:`boolean`},description:`Whether there is more data to load.`,defaultValue:{value:`false`,computed:!1}},loading:{required:!1,tsType:{name:`boolean`},description:`Whether data is currently loading.`,defaultValue:{value:`false`,computed:!1}},onLoadMore:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Callback to load the next batch of data.`},loader:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Element shown while loading.`},threshold:{required:!1,tsType:{name:`number`},description:`Scroll threshold (px). onLoadMore is called when the scroll position gets this close to the bottom.`,defaultValue:{value:`250`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Additional class names.`},container:{required:!1,tsType:{name:`ReactRefObject`,raw:`React.RefObject<HTMLElement | null>`,elements:[{name:`union`,raw:`HTMLElement | null`,elements:[{name:`HTMLElement`},{name:`null`}]}]},description:`Target whose scroll events are observed (defaults to window).`}}}})))()}var C=n({Default:()=>D,__namedExportsOrder:()=>O,default:()=>E}),w,T,E,D,O;function k(){return(k=t((()=>{w=e(r(),1),a(),o(),f(),S(),u(),T=c(),E={title:`Components/Utilities/InfiniteScroll`,component:x,parameters:{layout:`fullscreen`}},D={render:e=>{let{t}=i(s),[n,r]=(0,w.useState)(Array.from({length:20},(e,n)=>t(`story.infscroll_episode`,{index:n+1}))),[a,o]=(0,w.useState)(!1),[c,l]=(0,w.useState)(!0),u=()=>{!a&&c&&(o(!0),setTimeout(()=>{let e=Array.from({length:10},(e,r)=>t(`story.infscroll_episode`,{index:n.length+r+1}));r(t=>[...t,...e]),o(!1),n.length>50&&l(!1)},1e3))};return(0,T.jsx)(`div`,{tabIndex:0,style:{height:`400px`,overflowY:`auto`,padding:`20px`},children:(0,T.jsx)(x,{...e,loading:a,hasMore:c,onLoadMore:u,children:(0,T.jsx)(d,{gap:`md`,children:n.map(e=>(0,T.jsx)(p,{padding:`md`,children:e},e))})})})}},O=[`Default`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [items, setItems] = useState(Array.from({
      length: 20
    }, (_, i) => t("story.infscroll_episode", {
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
        }, (_, i) => t("story.infscroll_episode", {
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
}`,...D.parameters?.docs?.source}}}})))()}export{C as n,k as r,D as t};