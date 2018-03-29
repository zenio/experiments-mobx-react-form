/**
 * @file services/companyService.js
 * Simple http middleware
 */
import axios from '../tools/axios-with-mock';

export const CompanyService = {
	all: () => 
		axios.get('/company'),
	update: () =>
		axios.post('/company')	
}