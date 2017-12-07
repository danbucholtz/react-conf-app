import { Config } from '../index';
import { PlatformConfig } from './platform-configs';
export function createConfigController(configObj, platforms) {
    configObj = configObj || {};
    function get(key, fallback) {
        if (configObj[key] !== undefined) {
            return configObj[key];
        }
        let settings = null;
        for (let i = 0; i < platforms.length; i++) {
            settings = platforms[i]['settings'];
            if (settings && settings[key] !== undefined) {
                return settings[key];
            }
        }
        return fallback !== undefined ? fallback : null;
    }
    function getBoolean(key, fallback) {
        const val = get(key);
        if (val === null) {
            return fallback !== undefined ? fallback : false;
        }
        if (typeof val === 'string') {
            return val === 'true';
        }
        return !!val;
    }
    function getNumber(key, fallback) {
        const val = parseFloat(get(key));
        return isNaN(val) ? (fallback !== undefined ? fallback : NaN) : val;
    }
    return {
        get: get,
        getBoolean: getBoolean,
        getNumber: getNumber
    };
}
