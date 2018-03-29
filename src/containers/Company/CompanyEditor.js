import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import Spinner from '../../components/UI/Spinner/Spinner';
import CompanyEditForm from '../../components/CompanyEditForm/CompanyEditForm';

@inject('companyStore', 'companyForm')
@observer
class CompanyEditor extends Component {
	constructor(props) {
		super(props);
		this.companyId = +this.props.match.params.id;
		this.goBackUrl = "/company/" + this.companyId;
	}

	updateHandler = (event) => {
		this.props.companyForm.onSubmit(event);
		if (this.props.companyForm.isValid) {
			this.props.companyStore.updateCompany({
				...this.props.companyForm.values(),
				id: this.companyId
			});
			this.props.history.push(this.goBackUrl);
		}
	}
	
	render () {
		let form = <p>Не удалось загрузить форму редактирования</p>;
		const company = this.props.companyStore.getCompany(this.companyId);

		if (company) {
			this.props.companyForm.clear();
			this.props.companyForm.update({...company});
			form = <CompanyEditForm 
				form={ this.props.companyForm} 
				updated={this.updateHandler}
				goBackUrl={this.goBackUrl}/>;
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