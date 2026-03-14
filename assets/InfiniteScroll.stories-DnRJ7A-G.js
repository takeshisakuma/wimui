import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as l}from"./iframe-CDoE-pWf.js";import{c as x}from"./index-D0Kn6Bmw.js";import{L as h}from"./Loader-Dk1jvkkE.js";import{C as S}from"./Card-Ba-RKKAY.js";import{S as y}from"./Stack-Cw-5UYKm.js";import{A as v}from"./i18nConstants-BpHxieg5.js";import{u as I}from"./useTranslation-DUx5r_FT.js";const g=({onLoadMore:d,loading:s=!1,hasMore:n=!0,loader:u,threshold:o=0,rootMargin:a="0px",className:c,children:f,...p})=>{const t=l.useRef(null);return l.useEffect(()=>{const e=t.current;if(!e||!n||s)return;const m=new IntersectionObserver(_=>{_[0].isIntersecting&&d()},{threshold:o,rootMargin:a});return m.observe(e),()=>{e&&m.unobserve(e)}},[d,s,n,o,a]),r.jsxs("div",{className:x("wim-infinite-scroll",c),...p,children:[f,n&&r.jsx("div",{ref:t,className:"wim-infinite-scroll__trigger","aria-hidden":"true"}),s&&r.jsx("div",{className:"wim-infinite-scroll__loader",children:u||r.jsx(h,{})})]})};g.__docgenInfo={description:"スクロールに応じて自動的に次のデータを読み込むためのコンポーネント。",methods:[],displayName:"InfiniteScroll",props:{onLoadMore:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"次のデータを読み込む際に呼び出されるコールバック関数。"},loading:{required:!1,tsType:{name:"boolean"},description:"読み込み中かどうか。",defaultValue:{value:"false",computed:!1}},hasMore:{required:!1,tsType:{name:"boolean"},description:"まだ読み込むデータがあるかどうか。",defaultValue:{value:"true",computed:!1}},loader:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"読み込み中に表示する要素。デフォルトは `Loader` コンポーネント。"},threshold:{required:!1,tsType:{name:"number"},description:"スクロールを検知する閾値。0から1までの値を指定。デフォルトは 0。",defaultValue:{value:"0",computed:!1}},rootMargin:{required:!1,tsType:{name:"string"},description:"スクロールを検知する際のオフセット。root からの距離を指定。",defaultValue:{value:'"0px"',computed:!1}}}};const M={title:"Components/Utilities/InfiniteScroll",component:g,parameters:{layout:"fullscreen"}},i={render:d=>{const{t:s}=I(v),[n,u]=l.useState(Array.from({length:20},(t,e)=>s("story_infscroll_item",{index:e+1}))),[o,a]=l.useState(!1),[c,f]=l.useState(!0),p=()=>{o||!c||(a(!0),setTimeout(()=>{const t=Array.from({length:10},(e,m)=>s("story_infscroll_item",{index:n.length+m+1}));u(e=>[...e,...t]),a(!1),n.length>50&&f(!1)},1e3))};return r.jsx("div",{tabIndex:0,style:{height:"400px",overflowY:"auto",padding:"20px"},children:r.jsx(g,{...d,loading:o,hasMore:c,onLoadMore:p,children:r.jsx(y,{gap:"md",children:n.map(t=>r.jsx(S,{padding:"md",children:t},t))})})})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
    }}>\r
        <InfiniteScroll {...args} loading={loading} hasMore={hasMore} onLoadMore={loadMore}>\r
          <Stack gap="md">\r
            {items.map(item => <Card key={item} padding="md">\r
                {item}\r
              </Card>)}\r
          </Stack>\r
        </InfiniteScroll>\r
      </div>;
  }
}`,...i.parameters?.docs?.source}}};const L=["Default"],R=Object.freeze(Object.defineProperty({__proto__:null,Default:i,__namedExportsOrder:L,default:M},Symbol.toStringTag,{value:"Module"}));export{i as D,R as I};
