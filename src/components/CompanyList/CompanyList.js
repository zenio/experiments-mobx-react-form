import React from 'react';
import { Link } from 'react-router-dom';
import {List, ListItem} from 'material-ui/List';
import PropTypes from "prop-types";

const companyList = ({list}) => {
	return (
		<List>
			{list.map(company => (
				<Link key={company.id} to={"/company/" + company.id}>
						<ListItem primaryText={company.name} />
				</Link>	
			))}
		</List>
	);
};

companyList.propTypes = {
	list: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
}

export default companyList;