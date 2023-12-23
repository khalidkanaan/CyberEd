import express, { response } from "express";
import { getUserByEmail } from "../db/users";
import { createUser } from "../db/users";
import { authentication, random } from "../helpers";

export const login = async (req: express.Request, res: express.Response) => {
    try {
        const { email, password } = req.body;

        if (!email || !password){
            return res.sendStatus(400);
        }

        const user = await getUserByEmail(email).select('+authentication.salt +authentication.password');

        if (!user){
            return res.sendStatus(400);
        }

        const expectedHash = authentication(user.authentication.salt, password);

        if (user.authentication.password != expectedHash){
            return res.sendStatus(403);
        }

        const salt = random();
        user.authentication.sessionToken = authentication(salt, user._id.toString());

        await user.save();

        res.cookie('TEST-AUTH', user.authentication.sessionToken, {domain: 'localhost', path: '/'})

        return res.status(200).json({id: user.id, username: user.username, progress: user.progress}).end()

    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

export const register = async (req: express.Request, res: express.Response) => {
    try {
        const { username, password, email } = req.body;
        let errors = [];

        if (!username || !password || !email ) {
            errors.push('Please provide a username, password and email.');
        }

        // Validate the password
        if (password.length < 9 || password.length > 100) {
            errors.push('Password length should be more than 9 characters long.');
        }

        if (!/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/[0-9]/.test(password) || !/[\W_]/.test(password)) {
            errors.push('Password should include uppercase and lowercase letters, numbers, and special characters.');
        }

        if (password.toLowerCase().includes(username.toLowerCase())) {
            errors.push('Password should not contain the username.');
        }

        const existingUser = await getUserByEmail(email);

        if (existingUser) {
            errors.push('This email is already registered.');
        }

        if (errors.length > 0) {
            return res.status(400).json(errors);
        }

        const salt = random();
        const progress = 0;
        const user = await createUser({
            email,
            username,
            progress,
            authentication: {
                salt,
                password: authentication(salt, password),
            }
        });
        return res.status(200).json(user).end();
        
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}
