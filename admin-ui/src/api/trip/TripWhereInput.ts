import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { ListingListRelationFilter } from "../listing/ListingListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TripWhereInput = {
  id?: StringFilter;
  info?: JsonFilter;
  listings?: ListingListRelationFilter;
  user?: UserWhereUniqueInput;
};
