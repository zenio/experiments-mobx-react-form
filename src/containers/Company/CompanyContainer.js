import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import CompanyCard from '../../components/CompanyCard/CompanyCard';
import Spinner from '../../components/UI/Spinner/Spinner';

@inject('companyStore')
@observer
class CompanyContainer extends Component {
	render () {
		let companyDetails = <p>Информация о компании не найдена</p>;
		const companyId = +this.props.match.params.id;
		const company = this.props.companyStore.getCompany(companyId);

		if (company) {
			companyDetails = <CompanyCard company={company} />;
		}

		if (this.props.companyStore.isLoading) {
			companyDetails = <Spinner>Информации о компании</Spinner>;
		} 

		return (
			<div>
				{companyDetails}
			</div>
		);
	}
}

export default CompanyContainer;