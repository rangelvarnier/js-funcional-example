const events = new Map()

export const EventEmetter = {

  on (event, listener) {
    !events.has(event) && events.set(event, [])
    events.get(event).push(listener)
  },

  emit (event, data) {
    const listeners = events.get(event)
    if (listeners) {
      listeners.forEach(listener => listener(data))
    }
  }

}
