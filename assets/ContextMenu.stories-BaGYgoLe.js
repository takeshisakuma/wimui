import{j as e}from"./jsx-runtime-u17CrQMm.js";import{C as s,a as t,b as l,c as _}from"./ContextMenu-CiYQBscw.js";import{I as r}from"./Icon-C3wtoj5L.js";import{A as u}from"./i18nConstants-BpHxieg5.js";import{u as m}from"./useTranslation-vvBMO_AT.js";const p={title:"Components/Overlays/ContextMenu",component:s,parameters:{layout:"centered"}},c={render:o=>{const{t:n}=m(u);return e.jsx(s,{...o,menu:e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>console.log("Edit clicked"),children:n("story_contextmenu_edit")}),e.jsx(t,{onClick:()=>console.log("Copy clicked"),children:n("story_contextmenu_copy")}),e.jsx(t,{onClick:()=>console.log("Paste clicked"),children:n("story_contextmenu_paste")}),e.jsx(l,{}),e.jsx(t,{onClick:()=>console.log("Delete clicked"),danger:!0,children:n("story_contextmenu_delete")})]}),children:e.jsx("div",{style:{padding:"60px 100px",backgroundColor:"#f0f0f0",border:"2px dashed #ccc",borderRadius:"8px",textAlign:"center",cursor:"pointer"},children:n("story_contextmenu_right_click")})})}},i={render:o=>{const{t:n}=m(u);return e.jsx(s,{...o,menu:e.jsxs(e.Fragment,{children:[e.jsx(t,{icon:e.jsx(r,{name:"CheckIcon",size:"small"}),onClick:()=>console.log("Edit clicked"),children:n("story_contextmenu_edit")}),e.jsx(t,{icon:e.jsx(r,{name:"CopyIcon",size:"small"}),onClick:()=>console.log("Copy clicked"),children:n("story_contextmenu_copy")}),e.jsx(t,{icon:e.jsx(r,{name:"CheckIcon",size:"small"}),onClick:()=>console.log("Paste clicked"),children:n("story_contextmenu_paste")}),e.jsx(l,{}),e.jsx(t,{icon:e.jsx(r,{name:"CloseIcon",size:"small"}),onClick:()=>console.log("Delete clicked"),danger:!0,children:n("story_contextmenu_delete")})]}),children:e.jsx("div",{style:{padding:"60px 100px",backgroundColor:"#e0f2fe",border:"2px dashed #0ea5e9",borderRadius:"8px",textAlign:"center",cursor:"pointer"},children:n("story_contextmenu_with_icons")})})}},x={render:o=>{const{t:n}=m(u);return e.jsx(s,{...o,menu:e.jsxs(e.Fragment,{children:[e.jsxs(_,{title:n("story_contextmenu_edit_actions"),children:[e.jsx(t,{children:n("story_contextmenu_cut")}),e.jsx(t,{children:n("story_contextmenu_copy")}),e.jsx(t,{children:n("story_contextmenu_paste")})]}),e.jsx(l,{}),e.jsxs(_,{title:n("story_contextmenu_file_actions"),children:[e.jsx(t,{children:n("story_contextmenu_rename")}),e.jsx(t,{children:n("story_contextmenu_move")}),e.jsx(t,{danger:!0,children:n("story_contextmenu_delete")})]})]}),children:e.jsx("div",{style:{padding:"60px 100px",backgroundColor:"#fef3c7",border:"2px dashed #f59e0b",borderRadius:"8px",textAlign:"center",cursor:"pointer"},children:n("story_contextmenu_with_groups")})})}},a={render:o=>{const{t:n}=m(u);return e.jsx(s,{...o,menu:e.jsxs(e.Fragment,{children:[e.jsx(t,{children:n("story_contextmenu_cut")}),e.jsx(t,{children:n("story_contextmenu_copy")}),e.jsxs(t,{disabled:!0,children:[n("story_contextmenu_paste")," (disabled)"]}),e.jsx(l,{}),e.jsx(t,{children:n("story_contextmenu_select_all")})]}),children:e.jsx("div",{style:{padding:"60px 100px",backgroundColor:"#dcfce7",border:"2px dashed #22c55e",borderRadius:"8px",textAlign:"center",cursor:"pointer"},children:n("story_contextmenu_disabled")})})}},d={render:o=>{const{t:n}=m(u);return e.jsx(s,{...o,menu:e.jsxs(e.Fragment,{children:[e.jsx(t,{icon:e.jsx(r,{name:"CheckIcon",size:"small"}),children:n("story_contextmenu_open_new_tab")}),e.jsx(t,{icon:e.jsx(r,{name:"CopyIcon",size:"small"}),children:n("story_contextmenu_copy_image")}),e.jsx(t,{icon:e.jsx(r,{name:"CopyIcon",size:"small"}),children:n("story_contextmenu_copy_image_address")}),e.jsx(l,{}),e.jsx(t,{icon:e.jsx(r,{name:"CheckIcon",size:"small"}),children:n("story_contextmenu_save_image_as")})]}),children:e.jsx("div",{style:{width:"300px",height:"200px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"18px",fontWeight:"bold",cursor:"pointer"},children:n("story_contextmenu_on_image")})})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,...i.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,...x.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,...d.parameters?.docs?.source}}};const C=["Basic","WithIcons","WithGroups","WithDisabledItems","OnImage"],j=Object.freeze(Object.defineProperty({__proto__:null,Basic:c,OnImage:d,WithDisabledItems:a,WithGroups:x,WithIcons:i,__namedExportsOrder:C,default:p},Symbol.toStringTag,{value:"Module"}));export{j as C,d as O,i as W,x as a,a as b};
