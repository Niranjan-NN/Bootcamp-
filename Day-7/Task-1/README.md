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

## API Endpoints

### 1. Create Student (POST `/students`)
- **Description:** Adds a new student to the database.
- **Request Body (JSON):**
  ```json
  {
    "name": "John Doe",
    "age": 20,
    "major": "Computer Science",
    "rollNo": "S12345"
  }
  ```
- **Response (Success):**
  ```json
  {
    "message": "Student created successfully",
    "studentId": "60d5f8f5b5c3f9a0b8c3b0e7"
  }
  ```
