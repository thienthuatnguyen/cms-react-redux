// Import custom utils
import {fetch, store, update, destroy} from '../utils/httpUtil';
// import {getPathParam, getQueryParam} from '../utils/serializeUtil';

import {API_URL} from '../config/config';

function userLogin(entityName, data) {
    return store(API_URL, entityName, data);
}
export default userLogin


