import { login, register } from '../contollers/authentication'; // replace 'your-file' with the actual file name
import { getUserByEmail, createUser } from '../db/users';
import { authentication, random } from '../helpers';
import express from 'express';

jest.mock('../db/users');
jest.mock('../helpers');

describe('register', () => {
    let req: express.Request;
    let res: express.Response;
    let status: jest.Mock;
    let json: jest.Mock;
    let end: jest.Mock;

    beforeEach(() => {
        status = jest.fn().mockReturnThis();
        json = jest.fn().mockReturnThis();
        end = jest.fn().mockReturnThis();
        res = { status, json, end } as any;
        req = { body: {} } as any;
    });

    it('should return 400 if username, password or email is not provided', async () => {
        await register(req, res);
        expect(status).toHaveBeenCalledWith(400);
        expect(json).toHaveBeenCalledWith('Please provide a username, password and email.');
    });

    it('should return 400 if email is already registered', async () => {
        req.body = { username: 'test', password: 'Test@1234', email: 'test@test.com' };
        (getUserByEmail as jest.Mock).mockResolvedValueOnce(true);
        await register(req, res);
        expect(status).toHaveBeenCalledWith(400);
        expect(json).toHaveBeenCalledWith('This email is already registered.');
    });
});