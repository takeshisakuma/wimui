import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as l,R as j}from"./iframe-Dv7uN4wz.js";import{P as t}from"./index-2o_Xs7SK.js";import{I as N}from"./Icon-Bm4tcZho.js";const I=l.createContext(null),R=()=>{const r=l.useContext(I);if(!r)throw new Error("Accordion components must be used within an Accordion");return r},n=({type:r="single",defaultValue:i,value:a,onValueChange:c,collapsible:u=!0,className:o,children:g})=>{const[d,y]=l.useState(()=>i?Array.isArray(i)?i:[i]:[]),A=a!==void 0,s=A?Array.isArray(a)?a:[a]:d,x=l.useCallback(p=>{let m;r==="single"?s.includes(p)?m=u?[]:[p]:m=[p]:s.includes(p)?m=s.filter(T=>T!==p):m=[...s,p],A||y(m),c?.(r==="single"?m[0]:m)},[s,u,A,c,r]);return e.jsx(I.Provider,{value:{value:s,onValueChange:x,type:r},children:e.jsx("div",{className:["wim-accordion",o].filter(Boolean).join(" "),children:g})})},C=l.createContext(null),w=({value:r,disabled:i=!1,className:a,children:c})=>{const{value:u}=R(),o=u.includes(r),[g,d]=l.useState(!1),y=j.useRef(o);j.useEffect(()=>{y.current!==o&&d(!0),y.current=o},[o]);const A=x=>{o||d(!1)},s=o||g;return e.jsx(C.Provider,{value:{value:r,disabled:i,isVisualOpen:s},children:e.jsx("details",{open:s,onTransitionEnd:A,className:["wim-accordion__item",i?"wim-accordion__item--disabled":"",o?"wim-accordion__item--open":"",a].filter(Boolean).join(" "),children:c})})},_=({children:r,className:i,...a})=>{const{value:c,onValueChange:u}=R(),o=l.useContext(C);if(!o)throw new Error("AccordionTrigger must be used within AccordionItem");c.includes(o.value);const g=d=>{if(o.disabled){d.preventDefault();return}d.preventDefault(),u(o.value)};return e.jsxs("summary",{className:["wim-accordion__trigger",i].filter(Boolean).join(" "),onClick:g,...a,children:[e.jsx("span",{className:"wim-accordion__trigger-content",children:r}),e.jsx(N,{name:"ChevronDownIcon",className:["wim-accordion__chevron",o.isVisualOpen?"wim-accordion__chevron--open":""].join(" ")})]})},b=({children:r,className:i,...a})=>{const c=l.useContext(C);if(!c)throw new Error("AccordionContent must be used within AccordionItem");return e.jsx("div",{className:["wim-accordion__content",c.isVisualOpen?"wim-accordion__content--open":"",i].filter(Boolean).join(" "),...a,children:e.jsx("div",{className:"wim-accordion__content-inner",children:r})})};n.Item=w;n.Trigger=_;n.Content=b;n.propTypes={type:t.oneOf(["single","multiple"]),defaultValue:t.oneOfType([t.string,t.arrayOf(t.string)]),value:t.oneOfType([t.string,t.arrayOf(t.string)]),onValueChange:t.func,collapsible:t.bool,className:t.string,children:t.node};n.__docgenInfo={description:"",methods:[{name:"Item",docblock:null,modifiers:["static"],params:[{name:"{ value, disabled = false, className, children }: AccordionItemProps",optional:!1,type:{name:"signature",type:"object",raw:`{\r
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
}: React.ComponentPropsWithoutRef<"div">`,optional:!1,type:{name:"ReactComponentPropsWithoutRef",raw:'React.ComponentPropsWithoutRef<"div">',elements:[{name:"literal",value:'"div"'}],alias:"React.ComponentPropsWithoutRef"}}],returns:null}],displayName:"Accordion",props:{type:{required:!1,tsType:{name:"union",raw:'"single" | "multiple"',elements:[{name:"literal",value:'"single"'},{name:"literal",value:'"multiple"'}]},description:"",defaultValue:{value:'"single"',computed:!1},type:{name:"enum",value:[{value:'"single"',computed:!1},{value:'"multiple"',computed:!1}]}},defaultValue:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:"",type:{name:"union",value:[{name:"string"},{name:"arrayOf",value:{name:"string"}}]}},value:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:"",type:{name:"union",value:[{name:"string"},{name:"arrayOf",value:{name:"string"}}]}},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:"",type:{name:"func"}},collapsible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1},type:{name:"bool"}},className:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",type:{name:"node"}}}};w.__docgenInfo={description:"",methods:[],displayName:"AccordionItem",props:{value:{required:!0,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};_.__docgenInfo={description:"",methods:[],displayName:"AccordionTrigger"};b.__docgenInfo={description:"",methods:[],displayName:"AccordionContent"};const O={title:"Component/Content Containers/Accordion",component:n,tags:[],argTypes:{type:{control:"select",options:["single","multiple"]},collapsible:{control:"boolean"}}},f={render:r=>e.jsxs(n,{...r,defaultValue:"item-1",children:[e.jsxs(n.Item,{value:"item-1",children:[e.jsx(n.Trigger,{children:"アコーディオン 1"}),e.jsx(n.Content,{children:"アコーディオン 1 のコンテンツです。デフォルトで開いています。"})]}),e.jsxs(n.Item,{value:"item-2",children:[e.jsx(n.Trigger,{children:"アコーディオン 2"}),e.jsx(n.Content,{children:"アコーディオン 2 のコンテンツです。"})]}),e.jsxs(n.Item,{value:"item-3",children:[e.jsx(n.Trigger,{children:"アコーディオン 3"}),e.jsx(n.Content,{children:"アコーディオン 3 のコンテンツです。"})]})]}),args:{type:"single",collapsible:!0}},h={render:r=>e.jsxs(n,{...r,children:[e.jsxs(n.Item,{value:"item-1",children:[e.jsx(n.Trigger,{children:"アコーディオン 1"}),e.jsx(n.Content,{children:"複数のアイテムを同時に開くことができます。"})]}),e.jsxs(n.Item,{value:"item-2",children:[e.jsx(n.Trigger,{children:"アコーディオン 2"}),e.jsx(n.Content,{children:"これは 2 つ目のアイテムです。"})]}),e.jsxs(n.Item,{value:"item-3",children:[e.jsx(n.Trigger,{children:"アコーディオン 3"}),e.jsx(n.Content,{children:"これは 3 つ目のアイテムです。"})]})]}),args:{type:"multiple"}},v={render:r=>e.jsxs(n,{...r,children:[e.jsxs(n.Item,{value:"item-1",children:[e.jsx(n.Trigger,{children:"有効なアイテム"}),e.jsx(n.Content,{children:"通常のアイテムです。"})]}),e.jsxs(n.Item,{value:"item-2",disabled:!0,children:[e.jsx(n.Trigger,{children:"無効なアイテム"}),e.jsx(n.Content,{children:"このコンテンツは見えません。"})]})]})};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};const q=["Single","Multiple","Disabled"],E=Object.freeze(Object.defineProperty({__proto__:null,Disabled:v,Multiple:h,Single:f,__namedExportsOrder:q,default:O},Symbol.toStringTag,{value:"Module"}));export{E as A,v as D,h as M,f as S};
