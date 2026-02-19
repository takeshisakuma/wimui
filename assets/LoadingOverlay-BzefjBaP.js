import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-D9XHfO_n.js";import{M as a,C as s,a as l}from"./index-Cd-aYZ4I.js";import{L as d,B as r,W as c,D as h,a as p,b as x,F as u,I as j,C as g}from"./LoadingOverlay.stories-BtBMTDUX.js";import"./iframe-fP2t0KdX.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BMgFwVVR.js";import"./index-CWwNwgZ0.js";import"./index-BARQtGDn.js";import"./index-CEIVxd0P.js";import"./index-BSm3OVH8.js";import"./index-D2M7vYEz.js";import"./Spinner-CsemYBJw.js";import"./Loader-DlmxROzM.js";import"./Button-DXg-VtQz.js";import"./Icon-BF9QZky0.js";import"./useTranslation-CQq2wPgL.js";function o(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:d}),`
`,e.jsx(n.h1,{id:"loadingoverlay",children:"LoadingOverlay"}),`
`,e.jsx(n.p,{children:"A component that overlays the entire screen or a specific element to display a loading state with customizable loaders, backdrops, and messages."}),`
`,e.jsx(n.h2,{id:"when-to-use",children:"When To Use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"When you need to block user interaction during asynchronous operations like data fetching or form submission."}),`
`,e.jsx(n.li,{children:"When you want to provide visual feedback that a process is ongoing."}),`
`,e.jsx(n.li,{children:"When you need a full-screen loading indicator for application initialization."}),`
`,e.jsx(n.li,{children:"When you want to overlay a specific section of the page during partial updates."}),`
`]}),`
`,e.jsx(n.h2,{id:"features",children:"Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Multiple Loader Types"}),": Choose from spinner, bars, dots, or pulse animations."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Customizable Backdrop"}),": Light or dark backdrop with adjustable blur effects."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Flexible Positioning"}),": Can be positioned absolutely within a container or fixed for full-screen coverage."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Optional Message"}),": Display a loading message to provide context to users."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Custom Content"}),": Replace the default loader with custom content."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Accessibility"}),": Includes proper ARIA attributes for screen readers."]}),`
`]}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"basic",children:"Basic"}),`
`,e.jsx(n.p,{children:"A simple loading overlay with the default spinner."}),`
`,e.jsx(s,{of:r}),`
`,e.jsx(n.h3,{id:"with-message",children:"With Message"}),`
`,e.jsx(n.p,{children:"Display a message along with the loading indicator."}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(n.h3,{id:"different-loader-types",children:"Different Loader Types"}),`
`,e.jsx(n.p,{children:"Choose from various loader animations: spinner, bars, dots, or pulse."}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.h3,{id:"backdrop-variants",children:"Backdrop Variants"}),`
`,e.jsx(n.p,{children:"Light and dark backdrop options for different background colors."}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h3,{id:"blur-effects",children:"Blur Effects"}),`
`,e.jsx(n.p,{children:"Control the backdrop blur intensity: none, sm, md, or lg."}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.h3,{id:"full-screen",children:"Full Screen"}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"fixed={true}"})," to create a full-screen loading overlay."]}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(n.h3,{id:"interactive",children:"Interactive"}),`
`,e.jsx(n.p,{children:"A practical example showing how to toggle the loading state."}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(n.h3,{id:"custom-loader",children:"Custom Loader"}),`
`,e.jsx(n.p,{children:"Provide custom content instead of the default loaders."}),`
`,e.jsx(s,{of:g}),`
`,e.jsx(n.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Use Sparingly"}),": Only show loading overlays when necessary to avoid disrupting the user experience."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Provide Context"}),": Include a message when the loading operation might take more than a few seconds."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Choose Appropriate Scope"}),": Use absolute positioning for partial page updates and fixed positioning for full-page operations."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Consider Backdrop"}),": Use light backdrops on dark backgrounds and vice versa for better visibility."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Timeout Handling"}),": Always implement timeout handling to prevent indefinite loading states."]}),`
`]}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The component includes ",e.jsx(n.code,{children:'role="status"'})," and ",e.jsx(n.code,{children:'aria-live="polite"'})," for screen reader announcements."]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:'aria-busy="true"'})," attribute indicates that the content is loading."]}),`
`,e.jsx(n.li,{children:"Ensure that loading messages are descriptive and helpful for users relying on assistive technologies."}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(l,{of:r})]})}function E(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(o,{...i})}):o(i)}export{E as default};
