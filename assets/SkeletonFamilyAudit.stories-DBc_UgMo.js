"use client";
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{n,t as r}from"./useTranslation-BDKsuBAo.js";import{n as i,t as a}from"./i18nConstants-BhvmnjLS.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{n as s,t as c}from"./Box-BNJo1pMu.js";import{n as l,t as u}from"./Stack-CrCPoxQ1.js";import{n as d,t as f}from"./Text-1X1ZsZfu.js";import{n as p,t as m}from"./Loader-HcY4ecJL.js";import{n as h,t as g}from"./Spinner-q4VB1Pzw.js";import{n as _,t as v}from"./LoadingOverlay-C4Vz_WYG.js";import{n as y,t as b}from"./Skeleton-BkgqJ6aB.js";import{i as x,n as S,r as C,t as w}from"./AuditUtils-DQd41XyN.js";var T,E,D,O;function k(){return(k=e((()=>{t(),r(),i(),y(),h(),p(),_(),l(),d(),s(),T=o(),x(),E={title:`Audit/SkeletonFamily`,parameters:{layout:`fullscreen`}},D={render:()=>{let{t:e}=n([...a,`audit`]),t=[`sm`,`md`,`lg`,`xl`],r=[`primary`,`secondary`,`success`,`warning`,`danger`,`neutral`];return(0,T.jsxs)(w,{title:e(`audit:skeleton_family_title`),children:[(0,T.jsxs)(S,{title:e(`audit:skeleton_radius_check`),children:[(0,T.jsx)(C,{label:`${e(`audit:label_skeleton`)} — ${e(`audit:sfx_text_radius_sm`)}`,children:(0,T.jsxs)(u,{gap:`xs`,style:{maxWidth:`400px`},children:[(0,T.jsx)(b,{variant:`text`,width:`100%`}),(0,T.jsx)(b,{variant:`text`,width:`80%`}),(0,T.jsx)(b,{variant:`text`,width:`60%`})]})}),(0,T.jsx)(C,{label:`${e(`audit:label_skeleton`)} — ${e(`audit:sfx_rect_radius_sm`)}`,children:(0,T.jsxs)(u,{direction:`row`,gap:`md`,wrap:!0,children:[(0,T.jsx)(b,{variant:`rect`,width:120,height:80}),(0,T.jsx)(b,{variant:`rect`,width:200,height:40}),(0,T.jsx)(b,{variant:`rect`,width:80,height:80})]})}),(0,T.jsx)(C,{label:`${e(`audit:label_skeleton`)} — ${e(`audit:sfx_circle_radius_full`)}`,children:(0,T.jsxs)(u,{direction:`row`,gap:`md`,wrap:!0,children:[(0,T.jsx)(b,{variant:`circle`,width:32,height:32}),(0,T.jsx)(b,{variant:`circle`,width:40,height:40}),(0,T.jsx)(b,{variant:`circle`,width:56,height:56}),(0,T.jsx)(b,{variant:`circle`,width:80,height:80})]})}),(0,T.jsx)(C,{label:e(`audit:skeleton_radius_card_mock`),children:(0,T.jsxs)(u,{gap:`md`,style:{maxWidth:`320px`},children:[(0,T.jsxs)(u,{direction:`row`,gap:`md`,align:`center`,children:[(0,T.jsx)(b,{variant:`circle`,width:40,height:40}),(0,T.jsxs)(u,{gap:`xs`,style:{flex:1},children:[(0,T.jsx)(b,{variant:`text`,width:`60%`}),(0,T.jsx)(b,{variant:`text`,width:`40%`})]})]}),(0,T.jsx)(b,{variant:`rect`,width:`100%`,height:160}),(0,T.jsx)(b,{variant:`text`,width:`90%`}),(0,T.jsx)(b,{variant:`text`,width:`75%`}),(0,T.jsx)(b,{variant:`text`,width:`50%`})]})})]}),(0,T.jsx)(S,{title:e(`audit:skeleton_animation_sync`),children:[`pulse`,`wave`,`none`].map(t=>(0,T.jsx)(C,{label:`${e(`audit:label_skeleton`)} — animation: ${t}`,children:(0,T.jsxs)(u,{gap:`xs`,style:{maxWidth:`400px`},children:[(0,T.jsx)(b,{variant:`text`,animation:t,width:`100%`}),(0,T.jsx)(b,{variant:`text`,animation:t,width:`80%`}),(0,T.jsx)(b,{variant:`rect`,animation:t,width:`100%`,height:60})]})},t))}),(0,T.jsxs)(S,{title:e(`audit:skeleton_color_size_sync`),children:[(0,T.jsx)(C,{label:`${e(`audit:label_spinner`)} — ${e(`audit:size_comparison`)}`,children:(0,T.jsx)(u,{direction:`row`,gap:`xl`,align:`center`,wrap:!0,children:t.map(e=>(0,T.jsxs)(u,{gap:`xs`,align:`center`,children:[(0,T.jsx)(g,{size:e}),(0,T.jsx)(f,{size:`xs`,color:`text-secondary`,children:e})]},e))})}),(0,T.jsx)(C,{label:`${e(`audit:label_spinner`)} — ${e(`audit:intent_comparison`)}`,children:(0,T.jsx)(u,{direction:`row`,gap:`xl`,align:`center`,wrap:!0,children:r.map(e=>(0,T.jsxs)(u,{gap:`xs`,align:`center`,children:[(0,T.jsx)(g,{color:e}),(0,T.jsx)(f,{size:`xs`,color:`text-secondary`,children:e})]},e))})}),(0,T.jsx)(C,{label:`${e(`audit:label_spinner`)} — ${e(`audit:sfx_label_right_bottom`)}`,children:(0,T.jsxs)(u,{direction:`row`,gap:`xl`,align:`start`,wrap:!0,children:[(0,T.jsx)(g,{label:e(`audit:demo_loading`),labelPosition:`right`}),(0,T.jsx)(g,{label:e(`audit:demo_loading`),labelPosition:`bottom`})]})}),(0,T.jsx)(C,{label:`${e(`audit:label_loader`)} — ${e(`audit:variant_comparison`)}`,children:(0,T.jsx)(u,{direction:`row`,gap:`xl`,align:`center`,wrap:!0,children:[`bars`,`dots`,`pulse`].map(e=>(0,T.jsxs)(u,{gap:`xs`,align:`center`,children:[(0,T.jsx)(m,{variant:e}),(0,T.jsx)(f,{size:`xs`,color:`text-secondary`,children:e})]},e))})}),(0,T.jsx)(C,{label:`${e(`audit:label_loader`)} — ${e(`audit:size_comparison`)}`,children:(0,T.jsx)(u,{direction:`row`,gap:`xl`,align:`center`,wrap:!0,children:t.filter(e=>e!==`xl`).map(e=>(0,T.jsxs)(u,{gap:`xs`,align:`center`,children:[(0,T.jsx)(m,{size:e}),(0,T.jsx)(f,{size:`xs`,color:`text-secondary`,children:e})]},e))})}),(0,T.jsx)(C,{label:`${e(`audit:label_loader`)} — ${e(`audit:intent_comparison`)}`,children:(0,T.jsx)(u,{direction:`row`,gap:`xl`,align:`center`,wrap:!0,children:r.map(e=>(0,T.jsxs)(u,{gap:`xs`,align:`center`,children:[(0,T.jsx)(m,{color:e}),(0,T.jsx)(f,{size:`xs`,color:`text-secondary`,children:e})]},e))})})]}),(0,T.jsxs)(S,{title:e(`audit:skeleton_overlay_variants`),children:[(0,T.jsx)(C,{label:`${e(`audit:label_loading_overlay`)} — backdropVariant: dark / light`,children:(0,T.jsx)(u,{direction:`row`,gap:`lg`,wrap:!0,children:[`dark`,`light`].map(t=>(0,T.jsxs)(u,{gap:`xs`,align:`center`,children:[(0,T.jsxs)(`div`,{style:{position:`relative`,width:`200px`,height:`120px`,borderRadius:`var(--wim-radius-md)`,border:`1px solid var(--wim-color-border)`,overflow:`hidden`,background:`var(--wim-color-surface)`},children:[(0,T.jsx)(c,{p:`md`,children:(0,T.jsx)(f,{size:`sm`,children:e(`audit:skeleton_content_underneath`)})}),(0,T.jsx)(v,{visible:!0,backdropVariant:t,loaderSize:`md`})]}),(0,T.jsx)(f,{size:`xs`,color:`text-secondary`,children:t})]},t))})}),(0,T.jsx)(C,{label:`${e(`audit:label_loading_overlay`)} — blur: none / sm / md / lg`,children:(0,T.jsx)(u,{direction:`row`,gap:`lg`,wrap:!0,children:[`none`,`sm`,`md`,`lg`].map(e=>(0,T.jsxs)(u,{gap:`xs`,align:`center`,children:[(0,T.jsxs)(`div`,{style:{position:`relative`,width:`200px`,height:`120px`,borderRadius:`var(--wim-radius-md)`,border:`1px solid var(--wim-color-border)`,overflow:`hidden`,background:`var(--wim-color-surface)`},children:[(0,T.jsxs)(u,{p:`md`,gap:`xs`,children:[(0,T.jsx)(b,{variant:`text`,width:`80%`}),(0,T.jsx)(b,{variant:`text`,width:`60%`}),(0,T.jsx)(b,{variant:`rect`,width:`100%`,height:40})]}),(0,T.jsx)(v,{visible:!0,blur:e,loaderSize:`md`})]}),(0,T.jsxs)(f,{size:`xs`,color:`text-secondary`,children:[`blur: `,e]})]},e))})}),(0,T.jsx)(C,{label:`${e(`audit:label_loading_overlay`)} — ${e(`audit:sfx_loader_type_comparison`)}`,children:(0,T.jsx)(u,{direction:`row`,gap:`lg`,wrap:!0,children:[`spinner`,`bars`,`dots`,`pulse`].map(e=>(0,T.jsxs)(u,{gap:`xs`,align:`center`,children:[(0,T.jsx)(`div`,{style:{position:`relative`,width:`160px`,height:`100px`,borderRadius:`var(--wim-radius-md)`,border:`1px solid var(--wim-color-border)`,overflow:`hidden`,background:`var(--wim-color-surface)`},children:(0,T.jsx)(v,{visible:!0,loaderType:e,loaderSize:`sm`})}),(0,T.jsx)(f,{size:`xs`,color:`text-secondary`,children:e})]},e))})}),(0,T.jsx)(C,{label:`${e(`audit:label_loading_overlay`)} — ${e(`audit:sfx_with_message`)}`,children:(0,T.jsx)(`div`,{style:{position:`relative`,width:`300px`,height:`160px`,borderRadius:`var(--wim-radius-md)`,border:`1px solid var(--wim-color-border)`,overflow:`hidden`,background:`var(--wim-color-surface)`},children:(0,T.jsx)(v,{visible:!0,loaderType:`spinner`,loaderSize:`lg`,message:e(`audit:skeleton_uploading`),blur:`md`})})})]})]})}},O=[`Overview`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation([...ALL_NAMESPACES, "audit"]);
    const sizes = ["sm", "md", "lg", "xl"] as const;
    const colors = ["primary", "secondary", "success", "warning", "danger", "neutral"] as const;
    const loaderVariants = ["bars", "dots", "pulse"] as const;
    const skeletonAnimations = ["pulse", "wave", "none"] as const;
    return <AuditPage title={t("audit:skeleton_family_title")}>
        {/* Skeleton Radius Check */}
        <ComparisonGrid title={t("audit:skeleton_radius_check")}>
          <ComponentGroup label={\`\${t("audit:label_skeleton")} — \${t("audit:sfx_text_radius_sm")}\`}>
            <Stack gap="xs" style={{
            maxWidth: "400px"
          }}>
              <Skeleton variant="text" width="100%" />
              <Skeleton variant="text" width="80%" />
              <Skeleton variant="text" width="60%" />
            </Stack>
          </ComponentGroup>

          <ComponentGroup label={\`\${t("audit:label_skeleton")} — \${t("audit:sfx_rect_radius_sm")}\`}>
            <Stack direction="row" gap="md" wrap>
              <Skeleton variant="rect" width={120} height={80} />
              <Skeleton variant="rect" width={200} height={40} />
              <Skeleton variant="rect" width={80} height={80} />
            </Stack>
          </ComponentGroup>

          <ComponentGroup label={\`\${t("audit:label_skeleton")} — \${t("audit:sfx_circle_radius_full")}\`}>
            <Stack direction="row" gap="md" wrap>
              <Skeleton variant="circle" width={32} height={32} />
              <Skeleton variant="circle" width={40} height={40} />
              <Skeleton variant="circle" width={56} height={56} />
              <Skeleton variant="circle" width={80} height={80} />
            </Stack>
          </ComponentGroup>

          <ComponentGroup label={t("audit:skeleton_radius_card_mock")}>
            <Stack gap="md" style={{
            maxWidth: "320px"
          }}>
              <Stack direction="row" gap="md" align="center">
                <Skeleton variant="circle" width={40} height={40} />
                <Stack gap="xs" style={{
                flex: 1
              }}>
                  <Skeleton variant="text" width="60%" />
                  <Skeleton variant="text" width="40%" />
                </Stack>
              </Stack>
              <Skeleton variant="rect" width="100%" height={160} />
              <Skeleton variant="text" width="90%" />
              <Skeleton variant="text" width="75%" />
              <Skeleton variant="text" width="50%" />
            </Stack>
          </ComponentGroup>
        </ComparisonGrid>

        {/* Animation Sync */}
        <ComparisonGrid title={t("audit:skeleton_animation_sync")}>
          {skeletonAnimations.map(animation => <ComponentGroup key={animation}
        /* i18n-ignore-next-line — animation はプロパティ名 */ label={\`\${t("audit:label_skeleton")} — animation: \${animation}\`}>
              <Stack gap="xs" style={{
            maxWidth: "400px"
          }}>
                <Skeleton variant="text" animation={animation} width="100%" />
                <Skeleton variant="text" animation={animation} width="80%" />
                <Skeleton variant="rect" animation={animation} width="100%" height={60} />
              </Stack>
            </ComponentGroup>)}
        </ComparisonGrid>

        {/* Color & Size Sync: Spinner */}
        <ComparisonGrid title={t("audit:skeleton_color_size_sync")}>
          <ComponentGroup label={\`\${t("audit:label_spinner")} — \${t("audit:size_comparison")}\`}>
            <Stack direction="row" gap="xl" align="center" wrap>
              {sizes.map(size => <Stack key={size} gap="xs" align="center">
                  <Spinner size={size} />
                  <Text size="xs" color="text-secondary">{size}</Text>
                </Stack>)}
            </Stack>
          </ComponentGroup>

          <ComponentGroup label={\`\${t("audit:label_spinner")} — \${t("audit:intent_comparison")}\`}>
            <Stack direction="row" gap="xl" align="center" wrap>
              {colors.map(color => <Stack key={color} gap="xs" align="center">
                  <Spinner color={color} />
                  <Text size="xs" color="text-secondary">{color}</Text>
                </Stack>)}
            </Stack>
          </ComponentGroup>

          <ComponentGroup label={\`\${t("audit:label_spinner")} — \${t("audit:sfx_label_right_bottom")}\`}>
            <Stack direction="row" gap="xl" align="start" wrap>
              <Spinner label={t("audit:demo_loading")} labelPosition="right" />
              <Spinner label={t("audit:demo_loading")} labelPosition="bottom" />
            </Stack>
          </ComponentGroup>

          <ComponentGroup label={\`\${t("audit:label_loader")} — \${t("audit:variant_comparison")}\`}>
            <Stack direction="row" gap="xl" align="center" wrap>
              {loaderVariants.map(variant => <Stack key={variant} gap="xs" align="center">
                  <Loader variant={variant} />
                  <Text size="xs" color="text-secondary">{variant}</Text>
                </Stack>)}
            </Stack>
          </ComponentGroup>

          <ComponentGroup label={\`\${t("audit:label_loader")} — \${t("audit:size_comparison")}\`}>
            <Stack direction="row" gap="xl" align="center" wrap>
              {sizes.filter(s => s !== "xl").map(size => <Stack key={size} gap="xs" align="center">
                  <Loader size={size} />
                  <Text size="xs" color="text-secondary">{size}</Text>
                </Stack>)}
            </Stack>
          </ComponentGroup>

          <ComponentGroup label={\`\${t("audit:label_loader")} — \${t("audit:intent_comparison")}\`}>
            <Stack direction="row" gap="xl" align="center" wrap>
              {colors.map(color => <Stack key={color} gap="xs" align="center">
                  <Loader color={color} />
                  <Text size="xs" color="text-secondary">{color}</Text>
                </Stack>)}
            </Stack>
          </ComponentGroup>
        </ComparisonGrid>

        {/* LoadingOverlay Variants */}
        <ComparisonGrid title={t("audit:skeleton_overlay_variants")}>
          {/* i18n-ignore-next-line — backdropVariant はプロパティ名と値の列挙 */}
          <ComponentGroup label={\`\${t("audit:label_loading_overlay")} — backdropVariant: dark / light\`}>
            <Stack direction="row" gap="lg" wrap>
              {(["dark", "light"] as const).map(variant => <Stack key={variant} gap="xs" align="center">
                  <div style={{
                position: "relative",
                width: "200px",
                height: "120px",
                borderRadius: "var(--wim-radius-md)",
                border: "1px solid var(--wim-color-border)",
                overflow: "hidden",
                background: "var(--wim-color-surface)"
              }}>
                    <Box p="md">
                      <Text size="sm">{t("audit:skeleton_content_underneath")}</Text>
                    </Box>
                    <LoadingOverlay visible backdropVariant={variant} loaderSize="md" />
                  </div>
                  <Text size="xs" color="text-secondary">{variant}</Text>
                </Stack>)}
            </Stack>
          </ComponentGroup>

          {/* i18n-ignore-next-line — blur はプロパティ名とトークン値の列挙 */}
          <ComponentGroup label={\`\${t("audit:label_loading_overlay")} — blur: none / sm / md / lg\`}>
            <Stack direction="row" gap="lg" wrap>
              {(["none", "sm", "md", "lg"] as const).map(blur => <Stack key={blur} gap="xs" align="center">
                  <div style={{
                position: "relative",
                width: "200px",
                height: "120px",
                borderRadius: "var(--wim-radius-md)",
                border: "1px solid var(--wim-color-border)",
                overflow: "hidden",
                background: "var(--wim-color-surface)"
              }}>
                    <Stack p="md" gap="xs">
                      <Skeleton variant="text" width="80%" />
                      <Skeleton variant="text" width="60%" />
                      <Skeleton variant="rect" width="100%" height={40} />
                    </Stack>
                    <LoadingOverlay visible blur={blur} loaderSize="md" />
                  </div>
                  <Text size="xs" color="text-secondary">blur: {blur}</Text>
                </Stack>)}
            </Stack>
          </ComponentGroup>

          <ComponentGroup label={\`\${t("audit:label_loading_overlay")} — \${t("audit:sfx_loader_type_comparison")}\`}>
            <Stack direction="row" gap="lg" wrap>
              {(["spinner", "bars", "dots", "pulse"] as const).map(loaderType => <Stack key={loaderType} gap="xs" align="center">
                  <div style={{
                position: "relative",
                width: "160px",
                height: "100px",
                borderRadius: "var(--wim-radius-md)",
                border: "1px solid var(--wim-color-border)",
                overflow: "hidden",
                background: "var(--wim-color-surface)"
              }}>
                    <LoadingOverlay visible loaderType={loaderType} loaderSize="sm" />
                  </div>
                  <Text size="xs" color="text-secondary">{loaderType}</Text>
                </Stack>)}
            </Stack>
          </ComponentGroup>

          <ComponentGroup label={\`\${t("audit:label_loading_overlay")} — \${t("audit:sfx_with_message")}\`}>
            <div style={{
            position: "relative",
            width: "300px",
            height: "160px",
            borderRadius: "var(--wim-radius-md)",
            border: "1px solid var(--wim-color-border)",
            overflow: "hidden",
            background: "var(--wim-color-surface)"
          }}>
              <LoadingOverlay visible loaderType="spinner" loaderSize="lg" message={t("audit:skeleton_uploading")} blur="md" />
            </div>
          </ComponentGroup>
        </ComparisonGrid>
      </AuditPage>;
  }
}`,...D.parameters?.docs?.source}}}})))()}k();export{D as Overview,O as __namedExportsOrder,E as default};