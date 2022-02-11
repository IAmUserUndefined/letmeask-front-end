import React from 'react';

import FormInputStyle from './styles';

type FormTypes = {
  formValues: any,
  setFormValues: (attributes: any) => void,
  type: string,
  placeholder: string,
  name: string
}

const FormInput = ({ formValues, setFormValues, type, placeholder, name }: FormTypes) => {

    const handleInputChange = (e: any) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };
  
    return (
      <>
        <div>
          <FormInputStyle 
            type={type}
            placeholder={placeholder} 
            name={name} 
            onChange={handleInputChange} 
            value={formValues[name] || ""}
          />
        </div>
      </>
    );
  };
  
export default FormInput;
