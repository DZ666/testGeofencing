import { Router } from 'express'
import Geofence, { IGeofence } from '../models/Geofence'
import isPointInPolygon from '../utils/isPointInPolygon'

const router = Router()

router.get('/', async (_req, res) => {
  const geofences = await Geofence.find()
  res.json(geofences)
})

router.post('/', async (req, res) => {
  const geofence: IGeofence = new Geofence(req.body)
  await geofence.save()
  res.json(geofence)
})

router.put('/:id', async (req, res) => {
  const geofence = await Geofence.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
  res.json(geofence)
})

router.delete('/:id', async (req, res) => {
  const geofence = await Geofence.findByIdAndRemove(req.params.id)
  res.json(geofence)
})

router.post('/check', async (req, res) => {
  const { lat, lon, geofenceId } = req.body,
    geofence = await Geofence.findById(geofenceId)

  if (!geofence) {
    res.status(404).json({ error: 'Geofence not found' })
    return
  }

  const withinBounds = isPointInPolygon([lat, lon], geofence.coordinates)
  res.json({ withinBounds })
})

export default router
