---
sidebar_position: 2
---

# Secure HTTP Headers in ASP.NET Core

## 1️⃣ Types of HTTP Headers

### General Headers

General headers provide meta-information about the request or response. They are not specific to the content itself.

#### Example:

```
Cache-Control: no-cache, no-store, must-revalidate
Pragma: no-cache
Expires: 0
```

#### Purpose:

- Control caching behavior to ensure fresh content is always fetched.
- `Cache-Control` prevents storing responses in caches.
- `Pragma` is an older directive with similar functionality.
- `Expires` defines when the response becomes stale.

#### Configurations:

- `Cache-Control: public, max-age=3600` (Allow caching for 1 hour)
- `Cache-Control: private, no-store` (Prevent caching)
- `Cache-Control: no-cache, must-revalidate` (Force revalidation)

---

### Request Headers

Request headers provide additional information from the client to the server.

#### Example:

```
Referer: https://example.com/page
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)
Authorization: Bearer <token>
```

#### Purpose:

- `Referer`: Indicates the origin of a request (can be used for analytics or security checks).
- `User-Agent`: Identifies the client making the request.
- `Authorization`: Sends credentials for authentication.

#### Configurations:

- `Referer: strict-origin-when-cross-origin` (Limits exposure of referrer information)
- `Authorization: Basic dXNlcjpwYXNzd29yZA==` (Basic authentication, avoid if possible)

---

### Response Headers

Response headers provide metadata about the server’s response.

#### Example:

```
Content-Type: text/html; charset=UTF-8
Content-Length: 1024
Server: nginx/1.18.0
```

#### Purpose:

- `Content-Type`: Specifies the format of the response.
- `Content-Length`: Defines the size of the response.
- `Server`: Indicates the software used to serve the response (can be hidden for security reasons).

#### Configurations:

- `Content-Type: application/json; charset=UTF-8` (For API responses)
- `Server: hidden` (Prevents exposing server details)

---

## 2️⃣ Why Secure HTTP Headers?

HTTP headers carry vital information about requests and responses. If misconfigured, they can expose applications to various attacks, including:

- Cross-Site Scripting (XSS)
- Clickjacking
- Man-in-the-Middle (MITM) attacks
- Data theft
- Cross-Origin Request Forgery (CSRF)

By implementing secure headers, you can mitigate these threats and protect user data.

---

## 3️⃣ How an Attacker Can Exploit Weak HTTP Headers

### 1. **Strict-Transport-Security (HSTS) Missing**

#### Exploit:

- Allows attackers to downgrade HTTPS to HTTP via MITM attacks.
- Users can be tricked into accessing a non-secure version of the site.

#### Implementation:

```csharp
app.UseHsts();
```

---

### 2. **X-Frame-Options Missing**

#### Exploit:

- Allows clickjacking attacks by embedding the site in an iframe.

#### Implementation:

```csharp
app.Use(async (context, next) =>
{
    context.Response.Headers.Add("X-Frame-Options", "DENY");
    await next();
});
```

---

### 3. **X-XSS-Protection Disabled**

#### Exploit:

- Enables XSS attacks by allowing malicious scripts to execute.

#### Implementation:

```csharp
app.Use(async (context, next) =>
{
    context.Response.Headers.Add("X-XSS-Protection", "1; mode=block");
    await next();
});
```

---

### 4. **Content Security Policy (CSP) Missing**

#### Exploit:

- Allows execution of malicious scripts from untrusted sources.

#### Implementation:

```csharp
app.Use(async (context, next) =>
{
    context.Response.Headers.Add("Content-Security-Policy", "default-src 'self'");
    await next();
});
```

---

### 5. **X-Content-Type-Options Missing**

#### Exploit:

- Enables MIME type sniffing attacks.

#### Implementation:

```csharp
app.Use(async (context, next) =>
{
    context.Response.Headers.Add("X-Content-Type-Options", "nosniff");
    await next();
});
```

---

### 6. **Referrer-Policy Missing**

#### Exploit:

- Exposes referrer URLs to third-party sites.

#### Implementation:

```csharp
app.Use(async (context, next) =>
{
    context.Response.Headers.Add("Referrer-Policy", "strict-origin-when-cross-origin");
    await next();
});
```

---

### 7. **Permissions-Policy Missing**

#### Exploit:

- Grants unrestricted access to browser features like camera and microphone.

#### Implementation:

```csharp
app.Use(async (context, next) =>
{
    context.Response.Headers.Add("Permissions-Policy", "geolocation=(), microphone=(), camera=()");
    await next();
});
```

---

### 8. **Cross-Origin Resource Sharing (CORS) Misconfigured**

#### Exploit:

- Allows unauthorized access to API endpoints.

#### Implementation:

```csharp
app.UseCors(options => options
    .WithOrigins("https://trusted-site.com")
    .AllowAnyMethod()
    .AllowAnyHeader());
```

---

### 9. **Feature-Policy Missing**

#### Exploit:

- Allows misuse of browser features.

#### Implementation:

```csharp
app.Use(async (context, next) =>
{
    context.Response.Headers.Add("Feature-Policy", "vibrate 'none'; geolocation 'self'");
    await next();
});
```

---

### 10. **Server Header Exposed**

#### Exploit:

- Reveals server type and version, aiding attackers in exploits.

#### Implementation:

```csharp
app.Use(async (context, next) =>
{
    context.Response.Headers.Remove("Server");
    await next();
});
```

---

### 11. **Expect-CT Missing**

#### Exploit:

- Enables attackers to use fraudulent certificates.

#### Implementation:

```csharp
app.Use(async (context, next) =>
{
    context.Response.Headers.Add("Expect-CT", "enforce, max-age=86400");
    await next();
});
```

---

By implementing these security headers, you can significantly reduce the risk of common web attacks. Keep your application secure by enforcing these best practices!
