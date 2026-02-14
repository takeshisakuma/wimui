import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as d,R as I}from"./iframe-CEIkfnXS.js";import{c as C}from"./index-CJJF6OTK.js";import{I as N}from"./Icon-UxSqIqEA.js";const j=d.createContext(null),w=()=>{const r=d.useContext(j);if(!r)throw new Error("Accordion components must be used within an Accordion");return r},n=({type:r="single",defaultValue:i,value:c,onValueChange:l,collapsible:s=!0,className:t,children:g})=>{const[o,v]=d.useState(()=>i?Array.isArray(i)?i:[i]:[]),u=c!==void 0,m=d.useMemo(()=>u?Array.isArray(c)?c:[c]:o,[u,c,o]),y=d.useCallback(p=>{let a;r==="single"?m.includes(p)?a=s?[]:[p]:a=[p]:m.includes(p)?a=m.filter(T=>T!==p):a=[...m,p],u||v(a),l?.(r==="single"?a[0]:a)},[m,s,u,l,r]);return e.jsx(j.Provider,{value:{value:m,onValueChange:y,type:r},children:e.jsx("div",{className:C("wim-accordion",t),children:g})})},x=d.createContext(null),R=({value:r,disabled:i=!1,className:c,children:l})=>{const{value:s}=w(),t=s.includes(r),[g,o]=d.useState(t),[v,u]=d.useState(!1),m=I.useRef(t);I.useEffect(()=>{if(t!==m.current){if(t){u(!1);const a=setTimeout(()=>{o(!0)},10);return()=>clearTimeout(a)}else o(!1),u(!0);m.current=t}},[t]);const y=a=>{!t&&a.propertyName==="grid-template-rows"&&u(!1)},p=t||v;return e.jsx(x.Provider,{value:{value:r,disabled:i,isContentOpen:g},children:e.jsx("details",{open:p,onTransitionEnd:y,className:C("wim-accordion__item",i&&"wim-accordion__item--disabled",t&&"wim-accordion__item--open",c),children:l})})},_=({children:r,className:i,...c})=>{const{onValueChange:l}=w(),s=d.useContext(x);if(!s)throw new Error("AccordionTrigger must be used within AccordionItem");const t=o=>{if(s.disabled){o.preventDefault();return}o.preventDefault(),l(s.value)},g=o=>{if(o.key==="Enter"||o.key===" "){if(s.disabled){o.preventDefault();return}o.preventDefault(),l(s.value)}};return e.jsxs("summary",{className:C("wim-accordion__trigger",i),onClick:t,onKeyDown:g,...c,children:[e.jsx("span",{className:"wim-accordion__trigger-content",children:r}),e.jsx(N,{name:"ChevronDownIcon",className:C("wim-accordion__chevron",s.isContentOpen&&"wim-accordion__chevron--open")})]})},b=({children:r,className:i,...c})=>{const l=d.useContext(x);if(!l)throw new Error("AccordionContent must be used within AccordionItem");return e.jsx("div",{className:C("wim-accordion__content",l.isContentOpen&&"wim-accordion__content--open",i),...c,children:e.jsx("div",{className:"wim-accordion__content-inner",children:r})})};n.Item=R;n.Trigger=_;n.Content=b;n.__docgenInfo={description:"",methods:[{name:"Item",docblock:null,modifiers:["static"],params:[{name:"{ value, disabled = false, className, children }: AccordionItemProps",optional:!1,type:{name:"signature",type:"object",raw:`{\r
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
}: React.ComponentPropsWithoutRef<"div">`,optional:!1,type:{name:"ReactComponentPropsWithoutRef",raw:'React.ComponentPropsWithoutRef<"div">',elements:[{name:"literal",value:'"div"'}],alias:"React.ComponentPropsWithoutRef"}}],returns:null}],displayName:"Accordion",props:{type:{required:!1,tsType:{name:"union",raw:'"single" | "multiple"',elements:[{name:"literal",value:'"single"'},{name:"literal",value:'"multiple"'}]},description:"",defaultValue:{value:'"single"',computed:!1}},defaultValue:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},value:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | string[]) => void",signature:{arguments:[{type:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},name:"value"}],return:{name:"void"}}},description:""},collapsible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};R.__docgenInfo={description:"",methods:[],displayName:"AccordionItem",props:{value:{required:!0,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};_.__docgenInfo={description:"",methods:[],displayName:"AccordionTrigger"};b.__docgenInfo={description:"",methods:[],displayName:"AccordionContent"};const q={title:"Component/Data Display/Accordion",component:n,tags:[],argTypes:{type:{control:"select",options:["single","multiple"]},collapsible:{control:"boolean"}}},A={render:r=>e.jsxs(n,{...r,defaultValue:"item-1",children:[e.jsxs(n.Item,{value:"item-1",children:[e.jsx(n.Trigger,{children:"アコーディオン 1"}),e.jsx(n.Content,{children:"アコーディオン 1 のコンテンツです。デフォルトで開いています。"})]}),e.jsxs(n.Item,{value:"item-2",children:[e.jsx(n.Trigger,{children:"アコーディオン 2"}),e.jsx(n.Content,{children:"アコーディオン 2 のコンテンツです。"})]}),e.jsxs(n.Item,{value:"item-3",children:[e.jsx(n.Trigger,{children:"アコーディオン 3"}),e.jsx(n.Content,{children:"アコーディオン 3 のコンテンツです。"})]})]}),args:{type:"single",collapsible:!0}},f={render:r=>e.jsxs(n,{...r,children:[e.jsxs(n.Item,{value:"item-1",children:[e.jsx(n.Trigger,{children:"アコーディオン 1"}),e.jsx(n.Content,{children:"複数のアイテムを同時に開くことができます。"})]}),e.jsxs(n.Item,{value:"item-2",children:[e.jsx(n.Trigger,{children:"アコーディオン 2"}),e.jsx(n.Content,{children:"これは 2 つ目のアイテムです。"})]}),e.jsxs(n.Item,{value:"item-3",children:[e.jsx(n.Trigger,{children:"アコーディオン 3"}),e.jsx(n.Content,{children:"これは 3 つ目のアイテムです。"})]})]}),args:{type:"multiple"}},h={render:r=>e.jsxs(n,{...r,children:[e.jsxs(n.Item,{value:"item-1",children:[e.jsx(n.Trigger,{children:"有効なアイテム"}),e.jsx(n.Content,{children:"通常のアイテムです。"})]}),e.jsxs(n.Item,{value:"item-2",disabled:!0,children:[e.jsx(n.Trigger,{children:"無効なアイテム"}),e.jsx(n.Content,{children:"このコンテンツは見えません。"})]})]})};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const D=["Single","Multiple","Disabled"],P=Object.freeze(Object.defineProperty({__proto__:null,Disabled:h,Multiple:f,Single:A,__namedExportsOrder:D,default:q},Symbol.toStringTag,{value:"Module"}));export{P as A,h as D,f as M,A as S};
