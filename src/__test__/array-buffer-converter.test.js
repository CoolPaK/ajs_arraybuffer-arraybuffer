import ArrayBufferConverter from '../js/Array-buffer-converter';
import getBuffer from '../js/getBuffer';

describe('ArrayBufferConverter', () => {
      it('should load buffer correctly', () => {
            const converter = new ArrayBufferConverter();
            const buffer = getBuffer();
            converter.load(buffer);
            expect(converter.buffer).toBe(buffer);
        
    });
    
      it('should throw error if buffer is not loaded', () => {
            const converter = new ArrayBufferConverter();
            expect(() => converter.toString()).toThrowError('Buffer is not loaded');
        
    });
    
      it('should convert buffer to string correctly', () => {
            const converter = new ArrayBufferConverter();
            const buffer = getBuffer();
            converter.load(buffer);
            const str = converter.toString();
            expect(str).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
        
    });
    
});