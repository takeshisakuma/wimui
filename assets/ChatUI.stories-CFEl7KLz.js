import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as S,r as w}from"./iframe-RqRUvN2f.js";import{c as M}from"./index-B1nuKDx0.js";import{I as N}from"./Icon-DEW6Teyt.js";const c=({children:a,className:r})=>e.jsx("div",{className:M("wim-chat-container",r),children:a}),h=w.forwardRef(({children:a,className:r},i)=>e.jsx("div",{ref:i,className:M("wim-chat-message-list",r),children:a}));h.displayName="ChatMessageList";const t=({children:a,position:r="left",variant:i="default",showAvatar:l=!0,avatar:s,timestamp:m,senderName:o,className:d})=>e.jsxs("div",{className:M("wim-chat-message",`wim-chat-message--${r}`,`wim-chat-message--${i}`,{"wim-chat-message--has-avatar":l},d),children:[l&&r==="left"&&e.jsx("div",{className:"wim-chat-message__avatar",children:s}),e.jsxs("div",{className:"wim-chat-message__content-wrapper",children:[o&&e.jsx("div",{className:"wim-chat-message__sender",children:o}),e.jsx("div",{className:"wim-chat-message__bubble",children:a}),m&&e.jsx("div",{className:"wim-chat-message__timestamp",children:m})]}),l&&r==="right"&&e.jsx("div",{className:"wim-chat-message__avatar",children:s})]}),p=w.forwardRef(({onSend:a,sendButtonLabel:r="Send",showSendButton:i=!0,className:l,...s},m)=>{const[o,d]=S.useState(""),j=()=>{o.trim()&&a&&(a(o),d(""))},T=u=>{u.key==="Enter"&&!u.shiftKey&&(u.preventDefault(),j())};return e.jsxs("div",{className:M("wim-chat-input",l),children:[e.jsx("input",{ref:m,type:"text",className:"wim-chat-input__field",value:o,onChange:u=>d(u.target.value),onKeyDown:T,...s}),i&&e.jsx("button",{className:"wim-chat-input__send-button",onClick:j,disabled:!o.trim(),type:"button",children:r})]})});p.displayName="ChatInput";const n=({src:a,alt:r="Avatar",fallback:i,size:l="medium",color:s="s18",className:m})=>{const[o,d]=S.useState(!1);return e.jsx("div",{className:M("wim-chat-avatar",`wim-chat-avatar--${l}`,`wim-chat-avatar--${s}`,m),children:a&&!o?e.jsx("img",{src:a,alt:r,className:"wim-chat-avatar__image",onError:()=>d(!0)}):e.jsx("div",{className:"wim-chat-avatar__fallback",children:i||r.charAt(0).toUpperCase()})})};c.__docgenInfo={description:"",methods:[],displayName:"ChatContainer",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};h.__docgenInfo={description:"",methods:[],displayName:"ChatMessageList",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};t.__docgenInfo={description:"",methods:[],displayName:"ChatMessage",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},position:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"left"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"default" | "primary" | "secondary"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},showAvatar:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},avatar:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},timestamp:{required:!1,tsType:{name:"string"},description:""},senderName:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};p.__docgenInfo={description:"",methods:[],displayName:"ChatInput",props:{onSend:{required:!1,tsType:{name:"signature",type:"function",raw:"(message: string) => void",signature:{arguments:[{type:{name:"string"},name:"message"}],return:{name:"void"}}},description:""},sendButtonLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Send"',computed:!1}},showSendButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};n.__docgenInfo={description:"",methods:[],displayName:"ChatAvatar",props:{src:{required:!1,tsType:{name:"string"},description:""},alt:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Avatar"',computed:!1}},fallback:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:'"s1" | "s3" | "s5" | "s7" | "s10" | "s12" | "s14" | "s16" | "s18" | "s20" | "s22" | "s24"',elements:[{name:"literal",value:'"s1"'},{name:"literal",value:'"s3"'},{name:"literal",value:'"s5"'},{name:"literal",value:'"s7"'},{name:"literal",value:'"s10"'},{name:"literal",value:'"s12"'},{name:"literal",value:'"s14"'},{name:"literal",value:'"s16"'},{name:"literal",value:'"s18"'},{name:"literal",value:'"s20"'},{name:"literal",value:'"s22"'},{name:"literal",value:'"s24"'}]},description:"",defaultValue:{value:'"s18"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const I={title:"Components/Data Structures/ChatUI",component:c,parameters:{layout:"fullscreen"}},g={render:()=>e.jsx("div",{style:{height:"100vh"},children:e.jsxs(c,{children:[e.jsxs(h,{children:[e.jsx(t,{position:"left",showAvatar:!0,avatar:e.jsx(n,{fallback:"A",color:"s5"}),senderName:"Alice",timestamp:"10:30 AM",children:"Hey! How are you doing?"}),e.jsx(t,{position:"right",showAvatar:!0,avatar:e.jsx(n,{fallback:"Y"}),senderName:"You",timestamp:"10:31 AM",children:"I'm doing great! Thanks for asking."}),e.jsx(t,{position:"left",showAvatar:!0,avatar:e.jsx(n,{fallback:"A",color:"s5"}),senderName:"Alice",timestamp:"10:32 AM",children:"That's wonderful to hear!"})]}),e.jsx(p,{placeholder:"Type a message..."})]})})},v={render:()=>e.jsx("div",{style:{height:"100vh"},children:e.jsxs(c,{children:[e.jsxs(h,{children:[e.jsx(t,{position:"left",showAvatar:!0,avatar:e.jsx(n,{src:"https://i.pravatar.cc/150?img=1",alt:"User 1"}),senderName:"John Smith",timestamp:"09:15 AM",children:"Good morning everyone!"}),e.jsx(t,{position:"right",showAvatar:!0,avatar:e.jsx(n,{src:"https://i.pravatar.cc/150?img=5",alt:"You"}),senderName:"You",timestamp:"09:16 AM",children:"Good morning John!"}),e.jsx(t,{position:"left",showAvatar:!0,avatar:e.jsx(n,{src:"https://i.pravatar.cc/150?img=3",alt:"User 2"}),senderName:"Sarah Johnson",timestamp:"09:17 AM",children:"Morning! Ready for the meeting?"})]}),e.jsx(p,{placeholder:"Type a message..."})]})})},f={render:()=>e.jsx("div",{style:{height:"100vh"},children:e.jsxs(c,{children:[e.jsxs(h,{children:[e.jsx(t,{position:"left",variant:"default",showAvatar:!0,avatar:e.jsx(n,{fallback:"S",color:"s18"}),senderName:"System",timestamp:"08:00 AM",children:"Welcome to the chat!"}),e.jsx(t,{position:"left",variant:"primary",showAvatar:!0,avatar:e.jsx(n,{fallback:"A",color:"s1"}),senderName:"Admin",timestamp:"08:01 AM",children:"This is an important announcement."}),e.jsx(t,{position:"left",variant:"secondary",showAvatar:!0,avatar:e.jsx(n,{fallback:"B",color:"s12"}),senderName:"Bot",timestamp:"08:02 AM",children:"I'm here to help you!"})]}),e.jsx(p,{placeholder:"Type a message..."})]})})},y={render:()=>{const[a,r]=w.useState([{id:1,text:"Hello! How can I help you today?",position:"left",sender:"Support",timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}]),i=w.useRef(null),l=s=>{const m={id:a.length+1,text:s,position:"right",sender:"You",timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};r([...a,m]),setTimeout(()=>{const o={id:a.length+2,text:"Thanks for your message! I'll get back to you shortly.",position:"left",sender:"Support",timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};r(d=>[...d,o])},1e3)};return w.useEffect(()=>{i.current&&(i.current.scrollTop=i.current.scrollHeight)},[a]),e.jsx("div",{style:{height:"100vh"},children:e.jsxs(c,{children:[e.jsx(h,{ref:i,children:a.map(s=>e.jsx(t,{position:s.position,showAvatar:!0,avatar:e.jsx(n,{fallback:s.sender.charAt(0),color:s.position==="left"?"s5":"s18"}),senderName:s.sender,timestamp:s.timestamp,children:s.text},s.id))}),e.jsx(p,{placeholder:"Type your message...",onSend:l})]})})}},x={render:()=>e.jsx("div",{style:{height:"100vh"},children:e.jsxs(c,{children:[e.jsxs(h,{children:[e.jsx(t,{position:"left",showAvatar:!0,avatar:e.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"50%",background:"var(--wim-color-primary)",display:"flex",alignItems:"center",justifyContent:"center",color:"white"},children:e.jsx(N,{name:"UserIcon",size:"small"})}),senderName:"Customer Support",timestamp:"11:00 AM",children:"How can I assist you today?"}),e.jsx(t,{position:"right",showAvatar:!0,avatar:e.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"50%",background:"var(--wim-color-secondary)",display:"flex",alignItems:"center",justifyContent:"center",color:"white"},children:e.jsx(N,{name:"UserIcon",size:"small"})}),senderName:"You",timestamp:"11:01 AM",children:"I need help with my order."})]}),e.jsx(p,{placeholder:"Type a message..."})]})})},C={render:()=>e.jsx("div",{style:{height:"100vh"},children:e.jsxs(c,{children:[e.jsxs(h,{children:[e.jsx(t,{position:"left",showAvatar:!1,senderName:"Alice",timestamp:"10:30 AM",children:"This message has no avatar"}),e.jsx(t,{position:"right",showAvatar:!1,senderName:"You",timestamp:"10:31 AM",children:"Neither does this one"}),e.jsx(t,{position:"left",showAvatar:!1,senderName:"Alice",timestamp:"10:32 AM",children:"Clean and simple!"})]}),e.jsx(p,{placeholder:"Type a message..."})]})})},A={render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center",padding:"24px"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"8px",fontSize:"14px",color:"#666"},children:"Small"}),e.jsx(n,{size:"small",fallback:"S"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"8px",fontSize:"14px",color:"#666"},children:"Medium"}),e.jsx(n,{size:"medium",fallback:"M"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"8px",fontSize:"14px",color:"#666"},children:"Large"}),e.jsx(n,{size:"large",fallback:"L"})]})]})};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "100vh"
  }}>\r
      <ChatContainer>\r
        <ChatMessageList>\r
          <ChatMessage position="left" showAvatar avatar={<ChatAvatar fallback="A" color="s5" />} senderName="Alice" timestamp="10:30 AM">\r
            Hey! How are you doing?\r
          </ChatMessage>\r
          <ChatMessage position="right" showAvatar avatar={<ChatAvatar fallback="Y" />} senderName="You" timestamp="10:31 AM">\r
            I'm doing great! Thanks for asking.\r
          </ChatMessage>\r
          <ChatMessage position="left" showAvatar avatar={<ChatAvatar fallback="A" color="s5" />} senderName="Alice" timestamp="10:32 AM">\r
            That's wonderful to hear!\r
          </ChatMessage>\r
        </ChatMessageList>\r
        <ChatInput placeholder="Type a message..." />\r
      </ChatContainer>\r
    </div>
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "100vh"
  }}>\r
      <ChatContainer>\r
        <ChatMessageList>\r
          <ChatMessage position="left" showAvatar avatar={<ChatAvatar src="https://i.pravatar.cc/150?img=1" alt="User 1" />} senderName="John Smith" timestamp="09:15 AM">\r
            Good morning everyone!\r
          </ChatMessage>\r
          <ChatMessage position="right" showAvatar avatar={<ChatAvatar src="https://i.pravatar.cc/150?img=5" alt="You" />} senderName="You" timestamp="09:16 AM">\r
            Good morning John!\r
          </ChatMessage>\r
          <ChatMessage position="left" showAvatar avatar={<ChatAvatar src="https://i.pravatar.cc/150?img=3" alt="User 2" />} senderName="Sarah Johnson" timestamp="09:17 AM">\r
            Morning! Ready for the meeting?\r
          </ChatMessage>\r
        </ChatMessageList>\r
        <ChatInput placeholder="Type a message..." />\r
      </ChatContainer>\r
    </div>
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "100vh"
  }}>\r
      <ChatContainer>\r
        <ChatMessageList>\r
          <ChatMessage position="left" variant="default" showAvatar avatar={<ChatAvatar fallback="S" color="s18" />} senderName="System" timestamp="08:00 AM">\r
            Welcome to the chat!\r
          </ChatMessage>\r
          <ChatMessage position="left" variant="primary" showAvatar avatar={<ChatAvatar fallback="A" color="s1" />} senderName="Admin" timestamp="08:01 AM">\r
            This is an important announcement.\r
          </ChatMessage>\r
          <ChatMessage position="left" variant="secondary" showAvatar avatar={<ChatAvatar fallback="B" color="s12" />} senderName="Bot" timestamp="08:02 AM">\r
            I'm here to help you!\r
          </ChatMessage>\r
        </ChatMessageList>\r
        <ChatInput placeholder="Type a message..." />\r
      </ChatContainer>\r
    </div>
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    interface Message {
      id: number;
      text: string;
      position: "left" | "right";
      sender: string;
      timestamp: string;
    }
    const [messages, setMessages] = useState<Message[]>([{
      id: 1,
      text: "Hello! How can I help you today?",
      position: "left",
      sender: "Support",
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
        sender: "You",
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
          text: "Thanks for your message! I'll get back to you shortly.",
          position: "left",
          sender: "Support",
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
          <ChatInput placeholder="Type your message..." onSend={handleSend} />\r
        </ChatContainer>\r
      </div>;
  }
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
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
              </div>} senderName="Customer Support" timestamp="11:00 AM">\r
            How can I assist you today?\r
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
              </div>} senderName="You" timestamp="11:01 AM">\r
            I need help with my order.\r
          </ChatMessage>\r
        </ChatMessageList>\r
        <ChatInput placeholder="Type a message..." />\r
      </ChatContainer>\r
    </div>
}`,...x.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "100vh"
  }}>\r
      <ChatContainer>\r
        <ChatMessageList>\r
          <ChatMessage position="left" showAvatar={false} senderName="Alice" timestamp="10:30 AM">\r
            This message has no avatar\r
          </ChatMessage>\r
          <ChatMessage position="right" showAvatar={false} senderName="You" timestamp="10:31 AM">\r
            Neither does this one\r
          </ChatMessage>\r
          <ChatMessage position="left" showAvatar={false} senderName="Alice" timestamp="10:32 AM">\r
            Clean and simple!\r
          </ChatMessage>\r
        </ChatMessageList>\r
        <ChatInput placeholder="Type a message..." />\r
      </ChatContainer>\r
    </div>
}`,...C.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
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
          Small\r
        </p>\r
        <ChatAvatar size="small" fallback="S" />\r
      </div>\r
      <div>\r
        <p style={{
        marginBottom: "8px",
        fontSize: "14px",
        color: "#666"
      }}>\r
          Medium\r
        </p>\r
        <ChatAvatar size="medium" fallback="M" />\r
      </div>\r
      <div>\r
        <p style={{
        marginBottom: "8px",
        fontSize: "14px",
        color: "#666"
      }}>\r
          Large\r
        </p>\r
        <ChatAvatar size="large" fallback="L" />\r
      </div>\r
    </div>
}`,...A.parameters?.docs?.source}}};const b=["Basic","WithAvatarImages","WithVariants","Interactive","WithIcons","NoAvatars","AvatarSizes"],q=Object.freeze(Object.defineProperty({__proto__:null,AvatarSizes:A,Basic:g,Interactive:y,NoAvatars:C,WithAvatarImages:v,WithIcons:x,WithVariants:f,__namedExportsOrder:b,default:I},Symbol.toStringTag,{value:"Module"}));export{A,g as B,q as C,y as I,C as N,v as W,f as a,x as b};
