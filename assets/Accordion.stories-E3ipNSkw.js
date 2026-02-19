import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as a}from"./iframe-HMYHJVpo.js";import{c as h}from"./index-_qkpv7Rh.js";import{I as P}from"./Icon-CSfTbXBg.js";const j=a.createContext(null),y=()=>{const r=a.useContext(j);if(!r)throw new Error("Accordion components must be used within an Accordion");return r},n=({type:r="single",defaultValue:t,value:s,onValueChange:i,collapsible:o=!0,className:l,children:m,id:f})=>{const I=a.useId(),R=f||I,[v,N]=a.useState(()=>t?Array.isArray(t)?t:[t]:[]),C=s!==void 0,u=a.useMemo(()=>{const c=C?s:v;return Array.isArray(c)?c:c?[c]:[]},[C,s,v]),q=a.useCallback(c=>{let d;r==="single"?u.includes(c)?d=o?[]:[c]:d=[c]:u.includes(c)?d=u.filter(T=>T!==c):d=[...u,c],C||N(d),i?.(r==="single"?d[0]??"":d)},[u,o,C,i,r]);return e.jsx(j.Provider,{value:{value:u,onValueChange:q,type:r,accordionId:R},children:e.jsx("div",{className:h("wim-accordion",l),children:m})})},x=a.createContext(null),w=({value:r,disabled:t=!1,className:s,children:i})=>{const{value:o,accordionId:l}=y(),m=o.includes(r),f=`wim-accordion-trigger-${l}-${r}`,I=`wim-accordion-content-${l}-${r}`;return e.jsx(x.Provider,{value:{value:r,disabled:t,isLogicOpen:m,triggerId:f,contentId:I},children:e.jsx("div",{className:h("wim-accordion__item",t&&"wim-accordion__item--disabled",m&&"wim-accordion__item--open",s),children:i})})},b=({children:r,className:t,...s})=>{const{onValueChange:i}=y(),o=a.useContext(x);if(!o)throw new Error("AccordionTrigger must be used within AccordionItem");const l=m=>{if(o.disabled){m.preventDefault();return}i(o.value)};return e.jsxs("button",{type:"button",id:o.triggerId,className:h("wim-accordion__trigger",t),"aria-expanded":o.isLogicOpen,"aria-controls":o.contentId,"aria-disabled":o.disabled,disabled:o.disabled,onClick:l,...s,children:[e.jsx("span",{className:"wim-accordion__trigger-content",children:r}),e.jsx(P,{name:"ChevronDownIcon",className:h("wim-accordion__chevron",o.isLogicOpen&&"wim-accordion__chevron--open")})]})},_=({children:r,className:t,...s})=>{const i=a.useContext(x);if(!i)throw new Error("AccordionContent must be used within AccordionItem");return e.jsx("div",{id:i.contentId,role:"region","aria-labelledby":i.triggerId,className:h("wim-accordion__content",i.isLogicOpen&&"wim-accordion__content--open",t),...s,children:e.jsx("div",{className:"wim-accordion__content-inner",children:r})})};n.Item=w;n.Trigger=b;n.Content=_;n.__docgenInfo={description:`折りたたみ可能なコンテンツのセット。\r
type="single" の場合は一度に一つ、"multiple" の場合は複数開くことができます。`,methods:[{name:"Item",docblock:null,modifiers:["static"],params:[{name:"{ value, disabled = false, className, children }: AccordionItemProps",optional:!1,type:{name:"AccordionItemProps",alias:"AccordionItemProps"}}],returns:null},{name:"Trigger",docblock:null,modifiers:["static"],params:[{name:`{\r
    children,\r
    className,\r
    ...props\r
}: React.ComponentPropsWithoutRef<"button">`,optional:!1,type:{name:"ReactComponentPropsWithoutRef",raw:'React.ComponentPropsWithoutRef<"button">',elements:[{name:"literal",value:'"button"'}],alias:"React.ComponentPropsWithoutRef"}}],returns:null},{name:"Content",docblock:null,modifiers:["static"],params:[{name:`{\r
    children,\r
    className,\r
    ...props\r
}: React.ComponentPropsWithoutRef<"div">`,optional:!1,type:{name:"ReactComponentPropsWithoutRef",raw:'React.ComponentPropsWithoutRef<"div">',elements:[{name:"literal",value:'"div"'}],alias:"React.ComponentPropsWithoutRef"}}],returns:null}],displayName:"Accordion",props:{type:{required:!1,tsType:{name:"union",raw:'"single" | "multiple"',elements:[{name:"literal",value:'"single"'},{name:"literal",value:'"multiple"'}]},description:"",defaultValue:{value:'"single"',computed:!1}},defaultValue:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},value:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | string[]) => void",signature:{arguments:[{type:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},name:"value"}],return:{name:"void"}}},description:""},collapsible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},id:{required:!1,tsType:{name:"string"},description:""}}};w.__docgenInfo={description:"各アコーディオン項目。",methods:[],displayName:"AccordionItem",props:{value:{required:!0,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};b.__docgenInfo={description:"アコーディオンを切り替えるトリガー。",methods:[],displayName:"AccordionTrigger"};_.__docgenInfo={description:"アコーディオンのコンテンツ領域。",methods:[],displayName:"AccordionContent"};const S={title:"Component/Data Containers/Accordion",component:n,tags:[],argTypes:{type:{control:"select",options:["single","multiple"]},collapsible:{control:"boolean"}}},g={render:r=>e.jsxs(n,{...r,defaultValue:"item-1",children:[e.jsxs(n.Item,{value:"item-1",children:[e.jsx(n.Trigger,{children:"アコーディオン 1"}),e.jsx(n.Content,{children:"アコーディオン 1 のコンテンツです。デフォルトで開いています。"})]}),e.jsxs(n.Item,{value:"item-2",children:[e.jsx(n.Trigger,{children:"アコーディオン 2"}),e.jsx(n.Content,{children:"アコーディオン 2 のコンテンツです。"})]}),e.jsxs(n.Item,{value:"item-3",children:[e.jsx(n.Trigger,{children:"アコーディオン 3"}),e.jsx(n.Content,{children:"アコーディオン 3 のコンテンツです。"})]})]}),args:{type:"single",collapsible:!0}},p={render:r=>e.jsxs(n,{...r,children:[e.jsxs(n.Item,{value:"item-1",children:[e.jsx(n.Trigger,{children:"アコーディオン 1"}),e.jsx(n.Content,{children:"複数のアイテムを同時に開くことができます。"})]}),e.jsxs(n.Item,{value:"item-2",children:[e.jsx(n.Trigger,{children:"アコーディオン 2"}),e.jsx(n.Content,{children:"これは 2 つ目のアイテムです。"})]}),e.jsxs(n.Item,{value:"item-3",children:[e.jsx(n.Trigger,{children:"アコーディオン 3"}),e.jsx(n.Content,{children:"これは 3 つ目のアイテムです。"})]})]}),args:{type:"multiple"}},A={render:r=>e.jsxs(n,{...r,children:[e.jsxs(n.Item,{value:"item-1",children:[e.jsx(n.Trigger,{children:"有効なアイテム"}),e.jsx(n.Content,{children:"通常のアイテムです。"})]}),e.jsxs(n.Item,{value:"item-2",disabled:!0,children:[e.jsx(n.Trigger,{children:"無効なアイテム"}),e.jsx(n.Content,{children:"このコンテンツは見えません。"})]})]})};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};const O=["Single","Multiple","Disabled"],V=Object.freeze(Object.defineProperty({__proto__:null,Disabled:A,Multiple:p,Single:g,__namedExportsOrder:O,default:S},Symbol.toStringTag,{value:"Module"}));export{V as A,A as D,p as M,g as S};
