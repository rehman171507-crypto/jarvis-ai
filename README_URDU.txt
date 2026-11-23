JARVIS FULL AI WEBSITE — IMPORTANT SETUP

This is the full website + Node.js backend source. It is NOT a static-only demo.
The browser calls /api/chat; the server securely calls the OpenAI Responses API.

DEPLOY (one service):
1. Upload this whole project folder to a private Git repository or deploy it to a Node.js host such as Render.
2. Create a Web Service from the repository. Build command: npm install. Start command: npm start.
3. Add environment variable OPENAI_API_KEY in the hosting dashboard. Add OPENAI_MODEL=gpt-4.1-mini if needed.
4. Never put the secret key in public files, and never send it in chat.
5. Once deployed, open the service URL. /health should return {"ok":true,...}; the website should show AI SERVER ONLINE.
6. Real AI use requires an active API account and may incur usage charges. Ask a parent/guardian to review account and billing setup.

FEATURES:
- Premium blue JARVIS interface
- Real AI replies through secure backend
- Urdu/English response instruction
- Browser speech recognition (browser support + microphone permission; typically HTTPS)
- Text-to-speech replies
- Mobile responsive layout

LIMITATIONS:
- "Hey JARVIS" always-on wake word is not included. Browser microphone requires a user action and permission.
- Website-to-app converters generally wrap a hosted HTTPS URL. First deploy and test the website, then convert its URL.
- An APK wrapper does not automatically add Android background microphone/wake-word capabilities.
