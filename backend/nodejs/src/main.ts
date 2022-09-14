import ExpressAdapter from './infra/ExpressAdapter';
import MysqlAdapter from './infra/MysqlAdapter';
import GetPeoples from './people/GetPeoples';
import PeopleController from './people/PeopleController';
import PeopleRepositoryDatabase from './people/PeopleRepositoryDatabase';


const http = new ExpressAdapter();
const connection = new MysqlAdapter();
const peopleRepository = new PeopleRepositoryDatabase(connection);
const getPeoples = new GetPeoples(peopleRepository);
new PeopleController(http, getPeoples);
http.listen(process.env.NODE_API_PORT || 3000);
