import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as _}from"./iframe-DnVN3ELQ.js";import{c as b}from"./index-DgtjCO_w.js";import{P as z}from"./Portal-D5Ebvs2R.js";import{T as D}from"./Transition-BdkUX36E.js";import{B as E}from"./BaseListItem-Bn8PYb9i.js";import{I as a}from"./Icon-BdzvK7UX.js";import{u as k}from"./useTranslation-DspkRMCK.js";const x=({children:o,menu:n,className:d,disabled:w=!1})=>{const[l,v]=_.useState(!1),[i,s]=_.useState({x:0,y:0}),R=_.useRef(null),C=_.useRef(null),N=r=>{if(w)return;r.preventDefault(),r.stopPropagation();const{clientX:m,clientY:u}=r;s({x:m,y:u}),v(!0)},g=()=>{v(!1)};return _.useEffect(()=>{const r=c=>{C.current&&!C.current.contains(c.target)&&g()},m=c=>{c.key==="Escape"&&g()},u=()=>{g()};return l&&(document.addEventListener("mousedown",r),document.addEventListener("keydown",m),document.addEventListener("scroll",u,!0)),()=>{document.removeEventListener("mousedown",r),document.removeEventListener("keydown",m),document.removeEventListener("scroll",u,!0)}},[l]),_.useLayoutEffect(()=>{if(l&&C.current){const r=C.current.getBoundingClientRect(),m=window.innerWidth,u=window.innerHeight;let{x:c,y:p}=i;c+r.width>m&&(c=m-r.width-10),p+r.height>u&&(p=u-r.height-10),c=Math.max(10,c),p=Math.max(10,p),(c!==i.x||p!==i.y)&&s({x:c,y:p})}},[l,i]),e.jsxs("div",{ref:R,className:b("wim-context-menu-container",d),onContextMenu:N,children:[o,e.jsx(z,{children:e.jsx(D,{show:l,enter:"fade-enter",enterFrom:"fade-enter-from",enterTo:"fade-enter-to",leave:"fade-leave",leaveFrom:"fade-leave-from",leaveTo:"fade-leave-to",ref:C,className:"wim-context-menu",style:{left:`${i.x}px`,top:`${i.y}px`},role:"menu",onClick:g,onKeyDown:r=>{r.key==="Escape"&&g()},tabIndex:-1,children:n})})]})},t=({children:o,onClick:n,disabled:d=!1,className:w,icon:l,danger:v=!1})=>{const i=s=>{s.stopPropagation(),!d&&n&&n()};return e.jsx(E,{className:b("wim-context-menu-item",w),disabled:d,danger:v,icon:l,onClick:s=>i(s),onKeyDown:s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),i(s))},role:"menuitem",tabIndex:d?-1:0,children:o})},y=({className:o})=>e.jsx("div",{className:b("wim-context-menu-divider",o),role:"separator"}),T=({children:o,title:n,className:d})=>e.jsxs("div",{className:b("wim-context-menu-group",d),children:[n&&e.jsx("div",{className:"wim-context-menu-group__title",children:n}),o]});x.__docgenInfo={description:"",methods:[],displayName:"ContextMenu",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},menu:{required:!0,tsType:{name:"ReactNode"},description:"Menu items to display in the context menu"},className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"Disable the context menu",defaultValue:{value:"false",computed:!1}}}};t.__docgenInfo={description:"",methods:[],displayName:"ContextMenuItem",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},danger:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};y.__docgenInfo={description:"",methods:[],displayName:"ContextMenuDivider",props:{className:{required:!1,tsType:{name:"string"},description:""}}};T.__docgenInfo={description:"",methods:[],displayName:"ContextMenuGroup",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},title:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const q={title:"Components/Overlays/ContextMenu",component:x,parameters:{layout:"centered"}},h={render:o=>{const{t:n}=k(["docs","common","components"]);return e.jsx(x,{...o,menu:e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>console.log("Edit clicked"),children:n("story_contextmenu_edit")}),e.jsx(t,{onClick:()=>console.log("Copy clicked"),children:n("story_contextmenu_copy")}),e.jsx(t,{onClick:()=>console.log("Paste clicked"),children:n("story_contextmenu_paste")}),e.jsx(y,{}),e.jsx(t,{onClick:()=>console.log("Delete clicked"),danger:!0,children:n("story_contextmenu_delete")})]}),children:e.jsx("div",{style:{padding:"60px 100px",backgroundColor:"#f0f0f0",border:"2px dashed #ccc",borderRadius:"8px",textAlign:"center",cursor:"pointer"},children:n("story_contextmenu_right_click")})})}},f={render:o=>{const{t:n}=k(["docs","common","components"]);return e.jsx(x,{...o,menu:e.jsxs(e.Fragment,{children:[e.jsx(t,{icon:e.jsx(a,{name:"CheckIcon",size:"small"}),onClick:()=>console.log("Edit clicked"),children:n("story_contextmenu_edit")}),e.jsx(t,{icon:e.jsx(a,{name:"CopyIcon",size:"small"}),onClick:()=>console.log("Copy clicked"),children:n("story_contextmenu_copy")}),e.jsx(t,{icon:e.jsx(a,{name:"CheckIcon",size:"small"}),onClick:()=>console.log("Paste clicked"),children:n("story_contextmenu_paste")}),e.jsx(y,{}),e.jsx(t,{icon:e.jsx(a,{name:"CloseIcon",size:"small"}),onClick:()=>console.log("Delete clicked"),danger:!0,children:n("story_contextmenu_delete")})]}),children:e.jsx("div",{style:{padding:"60px 100px",backgroundColor:"#e0f2fe",border:"2px dashed #0ea5e9",borderRadius:"8px",textAlign:"center",cursor:"pointer"},children:n("story_contextmenu_with_icons")})})}},I={render:o=>{const{t:n}=k(["docs","common","components"]);return e.jsx(x,{...o,menu:e.jsxs(e.Fragment,{children:[e.jsxs(T,{title:n("story_contextmenu_edit_actions"),children:[e.jsx(t,{children:n("story_contextmenu_cut")}),e.jsx(t,{children:n("story_contextmenu_copy")}),e.jsx(t,{children:n("story_contextmenu_paste")})]}),e.jsx(y,{}),e.jsxs(T,{title:n("story_contextmenu_file_actions"),children:[e.jsx(t,{children:n("story_contextmenu_rename")}),e.jsx(t,{children:n("story_contextmenu_move")}),e.jsx(t,{danger:!0,children:n("story_contextmenu_delete")})]})]}),children:e.jsx("div",{style:{padding:"60px 100px",backgroundColor:"#fef3c7",border:"2px dashed #f59e0b",borderRadius:"8px",textAlign:"center",cursor:"pointer"},children:n("story_contextmenu_with_groups")})})}},M={render:o=>{const{t:n}=k(["docs","common","components"]);return e.jsx(x,{...o,menu:e.jsxs(e.Fragment,{children:[e.jsx(t,{children:n("story_contextmenu_cut")}),e.jsx(t,{children:n("story_contextmenu_copy")}),e.jsxs(t,{disabled:!0,children:[n("story_contextmenu_paste")," (disabled)"]}),e.jsx(y,{}),e.jsx(t,{children:n("story_contextmenu_select_all")})]}),children:e.jsx("div",{style:{padding:"60px 100px",backgroundColor:"#dcfce7",border:"2px dashed #22c55e",borderRadius:"8px",textAlign:"center",cursor:"pointer"},children:n("story_contextmenu_disabled")})})}},j={render:o=>{const{t:n}=k(["docs","common","components"]);return e.jsx(x,{...o,menu:e.jsxs(e.Fragment,{children:[e.jsx(t,{icon:e.jsx(a,{name:"CheckIcon",size:"small"}),children:n("story_contextmenu_open_new_tab")}),e.jsx(t,{icon:e.jsx(a,{name:"CopyIcon",size:"small"}),children:n("story_contextmenu_copy_image")}),e.jsx(t,{icon:e.jsx(a,{name:"CopyIcon",size:"small"}),children:n("story_contextmenu_copy_image_address")}),e.jsx(y,{}),e.jsx(t,{icon:e.jsx(a,{name:"CheckIcon",size:"small"}),children:n("story_contextmenu_save_image_as")})]}),children:e.jsx("div",{style:{width:"300px",height:"200px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"18px",fontWeight:"bold",cursor:"pointer"},children:n("story_contextmenu_on_image")})})}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <ContextMenu {...args} menu={<>\r
            <ContextMenuItem onClick={() => console.log("Edit clicked")}>\r
              {t("story_contextmenu_edit")}\r
            </ContextMenuItem>\r
            <ContextMenuItem onClick={() => console.log("Copy clicked")}>\r
              {t("story_contextmenu_copy")}\r
            </ContextMenuItem>\r
            <ContextMenuItem onClick={() => console.log("Paste clicked")}>\r
              {t("story_contextmenu_paste")}\r
            </ContextMenuItem>\r
            <ContextMenuDivider />\r
            <ContextMenuItem onClick={() => console.log("Delete clicked")} danger>\r
              {t("story_contextmenu_delete")}\r
            </ContextMenuItem>\r
          </>}>\r
        <div style={{
        padding: "60px 100px",
        backgroundColor: "#f0f0f0",
        border: "2px dashed #ccc",
        borderRadius: "8px",
        textAlign: "center",
        cursor: "pointer"
      }}>\r
          {t("story_contextmenu_right_click")}\r
        </div>\r
      </ContextMenu>;
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <ContextMenu {...args} menu={<>\r
            <ContextMenuItem icon={<Icon name="CheckIcon" size="small" />} onClick={() => console.log("Edit clicked")}>\r
              {t("story_contextmenu_edit")}\r
            </ContextMenuItem>\r
            <ContextMenuItem icon={<Icon name="CopyIcon" size="small" />} onClick={() => console.log("Copy clicked")}>\r
              {t("story_contextmenu_copy")}\r
            </ContextMenuItem>\r
            <ContextMenuItem icon={<Icon name="CheckIcon" size="small" />} onClick={() => console.log("Paste clicked")}>\r
              {t("story_contextmenu_paste")}\r
            </ContextMenuItem>\r
            <ContextMenuDivider />\r
            <ContextMenuItem icon={<Icon name="CloseIcon" size="small" />} onClick={() => console.log("Delete clicked")} danger>\r
              {t("story_contextmenu_delete")}\r
            </ContextMenuItem>\r
          </>}>\r
        <div style={{
        padding: "60px 100px",
        backgroundColor: "#e0f2fe",
        border: "2px dashed #0ea5e9",
        borderRadius: "8px",
        textAlign: "center",
        cursor: "pointer"
      }}>\r
          {t("story_contextmenu_with_icons")}\r
        </div>\r
      </ContextMenu>;
  }
}`,...f.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <ContextMenu {...args} menu={<>\r
            <ContextMenuGroup title={t("story_contextmenu_edit_actions")}>\r
              <ContextMenuItem>{t("story_contextmenu_cut")}</ContextMenuItem>\r
              <ContextMenuItem>{t("story_contextmenu_copy")}</ContextMenuItem>\r
              <ContextMenuItem>{t("story_contextmenu_paste")}</ContextMenuItem>\r
            </ContextMenuGroup>\r
            <ContextMenuDivider />\r
            <ContextMenuGroup title={t("story_contextmenu_file_actions")}>\r
              <ContextMenuItem>{t("story_contextmenu_rename")}</ContextMenuItem>\r
              <ContextMenuItem>{t("story_contextmenu_move")}</ContextMenuItem>\r
              <ContextMenuItem danger>\r
                {t("story_contextmenu_delete")}\r
              </ContextMenuItem>\r
            </ContextMenuGroup>\r
          </>}>\r
        <div style={{
        padding: "60px 100px",
        backgroundColor: "#fef3c7",
        border: "2px dashed #f59e0b",
        borderRadius: "8px",
        textAlign: "center",
        cursor: "pointer"
      }}>\r
          {t("story_contextmenu_with_groups")}\r
        </div>\r
      </ContextMenu>;
  }
}`,...I.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <ContextMenu {...args} menu={<>\r
            <ContextMenuItem>{t("story_contextmenu_cut")}</ContextMenuItem>\r
            <ContextMenuItem>{t("story_contextmenu_copy")}</ContextMenuItem>\r
            <ContextMenuItem disabled>\r
              {t("story_contextmenu_paste")} (disabled)\r
            </ContextMenuItem>\r
            <ContextMenuDivider />\r
            <ContextMenuItem>{t("story_contextmenu_select_all")}</ContextMenuItem>\r
          </>}>\r
        <div style={{
        padding: "60px 100px",
        backgroundColor: "#dcfce7",
        border: "2px dashed #22c55e",
        borderRadius: "8px",
        textAlign: "center",
        cursor: "pointer"
      }}>\r
          {t("story_contextmenu_disabled")}\r
        </div>\r
      </ContextMenu>;
  }
}`,...M.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <ContextMenu {...args} menu={<>\r
            <ContextMenuItem icon={<Icon name="CheckIcon" size="small" />}>\r
              {t("story_contextmenu_open_new_tab")}\r
            </ContextMenuItem>\r
            <ContextMenuItem icon={<Icon name="CopyIcon" size="small" />}>\r
              {t("story_contextmenu_copy_image")}\r
            </ContextMenuItem>\r
            <ContextMenuItem icon={<Icon name="CopyIcon" size="small" />}>\r
              {t("story_contextmenu_copy_image_address")}\r
            </ContextMenuItem>\r
            <ContextMenuDivider />\r
            <ContextMenuItem icon={<Icon name="CheckIcon" size="small" />}>\r
              {t("story_contextmenu_save_image_as")}\r
            </ContextMenuItem>\r
          </>}>\r
        <div style={{
        width: "300px",
        height: "200px",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontSize: "18px",
        fontWeight: "bold",
        cursor: "pointer"
      }}>\r
          {t("story_contextmenu_on_image")}\r
        </div>\r
      </ContextMenu>;
  }
}`,...j.parameters?.docs?.source}}};const S=["Basic","WithIcons","WithGroups","WithDisabledItems","OnImage"],V=Object.freeze(Object.defineProperty({__proto__:null,Basic:h,OnImage:j,WithDisabledItems:M,WithGroups:I,WithIcons:f,__namedExportsOrder:S,default:q},Symbol.toStringTag,{value:"Module"}));export{V as C,j as O,f as W,I as a,M as b};
