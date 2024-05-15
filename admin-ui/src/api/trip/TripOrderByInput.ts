import { SortOrder } from "../../util/SortOrder";

export type TripOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  info?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
