import mongoose, { Schema, Document } from 'mongoose'
import { Point } from '../types/Geofencing'

export interface IGeofence extends Document {
  name: string
  coordinates: Array<Point>
}

const GeofenceSchema: Schema = new Schema({
  name: { type: String, required: true },
  coordinates: { type: [[Number]], required: true },
})

export default mongoose.model<IGeofence>('Geofence', GeofenceSchema)
