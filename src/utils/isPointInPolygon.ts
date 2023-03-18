import { Point, Polygon } from "../types/Geofencing"

export default function isPointInPolygon(
  point: Point,
  polygon: Polygon
): boolean {
  const x = point[0]
  const y = point[1]
  let isInside = false

  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i][0],
      yi = polygon[i][1],
      xj = polygon[j][0],
      yj = polygon[j][1]

    const intersect =
      yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi
    // Если нужно определить только те точки, которые лежат внутри полигона, то
    // const onEdge =
    //   (y - yi) * (xj - xi) === (yj - yi) * (x - xi) &&
    //   x >= Math.min(xi, xj) &&
    //   x <= Math.max(xi, xj)

    // if (onEdge) return false
    if (intersect) isInside = !isInside
  }

  return isInside
}
