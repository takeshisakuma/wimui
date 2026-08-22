"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,br as a,cr as o,xr as s,yr as c}from"./iframe-F5Up1IQq.js";import{a as l,i as u,n as d,o as f,r as p,s as m,t as h}from"./src-Ssuy8lr7.js";import{t as g}from"./Icon-dyTmj1rn.js";import{t as _}from"./PromptInput-C4lOtUyf.js";import{t as v}from"./AIResponseFeedback-Bwn2G2bS.js";import{t as y}from"./StreamingText-CvNVIoR7.js";import{t as b}from"./streaming-text-CU0A45sp.js";var x=e({AiAssistantIntegration:()=>F,AvatarSizes:()=>P,Basic:()=>D,Interactive:()=>j,NoAvatars:()=>N,WithActions:()=>O,WithAvatarImages:()=>k,WithIcons:()=>M,WithVariants:()=>A,__namedExportsOrder:()=>I,default:()=>E});function S(){let{t:e}=i(c);return typeof window<`u`&&window.__VRT__?((e,t)=>e===`story.chat_ai_response`?`Thanks for asking about "${t?.message??``}". Here is a concise answer.`:e===`chat.attachment_prefix`?`Attached: ${t?.fileName??`file`}`:T[e]??e):e}var C,w,T,E,D,O,k,A,j,M,N,P,F,I,L=t((()=>{C=n(r(),1),s(),a(),h(),b(),w=o(),T={"story.chat_msg_1":`Hello! How can I help you today?`,"story.chat_msg_2":`I need help with my account.`,"story.chat_msg_3":`Sure - what seems to be the problem?`,"story.chat_msg_4":`I cannot reset my password.`,"story.chat_msg_5":`Default message style`,"story.chat_msg_6":`Primary message style`,"story.chat_msg_7":`Secondary message style`,"story.chat_msg_12":`Custom avatar with an icon`,"story.chat_msg_14":`Messages without avatars`,"story.chat_msg_15":`Still readable and compact`,"story.chat_support":`Support`,"story.chat_you":`You`,"story.chat_ai_assistant":`Assistant`,"story.chat_ai_greeting":`Hi - ask me anything about the product.`,"story.chat_placeholder_ai":`Message the assistant...`,"story.chatui_action_good":`Good response`,"story.chatui_action_bad":`Bad response`,"chat.placeholder":`Type a message...`,"chat.placeholder_interactive":`Type a message...`,"action.copy":`Copy`},E={title:`Components/AI/ChatUI`,component:p,parameters:{layout:`fullscreen`}},D={render:()=>{let e=S();return(0,w.jsx)(`div`,{style:{height:`400px`},children:(0,w.jsxs)(p,{children:[(0,w.jsxs)(m,{children:[(0,w.jsx)(f,{position:`left`,children:e(`story.chat_msg_1`)}),(0,w.jsx)(f,{position:`right`,children:e(`story.chat_msg_2`)})]}),(0,w.jsx)(u,{placeholder:e(`chat.placeholder`)})]})})}},O={render:()=>{let e=S(),t=(0,w.jsx)(v,{showRegenerate:!0});return(0,w.jsx)(`div`,{style:{height:`400px`},children:(0,w.jsxs)(p,{children:[(0,w.jsxs)(m,{children:[(0,w.jsx)(f,{position:`left`,showAvatar:!0,avatar:(0,w.jsx)(d,{fallback:`A`,tone:`s5`}),senderName:e(`story.chat_ai_assistant`),actions:t,children:e(`story.chat_msg_1`)}),(0,w.jsx)(f,{position:`left`,showAvatar:!0,avatar:(0,w.jsx)(d,{fallback:`A`,tone:`s5`}),senderName:e(`story.chat_ai_assistant`),actions:t,actionsVisible:!1,children:e(`story.chat_msg_3`)})]}),(0,w.jsx)(u,{placeholder:e(`chat.placeholder`)})]})})}},k={render:()=>{let e=S();return(0,w.jsx)(`div`,{style:{height:`400px`},children:(0,w.jsxs)(p,{children:[(0,w.jsxs)(m,{children:[(0,w.jsx)(f,{position:`left`,showAvatar:!0,avatar:(0,w.jsx)(d,{fallback:`S`,tone:`s5`}),senderName:e(`story.chat_support`),children:e(`story.chat_msg_3`)}),(0,w.jsx)(f,{position:`right`,showAvatar:!0,avatar:(0,w.jsx)(d,{fallback:`Y`,tone:`s18`}),senderName:e(`story.chat_you`),children:e(`story.chat_msg_4`)})]}),(0,w.jsx)(u,{placeholder:e(`chat.placeholder`)})]})})}},A={render:()=>{let e=S();return(0,w.jsx)(`div`,{style:{height:`400px`},children:(0,w.jsxs)(p,{children:[(0,w.jsxs)(m,{children:[(0,w.jsx)(f,{variant:`default`,children:e(`story.chat_msg_5`)}),(0,w.jsx)(f,{variant:`sent`,position:`right`,children:e(`story.chat_msg_6`)}),(0,w.jsx)(f,{variant:`received`,position:`left`,children:e(`story.chat_msg_7`)})]}),(0,w.jsx)(u,{placeholder:e(`chat.placeholder`)})]})})}},j={render:()=>{let e=S(),[t,n]=(0,C.useState)([{id:`1`,text:e(`story.chat_msg_1`),position:`left`,sender:e(`story.chat_support`),timestamp:`10:00 AM`}]),r=(0,C.useRef)(null),i=(0,C.useRef)(null);return(0,C.useEffect)(()=>{i.current&&(i.current.scrollTop=i.current.scrollHeight)},[t]),(0,w.jsxs)(`div`,{style:{height:`100vh`},children:[(0,w.jsx)(`input`,{type:`file`,ref:r,style:{display:`none`},onChange:t=>{let r=t.target.files?.[0];if(r){let t=new Date().toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`});n(n=>[...n,{id:Date.now().toString(),text:e(`chat.attachment_prefix`,{fileName:r.name}),position:`right`,sender:e(`story.chat_you`),timestamp:t,variant:`received`}])}}}),(0,w.jsxs)(p,{children:[(0,w.jsx)(m,{ref:i,children:t.map(e=>(0,w.jsx)(f,{position:e.position,variant:e.variant,senderName:e.sender,timestamp:e.timestamp,showAvatar:!0,avatar:(0,w.jsx)(d,{fallback:e.sender?.charAt(0),tone:e.position===`left`?`s5`:`s18`}),children:e.text},e.id))}),(0,w.jsx)(u,{placeholder:e(`chat.placeholder_interactive`),onSend:t=>{if(!t.trim())return;let r=new Date().toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`});n(n=>[...n,{id:Date.now().toString(),text:t,position:`right`,sender:e(`story.chat_you`),timestamp:r}])},showAttach:!0,onAttach:()=>r.current?.click()})]})]})}},M={render:()=>{let e=S();return(0,w.jsx)(`div`,{style:{height:`400px`},children:(0,w.jsxs)(p,{children:[(0,w.jsx)(m,{children:(0,w.jsx)(f,{position:`left`,showAvatar:!0,avatar:(0,w.jsx)(`div`,{style:{width:40,height:40,borderRadius:`50%`,backgroundColor:`var(--wim-color-primary)`,display:`flex`,alignItems:`center`,justifyContent:`center`,color:`var(--wim-color-text-on-primary)`},children:(0,w.jsx)(g,{name:`UserIcon`,size:`sm`})}),children:e(`story.chat_msg_12`)})}),(0,w.jsx)(u,{placeholder:e(`chat.placeholder`)})]})})}},N={render:()=>{let e=S();return(0,w.jsx)(`div`,{style:{height:`400px`},children:(0,w.jsxs)(p,{children:[(0,w.jsxs)(m,{children:[(0,w.jsx)(f,{position:`left`,showAvatar:!1,children:e(`story.chat_msg_14`)}),(0,w.jsx)(f,{position:`right`,showAvatar:!1,children:e(`story.chat_msg_15`)})]}),(0,w.jsx)(u,{placeholder:e(`chat.placeholder`)})]})})}},P={render:()=>(0,w.jsxs)(`div`,{style:{display:`flex`,gap:`24px`,padding:`24px`},children:[(0,w.jsx)(d,{size:`sm`,fallback:`S`}),(0,w.jsx)(d,{size:`md`,fallback:`M`}),(0,w.jsx)(d,{size:`lg`,fallback:`L`})]})},F={render:()=>{let e=S(),[t,n]=(0,C.useState)([{id:`1`,text:e(`story.chat_ai_greeting`),position:`left`,sender:e(`story.chat_ai_assistant`),timestamp:`12:00 PM`}]),[r,i]=(0,C.useState)(!1),a=(0,C.useRef)(null),o=(0,C.useRef)(null),s=t=>{if(!t.trim())return;let r=new Date().toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`});if(n(n=>[...n,{id:Date.now().toString(),text:t,position:`right`,sender:e(`story.chat_you`),timestamp:r}]),i(!0),typeof window<`u`&&window.__VRT__){i(!1);return}setTimeout(()=>{i(!1);let r=(Date.now()+2).toString(),a=e(`story.chat_ai_response`,{message:t});n(t=>[...t,{id:r,text:``,position:`left`,sender:e(`story.chat_ai_assistant`),timestamp:new Date().toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`}),isStreaming:!0}]);let o=``,s=a.split(` `),c=0,l=setInterval(()=>{c<s.length?(o+=(c===0?``:` `)+s[c],n(e=>e.map(e=>e.id===r?{...e,text:o}:e)),c++):(clearInterval(l),n(e=>e.map(e=>e.id===r?{...e,isStreaming:!1}:e)))},50)},1e3)},c=t=>{let r=t.target.files?.[0];if(r){let t=new Date().toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`});n(n=>[...n,{id:Date.now().toString(),text:e(`chat.attachment_prefix`,{fileName:r.name}),position:`right`,sender:e(`story.chat_you`),timestamp:t,variant:`received`}])}};(0,C.useEffect)(()=>{o.current&&(o.current.scrollTop=o.current.scrollHeight)},[t,r]);let u=()=>(0,w.jsxs)(`div`,{style:{display:`flex`,gap:`4px`},children:[(0,w.jsx)(`button`,{style:{border:`none`,background:`transparent`,cursor:`pointer`,fontSize:`14px`,color:`var(--wim-color-text-tertiary)`},title:e(`action.copy`),children:(0,w.jsx)(g,{name:`CopyIcon`,size:`sm`})}),(0,w.jsx)(`button`,{style:{border:`none`,background:`transparent`,cursor:`pointer`,fontSize:`14px`,color:`var(--wim-color-text-tertiary)`},title:e(`story.chatui_action_good`),children:(0,w.jsx)(g,{name:`ThumbUpIcon`,size:`sm`})}),(0,w.jsx)(`button`,{style:{border:`none`,background:`transparent`,cursor:`pointer`,fontSize:`14px`,color:`var(--wim-color-text-tertiary)`},title:e(`story.chatui_action_bad`),children:(0,w.jsx)(g,{name:`ThumbDownIcon`,size:`sm`})})]});return(0,w.jsxs)(`div`,{style:{height:`100vh`},children:[(0,w.jsx)(`input`,{type:`file`,ref:a,style:{display:`none`},onChange:c}),(0,w.jsxs)(p,{children:[(0,w.jsxs)(m,{ref:o,children:[t.map(e=>(0,w.jsx)(f,{position:e.position,variant:e.variant,senderName:e.sender,timestamp:e.timestamp,showAvatar:!0,isTyping:e.id===`loading`,avatar:e.position===`left`?(0,w.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,width:40,height:40,borderRadius:`50%`,backgroundColor:`var(--wim-color-primary)`,color:`var(--wim-color-text-on-primary)`},children:(0,w.jsx)(g,{name:`StarIcon`,size:`sm`})}):(0,w.jsx)(d,{fallback:`Y`,tone:`s18`}),actions:e.position===`left`&&!e.isStreaming&&e.id!==`1`?(0,w.jsx)(u,{}):void 0,children:e.position===`left`&&e.id!==`1`?(0,w.jsx)(y,{content:e.text,isStreaming:e.isStreaming}):e.text},e.id)),r&&(0,w.jsx)(f,{position:`left`,senderName:e(`story.chat_ai_assistant`),showAvatar:!0,isTyping:!0,avatar:(0,w.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,width:40,height:40,borderRadius:`50%`,backgroundColor:`var(--wim-color-primary)`,color:`var(--wim-color-text-on-primary)`},children:(0,w.jsx)(g,{name:`StarIcon`,size:`sm`})})})]}),(0,w.jsx)(l,{children:(0,w.jsx)(_,{placeholder:e(`story.chat_placeholder_ai`),onSubmit:s,loading:r,showAttach:!0,onAttach:()=>a.current?.click(),style:{flex:1,minWidth:0}})})]})]})}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source},description:{story:`返答へのフィードバック操作。**この形は 2026-08-03 まで 1 枚も撮られていなかった** —
\`actions\` を描くのは \`AiAssistantIntegration\` だけで、そちらは初期メッセージが
1 件しか無く条件に合わないため、アクションが写ったスクリーンショットが存在せず、
「ホバーしないと出ない」不具合が VRT にも a11y にも載っていなかった（T62）。

上のメッセージは既定（**常時表示**）、下は \`actionsVisible={false}\` でホバーに隠した形。
既定を常時表示へ倒したのは T70 — ホバーで出すと、マウスの利用者は「返答を評価できる」
ことを**指すまで知れない**（ツールチップもホバーを待つので発見可能性を上げない）。
タッチ端末では \`@media (hover: none)\` により、隠した側も最初から見える。`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I=[`Basic`,`WithActions`,`WithAvatarImages`,`WithVariants`,`Interactive`,`WithIcons`,`NoAvatars`,`AvatarSizes`,`AiAssistantIntegration`]}));L();export{F as AiAssistantIntegration,P as AvatarSizes,D as Basic,j as Interactive,N as NoAvatars,O as WithActions,k as WithAvatarImages,M as WithIcons,A as WithVariants,I as __namedExportsOrder,E as default,L as n,x as t};