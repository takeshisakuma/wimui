"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,br as a,cr as o,xr as s,yr as c}from"./iframe-F5Up1IQq.js";import{Di as l,Ni as u,Pr as d,Vn as f,di as p,t as m}from"./src-Ssuy8lr7.js";import{t as h}from"./Box--bAE-pUN.js";import{r as g}from"./OverlayBase-BjdhR033.js";import{t as _}from"./Stack-CC3QEopK.js";import{t as v}from"./Icon-dyTmj1rn.js";import{t as y}from"./Card-D3LCYC3A.js";import{t as b}from"./Button-Dps1MPAd.js";import{t as x}from"./Badge-CRzmzbP0.js";var S=e({CustomContainer:()=>D,NotificationCenter:()=>k,OverflowEscape:()=>E,SidePanelDetail:()=>A,__namedExportsOrder:()=>j,default:()=>T}),C,w,T,E,D,O,k,A,j,M=t((()=>{C=n(r(),1),s(),a(),m(),w=o(),T={title:`Components/Internal/Portal`,component:g,parameters:{layout:`centered`},tags:[]},E={render:function(){let[e,t]=(0,C.useState)(!1),{t:n}=i(c);return(0,w.jsx)(y,{variant:`outline`,padding:`lg`,style:{width:`100%`,maxWidth:`400px`,height:`250px`,padding:`32px`,position:`relative`,overflow:`hidden`},children:(0,w.jsxs)(y.Body,{style:{height:`100%`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`},children:[(0,w.jsxs)(`div`,{style:{textAlign:`center`,marginBottom:`16px`},children:[(0,w.jsx)(`p`,{dangerouslySetInnerHTML:{__html:n(`story.portal_desc_overflow`)}}),(0,w.jsx)(`p`,{children:n(`story.portal_desc_escape`)})]}),(0,w.jsx)(b,{onClick:()=>t(!e),variant:`solid`,children:n(e?`story.portal_btn_hide`:`story.portal_btn_show`)}),e&&(0,w.jsx)(g,{children:(0,w.jsxs)(y,{variant:`elevated`,padding:`lg`,style:{position:`fixed`,bottom:`40px`,right:`40px`,width:`280px`,maxWidth:`calc(100vw - 80px)`,zIndex:1e4,animation:`popUp 0.3s ease-out`},children:[(0,w.jsx)(`style`,{children:`
                                  @keyframes popUp {
                                      from { transform: translateY(20px); opacity: 0; }
                                      to { transform: translateY(0); opacity: 1; }
                                  }
                              `}),(0,w.jsxs)(_,{gap:`xs`,children:[(0,w.jsx)(`h4`,{style:{margin:`0 0 8px 0`,color:`var(--wim-color-text-accent)`},children:n(`story.portal_power_title`)}),(0,w.jsx)(`p`,{style:{margin:0,fontSize:`14px`,lineHeight:`1.5`},dangerouslySetInnerHTML:{__html:n(`story.portal_power_desc`)}}),(0,w.jsx)(h,{mt:`md`,style:{textAlign:`right`},children:(0,w.jsx)(b,{size:`sm`,onClick:()=>t(!1),children:n(`story.portal_btn_ok`)})})]})]})})]})})}},D={render:function(){let[e,t]=(0,C.useState)(null),{t:n}=i(c);return(0,w.jsxs)(u,{size:`md`,children:[(0,w.jsx)(`p`,{children:n(`story.portal_container_desc`)}),(0,w.jsxs)(p,{cols:{base:1,sm:2},spacing:`lg`,style:{marginTop:`24px`},children:[(0,w.jsxs)(y,{variant:`outline`,children:[(0,w.jsx)(y.Header,{children:(0,w.jsx)(`strong`,{children:n(`story.portal_source_title`)})}),(0,w.jsxs)(y.Body,{children:[(0,w.jsx)(`p`,{style:{fontSize:`12px`},children:n(`story.portal_source_desc`)}),(0,w.jsx)(h,{mt:`md`,style:{display:`flex`,justifyContent:`center`},children:(0,w.jsx)(g,{container:e,children:(0,w.jsx)(f,{intent:`success`,icon:(0,w.jsx)(v,{name:`CheckCircleIcon`}),style:{width:`fit-content`},children:n(`story.portal_sent_success`)})})})]})]}),(0,w.jsx)(h,{ref:t,bg:`var(--wim-color-surface-variant)`,style:{border:`2px dashed`,borderColor:`var(--wim-color-primary)`,minHeight:`150px`,display:`flex`,alignItems:`center`,justifyContent:`center`,borderRadius:`8px`},children:!e&&(0,w.jsx)(h,{style:{textAlign:`center`,color:`var(--wim-color-text-accent)`},children:n(`story.portal_loading`)})})]})]})}},O=({displayName:e,color:t,logContainer:n,addLog:r,t:i})=>{let[a,o]=(0,C.useState)(!1);return(0,w.jsx)(y,{variant:`outline`,padding:`sm`,children:(0,w.jsxs)(_,{gap:`xs`,children:[(0,w.jsx)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:(0,w.jsx)(`strong`,{children:e})}),(0,w.jsx)(b,{size:`sm`,variant:a?`outline`:`solid`,onClick:()=>{let t=!a;o(t),r(`${e}${i(t?`story.portal_log_started`:`story.portal_log_stopped`)}`,t?`success`:`warning`)},children:i(a?`story.portal_btn_stop`:`story.portal_btn_start`)}),a&&n&&(0,w.jsx)(g,{container:n,children:(0,w.jsxs)(`div`,{style:{padding:`8px 12px`,marginBottom:`8px`,borderRadius:`4px`,fontSize:`12px`,background:t,color:`var(--wim-color-text-primary)`,border:`1px solid var(--wim-color-border)`,animation:`slideIn 0.2s ease-out`},children:[(0,w.jsx)(`style`,{children:`@keyframes slideIn { from { opacity:0; transform:translateX(-10px); } to { opacity:1; transform:translateX(0); } }`}),(0,w.jsxs)(`strong`,{children:[`[`,e,`]`]}),` `,i(`story.portal_status_desc`)]})})]})})},k={parameters:{layout:`fullscreen`},render:function(){let[e,t]=(0,C.useState)(null),[n,r]=(0,C.useState)([]),{t:a}=i(c),o=(e,t=`info`)=>{let n=Math.random().toString(36).slice(2,9);r(r=>[{id:n,msg:e,type:t},...r].slice(0,10))};return(0,w.jsx)(h,{p:`xl`,children:(0,w.jsx)(u,{size:`xl`,children:(0,w.jsxs)(l,{cols:{base:1,md:`1fr 300px`},gap:`xl`,children:[(0,w.jsxs)(_,{gap:`md`,children:[(0,w.jsx)(`h4`,{children:a(`story.portal_panel_title`)}),(0,w.jsx)(`p`,{style:{fontSize:`14px`,color:`var(--wim-color-text-secondary)`},children:a(`story.portal_panel_desc`)}),(0,w.jsxs)(p,{cols:{base:1,sm:2},spacing:`md`,children:[(0,w.jsx)(O,{displayName:a(`story.portal_sensor_a`),color:`var(--wim-color-success-subtle)`,logContainer:e,addLog:o,t:a}),(0,w.jsx)(O,{displayName:a(`story.portal_sensor_b`),color:`var(--wim-color-info-subtle)`,logContainer:e,addLog:o,t:a}),(0,w.jsx)(O,{displayName:a(`story.portal_camera`),color:`var(--wim-color-warning-subtle)`,logContainer:e,addLog:o,t:a}),(0,w.jsx)(O,{displayName:a(`story.portal_alarm`),color:`var(--wim-color-danger-subtle)`,logContainer:e,addLog:o,t:a})]})]}),(0,w.jsx)(h,{"data-theme":`dark`,style:{minHeight:`400px`,display:`flex`,flexDirection:`column`},children:(0,w.jsxs)(y,{variant:`flat`,style:{flex:1,display:`flex`,flexDirection:`column`,background:`var(--wim-color-surface-app)`,color:`var(--wim-color-text-primary)`},children:[(0,w.jsx)(y.Header,{style:{borderBottom:`1px solid var(--wim-color-border)`,color:`var(--wim-color-text-secondary)`},children:(0,w.jsxs)(_,{direction:`row`,justify:`between`,align:`center`,children:[(0,w.jsx)(`span`,{style:{fontSize:`12px`,fontWeight:`bold`},children:a(`story.portal_monitor_title`)}),(0,w.jsx)(x,{intent:`danger`,size:`sm`,children:a(`story.portal_monitor_live`)})]})}),(0,w.jsxs)(y.Body,{style:{flex:1,overflowY:`auto`,padding:`12px`},children:[(0,w.jsx)(h,{ref:t,style:{marginBottom:`16px`,borderBottom:`1px solid var(--wim-color-border)`,paddingBottom:`16px`,minHeight:`20px`}}),(0,w.jsxs)(`div`,{style:{fontSize:`11px`,fontFamily:`monospace`},children:[(0,w.jsx)(`div`,{style:{color:`var(--wim-color-text-tertiary)`,marginBottom:`8px`},children:a(`story.portal_history_title`)}),n.map(e=>(0,w.jsx)(`div`,{style:{marginBottom:`4px`,color:e.type===`success`?`var(--wim-color-text-success)`:e.type===`warning`?`var(--wim-color-text-warning)`:`var(--wim-color-text-tertiary)`},children:`> ${e.msg}`},e.id)),n.length===0&&(0,w.jsx)(`div`,{style:{color:`var(--wim-color-text-secondary)`},children:a(`story.portal_waiting`)})]})]})]})})]})})})}},A={parameters:{layout:`fullscreen`},render:function(){let[e,t]=(0,C.useState)(null),[n,r]=(0,C.useState)(null),{t:a}=i(c),o=[{id:1,title:a(`story.portal_task1_title`),detail:a(`story.portal_task1_detail`)},{id:2,title:a(`story.portal_task2_title`),detail:a(`story.portal_task2_detail`)},{id:3,title:a(`story.portal_task3_title`),detail:a(`story.portal_task3_detail`)}],s=({task:e,isSelected:t,onSelect:n,container:r})=>{let[i,o]=(0,C.useState)(``);return(0,w.jsxs)(`div`,{role:`button`,tabIndex:0,onClick:()=>n(e.id),onKeyDown:t=>{(t.key===`Enter`||t.key===` `)&&n(e.id)},style:{padding:`16px`,border:`1px solid`,borderColor:t?`var(--wim-color-primary)`:`var(--wim-color-border)`,marginBottom:`12px`,cursor:`pointer`,background:t?`var(--wim-color-primary-subtle)`:`var(--wim-color-surface)`,borderRadius:`8px`,transition:`all 0.2s`},children:[(0,w.jsxs)(_,{direction:`row`,justify:`between`,align:`center`,children:[(0,w.jsx)(`strong`,{children:e.title}),(0,w.jsx)(v,{name:`ChevronRightIcon`,style:{color:t?`var(--wim-color-primary)`:`var(--wim-color-text-disabled)`}})]}),t&&(0,w.jsx)(g,{container:r,children:(0,w.jsxs)(`div`,{style:{animation:`fadeInUp 0.3s ease-out`},children:[(0,w.jsx)(`style`,{children:`@keyframes fadeInUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }`}),(0,w.jsx)(x,{content:`TASK-00${e.id}`,variant:`outline`,size:`sm`,style:{marginBottom:`12px`}}),(0,w.jsx)(`h3`,{style:{margin:`0 0 16px 0`},children:e.title}),(0,w.jsx)(y,{variant:`flat`,style:{background:`var(--wim-color-surface-variant)`,marginBottom:`20px`},children:(0,w.jsx)(`p`,{style:{margin:0,fontSize:`14px`,lineHeight:`1.6`,color:`var(--wim-color-text-primary)`},children:e.detail})}),(0,w.jsxs)(_,{direction:{base:`column`,sm:`column`,md:`column`,lg:`column`},gap:`xs`,children:[(0,w.jsx)(`label`,{style:{fontSize:`13px`,fontWeight:`bold`,color:`var(--wim-color-text-secondary)`},children:a(`story.portal_task_memo`)}),(0,w.jsx)(d,{value:i,onChange:e=>o(e.target.value),placeholder:a(`story.portal_memo_placeholder`),rows:5,fullWidth:!0}),(0,w.jsx)(`p`,{style:{fontSize:`11px`,color:`var(--wim-color-text-tertiary)`},children:a(`story.portal_memo_note`)})]})]})})]})};return(0,w.jsx)(u,{size:`xl`,className:`portal-side-container`,children:(0,w.jsxs)(y,{variant:`outline`,padding:`none`,className:`side-panel-card`,style:{overflow:`hidden`},children:[(0,w.jsx)(`style`,{children:`
            .portal-side-container { margin-top: 20px; margin-bottom: 20px; }
            .side-panel-card { height: auto; min-height: 550px; }
            @media (min-width: 576px) {
              .portal-side-container { height: calc(100vh - 40px); }
              .side-panel-card { height: 100%; border-radius: 12px; }
              .sidebar-border { border-right: 1px solid var(--wim-color-border); border-bottom: none !important; }
            }
            @media (max-width: 575px) {
              .sidebar-border { border-bottom: 1px solid var(--wim-color-border); border-right: none !important; }
            }
          `}),(0,w.jsxs)(_,{direction:{base:`column`,sm:`row`},gap:`none`,align:`stretch`,style:{height:`100%`,width:`100%`,flex:1},children:[(0,w.jsxs)(h,{w:{base:`100%`,sm:350},className:`sidebar-border`,style:{display:`flex`,flexDirection:`column`,background:`var(--wim-color-surface-variant)`,height:`100%`,flexShrink:0,overflowX:`hidden`},children:[(0,w.jsx)(h,{p:`md`,style:{borderBottom:`1px solid var(--wim-color-border)`},children:(0,w.jsx)(`h4`,{style:{margin:0},children:a(`story.portal_task_mgmt`)})}),(0,w.jsx)(h,{p:`md`,style:{flex:1,overflowY:`auto`,overflowX:`hidden`},children:o.map(t=>(0,w.jsx)(s,{task:t,isSelected:n===t.id,onSelect:r,container:e},t.id))})]}),(0,w.jsxs)(h,{style:{flex:1,display:`flex`,flexDirection:`column`,minWidth:0},children:[(0,w.jsxs)(h,{p:`md`,bg:`var(--wim-color-surface-variant)`,style:{borderBottom:`1px solid var(--wim-color-border)`,display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:[(0,w.jsx)(`span`,{style:{fontSize:`14px`,fontWeight:`bold`,color:`var(--wim-color-text-secondary)`},children:a(`story.portal_preview_title`)}),n&&(0,w.jsx)(b,{size:`sm`,variant:`outline`,onClick:()=>r(null),children:a(`story.visuallyhidden_close`)})]}),(0,w.jsx)(h,{ref:t,p:`xl`,display:`flex`,style:{flex:1,flexDirection:`column`,overflowY:`auto`,position:`relative`,minHeight:`400px`},children:!n&&(0,w.jsxs)(_,{direction:`row`,align:`center`,justify:`center`,gap:`xs`,style:{flex:1,minHeight:`100%`,color:`var(--wim-color-text-tertiary)`},children:[(0,w.jsx)(v,{name:`InfoCircleIcon`,style:{width:`20px`,height:`20px`,opacity:.8}}),(0,w.jsx)(`p`,{style:{margin:0},children:a(`story.portal_select_task`)})]})})]})]})]})})}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [show, setShow] = useState(false);
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Card variant="outline" padding="lg" style={{
      width: "100%",
      maxWidth: "400px",
      height: "250px",
      padding: "32px",
      position: "relative",
      overflow: "hidden"
    }}>
        <Card.Body style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}>
          <div style={{
          textAlign: "center",
          marginBottom: "16px"
        }}>
            <p dangerouslySetInnerHTML={{
            __html: t("story.portal_desc_overflow")
          }} />
            <p>{t("story.portal_desc_escape")}</p>
          </div>

          <Button onClick={() => setShow(!show)} variant="solid">{show ? t("story.portal_btn_hide") : t("story.portal_btn_show")}</Button>

          {show && <Portal>
              <Card variant="elevated" padding="lg" style={{
            position: "fixed",
            bottom: "40px",
            right: "40px",
            width: "280px",
            maxWidth: "calc(100vw - 80px)",
            zIndex: 10000,
            animation: "popUp 0.3s ease-out"
          }}>
                <style>{\`
                                  @keyframes popUp {
                                      from { transform: translateY(20px); opacity: 0; }
                                      to { transform: translateY(0); opacity: 1; }
                                  }
                              \`}</style>
                <Stack gap="xs">
                  <h4 style={{
                margin: "0 0 8px 0",
                color: "var(--wim-color-text-accent)"
              }}>
                    {t("story.portal_power_title")}
                  </h4>
                  <p style={{
                margin: 0,
                fontSize: "14px",
                lineHeight: "1.5"
              }} dangerouslySetInnerHTML={{
                __html: t("story.portal_power_desc")
              }} />
                  <Box mt="md" style={{
                textAlign: "right"
              }}>
                    <Button size="sm" onClick={() => setShow(false)}>{t("story.portal_btn_ok")}</Button>
                  </Box>
                </Stack>
              </Card>
            </Portal>}
        </Card.Body>
      </Card>;
  }
}`,...E.parameters?.docs?.source},description:{story:`overflow: hidden な親要素を突き抜ける例`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [container, setContainer] = useState<HTMLElement | null>(null);
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Container size="md">
        <p>{t("story.portal_container_desc")}</p>

        <SimpleGrid cols={{
        base: 1,
        sm: 2
      }} spacing="lg" style={{
        marginTop: "24px"
      }}>
          <Card variant="outline">
            <Card.Header>
              <strong>{t("story.portal_source_title")}</strong>
            </Card.Header>
            <Card.Body>
              <p style={{
              fontSize: "12px"
            }}>
                {t("story.portal_source_desc")}
              </p>
              <Box mt="md" style={{
              display: "flex",
              justifyContent: "center"
            }}>
                <Portal container={container}>
                  <Alert intent="success" icon={<Icon name="CheckCircleIcon" />} style={{
                  width: "fit-content"
                }}>
                    {t("story.portal_sent_success")}
                  </Alert>
                </Portal>
              </Box>
            </Card.Body>
          </Card>

          <Box ref={setContainer} bg="var(--wim-color-surface-variant)" style={{
          border: "2px dashed",
          borderColor: "var(--wim-color-primary)",
          minHeight: "150px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "8px"
        }}>
            {/* ここに Portal の 中身が表示される */}
            {!container && <Box style={{
            textAlign: "center",
            color: "var(--wim-color-text-accent)"
          }}>
                {t("story.portal_loading")}
              </Box>}
          </Box>
        </SimpleGrid>
      </Container>;
  }
}`,...D.parameters?.docs?.source},description:{story:`特定の DOM 要素へのレンダリング例`,...D.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  render: function Render() {
    const [logContainer, setLogContainer] = useState<HTMLElement | null>(null);
    const [logs, setLogs] = useState<{
      id: string;
      msg: string;
      type: string;
    }[]>([]);
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const addLog = (msg: string, type: string = "info") => {
      const id = Math.random().toString(36).slice(2, 9);
      setLogs(prev => [{
        id,
        msg,
        type
      }, ...prev].slice(0, 10));
    };
    return <Box p="xl">
        <Container size="xl">
          <Grid cols={{
          base: 1,
          md: "1fr 300px"
        }} gap="xl">
          <Stack gap="md">
            <h4>{t("story.portal_panel_title")}</h4>
            <p style={{
              fontSize: "14px",
              color: "var(--wim-color-text-secondary)"
            }}>
              {t("story.portal_panel_desc")}
            </p>
            <SimpleGrid cols={{
              base: 1,
              sm: 2
            }} spacing="md">
              <SenderComponent displayName={t("story.portal_sensor_a")} color="var(--wim-color-success-subtle)" logContainer={logContainer} addLog={addLog} t={t} />
              <SenderComponent displayName={t("story.portal_sensor_b")} color="var(--wim-color-info-subtle)" logContainer={logContainer} addLog={addLog} t={t} />
              <SenderComponent displayName={t("story.portal_camera")} color="var(--wim-color-warning-subtle)" logContainer={logContainer} addLog={addLog} t={t} />
              <SenderComponent displayName={t("story.portal_alarm")} color="var(--wim-color-danger-subtle)" logContainer={logContainer} addLog={addLog} t={t} />
            </SimpleGrid>
          </Stack>

          <Box data-theme="dark" style={{
            minHeight: "400px",
            display: "flex",
            flexDirection: "column"
          }}>
            <Card variant="flat" style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              background: "var(--wim-color-surface-app)",
              color: "var(--wim-color-text-primary)"
            }}>
            <Card.Header style={{
                borderBottom: "1px solid var(--wim-color-border)",
                color: "var(--wim-color-text-secondary)"
              }}>
              <Stack direction="row" justify="between" align="center">
                <span style={{
                    fontSize: "12px",
                    fontWeight: "bold"
                  }}>
                  {t("story.portal_monitor_title")}
                </span>
                <Badge intent="danger" size="sm">{t("story.portal_monitor_live")}</Badge>
              </Stack>
            </Card.Header>
            <Card.Body style={{
                flex: 1,
                overflowY: "auto",
                padding: "12px"
              }}>
              <Box ref={setLogContainer} style={{
                  marginBottom: "16px",
                  borderBottom: "1px solid var(--wim-color-border)",
                  paddingBottom: "16px",
                  minHeight: "20px"
                }}>
                {/* ここに Portal からの「稼働中メッセージ」が表示される */}
              </Box>
              <div style={{
                  fontSize: "11px",
                  fontFamily: "monospace"
                }}>
                <div style={{
                    color: "var(--wim-color-text-tertiary)",
                    marginBottom: "8px"
                  }}>
                  {t("story.portal_history_title")}
                </div>
                {logs.map(log => <div key={log.id} style={{
                    marginBottom: "4px",
                    color: log.type === "success" ? "var(--wim-color-text-success)" : log.type === "warning" ? "var(--wim-color-text-warning)" : "var(--wim-color-text-tertiary)"
                  }}>
                    {\`> \${log.msg}\`}
                  </div>)}
                {logs.length === 0 && <div style={{
                    color: "var(--wim-color-text-secondary)"
                  }}>{t("story.portal_waiting")}</div>}
              </div>
            </Card.Body>
            </Card>
          </Box>
        </Grid>
      </Container>
      </Box>;
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  render: function Render() {
    const [panelContainer, setPanelContainer] = useState<HTMLElement | null>(null);
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const tasks = [{
      id: 1,
      title: t("story.portal_task1_title"),
      detail: t("story.portal_task1_detail")
    }, {
      id: 2,
      title: t("story.portal_task2_title"),
      detail: t("story.portal_task2_detail")
    }, {
      id: 3,
      title: t("story.portal_task3_title"),
      detail: t("story.portal_task3_detail")
    }];
    const TaskItem = ({
      task,
      isSelected,
      onSelect,
      container
    }: {
      task: {
        id: number;
        title: string;
        detail: string;
      };
      isSelected: boolean;
      onSelect: (id: number) => void;
      container: HTMLElement | null;
    }) => {
      const [note, setNote] = useState("");
      return <div role="button" tabIndex={0} onClick={() => onSelect(task.id)} onKeyDown={e => {
        if (e.key === "Enter" || e.key === " ") onSelect(task.id);
      }} style={{
        padding: "16px",
        border: "1px solid",
        borderColor: isSelected ? "var(--wim-color-primary)" : "var(--wim-color-border)",
        marginBottom: "12px",
        cursor: "pointer",
        background: isSelected ? "var(--wim-color-primary-subtle)" : "var(--wim-color-surface)",
        borderRadius: "8px",
        transition: "all 0.2s"
      }}>
          <Stack direction="row" justify="between" align="center">
            <strong>{task.title}</strong>
            <Icon name="ChevronRightIcon" style={{
            color: isSelected ? "var(--wim-color-primary)" : "var(--wim-color-text-disabled)"
          }} />
          </Stack>

          {isSelected && <Portal container={container}>
              <div style={{
            animation: "fadeInUp 0.3s ease-out"
          }}>
                <style>{\`@keyframes fadeInUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }\`}</style>
                <Badge content={\`TASK-00\${task.id}\`} variant="outline" size="sm" style={{
              marginBottom: "12px"
            }} />
                <h3 style={{
              margin: "0 0 16px 0"
            }}>{task.title}</h3>

                <Card variant="flat" style={{
              background: "var(--wim-color-surface-variant)",
              marginBottom: "20px"
            }}>
                  <p style={{
                margin: 0,
                fontSize: "14px",
                lineHeight: "1.6",
                color: "var(--wim-color-text-primary)"
              }}>
                    {task.detail}
                  </p>
                </Card>

                <Stack direction={{
              base: "column",
              sm: "column",
              md: "column",
              lg: "column"
            }} gap="xs">
                  <label style={{
                fontSize: "13px",
                fontWeight: "bold",
                color: "var(--wim-color-text-secondary)"
              }}>
                    {t("story.portal_task_memo")}
                  </label>
                  <Textarea value={note} onChange={e => setNote(e.target.value)} placeholder={t("story.portal_memo_placeholder")} rows={5} fullWidth />
                  <p style={{
                fontSize: "11px",
                color: "var(--wim-color-text-tertiary)"
              }}>
                    {t("story.portal_memo_note")}
                  </p>
                </Stack>
              </div>
            </Portal>}
        </div>;
    };
    return <Container size="xl" className="portal-side-container">
        <Card variant="outline" padding="none" className="side-panel-card" style={{
        overflow: "hidden"
      }}>
          <style>{\`
            .portal-side-container { margin-top: 20px; margin-bottom: 20px; }
            .side-panel-card { height: auto; min-height: 550px; }
            @media (min-width: 576px) {
              .portal-side-container { height: calc(100vh - 40px); }
              .side-panel-card { height: 100%; border-radius: 12px; }
              .sidebar-border { border-right: 1px solid var(--wim-color-border); border-bottom: none !important; }
            }
            @media (max-width: 575px) {
              .sidebar-border { border-bottom: 1px solid var(--wim-color-border); border-right: none !important; }
            }
          \`}</style>
          <Stack direction={{
          base: "column",
          sm: "row"
        }} gap="none" align="stretch" style={{
          height: "100%",
          width: "100%",
          flex: 1
        }}>
            {/* Sidebar */}
            <Box w={{
            base: "100%",
            sm: 350
          }} className="sidebar-border" style={{
            display: "flex",
            flexDirection: "column",
            background: "var(--wim-color-surface-variant)",
            height: "100%",
            flexShrink: 0,
            overflowX: "hidden"
          }}>
              <Box p="md" style={{
              borderBottom: "1px solid var(--wim-color-border)"
            }}>
                <h4 style={{
                margin: 0
              }}>{t("story.portal_task_mgmt")}</h4>
              </Box>
              <Box p="md" style={{
              flex: 1,
              overflowY: "auto",
              overflowX: "hidden"
            }}>
                {tasks.map(task => <TaskItem key={task.id} task={task} isSelected={selectedId === task.id} onSelect={setSelectedId} container={panelContainer} />)}
              </Box>
            </Box>

            {/* Content Area */}
            <Box style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            minWidth: 0
          }}>
              <Box p="md" bg="var(--wim-color-surface-variant)" style={{
              borderBottom: "1px solid var(--wim-color-border)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}>
                <span style={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "var(--wim-color-text-secondary)"
              }}>
                  {t("story.portal_preview_title")}
                </span>
                {selectedId && <Button size="sm" variant="outline" onClick={() => setSelectedId(null)}>{t("story.visuallyhidden_close")}</Button>}
              </Box>
              <Box ref={setPanelContainer} p="xl" display="flex" style={{
              flex: 1,
              flexDirection: "column",
              overflowY: "auto",
              position: "relative",
              minHeight: "400px"
            }}>
                {!selectedId && <Stack direction="row" align="center" justify="center" gap="xs" style={{
                flex: 1,
                minHeight: "100%",
                color: "var(--wim-color-text-tertiary)"
              }}>
                    <Icon name="InfoCircleIcon" style={{
                  width: "20px",
                  height: "20px",
                  opacity: 0.8
                }} />
                    <p style={{
                  margin: 0
                }}>{t("story.portal_select_task")}</p>
                  </Stack>}
              </Box>
            </Box>
          </Stack>
        </Card>
      </Container>;
  }
}`,...A.parameters?.docs?.source},description:{story:`具体的なユースケース 2: サイドパネル詳細表示
複雑なリストアイテムにおいて、UI的な制約で「詳細は画面端のパネルに出したい」が
「ロジックや状態はアイテム自身に持たせたい」という場合に Portal が役立ちます。`,...A.parameters?.docs?.description}}},j=[`OverflowEscape`,`CustomContainer`,`NotificationCenter`,`SidePanelDetail`]}));M();export{D as CustomContainer,k as NotificationCenter,E as OverflowEscape,A as SidePanelDetail,j as __namedExportsOrder,T as default,M as n,S as t};