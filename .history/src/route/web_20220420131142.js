import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", homeController.getHomePage);
    router.get("/about", homeController.getAboutPage);

    router.post("/api/create-new-user", userController.createNewUser);
    router.get("/api/get-all-users", userController.handleGetAllUsers);
    router.delete("/api/delete-users", userController.handleDeleteUsers);

    return app.use("/", router);
};

module.exports = initWebRoutes;
