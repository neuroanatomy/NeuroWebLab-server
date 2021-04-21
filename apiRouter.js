//Imports
const express = require("express");


//const user = require("./routes/api/user");
const racine = require("./routes/api/racine");
/*const appConfig = require("./routes/api/appConfig");
const data = require("./routes/api/data");
const ddo = require("./routes/api/ddo");
const upload = require("./routes/api/uploadFile");
const token = require("./routes/api/token");
const racine = require("./routes/api/racine");

const salesorder = require("./routes/api/salesorder");
const multer = require("./middleware/multer-config");
const auth = require("./middleware/auth");
*/
const path = require("path")

const auth = require("./routes/api/auth");




//Router

exports.router = (function () {

    const apiRouter = express.Router();


    apiRouter.use("/", racine);

    apiRouter.use("/auth", auth);
    // apiRouter.use("/images", express.static(path.join(__dirname, "public/images")));
    // apiRouter.use("/user", auth, user);
    // apiRouter.use("/appConfig", auth, appConfig);
    // apiRouter.use("/data", data);
    // apiRouter.use("/ddo", auth, ddo); //*Dynamic Data Object *//
    // apiRouter.use("/salesorder", auth, salesorder);
    // apiRouter.use("/token", token);

    // apiRouter.use("/uploadfile", auth, multer, upload); //*envoyer un fichiuer *//

    return apiRouter;

})();