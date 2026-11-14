"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-sJBDdmOt.js";import{t as r}from"./react-BGJ90fIb.js";import{n as i,t as a}from"./useTranslation-CpMdOj2B.js";import{n as o,t as s}from"./i18nConstants-DbPgW6Wr.js";import{t as c}from"./jsx-runtime-MKhVqBIO.js";import{n as l,t as u}from"./Stack-SbfzwNKR.js";import{n as d,t as f}from"./Icon-DordwWay.js";import{n as p,t as m}from"./Button-Drq-Mw-h.js";import{n as h,t as g}from"./Text-D9yqbrao.js";import{n as _,t as v}from"./PromptInput-C3MYyziJ.js";import{n as y,t as b}from"./AIResponseFeedback-CE_rP4QS.js";import{a as x,c as S,i as C,l as w,n as T,o as E,r as D,s as O,t as k}from"./ChatUI-CNM2X86b.js";import{n as A,t as j}from"./StreamingText-C0C41GpD.js";var M=n({AiAssistantIntegration:()=>q,AvatarSizes:()=>G,AvatarTones:()=>K,Basic:()=>R,Interactive:()=>H,NoAvatars:()=>W,ToolCallStates:()=>Z,ToolCalls:()=>X,WithActions:()=>z,WithAvatarImages:()=>B,WithIcons:()=>U,WithVariants:()=>V,__namedExportsOrder:()=>Q,default:()=>L});function N(){let{t:e}=i(s);return typeof window<`u`&&window.__VRT__?(e,t)=>e===`story.chat_ai_response`?`Thanks for asking about "${t?.message??``}". Here is a concise answer.`:e===`chat.attachment_prefix`?`Attached: ${t?.fileName??`file`}`:I[e]??e:e}var P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=t((()=>{P=e(r(),1),a(),o(),w(),_(),d(),y(),p(),l(),h(),A(),F=c(),I={"story.chat_msg_1":`Hello! How can I help you today?`,"story.chat_msg_2":`I need help with my account.`,"story.chat_msg_3":`Sure - what seems to be the problem?`,"story.chat_msg_4":`I cannot reset my password.`,"story.chat_msg_5":`Default message style`,"story.chat_msg_6":`Primary message style`,"story.chat_msg_7":`Secondary message style`,"story.chat_msg_12":`Custom avatar with an icon`,"story.chat_msg_14":`Messages without avatars`,"story.chat_msg_15":`Still readable and compact`,"story.chat_support":`Support`,"story.chat_you":`You`,"story.chat_ai_assistant":`Assistant`,"story.chat_ai_greeting":`Hi - ask me anything about the product.`,"story.chat_placeholder_ai":`Message the assistant...`,"story.chatui_action_good":`Good response`,"story.chatui_action_bad":`Bad response`,"chat.placeholder":`Type a message...`,"chat.placeholder_interactive":`Type a message...`,"action.copy":`Copy`,"story.chat_tool_started":`Conversation started · Thu 13 Nov`,"story.chat_tool_user_1":`Can you move my dentist appointment? Thursday doesn't work anymore.`,"story.chat_tool_summary_found":`1 upcoming`,"story.chat_tool_summary_slots":`3 open slots`,"story.chat_tool_reply_1":`Your cleaning with Dr. Okafor is Thursday at 9:30. The clinic has Tuesday 16:40 or Wednesday 8:15 open next week. Should I take Tuesday?`,"story.chat_tool_user_2":`Tuesday, yes.`,"story.chat_tool_failed":`The clinic's booking system didn't answer. Your Thursday appointment is unchanged.`,"story.chat_tool_retry":`Try again`,"story.chat_tool_model_changed":`Switched to a smaller model for this conversation`,"story.chat_tool_context_warning":`Older messages will be left out of the model's context soon`,"story.chat_tool_booked":`Booked: Tuesday 16:40 with Dr. Okafor. Thursday is cancelled.`},L={title:`Components/AI/ChatUI`,component:T,parameters:{layout:`fullscreen`}},R={render:()=>{let e=N();return(0,F.jsx)(`div`,{style:{height:`400px`},children:(0,F.jsxs)(T,{children:[(0,F.jsxs)(E,{children:[(0,F.jsx)(x,{position:`left`,children:e(`story.chat_msg_1`)}),(0,F.jsx)(x,{position:`right`,children:e(`story.chat_msg_2`)})]}),(0,F.jsx)(D,{placeholder:e(`chat.placeholder`)})]})})}},z={render:()=>{let e=N(),t=(0,F.jsx)(b,{showRegenerate:!0});return(0,F.jsx)(`div`,{style:{height:`400px`},children:(0,F.jsxs)(T,{children:[(0,F.jsxs)(E,{children:[(0,F.jsx)(x,{position:`left`,showAvatar:!0,avatar:(0,F.jsx)(k,{fallback:`A`,tone:`s5`}),senderName:e(`story.chat_ai_assistant`),actions:t,children:e(`story.chat_msg_1`)}),(0,F.jsx)(x,{position:`left`,showAvatar:!0,avatar:(0,F.jsx)(k,{fallback:`A`,tone:`s5`}),senderName:e(`story.chat_ai_assistant`),actions:t,actionsVisible:!1,children:e(`story.chat_msg_3`)})]}),(0,F.jsx)(D,{placeholder:e(`chat.placeholder`)})]})})}},B={render:()=>{let e=N();return(0,F.jsx)(`div`,{style:{height:`400px`},children:(0,F.jsxs)(T,{children:[(0,F.jsxs)(E,{children:[(0,F.jsx)(x,{position:`left`,showAvatar:!0,avatar:(0,F.jsx)(k,{fallback:`S`,tone:`s5`}),senderName:e(`story.chat_support`),children:e(`story.chat_msg_3`)}),(0,F.jsx)(x,{position:`right`,showAvatar:!0,avatar:(0,F.jsx)(k,{fallback:`Y`,tone:`s18`}),senderName:e(`story.chat_you`),children:e(`story.chat_msg_4`)})]}),(0,F.jsx)(D,{placeholder:e(`chat.placeholder`)})]})})}},V={render:()=>{let e=N();return(0,F.jsx)(`div`,{style:{height:`400px`},children:(0,F.jsxs)(T,{children:[(0,F.jsxs)(E,{children:[(0,F.jsx)(x,{variant:`default`,children:e(`story.chat_msg_5`)}),(0,F.jsx)(x,{variant:`sent`,position:`right`,children:e(`story.chat_msg_6`)}),(0,F.jsx)(x,{variant:`received`,position:`left`,children:e(`story.chat_msg_7`)})]}),(0,F.jsx)(D,{placeholder:e(`chat.placeholder`)})]})})}},H={render:()=>{let e=N(),[t,n]=(0,P.useState)([{id:`1`,text:e(`story.chat_msg_1`),position:`left`,sender:e(`story.chat_support`),timestamp:`10:00 AM`}]),r=(0,P.useRef)(null),i=(0,P.useRef)(null);return(0,P.useEffect)(()=>{i.current&&(i.current.scrollTop=i.current.scrollHeight)},[t]),(0,F.jsxs)(`div`,{style:{height:`100vh`},children:[(0,F.jsx)(`input`,{type:`file`,ref:r,style:{display:`none`},onChange:t=>{let r=t.target.files?.[0];if(r){let t=new Date().toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`});n(n=>[...n,{id:Date.now().toString(),text:e(`chat.attachment_prefix`,{fileName:r.name}),position:`right`,sender:e(`story.chat_you`),timestamp:t,variant:`received`}])}}}),(0,F.jsxs)(T,{children:[(0,F.jsx)(E,{ref:i,children:t.map(e=>(0,F.jsx)(x,{position:e.position,variant:e.variant,senderName:e.sender,timestamp:e.timestamp,showAvatar:!0,avatar:(0,F.jsx)(k,{fallback:e.sender?.charAt(0),tone:e.position===`left`?`s5`:`s18`}),children:e.text},e.id))}),(0,F.jsx)(D,{placeholder:e(`chat.placeholder_interactive`),onSend:t=>{if(!t.trim())return;let r=new Date().toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`});n(n=>[...n,{id:Date.now().toString(),text:t,position:`right`,sender:e(`story.chat_you`),timestamp:r}])},showAttach:!0,onAttach:()=>r.current?.click()})]})]})}},U={render:()=>{let e=N();return(0,F.jsx)(`div`,{style:{height:`400px`},children:(0,F.jsxs)(T,{children:[(0,F.jsx)(E,{children:(0,F.jsx)(x,{position:`left`,showAvatar:!0,avatar:(0,F.jsx)(`div`,{style:{width:40,height:40,borderRadius:`50%`,backgroundColor:`var(--wim-color-primary)`,display:`flex`,alignItems:`center`,justifyContent:`center`,color:`var(--wim-color-text-on-primary)`},children:(0,F.jsx)(f,{name:`UserIcon`,size:`sm`})}),children:e(`story.chat_msg_12`)})}),(0,F.jsx)(D,{placeholder:e(`chat.placeholder`)})]})})}},W={render:()=>{let e=N();return(0,F.jsx)(`div`,{style:{height:`400px`},children:(0,F.jsxs)(T,{children:[(0,F.jsxs)(E,{children:[(0,F.jsx)(x,{position:`left`,showAvatar:!1,children:e(`story.chat_msg_14`)}),(0,F.jsx)(x,{position:`right`,showAvatar:!1,children:e(`story.chat_msg_15`)})]}),(0,F.jsx)(D,{placeholder:e(`chat.placeholder`)})]})})}},G={render:()=>(0,F.jsxs)(`div`,{style:{display:`flex`,gap:`24px`,padding:`24px`},children:[(0,F.jsx)(k,{size:`sm`,fallback:`S`}),(0,F.jsx)(k,{size:`md`,fallback:`M`}),(0,F.jsx)(k,{size:`lg`,fallback:`L`})]})},K={render:()=>(0,F.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`var(--wim-spacing-md)`,padding:`var(--wim-spacing-xl)`},children:[`s1`,`s3`,`s5`,`s7`,`s10`,`s12`,`s14`,`s16`,`s18`,`s20`,`s22`,`s24`].map((e,t)=>(0,F.jsx)(k,{tone:e,fallback:String.fromCharCode(65+t)},e))})},q={render:()=>{let e=N(),[t,n]=(0,P.useState)([{id:`1`,text:e(`story.chat_ai_greeting`),position:`left`,sender:e(`story.chat_ai_assistant`),timestamp:`12:00 PM`}]),[r,i]=(0,P.useState)(!1),a=(0,P.useRef)(null),o=(0,P.useRef)(null),s=t=>{if(!t.trim())return;let r=new Date().toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`});n(n=>[...n,{id:Date.now().toString(),text:t,position:`right`,sender:e(`story.chat_you`),timestamp:r}]),i(!0),typeof window<`u`&&window.__VRT__?i(!1):setTimeout(()=>{i(!1);let r=(Date.now()+2).toString(),a=e(`story.chat_ai_response`,{message:t});n(t=>[...t,{id:r,text:``,position:`left`,sender:e(`story.chat_ai_assistant`),timestamp:new Date().toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`}),isStreaming:!0}]);let o=``,s=a.split(` `),c=0,l=setInterval(()=>{c<s.length?(o+=(c===0?``:` `)+s[c],n(e=>e.map(e=>e.id===r?{...e,text:o}:e)),c++):(clearInterval(l),n(e=>e.map(e=>e.id===r?{...e,isStreaming:!1}:e)))},50)},1e3)},c=t=>{let r=t.target.files?.[0];if(r){let t=new Date().toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`});n(n=>[...n,{id:Date.now().toString(),text:e(`chat.attachment_prefix`,{fileName:r.name}),position:`right`,sender:e(`story.chat_you`),timestamp:t,variant:`received`}])}};(0,P.useEffect)(()=>{o.current&&(o.current.scrollTop=o.current.scrollHeight)},[t,r]);let l=()=>(0,F.jsxs)(`div`,{style:{display:`flex`,gap:`4px`},children:[(0,F.jsx)(`button`,{style:{border:`none`,background:`transparent`,cursor:`pointer`,fontSize:`14px`,color:`var(--wim-color-text-tertiary)`},title:e(`action.copy`),children:(0,F.jsx)(f,{name:`CopyIcon`,size:`sm`})}),(0,F.jsx)(`button`,{style:{border:`none`,background:`transparent`,cursor:`pointer`,fontSize:`14px`,color:`var(--wim-color-text-tertiary)`},title:e(`story.chatui_action_good`),children:(0,F.jsx)(f,{name:`ThumbUpIcon`,size:`sm`})}),(0,F.jsx)(`button`,{style:{border:`none`,background:`transparent`,cursor:`pointer`,fontSize:`14px`,color:`var(--wim-color-text-tertiary)`},title:e(`story.chatui_action_bad`),children:(0,F.jsx)(f,{name:`ThumbDownIcon`,size:`sm`})})]});return(0,F.jsxs)(`div`,{style:{height:`100vh`},children:[(0,F.jsx)(`input`,{type:`file`,ref:a,style:{display:`none`},onChange:c}),(0,F.jsxs)(T,{children:[(0,F.jsxs)(E,{ref:o,children:[t.map(e=>(0,F.jsx)(x,{position:e.position,variant:e.variant,senderName:e.sender,timestamp:e.timestamp,showAvatar:!0,isTyping:e.id===`loading`,avatar:e.position===`left`?(0,F.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,width:40,height:40,borderRadius:`50%`,backgroundColor:`var(--wim-color-primary)`,color:`var(--wim-color-text-on-primary)`},children:(0,F.jsx)(f,{name:`StarIcon`,size:`sm`})}):(0,F.jsx)(k,{fallback:`Y`,tone:`s18`}),actions:e.position===`left`&&!e.isStreaming&&e.id!==`1`?(0,F.jsx)(l,{}):void 0,children:e.position===`left`&&e.id!==`1`?(0,F.jsx)(j,{content:e.text,isStreaming:e.isStreaming}):e.text},e.id)),r&&(0,F.jsx)(x,{position:`left`,senderName:e(`story.chat_ai_assistant`),showAvatar:!0,isTyping:!0,avatar:(0,F.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,width:40,height:40,borderRadius:`50%`,backgroundColor:`var(--wim-color-primary)`,color:`var(--wim-color-text-on-primary)`},children:(0,F.jsx)(f,{name:`StarIcon`,size:`sm`})})})]}),(0,F.jsx)(C,{children:(0,F.jsx)(v,{placeholder:e(`story.chat_placeholder_ai`),onSubmit:s,loading:r,showAttach:!0,onAttach:()=>a.current?.click(),style:{flex:1,minWidth:0}})})]})]})}},J=`{
  "clinic": "harbourview-dental",
  "after": "2026-11-17",
  "duration_min": 40
}`,Y=`[
  { "start": "2026-11-18T16:40", "dentist": "Okafor" },
  { "start": "2026-11-19T08:15", "dentist": "Okafor" },
  { "start": "2026-11-21T11:00", "dentist": "Lindqvist" }
]`,X={render:function(){let e=N(),[t,n]=(0,P.useState)(`error`);return(0,F.jsx)(`div`,{style:{height:`720px`},children:(0,F.jsxs)(T,{children:[(0,F.jsxs)(E,{children:[(0,F.jsx)(O,{children:e(`story.chat_tool_started`)}),(0,F.jsx)(x,{position:`right`,timestamp:`09:12`,children:e(`story.chat_tool_user_1`)}),(0,F.jsx)(x,{position:`left`,senderName:e(`story.chat_ai_assistant`),timestamp:`09:12`,metadata:`1,284 tokens · 3.1s`,children:(0,F.jsxs)(u,{gap:`md`,children:[(0,F.jsxs)(u,{gap:`xs`,children:[(0,F.jsx)(S,{name:`list_appointments`,summary:e(`story.chat_tool_summary_found`),input:`{ "from": "2026-11-13" }`}),(0,F.jsx)(S,{name:`search_open_slots`,summary:e(`story.chat_tool_summary_slots`),input:J,output:Y})]}),(0,F.jsx)(g,{children:e(`story.chat_tool_reply_1`)})]})}),(0,F.jsx)(x,{position:`right`,timestamp:`09:14`,children:e(`story.chat_tool_user_2`)}),(0,F.jsx)(x,{position:`left`,senderName:e(`story.chat_ai_assistant`),timestamp:`09:14`,children:(0,F.jsxs)(u,{gap:`md`,children:[(0,F.jsx)(S,{name:`book_slot`,status:t,input:`{ "start": "2026-11-18T16:40", "replaces": "apt_88213" }`,output:t===`error`?`503 Service Unavailable (after 30s)`:void 0}),t===`done`&&(0,F.jsx)(g,{children:e(`story.chat_tool_booked`)})]})}),t===`error`&&(0,F.jsx)(O,{intent:`danger`,action:(0,F.jsx)(m,{size:`sm`,variant:`outline`,onClick:()=>{n(`running`),setTimeout(()=>n(`done`),1200)},children:e(`story.chat_tool_retry`)}),children:e(`story.chat_tool_failed`)})]}),(0,F.jsx)(D,{placeholder:e(`chat.placeholder`)})]})})}},Z={render:function(){let e=N();return(0,F.jsx)(`div`,{style:{height:`520px`},children:(0,F.jsx)(T,{children:(0,F.jsxs)(E,{children:[(0,F.jsx)(O,{children:e(`story.chat_tool_model_changed`)}),(0,F.jsx)(O,{intent:`warning`,children:e(`story.chat_tool_context_warning`)}),(0,F.jsx)(O,{intent:`danger`,children:e(`story.chat_tool_failed`)}),(0,F.jsx)(x,{position:`left`,senderName:e(`story.chat_ai_assistant`),children:(0,F.jsxs)(u,{gap:`xs`,children:[(0,F.jsx)(S,{name:`book_slot`,status:`waiting`}),(0,F.jsx)(S,{name:`search_open_slots`,status:`running`}),(0,F.jsx)(S,{name:`list_appointments`,status:`done`,summary:e(`story.chat_tool_summary_found`)}),(0,F.jsx)(S,{name:`book_slot`,status:`error`,output:`503 Service Unavailable`,defaultExpanded:!0})]})})]})})})}},Q=[`Basic`,`WithActions`,`WithAvatarImages`,`WithVariants`,`Interactive`,`WithIcons`,`NoAvatars`,`AvatarSizes`,`AvatarTones`,`AiAssistantIntegration`,`ToolCalls`,`ToolCallStates`],R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => {
    const t = useChatT();
    return <div style={{
      height: "400px"
    }}>
        <ChatContainer>
          <ChatMessageList>
            <ChatMessage position="left">{t("story.chat_msg_1")}</ChatMessage>
            <ChatMessage position="right">{t("story.chat_msg_2")}</ChatMessage>
          </ChatMessageList>
          <ChatInput placeholder={t("chat.placeholder")} />
        </ChatContainer>
      </div>;
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const t = useChatT();
    const feedback = <AIResponseFeedback showRegenerate />;
    return <div style={{
      height: "400px"
    }}>
        <ChatContainer>
          <ChatMessageList>
            <ChatMessage position="left" showAvatar avatar={<ChatAvatar fallback="A" tone="s5" />} senderName={t("story.chat_ai_assistant")} actions={feedback}>
              {t("story.chat_msg_1")}
            </ChatMessage>
            <ChatMessage position="left" showAvatar avatar={<ChatAvatar fallback="A" tone="s5" />} senderName={t("story.chat_ai_assistant")} actions={feedback} actionsVisible={false}>
              {t("story.chat_msg_3")}
            </ChatMessage>
          </ChatMessageList>
          <ChatInput placeholder={t("chat.placeholder")} />
        </ChatContainer>
      </div>;
  }
}`,...z.parameters?.docs?.source},description:{story:`返答へのフィードバック操作。**この形は 2026-08-03 まで 1 枚も撮られていなかった** —
\`actions\` を描くのは \`AiAssistantIntegration\` だけで、そちらは初期メッセージが
1 件しか無く条件に合わないため、アクションが写ったスクリーンショットが存在せず、
「ホバーしないと出ない」不具合が VRT にも a11y にも載っていなかった（T62）。

上のメッセージは既定（**常時表示**）、下は \`actionsVisible={false}\` でホバーに隠した形。
既定を常時表示へ倒したのは T70 — ホバーで出すと、マウスの利用者は「返答を評価できる」
ことを**指すまで知れない**（ツールチップもホバーを待つので発見可能性を上げない）。
タッチ端末では \`@media (hover: none)\` により、隠した側も最初から見える。`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => {
    const t = useChatT();
    return <div style={{
      height: "400px"
    }}>
        <ChatContainer>
          <ChatMessageList>
            <ChatMessage position="left" showAvatar avatar={<ChatAvatar fallback="S" tone="s5" />} senderName={t("story.chat_support")}>
              {t("story.chat_msg_3")}
            </ChatMessage>
            <ChatMessage position="right" showAvatar avatar={<ChatAvatar fallback="Y" tone="s18" />} senderName={t("story.chat_you")}>
              {t("story.chat_msg_4")}
            </ChatMessage>
          </ChatMessageList>
          <ChatInput placeholder={t("chat.placeholder")} />
        </ChatContainer>
      </div>;
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => {
    const t = useChatT();
    return <div style={{
      height: "400px"
    }}>
        <ChatContainer>
          <ChatMessageList>
            <ChatMessage variant="default">{t("story.chat_msg_5")}</ChatMessage>
            <ChatMessage variant="sent" position="right">{t("story.chat_msg_6")}</ChatMessage>
            <ChatMessage variant="received" position="left">{t("story.chat_msg_7")}</ChatMessage>
          </ChatMessageList>
          <ChatInput placeholder={t("chat.placeholder")} />
        </ChatContainer>
      </div>;
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => {
    const t = useChatT();
    const [messages, setMessages] = useState<Message[]>([{
      id: "1",
      text: t("story.chat_msg_1"),
      position: "left",
      sender: t("story.chat_support"),
      timestamp: "10:00 AM"
    }]);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const messageListRef = useRef<HTMLDivElement>(null);
    const handleSend = (text: string) => {
      if (!text.trim()) return;
      const timestamp = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      });
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        text,
        position: "right",
        sender: t("story.chat_you"),
        timestamp
      }]);
    };
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        const timestamp = new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit"
        });
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          text: t("chat.attachment_prefix", {
            fileName: file.name
          }),
          position: "right",
          sender: t("story.chat_you"),
          timestamp,
          variant: "received"
        }]);
      }
    };
    useEffect(() => {
      if (messageListRef.current) {
        messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
      }
    }, [messages]);
    return <div style={{
      height: "100vh"
    }}>
        <input type="file" ref={fileInputRef} style={{
        display: "none"
      }} onChange={handleFileChange} />
        <ChatContainer>
          <ChatMessageList ref={messageListRef}>
            {messages.map(msg => <ChatMessage key={msg.id} position={msg.position} variant={msg.variant} senderName={msg.sender} timestamp={msg.timestamp} showAvatar avatar={<ChatAvatar fallback={msg.sender?.charAt(0)} tone={msg.position === "left" ? "s5" : "s18"} />}>
                {msg.text}
              </ChatMessage>)}
          </ChatMessageList>
          <ChatInput placeholder={t("chat.placeholder_interactive")} onSend={handleSend} showAttach onAttach={() => fileInputRef.current?.click()} />
        </ChatContainer>
      </div>;
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => {
    const t = useChatT();
    return <div style={{
      height: "400px"
    }}>
        <ChatContainer>
          <ChatMessageList>
            <ChatMessage position="left" showAvatar avatar={<div style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            backgroundColor: "var(--wim-color-primary)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--wim-color-text-on-primary)"
          }}><Icon name="UserIcon" size="sm" /></div>}>
              {t("story.chat_msg_12")}
            </ChatMessage>
          </ChatMessageList>
          <ChatInput placeholder={t("chat.placeholder")} />
        </ChatContainer>
      </div>;
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => {
    const t = useChatT();
    return <div style={{
      height: "400px"
    }}>
        <ChatContainer>
          <ChatMessageList>
            <ChatMessage position="left" showAvatar={false}>{t("story.chat_msg_14")}</ChatMessage>
            <ChatMessage position="right" showAvatar={false}>{t("story.chat_msg_15")}</ChatMessage>
          </ChatMessageList>
          <ChatInput placeholder={t("chat.placeholder")} />
        </ChatContainer>
      </div>;
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      display: "flex",
      gap: "24px",
      padding: "24px"
    }}>
        <ChatAvatar size="sm" fallback="S" />
        <ChatAvatar size="md" fallback="M" />
        <ChatAvatar size="lg" fallback="L" />
      </div>;
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "var(--wim-spacing-md)",
    padding: "var(--wim-spacing-xl)"
  }}>
      {(["s1", "s3", "s5", "s7", "s10", "s12", "s14", "s16", "s18", "s20", "s22", "s24"] as const).map((tone, i) => <ChatAvatar key={tone} tone={tone} fallback={String.fromCharCode(65 + i)} />)}
    </div>
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => {
    const t = useChatT();
    const [messages, setMessages] = useState<Message[]>([{
      id: "1",
      text: t("story.chat_ai_greeting"),
      position: "left",
      sender: t("story.chat_ai_assistant"),
      timestamp: "12:00 PM"
    }]);
    const [isLoading, setIsLoading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const messageListRef = useRef<HTMLDivElement>(null);
    const handleSend = (text: string) => {
      if (!text.trim()) return;
      const timestamp = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      });
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        text,
        position: "right",
        sender: t("story.chat_you"),
        timestamp
      }]);
      setIsLoading(true);

      // @ts-expect-error: __VRT__ is a custom global flag for testing
      if (typeof window !== "undefined" && window.__VRT__) {
        setIsLoading(false);
        return;
      }

      // Simulate AI response with streaming
      setTimeout(() => {
        setIsLoading(false);
        const aiMessageId = (Date.now() + 2).toString();
        const fullText = t("story.chat_ai_response", {
          message: text
        });
        setMessages(prev => [...prev, {
          id: aiMessageId,
          text: "",
          position: "left",
          sender: t("story.chat_ai_assistant"),
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
          }),
          isStreaming: true
        }]);
        let currentText = "";
        const words = fullText.split(" ");
        let i = 0;
        const interval = setInterval(() => {
          if (i < words.length) {
            currentText += (i === 0 ? "" : " ") + words[i];
            setMessages(prev => prev.map(m => m.id === aiMessageId ? {
              ...m,
              text: currentText
            } : m));
            i++;
          } else {
            clearInterval(interval);
            setMessages(prev => prev.map(m => m.id === aiMessageId ? {
              ...m,
              isStreaming: false
            } : m));
          }
        }, 50);
      }, 1000);
    };
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        const timestamp = new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit"
        });
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          text: t("chat.attachment_prefix", {
            fileName: file.name
          }),
          position: "right",
          sender: t("story.chat_you"),
          timestamp,
          variant: "received"
        }]);
      }
    };
    useEffect(() => {
      if (messageListRef.current) {
        messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
      }
    }, [messages, isLoading]);
    const MessageActions = () => <div style={{
      display: "flex",
      gap: "4px"
    }}>
        <button style={{
        border: "none",
        background: "transparent",
        cursor: "pointer",
        fontSize: "14px",
        color: "var(--wim-color-text-tertiary)"
      }} title={t("action.copy")}><Icon name="CopyIcon" size="sm" /></button>
        <button style={{
        border: "none",
        background: "transparent",
        cursor: "pointer",
        fontSize: "14px",
        color: "var(--wim-color-text-tertiary)"
      }} title={t("story.chatui_action_good")}><Icon name="ThumbUpIcon" size="sm" /></button>
        <button style={{
        border: "none",
        background: "transparent",
        cursor: "pointer",
        fontSize: "14px",
        color: "var(--wim-color-text-tertiary)"
      }} title={t("story.chatui_action_bad")}><Icon name="ThumbDownIcon" size="sm" /></button>
      </div>;
    return <div style={{
      height: "100vh"
    }}>
        <input type="file" ref={fileInputRef} style={{
        display: "none"
      }} onChange={handleFileChange} />
        <ChatContainer>
          <ChatMessageList ref={messageListRef}>
            {messages.map(msg => <ChatMessage key={msg.id} position={msg.position} variant={msg.variant} senderName={msg.sender} timestamp={msg.timestamp} showAvatar isTyping={msg.id === "loading"} avatar={msg.position === "left" ? <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 40,
            height: 40,
            borderRadius: "50%",
            backgroundColor: "var(--wim-color-primary)",
            color: "var(--wim-color-text-on-primary)"
          }}>
                      <Icon name="StarIcon" size="sm" />
                    </div> : <ChatAvatar fallback="Y" tone="s18" />} actions={msg.position === "left" && !msg.isStreaming && msg.id !== "1" ? <MessageActions /> : undefined}>
                {msg.position === "left" && msg.id !== "1" ? <StreamingText content={msg.text} isStreaming={msg.isStreaming} /> : msg.text}
              </ChatMessage>)}
            {isLoading && <ChatMessage position="left" senderName={t("story.chat_ai_assistant")} showAvatar isTyping avatar={<div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 40,
            height: 40,
            borderRadius: "50%",
            backgroundColor: "var(--wim-color-primary)",
            color: "var(--wim-color-text-on-primary)"
          }}><Icon name="StarIcon" size="sm" /></div>} />}
          </ChatMessageList>
          <ChatInputArea>
            <PromptInput placeholder={t("story.chat_placeholder_ai")} onSubmit={handleSend} loading={isLoading} showAttach onAttach={() => fileInputRef.current?.click()} style={{
            flex: 1,
            minWidth: 0
          }} />
          </ChatInputArea>
        </ChatContainer>
      </div>;
  }
}`,...q.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const t = useChatT();
    const [booking, setBooking] = useState<"error" | "running" | "done">("error");
    const retry = () => {
      setBooking("running");
      setTimeout(() => setBooking("done"), 1200);
    };
    return <div style={{
      height: "720px"
    }}>
        <ChatContainer>
          <ChatMessageList>
            <ChatSystemMessage>{t("story.chat_tool_started")}</ChatSystemMessage>
            <ChatMessage position="right" timestamp="09:12">
              {t("story.chat_tool_user_1")}
            </ChatMessage>
            <ChatMessage position="left" senderName={t("story.chat_ai_assistant")} timestamp="09:12" metadata="1,284 tokens · 3.1s">
              <Stack gap="md">
                <Stack gap="xs">
                  <ChatToolCall name="list_appointments" summary={t("story.chat_tool_summary_found")} input={\`{ "from": "2026-11-13" }\`} />
                  <ChatToolCall name="search_open_slots" summary={t("story.chat_tool_summary_slots")} input={SLOT_QUERY} output={SLOT_RESULT} />
                </Stack>
                <Text>{t("story.chat_tool_reply_1")}</Text>
              </Stack>
            </ChatMessage>
            <ChatMessage position="right" timestamp="09:14">
              {t("story.chat_tool_user_2")}
            </ChatMessage>
            <ChatMessage position="left" senderName={t("story.chat_ai_assistant")} timestamp="09:14">
              <Stack gap="md">
                <ChatToolCall name="book_slot" status={booking} input={\`{ "start": "2026-11-18T16:40", "replaces": "apt_88213" }\`} output={booking === "error" ? "503 Service Unavailable (after 30s)" : undefined} />
                {booking === "done" && <Text>{t("story.chat_tool_booked")}</Text>}
              </Stack>
            </ChatMessage>
            {booking === "error" && <ChatSystemMessage intent="danger" action={<Button size="sm" variant="outline" onClick={retry}>
                    {t("story.chat_tool_retry")}
                  </Button>}>
                {t("story.chat_tool_failed")}
              </ChatSystemMessage>}
          </ChatMessageList>
          <ChatInput placeholder={t("chat.placeholder")} />
        </ChatContainer>
      </div>;
  }
}`,...X.parameters?.docs?.source},description:{story:`ツールの呼び出し・システムメッセージ・メタデータ（T363）。予約の変更を頼んで、
医院の予約システムが応答しなかったところ。「もう一度試す」を押すと呼び出しが
実行中になり、終わると返事が出る（画面の操作だけで、見えている状態に着く）。`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const t = useChatT();
    return <div style={{
      height: "520px"
    }}>
        <ChatContainer>
          <ChatMessageList>
            <ChatSystemMessage>{t("story.chat_tool_model_changed")}</ChatSystemMessage>
            <ChatSystemMessage intent="warning">{t("story.chat_tool_context_warning")}</ChatSystemMessage>
            <ChatSystemMessage intent="danger">{t("story.chat_tool_failed")}</ChatSystemMessage>
            <ChatMessage position="left" senderName={t("story.chat_ai_assistant")}>
              <Stack gap="xs">
                <ChatToolCall name="book_slot" status="waiting" />
                <ChatToolCall name="search_open_slots" status="running" />
                <ChatToolCall name="list_appointments" status="done" summary={t("story.chat_tool_summary_found")} />
                <ChatToolCall name="book_slot" status="error" output="503 Service Unavailable" defaultExpanded />
              </Stack>
            </ChatMessage>
          </ChatMessageList>
        </ChatContainer>
      </div>;
  }
}`,...Z.parameters?.docs?.source},description:{story:`状態の一覧（VRT と a11y に、どの値も写すためのストーリー）。ツールの呼び出しの 4 状態と、
システムメッセージの 3 つの intent。`,...Z.parameters?.docs?.description}}}})))()}export{H as a,X as c,V as d,$ as f,M as i,B as l,K as n,W as o,R as r,Z as s,G as t,U as u};