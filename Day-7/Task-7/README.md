## Installation Steps

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/student-api.git
   cd student-api
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file and add your MongoDB connection string:
   ```sh
   MONGO_URI=mongodb://localhost:27017/studentdb
   PORT=5000
   ```

4. Start the server:
   ```sh
   npm start
   ```
   The server should be running at `http://localhost:5000`.

---
### 7. Get All Students with Pagination (GET `/students?page=1&limit=5`)
- **Response:**
  ```json
  {
    "students": [ /* student data */ ],
    "currentPage": 1,
    "totalPages": 5,
    "totalStudents": 25
  }
  ```
