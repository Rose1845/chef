import { library } from "@fortawesome/fontawesome-svg-core";
import { faTwitter,faInstagram,faGithub } from "@fortawesome/free-brands-svg-icons";
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
  faUser,
  
  
 
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
  faUser,
  faTwitter,
  faInstagram,
  faGithub
  
);
export default (app) => {
  app.component("font-awesome-icon", FontAwesomeIcon);
};
