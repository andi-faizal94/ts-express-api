import express from "express";
import { Request, Response } from "express";

// create and setup express app
const app = express();
const PORT = 8000;
app.use(express.json());

// register routes

app.get("/users", function (req: Request, res: Response) {
  // here we will have logic to return all users
  res.send("hallo");
});

app.get("/users/:id", function (req: Request, res: Response) {
  // here we will have logic to return user by id
  res.send("hello");
  console.log("hai");
});

app.post("/users", function (req: Request, res: Response) {
  // here we will have logic to save a user
});

app.put("/users/:id", function (req: Request, res: Response) {
  // here we will have logic to update a user by a given user id
});

app.delete("/users/:id", function (req: Request, res: Response) {
  // here we will have logic to delete a user by a given user id
});

// start express server
app.listen(PORT, () => {
  console.log(`Server is running at https://localhost:${PORT}`);
});
