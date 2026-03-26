import{j as e}from"./jsx-runtime-u17CrQMm.js";import{C as s,a as t,b as l,c as _}from"./ContextMenu-C_agp3BS.js";import{I as r}from"./Icon-DnakkRe1.js";import{A as u}from"./iframe-badbAK5Z.js";import{u as m}from"./useTranslation-uxHS973M.js";const p={title:"Components/Overlays/ContextMenu",component:s,parameters:{layout:"centered"}},c={render:o=>{const{t:n}=m(u);return e.jsx(s,{...o,menu:e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>console.log("Edit clicked"),children:n("story_contextmenu_edit")}),e.jsx(t,{onClick:()=>console.log("Copy clicked"),children:n("story_contextmenu_copy")}),e.jsx(t,{onClick:()=>console.log("Paste clicked"),children:n("story_contextmenu_paste")}),e.jsx(l,{}),e.jsx(t,{onClick:()=>console.log("Delete clicked"),danger:!0,children:n("story_contextmenu_delete")})]}),children:e.jsx("div",{style:{padding:"60px 100px",backgroundColor:"#f0f0f0",border:"2px dashed #ccc",borderRadius:"8px",textAlign:"center",cursor:"pointer"},children:n("story_contextmenu_right_click")})})}},i={render:o=>{const{t:n}=m(u);return e.jsx(s,{...o,menu:e.jsxs(e.Fragment,{children:[e.jsx(t,{icon:e.jsx(r,{name:"CheckIcon",size:"small"}),onClick:()=>console.log("Edit clicked"),children:n("story_contextmenu_edit")}),e.jsx(t,{icon:e.jsx(r,{name:"CopyIcon",size:"small"}),onClick:()=>console.log("Copy clicked"),children:n("story_contextmenu_copy")}),e.jsx(t,{icon:e.jsx(r,{name:"CheckIcon",size:"small"}),onClick:()=>console.log("Paste clicked"),children:n("story_contextmenu_paste")}),e.jsx(l,{}),e.jsx(t,{icon:e.jsx(r,{name:"CloseIcon",size:"small"}),onClick:()=>console.log("Delete clicked"),danger:!0,children:n("story_contextmenu_delete")})]}),children:e.jsx("div",{style:{padding:"60px 100px",backgroundColor:"#e0f2fe",border:"2px dashed #0ea5e9",borderRadius:"8px",textAlign:"center",cursor:"pointer"},children:n("story_contextmenu_with_icons")})})}},x={render:o=>{const{t:n}=m(u);return e.jsx(s,{...o,menu:e.jsxs(e.Fragment,{children:[e.jsxs(_,{title:n("story_contextmenu_edit_actions"),children:[e.jsx(t,{children:n("story_contextmenu_cut")}),e.jsx(t,{children:n("story_contextmenu_copy")}),e.jsx(t,{children:n("story_contextmenu_paste")})]}),e.jsx(l,{}),e.jsxs(_,{title:n("story_contextmenu_file_actions"),children:[e.jsx(t,{children:n("story_contextmenu_rename")}),e.jsx(t,{children:n("story_contextmenu_move")}),e.jsx(t,{danger:!0,children:n("story_contextmenu_delete")})]})]}),children:e.jsx("div",{style:{padding:"60px 100px",backgroundColor:"#fef3c7",border:"2px dashed #f59e0b",borderRadius:"8px",textAlign:"center",cursor:"pointer"},children:n("story_contextmenu_with_groups")})})}},a={render:o=>{const{t:n}=m(u);return e.jsx(s,{...o,menu:e.jsxs(e.Fragment,{children:[e.jsx(t,{children:n("story_contextmenu_cut")}),e.jsx(t,{children:n("story_contextmenu_copy")}),e.jsxs(t,{disabled:!0,children:[n("story_contextmenu_paste")," (disabled)"]}),e.jsx(l,{}),e.jsx(t,{children:n("story_contextmenu_select_all")})]}),children:e.jsx("div",{style:{padding:"60px 100px",backgroundColor:"#dcfce7",border:"2px dashed #22c55e",borderRadius:"8px",textAlign:"center",cursor:"pointer"},children:n("story_contextmenu_disabled")})})}},d={render:o=>{const{t:n}=m(u);return e.jsx(s,{...o,menu:e.jsxs(e.Fragment,{children:[e.jsx(t,{icon:e.jsx(r,{name:"CheckIcon",size:"small"}),children:n("story_contextmenu_open_new_tab")}),e.jsx(t,{icon:e.jsx(r,{name:"CopyIcon",size:"small"}),children:n("story_contextmenu_copy_image")}),e.jsx(t,{icon:e.jsx(r,{name:"CopyIcon",size:"small"}),children:n("story_contextmenu_copy_image_address")}),e.jsx(l,{}),e.jsx(t,{icon:e.jsx(r,{name:"CheckIcon",size:"small"}),children:n("story_contextmenu_save_image_as")})]}),children:e.jsx("div",{style:{width:"300px",height:"200px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"18px",fontWeight:"bold",cursor:"pointer"},children:n("story_contextmenu_on_image")})})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <ContextMenu {...args} menu={<>
            <ContextMenuItem onClick={() => console.log("Edit clicked")}>
              {t("story_contextmenu_edit")}
            </ContextMenuItem>
            <ContextMenuItem onClick={() => console.log("Copy clicked")}>
              {t("story_contextmenu_copy")}
            </ContextMenuItem>
            <ContextMenuItem onClick={() => console.log("Paste clicked")}>
              {t("story_contextmenu_paste")}
            </ContextMenuItem>
            <ContextMenuDivider />
            <ContextMenuItem onClick={() => console.log("Delete clicked")} danger>
              {t("story_contextmenu_delete")}
            </ContextMenuItem>
          </>}>
        <div style={{
        padding: "60px 100px",
        backgroundColor: "#f0f0f0",
        border: "2px dashed #ccc",
        borderRadius: "8px",
        textAlign: "center",
        cursor: "pointer"
      }}>
          {t("story_contextmenu_right_click")}
        </div>
      </ContextMenu>;
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <ContextMenu {...args} menu={<>
            <ContextMenuItem icon={<Icon name="CheckIcon" size="small" />} onClick={() => console.log("Edit clicked")}>
              {t("story_contextmenu_edit")}
            </ContextMenuItem>
            <ContextMenuItem icon={<Icon name="CopyIcon" size="small" />} onClick={() => console.log("Copy clicked")}>
              {t("story_contextmenu_copy")}
            </ContextMenuItem>
            <ContextMenuItem icon={<Icon name="CheckIcon" size="small" />} onClick={() => console.log("Paste clicked")}>
              {t("story_contextmenu_paste")}
            </ContextMenuItem>
            <ContextMenuDivider />
            <ContextMenuItem icon={<Icon name="CloseIcon" size="small" />} onClick={() => console.log("Delete clicked")} danger>
              {t("story_contextmenu_delete")}
            </ContextMenuItem>
          </>}>
        <div style={{
        padding: "60px 100px",
        backgroundColor: "#e0f2fe",
        border: "2px dashed #0ea5e9",
        borderRadius: "8px",
        textAlign: "center",
        cursor: "pointer"
      }}>
          {t("story_contextmenu_with_icons")}
        </div>
      </ContextMenu>;
  }
}`,...i.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <ContextMenu {...args} menu={<>
            <ContextMenuGroup title={t("story_contextmenu_edit_actions")}>
              <ContextMenuItem>{t("story_contextmenu_cut")}</ContextMenuItem>
              <ContextMenuItem>{t("story_contextmenu_copy")}</ContextMenuItem>
              <ContextMenuItem>{t("story_contextmenu_paste")}</ContextMenuItem>
            </ContextMenuGroup>
            <ContextMenuDivider />
            <ContextMenuGroup title={t("story_contextmenu_file_actions")}>
              <ContextMenuItem>{t("story_contextmenu_rename")}</ContextMenuItem>
              <ContextMenuItem>{t("story_contextmenu_move")}</ContextMenuItem>
              <ContextMenuItem danger>
                {t("story_contextmenu_delete")}
              </ContextMenuItem>
            </ContextMenuGroup>
          </>}>
        <div style={{
        padding: "60px 100px",
        backgroundColor: "#fef3c7",
        border: "2px dashed #f59e0b",
        borderRadius: "8px",
        textAlign: "center",
        cursor: "pointer"
      }}>
          {t("story_contextmenu_with_groups")}
        </div>
      </ContextMenu>;
  }
}`,...x.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <ContextMenu {...args} menu={<>
            <ContextMenuItem>{t("story_contextmenu_cut")}</ContextMenuItem>
            <ContextMenuItem>{t("story_contextmenu_copy")}</ContextMenuItem>
            <ContextMenuItem disabled>
              {t("story_contextmenu_paste")} (disabled)
            </ContextMenuItem>
            <ContextMenuDivider />
            <ContextMenuItem>{t("story_contextmenu_select_all")}</ContextMenuItem>
          </>}>
        <div style={{
        padding: "60px 100px",
        backgroundColor: "#dcfce7",
        border: "2px dashed #22c55e",
        borderRadius: "8px",
        textAlign: "center",
        cursor: "pointer"
      }}>
          {t("story_contextmenu_disabled")}
        </div>
      </ContextMenu>;
  }
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <ContextMenu {...args} menu={<>
            <ContextMenuItem icon={<Icon name="CheckIcon" size="small" />}>
              {t("story_contextmenu_open_new_tab")}
            </ContextMenuItem>
            <ContextMenuItem icon={<Icon name="CopyIcon" size="small" />}>
              {t("story_contextmenu_copy_image")}
            </ContextMenuItem>
            <ContextMenuItem icon={<Icon name="CopyIcon" size="small" />}>
              {t("story_contextmenu_copy_image_address")}
            </ContextMenuItem>
            <ContextMenuDivider />
            <ContextMenuItem icon={<Icon name="CheckIcon" size="small" />}>
              {t("story_contextmenu_save_image_as")}
            </ContextMenuItem>
          </>}>
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
      }}>
          {t("story_contextmenu_on_image")}
        </div>
      </ContextMenu>;
  }
}`,...d.parameters?.docs?.source}}};const C=["Basic","WithIcons","WithGroups","WithDisabledItems","OnImage"],j=Object.freeze(Object.defineProperty({__proto__:null,Basic:c,OnImage:d,WithDisabledItems:a,WithGroups:x,WithIcons:i,__namedExportsOrder:C,default:p},Symbol.toStringTag,{value:"Module"}));export{j as C,d as O,i as W,x as a,a as b};
