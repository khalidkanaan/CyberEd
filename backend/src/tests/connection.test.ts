import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config();

describe('Database Connection', () => {
  beforeAll(async () => {
    await mongoose.connect(`${process.env.DB_URI}`);
  });

  it('should be able to connect to the database', async () => {
    const db = mongoose.connection;
    expect(db.readyState).toBe(1);
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });
});
