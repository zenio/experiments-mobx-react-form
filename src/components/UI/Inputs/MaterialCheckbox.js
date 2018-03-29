import React from 'react';
import { observer } from 'mobx-react';
import Checkbox from 'material-ui/Checkbox';

export default observer(({ field }) => (
  <div>
    <Checkbox
      labelPosition="right"
      label={field.label}
      id={field.id}
      name={field.name}
      checked={field.value}
      onCheck={field.onChange}
      onFocus={field.onFocus}
      onBlur={field.onBlur}
    />
  </div>
));
