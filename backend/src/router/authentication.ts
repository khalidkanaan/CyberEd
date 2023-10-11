import express from "express";

import { register, login } from "../contollers/authentication";

export default (router: express.Router) => {
    router.post('/auth/register', register); // passing the register controller
    router.post('/auth/login', login);
};