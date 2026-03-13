import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as p,R as L}from"./iframe-CKKDYfjM.js";import{c as b}from"./index-K_u7tV9x.js";import{u as g}from"./useTranslation-D80Uyf_x.js";import{I as S}from"./Icon-DuRhDIXo.js";const u=({children:t,className:s})=>e.jsx("div",{className:b("wim-chat-container",s),children:t}),y=p.forwardRef(({children:t,className:s},c)=>e.jsx("div",{ref:c,className:b("wim-chat-message-list",s),children:t}));y.displayName="ChatMessageList";const r=({children:t,position:s="left",variant:c="default",showAvatar:i=!0,avatar:l,timestamp:n,senderName:a,className:m})=>e.jsxs("div",{className:b("wim-chat-message",`wim-chat-message--${s}`,`wim-chat-message--${c}`,{"wim-chat-message--has-avatar":i},m),children:[i&&s==="left"&&e.jsx("div",{className:"wim-chat-message__avatar",children:l}),e.jsxs("div",{className:"wim-chat-message__content-wrapper",children:[a&&e.jsx("div",{className:"wim-chat-message__sender",children:a}),e.jsx("div",{className:"wim-chat-message__bubble",children:t}),n&&e.jsx("div",{className:"wim-chat-message__timestamp",children:n})]}),i&&s==="right"&&e.jsx("div",{className:"wim-chat-message__avatar",children:l})]}),_=p.forwardRef(({onSend:t,sendButtonLabel:s,showSendButton:c=!0,className:i,...l},n)=>{const{t:a}=g(["components"]),[m,h]=L.useState(""),d=s||a("chat_send_button"),v=()=>{m.trim()&&t&&(t(m),h(""))},T=f=>{f.key==="Enter"&&!f.shiftKey&&(f.preventDefault(),v())};return e.jsxs("div",{className:b("wim-chat-input",i),children:[e.jsx("input",{ref:n,type:"text",className:"wim-chat-input__field",value:m,onChange:f=>h(f.target.value),onKeyDown:T,placeholder:l.placeholder||a("chat_placeholder"),...l}),c&&e.jsx("button",{className:"wim-chat-input__send-button",onClick:v,disabled:!m.trim(),type:"button",children:d})]})});_.displayName="ChatInput";const o=({src:t,alt:s,fallback:c,size:i="medium",color:l="s18",className:n})=>{const{t:a}=g(["components"]),[m,h]=L.useState(!1),d=s||a("a11y_avatar");return e.jsx("div",{className:b("wim-chat-avatar",`wim-chat-avatar--${i}`,`wim-chat-avatar--${l}`,n),children:t&&!m?e.jsx("img",{src:t,alt:d,className:"wim-chat-avatar__image",onError:()=>h(!0)}):e.jsx("div",{className:"wim-chat-avatar__fallback",children:c||d.charAt(0).toUpperCase()})})};u.__docgenInfo={description:"",methods:[],displayName:"ChatContainer",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};y.__docgenInfo={description:"",methods:[],displayName:"ChatMessageList",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};r.__docgenInfo={description:"",methods:[],displayName:"ChatMessage",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},position:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"left"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"default" | "primary" | "secondary"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},showAvatar:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},avatar:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},timestamp:{required:!1,tsType:{name:"string"},description:""},senderName:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};_.__docgenInfo={description:"",methods:[],displayName:"ChatInput",props:{onSend:{required:!1,tsType:{name:"signature",type:"function",raw:"(message: string) => void",signature:{arguments:[{type:{name:"string"},name:"message"}],return:{name:"void"}}},description:""},sendButtonLabel:{required:!1,tsType:{name:"string"},description:""},showSendButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};o.__docgenInfo={description:"",methods:[],displayName:"ChatAvatar",props:{src:{required:!1,tsType:{name:"string"},description:""},alt:{required:!1,tsType:{name:"string"},description:""},fallback:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:'"s1" | "s3" | "s5" | "s7" | "s10" | "s12" | "s14" | "s16" | "s18" | "s20" | "s22" | "s24"',elements:[{name:"literal",value:'"s1"'},{name:"literal",value:'"s3"'},{name:"literal",value:'"s5"'},{name:"literal",value:'"s7"'},{name:"literal",value:'"s10"'},{name:"literal",value:'"s12"'},{name:"literal",value:'"s14"'},{name:"literal",value:'"s16"'},{name:"literal",value:'"s18"'},{name:"literal",value:'"s20"'},{name:"literal",value:'"s22"'},{name:"literal",value:'"s24"'}]},description:"",defaultValue:{value:'"s18"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const R={title:"Components/Data Structures/ChatUI",component:u,parameters:{layout:"fullscreen"}},x={render:()=>{const{t}=g(["docs","components"]);return e.jsx("div",{style:{height:"100vh"},children:e.jsxs(u,{children:[e.jsxs(y,{children:[e.jsx(r,{position:"left",showAvatar:!0,avatar:e.jsx(o,{fallback:"A",color:"s5"}),senderName:t("story_chat_alice"),timestamp:"10:30 AM",children:t("story_chat_msg_1")}),e.jsx(r,{position:"right",showAvatar:!0,avatar:e.jsx(o,{fallback:"Y"}),senderName:t("story_chat_you"),timestamp:"10:31 AM",children:t("story_chat_msg_2")}),e.jsx(r,{position:"left",showAvatar:!0,avatar:e.jsx(o,{fallback:"A",color:"s5"}),senderName:t("story_chat_alice"),timestamp:"10:32 AM",children:t("story_chat_msg_3")})]}),e.jsx(_,{placeholder:t("chat_placeholder")})]})})}},A={render:()=>{const{t}=g(["docs","components"]);return e.jsx("div",{style:{height:"100vh"},children:e.jsxs(u,{children:[e.jsxs(y,{children:[e.jsx(r,{position:"left",showAvatar:!0,avatar:e.jsx(o,{src:"https://i.pravatar.cc/150?img=1",alt:t("story_chat_john")}),senderName:t("story_chat_john"),timestamp:"09:15 AM",children:t("story_chat_msg_4")}),e.jsx(r,{position:"right",showAvatar:!0,avatar:e.jsx(o,{src:"https://i.pravatar.cc/150?img=5",alt:t("story_chat_you")}),senderName:t("story_chat_you"),timestamp:"09:16 AM",children:t("story_chat_msg_5")}),e.jsx(r,{position:"left",showAvatar:!0,avatar:e.jsx(o,{src:"https://i.pravatar.cc/150?img=3",alt:t("story_chat_sarah")}),senderName:t("story_chat_sarah"),timestamp:"09:17 AM",children:t("story_chat_msg_6")})]}),e.jsx(_,{placeholder:t("chat_placeholder")})]})})}},C={render:()=>{const{t}=g(["docs","components"]);return e.jsx("div",{style:{height:"100vh"},children:e.jsxs(u,{children:[e.jsxs(y,{children:[e.jsx(r,{position:"left",variant:"default",showAvatar:!0,avatar:e.jsx(o,{fallback:"S",color:"s18"}),senderName:t("story_chat_system"),timestamp:"08:00 AM",children:t("story_chat_msg_7")}),e.jsx(r,{position:"left",variant:"primary",showAvatar:!0,avatar:e.jsx(o,{fallback:"A",color:"s1"}),senderName:t("story_chat_admin"),timestamp:"08:01 AM",children:t("story_chat_msg_8")}),e.jsx(r,{position:"left",variant:"secondary",showAvatar:!0,avatar:e.jsx(o,{fallback:"B",color:"s12"}),senderName:t("story_chat_bot"),timestamp:"08:02 AM",children:t("story_chat_msg_9")})]}),e.jsx(_,{placeholder:t("chat_placeholder")})]})})}},w={render:()=>{const{t}=g(["docs","components"]),[s,c]=p.useState([{id:1,text:t("story_chat_msg_10"),position:"left",sender:t("story_chat_support"),timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}]),i=p.useRef(null),l=n=>{const a={id:s.length+1,text:n,position:"right",sender:t("story_chat_you"),timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};c([...s,a]),setTimeout(()=>{const m={id:s.length+2,text:t("story_chat_msg_11"),position:"left",sender:t("story_chat_support"),timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};c(h=>[...h,m])},1e3)};return p.useEffect(()=>{i.current&&(i.current.scrollTop=i.current.scrollHeight)},[s]),e.jsx("div",{style:{height:"100vh"},children:e.jsxs(u,{children:[e.jsx(y,{ref:i,children:s.map(n=>e.jsx(r,{position:n.position,showAvatar:!0,avatar:e.jsx(o,{fallback:n.sender.charAt(0),color:n.position==="left"?"s5":"s18"}),senderName:n.sender,timestamp:n.timestamp,children:n.text},n.id))}),e.jsx(_,{placeholder:t("chat_placeholder_interactive"),onSend:l})]})})}},M={render:()=>{const{t}=g(["docs","components"]);return e.jsx("div",{style:{height:"100vh"},children:e.jsxs(u,{children:[e.jsxs(y,{children:[e.jsx(r,{position:"left",showAvatar:!0,avatar:e.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"50%",background:"var(--wim-color-primary)",display:"flex",alignItems:"center",justifyContent:"center",color:"white"},children:e.jsx(S,{name:"UserIcon",size:"small"})}),senderName:t("story_chat_customer_support"),timestamp:"11:00 AM",children:t("story_chat_msg_12")}),e.jsx(r,{position:"right",showAvatar:!0,avatar:e.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"50%",background:"var(--wim-color-secondary)",display:"flex",alignItems:"center",justifyContent:"center",color:"white"},children:e.jsx(S,{name:"UserIcon",size:"small"})}),senderName:t("story_chat_you"),timestamp:"11:01 AM",children:t("story_chat_msg_13")})]}),e.jsx(_,{placeholder:t("chat_placeholder")})]})})}},j={render:()=>{const{t}=g(["docs","components"]);return e.jsx("div",{style:{height:"100vh"},children:e.jsxs(u,{children:[e.jsxs(y,{children:[e.jsx(r,{position:"left",showAvatar:!1,senderName:t("story_chat_alice"),timestamp:"10:30 AM",children:t("story_chat_msg_14")}),e.jsx(r,{position:"right",showAvatar:!1,senderName:t("story_chat_you"),timestamp:"10:31 AM",children:t("story_chat_msg_15")}),e.jsx(r,{position:"left",showAvatar:!1,senderName:t("story_chat_alice"),timestamp:"10:32 AM",children:t("story_chat_msg_16")})]}),e.jsx(_,{placeholder:t("chat_placeholder")})]})})}},I={render:()=>{const{t}=g(["docs","components"]);return e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center",padding:"24px"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"8px",fontSize:"14px",color:"#666"},children:t("story_chat_size_small")}),e.jsx(o,{size:"small",fallback:"S"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"8px",fontSize:"14px",color:"#666"},children:t("story_chat_size_medium")}),e.jsx(o,{size:"medium",fallback:"M"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"8px",fontSize:"14px",color:"#666"},children:t("story_chat_size_large")}),e.jsx(o,{size:"large",fallback:"L"})]})]})}},N={render:()=>{const[t,s]=p.useState([{id:1,text:"Hello! I am your AI Assistant. How can I help you today?",position:"left",sender:"AI Assistant",timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}]),[c,i]=p.useState(!1),l=p.useRef(null),n=async a=>{const m={id:Date.now(),text:a,position:"right",sender:"You",timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};s(d=>[...d,m]),i(!0);const h=Date.now()+1;s(d=>[...d,{id:h,text:"...",position:"left",sender:"AI Assistant",timestamp:"",isTyping:!0}]);try{await new Promise(v=>setTimeout(v,1500));const d=`This is a simulated AI response to: "${a}". In a real environment, you would uncomment the Gemini API code snippet above.`;s(v=>v.filter(T=>T.id!==h).concat({id:Date.now()+2,text:d,position:"left",sender:"AI Assistant",timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}))}catch(d){console.error("Failed to generate AI response:",d)}finally{i(!1)}};return p.useEffect(()=>{l.current&&(l.current.scrollTop=l.current.scrollHeight)},[t]),e.jsx("div",{style:{height:"100vh"},children:e.jsxs(u,{children:[e.jsx(y,{ref:l,children:t.map(a=>e.jsx(r,{position:a.position,showAvatar:!0,avatar:a.position==="left"?e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:40,height:40,borderRadius:"50%",background:"var(--wim-color-primary)",color:"white"},children:e.jsx(S,{name:"StarIcon",size:"small"})}):e.jsx(o,{fallback:"Y",color:"s18"}),senderName:a.sender,timestamp:a.timestamp,children:a.isTyping?e.jsxs("div",{style:{display:"flex",gap:"4px",alignItems:"center",height:"24px"},children:[e.jsx("span",{className:"typing-dot",style:{animation:"chat-typing 1.4s infinite ease-in-out both",animationDelay:"-0.32s"},children:"●"}),e.jsx("span",{className:"typing-dot",style:{animation:"chat-typing 1.4s infinite ease-in-out both",animationDelay:"-0.16s"},children:"●"}),e.jsx("span",{className:"typing-dot",style:{animation:"chat-typing 1.4s infinite ease-in-out both"},children:"●"}),e.jsx("style",{children:`
                      @keyframes chat-typing {
                        0%, 80%, 100% { opacity: 0; }
                        40% { opacity: 1; }
                      }
                    `})]}):a.text},a.id))}),e.jsx(_,{placeholder:"Ask the AI Assistant...",onSend:n,disabled:c})]})})}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation(["docs", "components"]);
    return <div style={{
      height: "100vh"
    }}>\r
        <ChatContainer>\r
          <ChatMessageList>\r
            <ChatMessage position="left" showAvatar avatar={<ChatAvatar fallback="A" color="s5" />} senderName={t("story_chat_alice")} timestamp="10:30 AM">\r
              {t("story_chat_msg_1")}\r
            </ChatMessage>\r
            <ChatMessage position="right" showAvatar avatar={<ChatAvatar fallback="Y" />} senderName={t("story_chat_you")} timestamp="10:31 AM">\r
              {t("story_chat_msg_2")}\r
            </ChatMessage>\r
            <ChatMessage position="left" showAvatar avatar={<ChatAvatar fallback="A" color="s5" />} senderName={t("story_chat_alice")} timestamp="10:32 AM">\r
              {t("story_chat_msg_3")}\r
            </ChatMessage>\r
          </ChatMessageList>\r
          <ChatInput placeholder={t("chat_placeholder")} />\r
        </ChatContainer>\r
      </div>;
  }
}`,...x.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation(["docs", "components"]);
    return <div style={{
      height: "100vh"
    }}>\r
        <ChatContainer>\r
          <ChatMessageList>\r
            <ChatMessage position="left" showAvatar avatar={<ChatAvatar src="https://i.pravatar.cc/150?img=1" alt={t("story_chat_john")} />} senderName={t("story_chat_john")} timestamp="09:15 AM">\r
              {t("story_chat_msg_4")}\r
            </ChatMessage>\r
            <ChatMessage position="right" showAvatar avatar={<ChatAvatar src="https://i.pravatar.cc/150?img=5" alt={t("story_chat_you")} />} senderName={t("story_chat_you")} timestamp="09:16 AM">\r
              {t("story_chat_msg_5")}\r
            </ChatMessage>\r
            <ChatMessage position="left" showAvatar avatar={<ChatAvatar src="https://i.pravatar.cc/150?img=3" alt={t("story_chat_sarah")} />} senderName={t("story_chat_sarah")} timestamp="09:17 AM">\r
              {t("story_chat_msg_6")}\r
            </ChatMessage>\r
          </ChatMessageList>\r
          <ChatInput placeholder={t("chat_placeholder")} />\r
        </ChatContainer>\r
      </div>;
  }
}`,...A.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation(["docs", "components"]);
    return <div style={{
      height: "100vh"
    }}>\r
        <ChatContainer>\r
          <ChatMessageList>\r
            <ChatMessage position="left" variant="default" showAvatar avatar={<ChatAvatar fallback="S" color="s18" />} senderName={t("story_chat_system")} timestamp="08:00 AM">\r
              {t("story_chat_msg_7")}\r
            </ChatMessage>\r
            <ChatMessage position="left" variant="primary" showAvatar avatar={<ChatAvatar fallback="A" color="s1" />} senderName={t("story_chat_admin")} timestamp="08:01 AM">\r
              {t("story_chat_msg_8")}\r
            </ChatMessage>\r
            <ChatMessage position="left" variant="secondary" showAvatar avatar={<ChatAvatar fallback="B" color="s12" />} senderName={t("story_chat_bot")} timestamp="08:02 AM">\r
              {t("story_chat_msg_9")}\r
            </ChatMessage>\r
          </ChatMessageList>\r
          <ChatInput placeholder={t("chat_placeholder")} />\r
        </ChatContainer>\r
      </div>;
  }
}`,...C.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation(["docs", "components"]);
    interface Message {
      id: number;
      text: string;
      position: "left" | "right";
      sender: string;
      timestamp: string;
    }
    const [messages, setMessages] = useState<Message[]>([{
      id: 1,
      text: t("story_chat_msg_10"),
      position: "left",
      sender: t("story_chat_support"),
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
        sender: t("story_chat_you"),
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
          text: t("story_chat_msg_11"),
          position: "left",
          sender: t("story_chat_support"),
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
    }}>\r
        <ChatContainer>\r
          <ChatMessageList ref={messageListRef}>\r
            {messages.map(msg => <ChatMessage key={msg.id} position={msg.position} showAvatar avatar={<ChatAvatar fallback={msg.sender.charAt(0)} color={msg.position === "left" ? "s5" : "s18"} />} senderName={msg.sender} timestamp={msg.timestamp}>\r
                {msg.text}\r
              </ChatMessage>)}\r
          </ChatMessageList>\r
          <ChatInput placeholder={t("chat_placeholder_interactive")} onSend={handleSend} />\r
        </ChatContainer>\r
      </div>;
  }
}`,...w.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation(["docs", "components"]);
    return <div style={{
      height: "100vh"
    }}>\r
        <ChatContainer>\r
          <ChatMessageList>\r
            <ChatMessage position="left" showAvatar avatar={<div style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "var(--wim-color-primary)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white"
          }}>\r
                  <Icon name="UserIcon" size="small" />\r
                </div>} senderName={t("story_chat_customer_support")} timestamp="11:00 AM">\r
              {t("story_chat_msg_12")}\r
            </ChatMessage>\r
            <ChatMessage position="right" showAvatar avatar={<div style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "var(--wim-color-secondary)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white"
          }}>\r
                  <Icon name="UserIcon" size="small" />\r
                </div>} senderName={t("story_chat_you")} timestamp="11:01 AM">\r
              {t("story_chat_msg_13")}\r
            </ChatMessage>\r
          </ChatMessageList>\r
          <ChatInput placeholder={t("chat_placeholder")} />\r
        </ChatContainer>\r
      </div>;
  }
}`,...M.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation(["docs", "components"]);
    return <div style={{
      height: "100vh"
    }}>\r
        <ChatContainer>\r
          <ChatMessageList>\r
            <ChatMessage position="left" showAvatar={false} senderName={t("story_chat_alice")} timestamp="10:30 AM">\r
              {t("story_chat_msg_14")}\r
            </ChatMessage>\r
            <ChatMessage position="right" showAvatar={false} senderName={t("story_chat_you")} timestamp="10:31 AM">\r
              {t("story_chat_msg_15")}\r
            </ChatMessage>\r
            <ChatMessage position="left" showAvatar={false} senderName={t("story_chat_alice")} timestamp="10:32 AM">\r
              {t("story_chat_msg_16")}\r
            </ChatMessage>\r
          </ChatMessageList>\r
          <ChatInput placeholder={t("chat_placeholder")} />\r
        </ChatContainer>\r
      </div>;
  }
}`,...j.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation(["docs", "components"]);
    return <div style={{
      display: "flex",
      gap: "24px",
      alignItems: "center",
      padding: "24px"
    }}>\r
        <div>\r
          <p style={{
          marginBottom: "8px",
          fontSize: "14px",
          color: "#666"
        }}>\r
            {t("story_chat_size_small")}\r
          </p>\r
          <ChatAvatar size="small" fallback="S" />\r
        </div>\r
        <div>\r
          <p style={{
          marginBottom: "8px",
          fontSize: "14px",
          color: "#666"
        }}>\r
            {t("story_chat_size_medium")}\r
          </p>\r
          <ChatAvatar size="medium" fallback="M" />\r
        </div>\r
        <div>\r
          <p style={{
          marginBottom: "8px",
          fontSize: "14px",
          color: "#666"
        }}>\r
            {t("story_chat_size_large")}\r
          </p>\r
          <ChatAvatar size="large" fallback="L" />\r
        </div>\r
      </div>;
  }
}`,...I.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
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
      text: "Hello! I am your AI Assistant. How can I help you today?",
      position: "left",
      sender: "AI Assistant",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      })
    }]);
    const [isLoading, setIsLoading] = useState(false);
    const messageListRef = useRef<HTMLDivElement>(null);
    const handleSend = async (message: string) => {
      const newMessage: Message = {
        id: Date.now(),
        text: message,
        position: "right",
        sender: "You",
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
        sender: "AI Assistant",
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
        const responseText = \`This is a simulated AI response to: "\${message}". In a real environment, you would uncomment the Gemini API code snippet above.\`;
        setMessages(prev => prev.filter(msg => msg.id !== typingMessageId).concat({
          id: Date.now() + 2,
          text: responseText,
          position: "left",
          sender: "AI Assistant",
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
    }}>\r
        <ChatContainer>\r
          <ChatMessageList ref={messageListRef}>\r
            {messages.map(msg => <ChatMessage key={msg.id} position={msg.position} showAvatar avatar={msg.position === "left" ? <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: "var(--wim-color-primary)",
            color: "white"
          }}>\r
                      <Icon name="StarIcon" size="small" />\r
                    </div> : <ChatAvatar fallback="Y" color="s18" />} senderName={msg.sender} timestamp={msg.timestamp}>\r
                {msg.isTyping ? <div style={{
              display: "flex",
              gap: "4px",
              alignItems: "center",
              height: "24px"
            }}>\r
                    <span className="typing-dot" style={{
                animation: "chat-typing 1.4s infinite ease-in-out both",
                animationDelay: "-0.32s"
              }}>\r
                      ●\r
                    </span>\r
                    <span className="typing-dot" style={{
                animation: "chat-typing 1.4s infinite ease-in-out both",
                animationDelay: "-0.16s"
              }}>\r
                      ●\r
                    </span>\r
                    <span className="typing-dot" style={{
                animation: "chat-typing 1.4s infinite ease-in-out both"
              }}>\r
                      ●\r
                    </span>\r
                    <style>{\`
                      @keyframes chat-typing {
                        0%, 80%, 100% { opacity: 0; }
                        40% { opacity: 1; }
                      }
                    \`}</style>\r
                  </div> : msg.text}\r
              </ChatMessage>)}\r
          </ChatMessageList>\r
          <ChatInput placeholder="Ask the AI Assistant..." onSend={handleSend} disabled={isLoading} />\r
        </ChatContainer>\r
      </div>;
  }
}`,...N.parameters?.docs?.source}}};const k=["Basic","WithAvatarImages","WithVariants","Interactive","WithIcons","NoAvatars","AvatarSizes","AiAssistantIntegration"],H=Object.freeze(Object.defineProperty({__proto__:null,AiAssistantIntegration:N,AvatarSizes:I,Basic:x,Interactive:w,NoAvatars:j,WithAvatarImages:A,WithIcons:M,WithVariants:C,__namedExportsOrder:k,default:R},Symbol.toStringTag,{value:"Module"}));export{I as A,x as B,H as C,w as I,j as N,A as W,C as a,M as b};
