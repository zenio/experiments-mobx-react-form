import React from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from "prop-types";

import MaterialTextField from '../../components/UI/Inputs/MaterialTextField';
import MaterialCheckbox from '../../components/UI/Inputs/MaterialCheckbox';
import MaterialDatepicker from '../../components/UI/Inputs/MaterialDatepicker';
import MaterialSelect from '../../components/UI/Inputs/MaterialSelect';

const companyEditForm = observer(({form, updated, goBackUrl}) => {

	return (
		<form onSubmit={updated}>
			<MaterialTextField field={form.$('name')} />
			<MaterialTextField field={form.$('ogrn')} />
			<MaterialDatepicker field={form.$('registrationDate')} />
			<MaterialCheckbox field={form.$('isActive')} />
			<MaterialSelect field={form.$('ownershipType')} />

			<p>{form.error}</p>	

			<RaisedButton type="submit" label="Сохранить" />
			<Link to={goBackUrl}>
				<RaisedButton type="button" label="Отменить" style={{marginLeft: '10px'}} />
			</Link>	
		</form>
	);
});

companyEditForm.propTypes = {
	form: PropTypes.object.isRequired,
	updated: PropTypes.func.isRequired
}

companyEditForm.defaultProps = {
	goBackUrl: '/'
}

export default companyEditForm;