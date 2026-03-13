import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as l,R as k}from"./iframe-OlV4UgK7.js";import{c as v}from"./index-Dj-MT3vJ.js";import{I as S}from"./Icon-OHntu2hx.js";import{u as I}from"./useTranslation-CLFZhCB5.js";const j=l.createContext(null),x=()=>{const r=l.useContext(j);if(!r)throw new Error("Accordion components must be used within an Accordion");return r},n=({type:r="single",defaultValue:c,value:o,onValueChange:s,collapsible:t=!0,className:u,children:g,id:p})=>{const i=l.useId(),a=p||i,[y,q]=l.useState(()=>[]),T=k.useRef(null),C=o!==void 0,_=l.useMemo(()=>{const d=C?o:y;return Array.isArray(d)?d:d?[d]:[]},[C,o,y]),P=l.useCallback(d=>{let m;r==="single"?_.includes(d)?m=t?[]:[d]:m=[d]:_.includes(d)?m=_.filter(w=>w!==d):m=[..._,d],C||q(m),s?.(r==="single"?m[0]??"":m)},[_,t,C,s,r]);return e.jsx(j.Provider,{value:{value:_,onValueChange:P,type:r,accordionId:a,containerRef:T},children:e.jsx("div",{ref:T,className:v("wim-accordion",u),children:g})})},b=l.createContext(null),R=({value:r,disabled:c=!1,className:o,children:s})=>{const{value:t,accordionId:u}=x(),g=t.includes(r),p=`wim-accordion-trigger-${u}-${r}`,i=`wim-accordion-content-${u}-${r}`;return e.jsx(b.Provider,{value:{value:r,disabled:c,isLogicOpen:g,triggerId:p,contentId:i},children:e.jsx("div",{className:v("wim-accordion__item",c&&"wim-accordion__item--disabled",g&&"wim-accordion__item--open",o),children:s})})},N=({children:r,className:c,...o})=>{const{onValueChange:s}=x(),t=l.useContext(b);if(!t)throw new Error("AccordionTrigger must be used within AccordionItem");const u=i=>{if(t.disabled){i.preventDefault();return}s(t.value)},{containerRef:g}=x(),p=i=>{if(t.disabled)return;const a=Array.from(g.current?.querySelectorAll(".wim-accordion__trigger:not(:disabled)")||[]),y=a.indexOf(i.currentTarget);switch(i.key){case"ArrowDown":i.preventDefault(),a[(y+1)%a.length]?.focus();break;case"ArrowUp":i.preventDefault(),a[(y-1+a.length)%a.length]?.focus();break;case"Home":i.preventDefault(),a[0]?.focus();break;case"End":i.preventDefault(),a[a.length-1]?.focus();break}o.onKeyDown?.(i)};return e.jsxs("button",{type:"button",id:t.triggerId,className:v("wim-accordion__trigger",c),"aria-expanded":t.isLogicOpen,"aria-controls":t.contentId,"aria-disabled":t.disabled,disabled:t.disabled,onClick:u,onKeyDown:p,...o,children:[e.jsx("span",{className:"wim-accordion__trigger-content",children:r}),e.jsx(S,{name:"ChevronDownIcon",className:v("wim-accordion__chevron",t.isLogicOpen&&"wim-accordion__chevron--open")})]})},D=({children:r,className:c,...o})=>{const s=l.useContext(b);if(!s)throw new Error("AccordionContent must be used within AccordionItem");return e.jsx("div",{id:s.contentId,role:"region","aria-labelledby":s.triggerId,className:v("wim-accordion__content",s.isLogicOpen&&"wim-accordion__content--open",c),...o,children:e.jsx("div",{className:"wim-accordion__content-inner",children:e.jsx("div",{className:"wim-accordion__content-body",children:r})})})};n.Item=R;n.Trigger=N;n.Content=D;n.__docgenInfo={description:`折りたたみ可能なコンテンツのセット。
type="single" の場合は一度に一つ、"multiple" の場合は複数開くことができます。`,methods:[{name:"Item",docblock:null,modifiers:["static"],params:[{name:`{
  value,
  disabled = false,
  className,
  children,
}: AccordionItemProps`,optional:!1,type:{name:"AccordionItemProps",alias:"AccordionItemProps"}}],returns:null},{name:"Trigger",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"button">`,optional:!1,type:{name:"ReactComponentPropsWithoutRef",raw:'React.ComponentPropsWithoutRef<"button">',elements:[{name:"literal",value:'"button"'}],alias:"React.ComponentPropsWithoutRef"}}],returns:null},{name:"Content",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">`,optional:!1,type:{name:"ReactComponentPropsWithoutRef",raw:'React.ComponentPropsWithoutRef<"div">',elements:[{name:"literal",value:'"div"'}],alias:"React.ComponentPropsWithoutRef"}}],returns:null}],displayName:"Accordion",props:{type:{required:!1,tsType:{name:"union",raw:'"single" | "multiple"',elements:[{name:"literal",value:'"single"'},{name:"literal",value:'"multiple"'}]},description:"",defaultValue:{value:'"single"',computed:!1}},defaultValue:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},value:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | string[]) => void",signature:{arguments:[{type:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},name:"value"}],return:{name:"void"}}},description:""},collapsible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},id:{required:!1,tsType:{name:"string"},description:""}}};R.__docgenInfo={description:"各アコーディオン項目。",methods:[],displayName:"AccordionItem",props:{value:{required:!0,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};N.__docgenInfo={description:"アコーディオンを切り替えるトリガー。",methods:[],displayName:"AccordionTrigger"};D.__docgenInfo={description:"アコーディオンのコンテンツ領域。",methods:[],displayName:"AccordionContent"};const V={title:"Components/Data Containers/Accordion",component:n,tags:[],argTypes:{type:{control:"select",options:["single","multiple"]},collapsible:{control:"boolean"}}},A={render:function(c){const{t:o}=I(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsxs(n,{...c,defaultValue:"item-1",children:[e.jsxs(n.Item,{value:"item-1",children:[e.jsx(n.Trigger,{children:o("story_accordion_trigger_1")}),e.jsx(n.Content,{children:o("story_accordion_content_1")})]}),e.jsxs(n.Item,{value:"item-2",children:[e.jsx(n.Trigger,{children:o("story_accordion_trigger_2")}),e.jsx(n.Content,{children:o("story_accordion_content_2")})]}),e.jsxs(n.Item,{value:"item-3",children:[e.jsx(n.Trigger,{children:o("story_accordion_trigger_3")}),e.jsx(n.Content,{children:o("story_accordion_content_3")})]})]})},args:{type:"single",collapsible:!0}},f={render:function(c){const{t:o}=I(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsxs(n,{...c,children:[e.jsxs(n.Item,{value:"item-1",children:[e.jsx(n.Trigger,{children:o("story_accordion_trigger_1")}),e.jsx(n.Content,{children:o("story_accordion_content_multiple_1")})]}),e.jsxs(n.Item,{value:"item-2",children:[e.jsx(n.Trigger,{children:o("story_accordion_trigger_2")}),e.jsx(n.Content,{children:o("story_accordion_content_multiple_2")})]}),e.jsxs(n.Item,{value:"item-3",children:[e.jsx(n.Trigger,{children:o("story_accordion_trigger_3")}),e.jsx(n.Content,{children:o("story_accordion_content_multiple_3")})]})]})},args:{type:"multiple"}},h={render:function(c){const{t:o}=I(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsxs(n,{...c,children:[e.jsxs(n.Item,{value:"item-1",children:[e.jsx(n.Trigger,{children:o("story_accordion_trigger_enabled")}),e.jsx(n.Content,{children:o("story_accordion_content_enabled")})]}),e.jsxs(n.Item,{value:"item-2",disabled:!0,children:[e.jsx(n.Trigger,{children:o("story_accordion_trigger_disabled")}),e.jsx(n.Content,{children:o("story_accordion_content_disabled")})]})]})}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Accordion {...args} defaultValue="item-1">\r
        <Accordion.Item value="item-1">\r
          <Accordion.Trigger>{t("story_accordion_trigger_1")}</Accordion.Trigger>\r
          <Accordion.Content>\r
            {t("story_accordion_content_1")}\r
          </Accordion.Content>\r
        </Accordion.Item>\r
        <Accordion.Item value="item-2">\r
          <Accordion.Trigger>{t("story_accordion_trigger_2")}</Accordion.Trigger>\r
          <Accordion.Content>\r
            {t("story_accordion_content_2")}\r
          </Accordion.Content>\r
        </Accordion.Item>\r
        <Accordion.Item value="item-3">\r
          <Accordion.Trigger>{t("story_accordion_trigger_3")}</Accordion.Trigger>\r
          <Accordion.Content>\r
            {t("story_accordion_content_3")}\r
          </Accordion.Content>\r
        </Accordion.Item>\r
      </Accordion>;
  },
  args: {
    type: "single",
    collapsible: true
  }
}`,...A.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Accordion {...args}>\r
        <Accordion.Item value="item-1">\r
          <Accordion.Trigger>{t("story_accordion_trigger_1")}</Accordion.Trigger>\r
          <Accordion.Content>\r
            {t("story_accordion_content_multiple_1")}\r
          </Accordion.Content>\r
        </Accordion.Item>\r
        <Accordion.Item value="item-2">\r
          <Accordion.Trigger>{t("story_accordion_trigger_2")}</Accordion.Trigger>\r
          <Accordion.Content>{t("story_accordion_content_multiple_2")}</Accordion.Content>\r
        </Accordion.Item>\r
        <Accordion.Item value="item-3">\r
          <Accordion.Trigger>{t("story_accordion_trigger_3")}</Accordion.Trigger>\r
          <Accordion.Content>{t("story_accordion_content_multiple_3")}</Accordion.Content>\r
        </Accordion.Item>\r
      </Accordion>;
  },
  args: {
    type: "multiple"
  }
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Accordion {...args}>\r
        <Accordion.Item value="item-1">\r
          <Accordion.Trigger>{t("story_accordion_trigger_enabled")}</Accordion.Trigger>\r
          <Accordion.Content>{t("story_accordion_content_enabled")}</Accordion.Content>\r
        </Accordion.Item>\r
        <Accordion.Item value="item-2" disabled>\r
          <Accordion.Trigger>{t("story_accordion_trigger_disabled")}</Accordion.Trigger>\r
          <Accordion.Content>{t("story_accordion_content_disabled")}</Accordion.Content>\r
        </Accordion.Item>\r
      </Accordion>;
  }
}`,...h.parameters?.docs?.source}}};const O=["Single","Multiple","Disabled"],K=Object.freeze(Object.defineProperty({__proto__:null,Disabled:h,Multiple:f,Single:A,__namedExportsOrder:O,default:V},Symbol.toStringTag,{value:"Module"}));export{K as A,h as D,f as M,A as S};
