class ArrayBufferConverter {
      constructor() {
            this.buffer = null;

      }

      load(buffer) {
            this.buffer = buffer;

      }

      toString() {
            if (!this.buffer) {
                  throw new Error('Buffer is not loaded');

            }
            const bufferView = new Uint16Array(this.buffer);
            let str = '';
            for (let i = 0; i < bufferView.length; i++) {
                  str += String.fromCharCode(bufferView[i]);

            }
            return str;

      }

}

export default ArrayBufferConverter;