import type { PickupSlot } from '../types'

export const remainingCapacity = (slot: PickupSlot) => Math.max(0, slot.capacity - slot.used)
export const slotState = (slot: PickupSlot) => {
  const remaining = remainingCapacity(slot)
  if (remaining === 0) return 'full'
  if (remaining <= 5) return 'limited'
  return 'available'
}
