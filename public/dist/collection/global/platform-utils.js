export function isCordova() {
    return !!(window['cordova'] || window['PhoneGap'] || window['phonegap']);
}
