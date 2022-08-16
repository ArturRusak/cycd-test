import React, { ForwardedRef } from 'react';
import { Control, useController } from 'react-hook-form';
import { AutoSizer, List } from 'react-virtualized';
import { Autocomplete, AutocompleteProps, TextField, TextFieldProps } from '@mui/material';

type VirtualizedAutocompleteProps<T> = Pick<TextFieldProps, 'label' | 'fullWidth'> & {
  name: string;
  control: Control<any>;
  multiple?: boolean;
  defaultValue?: any;
} & Pick<
    AutocompleteProps<T, undefined, undefined, undefined>,
    'options' | 'getOptionLabel' | 'disabled' | 'isOptionEqualToValue'
  > &
  Partial<Pick<AutocompleteProps<T, undefined, undefined, undefined>, 'renderOption'>>;

const ListBoxComponent = React.forwardRef((props: any, ref: ForwardedRef<any>) => {
  const { children, role, ...other } = props;
  const itemCount = Array.isArray(children) ? children.length : 0;

  return (
    <div ref={ref} {...other}>
      <AutoSizer disableHeight disableWidth>
        {() => (
          <List
            containerStyle={{
              width: '100%',
              maxWidth: '100%',
            }}
            height={200}
            role={role}
            rowCount={itemCount}
            rowHeight={48}
            rowRenderer={(props) =>
              React.cloneElement(children[props.index], {
                style: props.style,
              })
            }
            style={{
              width: '100%',
            }}
            width={1}
          />
        )}
      </AutoSizer>
    </div>
  );
});

export default function VirtualizedAutocomplete<T>(props: VirtualizedAutocompleteProps<T>) {
  const { control, defaultValue, label, name, renderOption, ...rest } = props;
  const { field, fieldState } = useController({ control, name, defaultValue });

  return (
    <Autocomplete
      ListboxComponent={ListBoxComponent}
      renderInput={(params) => (
        <TextField
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
          label={label}
          variant="outlined"
          {...params}
        />
      )}
      renderOption={renderOption}
      value={field.value || []}
      onChange={(_, value) => field.onChange(value)}
      {...rest}
    />
  );
}
