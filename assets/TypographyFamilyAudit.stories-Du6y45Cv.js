"use client";
import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./react-DmCNssFd.js";import{Cr as n,Tr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-DiXuc7DI.js";import{t as c}from"./src-BE5jBQ9L.js";import{t as l}from"./Text-B6DLYHMc.js";import{r as u}from"./Blockquote-BN18wCRL.js";import{t as d}from"./Title-BgOFD6Cx.js";import{i as f,n as p,r as m,t as h}from"./AuditUtils-C0tQOUtW.js";var g,_,v,y;e((()=>{t(),o(),i(),c(),g=a(),f(),_={title:`Audit/TypographyFamily`,parameters:{layout:`fullscreen`}},v={render:()=>{let{t:e}=n([...s,`audit`]),t=[1,2,3,4,5,6],i={1:`3xl`,2:`2xl`,3:`xl`,4:`lg`,5:`md`,6:`sm`};return(0,g.jsxs)(h,{title:e(`audit:typography_family_title`),children:[(0,g.jsx)(p,{title:e(`audit:label_heading`),children:t.map(t=>(0,g.jsx)(m,{label:e(`audit:label_level_n`,{level:t}),children:(0,g.jsx)(d,{tag:`h${t}`,size:i[t],children:e(`audit:sample_typography_heading`,{level:t})})},t))}),(0,g.jsx)(p,{title:e(`audit:label_text`),children:[`xs`,`sm`,`md`,`lg`,`xl`].map(t=>(0,g.jsx)(m,{label:e(`audit:label_size_n`,{size:t}),children:(0,g.jsx)(l,{size:t,children:e(`audit:sample_typography_text`,{size:t})})},t))}),(0,g.jsx)(p,{title:e(`audit:label_link_styles`),children:(0,g.jsxs)(m,{label:e(`audit:label_link_styles`),children:[(0,g.jsx)(l,{children:(0,g.jsx)(r,{i18nKey:`audit:sample_link_standard`,components:[(0,g.jsx)(u,{href:`#`},`link`)]})}),(0,g.jsx)(l,{color:`text-secondary`,children:(0,g.jsx)(r,{i18nKey:`audit:sample_link_subtle`,components:[(0,g.jsx)(u,{href:`#`,priority:`secondary`},`link`)]})})]})})]})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation([...ALL_NAMESPACES, "audit"]);
    const headingLevels = [1, 2, 3, 4, 5, 6] as const;
    const headingSizes = {
      1: "3xl",
      2: "2xl",
      3: "xl",
      4: "lg",
      5: "md",
      6: "sm"
    } as const;
    const textSizes = ["xs", "sm", "md", "lg", "xl"] as const;
    return <AuditPage title={t("audit:typography_family_title")}>
        {/* Heading Levels */}
        <ComparisonGrid title={t("audit:label_heading")}>
          {headingLevels.map(level => <ComponentGroup key={level} label={t("audit:label_level_n", {
          level
        })}>
              <Title tag={\`h\${level}\` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6"} size={headingSizes[level]}>
                {t("audit:sample_typography_heading", {
              level
            })}
              </Title>
            </ComponentGroup>)}
        </ComparisonGrid>

        {/* Text Sizes */}
        <ComparisonGrid title={t("audit:label_text")}>
          {textSizes.map(size => <ComponentGroup key={size} label={t("audit:label_size_n", {
          size
        })}>
              <Text size={size as "xs" | "sm" | "md" | "lg" | "xl"}>
                {t("audit:sample_typography_text", {
              size
            })}
              </Text>
            </ComponentGroup>)}
        </ComparisonGrid>

        {/* Link Consistency */}
        <ComparisonGrid title={t("audit:label_link_styles")}>
          <ComponentGroup label={t("audit:label_link_styles")}>
            <Text>
              <Trans i18nKey="audit:sample_link_standard" components={[<Link key="link" href="#" />]} />
            </Text>
            <Text color="text-secondary">
              <Trans i18nKey="audit:sample_link_subtle" components={[<Link key="link" href="#" priority="secondary" />]} />
            </Text>
          </ComponentGroup>
        </ComparisonGrid>
      </AuditPage>;
  }
}`,...v.parameters?.docs?.source}}},y=[`Overview`]}))();export{v as Overview,y as __namedExportsOrder,_ as default};