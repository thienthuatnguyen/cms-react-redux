// Import custom utils
import {fetch, store, update, destroy} from '../utils/httpUtil';
// import {getPathParam, getQueryParam} from '../utils/serializeUtil';

import {API_URL} from '../config/config';

function fetchProfiles(entityName, params) {
    return fetch(API_URL, entityName, params);
}
function fetchProfilesById(entityName, dataId, params) {
    return fetch(API_URL, entityName , params);
}
function storeProfiles(entityName, data) {
    return store(API_URL, entityName, data);
}
function destroyProfiles(entityName, dataId) {
    return destroy(API_URL, entityName, dataId);
}
function updateProfiles(entityName, data, dataId) {
    return update(API_URL, entityName, data, dataId);
}
export  {
    fetchProfiles,
    fetchProfilesById,
    storeProfiles,
    destroyProfiles,
    updateProfiles
}


