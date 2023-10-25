import express from 'express'
import { getAllUsers } from '../contollers/users'

export default (router: express.Router) => {
    router.get('/users', getAllUsers);
}