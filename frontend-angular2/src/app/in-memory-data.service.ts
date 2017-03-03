
import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let tasks = [
      {id: 11, text: 'Mr. Nice'},
      {id: 12, text: 'Narco'},
      {id: 13, text: 'Bombasto'},
      {id: 14, text: 'Celeritas'},
      {id: 15, text: 'Magneta'},
      {id: 16, text: 'RubberMan'},
    ];
    return {tasks};
  }
}

