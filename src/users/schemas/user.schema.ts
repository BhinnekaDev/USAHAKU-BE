import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ collection: 'users', timestamps: true })
export class User {
  @Prop({ required: true, unique: true })
  uid: string;

  @Prop()
  email?: string;

  @Prop()
  nama?: string;

  @Prop()
  photoURL?: string;

  @Prop()
  provider?: string;

  @Prop()
  phoneNumber?: string;

  @Prop({ default: [] })
  roles: string[];

  @Prop()
  lastLogin?: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
