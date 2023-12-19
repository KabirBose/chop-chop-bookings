import { IconProp } from "@fortawesome/fontawesome-svg-core";

import {
  faHouseChimney,
  faBookOpen,
  faShop,
  faHeadset,
  faMoneyBills,
} from "@fortawesome/free-solid-svg-icons";

export const barItems = [
  {
    icon: faHouseChimney,
    label: "Home",
    address: "/",
  },
  {
    icon: faBookOpen,
    label: "Bookings",
    address: "/bookings",
  },
  {
    icon: faShop,
    label: "Inventory",
    address: "/inventory",
  },
  {
    icon: faHeadset,
    label: "Tickets",
    address: "/tickets",
  },
  {
    icon: faMoneyBills,
    label: "Finances",
    address: "/finances",
  },
];
