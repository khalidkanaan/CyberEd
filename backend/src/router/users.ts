import express from 'express'
import { deleteUser, getAllUsers } from '../contollers/users'
import { isAuthenticated, isOwner } from '../middlewares';

export default (router: express.Router) => {
    router.get('/users', isAuthenticated, getAllUsers); // adding isAthenticated here allows us to see the users only if a user is logged in
    router.delete('/users/:id', isAuthenticated, isOwner, deleteUser);
}