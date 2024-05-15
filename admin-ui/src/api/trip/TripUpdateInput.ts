import { InputJsonValue } from "../../types";
import { ListingUpdateManyWithoutTripsInput } from "./ListingUpdateManyWithoutTripsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TripUpdateInput = {
  info?: InputJsonValue;
  listings?: ListingUpdateManyWithoutTripsInput;
  user?: UserWhereUniqueInput;
};
