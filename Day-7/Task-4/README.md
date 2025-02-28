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
### 4. Update Student (PUT `/students/:id`)
- **Description:** Updates an existing student record.
- **Request Body (JSON):**
  ```json
  {
    "age": 21
  }
  ```
- **Response:**
  ```json
  {
    "message": "Student updated successfully"
  }
  ```
