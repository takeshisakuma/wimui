import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as S,r as A}from"./iframe-SL2HqV3D.js";import{c as w}from"./index-30w8ikAG.js";import{u as h}from"./useTranslation-ZF4WB21B.js";import{I as T}from"./Icon-LsAuz8T1.js";const d=({children:t,className:a})=>e.jsx("div",{className:w("wim-chat-container",a),children:t}),p=A.forwardRef(({children:t,className:a},o)=>e.jsx("div",{ref:o,className:w("wim-chat-message-list",a),children:t}));p.displayName="ChatMessageList";const r=({children:t,position:a="left",variant:o="default",showAvatar:i=!0,avatar:l,timestamp:s,senderName:m,className:c})=>e.jsxs("div",{className:w("wim-chat-message",`wim-chat-message--${a}`,`wim-chat-message--${o}`,{"wim-chat-message--has-avatar":i},c),children:[i&&a==="left"&&e.jsx("div",{className:"wim-chat-message__avatar",children:l}),e.jsxs("div",{className:"wim-chat-message__content-wrapper",children:[m&&e.jsx("div",{className:"wim-chat-message__sender",children:m}),e.jsx("div",{className:"wim-chat-message__bubble",children:t}),s&&e.jsx("div",{className:"wim-chat-message__timestamp",children:s})]}),i&&a==="right"&&e.jsx("div",{className:"wim-chat-message__avatar",children:l})]}),u=A.forwardRef(({onSend:t,sendButtonLabel:a,showSendButton:o=!0,className:i,...l},s)=>{const{t:m}=h(["components"]),[c,_]=S.useState(""),N=a||m("chat_send_button"),b=()=>{c.trim()&&t&&(t(c),_(""))},I=g=>{g.key==="Enter"&&!g.shiftKey&&(g.preventDefault(),b())};return e.jsxs("div",{className:w("wim-chat-input",i),children:[e.jsx("input",{ref:s,type:"text",className:"wim-chat-input__field",value:c,onChange:g=>_(g.target.value),onKeyDown:I,placeholder:l.placeholder||m("chat_placeholder"),...l}),o&&e.jsx("button",{className:"wim-chat-input__send-button",onClick:b,disabled:!c.trim(),type:"button",children:N})]})});u.displayName="ChatInput";const n=({src:t,alt:a,fallback:o,size:i="medium",color:l="s18",className:s})=>{const{t:m}=h(["components"]),[c,_]=S.useState(!1),N=a||m("a11y_avatar");return e.jsx("div",{className:w("wim-chat-avatar",`wim-chat-avatar--${i}`,`wim-chat-avatar--${l}`,s),children:t&&!c?e.jsx("img",{src:t,alt:N,className:"wim-chat-avatar__image",onError:()=>_(!0)}):e.jsx("div",{className:"wim-chat-avatar__fallback",children:o||N.charAt(0).toUpperCase()})})};d.__docgenInfo={description:"",methods:[],displayName:"ChatContainer",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};p.__docgenInfo={description:"",methods:[],displayName:"ChatMessageList",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};r.__docgenInfo={description:"",methods:[],displayName:"ChatMessage",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},position:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"left"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"default" | "primary" | "secondary"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},showAvatar:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},avatar:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},timestamp:{required:!1,tsType:{name:"string"},description:""},senderName:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};u.__docgenInfo={description:"",methods:[],displayName:"ChatInput",props:{onSend:{required:!1,tsType:{name:"signature",type:"function",raw:"(message: string) => void",signature:{arguments:[{type:{name:"string"},name:"message"}],return:{name:"void"}}},description:""},sendButtonLabel:{required:!1,tsType:{name:"string"},description:""},showSendButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};n.__docgenInfo={description:"",methods:[],displayName:"ChatAvatar",props:{src:{required:!1,tsType:{name:"string"},description:""},alt:{required:!1,tsType:{name:"string"},description:""},fallback:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:'"s1" | "s3" | "s5" | "s7" | "s10" | "s12" | "s14" | "s16" | "s18" | "s20" | "s22" | "s24"',elements:[{name:"literal",value:'"s1"'},{name:"literal",value:'"s3"'},{name:"literal",value:'"s5"'},{name:"literal",value:'"s7"'},{name:"literal",value:'"s10"'},{name:"literal",value:'"s12"'},{name:"literal",value:'"s14"'},{name:"literal",value:'"s16"'},{name:"literal",value:'"s18"'},{name:"literal",value:'"s20"'},{name:"literal",value:'"s22"'},{name:"literal",value:'"s24"'}]},description:"",defaultValue:{value:'"s18"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const L={title:"Components/Data Structures/ChatUI",component:d,parameters:{layout:"fullscreen"}},v={render:()=>{const{t}=h(["docs","components"]);return e.jsx("div",{style:{height:"100vh"},children:e.jsxs(d,{children:[e.jsxs(p,{children:[e.jsx(r,{position:"left",showAvatar:!0,avatar:e.jsx(n,{fallback:"A",color:"s5"}),senderName:t("story_chat_alice"),timestamp:"10:30 AM",children:t("story_chat_msg_1")}),e.jsx(r,{position:"right",showAvatar:!0,avatar:e.jsx(n,{fallback:"Y"}),senderName:t("story_chat_you"),timestamp:"10:31 AM",children:t("story_chat_msg_2")}),e.jsx(r,{position:"left",showAvatar:!0,avatar:e.jsx(n,{fallback:"A",color:"s5"}),senderName:t("story_chat_alice"),timestamp:"10:32 AM",children:t("story_chat_msg_3")})]}),e.jsx(u,{placeholder:t("chat_placeholder")})]})})}},y={render:()=>{const{t}=h(["docs","components"]);return e.jsx("div",{style:{height:"100vh"},children:e.jsxs(d,{children:[e.jsxs(p,{children:[e.jsx(r,{position:"left",showAvatar:!0,avatar:e.jsx(n,{src:"https://i.pravatar.cc/150?img=1",alt:t("story_chat_john")}),senderName:t("story_chat_john"),timestamp:"09:15 AM",children:t("story_chat_msg_4")}),e.jsx(r,{position:"right",showAvatar:!0,avatar:e.jsx(n,{src:"https://i.pravatar.cc/150?img=5",alt:t("story_chat_you")}),senderName:t("story_chat_you"),timestamp:"09:16 AM",children:t("story_chat_msg_5")}),e.jsx(r,{position:"left",showAvatar:!0,avatar:e.jsx(n,{src:"https://i.pravatar.cc/150?img=3",alt:t("story_chat_sarah")}),senderName:t("story_chat_sarah"),timestamp:"09:17 AM",children:t("story_chat_msg_6")})]}),e.jsx(u,{placeholder:t("chat_placeholder")})]})})}},f={render:()=>{const{t}=h(["docs","components"]);return e.jsx("div",{style:{height:"100vh"},children:e.jsxs(d,{children:[e.jsxs(p,{children:[e.jsx(r,{position:"left",variant:"default",showAvatar:!0,avatar:e.jsx(n,{fallback:"S",color:"s18"}),senderName:t("story_chat_system"),timestamp:"08:00 AM",children:t("story_chat_msg_7")}),e.jsx(r,{position:"left",variant:"primary",showAvatar:!0,avatar:e.jsx(n,{fallback:"A",color:"s1"}),senderName:t("story_chat_admin"),timestamp:"08:01 AM",children:t("story_chat_msg_8")}),e.jsx(r,{position:"left",variant:"secondary",showAvatar:!0,avatar:e.jsx(n,{fallback:"B",color:"s12"}),senderName:t("story_chat_bot"),timestamp:"08:02 AM",children:t("story_chat_msg_9")})]}),e.jsx(u,{placeholder:t("chat_placeholder")})]})})}},x={render:()=>{const{t}=h(["docs","components"]),[a,o]=A.useState([{id:1,text:t("story_chat_msg_10"),position:"left",sender:t("story_chat_support"),timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}]),i=A.useRef(null),l=s=>{const m={id:a.length+1,text:s,position:"right",sender:t("story_chat_you"),timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};o([...a,m]),setTimeout(()=>{const c={id:a.length+2,text:t("story_chat_msg_11"),position:"left",sender:t("story_chat_support"),timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};o(_=>[..._,c])},1e3)};return A.useEffect(()=>{i.current&&(i.current.scrollTop=i.current.scrollHeight)},[a]),e.jsx("div",{style:{height:"100vh"},children:e.jsxs(d,{children:[e.jsx(p,{ref:i,children:a.map(s=>e.jsx(r,{position:s.position,showAvatar:!0,avatar:e.jsx(n,{fallback:s.sender.charAt(0),color:s.position==="left"?"s5":"s18"}),senderName:s.sender,timestamp:s.timestamp,children:s.text},s.id))}),e.jsx(u,{placeholder:t("chat_placeholder_interactive"),onSend:l})]})})}},C={render:()=>{const{t}=h(["docs","components"]);return e.jsx("div",{style:{height:"100vh"},children:e.jsxs(d,{children:[e.jsxs(p,{children:[e.jsx(r,{position:"left",showAvatar:!0,avatar:e.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"50%",background:"var(--wim-color-primary)",display:"flex",alignItems:"center",justifyContent:"center",color:"white"},children:e.jsx(T,{name:"UserIcon",size:"small"})}),senderName:t("story_chat_customer_support"),timestamp:"11:00 AM",children:t("story_chat_msg_12")}),e.jsx(r,{position:"right",showAvatar:!0,avatar:e.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"50%",background:"var(--wim-color-secondary)",display:"flex",alignItems:"center",justifyContent:"center",color:"white"},children:e.jsx(T,{name:"UserIcon",size:"small"})}),senderName:t("story_chat_you"),timestamp:"11:01 AM",children:t("story_chat_msg_13")})]}),e.jsx(u,{placeholder:t("chat_placeholder")})]})})}},j={render:()=>{const{t}=h(["docs","components"]);return e.jsx("div",{style:{height:"100vh"},children:e.jsxs(d,{children:[e.jsxs(p,{children:[e.jsx(r,{position:"left",showAvatar:!1,senderName:t("story_chat_alice"),timestamp:"10:30 AM",children:t("story_chat_msg_14")}),e.jsx(r,{position:"right",showAvatar:!1,senderName:t("story_chat_you"),timestamp:"10:31 AM",children:t("story_chat_msg_15")}),e.jsx(r,{position:"left",showAvatar:!1,senderName:t("story_chat_alice"),timestamp:"10:32 AM",children:t("story_chat_msg_16")})]}),e.jsx(u,{placeholder:t("chat_placeholder")})]})})}},M={render:()=>{const{t}=h(["docs","components"]);return e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center",padding:"24px"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"8px",fontSize:"14px",color:"#666"},children:t("story_chat_size_small")}),e.jsx(n,{size:"small",fallback:"S"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"8px",fontSize:"14px",color:"#666"},children:t("story_chat_size_medium")}),e.jsx(n,{size:"medium",fallback:"M"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"8px",fontSize:"14px",color:"#666"},children:t("story_chat_size_large")}),e.jsx(n,{size:"large",fallback:"L"})]})]})}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}};const R=["Basic","WithAvatarImages","WithVariants","Interactive","WithIcons","NoAvatars","AvatarSizes"],E=Object.freeze(Object.defineProperty({__proto__:null,AvatarSizes:M,Basic:v,Interactive:x,NoAvatars:j,WithAvatarImages:y,WithIcons:C,WithVariants:f,__namedExportsOrder:R,default:L},Symbol.toStringTag,{value:"Module"}));export{M as A,v as B,E as C,x as I,j as N,y as W,f as a,C as b};
