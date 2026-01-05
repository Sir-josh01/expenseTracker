# 💸 Expense Tracker (MERN Monorepo)

A professional full-stack financial management application. This project provides users with a clear visual representation of their income and expenses, helping them make informed financial decisions.

## 🎯 Problems It Solves
* **Financial Blindness:** Users often lose track of small daily spends. This app provides a centralized place to log every transaction.
* **Manual Math Errors:** Automates the calculation of total balance, total income, and total expenses, removing the risk of human error.
* **Lack of Data Persistence:** Unlike physical notebooks, this cloud-synced solution ensures your data is safe and accessible from any device.

## 🚀 Key Functions
* **Full CRUD Operations:** Add, view, edit, and delete transactions with instant UI updates.
* **Real-time Balance Tracking:** Dynamic calculation of the user's current standing based on transaction history.
* **Monorepo Management:** Single-command development environment for both client and server using `concurrently`.
* **State Management:** Efficient data handling on the frontend to ensure a smooth, "no-refresh" experience.

## ScreenShots
| Screenshot 1 | Screenshot 2 | Screenshot 3 |
| :---: | :---: | :---: |
| <img src="./screenshots/app-preview-01.png" width="250"> | <img src="./screenshots/app-preview-02.png" width="250"> | <img src="./screenshots/app-preview-03.png" width="250"> |

<!-- ![App Screenshot](./screenshots/app-preview.png)-->

## 🧠 Challenges Faced
* **CORS & Cross-Origin Security:** Solving the "Access-Control-Allow-Origin" error when connecting a Vercel-hosted frontend to a Render-hosted backend.
* **Monorepo Migration:** Cleaning up "Ghost" Git submodules (the arrow folders) to ensure GitHub recognized the project as a single repository.
* **Deployment Syncing:** Configuring **Root Directories** on both Vercel and Render to ensure they looked into the correct sub-folders (`/client` and `/server`).
* **Environment Configuration:** Managing hidden `.env` variables across different environments to keep MongoDB credentials secure.

## 🛠️ Tech Stack
![React](https://img.shields.io/badge/react-%2320232d.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

## 📡 API Documentation
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `/expenses` | Retrieve all transactions from the database |
| **POST** | `/expenses` | Add a new transaction (title, amount) |
| **PUT** | `/expenses/:id` | Update an existing transaction |
| **DELETE** | `/expenses/:id` | Remove a transaction permanently |

## ⚙️ Environment Variables
To run this project locally, create a `.env` file in the `expenseTracker_server` folder with the following:
* `MONGO_URI` = Your MongoDB Atlas Connection String
* `PORT` = 8000

## 📁 Project Structure
* `/expenseTracker_client`: Vite + React frontend
* `/expenseTracker_server`: Node.js + Express backend
* `package.json`: Root controller for the monorepo

---
*Created as part of the Web Dev Journey 2026*