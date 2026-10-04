"use client";
import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{t as i}from"./classnames-D09xBJOL.js";import{n as a,t as o}from"./FeedbackIcon-CIftU0C2.js";import{n as s,t as c}from"./FeedbackCloseButton-fWubudS0.js";var l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=t((()=>{l=`_root_suc32_3`,u=`_icon_suc32_15`,d=`_title_suc32_26`,f=`_content_suc32_29`,p=`_description_suc32_48`,m=`_close_suc32_58`,h=`_info_suc32_96`,g=`_success_suc32_104`,_=`_warning_suc32_112`,v=`_danger_suc32_120`,y={root:l,icon:u,title:d,content:f,description:p,close:m,default:`_default_suc32_89`,info:h,success:g,warning:_,danger:v}})))()}var x,S,C,w;function T(){return(T=t((()=>{x=e(n(),1),S=e(i(),1),a(),s(),b(),C=r(),w=({title:e,titleTag:t=`div`,description:n,intent:r=`default`,icon:i,onClose:a,className:s,children:l,...u})=>{let[d,f]=x.useState(!0);if(!d)return null;let p=()=>{f(!1),a&&a()},m=i!==void 0||r===`success`||r===`warning`||r===`danger`||r===`info`;return(0,C.jsxs)(`div`,{className:(0,S.default)(`wim-alert`,y.root,y[r],s),role:`alert`,...u,children:[m&&(0,C.jsx)(`div`,{className:y.icon,children:(0,C.jsx)(o,{intent:r,icon:i,size:`sm`})}),(0,C.jsxs)(`div`,{className:y.content,children:[e&&(0,C.jsx)(t,{className:y.title,children:e}),(n||l)&&(0,C.jsx)(`div`,{className:y.description,children:n||l})]}),(0,C.jsx)(c,{onClose:a?p:void 0,className:y.close,size:`sm`})]})},w.__docgenInfo={description:`Alert for communicating important information to the user.`,methods:[],displayName:`Alert`,props:{title:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Title of the alert`},titleTag:{required:!1,tsType:{name:`union`,raw:`| "h1"
| "h2"
| "h3"
| "h4"
| "h5"
| "h6"
| "div"
| "p"
| "strong"
| "span"`,elements:[{name:`literal`,value:`"h1"`},{name:`literal`,value:`"h2"`},{name:`literal`,value:`"h3"`},{name:`literal`,value:`"h4"`},{name:`literal`,value:`"h5"`},{name:`literal`,value:`"h6"`},{name:`literal`,value:`"div"`},{name:`literal`,value:`"p"`},{name:`literal`,value:`"strong"`},{name:`literal`,value:`"span"`}]},description:`HTML tag used for the alert title.

The default is a \`div\`: an alert is a notice, not a section of the
document, so its title does not belong in the heading outline. Making it
one also breaks \`heading-order\` as soon as the alert sits under anything
other than an \`h3\`. Pass a heading only when the alert really does head a
section of the page.

@default "div"`,defaultValue:{value:`"div"`,computed:!1}},description:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Description text of the alert`},intent:{required:!1,tsType:{name:`FeedbackIntent`},description:`Intent (semantic state) of the alert
@default "default"`,defaultValue:{value:`"default"`,computed:!1}},icon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Custom icon. When omitted, a default icon matching the intent is displayed.`},onClose:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Called when the close button is clicked. Providing it shows the close button.`},className:{required:!1,tsType:{name:`string`},description:`Additional CSS class name`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Content of the alert (treated as the description)`}}}})))()}export{T as n,w as t};