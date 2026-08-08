"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,br as a,cr as o,xr as s,yr as c}from"./iframe-DiXuc7DI.js";import{_r as l,t as u}from"./src-BE5jBQ9L.js";var d=e({Basic:()=>h,Controlled:()=>_,Danger:()=>v,Disabled:()=>y,FullWidth:()=>x,Ghost:()=>b,MinimalToolbar:()=>S,WithDefaultValue:()=>g,__namedExportsOrder:()=>C,default:()=>m}),f,p,m,h,g,_,v,y,b,x,S,C,w=t((()=>{f=n(r(),1),s(),a(),u(),p=o(),m={title:`Components/Basic Inputs/RichTextEditor`,component:l,argTypes:{intent:{control:`select`,options:[`default`,`danger`]},variant:{control:`select`,options:[`outline`,`ghost`]},fullWidth:{control:`boolean`},width:{control:`select`,options:[`xs`,`sm`,`md`,`lg`,`xl`,`100%`,`200px`,`10ch`]}}},h={render:function(e){let{t}=i([`docs_stories_common`,`components`]),n={bold:t(`components:a11y.rte_bold`),italic:t(`components:a11y.rte_italic`),underline:t(`components:a11y.rte_underline`),strikethrough:t(`components:a11y.rte_strikethrough`),h1:t(`components:a11y.rte_h1`),h2:t(`components:a11y.rte_h2`),h3:t(`components:a11y.rte_h3`),ul:t(`components:a11y.rte_ul`),ol:t(`components:a11y.rte_ol`),link:t(`components:a11y.rte_link`),unlink:t(`components:a11y.rte_unlink`),removeFormat:t(`components:a11y.rte_remove_format`),toolbar:t(`components:a11y.rte_toolbar`),linkPrompt:t(`components:a11y.rte_link_prompt`)};return(0,p.jsx)(l,{...e,label:t(`docs_stories_common:story.rte_label_content`),placeholder:t(`docs_stories_common:story.rte_placeholder_default`),labels:n})}},g={render:function(e){let{t}=i(c);return(0,p.jsx)(l,{...e,label:t(`story.rte_label_article`),defaultValue:`<h2>${t(`story.rte_default_heading`)}</h2><p>${t(`story.rte_default_body`)}</p>`})}},_={render:function(e){let{t}=i(c),[n,r]=f.useState(`<p>${t(`story.rte_controlled_initial`)}</p>`);return(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,p.jsx)(l,{...e,label:t(`story.rte_label_content`),value:n,onChange:r}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`strong`,{children:t(`story.rte_output_label`)}),(0,p.jsx)(`pre`,{style:{fontSize:`0.75rem`,whiteSpace:`pre-wrap`,wordBreak:`break-all`,padding:`8px`,background:`var(--wim-color-surface-variant)`,borderRadius:`4px`},children:n})]})]})}},v={render:function(e){let{t}=i(c);return(0,p.jsx)(l,{...e,label:t(`story.rte_label_content`),intent:`danger`,error:t(`story.rte_error_required`),placeholder:t(`story.rte_placeholder_default`)})}},y={render:function(e){let{t}=i(c);return(0,p.jsx)(l,{...e,label:t(`story.rte_label_content`),disabled:!0,defaultValue:`<p>${t(`story.rte_disabled_content`)}</p>`})}},b={render:function(e){let{t}=i(c);return(0,p.jsx)(l,{...e,label:t(`story.rte_label_note`),variant:`ghost`,placeholder:t(`story.rte_placeholder_default`)})}},x={render:function(e){let{t}=i(c);return(0,p.jsx)(l,{...e,label:t(`story.rte_label_article`),fullWidth:!0,placeholder:t(`story.rte_placeholder_default`)})}},S={render:function(e){let{t}=i(c);return(0,p.jsx)(l,{...e,label:t(`story.rte_label_comment`),toolbar:[`bold`,`italic`,`underline`,`separator`,`link`],placeholder:t(`story.rte_placeholder_comment`)})}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs_stories_common", "components"]);
    const labels = {
      bold: t("components:a11y.rte_bold"),
      italic: t("components:a11y.rte_italic"),
      underline: t("components:a11y.rte_underline"),
      strikethrough: t("components:a11y.rte_strikethrough"),
      h1: t("components:a11y.rte_h1"),
      h2: t("components:a11y.rte_h2"),
      h3: t("components:a11y.rte_h3"),
      ul: t("components:a11y.rte_ul"),
      ol: t("components:a11y.rte_ol"),
      link: t("components:a11y.rte_link"),
      unlink: t("components:a11y.rte_unlink"),
      removeFormat: t("components:a11y.rte_remove_format"),
      toolbar: t("components:a11y.rte_toolbar"),
      linkPrompt: t("components:a11y.rte_link_prompt")
    };
    return <RichTextEditor {...args} label={t("docs_stories_common:story.rte_label_content")} placeholder={t("docs_stories_common:story.rte_placeholder_default")} labels={labels} />;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <RichTextEditor {...args} label={t("story.rte_label_article")} defaultValue={\`<h2>\${t("story.rte_default_heading")}</h2><p>\${t("story.rte_default_body")}</p>\`} />;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [value, setValue] = React.useState(\`<p>\${t("story.rte_controlled_initial")}</p>\`);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }}>
        <RichTextEditor {...args} label={t("story.rte_label_content")} value={value} onChange={setValue} />
        <div>
          <strong>{t("story.rte_output_label")}</strong>
          <pre style={{
          fontSize: "0.75rem",
          whiteSpace: "pre-wrap",
          wordBreak: "break-all",
          padding: "8px",
          background: "var(--wim-color-surface-variant)",
          borderRadius: "4px"
        }}>
            {value}
          </pre>
        </div>
      </div>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <RichTextEditor {...args} label={t("story.rte_label_content")} intent="danger" error={t("story.rte_error_required")} placeholder={t("story.rte_placeholder_default")} />;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <RichTextEditor {...args} label={t("story.rte_label_content")} disabled defaultValue={\`<p>\${t("story.rte_disabled_content")}</p>\`} />;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <RichTextEditor {...args} label={t("story.rte_label_note")} variant="ghost" placeholder={t("story.rte_placeholder_default")} />;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <RichTextEditor {...args} label={t("story.rte_label_article")} fullWidth placeholder={t("story.rte_placeholder_default")} />;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <RichTextEditor {...args} label={t("story.rte_label_comment")} toolbar={["bold", "italic", "underline", "separator", "link"]} placeholder={t("story.rte_placeholder_comment")} />;
  }
}`,...S.parameters?.docs?.source}}},C=[`Basic`,`WithDefaultValue`,`Controlled`,`Danger`,`Disabled`,`Ghost`,`FullWidth`,`MinimalToolbar`]}));w();export{h as Basic,_ as Controlled,v as Danger,y as Disabled,x as FullWidth,b as Ghost,S as MinimalToolbar,g as WithDefaultValue,C as __namedExportsOrder,m as default,w as n,d as t};