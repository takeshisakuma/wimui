"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-sJBDdmOt.js";import{t as r}from"./react-BGJ90fIb.js";import{n as i,t as a}from"./useTranslation-CpMdOj2B.js";import{n as o,t as s}from"./i18nConstants-YD8z3mm4.js";import{t as c}from"./jsx-runtime-MKhVqBIO.js";import{n as l,t as u}from"./Button-BZJbe9C-.js";import{n as d,r as f,t as p}from"./Confirm-DVTrE2H4.js";var m=n({Default:()=>y,Open:()=>b,Publish:()=>x,__namedExportsOrder:()=>S,default:()=>_}),h,g,_,v,y,b,x,S;function C(){return(C=t((()=>{h=e(r(),1),a(),o(),l(),d(),g=c(),_={title:`Components/Overlays/Confirm`,component:p,parameters:{layout:`padded`},decorators:[e=>(0,g.jsx)(p,{children:(0,g.jsx)(e,{})})]},v=({askOnMount:e=!1})=>{let{t}=i(s),n=f(),[r,a]=(0,h.useState)(null),o=()=>({title:t(`story.confirm_delete_title`),description:t(`story.confirm_delete_desc`),confirmLabel:t(`story.confirm_delete`),intent:`danger`});return(0,h.useEffect)(()=>{e&&n(o()).then(a)},[]),(0,g.jsxs)(`section`,{"aria-labelledby":`confirm-files-label`,style:{display:`flex`,flexDirection:`column`,gap:`var(--wim-spacing-sm)`,maxWidth:`32rem`},children:[(0,g.jsx)(`h3`,{id:`confirm-files-label`,style:{margin:0,fontSize:`var(--wim-font-size-sm)`,color:`var(--wim-color-text-secondary)`},children:t(`story.confirm_files_label`)}),(0,g.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:`var(--wim-spacing-md)`,padding:`var(--wim-spacing-sm) 0`,borderBlock:`var(--wim-border-width-thin) solid var(--wim-color-border-secondary)`},children:[(0,g.jsxs)(`div`,{style:{minWidth:0},children:[(0,g.jsx)(`div`,{style:{fontWeight:`var(--wim-font-weight-semibold)`},children:`Q3-report.pdf`}),(0,g.jsx)(`div`,{style:{fontSize:`var(--wim-font-size-sm)`,color:`var(--wim-color-text-secondary)`},children:t(`story.confirm_file_meta`)})]}),(0,g.jsx)(u,{variant:`ghost`,intent:`danger`,onClick:()=>n(o()).then(a),children:t(`story.confirm_delete`)})]}),(0,g.jsx)(`p`,{role:`status`,style:{margin:0,fontSize:`var(--wim-font-size-sm)`,color:`var(--wim-color-text-secondary)`},children:r===null?``:t(r?`story.confirm_deleted`:`story.confirm_kept`)})]})},y={render:()=>(0,g.jsx)(v,{})},b={tags:[`!autodocs`],parameters:{docs:{disable:!0}},render:()=>(0,g.jsx)(v,{askOnMount:!0})},x={render:function(){let{t:e}=i(s),t=f(),[n,r]=(0,h.useState)(null);return(0,g.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`var(--wim-spacing-md)`,flexWrap:`wrap`},children:[(0,g.jsx)(u,{variant:`solid`,onClick:async()=>r(await t({title:e(`story.confirm_publish_title`),description:e(`story.confirm_publish_desc`),confirmLabel:e(`story.confirm_publish`)})),children:e(`story.confirm_publish`)}),(0,g.jsx)(`span`,{role:`status`,style:{fontSize:`var(--wim-font-size-sm)`,color:`var(--wim-color-text-secondary)`},children:n===null?``:e(n?`story.confirm_published`:`story.confirm_not_published`)})]})}},S=[`Default`,`Open`,`Publish`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <FileRow />
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  parameters: {
    docs: {
      disable: true
    }
  },
  render: () => <FileRow askOnMount />
}`,...b.parameters?.docs?.source},description:{story:`開いた姿（VRT・a11y 用）。描画のあとすぐ confirm() を呼ぶ。
docs ページは <Stories /> で全ストーリーを並べるので、載せるとページを開いた瞬間に開く ── docs.disable で外す。`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const confirm = useConfirm();
    const [result, setResult] = useState<boolean | null>(null);
    return <div style={{
      display: "flex",
      alignItems: "center",
      gap: "var(--wim-spacing-md)",
      flexWrap: "wrap"
    }}>
        <Button variant="solid" onClick={async () => setResult(await confirm({
        title: t("story.confirm_publish_title"),
        description: t("story.confirm_publish_desc"),
        confirmLabel: t("story.confirm_publish")
      }))}>
          {t("story.confirm_publish")}
        </Button>
        <span role="status" style={{
        fontSize: "var(--wim-font-size-sm)",
        color: "var(--wim-color-text-secondary)"
      }}>
          {result === null ? "" : t(result ? "story.confirm_published" : "story.confirm_not_published")}
        </span>
      </div>;
  }
}`,...x.parameters?.docs?.source},description:{story:`破壊的でない操作。intent を付けないと、確認のボタンに最初のフォーカスが置かれる`,...x.parameters?.docs?.description}}}})))()}export{C as i,y as n,x as r,m as t};