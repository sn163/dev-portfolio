import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv"
const app = express();
dotenv.config();

const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post("/verify-token", async (req, res) => {
  try {
    const { token, inputVal } = req.body;
    // replace APP_SECRET_KEY with your reCAPTCHA secret key
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.REACT_APP_SECRET_KEY}&response=${token}`
    );
    return res.status(200).json({
      success: true,
      message: "Token successfully verified",
      data: response.data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error verifying token",
    });
  }
});

app.listen(PORT, () => console.log(`App started on port ${PORT}`));
