import { Base58 } from './Base58';
import { Bitcoin } from './Bitcoin';
export { Base58 } from './Base58';
import { Base64 } from './Base64';
export { Base64 } from './Base64';
export { Bitcoin } from './Bitcoin';


if (typeof window !== 'undefined') {
    (window as any).tools = {
        Base58,
        Base64,
        Bitcoin,
    };}
