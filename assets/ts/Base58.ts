import baseX from 'base-x'
import { Buffer } from 'buffer';

export class Base58 {
    private static readonly ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';

    private static readonly baseX = baseX(Base58.ALPHABET);

    public static decode(input: string) {
        return Base58.baseX.decode(input);
    }

    public static encode(input: Buffer) {
        return Base58.baseX.encode(input);
    }

    public static encodeString(input: string) {
        try {
            const buffer = new Buffer(input);
            return Base58.baseX.encode(buffer);
        } catch (e) {
            console.error(e);
            return '';
        }
    }
}
