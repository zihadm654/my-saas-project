import { InputJsonValue } from "../../types";
import { ListingCreateNestedManyWithoutTripsInput } from "./ListingCreateNestedManyWithoutTripsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TripCreateInput = {
  info: InputJsonValue;
  listings?: ListingCreateNestedManyWithoutTripsInput;
  user: UserWhereUniqueInput;
};
