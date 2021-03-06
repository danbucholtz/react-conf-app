import { isCordova } from './platform-utils';
const IPAD = 'ipad';
const IPHONE = 'iphone';
const IOS = 'ios';
const WINDOWS_PHONE = ['windows phone'];
// order from most specifc to least specific
export const PLATFORM_CONFIGS = [
    {
        name: IPAD,
        isMatch: (url, userAgent) => isPlatformMatch(url, userAgent, IPAD, [IPAD], WINDOWS_PHONE)
    },
    {
        name: IPHONE,
        isMatch: (url, userAgent) => isPlatformMatch(url, userAgent, IPHONE, [IPHONE], WINDOWS_PHONE)
    },
    {
        name: IOS,
        settings: {
            mode: IOS,
            tabsHighlight: false,
            statusbarPadding: isCordova,
        },
        isMatch: (url, userAgent) => isPlatformMatch(url, userAgent, IOS, [IPHONE, IPAD, 'ipod'], WINDOWS_PHONE)
    },
    {
        name: 'android',
        settings: {
            activator: 'ripple',
            mode: 'md',
        },
        isMatch: (url, userAgent) => isPlatformMatch(url, userAgent, 'android', ['android', 'silk'], WINDOWS_PHONE)
    },
    {
        name: 'core',
        settings: {
            mode: 'md'
        }
    },
];
export function detectPlatforms(url, userAgent, platforms, defaultPlatform) {
    // bracket notation to ensure they're not property renamed
    let validPlatforms = platforms.filter(p => p.isMatch && p.isMatch(url, userAgent));
    if (!validPlatforms.length) {
        validPlatforms = platforms.filter(p => p.name === defaultPlatform);
    }
    return validPlatforms;
}
export function isPlatformMatch(url, userAgent, platformName, userAgentAtLeastHas, userAgentMustNotHave) {
    const queryValue = queryParam(url, 'ionicplatform');
    if (queryValue) {
        return queryValue === platformName;
    }
    if (userAgent) {
        userAgent = userAgent.toLowerCase();
        for (var i = 0; i < userAgentAtLeastHas.length; i++) {
            if (userAgent.indexOf(userAgentAtLeastHas[i]) > -1) {
                for (var j = 0; j < userAgentMustNotHave.length; j++) {
                    if (userAgent.indexOf(userAgentMustNotHave[j]) > -1) {
                        return false;
                    }
                }
                return true;
            }
        }
    }
    return false;
}
function queryParam(url, key) {
    key = key.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + key + '=([^&#]*)');
    var results = regex.exec(url);
    return results ? decodeURIComponent(results[1].replace(/\+/g, ' ')) : null;
}
