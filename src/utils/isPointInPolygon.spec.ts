import { Point, Polygon } from '../types/Geofencing'
import isPointInPolygon from './isPointInPolygon'

describe('isPointInPolygon', () => {
  const polygon: Polygon = [
    [1, 1],
    [1, 4],
    [4, 4],
    [4, 1],
  ]

  it('should return true for a point inside the polygon', () => {
    const point: Point = [2, 2]
    const result = isPointInPolygon(point, polygon)
    expect(result).toBe(true)
  })

  it('should return false for a point outside the polygon', () => {
    const point: Point = [5, 5]
    const result = isPointInPolygon(point, polygon)
    expect(result).toBe(false)
  })

  it('should return false for a point on the polygon edge', () => {
    const point: Point = [1, 2]
    const result = isPointInPolygon(point, polygon)
    expect(result).toBe(false)
  })
})
