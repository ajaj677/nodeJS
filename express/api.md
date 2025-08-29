# 🚀 Express.js API – Quick Notes (5x Condensed)

## 🔹 1. Setup
- `npm init -y` → initialize project  
- `npm install express` → install Express  
- `const express = require('express')`  
- `const app = express()`  

## 🔹 2. Middleware
- `app.use(express.json())` → parse JSON  
- `app.use(express.urlencoded({extended:true}))` → parse form data  
- Custom middleware → `(req,res,next)=>{}`  

## 🔹 3. Routes
- **GET** → `app.get('/path', (req,res)=>{})`  
- **POST** → `app.post('/path', (req,res)=>{})`  
- **PUT** → `app.put('/path/:id', (req,res)=>{})`  
- **DELETE** → `app.delete('/path/:id', (req,res)=>{})`  

## 🔹 4. Params & Query
- Params: `req.params.id`  
- Query: `req.query.key`  
- Body: `req.body`  

## 🔹 5. Server
- `app.listen(3000, ()=>console.log('Server running'))`  

---
✅ Bonus: Use **Router** for modular APIs  
✅ Error handling: `app.use((err,req,res,next)=>{})`  
✅ Best practice: Separate **routes, controllers, models**  
