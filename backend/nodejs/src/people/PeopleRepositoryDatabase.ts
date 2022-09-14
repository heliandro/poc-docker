
export default class PeopleRepositoryDatabase {

    readonly connection: any;

    constructor (connection: any) {
        this.connection = connection;
    }

    async list () {
        const output = await this.connection.query('select * from people', []);
        return output;
    }
}