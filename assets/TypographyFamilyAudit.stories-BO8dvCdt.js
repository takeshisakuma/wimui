"use client";
import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./react-DmCNssFd.js";import{Cr as n,Tr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-splidnB2.js";import{t as c}from"./src-CV0le6yM.js";import{t as l}from"./Text-CLDfz7UT.js";import{r as u}from"./Blockquote-CsVFCPEU.js";import{t as d}from"./Title-DgBJgLRP.js";import{t as f}from"./Spoiler-BGFuohi_.js";import{i as p,n as m,r as h,t as g}from"./AuditUtils-CDbRpqsv.js";var _,v,y,b;e((()=>{t(),o(),i(),c(),_=a(),p(),v={title:`Audit/TypographyFamily`,parameters:{layout:`fullscreen`}},y={render:()=>{let{t:e}=n([...s,`audit`]),t=[1,2,3,4,5,6],i={1:`3xl`,2:`2xl`,3:`xl`,4:`lg`,5:`md`,6:`sm`};return(0,_.jsxs)(g,{title:e(`audit:typography_family_title`),children:[(0,_.jsx)(m,{title:e(`audit:label_heading`),children:t.map(t=>(0,_.jsx)(h,{label:e(`audit:label_level_n`,{level:t}),children:(0,_.jsx)(d,{tag:`h${t}`,size:i[t],children:e(`audit:sample_typography_heading`,{level:t})})},t))}),(0,_.jsx)(m,{title:e(`audit:label_text`),children:[`xs`,`sm`,`md`,`lg`,`xl`].map(t=>(0,_.jsx)(h,{label:e(`audit:label_size_n`,{size:t}),children:(0,_.jsx)(l,{size:t,children:e(`audit:sample_typography_text`,{size:t})})},t))}),(0,_.jsx)(m,{title:e(`audit:label_spoiler`),children:(0,_.jsx)(h,{label:e(`audit:label_spoiler`),align:`stretch`,children:(0,_.jsx)(f,{children:e(`audit:sample_spoiler_body`)})})}),(0,_.jsx)(m,{title:e(`audit:label_link_styles`),children:(0,_.jsxs)(h,{label:e(`audit:label_link_styles`),children:[(0,_.jsx)(l,{children:(0,_.jsx)(r,{i18nKey:`audit:sample_link_standard`,components:[(0,_.jsx)(u,{href:`#`},`link`)]})}),(0,_.jsx)(l,{color:`text-secondary`,children:(0,_.jsx)(r,{i18nKey:`audit:sample_link_subtle`,components:[(0,_.jsx)(u,{href:`#`,priority:`secondary`},`link`)]})})]})})]})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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

        {/* Spoiler */}
        <ComparisonGrid title={t("audit:label_spoiler")}>
          <ComponentGroup label={t("audit:label_spoiler")} align="stretch">
            <Spoiler>{t("audit:sample_spoiler_body")}</Spoiler>
          </ComponentGroup>
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
}`,...y.parameters?.docs?.source}}},b=[`Overview`]}))();export{y as Overview,b as __namedExportsOrder,v as default};