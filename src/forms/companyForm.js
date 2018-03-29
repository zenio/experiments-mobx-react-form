import Form  from 'mobx-react-form';
import validatorjs from 'validatorjs';

import {OWNERSHIP_OPTIONS} from '../constants';

export class CompanyForm extends Form {

  plugins() {
    return { dvr: validatorjs };
  }

  setup() {
    return {
      fields: [{
        name: 'name',
        label: 'Название',
        placeholder: 'Название компании',
        rules: 'required|string|between:5,25'
      }, {
        name: 'ogrn',
        label: 'ОГРН',
        placeholder: 'ОГРН компании',
        rules: 'required|numeric'
      }, {
        name: 'ownershipType',
        label: 'Форма собственности',
        rules: 'required',
        extra: OWNERSHIP_OPTIONS       
      }, {
        name: 'isActive',
        label: 'Активна',
        rules: 'boolean'
      }, {
        name: 'registrationDate',
        label: 'Дата регистрации',
        rules: 'required|date'
      }]
    };
  }
}

export default new CompanyForm();