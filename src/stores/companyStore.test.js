import { CompanyStore } from './companyStore';
import { COMPANY_LIST } from '../constants';

describe('CompanyStore tests', () => {
	it('should find company by index', () => {
		const store = new CompanyStore();
		store.companyList = COMPANY_LIST;
		const company = COMPANY_LIST[0];
		expect(store.getCompany(company.id)).toEqual(company);
	});
});