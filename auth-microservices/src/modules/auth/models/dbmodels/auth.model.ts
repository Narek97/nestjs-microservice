import { BaseModel } from '../base.model';
import { Table } from 'sequelize-typescript';
import { ObjectType } from '@nestjs/graphql';

interface CreateAuthAttr {
  name: string;
  email: string;
}

@Table({ tableName: 'auth' })
@ObjectType()
export class Auth extends BaseModel<Auth, CreateAuthAttr> {
  ///////////////////////////////// Relations /////////////////////////////////
}
