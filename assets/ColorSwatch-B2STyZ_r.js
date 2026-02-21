import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as m}from"./iframe-BsQs8kZI.js";import{C as f}from"./ColorPicker-BM5x7HpT.js";const g="WIM_SIGNAL_COLOR_CHANGE",u=r=>{if(!r)return"#000000";if(r.startsWith("#")){const e=r.slice(1);if(e.length===3)return`#${e[0]}${e[0]}${e[1]}${e[1]}${e[2]}${e[2]}`;if(e.length===4)return`#${e[0]}${e[0]}${e[1]}${e[1]}${e[2]}${e[2]}`;if(e.length===8)return`#${e.slice(0,6)}`;if(e.length===6)return r}if(typeof document<"u"){const e=document.createElement("div");e.style.color=r,e.style.display="none",document.body.appendChild(e);const a=getComputedStyle(e).color;document.body.removeChild(e);const s=a.match(/\d+/g);if(s&&s.length>=3){const d=parseInt(s[0]).toString(16).padStart(2,"0"),c=parseInt(s[1]).toString(16).padStart(2,"0"),o=parseInt(s[2]).toString(16).padStart(2,"0");return`#${d}${c}${o}`}}return r},b=r=>{const e=u(r),a=e.startsWith("#")?e.slice(1):e;if(a.length!==7&&a.length!==6){if(a.length===3||a.length===4&&e.startsWith("#")){const n=a.length===4?1:0,h=parseInt(a[n]+a[n],16)/255,x=parseInt(a[n+1]+a[n+1],16)/255,w=parseInt(a[n+2]+a[n+2],16)/255,i=l=>l<=.03928?l/12.92:Math.pow((l+.055)/1.055,2.4);return .2126*i(h)+.7152*i(x)+.0722*i(w)}return 0}const s=a.length===7?1:0,d=parseInt(a.substring(s,s+2),16)/255,c=parseInt(a.substring(s+2,s+4),16)/255,o=parseInt(a.substring(s+4,s+6),16)/255,p=n=>n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4);return .2126*p(d)+.7152*p(c)+.0722*p(o)},v=(r,e)=>{const a=b(r),s=b(e),d=Math.max(a,s),c=Math.min(a,s);return(d+.05)/(c+.05)},y=()=>{const[r,e]=m.useState("var(--color-primary)"),[a,s]=m.useState("var(--color-text-on-primary)"),[d,c]=m.useState("#007aff"),[o,p]=m.useState("#ffffff"),[n,h]=m.useState(0);m.useEffect(()=>{const i=l=>{l.detail?.type==="bg"&&e(l.detail.value),l.detail?.type==="fg"&&s(l.detail.value)};return window.addEventListener(g,i),()=>window.removeEventListener(g,i)},[]),m.useEffect(()=>{const i=u(r),l=u(a);c(i),p(l),h(v(i,l))},[r,a]);const x=n>=4.5,w=n>=3;return t.jsxs("div",{className:"wim-contrast-checker",children:[t.jsx("style",{children:`
                .wim-contrast-checker {
                    padding: 32px;
                    border: 1px solid var(--wim-color-border, rgba(0,0,0,0.1));
                    border-radius: 24px;
                    background: var(--bg-component, #fff);
                    margin: 32px 0;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
                }
                @media (max-width: 768px) {
                    .wim-contrast-checker {
                        padding: 16px;
                    }
                }

                .wim-contrast-controls {
                    display: grid;
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                    gap: 32px;
                    margin-bottom: 24px;
                }
                @media (max-width: 768px) {
                    .wim-contrast-controls {
                        grid-template-columns: 1fr;
                        gap: 16px;
                    }
                }

                .wim-contrast-control {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    min-width: 0;
                }
                .wim-contrast-label {
                    font-size: 13px;
                    font-weight: 700;
                    color: var(--text-tertiary, #999);
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }
                .wim-contrast-inputs {
                    display: flex;
                    gap: 12px;
                    align-items: center;
                    width: 100%;
                    min-width: 0;
                }
                .wim-text-input {
                    flex: 1;
                    min-width: 0;
                    padding: 8px 12px;
                    border-radius: 8px;
                    border: 1px solid var(--wim-color-border);
                    font-family: inherit;
                    font-size: 14px;
                    background: var(--bg-app);
                    color: var(--text-primary);
                    width: 100%;
                }
                .wim-contrast-result {
                    display: flex;
                    gap: 40px;
                    align-items: center;
                    padding: 32px;
                    background: var(--bg-app, #f8f9fa);
                    border-radius: 20px;
                }
                @media (max-width: 768px) {
                    .wim-contrast-result {
                        flex-direction: column;
                        gap: 24px;
                        padding: 24px;
                        align-items: stretch;
                    }
                }

                .wim-contrast-ratio-display {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    min-width: 140px;
                    gap: 8px;
                }
                .wim-contrast-ratio-value {
                    font-size: 48px;
                    font-weight: 900;
                    color: var(--text-primary);
                    line-height: 1;
                }
                .wim-contrast-ratio-unit {
                    font-size: 12px;
                    font-weight: 600;
                    color: var(--text-tertiary);
                    text-transform: uppercase;
                }
                .wim-contrast-badges {
                    flex: 1;
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 16px;
                }
                @media (max-width: 480px) {
                    .wim-contrast-badges {
                        grid-template-columns: 1fr;
                    }
                }

                .wim-contrast-badge {
                    padding: 16px;
                    border-radius: 12px;
                    font-size: 14px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background: var(--bg-component);
                    border: 1px solid rgba(0,0,0,0.03);
                }
                .wim-contrast-badge-status {
                    font-weight: 800;
                    font-size: 11px;
                    padding: 4px 10px;
                    border-radius: 6px;
                }
                .wim-contrast-status-pass {
                    color: #10b981;
                    background: #ecfdf5;
                }
                .wim-contrast-status-fail {
                    color: #ef4444;
                    background: #fef2f2;
                }
                .wim-contrast-preview-container {
                    margin-top: 32px;
                    border-radius: 16px;
                    overflow: hidden;
                    border: 1px solid rgba(0,0,0,0.05);
                }
                .wim-contrast-preview {
                    padding: 40px;
                    text-align: center;
                }
                @media (max-width: 768px) {
                    .wim-contrast-preview {
                        padding: 24px;
                    }
                }

                .wim-contrast-preview-text-lg {
                    font-size: 24px;
                    font-weight: 700;
                    margin-bottom: 8px;
                    display: block;
                }
                .wim-contrast-preview-text-sm {
                    font-size: 16px;
                    font-weight: 400;
                    opacity: 0.9;
                    display: block;
                }
                .wim-contrast-color-picker {
                    width: 64px !important;
                    flex: 0 0 auto;
                }
                `}),t.jsxs("div",{className:"wim-contrast-controls",children:[t.jsxs("div",{className:"wim-contrast-control",children:[t.jsx("label",{className:"wim-contrast-label",children:"Background"}),t.jsxs("div",{className:"wim-contrast-inputs",children:[t.jsx(f,{value:d,onChange:i=>e(i.target.value),className:"wim-contrast-color-picker"}),t.jsx("input",{className:"wim-text-input",value:r,onChange:i=>e(i.target.value),placeholder:"#000000 or var(...)"})]})]}),t.jsxs("div",{className:"wim-contrast-control",children:[t.jsx("label",{className:"wim-contrast-label",children:"Foreground"}),t.jsxs("div",{className:"wim-contrast-inputs",children:[t.jsx(f,{value:o,onChange:i=>s(i.target.value),className:"wim-contrast-color-picker"}),t.jsx("input",{className:"wim-text-input",value:a,onChange:i=>s(i.target.value),placeholder:"#ffffff or var(...)"})]})]})]}),t.jsxs("div",{className:"wim-contrast-result",children:[t.jsxs("div",{className:"wim-contrast-ratio-display",children:[t.jsx("span",{className:"wim-contrast-ratio-value",children:n.toFixed(2)}),t.jsx("span",{className:"wim-contrast-ratio-unit",children:"Ratio"})]}),t.jsxs("div",{className:"wim-contrast-badges",children:[t.jsxs("div",{className:"wim-contrast-badge",children:[t.jsx("span",{children:"Normal Text"}),t.jsx("span",{className:`wim-contrast-badge-status ${x?"wim-contrast-status-pass":"wim-contrast-status-fail"}`,children:x?"PASS (AA)":"FAIL (AA)"})]}),t.jsxs("div",{className:"wim-contrast-badge",children:[t.jsx("span",{children:"Large Text"}),t.jsx("span",{className:`wim-contrast-badge-status ${w?"wim-contrast-status-pass":"wim-contrast-status-fail"}`,children:w?"PASS (AA)":"FAIL (AA)"})]})]})]}),t.jsx("div",{className:"wim-contrast-preview-container",children:t.jsxs("div",{className:"wim-contrast-preview",style:{backgroundColor:d,color:o},children:[t.jsx("span",{className:"wim-contrast-preview-text-lg",children:"Design System Contrast Test"}),t.jsx("span",{className:"wim-contrast-preview-text-sm",children:"The quick brown fox jumps over the lazy dog."})]})})]})};y.__docgenInfo={description:"",methods:[],displayName:"ContrastChecker"};const N=({name:r,value:e,color:a,children:s,variant:d="card"})=>{const c=o=>{let p=e||a;p.startsWith("--")&&(p=`var(${p})`);const n=new CustomEvent(g,{detail:{type:o,value:p}});window.dispatchEvent(n)};return t.jsxs(t.Fragment,{children:[t.jsx("style",{children:`
        .wim-swatch-card {
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid var(--wim-color-border, #e5e5e5);
          background: var(--bg-component, #fff);
          display: flex;
          flex-direction: column;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }
        .wim-swatch-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.08);
          border-color: var(--color-primary, #007aff);
        }
        .wim-swatch-card-preview {
          height: 100px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 500;
          position: relative;
          border-bottom: 1px solid rgba(0,0,0,0.05);
        }
        .wim-swatch-card-info {
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          position: relative;
        }
        .wim-swatch-name {
          font-weight: 600;
          font-size: 15px;
          color: var(--text-primary, #1a1a1a);
        }
        .wim-swatch-value {
          font-family: "Cascadia Code", "Fira Code", monospace;
          font-size: 12px;
          color: var(--text-secondary, #666);
          background: var(--bg-app, #f5f5f5);
          padding: 2px 6px;
          border-radius: 4px;
          width: fit-content;
          word-break: break-all;
        }
        
        .wim-swatch-actions {
          position: absolute;
          top: 8px;
          right: 8px;
          display: flex;
          gap: 4px;
          opacity: 0;
          transition: opacity 0.2s;
          pointer-events: none;
          z-index: 20;
        }
        .wim-swatch-card:hover .wim-swatch-actions,
        .wim-swatch-square-wrapper:hover .wim-swatch-actions {
          opacity: 1;
          pointer-events: auto;
        }
        .wim-swatch-action-btn {
          padding: 2px 6px;
          font-size: 10px;
          font-weight: 700;
          border-radius: 4px;
          border: 1px solid rgba(0,0,0,0.1);
          background: #fff;
          color: #333;
          cursor: pointer;
          transition: all 0.2s;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        }
        .wim-swatch-action-btn:hover {
          background: var(--color-primary, #007aff);
          color: #fff;
          border-color: var(--color-primary, #007aff);
          transform: scale(1.1);
        }

        .wim-swatch-square-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          width: 100%;
          position: relative;
        }
        .wim-swatch-square-wrapper:hover {
          z-index: 50;
        }
        .wim-swatch-square {
          width: 100%;
          aspect-ratio: 1;
          border-radius: 6px;
          border: 1px solid rgba(0,0,0,0.08);
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: pointer;
          position: relative;
        }
        .wim-swatch-square:hover {
          transform: scale(1.1);
          z-index: 10;
          box-shadow: 0 8px 16px rgba(0,0,0,0.15);
          border-radius: 8px;
        }
        .wim-swatch-square-label {
          font-size: 10px;
          font-family: inherit;
          font-weight: 500;
          text-align: center;
          color: var(--text-tertiary, #999);
          word-break: break-all;
          max-width: 100%;
        }
      `}),d==="card"?t.jsxs("div",{className:"wim-swatch-card",children:[t.jsxs("div",{className:"wim-swatch-actions",children:[t.jsx("button",{className:"wim-swatch-action-btn",onClick:o=>{o.stopPropagation(),c("bg")},children:"BG"}),t.jsx("button",{className:"wim-swatch-action-btn",onClick:o=>{o.stopPropagation(),c("fg")},children:"FG"})]}),t.jsx("div",{className:"wim-swatch-card-preview",style:{background:a},children:s}),t.jsxs("div",{className:"wim-swatch-card-info",children:[r&&t.jsx("span",{className:"wim-swatch-name",children:r}),e&&t.jsx("span",{className:"wim-swatch-value",children:e})]})]}):t.jsxs("div",{className:"wim-swatch-square-wrapper",children:[t.jsxs("div",{className:"wim-swatch-actions",style:{top:"-8px",right:"-4px"},children:[t.jsx("button",{className:"wim-swatch-action-btn",onClick:o=>{o.stopPropagation(),c("bg")},children:"BG"}),t.jsx("button",{className:"wim-swatch-action-btn",onClick:o=>{o.stopPropagation(),c("fg")},children:"FG"})]}),t.jsx("div",{className:"wim-swatch-square",style:{background:a},title:e||r||a,children:s}),(r||e)&&t.jsx("span",{className:"wim-swatch-square-label",children:r||e})]})]})},j=({children:r,variant:e="card"})=>{const a=e==="card"?{gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:"24px"}:{gridTemplateColumns:"repeat(auto-fill, minmax(80px, 1fr))",gap:"16px"};return t.jsx("div",{style:{display:"grid",...a,marginTop:"24px",marginBottom:"40px"},children:r})};N.__docgenInfo={description:"",methods:[],displayName:"ColorSwatch",props:{name:{required:!1,tsType:{name:"string"},description:"Color name displayed in the card"},value:{required:!1,tsType:{name:"string"},description:"Color value or variable name displayed in the card"},color:{required:!0,tsType:{name:"string"},description:"The actual color (CSS variable, hex, etc.)"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Text or element to display on top of the color swatch"},variant:{required:!1,tsType:{name:"union",raw:'"card" | "square"',elements:[{name:"literal",value:'"card"'},{name:"literal",value:'"square"'}]},description:"Variant of the swatch",defaultValue:{value:'"card"',computed:!1}}}};j.__docgenInfo={description:"",methods:[],displayName:"ColorGrid",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"card" | "square"',elements:[{name:"literal",value:'"card"'},{name:"literal",value:'"square"'}]},description:"",defaultValue:{value:'"card"',computed:!1}}}};export{j as C,N as a,y as b};
