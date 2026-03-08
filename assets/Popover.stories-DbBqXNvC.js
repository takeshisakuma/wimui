import{j as e}from"./jsx-runtime-u17CrQMm.js";import{P as o,a as t,b as s}from"./Popover-C9P6QaYj.js";import{B as i}from"./Button-DvhHoJsr.js";import{I as c}from"./Input-CybWtP_n.js";import{L as v}from"./Label-3cygW_nP.js";import{r as _}from"./iframe-DEBOWsqM.js";import{u as m}from"./useTranslation-C_sUcuQ0.js";const f={title:"Components/Overlays/Popover",component:o,parameters:{layout:"centered",docs:{description:{component:"A popover component for displaying rich content in a portal-like overlay triggered by a button."}}},argTypes:{defaultOpen:{control:"boolean"},isOpen:{control:"boolean"}}},p={render:function(r){const{t:n}=m(["docs","common","components"]);return e.jsxs(o,{...r,children:[e.jsx(t,{asChild:!0,children:e.jsx(i,{priority:"secondary",label:n("story_popover_open")})}),e.jsx(s,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[e.jsx("h4",{style:{margin:0},children:n("story_popover_dimensions")}),e.jsx("p",{style:{margin:0,color:"var(--text-secondary)",fontSize:"0.9rem"},children:n("story_popover_set_dim")}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsxs("div",{children:[e.jsx(v,{label:n("story_popover_width"),htmlFor:"width",style:{marginBottom:"5px"}}),e.jsx(c,{id:"width",defaultValue:"100%"})]}),e.jsxs("div",{children:[e.jsx(v,{label:n("story_popover_height"),htmlFor:"height",style:{marginBottom:"5px"}}),e.jsx(c,{id:"height",defaultValue:"25px"})]})]})]})})]})}},a={render:function(r){const{t:n}=m(["docs","common","components"]),[g,u]=_.useState("300px"),[y,j]=_.useState("auto");return e.jsxs(o,{...r,children:[e.jsx(t,{asChild:!0,children:e.jsx(i,{priority:"secondary",label:n("story_popover_interactive")})}),e.jsx(s,{className:"custom-width-popover",style:{width:g,height:y},children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[e.jsx("h4",{style:{margin:0},children:n("story_popover_interactive_dim")}),e.jsx("p",{style:{margin:0,color:"var(--text-secondary)",fontSize:"0.9rem"},children:n("story_popover_change_val")}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsxs("div",{children:[e.jsx(v,{label:n("story_popover_width"),htmlFor:"interactive-width",style:{marginBottom:"5px"}}),e.jsx(c,{id:"interactive-width",value:g,onChange:x=>u(x.target.value)})]}),e.jsxs("div",{children:[e.jsx(v,{label:n("story_popover_height"),htmlFor:"interactive-height",style:{marginBottom:"5px"}}),e.jsx(c,{id:"interactive-height",value:y,onChange:x=>j(x.target.value)})]})]})]})})]})}},l={render:function(){const{t:r}=m(["docs","common","components"]);return e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"40px",justifyContent:"center",padding:"40px 20px"},children:[e.jsxs(o,{placement:"bottom-start",children:[e.jsx(t,{asChild:!0,children:e.jsx(i,{label:r("story_popover_left_align")})}),e.jsx(s,{children:e.jsx("div",{style:{padding:"10px"},children:r("story_popover_left_cont")})})]}),e.jsxs(o,{placement:"bottom",children:[e.jsx(t,{asChild:!0,children:e.jsx(i,{label:r("story_popover_center_align")})}),e.jsx(s,{children:e.jsx("div",{style:{padding:"10px"},children:r("story_popover_center_cont")})})]}),e.jsxs(o,{placement:"bottom-end",children:[e.jsx(t,{asChild:!0,children:e.jsx(i,{label:r("story_popover_right_align")})}),e.jsx(s,{children:e.jsx("div",{style:{padding:"10px"},children:r("story_popover_right_cont")})})]})]})}},d={render:function(){const{t:r}=m(["docs","common","components"]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"50px",padding:"50px"},children:[e.jsxs(o,{placement:"top",children:[e.jsx(t,{asChild:!0,children:e.jsx(i,{label:r("story_popover_top_place")})}),e.jsx(s,{children:e.jsx("div",{style:{padding:"10px"},children:r("story_popover_appears_above")})})]}),e.jsxs(o,{placement:"bottom",children:[e.jsx(t,{asChild:!0,children:e.jsx(i,{label:r("story_popover_bottom_place")})}),e.jsx(s,{children:e.jsx("div",{style:{padding:"10px"},children:r("story_popover_appears_below")})})]})]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Popover {...args}>\r
        <PopoverTrigger asChild>\r
          <Button priority="secondary" label={t("story_popover_open")} />\r
        </PopoverTrigger>\r
        <PopoverContent>\r
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px"
        }}>\r
            <h4 style={{
            margin: 0
          }}>{t("story_popover_dimensions")}</h4>\r
            <p style={{
            margin: 0,
            color: "var(--text-secondary)",
            fontSize: "0.9rem"
          }}>\r
              {t("story_popover_set_dim")}\r
            </p>\r
            <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px"
          }}>\r
              <div>\r
                <Label label={t("story_popover_width")} htmlFor="width" style={{
                marginBottom: "5px"
              }} />\r
                <Input id="width" defaultValue="100%" />\r
              </div>\r
              <div>\r
                <Label label={t("story_popover_height")} htmlFor="height" style={{
                marginBottom: "5px"
              }} />\r
                <Input id="height" defaultValue="25px" />\r
              </div>\r
            </div>\r
          </div>\r
        </PopoverContent>\r
      </Popover>;
  }
}`,...p.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    const [width, setWidth] = useState("300px");
    const [height, setHeight] = useState("auto");
    return <Popover {...args}>\r
        <PopoverTrigger asChild>\r
          <Button priority="secondary" label={t("story_popover_interactive")} />\r
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
          }}>{t("story_popover_interactive_dim")}</h4>\r
            <p style={{
            margin: 0,
            color: "var(--text-secondary)",
            fontSize: "0.9rem"
          }}>\r
              {t("story_popover_change_val")}\r
            </p>\r
            <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px"
          }}>\r
              <div>\r
                <Label label={t("story_popover_width")} htmlFor="interactive-width" style={{
                marginBottom: "5px"
              }} />\r
                <Input id="interactive-width" value={width} onChange={e => setWidth(e.target.value)} />\r
              </div>\r
              <div>\r
                <Label label={t("story_popover_height")} htmlFor="interactive-height" style={{
                marginBottom: "5px"
              }} />\r
                <Input id="interactive-height" value={height} onChange={e => setHeight(e.target.value)} />\r
              </div>\r
            </div>\r
          </div>\r
        </PopoverContent>\r
      </Popover>;
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <div style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "40px",
      justifyContent: "center",
      padding: "40px 20px"
    }}>\r
        <Popover placement="bottom-start">\r
          <PopoverTrigger asChild>\r
            <Button label={t("story_popover_left_align")} />\r
          </PopoverTrigger>\r
          <PopoverContent>\r
            <div style={{
            padding: "10px"
          }}>{t("story_popover_left_cont")}</div>\r
          </PopoverContent>\r
        </Popover>\r
        <Popover placement="bottom">\r
          <PopoverTrigger asChild>\r
            <Button label={t("story_popover_center_align")} />\r
          </PopoverTrigger>\r
          <PopoverContent>\r
            <div style={{
            padding: "10px"
          }}>{t("story_popover_center_cont")}</div>\r
          </PopoverContent>\r
        </Popover>\r
        <Popover placement="bottom-end">\r
          <PopoverTrigger asChild>\r
            <Button label={t("story_popover_right_align")} />\r
          </PopoverTrigger>\r
          <PopoverContent>\r
            <div style={{
            padding: "10px"
          }}>{t("story_popover_right_cont")}</div>\r
          </PopoverContent>\r
        </Popover>\r
      </div>;
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "50px",
      padding: "50px"
    }}>\r
        <Popover placement="top">\r
          <PopoverTrigger asChild>\r
            <Button label={t("story_popover_top_place")} />\r
          </PopoverTrigger>\r
          <PopoverContent>\r
            <div style={{
            padding: "10px"
          }}>{t("story_popover_appears_above")}</div>\r
          </PopoverContent>\r
        </Popover>\r
        <Popover placement="bottom">\r
          <PopoverTrigger asChild>\r
            <Button label={t("story_popover_bottom_place")} />\r
          </PopoverTrigger>\r
          <PopoverContent>\r
            <div style={{
            padding: "10px"
          }}>{t("story_popover_appears_below")}</div>\r
          </PopoverContent>\r
        </Popover>\r
      </div>;
  }
}`,...d.parameters?.docs?.source}}};const P=["Default","Interactive","Alignment","Placement"],I=Object.freeze(Object.defineProperty({__proto__:null,Alignment:l,Default:p,Interactive:a,Placement:d,__namedExportsOrder:P,default:f},Symbol.toStringTag,{value:"Module"}));export{l as A,p as D,a as I,I as P,d as a};
