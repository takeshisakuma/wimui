import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as C}from"./iframe-Dq24M1Fk.js";import{c as b}from"./index-Dq8OH074.js";import{P as N}from"./Portal-CleDCuyZ.js";import{T as _}from"./Transition-C3NAUf6O.js";import{I as d}from"./Icon-dNV9D_gQ.js";const x=({children:t,menu:l,className:c,disabled:w=!1})=>{const[a,v]=C.useState(!1),[i,s]=C.useState({x:0,y:0}),D=C.useRef(null),h=C.useRef(null),E=r=>{if(w)return;r.preventDefault(),r.stopPropagation();const{clientX:u,clientY:m}=r;s({x:u,y:m}),v(!0)},f=()=>{v(!1)};return C.useEffect(()=>{const r=o=>{h.current&&!h.current.contains(o.target)&&f()},u=o=>{o.key==="Escape"&&f()},m=()=>{f()};return a&&(document.addEventListener("mousedown",r),document.addEventListener("keydown",u),document.addEventListener("scroll",m,!0)),()=>{document.removeEventListener("mousedown",r),document.removeEventListener("keydown",u),document.removeEventListener("scroll",m,!0)}},[a]),C.useLayoutEffect(()=>{if(a&&h.current){const r=h.current.getBoundingClientRect(),u=window.innerWidth,m=window.innerHeight;let{x:o,y:p}=i;o+r.width>u&&(o=u-r.width-10),p+r.height>m&&(p=m-r.height-10),o=Math.max(10,o),p=Math.max(10,p),(o!==i.x||p!==i.y)&&s({x:o,y:p})}},[a,i]),e.jsxs("div",{ref:D,className:b("wim-context-menu-container",c),onContextMenu:E,children:[t,e.jsx(N,{children:e.jsx(_,{show:a,enter:"fade-enter",enterFrom:"fade-enter-from",enterTo:"fade-enter-to",leave:"fade-leave",leaveFrom:"fade-leave-from",leaveTo:"fade-leave-to",ref:h,className:"wim-context-menu",style:{left:`${i.x}px`,top:`${i.y}px`},role:"menu",onClick:f,onKeyDown:r=>{r.key==="Escape"&&f()},tabIndex:-1,children:l})})]})},n=({children:t,onClick:l,disabled:c=!1,className:w,icon:a,danger:v=!1})=>{const i=s=>{s.stopPropagation(),!c&&l&&l()};return e.jsxs("div",{className:b("wim-context-menu-item",c&&"wim-context-menu-item--disabled",v&&"wim-context-menu-item--danger",w),onClick:i,onKeyDown:s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),i(s))},role:"menuitem",tabIndex:c?-1:0,"aria-disabled":c,children:[a&&e.jsx("span",{className:"wim-context-menu-item__icon",children:a}),e.jsx("span",{className:"wim-context-menu-item__content",children:t})]})},g=({className:t})=>e.jsx("div",{className:b("wim-context-menu-divider",t),role:"separator"}),R=({children:t,title:l,className:c})=>e.jsxs("div",{className:b("wim-context-menu-group",c),children:[l&&e.jsx("div",{className:"wim-context-menu-group__title",children:l}),t]});x.__docgenInfo={description:"",methods:[],displayName:"ContextMenu",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},menu:{required:!0,tsType:{name:"ReactNode"},description:"Menu items to display in the context menu"},className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"Disable the context menu",defaultValue:{value:"false",computed:!1}}}};n.__docgenInfo={description:"",methods:[],displayName:"ContextMenuItem",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},danger:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};g.__docgenInfo={description:"",methods:[],displayName:"ContextMenuDivider",props:{className:{required:!1,tsType:{name:"string"},description:""}}};R.__docgenInfo={description:"",methods:[],displayName:"ContextMenuGroup",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},title:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const z={title:"Component/Overlays/ContextMenu",component:x,parameters:{layout:"centered"}},I={render:t=>e.jsx(x,{...t,menu:e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>console.log("Edit clicked"),children:"Edit"}),e.jsx(n,{onClick:()=>console.log("Copy clicked"),children:"Copy"}),e.jsx(n,{onClick:()=>console.log("Paste clicked"),children:"Paste"}),e.jsx(g,{}),e.jsx(n,{onClick:()=>console.log("Delete clicked"),danger:!0,children:"Delete"})]}),children:e.jsx("div",{style:{padding:"60px 100px",backgroundColor:"#f0f0f0",border:"2px dashed #ccc",borderRadius:"8px",textAlign:"center",cursor:"pointer"},children:"Right-click here"})})},M={render:t=>e.jsx(x,{...t,menu:e.jsxs(e.Fragment,{children:[e.jsx(n,{icon:e.jsx(d,{name:"CheckIcon",size:"small"}),onClick:()=>console.log("Edit clicked"),children:"Edit"}),e.jsx(n,{icon:e.jsx(d,{name:"CopyIcon",size:"small"}),onClick:()=>console.log("Copy clicked"),children:"Copy"}),e.jsx(n,{icon:e.jsx(d,{name:"CheckIcon",size:"small"}),onClick:()=>console.log("Paste clicked"),children:"Paste"}),e.jsx(g,{}),e.jsx(n,{icon:e.jsx(d,{name:"CloseIcon",size:"small"}),onClick:()=>console.log("Delete clicked"),danger:!0,children:"Delete"})]}),children:e.jsx("div",{style:{padding:"60px 100px",backgroundColor:"#e0f2fe",border:"2px dashed #0ea5e9",borderRadius:"8px",textAlign:"center",cursor:"pointer"},children:"Right-click for menu with icons"})})},y={render:t=>e.jsx(x,{...t,menu:e.jsxs(e.Fragment,{children:[e.jsxs(R,{title:"Edit Actions",children:[e.jsx(n,{children:"Cut"}),e.jsx(n,{children:"Copy"}),e.jsx(n,{children:"Paste"})]}),e.jsx(g,{}),e.jsxs(R,{title:"File Actions",children:[e.jsx(n,{children:"Rename"}),e.jsx(n,{children:"Move"}),e.jsx(n,{danger:!0,children:"Delete"})]})]}),children:e.jsx("div",{style:{padding:"60px 100px",backgroundColor:"#fef3c7",border:"2px dashed #f59e0b",borderRadius:"8px",textAlign:"center",cursor:"pointer"},children:"Right-click for grouped menu"})})},k={render:t=>e.jsx(x,{...t,menu:e.jsxs(e.Fragment,{children:[e.jsx(n,{children:"Cut"}),e.jsx(n,{children:"Copy"}),e.jsx(n,{disabled:!0,children:"Paste (disabled)"}),e.jsx(g,{}),e.jsx(n,{children:"Select All"})]}),children:e.jsx("div",{style:{padding:"60px 100px",backgroundColor:"#dcfce7",border:"2px dashed #22c55e",borderRadius:"8px",textAlign:"center",cursor:"pointer"},children:"Right-click (with disabled item)"})})},j={render:t=>e.jsx(x,{...t,menu:e.jsxs(e.Fragment,{children:[e.jsx(n,{icon:e.jsx(d,{name:"CheckIcon",size:"small"}),children:"Open in new tab"}),e.jsx(n,{icon:e.jsx(d,{name:"CopyIcon",size:"small"}),children:"Copy image"}),e.jsx(n,{icon:e.jsx(d,{name:"CopyIcon",size:"small"}),children:"Copy image address"}),e.jsx(g,{}),e.jsx(n,{icon:e.jsx(d,{name:"CheckIcon",size:"small"}),children:"Save image as..."})]}),children:e.jsx("div",{style:{width:"300px",height:"200px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"18px",fontWeight:"bold",cursor:"pointer"},children:"Right-click this image"})})};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: args => <ContextMenu {...args} menu={<>\r
                    <ContextMenuItem onClick={() => console.log("Edit clicked")}>\r
                        Edit\r
                    </ContextMenuItem>\r
                    <ContextMenuItem onClick={() => console.log("Copy clicked")}>\r
                        Copy\r
                    </ContextMenuItem>\r
                    <ContextMenuItem onClick={() => console.log("Paste clicked")}>\r
                        Paste\r
                    </ContextMenuItem>\r
                    <ContextMenuDivider />\r
                    <ContextMenuItem onClick={() => console.log("Delete clicked")} danger>\r
                        Delete\r
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
                Right-click here\r
            </div>\r
        </ContextMenu>
}`,...I.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => <ContextMenu {...args} menu={<>\r
                    <ContextMenuItem icon={<Icon name="CheckIcon" size="small" />} onClick={() => console.log("Edit clicked")}>\r
                        Edit\r
                    </ContextMenuItem>\r
                    <ContextMenuItem icon={<Icon name="CopyIcon" size="small" />} onClick={() => console.log("Copy clicked")}>\r
                        Copy\r
                    </ContextMenuItem>\r
                    <ContextMenuItem icon={<Icon name="CheckIcon" size="small" />} onClick={() => console.log("Paste clicked")}>\r
                        Paste\r
                    </ContextMenuItem>\r
                    <ContextMenuDivider />\r
                    <ContextMenuItem icon={<Icon name="CloseIcon" size="small" />} onClick={() => console.log("Delete clicked")} danger>\r
                        Delete\r
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
                Right-click for menu with icons\r
            </div>\r
        </ContextMenu>
}`,...M.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <ContextMenu {...args} menu={<>\r
                    <ContextMenuGroup title="Edit Actions">\r
                        <ContextMenuItem>Cut</ContextMenuItem>\r
                        <ContextMenuItem>Copy</ContextMenuItem>\r
                        <ContextMenuItem>Paste</ContextMenuItem>\r
                    </ContextMenuGroup>\r
                    <ContextMenuDivider />\r
                    <ContextMenuGroup title="File Actions">\r
                        <ContextMenuItem>Rename</ContextMenuItem>\r
                        <ContextMenuItem>Move</ContextMenuItem>\r
                        <ContextMenuItem danger>Delete</ContextMenuItem>\r
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
                Right-click for grouped menu\r
            </div>\r
        </ContextMenu>
}`,...y.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => <ContextMenu {...args} menu={<>\r
                    <ContextMenuItem>Cut</ContextMenuItem>\r
                    <ContextMenuItem>Copy</ContextMenuItem>\r
                    <ContextMenuItem disabled>Paste (disabled)</ContextMenuItem>\r
                    <ContextMenuDivider />\r
                    <ContextMenuItem>Select All</ContextMenuItem>\r
                </>}>\r
            <div style={{
      padding: "60px 100px",
      backgroundColor: "#dcfce7",
      border: "2px dashed #22c55e",
      borderRadius: "8px",
      textAlign: "center",
      cursor: "pointer"
    }}>\r
                Right-click (with disabled item)\r
            </div>\r
        </ContextMenu>
}`,...k.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => <ContextMenu {...args} menu={<>\r
                    <ContextMenuItem icon={<Icon name="CheckIcon" size="small" />}>\r
                        Open in new tab\r
                    </ContextMenuItem>\r
                    <ContextMenuItem icon={<Icon name="CopyIcon" size="small" />}>\r
                        Copy image\r
                    </ContextMenuItem>\r
                    <ContextMenuItem icon={<Icon name="CopyIcon" size="small" />}>\r
                        Copy image address\r
                    </ContextMenuItem>\r
                    <ContextMenuDivider />\r
                    <ContextMenuItem icon={<Icon name="CheckIcon" size="small" />}>\r
                        Save image as...\r
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
                Right-click this image\r
            </div>\r
        </ContextMenu>
}`,...j.parameters?.docs?.source}}};const T=["Basic","WithIcons","WithGroups","WithDisabledItems","OnImage"],F=Object.freeze(Object.defineProperty({__proto__:null,Basic:I,OnImage:j,WithDisabledItems:k,WithGroups:y,WithIcons:M,__namedExportsOrder:T,default:z},Symbol.toStringTag,{value:"Module"}));export{F as C,j as O,M as W,y as a,k as b};
