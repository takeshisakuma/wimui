import{j as o}from"./jsx-runtime-u17CrQMm.js";import{P as n,a as t,b as s}from"./Popover-BsX_Aa4d.js";import{B as i}from"./Button-CE01zq8d.js";import{I as c}from"./Input-BGgP-MIa.js";import{L as v}from"./FieldTemplate-ctav63-N.js";import{r as x}from"./iframe-DtwnyzFc.js";import{u as _}from"./useTranslation-BJQcmf5i.js";const f={title:"Components/Overlays/Popover",component:n,parameters:{layout:"centered",docs:{description:{component:"A popover component for displaying rich content in a portal-like overlay triggered by a button."}}},argTypes:{defaultOpen:{control:"boolean"},open:{control:"boolean"}}},a={render:function(e){const{t:r}=_(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsxs(n,{...e,children:[o.jsx(t,{asChild:!0,children:o.jsx(i,{priority:"secondary",label:r("story_popover_open")})}),o.jsx(s,{children:o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[o.jsx("h4",{style:{margin:0},children:r("story_popover_dimensions")}),o.jsx("p",{style:{margin:0,color:"var(--text-secondary)",fontSize:"0.9rem"},children:r("story_popover_set_dim")}),o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[o.jsxs("div",{children:[o.jsx(v,{label:r("story_popover_width"),htmlFor:"width",style:{marginBottom:"5px"}}),o.jsx(c,{id:"width",defaultValue:"100%"})]}),o.jsxs("div",{children:[o.jsx(v,{label:r("story_popover_height"),htmlFor:"height",style:{marginBottom:"5px"}}),o.jsx(c,{id:"height",defaultValue:"25px"})]})]})]})})]})}},p={render:function(e){const{t:r}=_(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),[y,u]=x.useState("300px"),[h,j]=x.useState("auto");return o.jsxs(n,{...e,children:[o.jsx(t,{asChild:!0,children:o.jsx(i,{priority:"secondary",label:r("story_popover_interactive")})}),o.jsx(s,{className:"custom-width-popover",style:{width:y,height:h},children:o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[o.jsx("h4",{style:{margin:0},children:r("story_popover_interactive_dim")}),o.jsx("p",{style:{margin:0,color:"var(--text-secondary)",fontSize:"0.9rem"},children:r("story_popover_change_val")}),o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[o.jsxs("div",{children:[o.jsx(v,{label:r("story_popover_width"),htmlFor:"interactive-width",style:{marginBottom:"5px"}}),o.jsx(c,{id:"interactive-width",value:y,onChange:m=>u(m.target.value)})]}),o.jsxs("div",{children:[o.jsx(v,{label:r("story_popover_height"),htmlFor:"interactive-height",style:{marginBottom:"5px"}}),o.jsx(c,{id:"interactive-height",value:h,onChange:m=>j(m.target.value)})]})]})]})})]})}},d={render:function(){const{t:e}=_(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"40px",justifyContent:"center",padding:"40px 20px"},children:[o.jsxs(n,{placement:"bottom-start",children:[o.jsx(t,{asChild:!0,children:o.jsx(i,{label:e("story_popover_left_align")})}),o.jsx(s,{children:o.jsx("div",{style:{padding:"10px"},children:e("story_popover_left_cont")})})]}),o.jsxs(n,{placement:"bottom",children:[o.jsx(t,{asChild:!0,children:o.jsx(i,{label:e("story_popover_center_align")})}),o.jsx(s,{children:o.jsx("div",{style:{padding:"10px"},children:e("story_popover_center_cont")})})]}),o.jsxs(n,{placement:"bottom-end",children:[o.jsx(t,{asChild:!0,children:o.jsx(i,{label:e("story_popover_right_align")})}),o.jsx(s,{children:o.jsx("div",{style:{padding:"10px"},children:e("story_popover_right_cont")})})]})]})}},l={render:function(){const{t:e}=_(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"50px",padding:"50px"},children:[o.jsxs(n,{placement:"top",children:[o.jsx(t,{asChild:!0,children:o.jsx(i,{label:e("story_popover_top_place")})}),o.jsx(s,{children:o.jsx("div",{style:{padding:"10px"},children:e("story_popover_appears_above")})})]}),o.jsxs(n,{placement:"bottom",children:[o.jsx(t,{asChild:!0,children:o.jsx(i,{label:e("story_popover_bottom_place")})}),o.jsx(s,{children:o.jsx("div",{style:{padding:"10px"},children:e("story_popover_appears_below")})})]})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...a.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...l.parameters?.docs?.source}}};const P=["Default","Interactive","Alignment","Placement"],I=Object.freeze(Object.defineProperty({__proto__:null,Alignment:d,Default:a,Interactive:p,Placement:l,__namedExportsOrder:P,default:f},Symbol.toStringTag,{value:"Module"}));export{d as A,a as D,p as I,I as P,l as a};
