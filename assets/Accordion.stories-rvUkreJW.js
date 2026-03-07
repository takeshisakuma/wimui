import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as a}from"./iframe-O5ZI-u7T.js";import{c as A}from"./index-DwL0CKxr.js";import{I as S}from"./Icon-olUqQMEw.js";import{u as C}from"./useTranslation-2PVo7Ynq.js";const T=a.createContext(null),b=()=>{const o=a.useContext(T);if(!o)throw new Error("Accordion components must be used within an Accordion");return o},n=({type:o="single",defaultValue:t,value:r,onValueChange:i,collapsible:c=!0,className:l,children:m,id:h})=>{const f=a.useId(),N=h||f,[x,q]=a.useState(()=>t?Array.isArray(t)?t:[t]:[]),y=r!==void 0,g=a.useMemo(()=>{const s=y?r:x;return Array.isArray(s)?s:s?[s]:[]},[y,r,x]),P=a.useCallback(s=>{let d;o==="single"?g.includes(s)?d=c?[]:[s]:d=[s]:g.includes(s)?d=g.filter(v=>v!==s):d=[...g,s],y||q(d),i?.(o==="single"?d[0]??"":d)},[g,c,y,i,o]);return e.jsx(T.Provider,{value:{value:g,onValueChange:P,type:o,accordionId:N},children:e.jsx("div",{className:A("wim-accordion",l),children:m})})},I=a.createContext(null),j=({value:o,disabled:t=!1,className:r,children:i})=>{const{value:c,accordionId:l}=b(),m=c.includes(o),h=`wim-accordion-trigger-${l}-${o}`,f=`wim-accordion-content-${l}-${o}`;return e.jsx(I.Provider,{value:{value:o,disabled:t,isLogicOpen:m,triggerId:h,contentId:f},children:e.jsx("div",{className:A("wim-accordion__item",t&&"wim-accordion__item--disabled",m&&"wim-accordion__item--open",r),children:i})})},w=({children:o,className:t,...r})=>{const{onValueChange:i}=b(),c=a.useContext(I);if(!c)throw new Error("AccordionTrigger must be used within AccordionItem");const l=m=>{if(c.disabled){m.preventDefault();return}i(c.value)};return e.jsxs("button",{type:"button",id:c.triggerId,className:A("wim-accordion__trigger",t),"aria-expanded":c.isLogicOpen,"aria-controls":c.contentId,"aria-disabled":c.disabled,disabled:c.disabled,onClick:l,...r,children:[e.jsx("span",{className:"wim-accordion__trigger-content",children:o}),e.jsx(S,{name:"ChevronDownIcon",className:A("wim-accordion__chevron",c.isLogicOpen&&"wim-accordion__chevron--open")})]})},R=({children:o,className:t,...r})=>{const i=a.useContext(I);if(!i)throw new Error("AccordionContent must be used within AccordionItem");return e.jsx("div",{id:i.contentId,role:"region","aria-labelledby":i.triggerId,className:A("wim-accordion__content",i.isLogicOpen&&"wim-accordion__content--open",t),...r,children:e.jsx("div",{className:"wim-accordion__content-inner",children:e.jsx("div",{className:"wim-accordion__content-body",children:o})})})};n.Item=j;n.Trigger=w;n.Content=R;n.__docgenInfo={description:`折りたたみ可能なコンテンツのセット。
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
}: React.ComponentPropsWithoutRef<"div">`,optional:!1,type:{name:"ReactComponentPropsWithoutRef",raw:'React.ComponentPropsWithoutRef<"div">',elements:[{name:"literal",value:'"div"'}],alias:"React.ComponentPropsWithoutRef"}}],returns:null}],displayName:"Accordion",props:{type:{required:!1,tsType:{name:"union",raw:'"single" | "multiple"',elements:[{name:"literal",value:'"single"'},{name:"literal",value:'"multiple"'}]},description:"",defaultValue:{value:'"single"',computed:!1}},defaultValue:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},value:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | string[]) => void",signature:{arguments:[{type:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},name:"value"}],return:{name:"void"}}},description:""},collapsible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},id:{required:!1,tsType:{name:"string"},description:""}}};j.__docgenInfo={description:"各アコーディオン項目。",methods:[],displayName:"AccordionItem",props:{value:{required:!0,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};w.__docgenInfo={description:"アコーディオンを切り替えるトリガー。",methods:[],displayName:"AccordionTrigger"};R.__docgenInfo={description:"アコーディオンのコンテンツ領域。",methods:[],displayName:"AccordionContent"};const O={title:"Components/Data Containers/Accordion",component:n,tags:[],argTypes:{type:{control:"select",options:["single","multiple"]},collapsible:{control:"boolean"}}},u={render:function(t){const{t:r}=C(["docs","common","components"]);return e.jsxs(n,{...t,defaultValue:"item-1",children:[e.jsxs(n.Item,{value:"item-1",children:[e.jsx(n.Trigger,{children:r("story_accordion_trigger_1")}),e.jsx(n.Content,{children:r("story_accordion_content_1")})]}),e.jsxs(n.Item,{value:"item-2",children:[e.jsx(n.Trigger,{children:r("story_accordion_trigger_2")}),e.jsx(n.Content,{children:r("story_accordion_content_2")})]}),e.jsxs(n.Item,{value:"item-3",children:[e.jsx(n.Trigger,{children:r("story_accordion_trigger_3")}),e.jsx(n.Content,{children:r("story_accordion_content_3")})]})]})},args:{type:"single",collapsible:!0}},p={render:function(t){const{t:r}=C(["docs","common","components"]);return e.jsxs(n,{...t,children:[e.jsxs(n.Item,{value:"item-1",children:[e.jsx(n.Trigger,{children:r("story_accordion_trigger_1")}),e.jsx(n.Content,{children:r("story_accordion_content_multiple_1")})]}),e.jsxs(n.Item,{value:"item-2",children:[e.jsx(n.Trigger,{children:r("story_accordion_trigger_2")}),e.jsx(n.Content,{children:r("story_accordion_content_multiple_2")})]}),e.jsxs(n.Item,{value:"item-3",children:[e.jsx(n.Trigger,{children:r("story_accordion_trigger_3")}),e.jsx(n.Content,{children:r("story_accordion_content_multiple_3")})]})]})},args:{type:"multiple"}},_={render:function(t){const{t:r}=C(["docs","common","components"]);return e.jsxs(n,{...t,children:[e.jsxs(n.Item,{value:"item-1",children:[e.jsx(n.Trigger,{children:r("story_accordion_trigger_enabled")}),e.jsx(n.Content,{children:r("story_accordion_content_enabled")})]}),e.jsxs(n.Item,{value:"item-2",disabled:!0,children:[e.jsx(n.Trigger,{children:r("story_accordion_trigger_disabled")}),e.jsx(n.Content,{children:r("story_accordion_content_disabled")})]})]})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,...p.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,..._.parameters?.docs?.source}}};const W=["Single","Multiple","Disabled"],L=Object.freeze(Object.defineProperty({__proto__:null,Disabled:_,Multiple:p,Single:u,__namedExportsOrder:W,default:O},Symbol.toStringTag,{value:"Module"}));export{L as A,_ as D,p as M,u as S};
