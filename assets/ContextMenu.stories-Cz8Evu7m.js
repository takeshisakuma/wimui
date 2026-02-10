import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-DkKouYTS.js";import{I as a}from"./Icon-DR9Ol5M1.js";const m=({children:t,menu:d,className:i="",disabled:v=!1})=>{const[s,k]=p.useState(!1),[c,j]=p.useState({x:0,y:0}),R=p.useRef(null),g=p.useRef(null),D=r=>{if(v)return;r.preventDefault(),r.stopPropagation();const{clientX:l,clientY:u}=r;j({x:l,y:u}),k(!0)},b=()=>{k(!1)};return p.useEffect(()=>{const r=o=>{g.current&&!g.current.contains(o.target)&&b()},l=o=>{o.key==="Escape"&&b()},u=()=>{b()};return s&&(document.addEventListener("mousedown",r),document.addEventListener("keydown",l),document.addEventListener("scroll",u,!0)),()=>{document.removeEventListener("mousedown",r),document.removeEventListener("keydown",l),document.removeEventListener("scroll",u,!0)}},[s]),p.useEffect(()=>{if(s&&g.current){const r=g.current.getBoundingClientRect(),l=window.innerWidth,u=window.innerHeight;let{x:o,y:x}=c;o+r.width>l&&(o=l-r.width-10),x+r.height>u&&(x=u-r.height-10),o=Math.max(10,o),x=Math.max(10,x),(o!==c.x||x!==c.y)&&j({x:o,y:x})}},[s,c]),e.jsxs("div",{ref:R,className:`wim-context-menu-container ${i}`,onContextMenu:D,children:[t,s&&e.jsx("div",{ref:g,className:"wim-context-menu",style:{left:`${c.x}px`,top:`${c.y}px`},role:"menu",onClick:b,children:d})]})},n=({children:t,onClick:d,disabled:i=!1,className:v="",icon:s,danger:k=!1})=>{const c=j=>{j.stopPropagation(),!i&&d&&d()};return e.jsxs("div",{className:`wim-context-menu-item ${i?"wim-context-menu-item--disabled":""} ${k?"wim-context-menu-item--danger":""} ${v}`,onClick:c,role:"menuitem",tabIndex:i?-1:0,"aria-disabled":i,children:[s&&e.jsx("span",{className:"wim-context-menu-item__icon",children:s}),e.jsx("span",{className:"wim-context-menu-item__content",children:t})]})},C=({className:t=""})=>e.jsx("div",{className:`wim-context-menu-divider ${t}`,role:"separator"}),w=({children:t,title:d,className:i=""})=>e.jsxs("div",{className:`wim-context-menu-group ${i}`,children:[d&&e.jsx("div",{className:"wim-context-menu-group__title",children:d}),t]});m.__docgenInfo={description:"",methods:[],displayName:"ContextMenu",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},menu:{required:!0,tsType:{name:"ReactNode"},description:"Menu items to display in the context menu"},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disable the context menu",defaultValue:{value:"false",computed:!1}}}};n.__docgenInfo={description:"",methods:[],displayName:"ContextMenuItem",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:""},danger:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};C.__docgenInfo={description:"",methods:[],displayName:"ContextMenuDivider",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};w.__docgenInfo={description:"",methods:[],displayName:"ContextMenuGroup",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},title:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const E={title:"Component/Navigation/ContextMenu",component:m,parameters:{layout:"centered"}},h={render:t=>e.jsx(m,{...t,menu:e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>console.log("Edit clicked"),children:"Edit"}),e.jsx(n,{onClick:()=>console.log("Copy clicked"),children:"Copy"}),e.jsx(n,{onClick:()=>console.log("Paste clicked"),children:"Paste"}),e.jsx(C,{}),e.jsx(n,{onClick:()=>console.log("Delete clicked"),danger:!0,children:"Delete"})]}),children:e.jsx("div",{style:{padding:"60px 100px",backgroundColor:"#f0f0f0",border:"2px dashed #ccc",borderRadius:"8px",textAlign:"center",cursor:"pointer"},children:"Right-click here"})})},f={render:t=>e.jsx(m,{...t,menu:e.jsxs(e.Fragment,{children:[e.jsx(n,{icon:e.jsx(a,{name:"CheckIcon",size:"small"}),onClick:()=>console.log("Edit clicked"),children:"Edit"}),e.jsx(n,{icon:e.jsx(a,{name:"CopyIcon",size:"small"}),onClick:()=>console.log("Copy clicked"),children:"Copy"}),e.jsx(n,{icon:e.jsx(a,{name:"CheckIcon",size:"small"}),onClick:()=>console.log("Paste clicked"),children:"Paste"}),e.jsx(C,{}),e.jsx(n,{icon:e.jsx(a,{name:"CloseIcon",size:"small"}),onClick:()=>console.log("Delete clicked"),danger:!0,children:"Delete"})]}),children:e.jsx("div",{style:{padding:"60px 100px",backgroundColor:"#e0f2fe",border:"2px dashed #0ea5e9",borderRadius:"8px",textAlign:"center",cursor:"pointer"},children:"Right-click for menu with icons"})})},I={render:t=>e.jsx(m,{...t,menu:e.jsxs(e.Fragment,{children:[e.jsxs(w,{title:"Edit Actions",children:[e.jsx(n,{children:"Cut"}),e.jsx(n,{children:"Copy"}),e.jsx(n,{children:"Paste"})]}),e.jsx(C,{}),e.jsxs(w,{title:"File Actions",children:[e.jsx(n,{children:"Rename"}),e.jsx(n,{children:"Move"}),e.jsx(n,{danger:!0,children:"Delete"})]})]}),children:e.jsx("div",{style:{padding:"60px 100px",backgroundColor:"#fef3c7",border:"2px dashed #f59e0b",borderRadius:"8px",textAlign:"center",cursor:"pointer"},children:"Right-click for grouped menu"})})},M={render:t=>e.jsx(m,{...t,menu:e.jsxs(e.Fragment,{children:[e.jsx(n,{children:"Cut"}),e.jsx(n,{children:"Copy"}),e.jsx(n,{disabled:!0,children:"Paste (disabled)"}),e.jsx(C,{}),e.jsx(n,{children:"Select All"})]}),children:e.jsx("div",{style:{padding:"60px 100px",backgroundColor:"#dcfce7",border:"2px dashed #22c55e",borderRadius:"8px",textAlign:"center",cursor:"pointer"},children:"Right-click (with disabled item)"})})},y={render:t=>e.jsx(m,{...t,menu:e.jsxs(e.Fragment,{children:[e.jsx(n,{icon:e.jsx(a,{name:"CheckIcon",size:"small"}),children:"Open in new tab"}),e.jsx(n,{icon:e.jsx(a,{name:"CopyIcon",size:"small"}),children:"Copy image"}),e.jsx(n,{icon:e.jsx(a,{name:"CopyIcon",size:"small"}),children:"Copy image address"}),e.jsx(C,{}),e.jsx(n,{icon:e.jsx(a,{name:"CheckIcon",size:"small"}),children:"Save image as..."})]}),children:e.jsx("div",{style:{width:"300px",height:"200px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"18px",fontWeight:"bold",cursor:"pointer"},children:"Right-click this image"})})};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};const N=["Basic","WithIcons","WithGroups","WithDisabledItems","OnImage"],P=Object.freeze(Object.defineProperty({__proto__:null,Basic:h,OnImage:y,WithDisabledItems:M,WithGroups:I,WithIcons:f,__namedExportsOrder:N,default:E},Symbol.toStringTag,{value:"Module"}));export{P as C,y as O,f as W,I as a,M as b};
