require("dotenv").config();
const express = require("express");
const path = require("path");
const AllRouter = require("./Router/AllRouter");
const ServiceRouter = require("./Router/ServiceRouter");
const ContactRouter = require("./Router/ContactRoute");
const Admin = require("./Router/adminRouter");
const DBConnect = require("./Database/db");
const allerrormiddleware = require("./middlewares/all_error_mid");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "./client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/dist/index.html"));
});

// send data backent to frontend
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,POST,PATCH,PUT,HEAD,DELETE",
  credential: true,
};
app.use(cors(corsOptions));

// get data from form using json
app.use(express.json());

// add router path here
app.use(AllRouter);

// add contact path here
app.use(ContactRouter);

// add service path here
app.use(ServiceRouter);

// pass error middleware
app.use(allerrormiddleware);

// add admin part
app.use("/admin", Admin);

// code for starting server
DBConnect().then(() => {
  app.listen(PORT, () => {
    console.log(`server start on port: ${PORT}`);
  });
});
