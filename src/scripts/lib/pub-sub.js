class PubSubStore {
  constructor(initialState = null) {
    this.state = initialState;
    this.listeners = {};
  }

  publish({ event, state }) {
    const eventListeners = this.listeners[event];

    this.state = { ...this.state, ...state };

    if (eventListeners && eventListeners.length) {
      for (const listener of eventListeners) {
        listener({ state: this.state, event: event });
      }
    }
  }

  subscribe({ event, listener }) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(listener);
  }

  getState() {
    return this.state;
  }
}

export default PubSubStore;
