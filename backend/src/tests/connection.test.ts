import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config();

const DB_URI = process.env.DB_URI || 'mongodb://localhost:27017';

describe('Database Connection', () => {
  beforeAll(async () => {
    await mongoose.connect(DB_URI);
  });

  it('should be able to connect to the database', async () => {
    const db = mongoose.connection;
    expect(db.readyState).toBe(1);
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });
});