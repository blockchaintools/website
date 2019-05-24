import { decrypt } from 'bip38';
import { encode }  from 'wif';

export class Bitcoin {

    public static BIP38toWIF(bip38key: string, password: string) {
        console.log(bip38key, password);
        const decryptedKey = decrypt(bip38key, password, function(status) {
            console.log(status) // will print the percent every time current increases by 1000
        });
        // const privateKeyWif = decrypt(bip38key, password, function(status) {
        //     console.log(status) // will print the percent every time current increases by 1000
        // });
        return encode(0x80, decryptedKey.privateKey, decryptedKey.compressed);
    }

}
