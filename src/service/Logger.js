let level;

if (level === undefined) {
  level = process.env.CUSTOM_PARAMS.DEBUG ? 'debug' : 'info';
}

export default {
  async debug(tag, ...args) {
    if (level === 'debug') {
      console.log(this.time(), '[' + tag + ']', ...args);
    }
  },
  async info(tag, ...args) {
    console.info(this.time(), '[' + tag + ']', ...args);
  },
  async warn(tag, ...args) {
    console.warn(this.time(), '[' + tag + ']', ...args);
  },
  async error(tag, ...args) {
    console.error(this.time(), '[' + tag + ']', ...args);
  },
  time() {
    let d = new Date();
    return d.toTimeString().substring(0, 8) + '.' + d.getMilliseconds();
  }
};
