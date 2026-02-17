import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as l,R}from"./iframe-CVYkroJl.js";import{c as v}from"./index-BrgqE5mE.js";import{I as O}from"./Icon-BeKR45dx.js";const b=l.createContext(null),_=()=>{const r=l.useContext(b);if(!r)throw new Error("Accordion components must be used within an Accordion");return r},n=({type:r="single",defaultValue:c,value:s,onValueChange:i,collapsible:t=!0,className:p,children:o,id:a})=>{const I=l.useId(),y=a||I,[A,x]=l.useState(()=>c?Array.isArray(c)?c:[c]:[]),u=s!==void 0,m=l.useMemo(()=>u?Array.isArray(s)?s:[s]:A,[u,s,A]),T=l.useCallback(g=>{let d;r==="single"?m.includes(g)?d=t?[]:[g]:d=[g]:m.includes(g)?d=m.filter(w=>w!==g):d=[...m,g],u||x(d),i?.(r==="single"?d[0]:d)},[m,t,u,i,r]);return e.jsx(b.Provider,{value:{value:m,onValueChange:T,type:r,accordionId:y},children:e.jsx("div",{className:v("wim-accordion",p),children:o})})},j=l.createContext(null),N=({value:r,disabled:c=!1,className:s,children:i})=>{const{value:t,accordionId:p}=_(),o=t.includes(r),a=`wim-accordion-trigger-${p}-${r}`,I=`wim-accordion-content-${p}-${r}`,[y,A]=l.useState(o),[x,u]=l.useState(!1),m=R.useRef(o);R.useEffect(()=>{if(o!==m.current){if(o){u(!1);const d=setTimeout(()=>{A(!0)},10);return()=>clearTimeout(d)}else A(!1),u(!0);m.current=o}},[o]);const T=d=>{!o&&d.propertyName==="grid-template-rows"&&u(!1)},g=o||x;return e.jsx(j.Provider,{value:{value:r,disabled:c,isContentOpen:y,isLogicOpen:o,triggerId:a,contentId:I},children:e.jsx("details",{open:g,onTransitionEnd:T,className:v("wim-accordion__item",c&&"wim-accordion__item--disabled",o&&"wim-accordion__item--open",s),children:i})})},q=({children:r,className:c,...s})=>{const{onValueChange:i}=_(),t=l.useContext(j);if(!t)throw new Error("AccordionTrigger must be used within AccordionItem");const p=a=>{if(t.disabled){a.preventDefault();return}a.preventDefault(),i(t.value)},o=a=>{if(a.key==="Enter"||a.key===" "){if(t.disabled){a.preventDefault();return}a.preventDefault(),i(t.value)}};return e.jsxs("summary",{id:t.triggerId,className:v("wim-accordion__trigger",c),role:"button","aria-expanded":t.isLogicOpen,"aria-controls":t.contentId,"aria-disabled":t.disabled,onClick:p,onKeyDown:o,...s,children:[e.jsx("span",{className:"wim-accordion__trigger-content",children:r}),e.jsx(O,{name:"ChevronDownIcon",className:v("wim-accordion__chevron",t.isContentOpen&&"wim-accordion__chevron--open")})]})},D=({children:r,className:c,...s})=>{const i=l.useContext(j);if(!i)throw new Error("AccordionContent must be used within AccordionItem");return e.jsx("div",{id:i.contentId,role:"region","aria-labelledby":i.triggerId,className:v("wim-accordion__content",i.isContentOpen&&"wim-accordion__content--open",c),...s,children:e.jsx("div",{className:"wim-accordion__content-inner",children:r})})};n.Item=N;n.Trigger=q;n.Content=D;n.__docgenInfo={description:"",methods:[{name:"Item",docblock:null,modifiers:["static"],params:[{name:"{ value, disabled = false, className, children }: AccordionItemProps",optional:!1,type:{name:"signature",type:"object",raw:`{\r
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
}: React.ComponentPropsWithoutRef<"div">`,optional:!1,type:{name:"ReactComponentPropsWithoutRef",raw:'React.ComponentPropsWithoutRef<"div">',elements:[{name:"literal",value:'"div"'}],alias:"React.ComponentPropsWithoutRef"}}],returns:null}],displayName:"Accordion",props:{type:{required:!1,tsType:{name:"union",raw:'"single" | "multiple"',elements:[{name:"literal",value:'"single"'},{name:"literal",value:'"multiple"'}]},description:"",defaultValue:{value:'"single"',computed:!1}},defaultValue:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},value:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | string[]) => void",signature:{arguments:[{type:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},name:"value"}],return:{name:"void"}}},description:""},collapsible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},id:{required:!1,tsType:{name:"string"},description:""}}};N.__docgenInfo={description:"",methods:[],displayName:"AccordionItem",props:{value:{required:!0,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};q.__docgenInfo={description:"",methods:[],displayName:"AccordionTrigger"};D.__docgenInfo={description:"",methods:[],displayName:"AccordionContent"};const k={title:"Component/Data Display/Accordion",component:n,tags:[],argTypes:{type:{control:"select",options:["single","multiple"]},collapsible:{control:"boolean"}}},f={render:r=>e.jsxs(n,{...r,defaultValue:"item-1",children:[e.jsxs(n.Item,{value:"item-1",children:[e.jsx(n.Trigger,{children:"アコーディオン 1"}),e.jsx(n.Content,{children:"アコーディオン 1 のコンテンツです。デフォルトで開いています。"})]}),e.jsxs(n.Item,{value:"item-2",children:[e.jsx(n.Trigger,{children:"アコーディオン 2"}),e.jsx(n.Content,{children:"アコーディオン 2 のコンテンツです。"})]}),e.jsxs(n.Item,{value:"item-3",children:[e.jsx(n.Trigger,{children:"アコーディオン 3"}),e.jsx(n.Content,{children:"アコーディオン 3 のコンテンツです。"})]})]}),args:{type:"single",collapsible:!0}},h={render:r=>e.jsxs(n,{...r,children:[e.jsxs(n.Item,{value:"item-1",children:[e.jsx(n.Trigger,{children:"アコーディオン 1"}),e.jsx(n.Content,{children:"複数のアイテムを同時に開くことができます。"})]}),e.jsxs(n.Item,{value:"item-2",children:[e.jsx(n.Trigger,{children:"アコーディオン 2"}),e.jsx(n.Content,{children:"これは 2 つ目のアイテムです。"})]}),e.jsxs(n.Item,{value:"item-3",children:[e.jsx(n.Trigger,{children:"アコーディオン 3"}),e.jsx(n.Content,{children:"これは 3 つ目のアイテムです。"})]})]}),args:{type:"multiple"}},C={render:r=>e.jsxs(n,{...r,children:[e.jsxs(n.Item,{value:"item-1",children:[e.jsx(n.Trigger,{children:"有効なアイテム"}),e.jsx(n.Content,{children:"通常のアイテムです。"})]}),e.jsxs(n.Item,{value:"item-2",disabled:!0,children:[e.jsx(n.Trigger,{children:"無効なアイテム"}),e.jsx(n.Content,{children:"このコンテンツは見えません。"})]})]})};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};const S=["Single","Multiple","Disabled"],M=Object.freeze(Object.defineProperty({__proto__:null,Disabled:C,Multiple:h,Single:f,__namedExportsOrder:S,default:k},Symbol.toStringTag,{value:"Module"}));export{M as A,C as D,h as M,f as S};
