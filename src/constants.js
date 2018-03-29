export const FAKE_HTTP_RESPONSE_TIME = 1000; // ms

export const OWNERSHIP_IP = 0;
export const OWNERSHIP_OOO = 1;

export const OWNERSHIP_OPTIONS = [
	{id: OWNERSHIP_IP, label: 'ИП'},
	{id: OWNERSHIP_OOO, label: 'ООО'},
];

export const COMPANY_LIST = [{
	id: 0, 
	name: 'Рога и копыта', 
	ogrn: 1234567890123,
	isActive: true,
	ownershipType: OWNERSHIP_OOO,
	registrationDate: new Date()
}, {
	id: 1, 
	name: 'Иванов И.И.',
	ogrn: 1234567890124,
	isActive: false,
	ownershipType: OWNERSHIP_IP,
	registrationDate: new Date()
}, {
	id: 2,
	name: 'Газпром',
	ogrn: 1234567890125,
	isActive: true,
	ownershipType: OWNERSHIP_OOO,
	registrationDate: new Date()
}];