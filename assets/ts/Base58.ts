import baseX from 'base-x'
import { Buffer } from 'buffer';

export class Base58 {
    private static readonly ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';

    private static readonly baseX = baseX(Base58.ALPHABET);

    public static decode(str: string) {
        return Base58.baseX.decode(str);
    }

    public static encode(buffer: Buffer) {
        return Base58.baseX.encode(buffer);
    }

    public static encodeString(str: string) {
        try {
            const buffer = new Buffer(str);
            return Base58.baseX.encode(buffer);
        } catch (e) {
            console.error(e);
            return '';
        }
    }
}
