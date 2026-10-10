"use client";
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{h as n,m as r,n as i,u as a}from"./blocks-DX8GcFrX.js";import{i as o,r as s}from"./react-BXJ34t_g.js";import{n as c,t as l}from"./T-B6tjwfui.js";import{n as u,t as d}from"./Docgen-DTeUtCQ2.js";import{a as f,c as p,d as m,i as h,l as g,n as _,o as v,r as y,s as b,t as x,u as S}from"./RichTextEditor.stories-DRqmGma_.js";function C(e){let t={code:`code`,h2:`h2`,h3:`h3`,pre:`pre`,...o(),...e.components};return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(a,{of:g}),`
`,(0,T.jsx)(r,{}),`
`,(0,T.jsx)(`p`,{style:{margin:`0 0 16px 0`,fontSize:`var(--wim-font-size-lg)`,lineHeight:`var(--wim-line-height-loose)`,color:`var(--wim-color-text-secondary)`},children:(0,T.jsx)(l,{k:`doc.richTextEditor_title`})}),`
`,(0,T.jsx)(`p`,{children:(0,T.jsx)(l,{k:`doc.richTextEditor_long_desc`})}),`
`,(0,T.jsx)(t.h2,{id:``,children:(0,T.jsx)(l,{k:`doc.design_intent_title`})}),`
`,(0,T.jsx)(`p`,{children:(0,T.jsx)(l,{k:`doc.richTextEditor_design_intent`})}),`
`,(0,T.jsx)(t.h2,{id:`-1`,children:(0,T.jsx)(l,{k:`doc.choice_matrix_title`})}),`
`,(0,T.jsx)(`p`,{children:(0,T.jsx)(l,{k:`doc.richTextEditor_choice_matrix_desc`})}),`
`,(0,T.jsxs)(`table`,{children:[(0,T.jsx)(`thead`,{children:(0,T.jsxs)(`tr`,{children:[(0,T.jsx)(`th`,{children:(0,T.jsx)(l,{k:`doc.component`})}),(0,T.jsx)(`th`,{children:(0,T.jsx)(l,{k:`doc.usage_scenario`})})]})}),(0,T.jsxs)(`tbody`,{children:[(0,T.jsxs)(`tr`,{children:[(0,T.jsx)(`td`,{children:(0,T.jsx)(`b`,{children:`RichTextEditor`})}),(0,T.jsx)(`td`,{children:(0,T.jsx)(l,{k:`doc.richTextEditor_choice_rte_when`})})]}),(0,T.jsxs)(`tr`,{children:[(0,T.jsx)(`td`,{children:(0,T.jsx)(`b`,{children:`Textarea`})}),(0,T.jsx)(`td`,{children:(0,T.jsx)(l,{k:`doc.richTextEditor_choice_textarea_when`})})]}),(0,T.jsxs)(`tr`,{children:[(0,T.jsx)(`td`,{children:(0,T.jsx)(`b`,{children:`Markdown`})}),(0,T.jsx)(`td`,{children:(0,T.jsx)(l,{k:`doc.richTextEditor_choice_markdown_when`})})]})]})]}),`
`,(0,T.jsx)(d,{componentName:`RichTextEditor`,section:`anatomy`}),`
`,(0,T.jsx)(d,{componentName:`RichTextEditor`,section:`props`}),`
`,(0,T.jsx)(t.h2,{id:`-2`,children:(0,T.jsx)(l,{k:`doc.variations`})}),`
`,(0,T.jsx)(`p`,{children:(0,T.jsx)(l,{k:`doc.richTextEditor_variant_desc`})}),`
`,(0,T.jsx)(t.h3,{id:`-3`,children:(0,T.jsx)(l,{k:`doc.ghost`})}),`
`,(0,T.jsx)(i,{of:v}),`
`,(0,T.jsx)(t.h3,{id:`-4`,children:(0,T.jsx)(l,{k:`doc.full_width`})}),`
`,(0,T.jsx)(i,{of:f}),`
`,(0,T.jsx)(t.h2,{id:`-5`,children:(0,T.jsx)(l,{k:`doc.richtexteditor_toolbar`})}),`
`,(0,T.jsx)(`p`,{children:(0,T.jsx)(l,{k:`doc.richTextEditor_toolbar_desc`})}),`
`,(0,T.jsx)(i,{of:p}),`
`,(0,T.jsx)(t.h2,{id:`-6`,children:(0,T.jsx)(l,{k:`doc.richtexteditor_images_title`})}),`
`,(0,T.jsx)(`p`,{children:(0,T.jsx)(l,{k:`doc.richtexteditor_images_desc`})}),`
`,(0,T.jsx)(`p`,{children:(0,T.jsx)(l,{k:`doc.richtexteditor_images_upload`})}),`
`,(0,T.jsx)(i,{of:S}),`
`,(0,T.jsx)(t.pre,{children:(0,T.jsx)(t.code,{className:`language-tsx`,children:`<RichTextEditor
  toolbar={["bold", "italic", "separator", "link", "image"]}
  onImageUpload={async (file) => {
    const body = new FormData();
    body.append("file", file);
    const res = await fetch("/api/uploads", { method: "POST", body });
    return (await res.json()).url; // http(s) or relative URL
  }}
/>
`})}),`
`,(0,T.jsx)(t.h2,{id:`-7`,children:(0,T.jsx)(l,{k:`doc.richtexteditor_markdown_title`})}),`
`,(0,T.jsx)(`p`,{children:(0,T.jsx)(l,{k:`doc.richtexteditor_markdown_desc`})}),`
`,(0,T.jsx)(`p`,{children:(0,T.jsx)(l,{k:`doc.richtexteditor_markdown_input`})}),`
`,(0,T.jsx)(`p`,{children:(0,T.jsx)(l,{k:`doc.richtexteditor_markdown_fixed`})}),`
`,(0,T.jsx)(i,{of:b}),`
`,(0,T.jsx)(t.pre,{children:(0,T.jsx)(t.code,{className:`language-tsx`,children:`const [markdown, setMarkdown] = useState("## Notes\\n\\n- first item");
<RichTextEditor format="markdown" value={markdown} onChange={setMarkdown} />;
`})}),`
`,(0,T.jsx)(t.h2,{id:`-8`,children:(0,T.jsx)(l,{k:`doc.richtexteditor_controlled`})}),`
`,(0,T.jsx)(i,{of:_}),`
`,(0,T.jsx)(t.h2,{id:`-9`,children:(0,T.jsx)(l,{k:`doc.states`})}),`
`,(0,T.jsx)(t.h3,{id:`-10`,children:(0,T.jsx)(l,{k:`doc.status_error`})}),`
`,(0,T.jsx)(i,{of:y}),`
`,(0,T.jsx)(t.h3,{id:`-11`,children:(0,T.jsx)(l,{k:`doc.status_disabled`})}),`
`,(0,T.jsx)(i,{of:h}),`
`,(0,T.jsx)(t.h2,{id:`-12`,children:(0,T.jsx)(l,{k:`doc.a11y_spec_title`})}),`
`,(0,T.jsx)(`p`,{children:(0,T.jsx)(l,{k:`doc.richTextEditor_a11y_desc`})}),`
`,(0,T.jsx)(t.h2,{id:`-13`,children:(0,T.jsx)(l,{k:`doc.richtexteditor_sanitize_title`})}),`
`,(0,T.jsxs)(`ul`,{children:[(0,T.jsx)(`li`,{children:(0,T.jsx)(l,{k:`doc.richtexteditor_sanitize_schema`})}),(0,T.jsx)(`li`,{children:(0,T.jsx)(l,{k:`doc.richtexteditor_sanitize_links`})}),(0,T.jsx)(`li`,{children:(0,T.jsx)(l,{k:`doc.richtexteditor_sanitize_boundary`})})]}),`
`,(0,T.jsx)(t.h2,{id:`-14`,children:(0,T.jsx)(l,{k:`doc.real_world_scenarios_title`})}),`
`,(0,T.jsxs)(`table`,{children:[(0,T.jsx)(`thead`,{children:(0,T.jsxs)(`tr`,{children:[(0,T.jsx)(`th`,{children:(0,T.jsx)(l,{k:`doc.usage_scenario`})}),(0,T.jsx)(`th`,{children:(0,T.jsx)(l,{k:`doc.table_header_description`})})]})}),(0,T.jsxs)(`tbody`,{children:[(0,T.jsxs)(`tr`,{children:[(0,T.jsx)(`td`,{children:(0,T.jsx)(`strong`,{children:(0,T.jsx)(l,{k:`doc.scenario_article_title`})})}),(0,T.jsx)(`td`,{children:(0,T.jsx)(l,{k:`doc.richTextEditor_scenario_article`})})]}),(0,T.jsxs)(`tr`,{children:[(0,T.jsx)(`td`,{children:(0,T.jsx)(`strong`,{children:(0,T.jsx)(l,{k:`doc.scenario_sns_title`})})}),(0,T.jsx)(`td`,{children:(0,T.jsx)(l,{k:`doc.richTextEditor_scenario_comment`})})]}),(0,T.jsxs)(`tr`,{children:[(0,T.jsx)(`td`,{children:(0,T.jsx)(`strong`,{children:(0,T.jsx)(l,{k:`doc.scenario_chat_title`})})}),(0,T.jsx)(`td`,{children:(0,T.jsx)(l,{k:`doc.richTextEditor_scenario_email`})})]})]})]}),`
`,(0,T.jsx)(t.h2,{id:`-15`,children:(0,T.jsx)(l,{k:`doc.best_practices_title`})}),`
`,(0,T.jsxs)(`table`,{children:[(0,T.jsx)(`thead`,{children:(0,T.jsxs)(`tr`,{children:[(0,T.jsx)(`th`,{children:(0,T.jsx)(l,{k:`doc.section`})}),(0,T.jsx)(`th`,{children:(0,T.jsx)(l,{k:`doc.description`})})]})}),(0,T.jsxs)(`tbody`,{children:[(0,T.jsxs)(`tr`,{children:[(0,T.jsx)(`td`,{children:(0,T.jsx)(`strong`,{children:(0,T.jsx)(l,{k:`doc.richTextEditor_best_practice_category_editor`})})}),(0,T.jsx)(`td`,{children:(0,T.jsx)(l,{k:`doc.richTextEditor_best_practice_1`})})]}),(0,T.jsxs)(`tr`,{children:[(0,T.jsx)(`td`,{children:(0,T.jsx)(`strong`,{children:(0,T.jsx)(l,{k:`doc.richTextEditor_best_practice_category_toolbar`})})}),(0,T.jsx)(`td`,{children:(0,T.jsx)(l,{k:`doc.richTextEditor_best_practice_2`})})]})]})]}),`
`,(0,T.jsx)(t.h2,{id:`-16`,children:(0,T.jsx)(l,{k:`doc.richtexteditor_install_title`})}),`
`,(0,T.jsx)(`p`,{children:(0,T.jsx)(l,{k:`doc.richtexteditor_install_desc`})}),`
`,(0,T.jsx)(t.pre,{children:(0,T.jsx)(t.code,{className:`language-bash`,children:`npm install @tiptap/core @tiptap/pm @tiptap/react @tiptap/starter-kit @tiptap/extensions @tiptap/extension-image @tiptap/markdown marked
`})}),`
`,(0,T.jsx)(t.h2,{id:`-17`,children:(0,T.jsx)(l,{k:`doc.basic_usage`})}),`
`,(0,T.jsx)(i,{of:x}),`
`,(0,T.jsx)(t.pre,{children:(0,T.jsx)(t.code,{className:`language-tsx`,children:`import { RichTextEditor } from "wimui/form/rich-text-editor";

// Uncontrolled
<RichTextEditor
  label="Content"
  placeholder="Meeting notes for the design review"
  defaultValue="<p>Hello world</p>"
  onChange={(html) => console.log(html)}
/>;

// Controlled
const [value, setValue] = useState("");
<RichTextEditor value={value} onChange={setValue} />;

// Custom toolbar
<RichTextEditor
  toolbar={["bold", "italic", "underline", "separator", "link"]}
/>;
`})}),`
`,(0,T.jsx)(d,{componentName:`RichTextEditor`,section:`tokens`}),`
`,(0,T.jsx)(t.h2,{id:`-18`,children:(0,T.jsx)(l,{k:`doc.keyboard_nav_title`})}),`
`,(0,T.jsx)(`p`,{children:(0,T.jsx)(l,{k:`doc.richtexteditor_keyboard_desc`})}),`
`,(0,T.jsx)(d,{componentName:`RichTextEditor`,section:`i18n`}),`
`,(0,T.jsx)(d,{componentName:`RichTextEditor`,section:`test`})]})}function w(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,T.jsx)(t,{...e,children:(0,T.jsx)(C,{...e})}):C(e)}var T;function E(){return(E=e((()=>{T=t(),s(),n(),m(),c(),u()})))()}E();export{w as default};