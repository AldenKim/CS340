import { S3DaoInterface } from "../S3DaoInterface";
import { SessionsDao } from "../SessionsDao";
import { UsersDao } from "../UsersDao";

export interface DaoFactory {
    createUsersDao(): UsersDao; 
    createSessionsDao(): SessionsDao;
    createS3Dao(): S3DaoInterface;
}