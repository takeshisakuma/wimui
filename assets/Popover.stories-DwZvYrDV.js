import{j as e}from"./jsx-runtime-u17CrQMm.js";import{P as n,a as r,b as t}from"./Popover-Dt4Ondw8.js";import{B as i}from"./Button-Ct4LNsBe.js";import{I as d}from"./Input-Dny5qba0.js";import{L as p}from"./Label-9vZxBHYo.js";import{r as x}from"./iframe-CX-nbmQ1.js";const y={title:"Component/Overlays/Popover",component:n,parameters:{layout:"centered",docs:{description:{component:"A popover component for displaying rich content in a portal-like overlay triggered by a button."}}},argTypes:{defaultOpen:{control:"boolean"},isOpen:{control:"boolean"}}},o={render:c=>e.jsxs(n,{...c,children:[e.jsx(r,{asChild:!0,children:e.jsx(i,{priority:"secondary",label:"Open Popover"})}),e.jsx(t,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[e.jsx("h4",{style:{margin:0},children:"Dimensions"}),e.jsx("p",{style:{margin:0,color:"var(--text-secondary)",fontSize:"0.9rem"},children:"Set the dimensions for the layer."}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsxs("div",{children:[e.jsx(p,{label:"Width",htmlFor:"width",style:{marginBottom:"5px"}}),e.jsx(d,{id:"width",defaultValue:"100%"})]}),e.jsxs("div",{children:[e.jsx(p,{label:"Height",htmlFor:"height",style:{marginBottom:"5px"}}),e.jsx(d,{id:"height",defaultValue:"25px"})]})]})]})})]})},l={render:c=>{const[h,m]=x.useState("300px"),[v,u]=x.useState("auto");return e.jsxs(n,{...c,children:[e.jsx(r,{asChild:!0,children:e.jsx(i,{priority:"secondary",label:"Interactive Popover"})}),e.jsx(t,{className:"custom-width-popover",style:{width:h,height:v},children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[e.jsx("h4",{style:{margin:0},children:"Interactive Dimensions"}),e.jsx("p",{style:{margin:0,color:"var(--text-secondary)",fontSize:"0.9rem"},children:"Change value to see it resize immediately."}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsxs("div",{children:[e.jsx(p,{label:"Width",htmlFor:"interactive-width",style:{marginBottom:"5px"}}),e.jsx(d,{id:"interactive-width",value:h,onChange:g=>m(g.target.value)})]}),e.jsxs("div",{children:[e.jsx(p,{label:"Height",htmlFor:"interactive-height",style:{marginBottom:"5px"}}),e.jsx(d,{id:"interactive-height",value:v,onChange:g=>u(g.target.value)})]})]})]})})]})}},s={render:()=>e.jsxs("div",{style:{display:"flex",gap:"20px"},children:[e.jsxs(n,{children:[e.jsx(r,{asChild:!0,children:e.jsx(i,{label:"Left Align"})}),e.jsx(t,{align:"left",children:e.jsx("div",{style:{padding:"10px"},children:"Left aligned content"})})]}),e.jsxs(n,{children:[e.jsx(r,{asChild:!0,children:e.jsx(i,{label:"Center Align"})}),e.jsx(t,{align:"center",children:e.jsx("div",{style:{padding:"10px"},children:"Center aligned content"})})]}),e.jsxs(n,{children:[e.jsx(r,{asChild:!0,children:e.jsx(i,{label:"Right Align"})}),e.jsx(t,{align:"right",children:e.jsx("div",{style:{padding:"10px"},children:"Right aligned content"})})]})]})},a={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"50px",padding:"50px"},children:[e.jsxs(n,{children:[e.jsx(r,{asChild:!0,children:e.jsx(i,{label:"Top Placement"})}),e.jsx(t,{side:"top",children:e.jsx("div",{style:{padding:"10px"},children:"Appears above"})})]}),e.jsxs(n,{children:[e.jsx(r,{asChild:!0,children:e.jsx(i,{label:"Bottom Placement"})}),e.jsx(t,{side:"bottom",children:e.jsx("div",{style:{padding:"10px"},children:"Appears below"})})]})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const P=["Default","Interactive","Alignment","Placement"],D=Object.freeze(Object.defineProperty({__proto__:null,Alignment:s,Default:o,Interactive:l,Placement:a,__namedExportsOrder:P,default:y},Symbol.toStringTag,{value:"Module"}));export{s as A,o as D,l as I,D as P,a};
