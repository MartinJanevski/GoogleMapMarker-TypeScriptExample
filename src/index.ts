import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

//
// console.log(user);

const company = new Company();
// console.log(company);
const user = new User();
const customMap = new CustomMap('map');
customMap.addMarker(user);
customMap.addMarker(company);

// customMap.addUserMarker(user);
// customMap.addUserMarker(company);
