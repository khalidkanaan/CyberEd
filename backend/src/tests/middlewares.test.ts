import { Request, Response, NextFunction } from 'express';
import { isAuthenticated, isOwner } from '../middlewares/index'; 
import { getUserBySessionToken } from '../db/users';

jest.mock('../db/users', () => ({ 
  getUserBySessionToken: jest.fn(),
}));

describe('isAuthenticated', () => {
    let req: Request & { cookies: any; identity: any };
    let res: Response;
    let next: NextFunction;
    let sendStatusSpy: jest.SpyInstance;

    beforeEach(() => {
        sendStatusSpy = jest.fn();
        req = {
        cookies: {},
        identity: {},
        } as Request & { cookies: any; identity: any };
        res = { sendStatus: sendStatusSpy } as any;
        next = jest.fn();
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

  it('should return 403 if no session token is provided', async () => {
    await isAuthenticated(req, res, next);
    expect(sendStatusSpy).toHaveBeenCalledWith(403);
  });

  it('should return 403 if no user is associated with the session token', async () => {
    req.cookies['TEST-AUTH'] = 'test-token';
    await isAuthenticated(req, res, next);
    expect(sendStatusSpy).toHaveBeenCalledWith(403);
  });

  it('should call next if a user is associated with the session token', async () => {
    req.cookies['TEST-AUTH'] = 'test-token';
    (getUserBySessionToken as jest.Mock).mockResolvedValueOnce({ id: 'test-user' });
    await isAuthenticated(req, res, next);
    expect(next).toHaveBeenCalled();
  });

  it('should return 400 if an error occurs', async () => {
    req.cookies['TEST-AUTH'] = 'test-token';
    (getUserBySessionToken as jest.Mock).mockRejectedValueOnce(new Error('test error'));
    await isAuthenticated(req, res, next);
    expect(sendStatusSpy).toHaveBeenCalledWith(400);
  });
});

describe('isOwner', () => {
  let req: Request & { params: any; identity: any };
  let res: Response;
  let next: NextFunction;
  let sendStatusSpy: jest.SpyInstance;

  beforeEach(() => {
    sendStatusSpy = jest.fn();
    req = {
      params: {},
      identity: {},
    } as Request & { params: any; identity: any };
    res = { sendStatus: sendStatusSpy } as any;
    next = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should return 403 if no user is logged in', async () => {
    await isOwner(req, res, next);
    expect(sendStatusSpy).toHaveBeenCalledWith(403);
  });

  it('should return 403 if the logged in user is not the owner', async () => {
    req.params.id = 'test-id';
    req.identity._id = 'another-id';
    await isOwner(req, res, next);
    expect(sendStatusSpy).toHaveBeenCalledWith(403);
  });

  it('should call next if the logged in user is the owner', async () => {
    req.params.id = 'test-id';
    req.identity._id = 'test-id';
    await isOwner(req, res, next);
    expect(next).toHaveBeenCalled();
  });

//   it('should return 400 if an error occurs', async () => {
//     req.params.id = 'test-id';
//     req.identity._id = jest.fn().mockRejectedValue(new Error('test error'));
//     await isOwner(req, res, next);
//     expect(sendStatusSpy).toHaveBeenCalledWith(400);
//   });
});
