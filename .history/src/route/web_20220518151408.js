import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";
import movieController from "../controllers/movieController";
import cinemaController from "../controllers/cinemaController";
import showtimeController from "../controllers/showtimeController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", homeController.getHomePage);
    router.get("/about", homeController.getAboutPage);

    router.post("/api/login", userController.handleLogin);
    router.post("/api/create-new-user", userController.createNewUser);
    router.get("/api/get-all-users", userController.handleGetAllUsers);
    router.delete("/api/delete-user", userController.handleDeleteUser);
    router.put("/api/update-user", userController.handleUpdateUser);

    router.get("/api/get-allcode", movieController.handleGetAllcode);

    router.post("/api/create-new-movie", movieController.createNewMovie);
    router.get("/api/get-all-movies", movieController.handleGetAllMovie);
    router.put("/api/update-movie", movieController.handleUpdateMovie);

    router.post("/api/create-new-cineplex", cinemaController.createNewCineplex);
    router.get("/api/get-all-cineplex", cinemaController.handleGetAllCineplex);
    router.put("/api/update-cineplex", cinemaController.handleUpdateCineplex);

    router.post("/api/create-new-cinema", cinemaController.createNewCinema);
    router.get("/api/get-all-cinema", cinemaController.handleGetAllCinema);
    router.put("/api/update-cinema", cinemaController.handleUpdateCinema);
    router.get("/api/get-cinema-by-id", cinemaController.handleGetCinemaById);

    router.post(
        "/api/create-new-showtime",
        showtimeController.createNewShowtime
    );
    router.get(
        "/api/get-all-showtime",
        showtimeController.handleGetAllShowtime
    );
    router.put("/api/update-showtime", showtimeController.handleUpdateShowtime);

    return app.use("/", router);
};

module.exports = initWebRoutes;
