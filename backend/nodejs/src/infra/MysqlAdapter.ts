import mysql from 'mysql';
import { dbconfig } from './dbconfig';


export default class MysqlAdapter {

    connection: any

    constructor () {
        this.connection = mysql.createConnection(dbconfig);

    }

    query (sql: string, args: any[] = []): Promise<any> {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, args, (err: any, rows: any) => {
                if (err) {
                    return reject(err);
                }
                resolve(rows);
            });
        });
    }

    close(): Promise<void> {
        return this.connection.end();
    }
}