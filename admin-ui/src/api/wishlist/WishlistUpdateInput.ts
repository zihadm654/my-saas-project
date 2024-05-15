import { ListingUpdateManyWithoutWishlistsInput } from "./ListingUpdateManyWithoutWishlistsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WishlistUpdateInput = {
  listings?: ListingUpdateManyWithoutWishlistsInput;
  user?: UserWhereUniqueInput;
};
