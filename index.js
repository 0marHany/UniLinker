const express = require("express");
require('dotenv').config()

const app = express();
const port = process.env.port;
const cors = require('cors');
const dbConnection = require("./Configuration/config");
const userRoutes = require("./src/User/routes/student.routes");
const uniRoutes = require("./src/University/routes/University.routes");
const colRoutes = require("./src/Collage/routes/Collage.routes");
const eventRoutes = require("./src/Events/routes/event.routes");
const appRoutes = require("./src/Application/routes/app.routes");
const scholarRoutes = require("./src/Scholarship/routes/Scholarship.routes");

app.use(express.json());
app.use('/uploads', express.static('uploads'));
dbConnection();

app.use(cors({ origin: '*' }))
app.use(userRoutes);
app.use(uniRoutes);
app.use(colRoutes);
app.use(eventRoutes);
app.use(appRoutes);
app.use(scholarRoutes);

app.listen(port, () => {
    console.log(`server is run on port ${port}`);
})
