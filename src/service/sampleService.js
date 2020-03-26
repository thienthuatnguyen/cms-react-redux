// Import custom utils
import {fetch, store, update, destroy} from '../utils/httpUtil';
// import {getPathParam, getQueryParam} from '../utils/serializeUtil';

import {API_URL, API_URL_REPORT} from '../config/config';

function fetchSample(entityName, params) {
    return fetch(API_URL, entityName, params);
}
function fetchSampleById(entityName, dataId, params) {
    return fetch(API_URL, entityName , dataId, params);
}
// function fetchSampleReportById(entityName, dataId, params) {
//     return fetch(API_URL_REPORT, entityName , dataId, params);
// }
function storeSample(entityName, data) {
    return store(API_URL, entityName, data);
}
function destroySample(entityName, dataId) {
    return destroy(API_URL, entityName, dataId);
}
export  {
    fetchSample,
    fetchSampleById,
    storeSample,
    destroySample
}


