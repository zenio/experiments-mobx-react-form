import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import CompanyList from '../../components/CompanyList/CompanyList';
import Spinner from '../../components/UI/Spinner/Spinner';

@inject('companyStore')
@observer
class CompanyListContainer extends Component {
	render () {
		let companyList = <CompanyList list={this.props.companyStore.companyList} />;

		if (this.props.companyStore.errors) {
			companyList = this.props.companyStore.errors;
		}

		if (this.props.companyStore.isLoading) {
			companyList = <Spinner>Список компаний</Spinner>;
		} 

		return (
			<div>
				{companyList}
			</div>
		);
	}
}

export default CompanyListContainer;