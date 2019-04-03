import { Base58 } from './Base58';
export { Base58 } from './Base58';
import { Base64 } from './Base64';
export { Base64 } from './Base64';

if (typeof window !== 'undefined') {
    (window as any).tools = {
        Base58,
        Base64
    };
}