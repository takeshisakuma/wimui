import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as m,R as j}from"./iframe-Cn_Cc_aV.js";import{P as t}from"./index-B3PBgNC4.js";import{I as N}from"./Icon-BWMCvi8p.js";const I=m.createContext(null),w=()=>{const r=m.useContext(I);if(!r)throw new Error("Accordion components must be used within an Accordion");return r},n=({type:r="single",defaultValue:i,value:s,onValueChange:l,collapsible:p=!0,className:o,children:A})=>{const[f,a]=m.useState(()=>i?Array.isArray(i)?i:[i]:[]),g=s!==void 0,d=g?Array.isArray(s)?s:[s]:f,C=m.useCallback(u=>{let c;r==="single"?d.includes(u)?c=p?[]:[u]:c=[u]:d.includes(u)?c=d.filter(x=>x!==u):c=[...d,u],g||a(c),l?.(r==="single"?c[0]:c)},[d,p,g,l,r]);return e.jsx(I.Provider,{value:{value:d,onValueChange:C,type:r},children:e.jsx("div",{className:["wim-accordion",o].filter(Boolean).join(" "),children:A})})},T=m.createContext(null),R=({value:r,disabled:i=!1,className:s,children:l})=>{const{value:p}=w(),o=p.includes(r),[A,f]=m.useState(o),[a,g]=m.useState(!1),d=j.useRef(o);j.useEffect(()=>{if(o!==d.current){if(o){g(!1);const c=setTimeout(()=>{f(!0)},10);return()=>clearTimeout(c)}else f(!1),g(!0);d.current=o}},[o]);const C=c=>{!o&&c.propertyName==="grid-template-rows"&&g(!1)},u=o||a;return e.jsx(T.Provider,{value:{value:r,disabled:i,isContentOpen:A},children:e.jsx("details",{open:u,onTransitionEnd:C,className:["wim-accordion__item",i?"wim-accordion__item--disabled":"",o?"wim-accordion__item--open":"",s].filter(Boolean).join(" "),children:l})})},_=({children:r,className:i,...s})=>{const{value:l,onValueChange:p}=w(),o=m.useContext(T);if(!o)throw new Error("AccordionTrigger must be used within AccordionItem");l.includes(o.value);const A=a=>{if(o.disabled){a.preventDefault();return}a.preventDefault(),p(o.value)},f=a=>{if(a.key==="Enter"||a.key===" "){if(o.disabled){a.preventDefault();return}a.preventDefault(),p(o.value)}};return e.jsxs("summary",{className:["wim-accordion__trigger",i].filter(Boolean).join(" "),onClick:A,onKeyDown:f,...s,children:[e.jsx("span",{className:"wim-accordion__trigger-content",children:r}),e.jsx(N,{name:"ChevronDownIcon",className:["wim-accordion__chevron",o.isContentOpen?"wim-accordion__chevron--open":""].join(" ")})]})},b=({children:r,className:i,...s})=>{const l=m.useContext(T);if(!l)throw new Error("AccordionContent must be used within AccordionItem");return e.jsx("div",{className:["wim-accordion__content",l.isContentOpen?"wim-accordion__content--open":"",i].filter(Boolean).join(" "),...s,children:e.jsx("div",{className:"wim-accordion__content-inner",children:r})})};n.Item=R;n.Trigger=_;n.Content=b;n.propTypes={type:t.oneOf(["single","multiple"]),defaultValue:t.oneOfType([t.string,t.arrayOf(t.string)]),value:t.oneOfType([t.string,t.arrayOf(t.string)]),onValueChange:t.func,collapsible:t.bool,className:t.string,children:t.node};n.__docgenInfo={description:"",methods:[{name:"Item",docblock:null,modifiers:["static"],params:[{name:"{ value, disabled = false, className, children }: AccordionItemProps",optional:!1,type:{name:"signature",type:"object",raw:`{\r
    value: string;\r
    disabled?: boolean;\r
    className?: string;\r
    children: React.ReactNode;\r
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"className",value:{name:"string",required:!1}},{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}}]},alias:"AccordionItemProps"}}],returns:null},{name:"Trigger",docblock:null,modifiers:["static"],params:[{name:`{\r
    children,\r
    className,\r
    ...props\r
}: React.ComponentPropsWithoutRef<"summary">`,optional:!1,type:{name:"ReactComponentPropsWithoutRef",raw:'React.ComponentPropsWithoutRef<"summary">',elements:[{name:"literal",value:'"summary"'}],alias:"React.ComponentPropsWithoutRef"}}],returns:null},{name:"Content",docblock:null,modifiers:["static"],params:[{name:`{\r
    children,\r
    className,\r
    ...props\r
}: React.ComponentPropsWithoutRef<"div">`,optional:!1,type:{name:"ReactComponentPropsWithoutRef",raw:'React.ComponentPropsWithoutRef<"div">',elements:[{name:"literal",value:'"div"'}],alias:"React.ComponentPropsWithoutRef"}}],returns:null}],displayName:"Accordion",props:{type:{required:!1,tsType:{name:"union",raw:'"single" | "multiple"',elements:[{name:"literal",value:'"single"'},{name:"literal",value:'"multiple"'}]},description:"",defaultValue:{value:'"single"',computed:!1},type:{name:"enum",value:[{value:'"single"',computed:!1},{value:'"multiple"',computed:!1}]}},defaultValue:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:"",type:{name:"union",value:[{name:"string"},{name:"arrayOf",value:{name:"string"}}]}},value:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:"",type:{name:"union",value:[{name:"string"},{name:"arrayOf",value:{name:"string"}}]}},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:"",type:{name:"func"}},collapsible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1},type:{name:"bool"}},className:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",type:{name:"node"}}}};R.__docgenInfo={description:"",methods:[],displayName:"AccordionItem",props:{value:{required:!0,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};_.__docgenInfo={description:"",methods:[],displayName:"AccordionTrigger"};b.__docgenInfo={description:"",methods:[],displayName:"AccordionContent"};const O={title:"Component/Data Display/Accordion",component:n,tags:[],argTypes:{type:{control:"select",options:["single","multiple"]},collapsible:{control:"boolean"}}},v={render:r=>e.jsxs(n,{...r,defaultValue:"item-1",children:[e.jsxs(n.Item,{value:"item-1",children:[e.jsx(n.Trigger,{children:"アコーディオン 1"}),e.jsx(n.Content,{children:"アコーディオン 1 のコンテンツです。デフォルトで開いています。"})]}),e.jsxs(n.Item,{value:"item-2",children:[e.jsx(n.Trigger,{children:"アコーディオン 2"}),e.jsx(n.Content,{children:"アコーディオン 2 のコンテンツです。"})]}),e.jsxs(n.Item,{value:"item-3",children:[e.jsx(n.Trigger,{children:"アコーディオン 3"}),e.jsx(n.Content,{children:"アコーディオン 3 のコンテンツです。"})]})]}),args:{type:"single",collapsible:!0}},h={render:r=>e.jsxs(n,{...r,children:[e.jsxs(n.Item,{value:"item-1",children:[e.jsx(n.Trigger,{children:"アコーディオン 1"}),e.jsx(n.Content,{children:"複数のアイテムを同時に開くことができます。"})]}),e.jsxs(n.Item,{value:"item-2",children:[e.jsx(n.Trigger,{children:"アコーディオン 2"}),e.jsx(n.Content,{children:"これは 2 つ目のアイテムです。"})]}),e.jsxs(n.Item,{value:"item-3",children:[e.jsx(n.Trigger,{children:"アコーディオン 3"}),e.jsx(n.Content,{children:"これは 3 つ目のアイテムです。"})]})]}),args:{type:"multiple"}},y={render:r=>e.jsxs(n,{...r,children:[e.jsxs(n.Item,{value:"item-1",children:[e.jsx(n.Trigger,{children:"有効なアイテム"}),e.jsx(n.Content,{children:"通常のアイテムです。"})]}),e.jsxs(n.Item,{value:"item-2",disabled:!0,children:[e.jsx(n.Trigger,{children:"無効なアイテム"}),e.jsx(n.Content,{children:"このコンテンツは見えません。"})]})]})};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <Accordion {...args} defaultValue="item-1">\r
            <Accordion.Item value="item-1">\r
                <Accordion.Trigger>アコーディオン 1</Accordion.Trigger>\r
                <Accordion.Content>\r
                    アコーディオン 1 のコンテンツです。デフォルトで開いています。\r
                </Accordion.Content>\r
            </Accordion.Item>\r
            <Accordion.Item value="item-2">\r
                <Accordion.Trigger>アコーディオン 2</Accordion.Trigger>\r
                <Accordion.Content>\r
                    アコーディオン 2 のコンテンツです。\r
                </Accordion.Content>\r
            </Accordion.Item>\r
            <Accordion.Item value="item-3">\r
                <Accordion.Trigger>アコーディオン 3</Accordion.Trigger>\r
                <Accordion.Content>\r
                    アコーディオン 3 のコンテンツです。\r
                </Accordion.Content>\r
            </Accordion.Item>\r
        </Accordion>,
  args: {
    type: "single",
    collapsible: true
  }
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <Accordion {...args}>\r
            <Accordion.Item value="item-1">\r
                <Accordion.Trigger>アコーディオン 1</Accordion.Trigger>\r
                <Accordion.Content>\r
                    複数のアイテムを同時に開くことができます。\r
                </Accordion.Content>\r
            </Accordion.Item>\r
            <Accordion.Item value="item-2">\r
                <Accordion.Trigger>アコーディオン 2</Accordion.Trigger>\r
                <Accordion.Content>\r
                    これは 2 つ目のアイテムです。\r
                </Accordion.Content>\r
            </Accordion.Item>\r
            <Accordion.Item value="item-3">\r
                <Accordion.Trigger>アコーディオン 3</Accordion.Trigger>\r
                <Accordion.Content>\r
                    これは 3 つ目のアイテムです。\r
                </Accordion.Content>\r
            </Accordion.Item>\r
        </Accordion>,
  args: {
    type: "multiple"
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <Accordion {...args}>\r
            <Accordion.Item value="item-1">\r
                <Accordion.Trigger>有効なアイテム</Accordion.Trigger>\r
                <Accordion.Content>通常のアイテムです。</Accordion.Content>\r
            </Accordion.Item>\r
            <Accordion.Item value="item-2" disabled>\r
                <Accordion.Trigger>無効なアイテム</Accordion.Trigger>\r
                <Accordion.Content>このコンテンツは見えません。</Accordion.Content>\r
            </Accordion.Item>\r
        </Accordion>
}`,...y.parameters?.docs?.source}}};const q=["Single","Multiple","Disabled"],E=Object.freeze(Object.defineProperty({__proto__:null,Disabled:y,Multiple:h,Single:v,__namedExportsOrder:q,default:O},Symbol.toStringTag,{value:"Module"}));export{E as A,y as D,h as M,v as S};
