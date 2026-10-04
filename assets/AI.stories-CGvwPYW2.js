"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./useTranslation-BDKsuBAo.js";import{n as o,t as s}from"./i18nConstants-BhvmnjLS.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{Bt as l,Ht as u,Pt as d,Wt as f,a as p,in as m,nn as h,nt as g}from"./iframe-Bq9jGRMU.js";import{n as _,t as v}from"./Box-lSx-_C-t.js";import{n as y,t as b}from"./Flex-CwvbGUNO.js";import{n as x,t as S}from"./Stack-D0pTsuU-.js";import{n as C,t as w}from"./Icon-B_89lpXW.js";import{n as T,t as E}from"./Card-BX8yw3HV.js";import{n as D,t as O}from"./Button-DrO46Brn.js";import{n as k,t as A}from"./Badge-CfPEoJgu.js";import{n as j,t as M}from"./Text-8oARqUeB.js";import{a as N,r as P}from"./Tabs-DzQQ5vFE.js";import{n as F,t as I}from"./Avatar-C38mVE7B.js";import{n as L,t as R}from"./Title-D19NtK2q.js";import{n as z,t as B}from"./CodeBlock-B29-Ig7c.js";import{a as V,o as H,r as U,s as W}from"./ChatUI-CIenbD5C.js";var G=n({ArtifactsCanvas:()=>Y,__namedExportsOrder:()=>X,default:()=>J}),K,q,J,Y,X;function Z(){return(Z=t((()=>{K=e(r(),1),a(),o(),_(),D(),T(),W(),z(),y(),C(),x(),N(),j(),L(),F(),k(),p(),q=c(),J={title:`Patterns/AI`,parameters:{layout:`fullscreen`}},Y={render:function(e){let{t}=i([...s,`docs_stories_recipes`]),[n,r]=(0,K.useState)(`preview`),[a,o]=(0,K.useState)(`chat`),[c,p]=(0,K.useState)(!1),_=e?.isMobile===void 0?c:e.isMobile;(0,K.useEffect)(()=>{if(e?.isMobile!==void 0)return;let t=()=>p(window.innerWidth<1200);return t(),window.addEventListener(`resize`,t),()=>window.removeEventListener(`resize`,t)},[e?.isMobile]);let y=`import React from 'react';
import { Card, Title, Text, Stack } from 'wimui';

export default function WelcomeCard() {
  return (
    <Card variant="glass" padding="xl">
      <Stack gap="md">
        <Title tag="h2" size="lg">${t(`docs_stories_recipes:artifacts.hello_title`)}</Title>
        <Text>${t(`docs_stories_recipes:artifacts.hello_desc`)}</Text>
      </Stack>
    </Card>
  );
}`;return(0,q.jsxs)(v,{style:{height:`100vh`,display:`flex`,flexDirection:_?`column`:`row`,overflow:`hidden`,background:`var(--wim-color-surface)`},children:[(0,q.jsxs)(v,{style:{width:_?`100%`:`400px`,height:_?a===`chat`?`100%`:`0`:`100%`,display:_&&a!==`chat`?`none`:`flex`,borderRight:_?`none`:`1px solid var(--wim-color-border)`,flexDirection:`column`,flexShrink:0,background:`var(--wim-color-surface-subtle-alpha)`},children:[(0,q.jsxs)(v,{p:`md`,style:{borderBottom:`1px solid var(--wim-color-border)`,display:`flex`,alignItems:`center`,justifyContent:`space-between`},children:[(0,q.jsx)(R,{tag:`h3`,size:`sm`,children:t(`chat.ai_assistant`)}),_&&(0,q.jsx)(O,{variant:`ghost`,size:`sm`,onClick:()=>o(`canvas`),children:(0,q.jsxs)(b,{align:`center`,gap:`xs`,children:[(0,q.jsx)(M,{size:`xs`,weight:`bold`,children:t(`docs_stories_recipes:artifacts.canvas`)}),(0,q.jsx)(w,{component:h,size:`xs`})]})})]}),(0,q.jsxs)(H,{style:{flex:1,padding:`var(--wim-spacing-md)`},children:[(0,q.jsxs)(V,{position:`left`,senderName:`AI`,avatar:(0,q.jsx)(I,{size:`sm`,intent:`info`,initials:`AI`}),children:[(0,q.jsx)(M,{size:`sm`,children:t(`docs_stories_recipes:artifacts.assistant_message`)}),(0,q.jsx)(v,{mt:`sm`,children:(0,q.jsx)(E,{variant:`outline`,padding:`sm`,interactive:!0,style:{background:`var(--wim-color-surface)`,borderColor:`var(--wim-color-primary)`},children:(0,q.jsxs)(b,{align:`center`,gap:`sm`,children:[(0,q.jsx)(w,{component:u,size:`sm`,color:`primary`}),(0,q.jsxs)(v,{style:{flex:1},children:[(0,q.jsx)(M,{size:`xs`,weight:`bold`,children:`WelcomeCard.tsx`}),(0,q.jsx)(M,{size:`xs`,color:`text-secondary`,children:t(`docs_stories_recipes:artifacts.react_component`)})]})]})})})]}),(0,q.jsx)(V,{position:`right`,senderName:`You`,avatar:(0,q.jsx)(I,{size:`sm`,intent:`primary`,initials:`ME`}),children:(0,q.jsx)(M,{size:`sm`,children:t(`docs_stories_recipes:artifacts.user_reply`)})}),(0,q.jsx)(V,{isTyping:!0,position:`left`})]}),(0,q.jsx)(v,{p:`md`,style:{borderTop:`1px solid var(--wim-color-border)`},children:(0,q.jsx)(U,{placeholder:t(`docs_stories_recipes:artifacts.chat_placeholder`),showAttach:!0})})]}),(0,q.jsxs)(v,{style:{flex:1,display:_&&a!==`canvas`?`none`:`flex`,flexDirection:`column`,minWidth:0},children:[(0,q.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--wim-spacing-xs)`,borderBottom:`1px solid var(--wim-color-border)`,background:`var(--wim-color-surface)`,flexShrink:0},children:[(0,q.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,padding:`0 var(--wim-spacing-lg)`,gap:`var(--wim-spacing-md)`},children:[(0,q.jsxs)(`div`,{style:{flex:1,display:`flex`,alignItems:`center`,gap:`var(--wim-spacing-md)`,minWidth:0},children:[_&&(0,q.jsx)(O,{variant:`ghost`,size:`sm`,onClick:()=>o(`chat`),style:{paddingLeft:0,flexShrink:0},children:(0,q.jsxs)(b,{align:`center`,gap:`xs`,children:[(0,q.jsx)(w,{component:m,size:`xs`}),(0,q.jsx)(M,{size:`xs`,weight:`bold`,children:t(`docs_stories_recipes:artifacts.chat`)})]})}),(0,q.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`var(--wim-spacing-md)`,minWidth:0,overflow:`hidden`,flex:1},children:[(0,q.jsx)(w,{component:u,size:`sm`,color:`primary`,style:{flexShrink:0}}),(0,q.jsx)(R,{tag:`h4`,size:`sm`,style:{whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`,minWidth:0,flex:1},children:`WelcomeCard.tsx`}),!_&&(0,q.jsx)(A,{content:`v2`,intent:`neutral`,size:`sm`,variant:`subtle`,style:{flexShrink:0}})]})]}),(0,q.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`var(--wim-spacing-sm)`,flexShrink:0},children:[(0,q.jsx)(O,{variant:`ghost`,size:`sm`,"aria-label":t(`docs_stories_recipes:artifacts.btn_copy`),children:(0,q.jsx)(w,{component:f,size:`sm`})}),(0,q.jsx)(O,{variant:`ghost`,size:`sm`,"aria-label":t(`docs_stories_recipes:artifacts.btn_download`),children:(0,q.jsx)(w,{component:l,size:`sm`})}),(0,q.jsx)(O,{variant:`solid`,size:`sm`,style:{flexShrink:0},children:t(`docs_stories_recipes:artifacts.btn_publish`)})]})]}),(0,q.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,padding:`0 var(--wim-spacing-lg)`,borderTop:`1px solid var(--wim-color-border-secondary)`},children:(0,q.jsx)(P,{value:n,onChange:r,style:{width:`auto`},children:(0,q.jsxs)(P.List,{children:[(0,q.jsx)(P.Trigger,{value:`preview`,style:{padding:`var(--wim-spacing-xs) var(--wim-spacing-lg)`},children:t(`docs_stories_recipes:artifacts.tab_preview`)}),(0,q.jsx)(P.Trigger,{value:`code`,style:{padding:`var(--wim-spacing-xs) var(--wim-spacing-lg)`},children:t(`docs_stories_recipes:artifacts.tab_code`)})]})})})]}),(0,q.jsx)(v,{p:`4xl`,style:{flex:1,overflow:`auto`,background:`var(--wim-color-surface-variant)`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:n===`preview`?(0,q.jsxs)(v,{radius:`lg`,shadow:`lg`,style:{width:`100%`,maxWidth:`600px`,background:`var(--wim-color-surface)`,overflow:`hidden`},children:[(0,q.jsxs)(v,{p:`md`,style:{borderBottom:`1px solid var(--wim-color-border)`,display:`flex`,alignItems:`center`,gap:`var(--wim-spacing-md)`},children:[(0,q.jsx)(w,{component:g,size:`xs`,color:`secondary`}),(0,q.jsx)(M,{size:`xs`,color:`text-secondary`,children:`preview.wimui.dev`})]}),(0,q.jsx)(v,{p:`5xl`,style:{display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,q.jsx)(E,{variant:`glass`,padding:`2xl`,style:{textAlign:`center`,margin:`var(--wim-spacing-xl)`},children:(0,q.jsxs)(S,{gap:`xl`,align:`center`,children:[(0,q.jsx)(R,{tag:`h2`,size:`lg`,children:t(`docs_stories_recipes:artifacts.hello_title`)}),(0,q.jsx)(M,{children:t(`docs_stories_recipes:artifacts.hello_desc`)}),(0,q.jsx)(O,{variant:`solid`,children:t(`docs_stories_recipes:artifacts.get_started`)})]})})})]}):(0,q.jsx)(v,{style:{width:`100%`,maxWidth:`800px`,margin:`0 auto`},children:(0,q.jsx)(B,{code:y,language:`tsx`,showLineNumbers:!0,style:{background:`var(--wim-color-surface)`,border:`1px solid var(--wim-color-border)`}})})}),(0,q.jsxs)(v,{px:`lg`,style:{height:`var(--wim-spacing-4xl)`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,borderTop:`1px solid var(--wim-color-border)`,background:`var(--wim-color-surface)`},children:[(0,q.jsx)(M,{size:`xs`,color:`text-secondary`,children:t(`docs_stories_recipes:artifacts.status_updated`)}),(0,q.jsxs)(b,{gap:`md`,children:[(0,q.jsxs)(b,{align:`center`,gap:`xs`,children:[(0,q.jsx)(w,{component:g,size:`xs`,color:`secondary`}),(0,q.jsx)(M,{size:`xs`,color:`text-secondary`,children:t(`docs_stories_recipes:artifacts.device_desktop`)})]}),(0,q.jsxs)(b,{align:`center`,gap:`xs`,children:[(0,q.jsx)(w,{component:d,size:`xs`,color:`secondary`}),(0,q.jsx)(M,{size:`xs`,color:`text-secondary`,children:t(`docs_stories_recipes:artifacts.published`)})]})]})]})]})]})}},X=[`ArtifactsCanvas`],Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: function Render(args: ArtifactsCanvasArgs) {
    const {
      t
    } = useTranslation([...ALL_NAMESPACES, "docs_stories_recipes"]);
    const [activeTab, setActiveTab] = useState("preview");
    const [activeView, setActiveView] = useState<"chat" | "canvas">("chat");
    const [isMobileInternal, setIsMobileInternal] = useState(false);
    const isMobile = args?.isMobile !== undefined ? args.isMobile : isMobileInternal;
    useEffect(() => {
      if (args?.isMobile !== undefined) return;
      const checkMobile = () => setIsMobileInternal(window.innerWidth < 1200);
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }, [args?.isMobile]);
    const SAMPLE_REACT_CODE = \`import React from 'react';
import { Card, Title, Text, Stack } from 'wimui';

export default function WelcomeCard() {
  return (
    <Card variant="glass" padding="xl">
      <Stack gap="md">
        <Title tag="h2" size="lg">\${t("docs_stories_recipes:artifacts.hello_title")}</Title>
        <Text>\${t("docs_stories_recipes:artifacts.hello_desc")}</Text>
      </Stack>
    </Card>
  );
}\`;
    return <Box style={{
      height: "100vh",
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      overflow: "hidden",
      background: "var(--wim-color-surface)"
    }}>
        {/* Left Pane: Chat */}
        <Box style={{
        width: isMobile ? "100%" : "400px",
        height: isMobile ? activeView === "chat" ? "100%" : "0" : "100%",
        display: isMobile && activeView !== "chat" ? "none" : "flex",
        borderRight: isMobile ? "none" : "1px solid var(--wim-color-border)",
        flexDirection: "column",
        flexShrink: 0,
        background: "var(--wim-color-surface-subtle-alpha)"
      }}>
          <Box p="md" style={{
          borderBottom: "1px solid var(--wim-color-border)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}>
            <Title tag="h3" size="sm">{t("chat.ai_assistant")}</Title>
            {isMobile && <Button variant="ghost" size="sm" onClick={() => setActiveView("canvas")}>
                <Flex align="center" gap="xs">
                  <Text size="xs" weight="bold">{t("docs_stories_recipes:artifacts.canvas")}</Text>
                  <Icon component={ChevronRightIcon} size="xs" />
                </Flex>
              </Button>}
          </Box>
          
          <ChatMessageList style={{
          flex: 1,
          padding: "var(--wim-spacing-md)"
        }}>
            <ChatMessage position="left" senderName="AI" avatar={<Avatar size="sm" intent="info" initials="AI" />}>
              <Text size="sm">
                {t("docs_stories_recipes:artifacts.assistant_message")}
              </Text>
              <Box mt="sm">
                <Card variant="outline" padding="sm" interactive style={{
                background: "var(--wim-color-surface)",
                borderColor: "var(--wim-color-primary)"
              }}>
                  <Flex align="center" gap="sm">
                    <Icon component={DocumentIcon} size="sm" color="primary" />
                    <Box style={{
                    flex: 1
                  }}>
                      <Text size="xs" weight="bold">WelcomeCard.tsx</Text>
                      <Text size="xs" color="text-secondary">{t("docs_stories_recipes:artifacts.react_component")}</Text>
                    </Box>
                  </Flex>
                </Card>
              </Box>
            </ChatMessage>
            <ChatMessage position="right" senderName="You" avatar={<Avatar size="sm" intent="primary" initials="ME" />}>
              <Text size="sm">{t("docs_stories_recipes:artifacts.user_reply")}</Text>
            </ChatMessage>
            <ChatMessage isTyping position="left" />
          </ChatMessageList>

          <Box p="md" style={{
          borderTop: "1px solid var(--wim-color-border)"
        }}>
            <ChatInput placeholder={t("docs_stories_recipes:artifacts.chat_placeholder")} showAttach />
          </Box>
        </Box>

        {/* Right Pane: Canvas */}
        <Box style={{
        flex: 1,
        display: isMobile && activeView !== "canvas" ? "none" : "flex",
        flexDirection: "column",
        minWidth: 0
      }}>
          {/* Canvas Header */}
          {/* Canvas Header */}
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--wim-spacing-xs)",
          borderBottom: "1px solid var(--wim-color-border)",
          background: "var(--wim-color-surface)",
          flexShrink: 0
        }}>
            {/* Top Row: Title & Actions */}
            <div style={{
            /* 高さは内容に任せる。ここには \`var(--wim-spacing-6xl)\` と書かれていたが
               spacing は 5xl 止まりで**宣言ごと無効になっていた**（実測でこの 2 行は
               32px と 40.98px ＝ 内容依存）。復元すべき値が存在しないので宣言を落とす。T52 */
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 var(--wim-spacing-lg)",
            gap: "var(--wim-spacing-md)"
          }}>
              {/* Left: Title & Mobile Back */}
              <div style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              gap: "var(--wim-spacing-md)",
              minWidth: 0
            }}>
                {isMobile && <Button variant="ghost" size="sm" onClick={() => setActiveView("chat")} style={{
                paddingLeft: 0,
                flexShrink: 0
              }}>
                    <Flex align="center" gap="xs">
                      <Icon component={ChevronLeftIcon} size="xs" />
                      <Text size="xs" weight="bold">{t("docs_stories_recipes:artifacts.chat")}</Text>
                    </Flex>
                  </Button>}
                <div style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--wim-spacing-md)",
                minWidth: 0,
                overflow: "hidden",
                flex: 1
              }}>
                  <Icon component={DocumentIcon} size="sm" color="primary" style={{
                  flexShrink: 0
                }} />
                  <Title tag="h4" size="sm" style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  minWidth: 0,
                  flex: 1
                }}>WelcomeCard.tsx</Title>
                  {!isMobile && <Badge content="v2" intent="neutral" size="sm" variant="subtle" style={{
                  flexShrink: 0
                }} />}
                </div>
              </div>

              {/* Right: Actions */}
              <div style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--wim-spacing-sm)",
              flexShrink: 0
            }}>
                <Button variant="ghost" size="sm" aria-label={t("docs_stories_recipes:artifacts.btn_copy")}>
                  <Icon component={CopyIcon} size="sm" />
                </Button>
                <Button variant="ghost" size="sm" aria-label={t("docs_stories_recipes:artifacts.btn_download")}>
                  <Icon component={DownloadIcon} size="sm" />
                </Button>
                <Button variant="solid" size="sm" style={{
                flexShrink: 0
              }}>
                  {t("docs_stories_recipes:artifacts.btn_publish")}
                </Button>
              </div>
            </div>

            {/* Bottom Row: Tabs (Always visible on Canvas view) */}
            <div style={{
            /* 高さは内容に任せる。ここには \`var(--wim-spacing-6xl)\` と書かれていたが
               spacing は 5xl 止まりで**宣言ごと無効になっていた**（実測でこの 2 行は
               32px と 40.98px ＝ 内容依存）。復元すべき値が存在しないので宣言を落とす。T52 */
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 var(--wim-spacing-lg)",
            borderTop: "1px solid var(--wim-color-border-secondary)"
          }}>
              <Tabs value={activeTab} onChange={setActiveTab} style={{
              width: "auto"
            }}>
                <Tabs.List>
                  <Tabs.Trigger value="preview" style={{
                  padding: "var(--wim-spacing-xs) var(--wim-spacing-lg)"
                }}>
                    {t("docs_stories_recipes:artifacts.tab_preview")}
                  </Tabs.Trigger>
                  <Tabs.Trigger value="code" style={{
                  padding: "var(--wim-spacing-xs) var(--wim-spacing-lg)"
                }}>
                    {t("docs_stories_recipes:artifacts.tab_code")}
                  </Tabs.Trigger>
                </Tabs.List>
              </Tabs>
            </div>
          </div>

          {/* Canvas Content */}
          <Box p="4xl" style={{
          flex: 1,
          overflow: "auto",
          background: "var(--wim-color-surface-variant)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
            {activeTab === "preview" ? <Box radius="lg" shadow="lg" style={{
            width: "100%",
            maxWidth: "600px",
            background: "var(--wim-color-surface)",
            overflow: "hidden"
          }}>
                <Box p="md" style={{
              borderBottom: "1px solid var(--wim-color-border)",
              display: "flex",
              alignItems: "center",
              gap: "var(--wim-spacing-md)"
            }}>
                  <Icon component={MonitorIcon} size="xs" color="secondary" />
                  <Text size="xs" color="text-secondary">
                    preview.wimui.dev
                  </Text>
                </Box>
                <Box p="5xl" style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
                   {/* border と backdrop-filter は variant="glass" が既に当てている */}
                   <Card variant="glass" padding="2xl" style={{
                textAlign: "center",
                margin: "var(--wim-spacing-xl)"
              }}>
                      <Stack gap="xl" align="center">
                        <Title tag="h2" size="lg">{t("docs_stories_recipes:artifacts.hello_title")}</Title>
                        <Text>{t("docs_stories_recipes:artifacts.hello_desc")}</Text>
                        <Button variant="solid">{t("docs_stories_recipes:artifacts.get_started")}</Button>
                      </Stack>
                   </Card>
                </Box>
              </Box> : (
          /* \`width: 100%\` が要る。この Box は \`display: flex\` の子で、\`maxWidth\` は
              上限を決めるだけで幅を作らない。中身の \`CodeBlock\` は
              \`container-type: inline-size\`（＝ containment）を持つため**内容の寸法が
              0 として扱われ**、flex の自動最小サイズの保護が効かない。結果この列は
              \`CodeBlock\` の \`min-width: var(--wim-width-sm)\` ＝ **180px の床まで潰れ**、
              \`pre\` が横スクロールになっていた（実測 1920px ビューポートで幅 180px /
              \`scrollWidth\` 620px。\`width: 100%\` を足すと 800px / 798px で解消）。
              Preview 側には最初から \`width: "100%"\` があり、Code 側だけ抜けていた。 */
          <Box style={{
            width: "100%",
            maxWidth: "800px",
            margin: "0 auto"
          }}>
                <CodeBlock code={SAMPLE_REACT_CODE} language="tsx" showLineNumbers style={{
              background: "var(--wim-color-surface)",
              border: "1px solid var(--wim-color-border)"
            }} />
              </Box>)}
          </Box>
          
          {/* Canvas Footer */}
          <Box px="lg" style={{
          height: "var(--wim-spacing-4xl)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "1px solid var(--wim-color-border)",
          background: "var(--wim-color-surface)"
        }}>
            <Text size="xs" color="text-secondary">{t("docs_stories_recipes:artifacts.status_updated")}</Text>
            <Flex gap="md">
               <Flex align="center" gap="xs">
                 <Icon component={MonitorIcon} size="xs" color="secondary" />
                 <Text size="xs" color="text-secondary">{t("docs_stories_recipes:artifacts.device_desktop")}</Text>
               </Flex>
               <Flex align="center" gap="xs">
                 <Icon component={ExternalLinkIcon} size="xs" color="secondary" />
                 <Text size="xs" color="text-secondary">{t("docs_stories_recipes:artifacts.published")}</Text>
               </Flex>
            </Flex>
          </Box>
        </Box>
      </Box>;
  }
}`,...Y.parameters?.docs?.source}}}})))()}export{Y as n,Z as r,G as t};