import  expressAsyncHandler  from 'express-async-handler';
import mysql from "mysql";
import { Request, Response } from 'express';


const database = expressAsyncHandler( async( req: Request, res: Response)=>{
   try {
    const databaseInstance = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'alphauser',
        database: 'authentication',
       });
   } catch (error) {
    res.status(500);
    throw new Error("Failed to ping connection with mysql");
   }
});

export default database;