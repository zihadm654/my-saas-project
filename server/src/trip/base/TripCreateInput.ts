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
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { ListingCreateNestedManyWithoutTripsInput } from "./ListingCreateNestedManyWithoutTripsInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class TripCreateInput {
  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  info!: InputJsonValue;

  @ApiProperty({
    required: true,
    type: () => ListingCreateNestedManyWithoutTripsInput,
  })
  @ValidateNested()
  @Type(() => ListingCreateNestedManyWithoutTripsInput)
  @IsOptional()
  @Field(() => ListingCreateNestedManyWithoutTripsInput, {
    nullable: true,
  })
  listings?: ListingCreateNestedManyWithoutTripsInput;

  @ApiProperty({
    required: true,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @Field(() => UserWhereUniqueInput)
  user!: UserWhereUniqueInput;
}

export { TripCreateInput as TripCreateInput };
