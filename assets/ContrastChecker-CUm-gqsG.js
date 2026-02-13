import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as l}from"./iframe-w7zQUmWk.js";import{C as x}from"./ColorPicker-tT-xOQ_w.js";const g=({name:e,value:t,color:s,children:i,variant:r="card"})=>a.jsxs(a.Fragment,{children:[a.jsx("style",{children:`
        .wim-swatch-card {
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid var(--wim-color-border, #e5e5e5);
          background: var(--bg-component, #fff);
          display: flex;
          flex-direction: column;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
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

        .wim-swatch-square-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          width: 100%;
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
          transform: scale(1.2) rotate(2deg);
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
      `}),r==="card"?a.jsxs("div",{className:"wim-swatch-card",children:[a.jsx("div",{className:"wim-swatch-card-preview",style:{background:s},children:i}),a.jsxs("div",{className:"wim-swatch-card-info",children:[e&&a.jsx("span",{className:"wim-swatch-name",children:e}),t&&a.jsx("span",{className:"wim-swatch-value",children:t})]})]}):a.jsxs("div",{className:"wim-swatch-square-wrapper",children:[a.jsx("div",{className:"wim-swatch-square",style:{background:s},title:t||e||s,children:i}),(e||t)&&a.jsx("span",{className:"wim-swatch-square-label",children:e||t})]})]}),u=({children:e,variant:t="card"})=>{const s=t==="card"?{gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:"24px"}:{gridTemplateColumns:"repeat(auto-fill, minmax(80px, 1fr))",gap:"16px"};return a.jsx("div",{style:{display:"grid",...s,marginTop:"24px",marginBottom:"40px"},children:e})};g.__docgenInfo={description:"",methods:[],displayName:"ColorSwatch",props:{name:{required:!1,tsType:{name:"string"},description:"Color name displayed in the card"},value:{required:!1,tsType:{name:"string"},description:"Color value or variable name displayed in the card"},color:{required:!0,tsType:{name:"string"},description:"The actual color (CSS variable, hex, etc.)"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Text or element to display on top of the color swatch"},variant:{required:!1,tsType:{name:"union",raw:'"card" | "square"',elements:[{name:"literal",value:'"card"'},{name:"literal",value:'"square"'}]},description:"Variant of the swatch",defaultValue:{value:'"card"',computed:!1}}}};u.__docgenInfo={description:"",methods:[],displayName:"ColorGrid",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"card" | "square"',elements:[{name:"literal",value:'"card"'},{name:"literal",value:'"square"'}]},description:"",defaultValue:{value:'"card"',computed:!1}}}};const w=e=>{const t=e.startsWith("#")?e.slice(1):e,s=parseInt(t.substring(0,2),16)/255,i=parseInt(t.substring(2,4),16)/255,r=parseInt(t.substring(4,6),16)/255,o=c=>c<=.03928?c/12.92:Math.pow((c+.055)/1.055,2.4);return .2126*o(s)+.7152*o(i)+.0722*o(r)},f=(e,t)=>{const s=w(e),i=w(t),r=Math.max(s,i),o=Math.min(s,i);return(r+.05)/(o+.05)},h=()=>{const[e,t]=l.useState("#007aff"),[s,i]=l.useState("#ffffff"),[r,o]=l.useState(0);l.useEffect(()=>{try{const n=f(e,s);o(n)}catch(n){console.error(n)}},[e,s]);const c=r>=4.5,d=r>=7,p=r>=3,m=r>=4.5;return a.jsxs("div",{className:"wim-contrast-checker",children:[a.jsx("style",{children:`
                .wim-contrast-checker {
                    padding: 32px;
                    border: 1px solid var(--wim-color-border, rgba(0,0,0,0.1));
                    border-radius: 24px;
                    background: var(--bg-component, #fff);
                    margin: 32px 0;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
                    transition: all 0.3s ease;
                }
                .wim-contrast-checker:hover {
                    box-shadow: 0 10px 40px rgba(0,0,0,0.08);
                }
                .wim-contrast-controls {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 32px;
                    margin-bottom: 32px;
                }
                .wim-contrast-control {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }
                .wim-contrast-label {
                    font-size: 13px;
                    font-weight: 700;
                    color: var(--text-tertiary, #999);
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }
                .wim-contrast-result {
                    display: flex;
                    gap: 40px;
                    align-items: center;
                    padding: 32px;
                    background: var(--bg-app, #f8f9fa);
                    border-radius: 20px;
                    border: 1px solid rgba(0,0,0,0.02);
                }
                .wim-contrast-ratio-display {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    min-width: 140px;
                }
                .wim-contrast-ratio-value {
                    font-size: 48px;
                    font-weight: 900;
                    color: var(--text-primary);
                    line-height: 1;
                    margin-bottom: 4px;
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
                .wim-contrast-badge {
                    padding: 16px;
                    border-radius: 12px;
                    font-size: 14px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background: #fff;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.03);
                    border: 1px solid rgba(0,0,0,0.03);
                    transition: transform 0.2s ease;
                }
                .wim-contrast-badge:hover {
                    transform: translateY(-2px);
                }
                .wim-contrast-badge-label {
                    font-weight: 500;
                    color: var(--text-secondary);
                }
                .wim-contrast-badge-status {
                    font-weight: 800;
                    font-size: 11px;
                    padding: 4px 10px;
                    border-radius: 6px;
                    letter-spacing: 0.02em;
                }
                .wim-contrast-status-pass {
                    color: #fff;
                    background: #28a745;
                }
                .wim-contrast-status-fail {
                    color: #fff;
                    background: #dc3545;
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
                    transition: all 0.3s ease;
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
                `}),a.jsxs("div",{className:"wim-contrast-controls",children:[a.jsxs("div",{className:"wim-contrast-control",children:[a.jsx("label",{className:"wim-contrast-label",children:"Background"}),a.jsx(x,{value:e,onChange:n=>t(n.target.value),fullWidth:!0})]}),a.jsxs("div",{className:"wim-contrast-control",children:[a.jsx("label",{className:"wim-contrast-label",children:"Foreground"}),a.jsx(x,{value:s,onChange:n=>i(n.target.value),fullWidth:!0})]})]}),a.jsxs("div",{className:"wim-contrast-result",children:[a.jsxs("div",{className:"wim-contrast-ratio-display",children:[a.jsx("span",{className:"wim-contrast-ratio-value",children:r.toFixed(2)}),a.jsx("span",{className:"wim-contrast-ratio-unit",children:"Ratio"})]}),a.jsxs("div",{className:"wim-contrast-badges",children:[a.jsxs("div",{className:"wim-contrast-badge",children:[a.jsx("span",{className:"wim-contrast-badge-label",children:"Normal AA"}),a.jsx("span",{className:`wim-contrast-badge-status ${c?"wim-contrast-status-pass":"wim-contrast-status-fail"}`,children:c?"PASS":"FAIL"})]}),a.jsxs("div",{className:"wim-contrast-badge",children:[a.jsx("span",{className:"wim-contrast-badge-label",children:"Large AA"}),a.jsx("span",{className:`wim-contrast-badge-status ${p?"wim-contrast-status-pass":"wim-contrast-status-fail"}`,children:p?"PASS":"FAIL"})]}),a.jsxs("div",{className:"wim-contrast-badge",children:[a.jsx("span",{className:"wim-contrast-badge-label",children:"Normal AAA"}),a.jsx("span",{className:`wim-contrast-badge-status ${d?"wim-contrast-status-pass":"wim-contrast-status-fail"}`,children:d?"PASS":"FAIL"})]}),a.jsxs("div",{className:"wim-contrast-badge",children:[a.jsx("span",{className:"wim-contrast-badge-label",children:"Large AAA"}),a.jsx("span",{className:`wim-contrast-badge-status ${m?"wim-contrast-status-pass":"wim-contrast-status-fail"}`,children:m?"PASS":"FAIL"})]})]})]}),a.jsx("div",{className:"wim-contrast-preview-container",children:a.jsxs("div",{className:"wim-contrast-preview",style:{backgroundColor:e,color:s},children:[a.jsx("span",{className:"wim-contrast-preview-text-lg",children:"Design System Contrast Test"}),a.jsx("span",{className:"wim-contrast-preview-text-sm",children:"The quick brown fox jumps over the lazy dog."})]})})]})};h.__docgenInfo={description:"",methods:[],displayName:"ContrastChecker"};export{u as C,g as a,h as b};
