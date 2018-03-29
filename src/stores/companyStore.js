import { observable, action } from 'mobx';

import axios from '../axios-with-mock';

export class CompanyStore {
	@observable isLoading = false;
	@observable companyList = [];
	@observable errors = null;

	getCompany(id) {
		return this.companyList.find(company => company.id === id);
	}

	@action loadCompanyList() {
		this.isLoading = true;
		
		axios.get('/company')
			.then(response => this.companyList = response.data)
			.catch(error => this.errors = 'Ошибка загрузки списка компаний')
			.finally(action(() => this.isLoading = false ));
	}

	@action updateCompany(company) {
		this.isLoading = true;
		
		axios.post('/company')
			.then(response => {
				var foundIndex = this.companyList.findIndex(x => x.id === company.id);
				this.companyList[foundIndex] = company;
			})
			.catch(error => this.errors = 'Ошибка обновления компании')
			.finally(action(() => this.isLoading = false));
	}	
}

export default new CompanyStore();