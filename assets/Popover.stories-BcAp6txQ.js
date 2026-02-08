import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as h,R as x}from"./iframe-UVeQVETo.js";import{c as j}from"./index-DJ1qAxoN.js";import{B as p}from"./Button-Cmh8kZ5V.js";import{I as b}from"./Input-S_37IEqr.js";import{L as C}from"./Label-DDIm87Nm.js";const S=x.createContext({isOpen:!1,toggle:()=>{},close:()=>{},open:()=>{}}),a=({children:n,className:o="",defaultOpen:d=!1,isOpen:t,onOpenChange:r})=>{const[i,f]=h.useState(d),y=t!==void 0,P=y?t:i,w=h.useRef(null),I=()=>{const c=!P;y||f(c),r?.(c)},T=()=>{y||f(!1),r?.(!1)},N=()=>{y||f(!0),r?.(!0)};return h.useEffect(()=>{const c=B=>{w.current&&!w.current.contains(B.target)&&T()},D=B=>{B.key==="Escape"&&T()};return P&&(document.addEventListener("mousedown",c),document.addEventListener("keydown",D)),()=>{document.removeEventListener("mousedown",c),document.removeEventListener("keydown",D)}},[P]),e.jsx(S.Provider,{value:{isOpen:P,toggle:I,close:T,open:N},children:e.jsx("div",{className:j("wim-popover",o),ref:w,children:n})})},s=({children:n,className:o="",asChild:d})=>{const{toggle:t,isOpen:r}=x.useContext(S);return d&&x.isValidElement(n)?x.cloneElement(n,{onClick:i=>{n.props.onClick?.(i),t()},className:j(o,n.props.className),"aria-haspopup":"true","aria-expanded":r}):e.jsx("button",{className:j("wim-popover-trigger",o),onClick:t,"aria-haspopup":"true","aria-expanded":r,type:"button",children:n})},l=({children:n,className:o="",align:d="left",side:t="bottom",...r})=>{const{isOpen:i}=x.useContext(S);return i?e.jsx("div",{className:j("wim-popover-content",`wim-popover-content--align-${d}`,`wim-popover-content--${t}`,o),role:"dialog",...r,children:n}):null};a.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"If true, the popover component will manage its own open state.",defaultValue:{value:"false",computed:!1}},isOpen:{required:!1,tsType:{name:"boolean"},description:"If provided, controls the open state."},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Callback when open state changes."}}};s.__docgenInfo={description:"",methods:[],displayName:"PopoverTrigger",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},asChild:{required:!1,tsType:{name:"boolean"},description:""}}};l.__docgenInfo={description:"",methods:[],displayName:"PopoverContent",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},align:{required:!1,tsType:{name:"union",raw:'"left" | "right" | "center"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'},{name:"literal",value:'"center"'}]},description:"",defaultValue:{value:'"left"',computed:!1}},side:{required:!1,tsType:{name:"union",raw:'"top" | "bottom"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'}]},description:"",defaultValue:{value:'"bottom"',computed:!1}}}};const O={title:"Component/Overlays/Popover",component:a,parameters:{layout:"centered",docs:{description:{component:"A popover component for displaying rich content in a portal-like overlay triggered by a button."}}},argTypes:{defaultOpen:{control:"boolean"},isOpen:{control:"boolean"}}},m={render:n=>e.jsxs(a,{...n,children:[e.jsx(s,{asChild:!0,children:e.jsx(p,{priority:"secondary",label:"Open Popover"})}),e.jsx(l,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[e.jsx("h4",{style:{margin:0},children:"Dimensions"}),e.jsx("p",{style:{margin:0,color:"var(--text-secondary)",fontSize:"0.9rem"},children:"Set the dimensions for the layer."}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsxs("div",{children:[e.jsx(C,{label:"Width",htmlFor:"width",style:{marginBottom:"5px"}}),e.jsx(b,{id:"width",defaultValue:"100%"})]}),e.jsxs("div",{children:[e.jsx(C,{label:"Height",htmlFor:"height",style:{marginBottom:"5px"}}),e.jsx(b,{id:"height",defaultValue:"25px"})]})]})]})})]})},v={render:n=>{const[o,d]=h.useState("300px"),[t,r]=h.useState("auto");return e.jsxs(a,{...n,children:[e.jsx(s,{asChild:!0,children:e.jsx(p,{priority:"secondary",label:"Interactive Popover"})}),e.jsx(l,{className:"custom-width-popover",style:{width:o,height:t},children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[e.jsx("h4",{style:{margin:0},children:"Interactive Dimensions"}),e.jsx("p",{style:{margin:0,color:"var(--text-secondary)",fontSize:"0.9rem"},children:"Change value to see it resize immediately."}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsxs("div",{children:[e.jsx(C,{label:"Width",htmlFor:"interactive-width",style:{marginBottom:"5px"}}),e.jsx(b,{id:"interactive-width",value:o,onChange:i=>d(i.target.value)})]}),e.jsxs("div",{children:[e.jsx(C,{label:"Height",htmlFor:"interactive-height",style:{marginBottom:"5px"}}),e.jsx(b,{id:"interactive-height",value:t,onChange:i=>r(i.target.value)})]})]})]})})]})}},g={render:()=>e.jsxs("div",{style:{display:"flex",gap:"20px"},children:[e.jsxs(a,{children:[e.jsx(s,{asChild:!0,children:e.jsx(p,{label:"Left Align"})}),e.jsx(l,{align:"left",children:e.jsx("div",{style:{padding:"10px"},children:"Left aligned content"})})]}),e.jsxs(a,{children:[e.jsx(s,{asChild:!0,children:e.jsx(p,{label:"Center Align"})}),e.jsx(l,{align:"center",children:e.jsx("div",{style:{padding:"10px"},children:"Center aligned content"})})]}),e.jsxs(a,{children:[e.jsx(s,{asChild:!0,children:e.jsx(p,{label:"Right Align"})}),e.jsx(l,{align:"right",children:e.jsx("div",{style:{padding:"10px"},children:"Right aligned content"})})]})]})},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"50px",padding:"50px"},children:[e.jsxs(a,{children:[e.jsx(s,{asChild:!0,children:e.jsx(p,{label:"Top Placement"})}),e.jsx(l,{side:"top",children:e.jsx("div",{style:{padding:"10px"},children:"Appears above"})})]}),e.jsxs(a,{children:[e.jsx(s,{asChild:!0,children:e.jsx(p,{label:"Bottom Placement"})}),e.jsx(l,{side:"bottom",children:e.jsx("div",{style:{padding:"10px"},children:"Appears below"})})]})]})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <Popover {...args}>\r
            <PopoverTrigger asChild>\r
                <Button priority="secondary" label="Open Popover" />\r
            </PopoverTrigger>\r
            <PopoverContent>\r
                <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px"
      }}>\r
                    <h4 style={{
          margin: 0
        }}>Dimensions</h4>\r
                    <p style={{
          margin: 0,
          color: "var(--text-secondary)",
          fontSize: "0.9rem"
        }}>Set the dimensions for the layer.</p>\r
                    <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px"
        }}>\r
                        <div>\r
                            <Label label="Width" htmlFor="width" style={{
              marginBottom: "5px"
            }} />\r
                            <Input id="width" defaultValue="100%" />\r
                        </div>\r
                        <div>\r
                            <Label label="Height" htmlFor="height" style={{
              marginBottom: "5px"
            }} />\r
                            <Input id="height" defaultValue="25px" />\r
                        </div>\r
                    </div>\r
                </div>\r
\r
            </PopoverContent>\r
        </Popover>
}`,...m.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [width, setWidth] = useState("300px");
    const [height, setHeight] = useState("auto");
    return <Popover {...args}>\r
                <PopoverTrigger asChild>\r
                    <Button priority="secondary" label="Interactive Popover" />\r
                </PopoverTrigger>\r
                <PopoverContent className="custom-width-popover" style={{
        width,
        height
      }}>\r
                    <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px"
        }}>\r
                        <h4 style={{
            margin: 0
          }}>Interactive Dimensions</h4>\r
                        <p style={{
            margin: 0,
            color: "var(--text-secondary)",
            fontSize: "0.9rem"
          }}>\r
                            Change value to see it resize immediately.\r
                        </p>\r
                        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px"
          }}>\r
                            <div>\r
                                <Label label="Width" htmlFor="interactive-width" style={{
                marginBottom: "5px"
              }} />\r
                                <Input id="interactive-width" value={width} onChange={e => setWidth(e.target.value)} />\r
                            </div>\r
                            <div>\r
                                <Label label="Height" htmlFor="interactive-height" style={{
                marginBottom: "5px"
              }} />\r
                                <Input id="interactive-height" value={height} onChange={e => setHeight(e.target.value)} />\r
                            </div>\r
                        </div>\r
                    </div>\r
                </PopoverContent>\r
            </Popover>;
  }
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "20px"
  }}>\r
            <Popover>\r
                <PopoverTrigger asChild>\r
                    <Button label="Left Align" />\r
                </PopoverTrigger>\r
                <PopoverContent align="left">\r
                    <div style={{
          padding: "10px"
        }}>Left aligned content</div>\r
                </PopoverContent>\r
            </Popover>\r
            <Popover>\r
                <PopoverTrigger asChild>\r
                    <Button label="Center Align" />\r
                </PopoverTrigger>\r
                <PopoverContent align="center">\r
                    <div style={{
          padding: "10px"
        }}>Center aligned content</div>\r
                </PopoverContent>\r
            </Popover>\r
            <Popover>\r
                <PopoverTrigger asChild>\r
                    <Button label="Right Align" />\r
                </PopoverTrigger>\r
                <PopoverContent align="right">\r
                    <div style={{
          padding: "10px"
        }}>Right aligned content</div>\r
                </PopoverContent>\r
            </Popover>\r
        </div>
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "50px",
    padding: "50px"
  }}>\r
            <Popover>\r
                <PopoverTrigger asChild>\r
                    <Button label="Top Placement" />\r
                </PopoverTrigger>\r
                <PopoverContent side="top">\r
                    <div style={{
          padding: "10px"
        }}>Appears above</div>\r
                </PopoverContent>\r
            </Popover>\r
            <Popover>\r
                <PopoverTrigger asChild>\r
                    <Button label="Bottom Placement" />\r
                </PopoverTrigger>\r
                <PopoverContent side="bottom">\r
                    <div style={{
          padding: "10px"
        }}>Appears below</div>\r
                </PopoverContent>\r
            </Popover>\r
        </div>
}`,...u.parameters?.docs?.source}}};const A=["Default","Interactive","Alignment","Placement"],k=Object.freeze(Object.defineProperty({__proto__:null,Alignment:g,Default:m,Interactive:v,Placement:u,__namedExportsOrder:A,default:O},Symbol.toStringTag,{value:"Module"}));export{g as A,m as D,v as I,k as P,u as a};
