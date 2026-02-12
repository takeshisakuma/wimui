import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as d,R as I}from"./iframe-DQO96vlz.js";import{c as C}from"./index-CgtPBStF.js";import{I as N}from"./Icon-Bt2n61hp.js";const j=d.createContext(null),w=()=>{const r=d.useContext(j);if(!r)throw new Error("Accordion components must be used within an Accordion");return r},n=({type:r="single",defaultValue:o,value:s,onValueChange:a,collapsible:u=!0,className:t,children:A})=>{const[g,i]=d.useState(()=>o?Array.isArray(o)?o:[o]:[]),p=s!==void 0,l=p?Array.isArray(s)?s:[s]:g,y=d.useCallback(m=>{let c;r==="single"?l.includes(m)?c=u?[]:[m]:c=[m]:l.includes(m)?c=l.filter(T=>T!==m):c=[...l,m],p||i(c),a?.(r==="single"?c[0]:c)},[l,u,p,a,r]);return e.jsx(j.Provider,{value:{value:l,onValueChange:y,type:r},children:e.jsx("div",{className:C("wim-accordion",t),children:A})})},x=d.createContext(null),R=({value:r,disabled:o=!1,className:s,children:a})=>{const{value:u}=w(),t=u.includes(r),[A,g]=d.useState(t),[i,p]=d.useState(!1),l=I.useRef(t);I.useEffect(()=>{if(t!==l.current){if(t){p(!1);const c=setTimeout(()=>{g(!0)},10);return()=>clearTimeout(c)}else g(!1),p(!0);l.current=t}},[t]);const y=c=>{!t&&c.propertyName==="grid-template-rows"&&p(!1)},m=t||i;return e.jsx(x.Provider,{value:{value:r,disabled:o,isContentOpen:A},children:e.jsx("details",{open:m,onTransitionEnd:y,className:C("wim-accordion__item",o&&"wim-accordion__item--disabled",t&&"wim-accordion__item--open",s),children:a})})},_=({children:r,className:o,...s})=>{const{value:a,onValueChange:u}=w(),t=d.useContext(x);if(!t)throw new Error("AccordionTrigger must be used within AccordionItem");a.includes(t.value);const A=i=>{if(t.disabled){i.preventDefault();return}i.preventDefault(),u(t.value)},g=i=>{if(i.key==="Enter"||i.key===" "){if(t.disabled){i.preventDefault();return}i.preventDefault(),u(t.value)}};return e.jsxs("summary",{className:C("wim-accordion__trigger",o),onClick:A,onKeyDown:g,...s,children:[e.jsx("span",{className:"wim-accordion__trigger-content",children:r}),e.jsx(N,{name:"ChevronDownIcon",className:C("wim-accordion__chevron",t.isContentOpen&&"wim-accordion__chevron--open")})]})},b=({children:r,className:o,...s})=>{const a=d.useContext(x);if(!a)throw new Error("AccordionContent must be used within AccordionItem");return e.jsx("div",{className:C("wim-accordion__content",a.isContentOpen&&"wim-accordion__content--open",o),...s,children:e.jsx("div",{className:"wim-accordion__content-inner",children:r})})};n.Item=R;n.Trigger=_;n.Content=b;n.__docgenInfo={description:"",methods:[{name:"Item",docblock:null,modifiers:["static"],params:[{name:"{ value, disabled = false, className, children }: AccordionItemProps",optional:!1,type:{name:"signature",type:"object",raw:`{\r
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
}: React.ComponentPropsWithoutRef<"div">`,optional:!1,type:{name:"ReactComponentPropsWithoutRef",raw:'React.ComponentPropsWithoutRef<"div">',elements:[{name:"literal",value:'"div"'}],alias:"React.ComponentPropsWithoutRef"}}],returns:null}],displayName:"Accordion",props:{type:{required:!1,tsType:{name:"union",raw:'"single" | "multiple"',elements:[{name:"literal",value:'"single"'},{name:"literal",value:'"multiple"'}]},description:"",defaultValue:{value:'"single"',computed:!1}},defaultValue:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},value:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | string[]) => void",signature:{arguments:[{type:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},name:"value"}],return:{name:"void"}}},description:""},collapsible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};R.__docgenInfo={description:"",methods:[],displayName:"AccordionItem",props:{value:{required:!0,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};_.__docgenInfo={description:"",methods:[],displayName:"AccordionTrigger"};b.__docgenInfo={description:"",methods:[],displayName:"AccordionContent"};const q={title:"Component/Data Display/Accordion",component:n,tags:[],argTypes:{type:{control:"select",options:["single","multiple"]},collapsible:{control:"boolean"}}},f={render:r=>e.jsxs(n,{...r,defaultValue:"item-1",children:[e.jsxs(n.Item,{value:"item-1",children:[e.jsx(n.Trigger,{children:"アコーディオン 1"}),e.jsx(n.Content,{children:"アコーディオン 1 のコンテンツです。デフォルトで開いています。"})]}),e.jsxs(n.Item,{value:"item-2",children:[e.jsx(n.Trigger,{children:"アコーディオン 2"}),e.jsx(n.Content,{children:"アコーディオン 2 のコンテンツです。"})]}),e.jsxs(n.Item,{value:"item-3",children:[e.jsx(n.Trigger,{children:"アコーディオン 3"}),e.jsx(n.Content,{children:"アコーディオン 3 のコンテンツです。"})]})]}),args:{type:"single",collapsible:!0}},h={render:r=>e.jsxs(n,{...r,children:[e.jsxs(n.Item,{value:"item-1",children:[e.jsx(n.Trigger,{children:"アコーディオン 1"}),e.jsx(n.Content,{children:"複数のアイテムを同時に開くことができます。"})]}),e.jsxs(n.Item,{value:"item-2",children:[e.jsx(n.Trigger,{children:"アコーディオン 2"}),e.jsx(n.Content,{children:"これは 2 つ目のアイテムです。"})]}),e.jsxs(n.Item,{value:"item-3",children:[e.jsx(n.Trigger,{children:"アコーディオン 3"}),e.jsx(n.Content,{children:"これは 3 つ目のアイテムです。"})]})]}),args:{type:"multiple"}},v={render:r=>e.jsxs(n,{...r,children:[e.jsxs(n.Item,{value:"item-1",children:[e.jsx(n.Trigger,{children:"有効なアイテム"}),e.jsx(n.Content,{children:"通常のアイテムです。"})]}),e.jsxs(n.Item,{value:"item-2",disabled:!0,children:[e.jsx(n.Trigger,{children:"無効なアイテム"}),e.jsx(n.Content,{children:"このコンテンツは見えません。"})]})]})};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};const D=["Single","Multiple","Disabled"],P=Object.freeze(Object.defineProperty({__proto__:null,Disabled:v,Multiple:h,Single:f,__namedExportsOrder:D,default:q},Symbol.toStringTag,{value:"Module"}));export{P as A,v as D,h as M,f as S};
