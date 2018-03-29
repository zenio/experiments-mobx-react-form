import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import Spinner from '../../components/UI/Spinner/Spinner';
import CompanyEditForm from '../../components/CompanyEditForm/CompanyEditForm';
import { CompanyForm } from '../../forms/companyForm';

@inject('companyStore')
@observer
class CompanyEditor extends Component {
	constructor(props) {
		super(props);
		this.companyId = +this.props.match.params.id;
		this.goBackUrl = "/company/" + this.companyId;
		this.companyForm = new CompanyForm();
	}

	updateHandler = (event) => {
		this.companyForm.onSubmit(event);
		if (this.companyForm.isValid) {
			this.props.companyStore.updateCompany({
				...this.companyForm.values(),
				id: this.companyId
			});
			this.props.history.push(this.goBackUrl);
		}
	}
	
	render () {
		let form = <p>Не удалось загрузить форму редактирования</p>;
		const company = this.props.companyStore.getCompany(this.companyId);

		if (company) {
			this.companyForm.update({...company});
			form = <CompanyEditForm 
				form={ this.companyForm} 
				updated={this.updateHandler}
				goBackUrl={this.goBackUrl} />;
		}
		
		if (this.props.companyStore.isLoading) {
			form = <Spinner>Формы редактирования</Spinner>;
		}	

		return (
			<div>
				{form}
			</div>
		);
	}
}

export default CompanyEditor;