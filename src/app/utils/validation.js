// utils/validationSchema.js
import * as Yup from 'yup';

export const noteValidationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  content: Yup.string().required('Content is required'),
});
