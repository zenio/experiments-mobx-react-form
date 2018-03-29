import React from 'react';
import { observer } from 'mobx-react';
import DatePicker from 'material-ui/DatePicker';

export default observer(({
  field,
  type = 'text',
	placeholder = null,
	floatingLabelText,
	error
}) => (
  <div>
		<DatePicker 
			floatingLabelText={field.label}
			container="inline"
			errorText={error} 
			{...field.bind()} /><br />
  </div>
));