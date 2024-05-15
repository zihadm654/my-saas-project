/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ListingCreateNestedManyWithoutWishlistsInput } from "./ListingCreateNestedManyWithoutWishlistsInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class WishlistCreateInput {
  @ApiProperty({
    required: true,
    type: () => ListingCreateNestedManyWithoutWishlistsInput,
  })
  @ValidateNested()
  @Type(() => ListingCreateNestedManyWithoutWishlistsInput)
  @IsOptional()
  @Field(() => ListingCreateNestedManyWithoutWishlistsInput, {
    nullable: true,
  })
  listings?: ListingCreateNestedManyWithoutWishlistsInput;

  @ApiProperty({
    required: true,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @Field(() => UserWhereUniqueInput)
  user!: UserWhereUniqueInput;
}

export { WishlistCreateInput as WishlistCreateInput };
