import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Cl4Pv_I0.js";import{M as l}from"./blocks-D96ijgRs.js";import{T as s}from"./T-CBEvO_ht.js";import"./iframe-C80AEei6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-u04oYgkM.js";import"./index-ByeO4eTZ.js";import"./index-BAf6R9zl.js";import"./index-VVQVh2nq.js";import"./i18nConstants-BpHxieg5.js";import"./useTranslation-Cpo6ITo8.js";function r(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Architecture/Internal Core Components"}),`
`,e.jsx(n.h1,{id:"",children:e.jsx(s,{k:"guide_internal_title"})}),`
`,e.jsx("p",{children:e.jsx(s,{k:"guide_internal_desc"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-1",children:e.jsx(s,{k:"internal_philosophy_title"})}),`
`,e.jsx("p",{children:e.jsx(s,{k:"internal_philosophy_desc"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-2",children:e.jsx(s,{k:"cat_internal"})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Component"}),e.jsx("th",{children:"Role"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.strong,{children:e.jsx(s,{k:"internal_comp_field_template_title"})})}),e.jsx("td",{children:e.jsx(s,{k:"internal_comp_field_template_role"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.strong,{children:e.jsx(s,{k:"internal_comp_input_base_title"})})}),e.jsx("td",{children:e.jsx(s,{k:"internal_comp_input_base_role"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.strong,{children:e.jsx(s,{k:"internal_comp_overlay_base_title"})})}),e.jsx("td",{children:e.jsx(s,{k:"internal_comp_overlay_base_role"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.strong,{children:e.jsx(s,{k:"internal_comp_base_list_title"})})}),e.jsx("td",{children:e.jsx(s,{k:"internal_comp_base_list_role"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.strong,{children:e.jsx(s,{k:"internal_comp_indicator_base_title"})})}),e.jsx("td",{children:e.jsx(s,{k:"internal_comp_indicator_base_role"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.strong,{children:e.jsx(s,{k:"internal_comp_status_content_title"})})}),e.jsx("td",{children:e.jsx(s,{k:"internal_comp_status_content_role"})})]})]})]}),`
`,e.jsx(n.h3,{id:"fieldtemplate",children:"FieldTemplate"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"FieldTemplate"})," provides a consistent structure for form fields, handling:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Label"}),": Automatic integration with ",e.jsx(n.code,{children:"Label"})," component."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Error"}),": Integrated ",e.jsx(n.code,{children:"FieldError"})," display when an error message is provided."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Required"}),": Visual indication of required fields."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Layout"}),": Support for vertical (default) and horizontal layouts."]}),`
`]}),`
`,e.jsx(n.h3,{id:"inputbase",children:"InputBase"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"InputBase"})," is the visual shell for all text-style inputs. It handles:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Icons"}),": Named slots for ",e.jsx(n.code,{children:"leftIcon"})," and ",e.jsx(n.code,{children:"rightIcons"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Clear Button"}),": Automatic display of a clear icon when ",e.jsx(n.code,{children:"allowClear"})," and ",e.jsx(n.code,{children:"hasValue"})," are true."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Status"}),": Visual feedback for ",e.jsx(n.code,{children:"error"})," and ",e.jsx(n.code,{children:"disabled"})," states."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Width"}),": Flexible width control (XS to XL or custom values)."]}),`
`]}),`
`,e.jsx(n.h3,{id:"overlaybase",children:"OverlayBase"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"OverlayBase"})," is the foundation for floating UI elements like Dialogs and Drawers. It manages:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Portals"}),": Ensures the component renders outside the main DOM tree to avoid z-index issues."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Backdrop"}),": Handles the darkened background (Overlay) and its click-to-close behavior."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Focus Management"}),": Integrated with ",e.jsx(n.code,{children:"FocusTrap"})," to prevent focus from escaping the modal."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Transistions"}),": Provides standardized entry/exit animations."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Performance"}),": Uses ",e.jsx(n.code,{children:"will-change: transform"})," for high-frequency animations (like ",e.jsx(n.code,{children:"Marquee"})," and ",e.jsx(n.code,{children:"Carousel"}),") to ensure 60fps performance by offloading to the GPU."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"performance-tips",children:"Performance Tips"}),`
`,e.jsxs(n.h3,{id:"-animation-optimization-will-change",children:["⚡ Animation Optimization (",e.jsx(n.code,{children:"will-change"}),")"]}),`
`,e.jsxs(n.p,{children:["For components that involve continuous or complex animations, we use the ",e.jsx(n.code,{children:"will-change"})," CSS property. This hints to the browser that an element will be animated, allowing it to optimize ahead of time."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Used in"}),": ",e.jsx(n.code,{children:"Marquee"}),", ",e.jsx(n.code,{children:"Carousel"}),", ",e.jsx(n.code,{children:"Skeleton"}),", ",e.jsx(n.code,{children:"Icon"})," (loading state), ",e.jsx(n.code,{children:"BottomSheet"}),", ",e.jsx(n.code,{children:"Tooltip"}),", ",e.jsx(n.code,{children:"Switch"}),", ",e.jsx(n.code,{children:"Sidebar"}),", ",e.jsx(n.code,{children:"Accordion"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Micro-interactions"}),": We also apply this to small but frequent interactions like ",e.jsx(n.code,{children:"Switch"})," toggles and ",e.jsx(n.code,{children:"Accordion"})," expansions to ensure zero-lag feedback."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Note"}),": Use sparingly, as it consumes memory and GPU resources. Avoid over-using on many small elements simultaneously."]}),`
`]}),`
`,e.jsxs(n.h3,{id:"️-critical-resource-loading-priority",children:["🖼️ Critical Resource Loading (",e.jsx(n.code,{children:"priority"}),")"]}),`
`,e.jsxs(n.p,{children:["In the ",e.jsx(n.code,{children:"Image"})," component, we've introduced a ",e.jsx(n.code,{children:"priority"})," prop. When set to ",e.jsx(n.code,{children:"true"}),", it applies ",e.jsx(n.code,{children:'fetchpriority="high"'})," to the underlying ",e.jsx(n.code,{children:"img"})," tag."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"When to use"}),": For the largest image above the fold (LCP - Largest Contentful Paint)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Benefit"}),": Tells the browser to prioritize this image over other non-critical resources."]}),`
`]}),`
`,e.jsx(n.hr,{})]})}function f(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{f as default};
