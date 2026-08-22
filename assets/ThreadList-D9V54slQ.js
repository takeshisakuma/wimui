"use client";
import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{On as r,bt as i,cr as a,z as o}from"./iframe-F5Up1IQq.js";import{t as s}from"./classnames-DyhsJ24V.js";import{n as c,t as l}from"./Icon-dyTmj1rn.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E=e((()=>{u=`_root_1qshp_4`,d=`_newButton_1qshp_19`,f=`_empty_1qshp_43`,p=`_list_1qshp_50`,m=`_item_1qshp_58`,h=`_deleteButton_1qshp_63`,g=`_thread_1qshp_66`,_=`_active_1qshp_86`,v=`_icon_1qshp_89`,y=`_body_1qshp_96`,b=`_titleRow_1qshp_103`,x=`_unread_1qshp_109`,S=`_title_1qshp_103`,C=`_timestamp_1qshp_125`,w=`_preview_1qshp_130`,T={root:u,newButton:d,empty:f,list:p,item:m,deleteButton:h,thread:g,active:_,icon:v,body:y,titleRow:b,unread:x,title:S,timestamp:C,preview:w}})),D,O,k,A,j=e((()=>{D=t(n(),1),O=t(s(),1),c(),o(),E(),k=a(),A=D.forwardRef(({threads:e,activeId:t,onSelect:n,onDelete:a,onNewThread:o,labels:s,className:c,...u},d)=>{let{newThread:f=`New conversation`,empty:p=`No conversations yet`,delete:m=`Delete conversation`,listAriaLabel:h=`Conversation history`}=s??{};return(0,k.jsxs)(`nav`,{ref:d,className:(0,O.default)(`wim-thread-list`,T.root,c),"aria-label":h,...u,children:[o&&(0,k.jsxs)(`button`,{type:`button`,className:T.newButton,onClick:o,children:[(0,k.jsx)(l,{component:i,size:`sm`}),(0,k.jsx)(`span`,{children:f})]}),e.length===0?(0,k.jsx)(`p`,{className:T.empty,children:p}):(0,k.jsx)(`ul`,{className:T.list,children:e.map(e=>{let i=e.id===t;return(0,k.jsxs)(`li`,{className:T.item,children:[(0,k.jsxs)(`button`,{type:`button`,className:(0,O.default)(T.thread,i&&T.active),"aria-current":i||void 0,onClick:()=>n?.(e.id),children:[e.iconName&&(0,k.jsx)(`span`,{className:T.icon,"aria-hidden":`true`,children:(0,k.jsx)(l,{name:e.iconName,size:`sm`})}),(0,k.jsxs)(`span`,{className:T.body,children:[(0,k.jsxs)(`span`,{className:T.titleRow,children:[e.unread&&(0,k.jsx)(`span`,{className:T.unread,"aria-hidden":`true`}),(0,k.jsx)(`span`,{className:T.title,children:e.title}),e.timestamp&&(0,k.jsx)(`span`,{className:T.timestamp,children:e.timestamp})]}),e.preview&&(0,k.jsx)(`span`,{className:T.preview,children:e.preview})]})]}),a&&(0,k.jsx)(`button`,{type:`button`,className:T.deleteButton,"aria-label":m,onClick:()=>a(e.id),children:(0,k.jsx)(l,{component:r,size:`sm`})})]},e.id)})})]})}),A.displayName=`ThreadList`,A.__docgenInfo={description:`ThreadList renders a conversation-history sidebar for AI chat apps — a
scrollable list of past threads with an optional "new conversation" action
and per-thread deletion. Pairs naturally with Sidebar and Drawer.

Composition Contract:
- Managed by: App consumption
- Scroll lock: No`,methods:[],displayName:`ThreadList`,props:{threads:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  /** Unique identifier of the thread */
  id: string;
  /** Title of the conversation */
  title: string;
  /** Short preview of the last message */
  preview?: string;
  /** Pre-formatted timestamp string shown on the right */
  timestamp?: string;
  /** Icon name shown before the title */
  iconName?: React.ComponentProps<typeof Icon>["name"];
  /** Whether the thread has unread activity (shows a dot) */
  unread?: boolean;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0},description:`Unique identifier of the thread`},{key:`title`,value:{name:`string`,required:!0},description:`Title of the conversation`},{key:`preview`,value:{name:`string`,required:!1},description:`Short preview of the last message`},{key:`timestamp`,value:{name:`string`,required:!1},description:`Pre-formatted timestamp string shown on the right`},{key:`iconName`,value:{name:`ReactComponentProps["name"]`,raw:`React.ComponentProps<typeof Icon>["name"]`,required:!1},description:`Icon name shown before the title`},{key:`unread`,value:{name:`boolean`,required:!1},description:`Whether the thread has unread activity (shows a dot)`}]}}],raw:`Thread[]`},description:`Conversations to display, ordered newest first`},activeId:{required:!1,tsType:{name:`string`},description:`Id of the currently active thread`},onSelect:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(id: string) => void`,signature:{arguments:[{type:{name:`string`},name:`id`}],return:{name:`void`}}},description:`Callback when a thread is selected`},onDelete:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(id: string) => void`,signature:{arguments:[{type:{name:`string`},name:`id`}],return:{name:`void`}}},description:`Callback when a thread's delete button is clicked (shows the button when set)`},onNewThread:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Callback when the new-conversation button is clicked (shows the button when set)`},labels:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{
  /** Label of the new-conversation button */
  newThread?: string;
  /** Text shown when there are no threads */
  empty?: string;
  /** Accessible label for each delete button */
  delete?: string;
  /** Accessible label for the list */
  listAriaLabel?: string;
}`,signature:{properties:[{key:`newThread`,value:{name:`string`,required:!1},description:`Label of the new-conversation button`},{key:`empty`,value:{name:`string`,required:!1},description:`Text shown when there are no threads`},{key:`delete`,value:{name:`string`,required:!1},description:`Accessible label for each delete button`},{key:`listAriaLabel`,value:{name:`string`,required:!1},description:`Accessible label for the list`}]}},description:`Labels for internationalization`},className:{required:!1,tsType:{name:`string`},description:`Additional class names`}},composes:[`Omit`]}}));export{j as n,A as t};