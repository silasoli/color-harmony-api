import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export type ConfigurationDocument = Configuration & Document;

@Schema()
export class Configuration {
  _id?: mongoose.ObjectId | string;

  user_id: mongoose.ObjectId | string;

  @Prop({ required: true, default: null })
  night_mode: boolean | null;

  @Prop({ required: true, default: null })
  font_size: string | null;

  @Prop({ default: () => new Date() })
  createdAt: Date;
}

export const ConfigurationSchema = SchemaFactory.createForClass(Configuration);
