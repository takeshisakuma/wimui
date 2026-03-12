import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as p,R as L}from"./iframe-DmIcUQyH.js";import{c as T}from"./index-B6hjtVy6.js";import{u as h}from"./useTranslation-CTezHt8M.js";import{I as S}from"./Icon-DKMNswuj.js";const g=({children:t,className:n})=>e.jsx("div",{className:T("wim-chat-container",n),children:t}),u=p.forwardRef(({children:t,className:n},o)=>e.jsx("div",{ref:o,className:T("wim-chat-message-list",n),children:t}));u.displayName="ChatMessageList";const r=({children:t,position:n="left",variant:o="default",showAvatar:c=!0,avatar:l,timestamp:s,senderName:m,className:a})=>e.jsxs("div",{className:T("wim-chat-message",`wim-chat-message--${n}`,`wim-chat-message--${o}`,{"wim-chat-message--has-avatar":c},a),children:[c&&n==="left"&&e.jsx("div",{className:"wim-chat-message__avatar",children:l}),e.jsxs("div",{className:"wim-chat-message__content-wrapper",children:[m&&e.jsx("div",{className:"wim-chat-message__sender",children:m}),e.jsx("div",{className:"wim-chat-message__bubble",children:t}),s&&e.jsx("div",{className:"wim-chat-message__timestamp",children:s})]}),c&&n==="right"&&e.jsx("div",{className:"wim-chat-message__avatar",children:l})]}),y=p.forwardRef(({onSend:t,sendButtonLabel:n,showSendButton:o=!0,className:c,...l},s)=>{const{t:m}=h(["components"]),[a,_]=L.useState(""),v=n||m("chat_send_button"),d=()=>{a.trim()&&t&&(t(a),_(""))},x=f=>{f.key==="Enter"&&!f.shiftKey&&(f.preventDefault(),d())};return e.jsxs("div",{className:T("wim-chat-input",c),children:[e.jsx("input",{ref:s,type:"text",className:"wim-chat-input__field",value:a,onChange:f=>_(f.target.value),onKeyDown:x,placeholder:l.placeholder||m("chat_placeholder"),...l}),o&&e.jsx("button",{className:"wim-chat-input__send-button",onClick:d,disabled:!a.trim(),type:"button",children:v})]})});y.displayName="ChatInput";const i=({src:t,alt:n,fallback:o,size:c="medium",color:l="s18",className:s})=>{const{t:m}=h(["components"]),[a,_]=L.useState(!1),v=n||m("a11y_avatar");return e.jsx("div",{className:T("wim-chat-avatar",`wim-chat-avatar--${c}`,`wim-chat-avatar--${l}`,s),children:t&&!a?e.jsx("img",{src:t,alt:v,className:"wim-chat-avatar__image",onError:()=>_(!0)}):e.jsx("div",{className:"wim-chat-avatar__fallback",children:o||v.charAt(0).toUpperCase()})})};g.__docgenInfo={description:"",methods:[],displayName:"ChatContainer",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};u.__docgenInfo={description:"",methods:[],displayName:"ChatMessageList",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};r.__docgenInfo={description:"",methods:[],displayName:"ChatMessage",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},position:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"left"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"default" | "primary" | "secondary"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},showAvatar:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},avatar:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},timestamp:{required:!1,tsType:{name:"string"},description:""},senderName:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};y.__docgenInfo={description:"",methods:[],displayName:"ChatInput",props:{onSend:{required:!1,tsType:{name:"signature",type:"function",raw:"(message: string) => void",signature:{arguments:[{type:{name:"string"},name:"message"}],return:{name:"void"}}},description:""},sendButtonLabel:{required:!1,tsType:{name:"string"},description:""},showSendButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};i.__docgenInfo={description:"",methods:[],displayName:"ChatAvatar",props:{src:{required:!1,tsType:{name:"string"},description:""},alt:{required:!1,tsType:{name:"string"},description:""},fallback:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:'"s1" | "s3" | "s5" | "s7" | "s10" | "s12" | "s14" | "s16" | "s18" | "s20" | "s22" | "s24"',elements:[{name:"literal",value:'"s1"'},{name:"literal",value:'"s3"'},{name:"literal",value:'"s5"'},{name:"literal",value:'"s7"'},{name:"literal",value:'"s10"'},{name:"literal",value:'"s12"'},{name:"literal",value:'"s14"'},{name:"literal",value:'"s16"'},{name:"literal",value:'"s18"'},{name:"literal",value:'"s20"'},{name:"literal",value:'"s22"'},{name:"literal",value:'"s24"'}]},description:"",defaultValue:{value:'"s18"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const R={title:"Components/Data Structures/ChatUI",component:g,parameters:{layout:"fullscreen"}},A={render:()=>{const{t}=h(["docs","components"]);return e.jsx("div",{style:{height:"100vh"},children:e.jsxs(g,{children:[e.jsxs(u,{children:[e.jsx(r,{position:"left",showAvatar:!0,avatar:e.jsx(i,{fallback:"A",color:"s5"}),senderName:t("story_chat_alice"),timestamp:"10:30 AM",children:t("story_chat_msg_1")}),e.jsx(r,{position:"right",showAvatar:!0,avatar:e.jsx(i,{fallback:"Y"}),senderName:t("story_chat_you"),timestamp:"10:31 AM",children:t("story_chat_msg_2")}),e.jsx(r,{position:"left",showAvatar:!0,avatar:e.jsx(i,{fallback:"A",color:"s5"}),senderName:t("story_chat_alice"),timestamp:"10:32 AM",children:t("story_chat_msg_3")})]}),e.jsx(y,{placeholder:t("chat_placeholder")})]})})}},C={render:()=>{const{t}=h(["docs","components"]);return e.jsx("div",{style:{height:"100vh"},children:e.jsxs(g,{children:[e.jsxs(u,{children:[e.jsx(r,{position:"left",showAvatar:!0,avatar:e.jsx(i,{src:"https://i.pravatar.cc/150?img=1",alt:t("story_chat_john")}),senderName:t("story_chat_john"),timestamp:"09:15 AM",children:t("story_chat_msg_4")}),e.jsx(r,{position:"right",showAvatar:!0,avatar:e.jsx(i,{src:"https://i.pravatar.cc/150?img=5",alt:t("story_chat_you")}),senderName:t("story_chat_you"),timestamp:"09:16 AM",children:t("story_chat_msg_5")}),e.jsx(r,{position:"left",showAvatar:!0,avatar:e.jsx(i,{src:"https://i.pravatar.cc/150?img=3",alt:t("story_chat_sarah")}),senderName:t("story_chat_sarah"),timestamp:"09:17 AM",children:t("story_chat_msg_6")})]}),e.jsx(y,{placeholder:t("chat_placeholder")})]})})}},w={render:()=>{const{t}=h(["docs","components"]);return e.jsx("div",{style:{height:"100vh"},children:e.jsxs(g,{children:[e.jsxs(u,{children:[e.jsx(r,{position:"left",variant:"default",showAvatar:!0,avatar:e.jsx(i,{fallback:"S",color:"s18"}),senderName:t("story_chat_system"),timestamp:"08:00 AM",children:t("story_chat_msg_7")}),e.jsx(r,{position:"left",variant:"primary",showAvatar:!0,avatar:e.jsx(i,{fallback:"A",color:"s1"}),senderName:t("story_chat_admin"),timestamp:"08:01 AM",children:t("story_chat_msg_8")}),e.jsx(r,{position:"left",variant:"secondary",showAvatar:!0,avatar:e.jsx(i,{fallback:"B",color:"s12"}),senderName:t("story_chat_bot"),timestamp:"08:02 AM",children:t("story_chat_msg_9")})]}),e.jsx(y,{placeholder:t("chat_placeholder")})]})})}},M={render:()=>{const{t}=h(["docs","components"]),[n,o]=p.useState([{id:1,text:t("story_chat_msg_10"),position:"left",sender:t("story_chat_support"),timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}]),c=p.useRef(null),l=s=>{const m={id:n.length+1,text:s,position:"right",sender:t("story_chat_you"),timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};o([...n,m]),setTimeout(()=>{const a={id:n.length+2,text:t("story_chat_msg_11"),position:"left",sender:t("story_chat_support"),timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};o(_=>[..._,a])},1e3)};return p.useEffect(()=>{c.current&&(c.current.scrollTop=c.current.scrollHeight)},[n]),e.jsx("div",{style:{height:"100vh"},children:e.jsxs(g,{children:[e.jsx(u,{ref:c,children:n.map(s=>e.jsx(r,{position:s.position,showAvatar:!0,avatar:e.jsx(i,{fallback:s.sender.charAt(0),color:s.position==="left"?"s5":"s18"}),senderName:s.sender,timestamp:s.timestamp,children:s.text},s.id))}),e.jsx(y,{placeholder:t("chat_placeholder_interactive"),onSend:l})]})})}},j={render:()=>{const{t}=h(["docs","components"]);return e.jsx("div",{style:{height:"100vh"},children:e.jsxs(g,{children:[e.jsxs(u,{children:[e.jsx(r,{position:"left",showAvatar:!0,avatar:e.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"50%",background:"var(--wim-color-primary)",display:"flex",alignItems:"center",justifyContent:"center",color:"white"},children:e.jsx(S,{name:"UserIcon",size:"small"})}),senderName:t("story_chat_customer_support"),timestamp:"11:00 AM",children:t("story_chat_msg_12")}),e.jsx(r,{position:"right",showAvatar:!0,avatar:e.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"50%",background:"var(--wim-color-secondary)",display:"flex",alignItems:"center",justifyContent:"center",color:"white"},children:e.jsx(S,{name:"UserIcon",size:"small"})}),senderName:t("story_chat_you"),timestamp:"11:01 AM",children:t("story_chat_msg_13")})]}),e.jsx(y,{placeholder:t("chat_placeholder")})]})})}},I={render:()=>{const{t}=h(["docs","components"]);return e.jsx("div",{style:{height:"100vh"},children:e.jsxs(g,{children:[e.jsxs(u,{children:[e.jsx(r,{position:"left",showAvatar:!1,senderName:t("story_chat_alice"),timestamp:"10:30 AM",children:t("story_chat_msg_14")}),e.jsx(r,{position:"right",showAvatar:!1,senderName:t("story_chat_you"),timestamp:"10:31 AM",children:t("story_chat_msg_15")}),e.jsx(r,{position:"left",showAvatar:!1,senderName:t("story_chat_alice"),timestamp:"10:32 AM",children:t("story_chat_msg_16")})]}),e.jsx(y,{placeholder:t("chat_placeholder")})]})})}},N={render:()=>{const{t}=h(["docs","components"]);return e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center",padding:"24px"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"8px",fontSize:"14px",color:"#666"},children:t("story_chat_size_small")}),e.jsx(i,{size:"small",fallback:"S"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"8px",fontSize:"14px",color:"#666"},children:t("story_chat_size_medium")}),e.jsx(i,{size:"medium",fallback:"M"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"8px",fontSize:"14px",color:"#666"},children:t("story_chat_size_large")}),e.jsx(i,{size:"large",fallback:"L"})]})]})}},b={render:()=>{const{t}=h(["docs","components"]),[n,o]=p.useState([{id:1,text:"Hello! I am your AI Assistant. How can I help you today?",position:"left",sender:"AI Assistant",timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}]),[c,l]=p.useState(!1),s=p.useRef(null),m=async a=>{const _={id:Date.now(),text:a,position:"right",sender:"You",timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};o(d=>[...d,_]),l(!0);const v=Date.now()+1;o(d=>[...d,{id:v,text:"...",position:"left",sender:"AI Assistant",timestamp:"",isTyping:!0}]);try{await new Promise(x=>setTimeout(x,1500));const d=`This is a simulated AI response to: "${a}". In a real environment, you would uncomment the Gemini API code snippet above.`;o(x=>x.filter(f=>f.id!==v).concat({id:Date.now()+2,text:d,position:"left",sender:"AI Assistant",timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}))}catch(d){console.error("Failed to generate AI response:",d)}finally{l(!1)}};return p.useEffect(()=>{s.current&&(s.current.scrollTop=s.current.scrollHeight)},[n]),e.jsx("div",{style:{height:"100vh"},children:e.jsxs(g,{children:[e.jsx(u,{ref:s,children:n.map(a=>e.jsx(r,{position:a.position,showAvatar:!0,avatar:a.position==="left"?e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:40,height:40,borderRadius:"50%",background:"var(--wim-color-primary)",color:"white"},children:e.jsx(S,{name:"StarIcon",size:"small"})}):e.jsx(i,{fallback:"Y",color:"s18"}),senderName:a.sender,timestamp:a.timestamp,children:a.isTyping?e.jsxs("div",{style:{display:"flex",gap:"4px",alignItems:"center",height:"24px"},children:[e.jsx("span",{className:"typing-dot",style:{animation:"chat-typing 1.4s infinite ease-in-out both",animationDelay:"-0.32s"},children:"●"}),e.jsx("span",{className:"typing-dot",style:{animation:"chat-typing 1.4s infinite ease-in-out both",animationDelay:"-0.16s"},children:"●"}),e.jsx("span",{className:"typing-dot",style:{animation:"chat-typing 1.4s infinite ease-in-out both"},children:"●"}),e.jsx("style",{children:`
                      @keyframes chat-typing {
                        0%, 80%, 100% { opacity: 0; }
                        40% { opacity: 1; }
                      }
                    `})]}):a.text},a.id))}),e.jsx(y,{placeholder:"Ask the AI Assistant...",onSend:m,disabled:c})]})})}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};const k=["Basic","WithAvatarImages","WithVariants","Interactive","WithIcons","NoAvatars","AvatarSizes","AiAssistantIntegration"],H=Object.freeze(Object.defineProperty({__proto__:null,AiAssistantIntegration:b,AvatarSizes:N,Basic:A,Interactive:M,NoAvatars:I,WithAvatarImages:C,WithIcons:j,WithVariants:w,__namedExportsOrder:k,default:R},Symbol.toStringTag,{value:"Module"}));export{N as A,A as B,H as C,M as I,I as N,C as W,w as a,j as b};
