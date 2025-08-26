# 📘 REST API Notes

## 1. What is REST?
- **REST** stands for **Representational State Transfer**.  
- It’s not a technology, library, or framework — it’s an **architectural style** used to design APIs.  
- REST defines a set of **rules and best practices** that a server and client should follow while communicating.  
- A backend designed using these rules is often called a **RESTful API**.

---

## 2. The Client-Server Architecture
REST relies heavily on the **client-server principle**:
- **Server**: Handles business logic and data (often connected to a database).  
- **Client**: Any application that consumes the server’s response. Examples:
  - Web browsers  
  - Mobile apps  
  - Smart devices (Alexa, IoT devices, etc.)  

👉 **Key principle:** Server and client should remain **independent**.  
- Server just provides data (not presentation logic).  
- Client decides how to render that data (UI, voice, etc.).

---

## 3. Request-Response Cycle
Communication always follows:
1. **Client sends a request** → with a method (GET, POST, etc.), headers, and optional body.  
2. **Server processes the request** → interacts with database or business logic.  
3. **Server sends a response** → usually in a structured format.

---

## 4. Response Formats
A server can send data in many formats:
- **Plain text**
- **HTML** (server-side rendering)
- **Image/PDF files**
- **JSON** (most common for REST APIs)
- **XML** (older, rarely used today)

### Why JSON?
- Lightweight and easy to parse.  
- Language-independent, but maps well with JavaScript.  
- Follows key-value structure → `{ "id": 1, "title": "My Blog" }`.

👉 **Best practice:** Always send **raw data (JSON)** instead of pre-rendered HTML, unless you are 100% sure your client is only a browser.

- **Example 1: HTML Response**
  - If Google sends HTML → browser renders instantly.  
  - Perfect when you know the client is only a **web browser**.
- **Example 2: JSON Response**
  - If Instagram’s API sends JSON → both mobile app and website can render the same data in their own way.

⚡ **Tradeoff:**
- **Server-side rendering (SSR)** → fast, SEO-friendly (Google, YouTube).  
- **Client-side rendering (CSR)** → flexible, cross-platform, but slower since the client has to process data first.

---

## 5. REST Rule #1 – Client-Server Separation
- Server = data provider.  
- Client = data consumer.  
- Server should not dictate how data is displayed.  
- Client should handle rendering independently.

---

## 6. REST Rule #2 – Respect HTTP Methods
REST APIs should use HTTP methods properly and consistently:

| HTTP Method | Purpose                     | Example                         |
|-------------|-----------------------------|---------------------------------|
| **GET**     | Fetch data (read-only)     | `GET /users` → get all users    |
| **POST**    | Create new resource        | `POST /users` → create a user   |
| **PUT**     | Replace existing resource  | `PUT /users/1` → replace user 1 |
| **PATCH**   | Update part of resource    | `PATCH /users/1` → update email |
| **DELETE**  | Remove a resource          | `DELETE /users/1` → delete user |

👉 **Common mistake (bad practice):**
- Using only GET and POST for everything. Examples:
  - `POST /deleteUser` → ❌ wrong (should be `DELETE /users/:id`)  
  - `POST /updateUser` → ❌ wrong (should be `PATCH /users/:id`)

👉 **Best practice:** Respect the semantics of HTTP methods. Don’t overload POST.

---

## 7. REST in Practice (Express.js Example)
In **Express.js**, handling RESTful responses is straightforward:

- **Send JSON**:
  ```js
  res.json({ id: 1, name: "John" });

When to Use

Use JSON when:

Building APIs for multiple platforms (web + mobile).

Frontend frameworks (React, Vue, Flutter) will render data.

Use HTML when:

Building a traditional web app where client = browser only.

## 8. When to Use SSR vs CSR

SSR (HTML)

Client is always a browser.

Faster rendering, SEO-friendly.

Example: blogs, news sites.

CSR (JSON)

Cross-platform (web + mobile + IoT).

Decoupled frontend & backend teams.

Example: Instagram, Twitter APIs.

## 9. RESTful API Summary

To make an API RESTful, follow these rules:

Client-Server Independence → Server provides raw data (JSON preferred).

Respect HTTP Methods → Use GET, POST, PUT, PATCH, DELETE correctly.

## 10. What’s Next?

In upcoming lessons:

Build an Express.js server.

First → render HTML (client = browser).

Later → return JSON (client = React/mobile app).

Future topics:

Authentication & Authorization layered on REST principles.

## ✅ Takeaway:
REST is about discipline and best practices.
80% of developers misuse POST for everything — don’t be that developer.
Stick to clean principles → scalable, maintainable, cross-platform APIs.