import { BaseModel } from '../base.model';
import { Column, DataType, Table } from 'sequelize-typescript';
import { Field, ObjectType } from '@nestjs/graphql';

interface CreateUsersAttr {
  name: string;
  email: string;
}

@Table({ tableName: 'users' })
@ObjectType()
export class Users extends BaseModel<Users, CreateUsersAttr> {
  @Field(() => String)
  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  name: string;

  @Field(() => String)
  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  email: string;

  ///////////////////////////////// Relations /////////////////////////////////
}
