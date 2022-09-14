import express, { Request, Response } from 'express';

export default class ExpressAdapter {
    readonly app: any;

    constructor () {
        this.app = express();
        this.app.use(express.json());
    }

    on (method: string, url: string, callback: Function) {
        this.app[method](url, async function (req: Request, res: Response) {
            const output = await callback(req.params, req.body);
            res.json(output);
        });
    }

    listen (port: any) {
        this.app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    }
}