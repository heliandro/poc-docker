import GetPeoples from './GetPeoples';

export default class PeopleController {

    constructor (readonly http: any, readonly getPeoples: GetPeoples) {

        http.on('get', '/peoples', async (req: Request, res: Response) => {
            const output = await this.getPeoples.execute();
            return output;
        });
    }
}