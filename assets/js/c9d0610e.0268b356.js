"use strict";(self.webpackChunkcibi_general_documentation=self.webpackChunkcibi_general_documentation||[]).push([[9997],{4087:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"general-knowledge/Http-Header/Header","title":"Secure HTTP Headers in ASP.NET Core","description":"1\ufe0f\u20e3 Types of HTTP Headers","source":"@site/docs/general-knowledge/Http-Header/Header.md","sourceDirName":"general-knowledge/Http-Header","slug":"/general-knowledge/Http-Header/Header","permalink":"/CIBI_General_Documentation/docs/general-knowledge/Http-Header/Header","draft":false,"unlisted":false,"editUrl":"https://github.com/RusselG21/CIBI_General_Documentation/docs/general-knowledge/Http-Header/Header.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"GeneralKnowledgeDocSidebar","previous":{"title":"\ud83d\ude80 Introduction to General Development Knowledge","permalink":"/CIBI_General_Documentation/docs/general-knowledge/intro"}}');var r=i(4848),t=i(8453);const l={sidebar_position:2},o="Secure HTTP Headers in ASP.NET Core",a={},c=[{value:"1\ufe0f\u20e3 Types of HTTP Headers",id:"1\ufe0f\u20e3-types-of-http-headers",level:2},{value:"General Headers",id:"general-headers",level:3},{value:"Example:",id:"example",level:4},{value:"Purpose:",id:"purpose",level:4},{value:"Configurations:",id:"configurations",level:4},{value:"Request Headers",id:"request-headers",level:3},{value:"Example:",id:"example-1",level:4},{value:"Purpose:",id:"purpose-1",level:4},{value:"Configurations:",id:"configurations-1",level:4},{value:"Response Headers",id:"response-headers",level:3},{value:"Example:",id:"example-2",level:4},{value:"Purpose:",id:"purpose-2",level:4},{value:"Configurations:",id:"configurations-2",level:4},{value:"2\ufe0f\u20e3 Why Secure HTTP Headers?",id:"2\ufe0f\u20e3-why-secure-http-headers",level:2},{value:"3\ufe0f\u20e3 How an Attacker Can Exploit Weak HTTP Headers",id:"3\ufe0f\u20e3-how-an-attacker-can-exploit-weak-http-headers",level:2},{value:"1. <strong>Strict-Transport-Security (HSTS) Missing</strong>",id:"1-strict-transport-security-hsts-missing",level:3},{value:"Exploit:",id:"exploit",level:4},{value:"Implementation:",id:"implementation",level:4},{value:"2. <strong>X-Frame-Options Missing</strong>",id:"2-x-frame-options-missing",level:3},{value:"Exploit:",id:"exploit-1",level:4},{value:"Implementation:",id:"implementation-1",level:4},{value:"3. <strong>X-XSS-Protection Disabled</strong>",id:"3-x-xss-protection-disabled",level:3},{value:"Exploit:",id:"exploit-2",level:4},{value:"Implementation:",id:"implementation-2",level:4},{value:"4. <strong>Content Security Policy (CSP) Missing</strong>",id:"4-content-security-policy-csp-missing",level:3},{value:"Exploit:",id:"exploit-3",level:4},{value:"Implementation:",id:"implementation-3",level:4},{value:"5. <strong>X-Content-Type-Options Missing</strong>",id:"5-x-content-type-options-missing",level:3},{value:"Exploit:",id:"exploit-4",level:4},{value:"Implementation:",id:"implementation-4",level:4},{value:"6. <strong>Referrer-Policy Missing</strong>",id:"6-referrer-policy-missing",level:3},{value:"Exploit:",id:"exploit-5",level:4},{value:"Implementation:",id:"implementation-5",level:4},{value:"7. <strong>Permissions-Policy Missing</strong>",id:"7-permissions-policy-missing",level:3},{value:"Exploit:",id:"exploit-6",level:4},{value:"Implementation:",id:"implementation-6",level:4},{value:"8. <strong>Cross-Origin Resource Sharing (CORS) Misconfigured</strong>",id:"8-cross-origin-resource-sharing-cors-misconfigured",level:3},{value:"Exploit:",id:"exploit-7",level:4},{value:"Implementation:",id:"implementation-7",level:4},{value:"9. <strong>Feature-Policy Missing</strong>",id:"9-feature-policy-missing",level:3},{value:"Exploit:",id:"exploit-8",level:4},{value:"Implementation:",id:"implementation-8",level:4},{value:"10. <strong>Server Header Exposed</strong>",id:"10-server-header-exposed",level:3},{value:"Exploit:",id:"exploit-9",level:4},{value:"Implementation:",id:"implementation-9",level:4},{value:"11. <strong>Expect-CT Missing</strong>",id:"11-expect-ct-missing",level:3},{value:"Exploit:",id:"exploit-10",level:4},{value:"Implementation:",id:"implementation-10",level:4}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"secure-http-headers-in-aspnet-core",children:"Secure HTTP Headers in ASP.NET Core"})}),"\n",(0,r.jsx)(n.h2,{id:"1\ufe0f\u20e3-types-of-http-headers",children:"1\ufe0f\u20e3 Types of HTTP Headers"}),"\n",(0,r.jsx)(n.h3,{id:"general-headers",children:"General Headers"}),"\n",(0,r.jsx)(n.p,{children:"General headers provide meta-information about the request or response. They are not specific to the content itself."}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Cache-Control: no-cache, no-store, must-revalidate\nPragma: no-cache\nExpires: 0\n"})}),"\n",(0,r.jsx)(n.h4,{id:"purpose",children:"Purpose:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Control caching behavior to ensure fresh content is always fetched."}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Cache-Control"})," prevents storing responses in caches."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Pragma"})," is an older directive with similar functionality."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Expires"})," defines when the response becomes stale."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"configurations",children:"Configurations:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Cache-Control: public, max-age=3600"})," (Allow caching for 1 hour)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Cache-Control: private, no-store"})," (Prevent caching)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Cache-Control: no-cache, must-revalidate"})," (Force revalidation)"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"request-headers",children:"Request Headers"}),"\n",(0,r.jsx)(n.p,{children:"Request headers provide additional information from the client to the server."}),"\n",(0,r.jsx)(n.h4,{id:"example-1",children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Referer: https://example.com/page\nUser-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)\nAuthorization: Bearer <token>\n"})}),"\n",(0,r.jsx)(n.h4,{id:"purpose-1",children:"Purpose:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Referer"}),": Indicates the origin of a request (can be used for analytics or security checks)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"User-Agent"}),": Identifies the client making the request."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Authorization"}),": Sends credentials for authentication."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"configurations-1",children:"Configurations:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Referer: strict-origin-when-cross-origin"})," (Limits exposure of referrer information)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Authorization: Basic dXNlcjpwYXNzd29yZA=="})," (Basic authentication, avoid if possible)"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"response-headers",children:"Response Headers"}),"\n",(0,r.jsx)(n.p,{children:"Response headers provide metadata about the server\u2019s response."}),"\n",(0,r.jsx)(n.h4,{id:"example-2",children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Content-Type: text/html; charset=UTF-8\nContent-Length: 1024\nServer: nginx/1.18.0\n"})}),"\n",(0,r.jsx)(n.h4,{id:"purpose-2",children:"Purpose:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Content-Type"}),": Specifies the format of the response."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Content-Length"}),": Defines the size of the response."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Server"}),": Indicates the software used to serve the response (can be hidden for security reasons)."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"configurations-2",children:"Configurations:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Content-Type: application/json; charset=UTF-8"})," (For API responses)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Server: hidden"})," (Prevents exposing server details)"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"2\ufe0f\u20e3-why-secure-http-headers",children:"2\ufe0f\u20e3 Why Secure HTTP Headers?"}),"\n",(0,r.jsx)(n.p,{children:"HTTP headers carry vital information about requests and responses. If misconfigured, they can expose applications to various attacks, including:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Cross-Site Scripting (XSS)"}),"\n",(0,r.jsx)(n.li,{children:"Clickjacking"}),"\n",(0,r.jsx)(n.li,{children:"Man-in-the-Middle (MITM) attacks"}),"\n",(0,r.jsx)(n.li,{children:"Data theft"}),"\n",(0,r.jsx)(n.li,{children:"Cross-Origin Request Forgery (CSRF)"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"By implementing secure headers, you can mitigate these threats and protect user data."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"3\ufe0f\u20e3-how-an-attacker-can-exploit-weak-http-headers",children:"3\ufe0f\u20e3 How an Attacker Can Exploit Weak HTTP Headers"}),"\n",(0,r.jsxs)(n.h3,{id:"1-strict-transport-security-hsts-missing",children:["1. ",(0,r.jsx)(n.strong,{children:"Strict-Transport-Security (HSTS) Missing"})]}),"\n",(0,r.jsx)(n.h4,{id:"exploit",children:"Exploit:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Allows attackers to downgrade HTTPS to HTTP via MITM attacks."}),"\n",(0,r.jsx)(n.li,{children:"Users can be tricked into accessing a non-secure version of the site."}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"implementation",children:"Implementation:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:"app.UseHsts();\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.h3,{id:"2-x-frame-options-missing",children:["2. ",(0,r.jsx)(n.strong,{children:"X-Frame-Options Missing"})]}),"\n",(0,r.jsx)(n.h4,{id:"exploit-1",children:"Exploit:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Allows clickjacking attacks by embedding the site in an iframe."}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"implementation-1",children:"Implementation:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:'app.Use(async (context, next) =>\n{\n    context.Response.Headers.Add("X-Frame-Options", "DENY");\n    await next();\n});\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.h3,{id:"3-x-xss-protection-disabled",children:["3. ",(0,r.jsx)(n.strong,{children:"X-XSS-Protection Disabled"})]}),"\n",(0,r.jsx)(n.h4,{id:"exploit-2",children:"Exploit:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Enables XSS attacks by allowing malicious scripts to execute."}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"implementation-2",children:"Implementation:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:'app.Use(async (context, next) =>\n{\n    context.Response.Headers.Add("X-XSS-Protection", "1; mode=block");\n    await next();\n});\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.h3,{id:"4-content-security-policy-csp-missing",children:["4. ",(0,r.jsx)(n.strong,{children:"Content Security Policy (CSP) Missing"})]}),"\n",(0,r.jsx)(n.h4,{id:"exploit-3",children:"Exploit:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Allows execution of malicious scripts from untrusted sources."}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"implementation-3",children:"Implementation:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:'app.Use(async (context, next) =>\n{\n    context.Response.Headers.Add("Content-Security-Policy", "default-src \'self\'");\n    await next();\n});\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.h3,{id:"5-x-content-type-options-missing",children:["5. ",(0,r.jsx)(n.strong,{children:"X-Content-Type-Options Missing"})]}),"\n",(0,r.jsx)(n.h4,{id:"exploit-4",children:"Exploit:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Enables MIME type sniffing attacks."}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"implementation-4",children:"Implementation:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:'app.Use(async (context, next) =>\n{\n    context.Response.Headers.Add("X-Content-Type-Options", "nosniff");\n    await next();\n});\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.h3,{id:"6-referrer-policy-missing",children:["6. ",(0,r.jsx)(n.strong,{children:"Referrer-Policy Missing"})]}),"\n",(0,r.jsx)(n.h4,{id:"exploit-5",children:"Exploit:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Exposes referrer URLs to third-party sites."}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"implementation-5",children:"Implementation:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:'app.Use(async (context, next) =>\n{\n    context.Response.Headers.Add("Referrer-Policy", "strict-origin-when-cross-origin");\n    await next();\n});\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.h3,{id:"7-permissions-policy-missing",children:["7. ",(0,r.jsx)(n.strong,{children:"Permissions-Policy Missing"})]}),"\n",(0,r.jsx)(n.h4,{id:"exploit-6",children:"Exploit:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Grants unrestricted access to browser features like camera and microphone."}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"implementation-6",children:"Implementation:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:'app.Use(async (context, next) =>\n{\n    context.Response.Headers.Add("Permissions-Policy", "geolocation=(), microphone=(), camera=()");\n    await next();\n});\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.h3,{id:"8-cross-origin-resource-sharing-cors-misconfigured",children:["8. ",(0,r.jsx)(n.strong,{children:"Cross-Origin Resource Sharing (CORS) Misconfigured"})]}),"\n",(0,r.jsx)(n.h4,{id:"exploit-7",children:"Exploit:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Allows unauthorized access to API endpoints."}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"implementation-7",children:"Implementation:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:'app.UseCors(options => options\n    .WithOrigins("https://trusted-site.com")\n    .AllowAnyMethod()\n    .AllowAnyHeader());\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.h3,{id:"9-feature-policy-missing",children:["9. ",(0,r.jsx)(n.strong,{children:"Feature-Policy Missing"})]}),"\n",(0,r.jsx)(n.h4,{id:"exploit-8",children:"Exploit:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Allows misuse of browser features."}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"implementation-8",children:"Implementation:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:"app.Use(async (context, next) =>\n{\n    context.Response.Headers.Add(\"Feature-Policy\", \"vibrate 'none'; geolocation 'self'\");\n    await next();\n});\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.h3,{id:"10-server-header-exposed",children:["10. ",(0,r.jsx)(n.strong,{children:"Server Header Exposed"})]}),"\n",(0,r.jsx)(n.h4,{id:"exploit-9",children:"Exploit:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Reveals server type and version, aiding attackers in exploits."}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"implementation-9",children:"Implementation:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:'app.Use(async (context, next) =>\n{\n    context.Response.Headers.Remove("Server");\n    await next();\n});\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.h3,{id:"11-expect-ct-missing",children:["11. ",(0,r.jsx)(n.strong,{children:"Expect-CT Missing"})]}),"\n",(0,r.jsx)(n.h4,{id:"exploit-10",children:"Exploit:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Enables attackers to use fraudulent certificates."}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"implementation-10",children:"Implementation:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:'app.Use(async (context, next) =>\n{\n    context.Response.Headers.Add("Expect-CT", "enforce, max-age=86400");\n    await next();\n});\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.p,{children:"By implementing these security headers, you can significantly reduce the risk of common web attacks. Keep your application secure by enforcing these best practices!"})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>o});var s=i(6540);const r={},t=s.createContext(r);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);