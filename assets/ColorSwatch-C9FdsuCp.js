"use client";
import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,cr as i,xr as a}from"./iframe-DiXuc7DI.js";import{Xr as o,Zr as s}from"./src-BE5jBQ9L.js";var c,l,u,d,f,p,m,h=e((()=>{c=t(n(),1),a(),s(),l=i(),u=`WIM_SIGNAL_COLOR_CHANGE`,d=e=>{if(!e)return`#000000`;if(e.startsWith(`#`)){let t=e.slice(1);if(t.length===3||t.length===4)return`#${t[0]}${t[0]}${t[1]}${t[1]}${t[2]}${t[2]}`;if(t.length===8)return`#${t.slice(0,6)}`;if(t.length===6)return e}if(typeof document<`u`){let t=document.createElement(`div`);t.style.color=e,t.style.display=`none`,document.body.appendChild(t);let n=getComputedStyle(t).color;document.body.removeChild(t);let r=n.match(/\d+/g);if(r&&r.length>=3)return`#${parseInt(r[0]).toString(16).padStart(2,`0`)}${parseInt(r[1]).toString(16).padStart(2,`0`)}${parseInt(r[2]).toString(16).padStart(2,`0`)}`}return e},f=e=>{let t=d(e),n=t.startsWith(`#`)?t.slice(1):t;if(n.length!==7&&n.length!==6){if(n.length===3||n.length===4&&t.startsWith(`#`)){let e=+(n.length===4),t=parseInt(n[e]+n[e],16)/255,r=parseInt(n[e+1]+n[e+1],16)/255,i=parseInt(n[e+2]+n[e+2],16)/255,a=e=>e<=.03928?e/12.92:((e+.055)/1.055)**2.4;return .2126*a(t)+.7152*a(r)+.0722*a(i)}return 0}let r=+(n.length===7),i=parseInt(n.substring(r,r+2),16)/255,a=parseInt(n.substring(r+2,r+4),16)/255,o=parseInt(n.substring(r+4,r+6),16)/255,s=e=>e<=.03928?e/12.92:((e+.055)/1.055)**2.4;return .2126*s(i)+.7152*s(a)+.0722*s(o)},p=(e,t)=>{let n=f(e),r=f(t),i=Math.max(n,r),a=Math.min(n,r);return(i+.05)/(a+.05)},m=()=>{let{t:e}=r(),[t,n]=(0,c.useState)(`var(--wim-color-primary)`),[i,a]=(0,c.useState)(`var(--wim-color-text-on-primary)`),s=(0,c.useMemo)(()=>d(t),[t]),f=(0,c.useMemo)(()=>d(i),[i]),m=(0,c.useMemo)(()=>p(s,f),[s,f]);(0,c.useEffect)(()=>{let e=e=>{let t=e.detail;t?.type===`bg`&&n(t.value),t?.type===`fg`&&a(t.value)};return window.addEventListener(u,e),()=>window.removeEventListener(u,e)},[]);let h=m>=4.5,g=m>=3;return(0,l.jsxs)(`div`,{className:`wim-contrast-checker`,children:[(0,l.jsx)(`style`,{children:`
                .wim-contrast-checker {
                    padding: 32px;
                    border: 1px solid var(--wim-color-border, rgba(0,0,0,0.1));
                    border-radius: 24px;
                    background: var(--wim-color-surface, #fff);
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
                    color: var(--wim-color-text-tertiary, #999);
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
                    background: var(--wim-color-surface);
                    color: var(--wim-color-text-primary);
                    width: 100%;
                }
                .wim-contrast-result {
                    display: flex;
                    gap: 40px;
                    align-items: center;
                    padding: 32px;
                    background: var(--wim-color-surface);
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
                    color: var(--wim-color-text-primary);
                    line-height: 1;
                }
                .wim-contrast-ratio-unit {
                    font-size: 12px;
                    font-weight: 600;
                    color: var(--wim-color-text-tertiary);
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
                    background: var(--wim-color-surface);
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
                    width: 120px !important;
                    flex: 0 0 auto;
                }
                `}),(0,l.jsxs)(`div`,{className:`wim-contrast-controls`,children:[(0,l.jsxs)(`div`,{className:`wim-contrast-control`,children:[(0,l.jsx)(`label`,{htmlFor:`bg-input`,className:`wim-contrast-label`,children:`Background`}),(0,l.jsxs)(`div`,{className:`wim-contrast-inputs`,children:[(0,l.jsx)(o,{value:s,onChange:e=>n(e.target.value),className:`wim-contrast-color-picker`}),(0,l.jsx)(`input`,{id:`bg-input`,className:`wim-text-input`,value:t,onChange:e=>n(e.target.value),placeholder:`#000000 or var(...)`})]})]}),(0,l.jsxs)(`div`,{className:`wim-contrast-control`,children:[(0,l.jsx)(`label`,{htmlFor:`fg-input`,className:`wim-contrast-label`,children:`Foreground`}),(0,l.jsxs)(`div`,{className:`wim-contrast-inputs`,children:[(0,l.jsx)(o,{value:f,onChange:e=>a(e.target.value),className:`wim-contrast-color-picker`}),(0,l.jsx)(`input`,{id:`fg-input`,className:`wim-text-input`,value:i,onChange:e=>a(e.target.value),placeholder:`#ffffff or var(...)`})]})]})]}),(0,l.jsxs)(`div`,{className:`wim-contrast-result`,children:[(0,l.jsxs)(`div`,{className:`wim-contrast-ratio-display`,children:[(0,l.jsx)(`span`,{className:`wim-contrast-ratio-value`,children:m.toFixed(2)}),(0,l.jsx)(`span`,{className:`wim-contrast-ratio-unit`,children:`Ratio`})]}),(0,l.jsxs)(`div`,{className:`wim-contrast-badges`,children:[(0,l.jsxs)(`div`,{className:`wim-contrast-badge`,children:[(0,l.jsx)(`span`,{children:e(`doc.contrast_normal_text`)}),(0,l.jsx)(`span`,{className:`wim-contrast-badge-status ${h?`wim-contrast-status-pass`:`wim-contrast-status-fail`}`,children:h?`PASS (AA)`:`FAIL (AA)`})]}),(0,l.jsxs)(`div`,{className:`wim-contrast-badge`,children:[(0,l.jsx)(`span`,{children:e(`doc.contrast_large_text`)}),(0,l.jsx)(`span`,{className:`wim-contrast-badge-status ${g?`wim-contrast-status-pass`:`wim-contrast-status-fail`}`,children:g?`PASS (AA)`:`FAIL (AA)`})]})]})]}),(0,l.jsx)(`div`,{className:`wim-contrast-preview-container`,children:(0,l.jsxs)(`div`,{className:`wim-contrast-preview`,style:{backgroundColor:s,color:f},children:[(0,l.jsx)(`span`,{className:`wim-contrast-preview-text-lg`,children:`Design System Contrast Test`}),(0,l.jsx)(`span`,{className:`wim-contrast-preview-text-sm`,children:`The quick brown fox jumps over the lazy dog.`})]})})]})},m.__docgenInfo={description:``,methods:[],displayName:`ContrastChecker`}})),g,_,v,y=e((()=>{n(),h(),g=i(),_=({name:e,value:t,color:n,foreground:r,children:i,variant:a=`card`})=>{let o=e=>{let r=t||n;r.startsWith(`--`)&&(r=`var(${r})`);let i=new CustomEvent(u,{detail:{type:e,value:r}});window.dispatchEvent(i)};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(`style`,{children:`
        .wim-swatch-card {
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid var(--wim-color-border, #e5e5e5);
          background: var(--wim-color-surface, #fff);
          display: flex;
          flex-direction: column;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }
        .wim-swatch-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.08);
          border-color: var(--wim-color-primary, #007aff);
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
        /* MDX may wrap children in <p>; inherit preview foreground over docs p color */
        .wim-swatch-card-preview .contrast-label,
        .wim-swatch-card-preview p {
          color: inherit;
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
          color: var(--wim-color-text-primary, #1a1a1a);
        }
        .wim-swatch-value {
          font-family: "Cascadia Code", "Fira Code", monospace;
          font-size: 12px;
          color: var(--wim-color-text-secondary, #666);
          background: var(--wim-color-surface-app, #f5f5f5);
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
          background: var(--wim-color-primary, #007aff);
          color: #fff;
          border-color: var(--wim-color-primary, #007aff);
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
          color: var(--wim-color-text-tertiary, #999);
          word-break: break-all;
          max-width: 100%;
        }
      `}),a===`card`?(0,g.jsxs)(`div`,{className:`wim-swatch-card`,children:[(0,g.jsxs)(`div`,{className:`wim-swatch-actions`,children:[(0,g.jsx)(`button`,{className:`wim-swatch-action-btn`,onClick:e=>{e.stopPropagation(),o(`bg`)},children:`BG`}),(0,g.jsx)(`button`,{className:`wim-swatch-action-btn`,onClick:e=>{e.stopPropagation(),o(`fg`)},children:`FG`})]}),(0,g.jsx)(`div`,{className:`wim-swatch-card-preview`,style:{background:n,color:r},children:i??(r?(0,g.jsx)(`span`,{className:`contrast-label`,children:`Text`}):null)}),(0,g.jsxs)(`div`,{className:`wim-swatch-card-info`,children:[e&&(0,g.jsx)(`span`,{className:`wim-swatch-name`,children:e}),t&&(0,g.jsx)(`span`,{className:`wim-swatch-value`,children:t})]})]}):(0,g.jsxs)(`div`,{className:`wim-swatch-square-wrapper`,children:[(0,g.jsxs)(`div`,{className:`wim-swatch-actions`,style:{top:`-8px`,right:`-4px`},children:[(0,g.jsx)(`button`,{className:`wim-swatch-action-btn`,onClick:e=>{e.stopPropagation(),o(`bg`)},children:`BG`}),(0,g.jsx)(`button`,{className:`wim-swatch-action-btn`,onClick:e=>{e.stopPropagation(),o(`fg`)},children:`FG`})]}),(0,g.jsx)(`div`,{className:`wim-swatch-square`,style:{background:n},title:t||e||n,children:i}),(e||t)&&(0,g.jsx)(`span`,{className:`wim-swatch-square-label`,children:e||t})]})]})},v=({children:e,variant:t=`card`})=>(0,g.jsx)(`div`,{style:{display:`grid`,...t===`card`?{gridTemplateColumns:`repeat(auto-fill, minmax(200px, 1fr))`,gap:`24px`}:{gridTemplateColumns:`repeat(auto-fill, minmax(80px, 1fr))`,gap:`16px`},marginTop:`24px`,marginBottom:`40px`},children:e}),_.__docgenInfo={description:``,methods:[],displayName:`ColorSwatch`,props:{name:{required:!1,tsType:{name:`string`},description:`Color name displayed in the card`},value:{required:!1,tsType:{name:`string`},description:`Color value or variable name displayed in the card`},color:{required:!0,tsType:{name:`string`},description:`The actual color (CSS variable, hex, etc.)`},foreground:{required:!1,tsType:{name:`string`},description:"Foreground color for preview content (e.g. text-on-* demos).\nApplied on the preview surface so MDX-wrapped `<p>` children can inherit\ninstead of picking up docs `p { color: ... !important }` rules."},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Text or element to display on top of the color swatch`},variant:{required:!1,tsType:{name:`union`,raw:`"card" | "square"`,elements:[{name:`literal`,value:`"card"`},{name:`literal`,value:`"square"`}]},description:`Variant of the swatch`,defaultValue:{value:`"card"`,computed:!1}}}},v.__docgenInfo={description:``,methods:[],displayName:`ColorGrid`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`"card" | "square"`,elements:[{name:`literal`,value:`"card"`},{name:`literal`,value:`"square"`}]},description:``,defaultValue:{value:`"card"`,computed:!1}}}}}));export{h as a,m as i,_ as n,y as r,v as t};