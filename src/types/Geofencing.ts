export type Polygon = Array<Point>
export type Point = [number, number]

export type TGeofence = {
  id: string
  name: string
  coordinates: Polygon
}
