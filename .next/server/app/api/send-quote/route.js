(()=>{var e={};e.id=375,e.ids=[375],e.modules={3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},14985:e=>{"use strict";e.exports=require("dns")},21820:e=>{"use strict";e.exports=require("os")},27910:e=>{"use strict";e.exports=require("stream")},28354:e=>{"use strict";e.exports=require("util")},29021:e=>{"use strict";e.exports=require("fs")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},34631:e=>{"use strict";e.exports=require("tls")},36178:(e,t,r)=>{"use strict";r.r(t),r.d(t,{patchFetch:()=>h,routeModule:()=>d,serverHooks:()=>x,workAsyncStorage:()=>c,workUnitAsyncStorage:()=>l});var s={};r.r(s),r.d(s,{POST:()=>p});var o=r(96559),i=r(48088),u=r(37719),n=r(32190);let a=r(49526).createTransport({host:"smtp.zoho.com",port:465,secure:!0,auth:{user:process.env.ZOHO_EMAIL_USER,pass:process.env.ZOHO_EMAIL_PASS}});async function p(e){if(!process.env.ZOHO_EMAIL_USER||!process.env.RECEIVING_EMAIL)return console.error("Email configuration missing. Check .env.local file."),n.NextResponse.json({message:"Server configuration error."},{status:500});try{let{firstName:t,lastName:r,businessName:s,email:o,phone:i,typeOfInquiry:u}=await e.json(),p={from:process.env.ZOHO_EMAIL_USER,replyTo:`${t} ${r} <${o}>`,to:process.env.RECEIVING_EMAIL,subject:`New Quote Request from ${t} ${r}`,text:`
        --- NEW QUOTE REQUEST ---
        
        Name: ${t} ${r}
        Business Name: ${s}
        Email: ${o}
        Phone: ${i}
        
        Inquiry Details:
        ${u}
        
        -------------------------
      `,html:`
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #333;">New Quote Request Submitted</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 5px 0; font-weight: bold;">Name:</td><td>${t} ${r}</td></tr>
            <tr><td style="padding: 5px 0; font-weight: bold;">Business Name:</td><td>${s}</td></tr>
            <tr><td style="padding: 5px 0; font-weight: bold;">Email:</td><td>${o}</td></tr>
            <tr><td style="padding: 5px 0; font-weight: bold;">Phone:</td><td>${i}</td></tr>
          </table>
          
          <h3 style="margin-top: 20px; color: #555;">Inquiry Details:</h3>
          <p style="white-space: pre-wrap; background-color: #f9f9f9; padding: 15px; border-radius: 8px;">${u}</p>
        </div>
      `};return await a.sendMail(p),n.NextResponse.json({message:"Quote successfully sent!"},{status:200})}catch(e){return console.error("Email sending error:",e),n.NextResponse.json({message:"Failed to send quote request. Please check server logs."},{status:500})}}let d=new o.AppRouteRouteModule({definition:{kind:i.RouteKind.APP_ROUTE,page:"/api/send-quote/route",pathname:"/api/send-quote",filename:"route",bundlePath:"app/api/send-quote/route"},resolvedPagePath:"/Users/prakashkumar/Sourcecode/Primaryvision/src/app/api/send-quote/route.ts",nextConfigOutput:"export",userland:s}),{workAsyncStorage:c,workUnitAsyncStorage:l,serverHooks:x}=d;function h(){return(0,u.patchFetch)({workAsyncStorage:c,workUnitAsyncStorage:l})}},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},55511:e=>{"use strict";e.exports=require("crypto")},55591:e=>{"use strict";e.exports=require("https")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},74075:e=>{"use strict";e.exports=require("zlib")},78335:()=>{},79551:e=>{"use strict";e.exports=require("url")},79646:e=>{"use strict";e.exports=require("child_process")},81630:e=>{"use strict";e.exports=require("http")},91645:e=>{"use strict";e.exports=require("net")},94735:e=>{"use strict";e.exports=require("events")},96487:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[447,580,526],()=>r(36178));module.exports=s})();