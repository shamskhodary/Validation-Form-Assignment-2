import *  as yup from 'yup';


const individualSchema = yup.object().shape({
  firstName: yup.string().required('FirstName field cannot be empty'),
  lastName: yup.string().required('LastName field cannot be empty'),
  email: yup.string().email('Invalid email address').required(),
  password: yup.string().min(8).matches(/(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])/, "Password must contain at least 1 uppercase letter, 1 number, and 1 special character").required(),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required(),
  address: yup.string().required('Address field cannot be empty'),
  phoneNumber: yup.number().required('PhoneNumber field cannot be empty'),
  birthDate: yup.date().required().max(
    new Date((new Date().getFullYear() - 18), new Date().getMonth(), new Date().getDate()),
    'You should be at least 18 years old'
  ),
  gender: yup.string().required('You must choose your gender').oneOf(['male', 'female', 'other']),
});

export default individualSchema;