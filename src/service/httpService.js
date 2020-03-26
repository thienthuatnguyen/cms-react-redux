// Import custom utils
import {fetch, store, update, destroy} from '../utils/httpUtil';
// import {getPathParam, getQueryParam} from '../utils/serializeUtil';

import {API_URL} from '../config/config';

export function fetchEntity(entityName, params) {
    return fetch(API_URL, entityName, params);
}

// export function fetchEntityById(entityName, dataId, params) {
//     return fetch(API_URL, entityName , params);
// }

// export function fetchEntityByBlank(entityName) {
//     return fetch(API_URL, entityName);
// }

// export function storeEntity(entityName, data) {
//     return store(API_URL, entityName, data);
// }

// export function updateEntity(entityName, data, dataId) {
//     return update(API_URL, getPathParam(entityName.toLowerCase(), dataId), data);
// }

// export function destroyEntity(entityName, dataId) {
//     return destroy(API_URL, getPathParam(entityName.toLowerCase(), dataId));
// }
