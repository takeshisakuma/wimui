import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as v,A as f}from"./iframe-00CRNq2O.js";import{c as m}from"./index-Gwnravlj.js";import{u as b}from"./useIndicator-CobD1Drh.js";import{u as x}from"./useTranslation-BYdSjFhs.js";const c=({activeSelector:d,orientation:n="horizontal",className:i,style:o,variant:a,dependence:r})=>{const{containerRef:e,sliderStyle:p,isReady:u}=b({activeSelector:d,orientation:n,variant:a,dependence:r});return t.jsx("div",{ref:e,className:m("wim-indicator-slider-container"),style:{position:"relative"},children:t.jsx("div",{className:m("wim-indicator-slider",i),style:{...p,...o,opacity:u?p.opacity:0,transition:u?"all 0.3s cubic-bezier(0.4, 0, 0.2, 1)":"none"},"aria-hidden":"true"})})};c.__docgenInfo={description:`A shared internal component to manage a sliding indicator that follows an active element.
Used by Tabs, SegmentedControl, and TabNavigation.`,methods:[],displayName:"IndicatorSlider",props:{activeSelector:{required:!0,tsType:{name:"string"},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},variant:{required:!1,tsType:{name:"string"},description:""},dependence:{required:!1,tsType:{name:"unknown"},description:""}}};const g={title:"Components/Internal/IndicatorSlider",component:c,parameters:{layout:"centered"}},s={render:function(){const[n,i]=v.useState(0),{t:o}=x(f),a=["home","profile","settings","account"];return t.jsxs("div",{className:"wim-tab-list",style:{display:"flex",position:"relative",gap:"24px",padding:"8px 16px",background:"#f5f5f5",borderRadius:"8px"},children:[a.map((r,e)=>t.jsx("button",{className:n===e?"is-active":"",style:{border:"none",background:"none",padding:"8px 12px",cursor:"pointer",zIndex:2,position:"relative",color:n===e?"#0070f3":"#666",fontWeight:n===e?"bold":"normal",transition:"color 0.2s"},onClick:()=>i(e),children:o(r)},e)),t.jsx(c,{activeSelector:".is-active",className:"wim-tab-indicator",style:{position:"absolute",bottom:0,left:0,height:"2px",backgroundColor:"#0070f3",zIndex:1}})]})}},l={render:function(){const[n,i]=v.useState(0),{t:o}=x(f),a=["overview","analytics","reports","audience"];return t.jsxs("div",{className:"wim-nav-list",style:{display:"flex",flexDirection:"column",position:"relative",gap:"8px",padding:"16px",background:"#fff",border:"1px solid #ddd",borderRadius:"8px",width:"200px"},children:[a.map((r,e)=>t.jsx("button",{className:n===e?"is-active-v":"",style:{border:"none",background:"none",padding:"10px 16px",textAlign:"left",cursor:"pointer",zIndex:2,position:"relative",color:n===e?"#0070f3":"#666",fontWeight:n===e?"bold":"normal"},onClick:()=>i(e),children:o(r)},e)),t.jsx(c,{activeSelector:".is-active-v",orientation:"vertical",className:"wim-nav-indicator",style:{position:"absolute",left:0,width:"4px",backgroundColor:"#0070f3",borderRadius:"0 4px 4px 0",zIndex:1}})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [active, setActive] = useState(0);
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const labels = ["home", "profile", "settings", "account"];
    return <div className="wim-tab-list" style={{
      display: "flex",
      position: "relative",
      gap: "24px",
      padding: "8px 16px",
      background: "#f5f5f5",
      borderRadius: "8px"
    }}>
        {labels.map((key, i) => <button key={i} className={active === i ? "is-active" : ""} style={{
        border: "none",
        background: "none",
        padding: "8px 12px",
        cursor: "pointer",
        zIndex: 2,
        position: "relative",
        color: active === i ? "#0070f3" : "#666",
        fontWeight: active === i ? "bold" : "normal",
        transition: "color 0.2s"
      }} onClick={() => setActive(i)}>
                {t(key)}
            </button>)}
        {/* The slider follows the .is-active element */}
        <IndicatorSlider activeSelector=".is-active" className="wim-tab-indicator" style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        height: "2px",
        backgroundColor: "#0070f3",
        zIndex: 1
      }} />
      </div>;
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [active, setActive] = useState(0);
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const labels = ["overview", "analytics", "reports", "audience"];
    return <div className="wim-nav-list" style={{
      display: "flex",
      flexDirection: "column",
      position: "relative",
      gap: "8px",
      padding: "16px",
      background: "#fff",
      border: "1px solid #ddd",
      borderRadius: "8px",
      width: "200px"
    }}>
            {labels.map((key, i) => <button key={i} className={active === i ? "is-active-v" : ""} style={{
        border: "none",
        background: "none",
        padding: "10px 16px",
        textAlign: "left",
        cursor: "pointer",
        zIndex: 2,
        position: "relative",
        color: active === i ? "#0070f3" : "#666",
        fontWeight: active === i ? "bold" : "normal"
      }} onClick={() => setActive(i)}>
                    {t(key)}
                </button>)}
            <IndicatorSlider activeSelector=".is-active-v" orientation="vertical" className="wim-nav-indicator" style={{
        position: "absolute",
        left: 0,
        width: "4px",
        backgroundColor: "#0070f3",
        borderRadius: "0 4px 4px 0",
        zIndex: 1
      }} />
          </div>;
  }
}`,...l.parameters?.docs?.source}}};const y=["Default","Vertical"],A=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Vertical:l,__namedExportsOrder:y,default:g},Symbol.toStringTag,{value:"Module"}));export{s as D,A as S,l as V};
