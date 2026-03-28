import{j as n}from"./jsx-runtime-u17CrQMm.js";import{r as l,A as x}from"./iframe-DhNyLLHC.js";import{c as h}from"./index-C7Nj9VOz.js";import{L as S}from"./Loader-D67JRh0C.js";import{C as y}from"./Card-Du4nfvcO.js";import{S as v}from"./Stack-BRJBoKd1.js";import{u as I}from"./useTranslation-OwuDKqc3.js";const g=({onLoadMore:d,loading:s=!1,hasMore:r=!0,loader:u,threshold:o=0,rootMargin:a="0px",className:c,children:f,...p})=>{const t=l.useRef(null);return l.useEffect(()=>{const e=t.current;if(!e||!r||s)return;const m=new IntersectionObserver(_=>{_[0].isIntersecting&&d()},{threshold:o,rootMargin:a});return m.observe(e),()=>{e&&m.unobserve(e)}},[d,s,r,o,a]),n.jsxs("div",{className:h("wim-infinite-scroll",c),...p,children:[f,r&&n.jsx("div",{ref:t,className:"wim-infinite-scroll__trigger","aria-hidden":"true"}),s&&n.jsx("div",{className:"wim-infinite-scroll__loader",children:u||n.jsx(S,{})})]})};g.__docgenInfo={description:"スクロールに応じて自動的に次のデータを読み込むためのコンポーネント。",methods:[],displayName:"InfiniteScroll",props:{onLoadMore:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"次のデータを読み込む際に呼び出されるコールバック関数。"},loading:{required:!1,tsType:{name:"boolean"},description:"読み込み中かどうか。",defaultValue:{value:"false",computed:!1}},hasMore:{required:!1,tsType:{name:"boolean"},description:"まだ読み込むデータがあるかどうか。",defaultValue:{value:"true",computed:!1}},loader:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"読み込み中に表示する要素。デフォルトは `Loader` コンポーネント。"},threshold:{required:!1,tsType:{name:"number"},description:"スクロールを検知する閾値。0から1までの値を指定。デフォルトは 0。",defaultValue:{value:"0",computed:!1}},rootMargin:{required:!1,tsType:{name:"string"},description:"スクロールを検知する際のオフセット。root からの距離を指定。",defaultValue:{value:'"0px"',computed:!1}}}};const M={title:"Components/Utilities/InfiniteScroll",component:g,parameters:{layout:"fullscreen"}},i={render:d=>{const{t:s}=I(x),[r,u]=l.useState(Array.from({length:20},(t,e)=>s("story_infscroll_item",{index:e+1}))),[o,a]=l.useState(!1),[c,f]=l.useState(!0),p=()=>{o||!c||(a(!0),setTimeout(()=>{const t=Array.from({length:10},(e,m)=>s("story_infscroll_item",{index:r.length+m+1}));u(e=>[...e,...t]),a(!1),r.length>50&&f(!1)},1e3))};return n.jsx("div",{tabIndex:0,style:{height:"400px",overflowY:"auto",padding:"20px"},children:n.jsx(g,{...d,loading:o,hasMore:c,onLoadMore:p,children:n.jsx(v,{gap:"md",children:r.map(t=>n.jsx(y,{padding:"md",children:t},t))})})})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [items, setItems] = useState(Array.from({
      length: 20
    }, (_, i) => t("story_infscroll_item", {
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
        }, (_, i) => t("story_infscroll_item", {
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
}`,...i.parameters?.docs?.source}}};const L=["Default"],C=Object.freeze(Object.defineProperty({__proto__:null,Default:i,__namedExportsOrder:L,default:M},Symbol.toStringTag,{value:"Module"}));export{i as D,C as I};
