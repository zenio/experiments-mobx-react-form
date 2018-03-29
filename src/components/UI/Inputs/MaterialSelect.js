import React from 'react';
import { observer } from 'mobx-react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default observer(({ field, options }) => {

  return (
    <div>
			<SelectField
        id={field.id}
				floatingLabelText={field.label}
				onChange={(e, i,value) => field.set(value)}
        value={field.value}>
          {field.extra.map(val =>
            <MenuItem key={val.id} value={val.id} primaryText={val.label} />
          )}
			</SelectField>		
  </div>
  );
});
