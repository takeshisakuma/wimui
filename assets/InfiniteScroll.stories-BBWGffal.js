import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as d}from"./iframe-C582d8o3.js";import{c as v}from"./index-BNTbL7oN.js";import{L as I}from"./Loader-uPP0qYHS.js";import{C as S}from"./Card-Bp3fRP83.js";import{S as x}from"./Stack-CUguBsr5.js";const p=({onLoadMore:m,loading:t=!1,hasMore:a=!0,loader:c,threshold:o=0,rootMargin:i="0px",className:u,children:f,...r})=>{const n=d.useRef(null);return d.useEffect(()=>{const s=n.current;if(!s||!a||t)return;const g=new IntersectionObserver(h=>{h[0].isIntersecting&&m()},{threshold:o,rootMargin:i});return g.observe(s),()=>{s&&g.unobserve(s)}},[m,t,a,o,i]),e.jsxs("div",{className:v("wim-infinite-scroll",u),...r,children:[f,a&&e.jsx("div",{ref:n,className:"wim-infinite-scroll__trigger","aria-hidden":"true"}),t&&e.jsx("div",{className:"wim-infinite-scroll__loader",children:c||e.jsx(I,{})})]})};p.__docgenInfo={description:"スクロールに応じて自動的に次のデータを読み込むためのコンポーネント。",methods:[],displayName:"InfiniteScroll",props:{onLoadMore:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"次のデータを読み込む際に呼び出されるコールバック関数。"},loading:{required:!1,tsType:{name:"boolean"},description:"読み込み中かどうか。",defaultValue:{value:"false",computed:!1}},hasMore:{required:!1,tsType:{name:"boolean"},description:"まだ読み込むデータがあるかどうか。",defaultValue:{value:"true",computed:!1}},loader:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"読み込み中に表示する要素。デフォルトは `Loader` コンポーネント。"},threshold:{required:!1,tsType:{name:"number"},description:"スクロールを検知する閾値。0から1までの値を指定。デフォルトは 0。",defaultValue:{value:"0",computed:!1}},rootMargin:{required:!1,tsType:{name:"string"},description:"スクロールを検知する際のオフセット。root からの距離を指定。",defaultValue:{value:'"0px"',computed:!1}}}};const y={title:"Component/DataDisplay/InfiniteScroll",component:p,parameters:{layout:"fullscreen"}},l={render:m=>{const[t,a]=d.useState(Array.from({length:20},(r,n)=>`Item ${n+1}`)),[c,o]=d.useState(!1),[i,u]=d.useState(!0),f=()=>{c||!i||(o(!0),setTimeout(()=>{const r=Array.from({length:10},(n,s)=>`Item ${t.length+s+1}`);a(n=>[...n,...r]),o(!1),t.length>50&&u(!1)},1e3))};return e.jsx("div",{style:{height:"400px",overflowY:"auto",padding:"20px"},children:e.jsx(p,{...m,loading:c,hasMore:i,onLoadMore:f,children:e.jsx(x,{gap:"md",children:t.map(r=>e.jsx(S,{padding:"md",children:r},r))})})})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [items, setItems] = useState(Array.from({
      length: 20
    }, (_, i) => \`Item \${i + 1}\`));
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const loadMore = () => {
      if (loading || !hasMore) return;
      setLoading(true);
      setTimeout(() => {
        const newItems = Array.from({
          length: 10
        }, (_, i) => \`Item \${items.length + i + 1}\`);
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
}`,...l.parameters?.docs?.source}}};const _=["Default"],N=Object.freeze(Object.defineProperty({__proto__:null,Default:l,__namedExportsOrder:_,default:y},Symbol.toStringTag,{value:"Module"}));export{l as D,N as I};
