import { Base58 } from './Base58';
export { Base58 } from './Base58';

if (typeof window !== 'undefined') {
    (window as any).tools = {
        Base58
    };
}