import{j as e}from"./jsx-runtime-u17CrQMm.js";import{P as o,a as r,b as i}from"./Popover-UovjwkF1.js";import{B as s}from"./Button-sgJOr0uL.js";import{I as c}from"./Input-CbpOCVpz.js";import{L as v}from"./FieldTemplate-ZaPMnHJW.js";import{r as u,A as h}from"./iframe-CbS9gB6V.js";import{u as x}from"./useTranslation-1pI0prKY.js";const P={title:"Components/Overlays/Popover",component:o,parameters:{layout:"centered",docs:{description:{component:"A popover component for displaying rich content in a portal-like overlay triggered by a button."}}},argTypes:{defaultOpen:{control:"boolean"},open:{control:"boolean"}}},p={render:function(n){const{t}=x(h);return e.jsxs(o,{...n,children:[e.jsx(r,{asChild:!0,children:e.jsx(s,{priority:"secondary",label:t("story_popover_open")})}),e.jsx(i,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[e.jsx("h4",{style:{margin:0},children:t("story_popover_dimensions")}),e.jsx("p",{style:{margin:0,color:"var(--wim-color-text-secondary)",fontSize:"0.9rem"},children:t("story_popover_set_dim")}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsxs("div",{children:[e.jsx(v,{label:t("story_popover_width"),htmlFor:"width",style:{marginBottom:"5px"}}),e.jsx(c,{id:"width",defaultValue:"100%"})]}),e.jsxs("div",{children:[e.jsx(v,{label:t("story_popover_height"),htmlFor:"height",style:{marginBottom:"5px"}}),e.jsx(c,{id:"height",defaultValue:"25px"})]})]})]})})]})}},a={render:function(n){const{t}=x(h),[_,j]=u.useState("300px"),[y,f]=u.useState("auto");return e.jsxs(o,{...n,children:[e.jsx(r,{asChild:!0,children:e.jsx(s,{priority:"secondary",label:t("story_popover_interactive")})}),e.jsx(i,{className:"custom-width-popover",style:{width:_,height:y},children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[e.jsx("h4",{style:{margin:0},children:t("story_popover_interactive_dim")}),e.jsx("p",{style:{margin:0,color:"var(--wim-color-text-secondary)",fontSize:"0.9rem"},children:t("story_popover_change_val")}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsxs("div",{children:[e.jsx(v,{label:t("story_popover_width"),htmlFor:"interactive-width",style:{marginBottom:"5px"}}),e.jsx(c,{id:"interactive-width",value:_,onChange:m=>j(m.target.value)})]}),e.jsxs("div",{children:[e.jsx(v,{label:t("story_popover_height"),htmlFor:"interactive-height",style:{marginBottom:"5px"}}),e.jsx(c,{id:"interactive-height",value:y,onChange:m=>f(m.target.value)})]})]})]})})]})}},l={render:function(){const{t:n}=x(h);return e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"40px",justifyContent:"center",padding:"40px 20px"},children:[e.jsxs(o,{placement:"bottom-start",children:[e.jsx(r,{asChild:!0,children:e.jsx(s,{label:n("story_popover_left_align")})}),e.jsx(i,{children:e.jsx("div",{style:{padding:"10px"},children:n("story_popover_left_cont")})})]}),e.jsxs(o,{placement:"bottom",children:[e.jsx(r,{asChild:!0,children:e.jsx(s,{label:n("story_popover_center_align")})}),e.jsx(i,{children:e.jsx("div",{style:{padding:"10px"},children:n("story_popover_center_cont")})})]}),e.jsxs(o,{placement:"bottom-end",children:[e.jsx(r,{asChild:!0,children:e.jsx(s,{label:n("story_popover_right_align")})}),e.jsx(i,{children:e.jsx("div",{style:{padding:"10px"},children:n("story_popover_right_cont")})})]})]})}},d={render:function(){const{t:n}=x(h);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"50px",padding:"50px"},children:[e.jsxs(o,{placement:"top",children:[e.jsx(r,{asChild:!0,children:e.jsx(s,{label:n("story_popover_top_place")})}),e.jsx(i,{children:e.jsx("div",{style:{padding:"10px"},children:n("story_popover_appears_above")})})]}),e.jsxs(o,{placement:"bottom",children:[e.jsx(r,{asChild:!0,children:e.jsx(s,{label:n("story_popover_bottom_place")})}),e.jsx(i,{children:e.jsx("div",{style:{padding:"10px"},children:n("story_popover_appears_below")})})]})]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Popover {...args}>
        <PopoverTrigger asChild>
          <Button priority="secondary" label={t("story_popover_open")} />
        </PopoverTrigger>
        <PopoverContent>
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px"
        }}>
            <h4 style={{
            margin: 0
          }}>{t("story_popover_dimensions")}</h4>
            <p style={{
            margin: 0,
            color: "var(--wim-color-text-secondary)",
            fontSize: "0.9rem"
          }}>
              {t("story_popover_set_dim")}
            </p>
            <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px"
          }}>
              <div>
                <Label label={t("story_popover_width")} htmlFor="width" style={{
                marginBottom: "5px"
              }} />
                <Input id="width" defaultValue="100%" />
              </div>
              <div>
                <Label label={t("story_popover_height")} htmlFor="height" style={{
                marginBottom: "5px"
              }} />
                <Input id="height" defaultValue="25px" />
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>;
  }
}`,...p.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [width, setWidth] = useState("300px");
    const [height, setHeight] = useState("auto");
    return <Popover {...args}>
        <PopoverTrigger asChild>
          <Button priority="secondary" label={t("story_popover_interactive")} />
        </PopoverTrigger>
        <PopoverContent className="custom-width-popover" style={{
        width,
        height
      }}>
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px"
        }}>
            <h4 style={{
            margin: 0
          }}>{t("story_popover_interactive_dim")}</h4>
            <p style={{
            margin: 0,
            color: "var(--wim-color-text-secondary)",
            fontSize: "0.9rem"
          }}>
              {t("story_popover_change_val")}
            </p>
            <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px"
          }}>
              <div>
                <Label label={t("story_popover_width")} htmlFor="interactive-width" style={{
                marginBottom: "5px"
              }} />
                <Input id="interactive-width" value={width} onChange={e => setWidth(e.target.value)} />
              </div>
              <div>
                <Label label={t("story_popover_height")} htmlFor="interactive-height" style={{
                marginBottom: "5px"
              }} />
                <Input id="interactive-height" value={height} onChange={e => setHeight(e.target.value)} />
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>;
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "40px",
      justifyContent: "center",
      padding: "40px 20px"
    }}>
        <Popover placement="bottom-start">
          <PopoverTrigger asChild>
            <Button label={t("story_popover_left_align")} />
          </PopoverTrigger>
          <PopoverContent>
            <div style={{
            padding: "10px"
          }}>{t("story_popover_left_cont")}</div>
          </PopoverContent>
        </Popover>
        <Popover placement="bottom">
          <PopoverTrigger asChild>
            <Button label={t("story_popover_center_align")} />
          </PopoverTrigger>
          <PopoverContent>
            <div style={{
            padding: "10px"
          }}>{t("story_popover_center_cont")}</div>
          </PopoverContent>
        </Popover>
        <Popover placement="bottom-end">
          <PopoverTrigger asChild>
            <Button label={t("story_popover_right_align")} />
          </PopoverTrigger>
          <PopoverContent>
            <div style={{
            padding: "10px"
          }}>{t("story_popover_right_cont")}</div>
          </PopoverContent>
        </Popover>
      </div>;
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "50px",
      padding: "50px"
    }}>
        <Popover placement="top">
          <PopoverTrigger asChild>
            <Button label={t("story_popover_top_place")} />
          </PopoverTrigger>
          <PopoverContent>
            <div style={{
            padding: "10px"
          }}>{t("story_popover_appears_above")}</div>
          </PopoverContent>
        </Popover>
        <Popover placement="bottom">
          <PopoverTrigger asChild>
            <Button label={t("story_popover_bottom_place")} />
          </PopoverTrigger>
          <PopoverContent>
            <div style={{
            padding: "10px"
          }}>{t("story_popover_appears_below")}</div>
          </PopoverContent>
        </Popover>
      </div>;
  }
}`,...d.parameters?.docs?.source}}};const b=["Default","Interactive","Alignment","Placement"],D=Object.freeze(Object.defineProperty({__proto__:null,Alignment:l,Default:p,Interactive:a,Placement:d,__namedExportsOrder:b,default:P},Symbol.toStringTag,{value:"Module"}));export{l as A,p as D,a as I,D as P,d as a};
