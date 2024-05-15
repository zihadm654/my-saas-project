import { ListingCreateNestedManyWithoutWishlistsInput } from "./ListingCreateNestedManyWithoutWishlistsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WishlistCreateInput = {
  listings?: ListingCreateNestedManyWithoutWishlistsInput;
  user: UserWhereUniqueInput;
};
