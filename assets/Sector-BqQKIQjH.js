"use client";
import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{Ma as r,Oa as i,Pa as a,Xa as o,Ya as s,ba as c,dr as l,hr as u,mr as d,na as f,no as p,to as m,xa as h}from"./helpers-CK25GWbU.js";function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(null,arguments)}function _(e,t){return t||=e.slice(0),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var v,y,b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=t((()=>{v=e(n()),p(),d(),h(),s(),r(),E=(e,t)=>i(t-e)*Math.min(Math.abs(t-e),359.999),D=e=>{var t=e.cx,n=e.cy,r=e.radius,i=e.angle,a=e.sign,o=e.isExternal,s=e.cornerRadius,c=e.cornerIsExternal,d=s*(o?1:-1)+r,f=Math.asin(s/d)/l,p=c?i:i+a*f,m=u(t,n,d,p),h=u(t,n,r,p),g=c?i-a*f:i;return{center:m,circleTangency:h,lineTangency:u(t,n,d*Math.cos(f*l),g),theta:f}},O=e=>{var t=e.cx,n=e.cy,r=e.innerRadius,i=e.outerRadius,o=e.startAngle,s=e.endAngle,c=E(o,s),l=o+c,d=u(t,n,i,o),f=u(t,n,i,l),p=a(y||=_([`M `,`,`,`
    A `,`,`,`,0,
    `,`,`,`,
    `,`,`,`
  `]),d.x,d.y,i,i,+(Math.abs(c)>180),+(o>l),f.x,f.y);if(r>0){var m=u(t,n,r,o),h=u(t,n,r,l);p+=a(b||=_([`L `,`,`,`
            A `,`,`,`,0,
            `,`,`,`,
            `,`,`,` Z`]),h.x,h.y,r,r,+(Math.abs(c)>180),+(o<=l),m.x,m.y)}else p+=a(x||=_([`L `,`,`,` Z`]),t,n);return p},k=e=>{var t=e.cx,n=e.cy,r=e.innerRadius,o=e.outerRadius,s=e.cornerRadius,c=e.forceCornerRadius,l=e.cornerIsExternal,u=e.startAngle,d=e.endAngle,f=i(d-u),p=D({cx:t,cy:n,radius:o,angle:u,sign:f,cornerRadius:s,cornerIsExternal:l}),m=p.circleTangency,h=p.lineTangency,g=p.theta,v=D({cx:t,cy:n,radius:o,angle:d,sign:-f,cornerRadius:s,cornerIsExternal:l}),y=v.circleTangency,b=v.lineTangency,x=v.theta,E=l?Math.abs(u-d):Math.abs(u-d)-g-x;if(E<0)return c?a(S||=_([`M `,`,`,`
        a`,`,`,`,0,0,1,`,`,0
        a`,`,`,`,0,0,1,`,`,0
      `]),h.x,h.y,s,s,s*2,s,s,-s*2):O({cx:t,cy:n,innerRadius:r,outerRadius:o,startAngle:u,endAngle:d});var k=a(C||=_([`M `,`,`,`
    A`,`,`,`,0,0,`,`,`,`,`,`
    A`,`,`,`,0,`,`,`,`,`,`,`,`
    A`,`,`,`,0,0,`,`,`,`,`,`
  `]),h.x,h.y,s,s,+(f<0),m.x,m.y,o,o,+(E>180),+(f<0),y.x,y.y,s,s,+(f<0),b.x,b.y);if(r>0){var A=D({cx:t,cy:n,radius:r,angle:u,sign:f,isExternal:!0,cornerRadius:s,cornerIsExternal:l}),j=A.circleTangency,M=A.lineTangency,N=A.theta,P=D({cx:t,cy:n,radius:r,angle:d,sign:-f,isExternal:!0,cornerRadius:s,cornerIsExternal:l}),F=P.circleTangency,I=P.lineTangency,L=P.theta,R=l?Math.abs(u-d):Math.abs(u-d)-N-L;if(R<0&&s===0)return`${k}L${t},${n}Z`;k+=a(w||=_([`L`,`,`,`
      A`,`,`,`,0,0,`,`,`,`,`,`
      A`,`,`,`,0,`,`,`,`,`,`,`,`
      A`,`,`,`,0,0,`,`,`,`,`,`Z`]),I.x,I.y,s,s,+(f<0),F.x,F.y,r,r,+(R>180),+(f>0),j.x,j.y,s,s,+(f<0),M.x,M.y)}else k+=a(T||=_([`L`,`,`,`Z`]),t,n);return k},A={cx:0,cy:0,innerRadius:0,outerRadius:0,startAngle:0,endAngle:0,cornerRadius:0,forceCornerRadius:!1,cornerIsExternal:!1},j=e=>{var t=f(e,A),n=t.cx,r=t.cy,i=t.innerRadius,a=t.outerRadius,s=t.cornerRadius,l=t.forceCornerRadius,u=t.cornerIsExternal,d=t.startAngle,p=t.endAngle,h=t.className;if(a<i||d===p)return null;var _=m(`recharts-sector`,h),y=a-i,b=c(s,y,0,!0),x=b>0&&Math.abs(d-p)<360?k({cx:n,cy:r,innerRadius:i,outerRadius:a,cornerRadius:Math.min(b,y/2),forceCornerRadius:l,cornerIsExternal:u,startAngle:d,endAngle:p}):O({cx:n,cy:r,innerRadius:i,outerRadius:a,startAngle:d,endAngle:p});return v.createElement(`path`,g({},o(t),{className:_,d:x}))}})))()}export{M as n,j as t};