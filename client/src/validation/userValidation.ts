import *  as yup from 'yup';


const validationSchema = yup.object({
  firstName: yup.string().required('FirstName field cannot be empty'),
  lastName: yup.string().required('LastName field cannot be empty'),
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match') ,
  address: yup.string().required('Address field cannot be empty'),
  phoneNumber: yup.number().required('PhoneNumber field cannot be empty'),
  birthDate: yup.date().required().max(
    new Date((new Date().getFullYear() - 18), new Date().getMonth(), new Date().getDate()),
    'You should be at least 18 years old'
  ),
  gender: yup.string().required().oneOf(['Male', 'Female', 'Other']),
});

export default validationSchema;