import { deleteUser, getAllUsers, updateUserProgress } from '../contollers/users';
import { Request, Response } from 'express';

jest.mock('../db/users');

describe('User Controller', () => {
    let mockRequest: Partial<Request>;
    let mockResponse: Partial<Response>;

    beforeEach(() => {
        jest.clearAllMocks();
        mockRequest = {};
        mockResponse = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis(),
            sendStatus: jest.fn().mockReturnThis(),
            end: jest.fn().mockReturnThis(),
        };
    });

    //Testing getAllUsers 
    it('should get all users', async () => {                                    //User get success test
        const { getUsers } = require('../db/users');
        getUsers.mockResolvedValue([{ id: '1', name: 'Test User' }]);

        await getAllUsers(mockRequest as Request, mockResponse as Response);
        expect(mockResponse.status).toHaveBeenCalledWith(200);
        expect(mockResponse.json).toHaveBeenCalled();
    }, 10000);

    it('should return 400 if getUsers throws an error', async () => {           //User get failure test                        
        // Mock getUsers to throw an error
        const { getUsers } = require('../db/users');
        getUsers.mockRejectedValue(new Error('Database error'));
    
        await getAllUsers(mockRequest as Request, mockResponse as Response);
        expect(mockResponse.sendStatus).toHaveBeenCalledWith(400);
    }, 10000); 
       

    //Testing deleteUser
    it('should delete a user', async () => {                                    //User delete success test
        mockRequest.params = { id: '1' };
        await deleteUser(mockRequest as Request, mockResponse as Response);
        expect(mockResponse.json).toHaveBeenCalled();
    }, 10000);

    it('should return 400 if delete user fails', async () => {                  //User delete failure test
        // Mock deleteUserById to throw an error
        const { deleteUserById } = require('../db/users');
        deleteUserById.mockRejectedValue(new Error('Delete failed'));

        mockRequest.params = { id: '1' };
        await deleteUser(mockRequest as Request, mockResponse as Response);
        expect(mockResponse.sendStatus).toHaveBeenCalledWith(400);
    }, 10000); 


    //Testing updateUserProgress
    it('should return 400 if update user progress fails', async () => {         //Progress update success test
        const { getUserById } = require('../db/users');
        const mockUser = { id: '1', progress: 50, save: jest.fn().mockRejectedValue(new Error('Mock error')) };
        getUserById.mockResolvedValue(mockUser);
    
        mockRequest.params = { id: '1' };
        mockRequest.body = { progress: 50 };
        await updateUserProgress(mockRequest as Request, mockResponse as Response);
        expect(mockResponse.sendStatus).toHaveBeenCalledWith(400);
    }, 10000);

    it('should return 400 if update user progress fails', async () => {         //Progress update failure test
        // Mock getUserById to throw an error
        jest.mock('../db/users', () => ({
            getUserById: jest.fn().mockReturnValue(Promise.reject(new Error('Update failed'))),
        }));

        mockRequest.params = { id: '1' };
        mockRequest.body = { progress: 50 };
        await updateUserProgress(mockRequest as Request, mockResponse as Response);
        expect(mockResponse.sendStatus).toHaveBeenCalled();
    }, 10000);
});
