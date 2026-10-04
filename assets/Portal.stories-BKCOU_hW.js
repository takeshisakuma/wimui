"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./useTranslation-BDKsuBAo.js";import{n as o,t as s}from"./i18nConstants-BhvmnjLS.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{n as l,t as u}from"./Box-lSx-_C-t.js";import{n as d,t as f}from"./Container-DJnhfdv_.js";import{n as p,t as m}from"./Grid-B8FTnlHA.js";import{n as h,t as g}from"./Portal-BCsViLJs.js";import{n as _,t as v}from"./SimpleGrid-Du8DkF1O.js";import{n as y,t as b}from"./Stack-D0pTsuU-.js";import{n as x,t as S}from"./Icon-B_89lpXW.js";import{n as C,t as w}from"./Card-BX8yw3HV.js";import{n as T,t as E}from"./Button-DrO46Brn.js";import{n as D,t as O}from"./Badge-CfPEoJgu.js";import{n as k,t as A}from"./Textarea-DCy4SxIv.js";import{n as j,t as M}from"./Alert-BcdQOn0S.js";var N=n({CustomContainer:()=>R,NotificationCenter:()=>B,OverflowEscape:()=>L,SidePanelDetail:()=>V,__namedExportsOrder:()=>H,default:()=>I}),P,F,I,L,R,z,B,V,H;function U(){return(U=t((()=>{P=e(r(),1),a(),o(),j(),D(),l(),T(),C(),d(),p(),x(),h(),_(),y(),k(),F=c(),I={title:`Components/Internal/Portal`,component:g,parameters:{layout:`centered`},tags:[]},L={render:function(){let[e,t]=(0,P.useState)(!1),{t:n}=i(s);return(0,F.jsx)(w,{variant:`outline`,padding:`lg`,style:{width:`100%`,maxWidth:`400px`,height:`250px`,padding:`32px`,position:`relative`,overflow:`hidden`},children:(0,F.jsxs)(w.Body,{style:{height:`100%`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`},children:[(0,F.jsxs)(`div`,{style:{textAlign:`center`,marginBottom:`16px`},children:[(0,F.jsx)(`p`,{dangerouslySetInnerHTML:{__html:n(`story.portal_desc_overflow`)}}),(0,F.jsx)(`p`,{children:n(`story.portal_desc_escape`)})]}),(0,F.jsx)(E,{onClick:()=>t(!e),variant:`solid`,children:n(e?`story.portal_btn_hide`:`story.portal_btn_show`)}),e&&(0,F.jsx)(g,{children:(0,F.jsxs)(w,{variant:`elevated`,padding:`lg`,style:{position:`fixed`,bottom:`40px`,right:`40px`,width:`280px`,maxWidth:`calc(100vw - 80px)`,zIndex:1e4,animation:`popUp 0.3s ease-out`},children:[(0,F.jsx)(`style`,{children:`
                                  @keyframes popUp {
                                      from { transform: translateY(20px); opacity: 0; }
                                      to { transform: translateY(0); opacity: 1; }
                                  }
                              `}),(0,F.jsxs)(b,{gap:`xs`,children:[(0,F.jsx)(`h4`,{style:{margin:`0 0 8px 0`,color:`var(--wim-color-text-accent)`},children:n(`story.portal_power_title`)}),(0,F.jsx)(`p`,{style:{margin:0,fontSize:`14px`,lineHeight:`1.5`},dangerouslySetInnerHTML:{__html:n(`story.portal_power_desc`)}}),(0,F.jsx)(u,{mt:`md`,style:{textAlign:`right`},children:(0,F.jsx)(E,{size:`sm`,onClick:()=>t(!1),children:n(`story.portal_btn_ok`)})})]})]})})]})})}},R={render:function(){let[e,t]=(0,P.useState)(null),{t:n}=i(s);return(0,F.jsxs)(f,{size:`md`,children:[(0,F.jsx)(`p`,{children:n(`story.portal_container_desc`)}),(0,F.jsxs)(v,{cols:{base:1,sm:2},spacing:`lg`,style:{marginTop:`24px`},children:[(0,F.jsxs)(w,{variant:`outline`,children:[(0,F.jsx)(w.Header,{children:(0,F.jsx)(`strong`,{children:n(`story.portal_source_title`)})}),(0,F.jsxs)(w.Body,{children:[(0,F.jsx)(`p`,{style:{fontSize:`12px`},children:n(`story.portal_source_desc`)}),(0,F.jsx)(u,{mt:`md`,style:{display:`flex`,justifyContent:`center`},children:(0,F.jsx)(g,{container:e,children:(0,F.jsx)(M,{intent:`success`,icon:(0,F.jsx)(S,{name:`CheckCircleIcon`}),style:{width:`fit-content`},children:n(`story.portal_sent_success`)})})})]})]}),(0,F.jsx)(u,{ref:t,bg:`var(--wim-color-surface-variant)`,style:{border:`2px dashed`,borderColor:`var(--wim-color-primary)`,minHeight:`150px`,display:`flex`,alignItems:`center`,justifyContent:`center`,borderRadius:`8px`},children:!e&&(0,F.jsx)(u,{style:{textAlign:`center`,color:`var(--wim-color-text-accent)`},children:n(`story.portal_loading`)})})]})]})}},z=({displayName:e,color:t,logContainer:n,addLog:r,t:i})=>{let[a,o]=(0,P.useState)(!1);return(0,F.jsx)(w,{variant:`outline`,padding:`sm`,children:(0,F.jsxs)(b,{gap:`xs`,children:[(0,F.jsx)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:(0,F.jsx)(`strong`,{children:e})}),(0,F.jsx)(E,{size:`sm`,variant:a?`outline`:`solid`,onClick:()=>{let t=!a;o(t),r(`${e}${i(t?`story.portal_log_started`:`story.portal_log_stopped`)}`,t?`success`:`warning`)},children:i(a?`story.portal_btn_stop`:`story.portal_btn_start`)}),a&&n&&(0,F.jsx)(g,{container:n,children:(0,F.jsxs)(`div`,{style:{padding:`8px 12px`,marginBottom:`8px`,borderRadius:`4px`,fontSize:`12px`,background:t,color:`var(--wim-color-text-primary)`,border:`1px solid var(--wim-color-border)`,animation:`slideIn 0.2s ease-out`},children:[(0,F.jsx)(`style`,{children:`@keyframes slideIn { from { opacity:0; transform:translateX(-10px); } to { opacity:1; transform:translateX(0); } }`}),(0,F.jsxs)(`strong`,{children:[`[`,e,`]`]}),` `,i(`story.portal_status_desc`)]})})]})})},B={parameters:{layout:`fullscreen`},render:function(){let[e,t]=(0,P.useState)(null),[n,r]=(0,P.useState)([]),{t:a}=i(s),o=(e,t=`info`)=>{let n=Math.random().toString(36).slice(2,9);r(r=>[{id:n,msg:e,type:t},...r].slice(0,10))};return(0,F.jsx)(u,{p:`xl`,children:(0,F.jsx)(f,{size:`xl`,children:(0,F.jsxs)(m,{cols:{base:1,md:`1fr 300px`},gap:`xl`,children:[(0,F.jsxs)(b,{gap:`md`,children:[(0,F.jsx)(`h4`,{children:a(`story.portal_panel_title`)}),(0,F.jsx)(`p`,{style:{fontSize:`14px`,color:`var(--wim-color-text-secondary)`},children:a(`story.portal_panel_desc`)}),(0,F.jsxs)(v,{cols:{base:1,sm:2},spacing:`md`,children:[(0,F.jsx)(z,{displayName:a(`story.portal_sensor_a`),color:`var(--wim-color-success-subtle)`,logContainer:e,addLog:o,t:a}),(0,F.jsx)(z,{displayName:a(`story.portal_sensor_b`),color:`var(--wim-color-info-subtle)`,logContainer:e,addLog:o,t:a}),(0,F.jsx)(z,{displayName:a(`story.portal_camera`),color:`var(--wim-color-warning-subtle)`,logContainer:e,addLog:o,t:a}),(0,F.jsx)(z,{displayName:a(`story.portal_alarm`),color:`var(--wim-color-danger-subtle)`,logContainer:e,addLog:o,t:a})]})]}),(0,F.jsx)(u,{"data-theme":`dark`,style:{minHeight:`400px`,display:`flex`,flexDirection:`column`},children:(0,F.jsxs)(w,{variant:`flat`,style:{flex:1,display:`flex`,flexDirection:`column`,background:`var(--wim-color-surface-app)`,color:`var(--wim-color-text-primary)`},children:[(0,F.jsx)(w.Header,{style:{borderBottom:`1px solid var(--wim-color-border)`,color:`var(--wim-color-text-secondary)`},children:(0,F.jsxs)(b,{direction:`row`,justify:`between`,align:`center`,children:[(0,F.jsx)(`span`,{style:{fontSize:`12px`,fontWeight:`bold`},children:a(`story.portal_monitor_title`)}),(0,F.jsx)(O,{intent:`danger`,size:`sm`,children:a(`story.portal_monitor_live`)})]})}),(0,F.jsxs)(w.Body,{style:{flex:1,overflowY:`auto`,padding:`12px`},children:[(0,F.jsx)(u,{ref:t,style:{marginBottom:`16px`,borderBottom:`1px solid var(--wim-color-border)`,paddingBottom:`16px`,minHeight:`20px`}}),(0,F.jsxs)(`div`,{style:{fontSize:`11px`,fontFamily:`monospace`},children:[(0,F.jsx)(`div`,{style:{color:`var(--wim-color-text-tertiary)`,marginBottom:`8px`},children:a(`story.portal_history_title`)}),n.map(e=>(0,F.jsx)(`div`,{style:{marginBottom:`4px`,color:e.type===`success`?`var(--wim-color-text-success)`:e.type===`warning`?`var(--wim-color-text-warning)`:`var(--wim-color-text-tertiary)`},children:`> ${e.msg}`},e.id)),n.length===0&&(0,F.jsx)(`div`,{style:{color:`var(--wim-color-text-secondary)`},children:a(`story.portal_waiting`)})]})]})]})})]})})})}},V={parameters:{layout:`fullscreen`},render:function(){let[e,t]=(0,P.useState)(null),[n,r]=(0,P.useState)(null),{t:a}=i(s),o=[{id:1,title:a(`story.portal_task1_title`),detail:a(`story.portal_task1_detail`)},{id:2,title:a(`story.portal_task2_title`),detail:a(`story.portal_task2_detail`)},{id:3,title:a(`story.portal_task3_title`),detail:a(`story.portal_task3_detail`)}],c=({task:e,isSelected:t,onSelect:n,container:r})=>{let[i,o]=(0,P.useState)(``);return(0,F.jsxs)(`div`,{role:`button`,tabIndex:0,onClick:()=>n(e.id),onKeyDown:t=>{(t.key===`Enter`||t.key===` `)&&n(e.id)},style:{padding:`16px`,border:`1px solid`,borderColor:t?`var(--wim-color-primary)`:`var(--wim-color-border)`,marginBottom:`12px`,cursor:`pointer`,background:t?`var(--wim-color-primary-subtle)`:`var(--wim-color-surface)`,borderRadius:`8px`,transition:`all 0.2s`},children:[(0,F.jsxs)(b,{direction:`row`,justify:`between`,align:`center`,children:[(0,F.jsx)(`strong`,{children:e.title}),(0,F.jsx)(S,{name:`ChevronRightIcon`,style:{color:t?`var(--wim-color-primary)`:`var(--wim-color-text-disabled)`}})]}),t&&(0,F.jsx)(g,{container:r,children:(0,F.jsxs)(`div`,{style:{animation:`fadeInUp 0.3s ease-out`},children:[(0,F.jsx)(`style`,{children:`@keyframes fadeInUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }`}),(0,F.jsx)(O,{content:`TASK-00${e.id}`,variant:`outline`,size:`sm`,style:{marginBottom:`12px`}}),(0,F.jsx)(`h3`,{style:{margin:`0 0 16px 0`},children:e.title}),(0,F.jsx)(w,{variant:`flat`,style:{background:`var(--wim-color-surface-variant)`,marginBottom:`20px`},children:(0,F.jsx)(`p`,{style:{margin:0,fontSize:`14px`,lineHeight:`1.6`,color:`var(--wim-color-text-primary)`},children:e.detail})}),(0,F.jsxs)(b,{direction:{base:`column`,sm:`column`,md:`column`,lg:`column`},gap:`xs`,children:[(0,F.jsx)(`label`,{style:{fontSize:`13px`,fontWeight:`bold`,color:`var(--wim-color-text-secondary)`},children:a(`story.portal_task_memo`)}),(0,F.jsx)(A,{value:i,onChange:e=>o(e.target.value),placeholder:a(`story.portal_memo_placeholder`),rows:5,fullWidth:!0}),(0,F.jsx)(`p`,{style:{fontSize:`11px`,color:`var(--wim-color-text-tertiary)`},children:a(`story.portal_memo_note`)})]})]})})]})};return(0,F.jsx)(f,{size:`xl`,className:`portal-side-container`,children:(0,F.jsxs)(w,{variant:`outline`,padding:`none`,className:`side-panel-card`,style:{overflow:`hidden`},children:[(0,F.jsx)(`style`,{children:`
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
          `}),(0,F.jsxs)(b,{direction:{base:`column`,sm:`row`},gap:`none`,align:`stretch`,style:{height:`100%`,width:`100%`,flex:1},children:[(0,F.jsxs)(u,{w:{base:`100%`,sm:350},className:`sidebar-border`,style:{display:`flex`,flexDirection:`column`,background:`var(--wim-color-surface-variant)`,height:`100%`,flexShrink:0,overflowX:`hidden`},children:[(0,F.jsx)(u,{p:`md`,style:{borderBottom:`1px solid var(--wim-color-border)`},children:(0,F.jsx)(`h4`,{style:{margin:0},children:a(`story.portal_task_mgmt`)})}),(0,F.jsx)(u,{p:`md`,style:{flex:1,overflowY:`auto`,overflowX:`hidden`},children:o.map(t=>(0,F.jsx)(c,{task:t,isSelected:n===t.id,onSelect:r,container:e},t.id))})]}),(0,F.jsxs)(u,{style:{flex:1,display:`flex`,flexDirection:`column`,minWidth:0},children:[(0,F.jsxs)(u,{p:`md`,bg:`var(--wim-color-surface-variant)`,style:{borderBottom:`1px solid var(--wim-color-border)`,display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:[(0,F.jsx)(`span`,{style:{fontSize:`14px`,fontWeight:`bold`,color:`var(--wim-color-text-secondary)`},children:a(`story.portal_preview_title`)}),n&&(0,F.jsx)(E,{size:`sm`,variant:`outline`,onClick:()=>r(null),children:a(`story.visuallyhidden_close`)})]}),(0,F.jsx)(u,{ref:t,p:`xl`,display:`flex`,style:{flex:1,flexDirection:`column`,overflowY:`auto`,position:`relative`,minHeight:`400px`},children:!n&&(0,F.jsxs)(b,{direction:`row`,align:`center`,justify:`center`,gap:`xs`,style:{flex:1,minHeight:`100%`,color:`var(--wim-color-text-tertiary)`},children:[(0,F.jsx)(S,{name:`InfoCircleIcon`,style:{width:`20px`,height:`20px`,opacity:.8}}),(0,F.jsx)(`p`,{style:{margin:0},children:a(`story.portal_select_task`)})]})})]})]})]})})}},H=[`OverflowEscape`,`CustomContainer`,`NotificationCenter`,`SidePanelDetail`],L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source},description:{story:`overflow: hidden な親要素を突き抜ける例`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source},description:{story:`特定の DOM 要素へのレンダリング例`,...R.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source},description:{story:`具体的なユースケース 2: サイドパネル詳細表示
複雑なリストアイテムにおいて、UI的な制約で「詳細は画面端のパネルに出したい」が
「ロジックや状態はアイテム自身に持たせたい」という場合に Portal が役立ちます。`,...V.parameters?.docs?.description}}}})))()}export{V as a,N as i,B as n,U as o,L as r,R as t};