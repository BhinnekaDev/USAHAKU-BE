import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async upsertFromFirebase(payload: {
    uid: string;
    email?: string;
    name?: string;
    picture?: string;
    phoneNumber?: string;
    provider?: string;
  }) {
    const { uid, email, name, picture, phoneNumber, provider } = payload;
    const now = new Date();
    const update = {
      email,
      nama: name,
      photoURL: picture,
      phoneNumber,
      provider,
      lastLogin: now,
    };

    // upsert: update if exists, or create
    const user = await this.userModel
      .findOneAndUpdate(
        { uid },
        { $set: update, $setOnInsert: { uid, roles: [] } },
        { upsert: true, new: true },
      )
      .exec();

    return user;
  }

  async findByUid(uid: string) {
    return this.userModel.findOne({ uid }).exec();
  }
}
