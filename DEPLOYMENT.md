# Deployment Instructions for GPT to Human Language Converter App

## Backend Deployment (Heroku)

1. **Prerequisites:**

   - Install [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
   - Have a Heroku account

2. **Prepare Backend:**

   - Ensure `backend/package.json` has a start script, e.g.:
     ```json
     "scripts": {
       "start": "node server.js"
     }
     ```
   - Use environment variables for sensitive data (e.g., `SECRET_KEY`, `GOOGLE_CLIENT_ID`).
   - Update `server.js` to use `process.env.PORT` or default to 5000.

3. **Deploy:**

   ```bash
   cd backend
   heroku login
   heroku create your-app-name
   git init
   heroku git:remote -a your-app-name
   git add .
   git commit -m "Deploy backend"
   git push heroku master
   heroku config:set SECRET_KEY=your_secret_key GOOGLE_CLIENT_ID=your_google_client_id
   heroku open
   ```

4. **Verify backend is running and note the URL.**

---

## Frontend Deployment (Vercel or Netlify)

1. **Prepare Frontend:**

   - If using plain HTML/JS, no build step needed.
   - Update API URLs in `frontend/js/main.js` to point to the deployed backend URL.

2. **Deploy on Vercel:**

   - Install [Vercel CLI](https://vercel.com/docs/cli)
   - Run:
     ```bash
     cd frontend
     vercel login
     vercel
     ```
   - Follow prompts to deploy.
   - Set environment variables if needed.

3. **Deploy on Netlify:**
   - Create a Netlify account.
   - Drag and drop the `frontend` folder in Netlify UI or use Netlify CLI.
   - Update API URLs as above.

---

## Notes

- Ensure CORS is configured on backend to allow frontend domain.
- Use HTTPS URLs in production.
- Secure environment variables and secrets.
- For Google OAuth, set authorized redirect URIs in Google Cloud Console to your deployed frontend URL.

---

## Summary

- Backend runs on Heroku with environment variables.
- Frontend runs on Vercel or Netlify as static site.
- Frontend communicates with backend via deployed API URL.
- Google OAuth integrated for login.

---

If you want, I can help you with creating configuration files (e.g., `Procfile` for Heroku) or scripts for deployment automation.
