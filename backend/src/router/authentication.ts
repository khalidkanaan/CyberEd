import express from "express";

import { register } from "../contollers/authentication";

export default (router: express.Router) => {
    router.post('/auth/register', register); // passing the register controller
};