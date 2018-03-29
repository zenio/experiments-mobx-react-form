import React from 'react';
import { Link } from 'react-router-dom';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from "prop-types";

import { OWNERSHIP_OPTIONS } from '../../constants';

const companyCard = ({company}) => {
	const isActive = company.isActive ? "Да" : "Нет";
	const date = company.registrationDate.toLocaleDateString();
	const ownership = OWNERSHIP_OPTIONS.filter(x => {
		return company.ownershipType === x.id
	})[0]['label'];

	return (
		<Card>
			<CardHeader title={company.name} />
			<CardText>
				<p><strong>ОГРН</strong>: {company.ogrn}</p>
				<p><strong>Дата регистрация: </strong>: {date}</p>
				<p><strong>Форма собственности: </strong>: {ownership}</p>
				<p><strong>Активна: </strong>: {isActive}</p>
			</CardText>		
			<CardActions>
				<Link to={"/company/edit/" + company.id}>
					<RaisedButton label="Редактировать" />
				</Link>
				<Link to="/">			
					<RaisedButton label="Назад к списку компаний" />
				</Link>
			</CardActions>
		</Card>
	);
};

companyCard.propTypes = {
	company: PropTypes.shape({
		ogrn: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		ownershipType: PropTypes.number.isRequired,
		registrationDate: PropTypes.object.isRequired,
		isActive: PropTypes.bool
	})
}

export default companyCard;