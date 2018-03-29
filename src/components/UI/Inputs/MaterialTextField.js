import React from 'react';
import { observer } from 'mobx-react';
import TextField from 'material-ui/TextField';

export default observer(({
  field,
  type = 'text',
  placeholder = null
}) => (
  <div>
    <TextField
      floatingLabelText={field.label}
      errorText={field.error}
      {...field.bind({ type, placeholder })}
    /><br />
  </div>
));