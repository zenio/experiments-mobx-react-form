import React from 'react';
import { ListItem } from 'material-ui/List';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CompanyList from './CompanyList';
import { COMPANY_LIST } from '../../constants';

configure({adapter: new Adapter()});

describe('<CompanyList />', () => {
	it('should render appropriate number of items', () => {
		const wrapper = shallow(<CompanyList list={COMPANY_LIST} />);
		expect(wrapper.find(ListItem)).toHaveLength(COMPANY_LIST.length);		
	})
});