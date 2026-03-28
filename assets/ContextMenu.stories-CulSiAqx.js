import{j as e}from"./jsx-runtime-u17CrQMm.js";import{C as s,a as t,b as _,c as p}from"./ContextMenu-CAQxQVNv.js";import{I as r}from"./Icon-FMbScSKn.js";import{A as c}from"./iframe-Ctdkiilp.js";import{u as i}from"./useTranslation-BTb00TCF.js";const C={title:"Components/Overlays/ContextMenu",component:s,parameters:{layout:"centered"},argTypes:{disabled:{control:"boolean"}}},d={args:{disabled:!1},render:o=>{const{t:n}=i(c);return e.jsx(s,{...o,menu:e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>console.log("Edit clicked"),children:n("story_contextmenu_edit")}),e.jsx(t,{onClick:()=>console.log("Copy clicked"),children:n("story_contextmenu_copy")}),e.jsx(t,{onClick:()=>console.log("Paste clicked"),children:n("story_contextmenu_paste")}),e.jsx(_,{}),e.jsx(t,{onClick:()=>console.log("Delete clicked"),danger:!0,children:n("story_contextmenu_delete")})]}),children:e.jsx("div",{style:{padding:"60px 100px",backgroundColor:"#f0f0f0",border:"2px dashed #ccc",borderRadius:"8px",textAlign:"center",cursor:"pointer"},children:n("story_contextmenu_right_click")})})}},a={args:{disabled:!0},render:o=>{const{t:n}=i(c);return e.jsx(s,{...o,menu:e.jsxs(e.Fragment,{children:[e.jsx(t,{children:n("story_contextmenu_edit")}),e.jsx(t,{children:n("story_contextmenu_copy")}),e.jsx(t,{children:n("story_contextmenu_paste")})]}),children:e.jsx("div",{style:{padding:"60px 100px",backgroundColor:"#f0f0f0",border:"2px dashed #ccc",borderRadius:"8px",textAlign:"center",cursor:"pointer"},children:n("story_contextmenu_disabled_menu")})})}},x={render:o=>{const{t:n}=i(c);return e.jsx(s,{...o,menu:e.jsxs(e.Fragment,{children:[e.jsx(t,{icon:e.jsx(r,{name:"CheckIcon",size:"small"}),onClick:()=>console.log("Edit clicked"),children:n("story_contextmenu_edit")}),e.jsx(t,{icon:e.jsx(r,{name:"CopyIcon",size:"small"}),onClick:()=>console.log("Copy clicked"),children:n("story_contextmenu_copy")}),e.jsx(t,{icon:e.jsx(r,{name:"CheckIcon",size:"small"}),onClick:()=>console.log("Paste clicked"),children:n("story_contextmenu_paste")}),e.jsx(_,{}),e.jsx(t,{icon:e.jsx(r,{name:"CloseIcon",size:"small"}),onClick:()=>console.log("Delete clicked"),danger:!0,children:n("story_contextmenu_delete")})]}),children:e.jsx("div",{style:{padding:"60px 100px",backgroundColor:"#e0f2fe",border:"2px dashed #0ea5e9",borderRadius:"8px",textAlign:"center",cursor:"pointer"},children:n("story_contextmenu_with_icons")})})}},u={render:o=>{const{t:n}=i(c);return e.jsx(s,{...o,menu:e.jsxs(e.Fragment,{children:[e.jsxs(p,{title:n("story_contextmenu_edit_actions"),children:[e.jsx(t,{children:n("story_contextmenu_cut")}),e.jsx(t,{children:n("story_contextmenu_copy")}),e.jsx(t,{children:n("story_contextmenu_paste")})]}),e.jsx(_,{}),e.jsxs(p,{title:n("story_contextmenu_file_actions"),children:[e.jsx(t,{children:n("story_contextmenu_rename")}),e.jsx(t,{children:n("story_contextmenu_move")}),e.jsx(t,{danger:!0,children:n("story_contextmenu_delete")})]})]}),children:e.jsx("div",{style:{padding:"60px 100px",backgroundColor:"#fef3c7",border:"2px dashed #f59e0b",borderRadius:"8px",textAlign:"center",cursor:"pointer"},children:n("story_contextmenu_with_groups")})})}},l={render:o=>{const{t:n}=i(c);return e.jsx(s,{...o,menu:e.jsxs(e.Fragment,{children:[e.jsx(t,{children:n("story_contextmenu_cut")}),e.jsx(t,{children:n("story_contextmenu_copy")}),e.jsxs(t,{disabled:!0,children:[n("story_contextmenu_paste")," (disabled)"]}),e.jsx(_,{}),e.jsx(t,{children:n("story_contextmenu_select_all")})]}),children:e.jsx("div",{style:{padding:"60px 100px",backgroundColor:"#dcfce7",border:"2px dashed #22c55e",borderRadius:"8px",textAlign:"center",cursor:"pointer"},children:n("story_contextmenu_disabled")})})}},m={render:o=>{const{t:n}=i(c);return e.jsx(s,{...o,menu:e.jsxs(e.Fragment,{children:[e.jsx(t,{icon:e.jsx(r,{name:"CheckIcon",size:"small"}),children:n("story_contextmenu_open_new_tab")}),e.jsx(t,{icon:e.jsx(r,{name:"CopyIcon",size:"small"}),children:n("story_contextmenu_copy_image")}),e.jsx(t,{icon:e.jsx(r,{name:"CopyIcon",size:"small"}),children:n("story_contextmenu_copy_image_address")}),e.jsx(_,{}),e.jsx(t,{icon:e.jsx(r,{name:"CheckIcon",size:"small"}),children:n("story_contextmenu_save_image_as")})]}),children:e.jsx("div",{style:{width:"300px",height:"200px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"18px",fontWeight:"bold",cursor:"pointer"},children:n("story_contextmenu_on_image")})})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: false
  },
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
}`,...d.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <ContextMenu {...args} menu={<>
            <ContextMenuItem>{t("story_contextmenu_edit")}</ContextMenuItem>
            <ContextMenuItem>{t("story_contextmenu_copy")}</ContextMenuItem>
            <ContextMenuItem>{t("story_contextmenu_paste")}</ContextMenuItem>
          </>}>
        <div style={{
        padding: "60px 100px",
        backgroundColor: "#f0f0f0",
        border: "2px dashed #ccc",
        borderRadius: "8px",
        textAlign: "center",
        cursor: "pointer"
      }}>
          {t("story_contextmenu_disabled_menu")}
        </div>
      </ContextMenu>;
  }
}`,...a.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const y=["Basic","Disabled","WithIcons","WithGroups","WithDisabledItems","OnImage"],j=Object.freeze(Object.defineProperty({__proto__:null,Basic:d,Disabled:a,OnImage:m,WithDisabledItems:l,WithGroups:u,WithIcons:x,__namedExportsOrder:y,default:C},Symbol.toStringTag,{value:"Module"}));export{j as C,m as O,x as W,u as a,l as b};
