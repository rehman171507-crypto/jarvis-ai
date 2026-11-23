JARVIS AI - SECURE STARTER PROJECT
==================================

IMPORTANT
- Ye source project hai, ready APK nahi. Is chat mein APK build/test nahi hua.
- Android app mein OpenAI API key nahi rakhi gayi.
- API key sirf private backend/server ke environment variable mein rakhein.
- API usage par charges ho sakte hain. API account/billing setup ke liye parent/guardian ki madad lein.
- Internet AI use karne par aapka typed/spoken question backend aur OpenAI API ko bheja jata hai.
- Backend request mein store=false set hai. Is se Responses API response storage disable hoti hai; is ka matlab zero data retention ki guarantee nahi.

PROJECT PARTS
1) app/ = Android Java app (speech-to-text, AI server request, text-to-speech)
2) backend/ = Python FastAPI server. OpenAI key yahan environment variable mein hoti hai.

ANDROID CONFIGURATION
1. Open app/src/main/java/com/example/jarvis/MainActivity.java
2. BACKEND_URL ko apne deployed HTTPS backend ke /ask address se replace karein.
3. Android Studio/compatible Gradle build environment mein project open karein.
4. Build > Build APK(s). This source has not been built or device-tested here.

BACKEND CONFIGURATION (SERVER SIDE)
1. Python 3.10+ install karein on a server you control.
2. backend folder mein terminal khol kar: pip install -r requirements.txt
3. Server environment variable set karein:
   Linux/macOS: export OPENAI_API_KEY='your-secret-key'
   Windows PowerShell: $env:OPENAI_API_KEY='your-secret-key'
4. Start: uvicorn server:app --host 0.0.0.0 --port 8000
5. Production mein HTTPS/reverse proxy, authentication/rate limiting, request-size limits, and access controls zaroor lagayen. Public unauthenticated server deploy na karein.
6. Android app mein server ka HTTPS URL set karein.

PRIVACY / LIMITATIONS
- API key APK mein nahi hoti. Use kisi ko chat mein na bhejein.
- Backend ko aap/guardian operate aur secure karte hain; hosting provider bhi data process kar sakta hai.
- Android speech recognition service may process audio according to phone/provider settings.
- App currently uses tap-to-talk only. "Hey JARVIS" always-listening / locked-screen wake word is NOT implemented. Android background microphone rules, foreground-service notification, and device battery controls apply; it cannot be guaranteed always-on.
- Urdu TTS depends on Urdu voice being installed on the phone.
- No app launching or lock-screen bypass is implemented in this starter.

NEXT STEP
Pehlay backend ko trusted adult ki madad se configure/deploy karna hoga, phir Android app mein HTTPS URL dalna hoga. Kisi unknown public server par private sawalat na bhejein.
