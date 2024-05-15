import { JsonValue } from "type-fest";
import { Listing } from "../listing/Listing";
import { User } from "../user/User";

export type Trip = {
  createdAt: Date;
  id: string;
  info: JsonValue;
  listings?: Array<Listing>;
  updatedAt: Date;
  user?: User;
};
