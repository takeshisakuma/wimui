"use client";
import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,In as i,It as a,Rn as o,Sn as s,bn as c,br as l,cr as u,mn as d,wn as f,xr as p,yr as m,z as h}from"./iframe-DiXuc7DI.js";import{Ft as g,i as _,kt as v,o as y,s as b,t as x}from"./src-BE5jBQ9L.js";import{t as S}from"./Box-Bs2Irq0X.js";import{a as C}from"./SpeedDial-zLpS6dnZ.js";import{i as w}from"./List-C4WUy_aA.js";import{t as T}from"./Icon-Bz8kwOgZ.js";import{t as E}from"./Card-eglN3578.js";import{t as D}from"./Button-d-SlSJ4S.js";import{l as O}from"./FieldTemplate-C0nkiaIz.js";import{t as k}from"./Text-B6DLYHMc.js";import{t as A}from"./Title-BgOFD6Cx.js";import{t as j}from"./CodeBlock-CYgTrvx2.js";var M,N,P,F,I,L=e((()=>{M=t(n(),1),p(),l(),x(),h(),N=u(),P={title:`Patterns/AI`,parameters:{layout:`fullscreen`}},F={render:function(e){let{t}=r([...m,`docs_stories_recipes`]),[n,l]=(0,M.useState)(`preview`),[u,p]=(0,M.useState)(`chat`),[h,x]=(0,M.useState)(!1),P=e?.isMobile===void 0?h:e.isMobile;(0,M.useEffect)(()=>{if(e?.isMobile!==void 0)return;let t=()=>x(window.innerWidth<1200);return t(),window.addEventListener(`resize`,t),()=>window.removeEventListener(`resize`,t)},[e?.isMobile]);let F=`import React from 'react';
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
}`;return(0,N.jsxs)(S,{style:{height:`100vh`,display:`flex`,flexDirection:P?`column`:`row`,overflow:`hidden`,background:`var(--wim-color-surface)`},children:[(0,N.jsxs)(S,{style:{width:P?`100%`:`400px`,height:P?u===`chat`?`100%`:`0`:`100%`,display:P&&u!==`chat`?`none`:`flex`,borderRight:P?`none`:`1px solid var(--wim-color-border)`,flexDirection:`column`,flexShrink:0,background:`var(--wim-color-surface-subtle-alpha)`},children:[(0,N.jsxs)(S,{p:`md`,style:{borderBottom:`1px solid var(--wim-color-border)`,display:`flex`,alignItems:`center`,justifyContent:`space-between`},children:[(0,N.jsx)(A,{tag:`h3`,size:`sm`,children:t(`chat.ai_assistant`)}),P&&(0,N.jsx)(D,{variant:`ghost`,size:`sm`,onClick:()=>p(`canvas`),children:(0,N.jsxs)(C,{align:`center`,gap:`xs`,children:[(0,N.jsx)(k,{size:`xs`,weight:`bold`,children:t(`docs_stories_recipes:artifacts.canvas`)}),(0,N.jsx)(T,{component:i,size:`xs`})]})})]}),(0,N.jsxs)(b,{style:{flex:1,padding:`var(--wim-spacing-md)`},children:[(0,N.jsxs)(y,{position:`left`,senderName:`AI`,avatar:(0,N.jsx)(v,{size:`sm`,intent:`info`,initials:`AI`}),children:[(0,N.jsx)(k,{size:`sm`,children:t(`docs_stories_recipes:artifacts.assistant_message`)}),(0,N.jsx)(S,{mt:`sm`,children:(0,N.jsx)(E,{variant:`outline`,padding:`sm`,interactive:!0,style:{background:`var(--wim-color-surface)`,borderColor:`var(--wim-color-primary)`},children:(0,N.jsxs)(C,{align:`center`,gap:`sm`,children:[(0,N.jsx)(T,{component:s,size:`sm`,color:`primary`}),(0,N.jsxs)(S,{style:{flex:1},children:[(0,N.jsx)(k,{size:`xs`,weight:`bold`,children:`WelcomeCard.tsx`}),(0,N.jsx)(k,{size:`xs`,color:`text-secondary`,children:t(`docs_stories_recipes:artifacts.react_component`)})]})]})})})]}),(0,N.jsx)(y,{position:`right`,senderName:`You`,avatar:(0,N.jsx)(v,{size:`sm`,intent:`primary`,initials:`ME`}),children:(0,N.jsx)(k,{size:`sm`,children:t(`docs_stories_recipes:artifacts.user_reply`)})}),(0,N.jsx)(y,{isTyping:!0,position:`left`})]}),(0,N.jsx)(S,{p:`md`,style:{borderTop:`1px solid var(--wim-color-border)`},children:(0,N.jsx)(_,{placeholder:t(`docs_stories_recipes:artifacts.chat_placeholder`),showAttach:!0})})]}),(0,N.jsxs)(S,{style:{flex:1,display:P&&u!==`canvas`?`none`:`flex`,flexDirection:`column`,minWidth:0},children:[(0,N.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--wim-spacing-xs)`,borderBottom:`1px solid var(--wim-color-border)`,background:`var(--wim-color-surface)`,flexShrink:0},children:[(0,N.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,padding:`0 var(--wim-spacing-lg)`,gap:`var(--wim-spacing-md)`},children:[(0,N.jsxs)(`div`,{style:{flex:1,display:`flex`,alignItems:`center`,gap:`var(--wim-spacing-md)`,minWidth:0},children:[P&&(0,N.jsx)(D,{variant:`ghost`,size:`sm`,onClick:()=>p(`chat`),style:{paddingLeft:0,flexShrink:0},children:(0,N.jsxs)(C,{align:`center`,gap:`xs`,children:[(0,N.jsx)(T,{component:o,size:`xs`}),(0,N.jsx)(k,{size:`xs`,weight:`bold`,children:t(`docs_stories_recipes:artifacts.chat`)})]})}),(0,N.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`var(--wim-spacing-md)`,minWidth:0,overflow:`hidden`,flex:1},children:[(0,N.jsx)(T,{component:s,size:`sm`,color:`primary`,style:{flexShrink:0}}),(0,N.jsx)(A,{tag:`h4`,size:`sm`,style:{whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`,minWidth:0,flex:1},children:`WelcomeCard.tsx`}),!P&&(0,N.jsx)(O,{content:`v2`,intent:`neutral`,size:`sm`,variant:`subtle`,style:{flexShrink:0}})]})]}),(0,N.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`var(--wim-spacing-sm)`,flexShrink:0},children:[(0,N.jsx)(D,{variant:`ghost`,size:`sm`,"aria-label":t(`docs_stories_recipes:artifacts.btn_copy`),children:(0,N.jsx)(T,{component:f,size:`sm`})}),(0,N.jsx)(D,{variant:`ghost`,size:`sm`,"aria-label":t(`docs_stories_recipes:artifacts.btn_download`),children:(0,N.jsx)(T,{component:c,size:`sm`})}),(0,N.jsx)(D,{variant:`solid`,size:`sm`,style:{flexShrink:0},children:t(`docs_stories_recipes:artifacts.btn_publish`)})]})]}),(0,N.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,padding:`0 var(--wim-spacing-lg)`,borderTop:`1px solid var(--wim-color-border-secondary)`},children:(0,N.jsx)(g,{value:n,onChange:l,style:{width:`auto`},children:(0,N.jsxs)(g.List,{children:[(0,N.jsx)(g.Trigger,{value:`preview`,style:{padding:`var(--wim-spacing-xs) var(--wim-spacing-lg)`},children:t(`docs_stories_recipes:artifacts.tab_preview`)}),(0,N.jsx)(g.Trigger,{value:`code`,style:{padding:`var(--wim-spacing-xs) var(--wim-spacing-lg)`},children:t(`docs_stories_recipes:artifacts.tab_code`)})]})})})]}),(0,N.jsx)(S,{p:`4xl`,style:{flex:1,overflow:`auto`,background:`var(--wim-color-surface-variant)`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:n===`preview`?(0,N.jsxs)(S,{radius:`lg`,shadow:`lg`,style:{width:`100%`,maxWidth:`600px`,background:`var(--wim-color-surface)`,overflow:`hidden`},children:[(0,N.jsxs)(S,{p:`md`,style:{borderBottom:`1px solid var(--wim-color-border)`,display:`flex`,alignItems:`center`,gap:`var(--wim-spacing-md)`},children:[(0,N.jsx)(T,{component:a,size:`xs`,color:`secondary`}),(0,N.jsx)(k,{size:`xs`,color:`text-secondary`,children:`preview.wimui.dev`})]}),(0,N.jsx)(S,{p:`5xl`,style:{display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,N.jsx)(E,{variant:`glass`,padding:`2xl`,style:{textAlign:`center`,margin:`var(--wim-spacing-xl)`},children:(0,N.jsxs)(w,{gap:`xl`,align:`center`,children:[(0,N.jsx)(A,{tag:`h2`,size:`lg`,children:t(`docs_stories_recipes:artifacts.hello_title`)}),(0,N.jsx)(k,{children:t(`docs_stories_recipes:artifacts.hello_desc`)}),(0,N.jsx)(D,{variant:`solid`,children:t(`docs_stories_recipes:artifacts.get_started`)})]})})})]}):(0,N.jsx)(S,{style:{maxWidth:`800px`,margin:`0 auto`},children:(0,N.jsx)(j,{code:F,language:`tsx`,showLineNumbers:!0,style:{background:`var(--wim-color-surface)`,border:`1px solid var(--wim-color-border)`}})})}),(0,N.jsxs)(S,{px:`lg`,style:{height:`var(--wim-spacing-4xl)`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,borderTop:`1px solid var(--wim-color-border)`,background:`var(--wim-color-surface)`},children:[(0,N.jsx)(k,{size:`xs`,color:`text-secondary`,children:t(`docs_stories_recipes:artifacts.status_updated`)}),(0,N.jsxs)(C,{gap:`md`,children:[(0,N.jsxs)(C,{align:`center`,gap:`xs`,children:[(0,N.jsx)(T,{component:a,size:`xs`,color:`secondary`}),(0,N.jsx)(k,{size:`xs`,color:`text-secondary`,children:t(`docs_stories_recipes:artifacts.device_desktop`)})]}),(0,N.jsxs)(C,{align:`center`,gap:`xs`,children:[(0,N.jsx)(T,{component:d,size:`xs`,color:`secondary`}),(0,N.jsx)(k,{size:`xs`,color:`text-secondary`,children:t(`docs_stories_recipes:artifacts.published`)})]})]})]})]})]})}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
              </Box> : <Box style={{
            maxWidth: "800px",
            margin: "0 auto"
          }}>
                <CodeBlock code={SAMPLE_REACT_CODE} language="tsx" showLineNumbers style={{
              background: "var(--wim-color-surface)",
              border: "1px solid var(--wim-color-border)"
            }} />
              </Box>}
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
}`,...F.parameters?.docs?.source}}},I=[`ArtifactsCanvas`]}));L();export{F as ArtifactsCanvas,I as __namedExportsOrder,P as default,L as t};