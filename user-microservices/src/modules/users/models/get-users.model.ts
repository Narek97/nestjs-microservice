import { ObjectType } from '@nestjs/graphql';
import { PaginationModel } from '@/common/models/pagination.model';
import { Users } from '@Models/dbmodels/user.model';

@ObjectType()
export class GetUsersModel extends PaginationModel {
  // @Field(() => [Companies])
  users: Users[];
}
