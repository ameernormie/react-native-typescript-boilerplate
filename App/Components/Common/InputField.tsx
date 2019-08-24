import React, { useState } from 'react';
import { TextInput, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Colors } from 'Themes';
import { FormikProps } from 'formik';
import { IAppFormValues, FieldType } from 'Types';
import Icon from 'Themes/Icon';

interface ITextInputProps extends FormikProps<IAppFormValues> {
  placeholder: string;
  /** determines if the text in the field is visible or not */
  fieldName: string;
  /** determines the field type of the input field i.e. text or password */
  fieldType: FieldType;
}

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    borderColor: Colors.border,
    flexDirection: 'row',
    height: 50,
    borderRadius: 5,
    marginVertical: 8,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 8,
    letterSpacing: 0.35,
  },
  inputIcon: { marginRight: 10 },
});

export function InputField(props: ITextInputProps) {
  /** Current state of the input field */
  const [active, setActive] = useState(false);
  /** Visibility status of the input text - Initialized based on the field type of input */
  const [isSecured, secureText] = useState(
    props.fieldType === FieldType.password,
  );

  const {
    handleChange,
    handleBlur,
    values,
    fieldName,
    setFieldTouched,
    placeholder,
    errors,
    touched,
    fieldType,
  } = props;

  /**
   * Sets touched value of the field to true
   * Sets the active status of the field to true
   *
   * @method handleFieldFocus
   *
   * @returns {void}
   */
  function handleFieldFocus() {
    setFieldTouched(fieldName, true);
    setActive(true);
  }

  /**
   * Calls handleBlur of the formik with the field name
   * Sets the active status of the field to false
   *
   * @method handleFieldBlur
   *
   * @returns {void}
   */
  function handleFieldBlur() {
    handleBlur(fieldName);
    setActive(false);
  }

  /**
   * Toggles the visibility  of text in the input field
   *
   * @method toggleTextVisibility
   *
   * @returns {void}
   */
  function toggleTextVisibility() {
    secureText(!isSecured);
  }

  return (
    <View
      style={[
        styles.inputContainer,
        {
          borderColor: active
            ? Colors.fieldActiveBorder
            : errors[fieldName] && touched[fieldName]
            ? Colors.fieldErrorBorder
            : Colors.border,
        },
      ]}
    >
      <TextInput
        style={styles.input}
        placeholderTextColor={Colors.text}
        placeholder={placeholder}
        onChangeText={handleChange(fieldName)}
        onFocus={handleFieldFocus}
        onBlur={handleFieldBlur}
        value={values[fieldName]}
        secureTextEntry={isSecured}
      />
      {/* If field type is password then show an icon to show or hide the text inside the input field */}
      {fieldType === FieldType.password ? (
        <TouchableOpacity
          onPress={toggleTextVisibility}
          style={styles.inputIcon}
        >
          <Icon
            name={isSecured ? 'eye-open' : 'eye-closed'}
            size={20}
            color={Colors.inputIconColor}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
}
