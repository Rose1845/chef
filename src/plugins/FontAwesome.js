import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCheck,
  faChessPawn,
  faBars,
  faBirthdayCake,
  faPizzaSlice,
  faHouseUser,
  faBreadSlice,
  faPen,
  faBookOpen,
  faHandshake,
  faUtensilSpoon,
  faChalkboardTeacher,
  faUtensils,
  
  
 
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faCheck,
  faChessPawn,
  faBars,
  faBirthdayCake,
  faPizzaSlice,
  faHouseUser,
  faBreadSlice,
  faPen,
  faBookOpen,
  faHandshake,
  faUtensilSpoon,
  faChalkboardTeacher,
  faUtensils,
);
export default (app) => {
  app.component("font-awesome-icon", FontAwesomeIcon);
};
