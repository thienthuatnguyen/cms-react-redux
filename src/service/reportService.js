// Import custom utils
import {fetch} from '../utils/httpUtil';
import {API_URL} from '../config/config';

function fetchReport(entityName, params) {
    return fetch(API_URL, entityName, params);
}

export  {
    fetchReport
}


