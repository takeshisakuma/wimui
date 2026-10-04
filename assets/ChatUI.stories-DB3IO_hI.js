"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./useTranslation-BDKsuBAo.js";import{n as o,t as s}from"./i18nConstants-BhvmnjLS.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{n as l,t as u}from"./Icon-B_89lpXW.js";import{n as d,t as f}from"./PromptInput-hU8vmY8F.js";import{n as p,t as m}from"./AIResponseFeedback-DwdxEQuR.js";import{a as h,i as g,n as _,o as v,r as y,s as b,t as x}from"./ChatUI-CIenbD5C.js";import{n as S,t as C}from"./StreamingText-344Lw-jj.js";var w=n({AiAssistantIntegration:()=>z,AvatarSizes:()=>L,AvatarTones:()=>R,Basic:()=>A,Interactive:()=>P,NoAvatars:()=>I,WithActions:()=>j,WithAvatarImages:()=>M,WithIcons:()=>F,WithVariants:()=>N,__namedExportsOrder:()=>B,default:()=>k});function T(){let{t:e}=i(s);return typeof window<`u`&&window.__VRT__?(e,t)=>e===`story.chat_ai_response`?`Thanks for asking about "${t?.message??``}". Here is a concise answer.`:e===`chat.attachment_prefix`?`Attached: ${t?.fileName??`file`}`:O[e]??e:e}var E,D,O,k,A,j,M,N,P,F,I,L,R,z,B;function V(){return(V=t((()=>{E=e(r(),1),a(),o(),b(),d(),l(),p(),S(),D=c(),O={"story.chat_msg_1":`Hello! How can I help you today?`,"story.chat_msg_2":`I need help with my account.`,"story.chat_msg_3":`Sure - what seems to be the problem?`,"story.chat_msg_4":`I cannot reset my password.`,"story.chat_msg_5":`Default message style`,"story.chat_msg_6":`Primary message style`,"story.chat_msg_7":`Secondary message style`,"story.chat_msg_12":`Custom avatar with an icon`,"story.chat_msg_14":`Messages without avatars`,"story.chat_msg_15":`Still readable and compact`,"story.chat_support":`Support`,"story.chat_you":`You`,"story.chat_ai_assistant":`Assistant`,"story.chat_ai_greeting":`Hi - ask me anything about the product.`,"story.chat_placeholder_ai":`Message the assistant...`,"story.chatui_action_good":`Good response`,"story.chatui_action_bad":`Bad response`,"chat.placeholder":`Type a message...`,"chat.placeholder_interactive":`Type a message...`,"action.copy":`Copy`},k={title:`Components/AI/ChatUI`,component:_,parameters:{layout:`fullscreen`}},A={render:()=>{let e=T();return(0,D.jsx)(`div`,{style:{height:`400px`},children:(0,D.jsxs)(_,{children:[(0,D.jsxs)(v,{children:[(0,D.jsx)(h,{position:`left`,children:e(`story.chat_msg_1`)}),(0,D.jsx)(h,{position:`right`,children:e(`story.chat_msg_2`)})]}),(0,D.jsx)(y,{placeholder:e(`chat.placeholder`)})]})})}},j={render:()=>{let e=T(),t=(0,D.jsx)(m,{showRegenerate:!0});return(0,D.jsx)(`div`,{style:{height:`400px`},children:(0,D.jsxs)(_,{children:[(0,D.jsxs)(v,{children:[(0,D.jsx)(h,{position:`left`,showAvatar:!0,avatar:(0,D.jsx)(x,{fallback:`A`,tone:`s5`}),senderName:e(`story.chat_ai_assistant`),actions:t,children:e(`story.chat_msg_1`)}),(0,D.jsx)(h,{position:`left`,showAvatar:!0,avatar:(0,D.jsx)(x,{fallback:`A`,tone:`s5`}),senderName:e(`story.chat_ai_assistant`),actions:t,actionsVisible:!1,children:e(`story.chat_msg_3`)})]}),(0,D.jsx)(y,{placeholder:e(`chat.placeholder`)})]})})}},M={render:()=>{let e=T();return(0,D.jsx)(`div`,{style:{height:`400px`},children:(0,D.jsxs)(_,{children:[(0,D.jsxs)(v,{children:[(0,D.jsx)(h,{position:`left`,showAvatar:!0,avatar:(0,D.jsx)(x,{fallback:`S`,tone:`s5`}),senderName:e(`story.chat_support`),children:e(`story.chat_msg_3`)}),(0,D.jsx)(h,{position:`right`,showAvatar:!0,avatar:(0,D.jsx)(x,{fallback:`Y`,tone:`s18`}),senderName:e(`story.chat_you`),children:e(`story.chat_msg_4`)})]}),(0,D.jsx)(y,{placeholder:e(`chat.placeholder`)})]})})}},N={render:()=>{let e=T();return(0,D.jsx)(`div`,{style:{height:`400px`},children:(0,D.jsxs)(_,{children:[(0,D.jsxs)(v,{children:[(0,D.jsx)(h,{variant:`default`,children:e(`story.chat_msg_5`)}),(0,D.jsx)(h,{variant:`sent`,position:`right`,children:e(`story.chat_msg_6`)}),(0,D.jsx)(h,{variant:`received`,position:`left`,children:e(`story.chat_msg_7`)})]}),(0,D.jsx)(y,{placeholder:e(`chat.placeholder`)})]})})}},P={render:()=>{let e=T(),[t,n]=(0,E.useState)([{id:`1`,text:e(`story.chat_msg_1`),position:`left`,sender:e(`story.chat_support`),timestamp:`10:00 AM`}]),r=(0,E.useRef)(null),i=(0,E.useRef)(null);return(0,E.useEffect)(()=>{i.current&&(i.current.scrollTop=i.current.scrollHeight)},[t]),(0,D.jsxs)(`div`,{style:{height:`100vh`},children:[(0,D.jsx)(`input`,{type:`file`,ref:r,style:{display:`none`},onChange:t=>{let r=t.target.files?.[0];if(r){let t=new Date().toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`});n(n=>[...n,{id:Date.now().toString(),text:e(`chat.attachment_prefix`,{fileName:r.name}),position:`right`,sender:e(`story.chat_you`),timestamp:t,variant:`received`}])}}}),(0,D.jsxs)(_,{children:[(0,D.jsx)(v,{ref:i,children:t.map(e=>(0,D.jsx)(h,{position:e.position,variant:e.variant,senderName:e.sender,timestamp:e.timestamp,showAvatar:!0,avatar:(0,D.jsx)(x,{fallback:e.sender?.charAt(0),tone:e.position===`left`?`s5`:`s18`}),children:e.text},e.id))}),(0,D.jsx)(y,{placeholder:e(`chat.placeholder_interactive`),onSend:t=>{if(!t.trim())return;let r=new Date().toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`});n(n=>[...n,{id:Date.now().toString(),text:t,position:`right`,sender:e(`story.chat_you`),timestamp:r}])},showAttach:!0,onAttach:()=>r.current?.click()})]})]})}},F={render:()=>{let e=T();return(0,D.jsx)(`div`,{style:{height:`400px`},children:(0,D.jsxs)(_,{children:[(0,D.jsx)(v,{children:(0,D.jsx)(h,{position:`left`,showAvatar:!0,avatar:(0,D.jsx)(`div`,{style:{width:40,height:40,borderRadius:`50%`,backgroundColor:`var(--wim-color-primary)`,display:`flex`,alignItems:`center`,justifyContent:`center`,color:`var(--wim-color-text-on-primary)`},children:(0,D.jsx)(u,{name:`UserIcon`,size:`sm`})}),children:e(`story.chat_msg_12`)})}),(0,D.jsx)(y,{placeholder:e(`chat.placeholder`)})]})})}},I={render:()=>{let e=T();return(0,D.jsx)(`div`,{style:{height:`400px`},children:(0,D.jsxs)(_,{children:[(0,D.jsxs)(v,{children:[(0,D.jsx)(h,{position:`left`,showAvatar:!1,children:e(`story.chat_msg_14`)}),(0,D.jsx)(h,{position:`right`,showAvatar:!1,children:e(`story.chat_msg_15`)})]}),(0,D.jsx)(y,{placeholder:e(`chat.placeholder`)})]})})}},L={render:()=>(0,D.jsxs)(`div`,{style:{display:`flex`,gap:`24px`,padding:`24px`},children:[(0,D.jsx)(x,{size:`sm`,fallback:`S`}),(0,D.jsx)(x,{size:`md`,fallback:`M`}),(0,D.jsx)(x,{size:`lg`,fallback:`L`})]})},R={render:()=>(0,D.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`var(--wim-spacing-md)`,padding:`var(--wim-spacing-xl)`},children:[`s1`,`s3`,`s5`,`s7`,`s10`,`s12`,`s14`,`s16`,`s18`,`s20`,`s22`,`s24`].map((e,t)=>(0,D.jsx)(x,{tone:e,fallback:String.fromCharCode(65+t)},e))})},z={render:()=>{let e=T(),[t,n]=(0,E.useState)([{id:`1`,text:e(`story.chat_ai_greeting`),position:`left`,sender:e(`story.chat_ai_assistant`),timestamp:`12:00 PM`}]),[r,i]=(0,E.useState)(!1),a=(0,E.useRef)(null),o=(0,E.useRef)(null),s=t=>{if(!t.trim())return;let r=new Date().toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`});if(n(n=>[...n,{id:Date.now().toString(),text:t,position:`right`,sender:e(`story.chat_you`),timestamp:r}]),i(!0),typeof window<`u`&&window.__VRT__){i(!1);return}setTimeout(()=>{i(!1);let r=(Date.now()+2).toString(),a=e(`story.chat_ai_response`,{message:t});n(t=>[...t,{id:r,text:``,position:`left`,sender:e(`story.chat_ai_assistant`),timestamp:new Date().toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`}),isStreaming:!0}]);let o=``,s=a.split(` `),c=0,l=setInterval(()=>{c<s.length?(o+=(c===0?``:` `)+s[c],n(e=>e.map(e=>e.id===r?{...e,text:o}:e)),c++):(clearInterval(l),n(e=>e.map(e=>e.id===r?{...e,isStreaming:!1}:e)))},50)},1e3)},c=t=>{let r=t.target.files?.[0];if(r){let t=new Date().toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`});n(n=>[...n,{id:Date.now().toString(),text:e(`chat.attachment_prefix`,{fileName:r.name}),position:`right`,sender:e(`story.chat_you`),timestamp:t,variant:`received`}])}};(0,E.useEffect)(()=>{o.current&&(o.current.scrollTop=o.current.scrollHeight)},[t,r]);let l=()=>(0,D.jsxs)(`div`,{style:{display:`flex`,gap:`4px`},children:[(0,D.jsx)(`button`,{style:{border:`none`,background:`transparent`,cursor:`pointer`,fontSize:`14px`,color:`var(--wim-color-text-tertiary)`},title:e(`action.copy`),children:(0,D.jsx)(u,{name:`CopyIcon`,size:`sm`})}),(0,D.jsx)(`button`,{style:{border:`none`,background:`transparent`,cursor:`pointer`,fontSize:`14px`,color:`var(--wim-color-text-tertiary)`},title:e(`story.chatui_action_good`),children:(0,D.jsx)(u,{name:`ThumbUpIcon`,size:`sm`})}),(0,D.jsx)(`button`,{style:{border:`none`,background:`transparent`,cursor:`pointer`,fontSize:`14px`,color:`var(--wim-color-text-tertiary)`},title:e(`story.chatui_action_bad`),children:(0,D.jsx)(u,{name:`ThumbDownIcon`,size:`sm`})})]});return(0,D.jsxs)(`div`,{style:{height:`100vh`},children:[(0,D.jsx)(`input`,{type:`file`,ref:a,style:{display:`none`},onChange:c}),(0,D.jsxs)(_,{children:[(0,D.jsxs)(v,{ref:o,children:[t.map(e=>(0,D.jsx)(h,{position:e.position,variant:e.variant,senderName:e.sender,timestamp:e.timestamp,showAvatar:!0,isTyping:e.id===`loading`,avatar:e.position===`left`?(0,D.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,width:40,height:40,borderRadius:`50%`,backgroundColor:`var(--wim-color-primary)`,color:`var(--wim-color-text-on-primary)`},children:(0,D.jsx)(u,{name:`StarIcon`,size:`sm`})}):(0,D.jsx)(x,{fallback:`Y`,tone:`s18`}),actions:e.position===`left`&&!e.isStreaming&&e.id!==`1`?(0,D.jsx)(l,{}):void 0,children:e.position===`left`&&e.id!==`1`?(0,D.jsx)(C,{content:e.text,isStreaming:e.isStreaming}):e.text},e.id)),r&&(0,D.jsx)(h,{position:`left`,senderName:e(`story.chat_ai_assistant`),showAvatar:!0,isTyping:!0,avatar:(0,D.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,width:40,height:40,borderRadius:`50%`,backgroundColor:`var(--wim-color-primary)`,color:`var(--wim-color-text-on-primary)`},children:(0,D.jsx)(u,{name:`StarIcon`,size:`sm`})})})]}),(0,D.jsx)(g,{children:(0,D.jsx)(f,{placeholder:e(`story.chat_placeholder_ai`),onSubmit:s,loading:r,showAttach:!0,onAttach:()=>a.current?.click(),style:{flex:1,minWidth:0}})})]})]})}},B=[`Basic`,`WithActions`,`WithAvatarImages`,`WithVariants`,`Interactive`,`WithIcons`,`NoAvatars`,`AvatarSizes`,`AvatarTones`,`AiAssistantIntegration`],A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source},description:{story:`返答へのフィードバック操作。**この形は 2026-08-03 まで 1 枚も撮られていなかった** —
\`actions\` を描くのは \`AiAssistantIntegration\` だけで、そちらは初期メッセージが
1 件しか無く条件に合わないため、アクションが写ったスクリーンショットが存在せず、
「ホバーしないと出ない」不具合が VRT にも a11y にも載っていなかった（T62）。

上のメッセージは既定（**常時表示**）、下は \`actionsVisible={false}\` でホバーに隠した形。
既定を常時表示へ倒したのは T70 — ホバーで出すと、マウスの利用者は「返答を評価できる」
ことを**指すまで知れない**（ツールチップもホバーを待つので発見可能性を上げない）。
タッチ端末では \`@media (hover: none)\` により、隠した側も最初から見える。`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "var(--wim-spacing-md)",
    padding: "var(--wim-spacing-xl)"
  }}>
      {(["s1", "s3", "s5", "s7", "s10", "s12", "s14", "s16", "s18", "s20", "s22", "s24"] as const).map((tone, i) => <ChatAvatar key={tone} tone={tone} fallback={String.fromCharCode(65 + i)} />)}
    </div>
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}}})))()}export{P as a,F as c,w as i,N as l,R as n,I as o,A as r,M as s,L as t,V as u};