import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as l}from"./iframe-CxkJglxX.js";import{c as y}from"./index-DuEzwbhC.js";import{L as v}from"./Loader-DRcjdnvT.js";import{C as h}from"./Card-B2f2E-u-.js";import{S as x}from"./Stack-BSy9n--S.js";import{u as S}from"./useTranslation-0fSK9VPD.js";const g=({onLoadMore:d,loading:r=!1,hasMore:n=!0,loader:u,threshold:o=0,rootMargin:a="0px",className:c,children:f,...p})=>{const t=l.useRef(null);return l.useEffect(()=>{const e=t.current;if(!e||!n||r)return;const m=new IntersectionObserver(_=>{_[0].isIntersecting&&d()},{threshold:o,rootMargin:a});return m.observe(e),()=>{e&&m.unobserve(e)}},[d,r,n,o,a]),s.jsxs("div",{className:y("wim-infinite-scroll",c),...p,children:[f,n&&s.jsx("div",{ref:t,className:"wim-infinite-scroll__trigger","aria-hidden":"true"}),r&&s.jsx("div",{className:"wim-infinite-scroll__loader",children:u||s.jsx(v,{})})]})};g.__docgenInfo={description:"スクロールに応じて自動的に次のデータを読み込むためのコンポーネント。",methods:[],displayName:"InfiniteScroll",props:{onLoadMore:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"次のデータを読み込む際に呼び出されるコールバック関数。"},loading:{required:!1,tsType:{name:"boolean"},description:"読み込み中かどうか。",defaultValue:{value:"false",computed:!1}},hasMore:{required:!1,tsType:{name:"boolean"},description:"まだ読み込むデータがあるかどうか。",defaultValue:{value:"true",computed:!1}},loader:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"読み込み中に表示する要素。デフォルトは `Loader` コンポーネント。"},threshold:{required:!1,tsType:{name:"number"},description:"スクロールを検知する閾値。0から1までの値を指定。デフォルトは 0。",defaultValue:{value:"0",computed:!1}},rootMargin:{required:!1,tsType:{name:"string"},description:"スクロールを検知する際のオフセット。root からの距離を指定。",defaultValue:{value:'"0px"',computed:!1}}}};const I={title:"Components/Utilities/InfiniteScroll",component:g,parameters:{layout:"fullscreen"}},i={render:d=>{const{t:r}=S(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),[n,u]=l.useState(Array.from({length:20},(t,e)=>r("story_infscroll_item",{index:e+1}))),[o,a]=l.useState(!1),[c,f]=l.useState(!0),p=()=>{o||!c||(a(!0),setTimeout(()=>{const t=Array.from({length:10},(e,m)=>r("story_infscroll_item",{index:n.length+m+1}));u(e=>[...e,...t]),a(!1),n.length>50&&f(!1)},1e3))};return s.jsx("div",{style:{height:"400px",overflowY:"auto",padding:"20px"},children:s.jsx(g,{...d,loading:o,hasMore:c,onLoadMore:p,children:s.jsx(x,{gap:"md",children:n.map(t=>s.jsx(h,{padding:"md",children:t},t))})})})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
    return <div style={{
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
}`,...i.parameters?.docs?.source}}};const M=["Default"],q=Object.freeze(Object.defineProperty({__proto__:null,Default:i,__namedExportsOrder:M,default:I},Symbol.toStringTag,{value:"Module"}));export{i as D,q as I};
