import express from 'express';
import { deleteUserById, getUserById, getUsers } from '../db/users';

export const getAllUsers = async (req: express.Request, res: express.Response) => {
    try {
        const users = await getUsers();
        if (users.length === 0) {
            return res.status(200).json({ message: 'No users found' });
        }
        return res.status(200).json(users);
    } catch (error) {
        return res.sendStatus(400);
    }
}

export const deleteUser = async (req: express.Request, res: express.Response) => {
    try{
        const { id } = req.params;
        const deletedUser = await deleteUserById(id);
        
        return res.json(deletedUser);
    } catch (error) {
        return res.sendStatus(400);
    }
}

export const updateUserProgress = async (req: express.Request, res: express.Response) => {
    try{
        const { id } = req.params;
        const { progress } = req.body;

        if (!progress) {
            return res.sendStatus(400);
        }

        const user = await getUserById(id);
        user.progress = progress;
        await user.save();

        return res.status(200).json(user).end();
    }catch(error){
        return res.sendStatus(400);
    }
}