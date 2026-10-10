"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./useTranslation-BDKsuBAo.js";import{n as o,t as s}from"./i18nConstants-BhvmnjLS.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{n as l,t as u}from"./RichTextEditor-BMM-h4bi.js";var d;function f(){return(f=t((()=>{d=new URL(`scene_landscape-CqH5RGPu.svg`,import.meta.url).href})))()}var p=n({Basic:()=>_,Controlled:()=>y,Danger:()=>b,Disabled:()=>x,FullWidth:()=>C,Ghost:()=>S,MarkdownFormat:()=>E,MinimalToolbar:()=>w,WithDefaultValue:()=>v,WithImages:()=>T,__namedExportsOrder:()=>D,default:()=>g}),m,h,g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=t((()=>{m=e(r(),1),a(),o(),l(),f(),h=c(),g={title:`Components/Basic Inputs/RichTextEditor`,component:u,argTypes:{intent:{control:`select`,options:[`default`,`danger`]},variant:{control:`select`,options:[`outline`,`ghost`]},fullWidth:{control:`boolean`},width:{control:`select`,options:[`xs`,`sm`,`md`,`lg`,`xl`,`100%`,`200px`,`10ch`]}}},_={render:function(e){let{t}=i([`docs_stories_common`,`components`]),n={bold:t(`components:a11y.rte_bold`),italic:t(`components:a11y.rte_italic`),underline:t(`components:a11y.rte_underline`),strikethrough:t(`components:a11y.rte_strikethrough`),h1:t(`components:a11y.rte_h1`),h2:t(`components:a11y.rte_h2`),h3:t(`components:a11y.rte_h3`),ul:t(`components:a11y.rte_ul`),ol:t(`components:a11y.rte_ol`),link:t(`components:a11y.rte_link`),unlink:t(`components:a11y.rte_unlink`),removeFormat:t(`components:a11y.rte_remove_format`),toolbar:t(`components:a11y.rte_toolbar`),linkPrompt:t(`components:a11y.rte_link_prompt`)};return(0,h.jsx)(u,{...e,label:t(`docs_stories_common:story.rte_label_content`),placeholder:t(`docs_stories_common:story.rte_placeholder_default`),labels:n})}},v={render:function(e){let{t}=i(s);return(0,h.jsx)(u,{...e,label:t(`story.rte_label_article`),defaultValue:`<h2>${t(`story.rte_default_heading`)}</h2><p>${t(`story.rte_default_body`)}</p>`})}},y={render:function(e){let{t}=i(s),[n,r]=m.useState(`<p>${t(`story.rte_controlled_initial`)}</p>`);return(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,h.jsx)(u,{...e,label:t(`story.rte_label_content`),value:n,onChange:r}),(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`strong`,{children:t(`story.rte_output_label`)}),(0,h.jsx)(`pre`,{style:{fontSize:`0.75rem`,whiteSpace:`pre-wrap`,wordBreak:`break-all`,padding:`8px`,background:`var(--wim-color-surface-variant)`,borderRadius:`4px`},children:n})]})]})}},b={render:function(e){let{t}=i(s);return(0,h.jsx)(u,{...e,label:t(`story.rte_label_content`),intent:`danger`,error:t(`story.rte_error_required`),placeholder:t(`story.rte_placeholder_default`)})}},x={render:function(e){let{t}=i(s);return(0,h.jsx)(u,{...e,label:t(`story.rte_label_content`),disabled:!0,defaultValue:`<p>${t(`story.rte_disabled_content`)}</p>`})}},S={render:function(e){let{t}=i(s);return(0,h.jsx)(u,{...e,label:t(`story.rte_label_note`),variant:`ghost`,placeholder:t(`story.rte_placeholder_default`)})}},C={render:function(e){let{t}=i(s);return(0,h.jsx)(u,{...e,label:t(`story.rte_label_article`),fullWidth:!0,placeholder:t(`story.rte_placeholder_default`)})}},w={render:function(e){let{t}=i(s);return(0,h.jsx)(u,{...e,label:t(`story.rte_label_comment`),toolbar:[`bold`,`italic`,`underline`,`separator`,`link`],placeholder:t(`story.rte_placeholder_comment`)})}},T={render:function(e){let{t}=i(s),n=m.useCallback(async()=>d,[]);return(0,h.jsx)(u,{...e,label:t(`story.rte_image_label`),toolbar:[`bold`,`italic`,`separator`,`ul`,`ol`,`separator`,`link`,`image`],defaultValue:`<p>${t(`story.rte_image_body`)}</p><img src="${d}" alt="${t(`story.rte_image_alt`)}">`,onImageUpload:n})}},E={render:function(e){let{t}=i(s),[n,r]=m.useState(`## ${t(`story.rte_markdown_heading`)}\n\n- ${t(`story.rte_markdown_item1`)}\n- **${t(`story.rte_markdown_item2`)}**`);return(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,h.jsx)(u,{...e,format:`markdown`,label:t(`story.rte_markdown_label`),value:n,onChange:r}),(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`strong`,{children:t(`story.rte_markdown_output_label`)}),(0,h.jsx)(`pre`,{style:{fontSize:`0.75rem`,whiteSpace:`pre-wrap`,wordBreak:`break-all`,padding:`8px`,background:`var(--wim-color-surface-variant)`,borderRadius:`4px`},children:n})]})]})}},D=[`Basic`,`WithDefaultValue`,`Controlled`,`Danger`,`Disabled`,`Ghost`,`FullWidth`,`MinimalToolbar`,`WithImages`,`MarkdownFormat`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <RichTextEditor {...args} label={t("story.rte_label_article")} defaultValue={\`<h2>\${t("story.rte_default_heading")}</h2><p>\${t("story.rte_default_body")}</p>\`} />;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <RichTextEditor {...args} label={t("story.rte_label_content")} intent="danger" error={t("story.rte_error_required")} placeholder={t("story.rte_placeholder_default")} />;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <RichTextEditor {...args} label={t("story.rte_label_content")} disabled defaultValue={\`<p>\${t("story.rte_disabled_content")}</p>\`} />;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <RichTextEditor {...args} label={t("story.rte_label_note")} variant="ghost" placeholder={t("story.rte_placeholder_default")} />;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <RichTextEditor {...args} label={t("story.rte_label_article")} fullWidth placeholder={t("story.rte_placeholder_default")} />;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <RichTextEditor {...args} label={t("story.rte_label_comment")} toolbar={["bold", "italic", "underline", "separator", "link"]} placeholder={t("story.rte_placeholder_comment")} />;
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const uploadDemo = React.useCallback(async () => sceneLandscape, []);
    return <RichTextEditor {...args} label={t("story.rte_image_label")} toolbar={["bold", "italic", "separator", "ul", "ol", "separator", "link", "image"]} defaultValue={\`<p>\${t("story.rte_image_body")}</p><img src="\${sceneLandscape}" alt="\${t("story.rte_image_alt")}">\`} onImageUpload={uploadDemo} />;
  }
}`,...T.parameters?.docs?.source},description:{story:"画像（T278）。ツールバーに `image` を足した形。`onImageUpload` を渡すと、ダイアログに「ファイルを選ぶ」が出て、\n画像ファイルの貼り付け・ドロップもアップロードして入る。部品はアップロード先を持たず、返ってきた URL だけを入れる。\nここでは実際には送らず、手元の素材の URL を返してアップロード済みの形を見せる。",...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [value, setValue] = React.useState(\`## \${t("story.rte_markdown_heading")}\\n\\n- \${t("story.rte_markdown_item1")}\\n- **\${t("story.rte_markdown_item2")}**\`);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }}>
        <RichTextEditor {...args} format="markdown" label={t("story.rte_markdown_label")} value={value} onChange={setValue} />
        <div>
          <strong>{t("story.rte_markdown_output_label")}</strong>
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
}`,...E.parameters?.docs?.source},description:{story:'Markdown（T278）。`format="markdown"` で value / onChange が Markdown になる。エディタそのものは同じで、\n出力に出るのはツールバーで作れるものだけ（下線は `<u>…</u>`）。',...E.parameters?.docs?.description}}}})))()}export{C as a,w as c,O as d,x as i,p as l,y as n,S as o,b as r,E as s,_ as t,T as u};