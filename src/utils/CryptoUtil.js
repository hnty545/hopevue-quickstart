import CryptoJS from 'crypto-js';

export function encryptoForMd5(content) {
    return CryptoJS.MD5(content).toString();
}