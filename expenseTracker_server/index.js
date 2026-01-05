import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import "dotenv/config";
import expenseRouter from "./routes/expenseRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(
  cors({
    origin: [
      "https://expense-app-frontend-neon.vercel.app",
      "http://localhost:5173",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use("/expenses", expenseRouter);

connectDB().then(() => {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server is listening at ${PORT}`));
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong on our end!" });
});
