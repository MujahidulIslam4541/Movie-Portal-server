# Movie Portal Server 🎥

This is the backend server for the **Movie Portal Project**, developed using **Node.js**, **Express.js**, and **MongoDB**. It powers the Movie Portal application by providing RESTful APIs for managing movies, user authentication, and database operations.

---

## 🌐 API Base URL
**Base URL:**  
`https://your-server-url.com/api`  
*(Replace with your actual deployed server URL)*

---

## 📋 Key Features
1. **User Authentication:**
   - Secure authentication using **Firebase Authentication**.
   - **JWT (JSON Web Token)** for managing session-based authorization.

2. **Movie Management:**
   - Full **CRUD functionality** for managing movies.
   - Add, update, retrieve, and delete movie records.

3. **Favorites Management:**
   - Endpoints to add and remove movies from a user's favorites list.

4. **Secure Database Integration:**
   - **MongoDB** used for reliable and scalable database operations.
   - Data validation with **Mongoose** schemas.

5. **Error Handling & Logging:**
   - Comprehensive error handling with meaningful HTTP responses.
   - Logging of API requests and errors for debugging purposes.

6. **Middleware:**
   - **CORS** middleware enabled for secure cross-origin requests.
   - Secure request parsing using **body-parser** and **Express JSON**.

7. **Environment Configuration:**
   - Sensitive information managed securely with `.env` files.

---

## 🛠️ Technologies Used
- **Backend Framework:** Node.js, Express.js
- **Database:** MongoDB (with Mongoose)
- **Authentication:** Firebase Authentication, JWT
- **Environment Management:** dotenv
- **Other Tools:** nodemon, cors, bcrypt

---

## 🚀 API Endpoints

### **Authentication**
- **POST** `/auth/register` - Register a new user.  
- **POST** `/auth/login` - Login user and return a JWT token.

### **Movies**
- **GET** `/movies` - Retrieve all movies.  
- **GET** `/movies/:id` - Retrieve a specific movie by ID.  
- **POST** `/movies` - Add a new movie.  
- **PUT** `/movies/:id` - Update an existing movie.  
- **DELETE** `/movies/:id` - Delete a movie.

### **Favorites**
- **GET** `/favorites` - Retrieve the logged-in user's favorite movies.  
- **POST** `/favorites` - Add a movie to favorites.  
- **DELETE** `/favorites/:id` - Remove a movie from favorites.

---

## 🚀 How to Run Locally


