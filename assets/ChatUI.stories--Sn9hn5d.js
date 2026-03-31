import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as p,R,A as x}from"./iframe-BIQ3_rbw.js";import{c as I}from"./index-B7ARqZ81.js";import{u as g}from"./useTranslation-Iz9XWB8E.js";import{I as T}from"./Icon-BiKegwnP.js";const v=({children:t,className:s})=>e.jsx("div",{className:I("wim-chat-container",s),children:t}),f=p.forwardRef(({children:t,className:s},l)=>e.jsx("div",{ref:l,className:I("wim-chat-message-list",s),children:t}));f.displayName="ChatMessageList";const i=({children:t,position:s="left",variant:l="default",showAvatar:r=!0,avatar:h,timestamp:a,senderName:c,className:m})=>e.jsxs("div",{className:I("wim-chat-message",`wim-chat-message--${s}`,`wim-chat-message--${l}`,{"wim-chat-message--has-avatar":r},m),children:[r&&s==="left"&&e.jsx("div",{className:"wim-chat-message__avatar",children:h}),e.jsxs("div",{className:"wim-chat-message__content-wrapper",children:[c&&e.jsx("div",{className:"wim-chat-message__sender",children:c}),e.jsx("div",{className:"wim-chat-message__bubble",children:t}),a&&e.jsx("div",{className:"wim-chat-message__timestamp",children:a})]}),r&&s==="right"&&e.jsx("div",{className:"wim-chat-message__avatar",children:h})]}),_=p.forwardRef(({onSend:t,sendButtonLabel:s,showSendButton:l=!0,className:r,...h},a)=>{const{t:c}=g(["components"]),[m,n]=R.useState(""),d=s||c("chat.send_button"),C=()=>{m.trim()&&t&&(t(m),n(""))},u=y=>{y.key==="Enter"&&!y.shiftKey&&(y.preventDefault(),C())};return e.jsxs("div",{className:I("wim-chat-input",r),children:[e.jsx("input",{ref:a,type:"text",className:"wim-chat-input__field",value:m,onChange:y=>n(y.target.value),onKeyDown:u,placeholder:h.placeholder||c("chat.placeholder"),...h}),l&&e.jsx("button",{className:"wim-chat-input__send-button",onClick:C,disabled:!m.trim(),type:"button",children:d})]})});_.displayName="ChatInput";const o=({src:t,alt:s,fallback:l,size:r="md",color:h="s18",className:a})=>{const{t:c}=g(["components"]),[m,n]=R.useState(!1),d=s||c("a11y.avatar");return e.jsx("div",{className:I("wim-chat-avatar",`wim-chat-avatar--${r}`,`wim-chat-avatar--${h}`,a),children:t&&!m?e.jsx("img",{src:t,alt:d,className:"wim-chat-avatar__image",onError:()=>n(!0)}):e.jsx("div",{className:"wim-chat-avatar__fallback",children:l||d.charAt(0).toUpperCase()})})};v.__docgenInfo={description:"",methods:[],displayName:"ChatContainer",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};f.__docgenInfo={description:"",methods:[],displayName:"ChatMessageList",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};i.__docgenInfo={description:"",methods:[],displayName:"ChatMessage",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},position:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"left"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"default" | "primary" | "secondary"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},showAvatar:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},avatar:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},timestamp:{required:!1,tsType:{name:"string"},description:""},senderName:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};_.__docgenInfo={description:"",methods:[],displayName:"ChatInput",props:{onSend:{required:!1,tsType:{name:"signature",type:"function",raw:"(message: string) => void",signature:{arguments:[{type:{name:"string"},name:"message"}],return:{name:"void"}}},description:""},sendButtonLabel:{required:!1,tsType:{name:"string"},description:""},showSendButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};o.__docgenInfo={description:"",methods:[],displayName:"ChatAvatar",props:{src:{required:!1,tsType:{name:"string"},description:""},alt:{required:!1,tsType:{name:"string"},description:""},fallback:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:'"s1" | "s3" | "s5" | "s7" | "s10" | "s12" | "s14" | "s16" | "s18" | "s20" | "s22" | "s24"',elements:[{name:"literal",value:'"s1"'},{name:"literal",value:'"s3"'},{name:"literal",value:'"s5"'},{name:"literal",value:'"s7"'},{name:"literal",value:'"s10"'},{name:"literal",value:'"s12"'},{name:"literal",value:'"s14"'},{name:"literal",value:'"s16"'},{name:"literal",value:'"s18"'},{name:"literal",value:'"s20"'},{name:"literal",value:'"s22"'},{name:"literal",value:'"s24"'}]},description:"",defaultValue:{value:'"s18"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const E={title:"Components/Data Structures/ChatUI",component:v,parameters:{layout:"fullscreen"}},A={render:()=>{const{t}=g(x);return e.jsx("div",{style:{height:"100vh"},children:e.jsxs(v,{children:[e.jsxs(f,{children:[e.jsx(i,{position:"left",showAvatar:!0,avatar:e.jsx(o,{fallback:"A",color:"s5"}),senderName:t("story.chat_alice"),timestamp:"10:30 AM",children:t("story.chat_msg_1")}),e.jsx(i,{position:"right",showAvatar:!0,avatar:e.jsx(o,{fallback:"Y"}),senderName:t("story.chat_you"),timestamp:"10:31 AM",children:t("story.chat_msg_2")}),e.jsx(i,{position:"left",showAvatar:!0,avatar:e.jsx(o,{fallback:"A",color:"s5"}),senderName:t("story.chat_alice"),timestamp:"10:32 AM",children:t("story.chat_msg_3")})]}),e.jsx(_,{placeholder:t("chat.placeholder")})]})})}},w={render:()=>{const{t}=g(x);return e.jsx("div",{style:{height:"100vh"},children:e.jsxs(v,{children:[e.jsxs(f,{children:[e.jsx(i,{position:"left",showAvatar:!0,avatar:e.jsx(o,{src:"https://i.pravatar.cc/150?img=1",alt:t("story.chat_john")}),senderName:t("story.chat_john"),timestamp:"09:15 AM",children:t("story.chat_msg_4")}),e.jsx(i,{position:"right",showAvatar:!0,avatar:e.jsx(o,{src:"https://i.pravatar.cc/150?img=5",alt:t("story.chat_you")}),senderName:t("story.chat_you"),timestamp:"09:16 AM",children:t("story.chat_msg_5")}),e.jsx(i,{position:"left",showAvatar:!0,avatar:e.jsx(o,{src:"https://i.pravatar.cc/150?img=3",alt:t("story.chat_sarah")}),senderName:t("story.chat_sarah"),timestamp:"09:17 AM",children:t("story.chat_msg_6")})]}),e.jsx(_,{placeholder:t("chat.placeholder")})]})})}},M={render:()=>{const{t}=g(x);return e.jsx("div",{style:{height:"100vh"},children:e.jsxs(v,{children:[e.jsxs(f,{children:[e.jsx(i,{position:"left",variant:"default",showAvatar:!0,avatar:e.jsx(o,{fallback:"S",color:"s18"}),senderName:t("story.chat_system"),timestamp:"08:00 AM",children:t("story.chat_msg_7")}),e.jsx(i,{position:"left",variant:"primary",showAvatar:!0,avatar:e.jsx(o,{fallback:"A",color:"s1"}),senderName:t("story.chat_admin"),timestamp:"08:01 AM",children:t("story.chat_msg_8")}),e.jsx(i,{position:"left",variant:"secondary",showAvatar:!0,avatar:e.jsx(o,{fallback:"B",color:"s12"}),senderName:t("story.chat_bot"),timestamp:"08:02 AM",children:t("story.chat_msg_9")})]}),e.jsx(_,{placeholder:t("chat.placeholder")})]})})}},j={render:()=>{const{t}=g(x),[s,l]=p.useState([{id:1,text:t("story.chat_msg_10"),position:"left",sender:t("story.chat_support"),timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}]),r=p.useRef(null),h=a=>{const c={id:s.length+1,text:a,position:"right",sender:t("story.chat_you"),timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};l([...s,c]),setTimeout(()=>{const m={id:s.length+2,text:t("story.chat_msg_11"),position:"left",sender:t("story.chat_support"),timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};l(n=>[...n,m])},1e3)};return p.useEffect(()=>{r.current&&(r.current.scrollTop=r.current.scrollHeight)},[s]),e.jsx("div",{style:{height:"100vh"},children:e.jsxs(v,{children:[e.jsx(f,{ref:r,children:s.map(a=>e.jsx(i,{position:a.position,showAvatar:!0,avatar:e.jsx(o,{fallback:a.sender.charAt(0),color:a.position==="left"?"s5":"s18"}),senderName:a.sender,timestamp:a.timestamp,children:a.text},a.id))}),e.jsx(_,{placeholder:t("chat.placeholder_interactive"),onSend:h})]})})}},N={render:()=>{const{t}=g(x);return e.jsx("div",{style:{height:"100vh"},children:e.jsxs(v,{children:[e.jsxs(f,{children:[e.jsx(i,{position:"left",showAvatar:!0,avatar:e.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"50%",backgroundColor:"var(--wim-color-primary)",display:"flex",alignItems:"center",justifyContent:"center",color:"white"},children:e.jsx(T,{name:"UserIcon",size:"sm"})}),senderName:t("story.chat_customer_support"),timestamp:"11:00 AM",children:t("story.chat_msg_12")}),e.jsx(i,{position:"right",showAvatar:!0,avatar:e.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"50%",backgroundColor:"var(--wim-color-secondary)",display:"flex",alignItems:"center",justifyContent:"center",color:"white"},children:e.jsx(T,{name:"UserIcon",size:"sm"})}),senderName:t("story.chat_you"),timestamp:"11:01 AM",children:t("story.chat_msg_13")})]}),e.jsx(_,{placeholder:t("chat.placeholder")})]})})}},S={render:()=>{const{t}=g(x);return e.jsx("div",{style:{height:"100vh"},children:e.jsxs(v,{children:[e.jsxs(f,{children:[e.jsx(i,{position:"left",showAvatar:!1,senderName:t("story.chat_alice"),timestamp:"10:30 AM",children:t("story.chat_msg_14")}),e.jsx(i,{position:"right",showAvatar:!1,senderName:t("story.chat_you"),timestamp:"10:31 AM",children:t("story.chat_msg_15")}),e.jsx(i,{position:"left",showAvatar:!1,senderName:t("story.chat_alice"),timestamp:"10:32 AM",children:t("story.chat_msg_16")})]}),e.jsx(_,{placeholder:t("chat.placeholder")})]})})}},L={render:()=>{const{t}=g(x);return e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center",padding:"24px"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"8px",fontSize:"14px",color:"var(--wim-color-text-secondary)"},children:t("story.chat_size_small")}),e.jsx(o,{size:"sm",fallback:"S"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"8px",fontSize:"14px",color:"var(--wim-color-text-secondary)"},children:t("story.chat_size_medium")}),e.jsx(o,{size:"md",fallback:"M"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"8px",fontSize:"14px",color:"var(--wim-color-text-secondary)"},children:t("story.chat_size_large")}),e.jsx(o,{size:"lg",fallback:"L"})]})]})}},b={render:()=>{const{t,i18n:s}=g(x),[l,r]=p.useState([{id:1,text:t("story.chat_ai_greeting"),position:"left",sender:t("story.chat_ai_assistant"),timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}]),[h,a]=p.useState(!1),c=p.useRef(null);p.useEffect(()=>{r(n=>n.map(d=>d.id===1?{...d,text:t("story.chat_ai_greeting"),sender:t("story.chat_ai_assistant")}:d))},[s.language,t]);const m=async n=>{const d={id:Date.now(),text:n,position:"right",sender:t("story.chat_you"),timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};r(u=>[...u,d]),a(!0);const C=Date.now()+1;r(u=>[...u,{id:C,text:"...",position:"left",sender:t("story.chat_ai_assistant"),timestamp:"",isTyping:!0}]);try{await new Promise(y=>setTimeout(y,1500));const u=t("story.chat_ai_response",{message:n});r(y=>y.filter(k=>k.id!==C).concat({id:Date.now()+2,text:u,position:"left",sender:t("story.chat_ai_assistant"),timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}))}catch(u){console.error("Failed to generate AI response:",u)}finally{a(!1)}};return p.useEffect(()=>{c.current&&(c.current.scrollTop=c.current.scrollHeight)},[l]),e.jsx("div",{style:{height:"100vh"},children:e.jsxs(v,{children:[e.jsx(f,{ref:c,children:l.map(n=>e.jsx(i,{position:n.position,showAvatar:!0,avatar:n.position==="left"?e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:40,height:40,borderRadius:"50%",backgroundColor:"var(--wim-color-primary)",color:"white"},children:e.jsx(T,{name:"StarIcon",size:"sm"})}):e.jsx(o,{fallback:"Y",color:"s18"}),senderName:n.sender,timestamp:n.timestamp,children:n.isTyping?e.jsxs("div",{style:{display:"flex",gap:"4px",alignItems:"center",height:"24px"},children:[e.jsx("span",{className:"typing-dot",style:{animation:"chat-typing 1.4s infinite ease-in-out both",animationDelay:"-0.32s"},children:"●"}),e.jsx("span",{className:"typing-dot",style:{animation:"chat-typing 1.4s infinite ease-in-out both",animationDelay:"-0.16s"},children:"●"}),e.jsx("span",{className:"typing-dot",style:{animation:"chat-typing 1.4s infinite ease-in-out both"},children:"●"}),e.jsx("style",{children:`
                      @keyframes chat-typing {
                        0%, 80%, 100% { opacity: 0; }
                        40% { opacity: 1; }
                      }
                    `})]}):n.text},n.id))}),e.jsx(_,{placeholder:t("story.chat_placeholder_ai"),onSend:m,disabled:h})]})})}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      height: "100vh"
    }}>
        <ChatContainer>
          <ChatMessageList>
            <ChatMessage position="left" showAvatar avatar={<ChatAvatar fallback="A" color="s5" />} senderName={t("story.chat_alice")} timestamp="10:30 AM">
              {t("story.chat_msg_1")}
            </ChatMessage>
            <ChatMessage position="right" showAvatar avatar={<ChatAvatar fallback="Y" />} senderName={t("story.chat_you")} timestamp="10:31 AM">
              {t("story.chat_msg_2")}
            </ChatMessage>
            <ChatMessage position="left" showAvatar avatar={<ChatAvatar fallback="A" color="s5" />} senderName={t("story.chat_alice")} timestamp="10:32 AM">
              {t("story.chat_msg_3")}
            </ChatMessage>
          </ChatMessageList>
          <ChatInput placeholder={t("chat.placeholder")} />
        </ChatContainer>
      </div>;
  }
}`,...A.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      height: "100vh"
    }}>
        <ChatContainer>
          <ChatMessageList>
            <ChatMessage position="left" showAvatar avatar={<ChatAvatar src="https://i.pravatar.cc/150?img=1" alt={t("story.chat_john")} />} senderName={t("story.chat_john")} timestamp="09:15 AM">
              {t("story.chat_msg_4")}
            </ChatMessage>
            <ChatMessage position="right" showAvatar avatar={<ChatAvatar src="https://i.pravatar.cc/150?img=5" alt={t("story.chat_you")} />} senderName={t("story.chat_you")} timestamp="09:16 AM">
              {t("story.chat_msg_5")}
            </ChatMessage>
            <ChatMessage position="left" showAvatar avatar={<ChatAvatar src="https://i.pravatar.cc/150?img=3" alt={t("story.chat_sarah")} />} senderName={t("story.chat_sarah")} timestamp="09:17 AM">
              {t("story.chat_msg_6")}
            </ChatMessage>
          </ChatMessageList>
          <ChatInput placeholder={t("chat.placeholder")} />
        </ChatContainer>
      </div>;
  }
}`,...w.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      height: "100vh"
    }}>
        <ChatContainer>
          <ChatMessageList>
            <ChatMessage position="left" variant="default" showAvatar avatar={<ChatAvatar fallback="S" color="s18" />} senderName={t("story.chat_system")} timestamp="08:00 AM">
              {t("story.chat_msg_7")}
            </ChatMessage>
            <ChatMessage position="left" variant="primary" showAvatar avatar={<ChatAvatar fallback="A" color="s1" />} senderName={t("story.chat_admin")} timestamp="08:01 AM">
              {t("story.chat_msg_8")}
            </ChatMessage>
            <ChatMessage position="left" variant="secondary" showAvatar avatar={<ChatAvatar fallback="B" color="s12" />} senderName={t("story.chat_bot")} timestamp="08:02 AM">
              {t("story.chat_msg_9")}
            </ChatMessage>
          </ChatMessageList>
          <ChatInput placeholder={t("chat.placeholder")} />
        </ChatContainer>
      </div>;
  }
}`,...M.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    interface Message {
      id: number;
      text: string;
      position: "left" | "right";
      sender: string;
      timestamp: string;
    }
    const [messages, setMessages] = useState<Message[]>([{
      id: 1,
      text: t("story.chat_msg_10"),
      position: "left",
      sender: t("story.chat_support"),
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      })
    }]);
    const messageListRef = useRef<HTMLDivElement>(null);
    const handleSend = (message: string) => {
      const newMessage: Message = {
        id: messages.length + 1,
        text: message,
        position: "right",
        sender: t("story.chat_you"),
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit"
        })
      };
      setMessages([...messages, newMessage]);

      // Simulate response
      setTimeout(() => {
        const response: Message = {
          id: messages.length + 2,
          text: t("story.chat_msg_11"),
          position: "left",
          sender: t("story.chat_support"),
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
          })
        };
        setMessages(prev => [...prev, response]);
      }, 1000);
    };
    useEffect(() => {
      if (messageListRef.current) {
        messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
      }
    }, [messages]);
    return <div style={{
      height: "100vh"
    }}>
        <ChatContainer>
          <ChatMessageList ref={messageListRef}>
            {messages.map(msg => <ChatMessage key={msg.id} position={msg.position} showAvatar avatar={<ChatAvatar fallback={msg.sender.charAt(0)} color={msg.position === "left" ? "s5" : "s18"} />} senderName={msg.sender} timestamp={msg.timestamp}>
                {msg.text}
              </ChatMessage>)}
          </ChatMessageList>
          <ChatInput placeholder={t("chat.placeholder_interactive")} onSend={handleSend} />
        </ChatContainer>
      </div>;
  }
}`,...j.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      height: "100vh"
    }}>
        <ChatContainer>
          <ChatMessageList>
            <ChatMessage position="left" showAvatar avatar={<div style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: "var(--wim-color-primary)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white"
          }}>
                  <Icon name="UserIcon" size="sm" />
                </div>} senderName={t("story.chat_customer_support")} timestamp="11:00 AM">
              {t("story.chat_msg_12")}
            </ChatMessage>
            <ChatMessage position="right" showAvatar avatar={<div style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: "var(--wim-color-secondary)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white"
          }}>
                  <Icon name="UserIcon" size="sm" />
                </div>} senderName={t("story.chat_you")} timestamp="11:01 AM">
              {t("story.chat_msg_13")}
            </ChatMessage>
          </ChatMessageList>
          <ChatInput placeholder={t("chat.placeholder")} />
        </ChatContainer>
      </div>;
  }
}`,...N.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      height: "100vh"
    }}>
        <ChatContainer>
          <ChatMessageList>
            <ChatMessage position="left" showAvatar={false} senderName={t("story.chat_alice")} timestamp="10:30 AM">
              {t("story.chat_msg_14")}
            </ChatMessage>
            <ChatMessage position="right" showAvatar={false} senderName={t("story.chat_you")} timestamp="10:31 AM">
              {t("story.chat_msg_15")}
            </ChatMessage>
            <ChatMessage position="left" showAvatar={false} senderName={t("story.chat_alice")} timestamp="10:32 AM">
              {t("story.chat_msg_16")}
            </ChatMessage>
          </ChatMessageList>
          <ChatInput placeholder={t("chat.placeholder")} />
        </ChatContainer>
      </div>;
  }
}`,...S.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      gap: "24px",
      alignItems: "center",
      padding: "24px"
    }}>
        <div>
          <p style={{
          marginBottom: "8px",
          fontSize: "14px",
          color: "var(--wim-color-text-secondary)"
        }}>
            {t("story.chat_size_small")}
          </p>
          <ChatAvatar size="sm" fallback="S" />
        </div>
        <div>
          <p style={{
          marginBottom: "8px",
          fontSize: "14px",
          color: "var(--wim-color-text-secondary)"
        }}>
            {t("story.chat_size_medium")}
          </p>
          <ChatAvatar size="md" fallback="M" />
        </div>
        <div>
          <p style={{
          marginBottom: "8px",
          fontSize: "14px",
          color: "var(--wim-color-text-secondary)"
        }}>
            {t("story.chat_size_large")}
          </p>
          <ChatAvatar size="lg" fallback="L" />
        </div>
      </div>;
  }
}`,...L.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t,
      i18n
    } = useTranslation(ALL_NAMESPACES);
    interface Message {
      id: number;
      text: string;
      position: "left" | "right";
      sender: string;
      timestamp: string;
      isTyping?: boolean;
    }
    const [messages, setMessages] = useState<Message[]>([{
      id: 1,
      text: t("story.chat_ai_greeting"),
      position: "left",
      sender: t("story.chat_ai_assistant"),
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      })
    }]);
    const [isLoading, setIsLoading] = useState(false);
    const messageListRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
      setMessages(prev => prev.map(msg => msg.id === 1 ? {
        ...msg,
        text: t("story.chat_ai_greeting"),
        sender: t("story.chat_ai_assistant")
      } : msg));
    }, [i18n.language, t]);
    const handleSend = async (message: string) => {
      const newMessage: Message = {
        id: Date.now(),
        text: message,
        position: "right",
        sender: t("story.chat_you"),
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit"
        })
      };
      setMessages(prev => [...prev, newMessage]);
      setIsLoading(true);

      // Add a temporary typing message
      const typingMessageId = Date.now() + 1;
      setMessages(prev => [...prev, {
        id: typingMessageId,
        text: "...",
        position: "left",
        sender: t("story.chat_ai_assistant"),
        timestamp: "",
        isTyping: true
      }]);
      try {
        // [Example] How to use the Gemini API:
        // ------------------------------------------------------------------
        // const API_KEY = "YOUR_API_KEY"; // Replace with your actual key
        // const genAI = new GoogleGenerativeAI(API_KEY);
        // const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
        // const result = await model.generateContent(message);
        // const responseText = await result.response.text();
        // ------------------------------------------------------------------

        // Mocking the AI response for demonstration purposes
        await new Promise(resolve => setTimeout(resolve, 1500));
        const responseText = t("story.chat_ai_response", {
          message
        });
        setMessages(prev => prev.filter(msg => msg.id !== typingMessageId).concat({
          id: Date.now() + 2,
          text: responseText,
          position: "left",
          sender: t("story.chat_ai_assistant"),
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
          })
        }));
      } catch (error) {
        console.error("Failed to generate AI response:", error);
      } finally {
        setIsLoading(false);
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
        <ChatContainer>
          <ChatMessageList ref={messageListRef}>
            {messages.map(msg => <ChatMessage key={msg.id} position={msg.position} showAvatar avatar={msg.position === "left" ? <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 40,
            height: 40,
            borderRadius: "50%",
            backgroundColor: "var(--wim-color-primary)",
            color: "white"
          }}>
                      <Icon name="StarIcon" size="sm" />
                    </div> : <ChatAvatar fallback="Y" color="s18" />} senderName={msg.sender} timestamp={msg.timestamp}>
                {msg.isTyping ? <div style={{
              display: "flex",
              gap: "4px",
              alignItems: "center",
              height: "24px"
            }}>
                    <span className="typing-dot" style={{
                animation: "chat-typing 1.4s infinite ease-in-out both",
                animationDelay: "-0.32s"
              }}>
                      ●
                    </span>
                    <span className="typing-dot" style={{
                animation: "chat-typing 1.4s infinite ease-in-out both",
                animationDelay: "-0.16s"
              }}>
                      ●
                    </span>
                    <span className="typing-dot" style={{
                animation: "chat-typing 1.4s infinite ease-in-out both"
              }}>
                      ●
                    </span>
                    <style>{\`
                      @keyframes chat-typing {
                        0%, 80%, 100% { opacity: 0; }
                        40% { opacity: 1; }
                      }
                    \`}</style>
                  </div> : msg.text}
              </ChatMessage>)}
          </ChatMessageList>
          <ChatInput placeholder={t("story.chat_placeholder_ai")} onSend={handleSend} disabled={isLoading} />
        </ChatContainer>
      </div>;
  }
}`,...b.parameters?.docs?.source}}};const z=["Basic","WithAvatarImages","WithVariants","Interactive","WithIcons","NoAvatars","AvatarSizes","AiAssistantIntegration"],U=Object.freeze(Object.defineProperty({__proto__:null,AiAssistantIntegration:b,AvatarSizes:L,Basic:A,Interactive:j,NoAvatars:S,WithAvatarImages:w,WithIcons:N,WithVariants:M,__namedExportsOrder:z,default:E},Symbol.toStringTag,{value:"Module"}));export{L as A,A as B,U as C,j as I,S as N,w as W,M as a,N as b};
