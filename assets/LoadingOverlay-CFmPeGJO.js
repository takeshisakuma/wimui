import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-CmxFiERU.js";import{M as d,C as n,a as l}from"./blocks-C-hgfApg.js";import{L as a,B as r,W as c,D as h,a as x,b as j,F as p,I as u,C as f}from"./LoadingOverlay.stories-DHYRZsrt.js";import"./iframe-DucY8PCr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-lsUD8MDW.js";import"./index-C_Vr7lCO.js";import"./index-BULwwhUN.js";import"./index-CpnJMwY8.js";import"./index-CYKEKBJn.js";import"./Spinner-BS2LAyRR.js";import"./Loader-zxdq1se4.js";import"./Button-Bu6XmuGh.js";import"./Icon-c5HKz7ru.js";import"./useTranslation-Cfa0KY3M.js";function t(i){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:a}),`
`,e.jsx(s.h1,{id:"loadingoverlay",children:"LoadingOverlay"}),`
`,e.jsx(s.p,{children:"A component that overlays the entire screen or a specific element to display a loading state with customizable loaders, backdrops, and messages."}),`
`,e.jsx(s.h2,{id:"when-to-use",children:"When To Use"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"When you need to block user interaction during asynchronous operations like data fetching or form submission."}),`
`,e.jsx(s.li,{children:"When you want to provide visual feedback that a process is ongoing."}),`
`,e.jsx(s.li,{children:"When you need a full-screen loading indicator for application initialization."}),`
`,e.jsx(s.li,{children:"When you want to overlay a specific section of the page during partial updates."}),`
`]}),`
`,e.jsx(s.h2,{id:"features",children:"Features"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Feature"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Multiple Loader Types"})}),e.jsx("td",{children:"Choose from spinner, bars, dots, or pulse animations."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Customizable Backdrop"})}),e.jsx("td",{children:"Light or dark backdrop with adjustable blur effects."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Flexible Positioning"})}),e.jsx("td",{children:"Can be positioned absolutely within a container or fixed for full-screen coverage."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Optional Message"})}),e.jsx("td",{children:"Display a loading message to provide context to users."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Custom Content"})}),e.jsx("td",{children:"Replace the default loader with custom content."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Accessibility"})}),e.jsx("td",{children:"Includes proper ARIA attributes for screen readers."})]})]})]}),`
`,e.jsx(s.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(s.h3,{id:"basic",children:"Basic"}),`
`,e.jsx(s.p,{children:"A simple loading overlay with the default spinner."}),`
`,e.jsx(n,{of:r}),`
`,e.jsx(s.h3,{id:"with-message",children:"With Message"}),`
`,e.jsx(s.p,{children:"Display a message along with the loading indicator."}),`
`,e.jsx(n,{of:c}),`
`,e.jsx(s.h3,{id:"different-loader-types",children:"Different Loader Types"}),`
`,e.jsx(s.p,{children:"Choose from various loader animations: spinner, bars, dots, or pulse."}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(s.h3,{id:"backdrop-variants",children:"Backdrop Variants"}),`
`,e.jsx(s.p,{children:"Light and dark backdrop options for different background colors."}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(s.h3,{id:"blur-effects",children:"Blur Effects"}),`
`,e.jsx(s.p,{children:"Control the backdrop blur intensity: none, sm, md, or lg."}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(s.h3,{id:"full-screen",children:"Full Screen"}),`
`,e.jsxs(s.p,{children:["Use ",e.jsx(s.code,{children:"fixed={true}"})," to create a full-screen loading overlay."]}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(s.h3,{id:"interactive",children:"Interactive"}),`
`,e.jsx(s.p,{children:"A practical example showing how to toggle the loading state."}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(s.h3,{id:"custom-loader",children:"Custom Loader"}),`
`,e.jsx(s.p,{children:"Provide custom content instead of the default loaders."}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(s.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Best Practice"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Use Sparingly"})}),e.jsx("td",{children:"Only show loading overlays when necessary to avoid disrupting the user experience."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Provide Context"})}),e.jsx("td",{children:"Include a message when the loading operation might take more than a few seconds."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Choose Appropriate Scope"})}),e.jsx("td",{children:"Use absolute positioning for partial page updates and fixed positioning for full-page operations."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Consider Backdrop"})}),e.jsx("td",{children:"Use light backdrops on dark backgrounds and vice versa for better visibility."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Timeout Handling"})}),e.jsx("td",{children:"Always implement timeout handling to prevent indefinite loading states."})]})]})]}),`
`,e.jsx(s.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["The component includes ",e.jsx(s.code,{children:'role="status"'})," and ",e.jsx(s.code,{children:'aria-live="polite"'})," for screen reader announcements."]}),`
`,e.jsxs(s.li,{children:["The ",e.jsx(s.code,{children:'aria-busy="true"'})," attribute indicates that the content is loading."]}),`
`,e.jsx(s.li,{children:"Ensure that loading messages are descriptive and helpful for users relying on assistive technologies."}),`
`]}),`
`,e.jsx(s.h2,{id:"props",children:"Props"}),`
`,e.jsx(l,{of:r})]})}function I(i={}){const{wrapper:s}={...o(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(t,{...i})}):t(i)}export{I as default};
