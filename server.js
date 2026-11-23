import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app=express();
app.use(express.json({limit:"20kb"}));
app.use(express.static("public"));
app.get("/health",(_req,res)=>res.json({ok:true,service:"JARVIS AI"}));
app.post("/api/chat",async(req,res)=>{
  try{
    const message=String(req.body?.message||"").trim();
    if(!message)return res.status(400).json({error:"Please enter a message."});
    if(message.length>4000)return res.status(413).json({error:"Message is too long."});
    if(!process.env.OPENAI_API_KEY)return res.status(503).json({error:"Server setup is incomplete: OPENAI_API_KEY is not configured."});
    const response=await fetch("https://api.openai.com/v1/responses",{
      method:"POST",
      headers:{Authorization:`Bearer ${process.env.OPENAI_API_KEY}`,"Content-Type":"application/json"},
      body:JSON.stringify({
        model:process.env.OPENAI_MODEL||"gpt-4.1-mini",
        instructions:"You are JARVIS, a capable, polite personal AI assistant. Support Urdu and English. Reply in the language the user uses. Be clear, useful, and concise.",
        input:message,
        max_output_tokens:700
      })
    });
    const data=await response.json();
    if(!response.ok){console.error("AI provider error",data);return res.status(502).json({error:"AI provider request failed. Check API account, model access, and billing."})}
    const reply=(data.output||[]).flatMap(x=>x.content||[]).filter(x=>x.type==="output_text").map(x=>x.text).join("\n").trim();
    res.json({reply:reply||"I could not prepare a reply. Please try again."});
  }catch(err){console.error(err);res.status(500).json({error:"Unexpected server error."})}
});
const port=process.env.PORT||3000;
app.listen(port,()=>console.log(`JARVIS listening on ${port}`));
