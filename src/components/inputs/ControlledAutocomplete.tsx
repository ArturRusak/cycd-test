import { Control, useController } from 'react-hook-form';
import { type AutocompleteProps, type TextFieldProps, Autocomplete, TextField } from '@mui/material';

type ControlledAutocompleteProps<T> = Pick<TextFieldProps, 'label' | 'fullWidth'> & {
  name: string;
  control: Control<any>;
  multiple?: boolean;
  defaultValue?: any;
} & Pick<AutocompleteProps<T, undefined, undefined, undefined>, 'options' | 'getOptionLabel'> &
  Partial<Pick<AutocompleteProps<T, undefined, undefined, undefined>, 'renderOption'>>;

export function ControlledAutocomplete<T>(props: ControlledAutocompleteProps<T>) {
  const { defaultValue, options, label, name, control, fullWidth, multiple, getOptionLabel, renderOption } = props;
  const { field, fieldState } = useController({ name, control });

  return (
    <>
      <Autocomplete
        defaultValue={defaultValue || multiple ? [] : null}
        getOptionLabel={getOptionLabel}
        multiple={multiple}
        options={options}
        renderInput={(params) => (
          <TextField
            {...params}
            error={!!fieldState.error}
            fullWidth={fullWidth}
            helperText={fieldState.error?.message}
            label={label}
          />
        )}
        renderOption={renderOption}
        onChange={(_, value) => field.onChange(value)}
      />
    </>
  );
}
