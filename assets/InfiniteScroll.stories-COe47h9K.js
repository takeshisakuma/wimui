"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-sJBDdmOt.js";import{t as r}from"./react-BGJ90fIb.js";import{n as i,t as a}from"./useTranslation-CpMdOj2B.js";import{n as o,t as s}from"./i18nConstants-DbPgW6Wr.js";import{t as c}from"./jsx-runtime-MKhVqBIO.js";import{t as l}from"./classnames-DQoS6hca.js";import{n as u,t as d}from"./useWimTranslation-Dn3Tk9bP.js";import{n as f,t as p}from"./Stack-SbfzwNKR.js";import{n as m,t as h}from"./Card-BF_Jnhw6.js";import{i as g,n as _,t as v}from"./useAnnounce-D5PIfNDG.js";import{n as y,t as b}from"./Spinner-DmfcpYl6.js";import{n as x,t as S}from"./data-display-Bzusm99S.js";var C,w,T;function E(){return(E=t((()=>{C=`_root_m60k5_2`,w=`_loader_m60k5_5`,T={root:C,loader:w}})))()}var D,O,k,A;function j(){return(j=t((()=>{D=e(r(),1),O=e(l(),1),d(),x(),_(),y(),E(),k=c(),A=({children:e,hasMore:t=!1,loading:n=!1,onLoadMore:r,loader:i,threshold:a=250,className:o,container:s})=>{let c=(0,D.useRef)(null),{t:l}=u(S),{ref:d,region:f}=g(n),p=(0,D.useCallback)(e=>{let[n]=e;n.isIntersecting&&t&&r()},[t,r]);return(0,D.useEffect)(()=>{let e={root:s?.current||null,rootMargin:`0px 0px ${a}px 0px`,threshold:0},t=new IntersectionObserver(p,e),n=c.current;return n&&t.observe(n),()=>{n&&t.unobserve(n)}},[p,s,a]),(0,k.jsxs)(`div`,{className:(0,O.default)(`wim-infinite-scroll`,T.root,o),children:[f,e,n&&(0,k.jsx)(`div`,{ref:d,className:T.loader,children:(0,k.jsx)(v.Provider,{value:!0,children:i??(0,k.jsx)(b,{size:`sm`,label:l(`infinite_scroll.loading`)})})}),t&&(0,k.jsx)(`div`,{ref:c,className:T.loader})]})},A.__docgenInfo={description:`Infinite-scroll component that automatically loads content when the user
reaches the bottom of the page.`,methods:[],displayName:`InfiniteScroll`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Content to display.`},hasMore:{required:!1,tsType:{name:`boolean`},description:`Whether there is more data to load.`,defaultValue:{value:`false`,computed:!1}},loading:{required:!1,tsType:{name:`boolean`},description:`Whether data is currently loading.`,defaultValue:{value:`false`,computed:!1}},onLoadMore:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Callback to load the next batch of data.`},loader:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Element shown while loading. Defaults to a spinner with a localized "Loading more…" text. Its text is announced to screen readers when loading starts.`},threshold:{required:!1,tsType:{name:`number`},description:`Scroll threshold (px). onLoadMore is called when the scroll position gets this close to the bottom.`,defaultValue:{value:`250`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Additional class names.`},container:{required:!1,tsType:{name:`ReactRefObject`,raw:`React.RefObject<HTMLElement | null>`,elements:[{name:`union`,raw:`HTMLElement | null`,elements:[{name:`HTMLElement`},{name:`null`}]}]},description:`Target whose scroll events are observed (defaults to window).`}}}})))()}var M=n({Default:()=>I,__namedExportsOrder:()=>L,default:()=>F}),N,P,F,I,L;function R(){return(R=t((()=>{N=e(r(),1),a(),o(),m(),j(),f(),P=c(),F={title:`Components/Utilities/InfiniteScroll`,component:A,parameters:{layout:`fullscreen`}},I={render:e=>{let{t}=i(s),[n,r]=(0,N.useState)(Array.from({length:20},(e,n)=>t(`story.infscroll_episode`,{index:n+1}))),[a,o]=(0,N.useState)(!1),[c,l]=(0,N.useState)(!0),u=()=>{!a&&c&&(o(!0),setTimeout(()=>{let e=Array.from({length:10},(e,r)=>t(`story.infscroll_episode`,{index:n.length+r+1}));r(t=>[...t,...e]),o(!1),n.length>50&&l(!1)},1e3))};return(0,P.jsx)(`div`,{tabIndex:0,style:{height:`400px`,overflowY:`auto`,padding:`20px`},children:(0,P.jsx)(A,{...e,loading:a,hasMore:c,onLoadMore:u,children:(0,P.jsx)(p,{gap:`md`,children:n.map(e=>(0,P.jsx)(h,{padding:`md`,children:e},e))})})})}},L=[`Default`],I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}}})))()}export{M as n,R as r,I as t};