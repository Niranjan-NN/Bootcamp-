## 5️⃣ **Environment Variables**

### 📝 Overview  
Use environment variables to manage sensitive data and configurations.

### 🚀 What I Learned  
- 🏷️ **dotenv Usage:** Managed environment variables securely.
- ⚙️ **Configuration Management:** Separated config from code.
- 🧩 **Security Practices:** Prevented exposing sensitive information.

### 🛠️ Installation Procedure
1. Install the `dotenv` package:
   ```bash
   mkdir env-example && cd env-example
   npm init -y
   npm install express dotenv
   ```
2. Create a `.env` file with variables like `PORT=3000`.
3. Access these variables in `server.js` using `process.env`.
4. Run the server with environment variables loaded.
