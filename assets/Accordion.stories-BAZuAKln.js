import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as l,R as q}from"./iframe-CDoE-pWf.js";import{c as C}from"./index-D0Kn6Bmw.js";import{I as L}from"./Icon-B-05j6uF.js";import{A as I}from"./i18nConstants-BpHxieg5.js";import{u as b}from"./useTranslation-DUx5r_FT.js";const R=l.createContext(null),x=()=>{const o=l.useContext(R);if(!o)throw new Error("Accordion components must be used within an Accordion");return o},n=({type:o="single",defaultValue:t,value:r,onValueChange:s,collapsible:i=!0,className:u,children:g,id:p})=>{const c=l.useId(),a=p||c,[A,E]=l.useState(()=>t?Array.isArray(t)?t:[t]:[]),w=q.useRef(null),v=r!==void 0,_=l.useMemo(()=>{const d=v?r:A;return Array.isArray(d)?d:d?[d]:[]},[v,r,A]),D=l.useCallback(d=>{let m;o==="single"?_.includes(d)?m=i?[]:[d]:m=[d]:_.includes(d)?m=_.filter(j=>j!==d):m=[..._,d],v||E(m),s?.(o==="single"?m[0]??"":m)},[_,i,v,s,o]);return e.jsx(R.Provider,{value:{value:_,onValueChange:D,type:o,accordionId:a,containerRef:w},children:e.jsx("div",{ref:w,className:C("wim-accordion",u),children:g})})},T=l.createContext(null),N=({value:o,disabled:t=!1,className:r,children:s})=>{const{value:i,accordionId:u}=x(),g=i.includes(o),p=`wim-accordion-trigger-${u}-${o}`,c=`wim-accordion-content-${u}-${o}`;return e.jsx(T.Provider,{value:{value:o,disabled:t,isLogicOpen:g,triggerId:p,contentId:c},children:e.jsx("div",{className:C("wim-accordion__item",t&&"wim-accordion__item--disabled",g&&"wim-accordion__item--open",r),children:s})})},S=({children:o,className:t,...r})=>{const{onValueChange:s}=x(),i=l.useContext(T);if(!i)throw new Error("AccordionTrigger must be used within AccordionItem");const u=c=>{if(i.disabled){c.preventDefault();return}s(i.value)},{containerRef:g}=x(),p=c=>{if(i.disabled)return;const a=Array.from(g.current?.querySelectorAll(".wim-accordion__trigger:not(:disabled)")||[]),A=a.indexOf(c.currentTarget);switch(c.key){case"ArrowDown":c.preventDefault(),a[(A+1)%a.length]?.focus();break;case"ArrowUp":c.preventDefault(),a[(A-1+a.length)%a.length]?.focus();break;case"Home":c.preventDefault(),a[0]?.focus();break;case"End":c.preventDefault(),a[a.length-1]?.focus();break}r.onKeyDown?.(c)};return e.jsxs("button",{type:"button",id:i.triggerId,className:C("wim-accordion__trigger",t),"aria-expanded":i.isLogicOpen,"aria-controls":i.contentId,"aria-disabled":i.disabled,disabled:i.disabled,onClick:u,onKeyDown:p,...r,children:[e.jsx("span",{className:"wim-accordion__trigger-content",children:o}),e.jsx(L,{name:"ChevronDownIcon",className:C("wim-accordion__chevron",i.isLogicOpen&&"wim-accordion__chevron--open")})]})},P=({children:o,className:t,...r})=>{const s=l.useContext(T);if(!s)throw new Error("AccordionContent must be used within AccordionItem");return e.jsx("div",{id:s.contentId,role:"region","aria-labelledby":s.triggerId,className:C("wim-accordion__content",s.isLogicOpen&&"wim-accordion__content--open",t),...r,children:e.jsx("div",{className:"wim-accordion__content-inner",children:e.jsx("div",{className:"wim-accordion__content-body",children:o})})})};n.Item=N;n.Trigger=S;n.Content=P;n.__docgenInfo={description:`折りたたみ可能なコンテンツのセット。
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
}: React.ComponentPropsWithoutRef<"div">`,optional:!1,type:{name:"ReactComponentPropsWithoutRef",raw:'React.ComponentPropsWithoutRef<"div">',elements:[{name:"literal",value:'"div"'}],alias:"React.ComponentPropsWithoutRef"}}],returns:null}],displayName:"Accordion",props:{type:{required:!1,tsType:{name:"union",raw:'"single" | "multiple"',elements:[{name:"literal",value:'"single"'},{name:"literal",value:'"multiple"'}]},description:"",defaultValue:{value:'"single"',computed:!1}},defaultValue:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},value:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | string[]) => void",signature:{arguments:[{type:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},name:"value"}],return:{name:"void"}}},description:""},collapsible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},id:{required:!1,tsType:{name:"string"},description:""}}};N.__docgenInfo={description:"各アコーディオン項目。",methods:[],displayName:"AccordionItem",props:{value:{required:!0,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};S.__docgenInfo={description:"アコーディオンを切り替えるトリガー。",methods:[],displayName:"AccordionTrigger"};P.__docgenInfo={description:"アコーディオンのコンテンツ領域。",methods:[],displayName:"AccordionContent"};const k={title:"Components/Data Containers/Accordion",component:n,tags:[],argTypes:{type:{control:"select",options:["single","multiple"]},collapsible:{control:"boolean"}}},f={render:function(t){const{t:r}=b(I);return e.jsxs(n,{...t,defaultValue:"item-1",children:[e.jsxs(n.Item,{value:"item-1",children:[e.jsx(n.Trigger,{children:r("story_accordion_trigger_1")}),e.jsx(n.Content,{children:r("story_accordion_content_1")})]}),e.jsxs(n.Item,{value:"item-2",children:[e.jsx(n.Trigger,{children:r("story_accordion_trigger_2")}),e.jsx(n.Content,{children:r("story_accordion_content_2")})]}),e.jsxs(n.Item,{value:"item-3",children:[e.jsx(n.Trigger,{children:r("story_accordion_trigger_3")}),e.jsx(n.Content,{children:r("story_accordion_content_3")})]})]})},args:{type:"single",collapsible:!0}},y={render:function(t){const{t:r}=b(I);return e.jsxs(n,{...t,children:[e.jsxs(n.Item,{value:"item-1",children:[e.jsx(n.Trigger,{children:r("story_accordion_trigger_1")}),e.jsx(n.Content,{children:r("story_accordion_content_multiple_1")})]}),e.jsxs(n.Item,{value:"item-2",children:[e.jsx(n.Trigger,{children:r("story_accordion_trigger_2")}),e.jsx(n.Content,{children:r("story_accordion_content_multiple_2")})]}),e.jsxs(n.Item,{value:"item-3",children:[e.jsx(n.Trigger,{children:r("story_accordion_trigger_3")}),e.jsx(n.Content,{children:r("story_accordion_content_multiple_3")})]})]})},args:{type:"multiple"}},h={render:function(t){const{t:r}=b(I);return e.jsxs(n,{...t,children:[e.jsxs(n.Item,{value:"item-1",children:[e.jsx(n.Trigger,{children:r("story_accordion_trigger_enabled")}),e.jsx(n.Content,{children:r("story_accordion_content_enabled")})]}),e.jsxs(n.Item,{value:"item-2",disabled:!0,children:[e.jsx(n.Trigger,{children:r("story_accordion_trigger_disabled")}),e.jsx(n.Content,{children:r("story_accordion_content_disabled")})]})]})}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,...h.parameters?.docs?.source}}};const O=["Single","Multiple","Disabled"],H=Object.freeze(Object.defineProperty({__proto__:null,Disabled:h,Multiple:y,Single:f,__namedExportsOrder:O,default:k},Symbol.toStringTag,{value:"Module"}));export{H as A,h as D,y as M,f as S};
