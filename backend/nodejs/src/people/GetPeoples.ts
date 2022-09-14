export default class GetPeoples {
    
    constructor(readonly peopleRepository: any) {}

    async execute() {
        const output = await this.peopleRepository.list();
        return output;
    }
}