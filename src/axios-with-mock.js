import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { FAKE_HTTP_RESPONSE_TIME, COMPANY_LIST } from './constants';

const instance = axios.create();

let companyList = COMPANY_LIST;

let mock = new MockAdapter(instance,  { delayResponse: FAKE_HTTP_RESPONSE_TIME });
mock.onGet('/company').reply(200, companyList);
mock.onPost('/company').reply(200);

export default instance;