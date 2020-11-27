import Joi from "joi";

export const validateStudentDetails = (user) => {
  const schema = {
    name: Joi.string().min(5).max(50).required().lowercase().trim(),
    email: Joi.string()
      .trim()
      .lowercase()
      .email()
      .required()
      .regex(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
    dateOfBirth: Joi.date()
      .trim()
      .required()
      .regex(/\d{4}-\d{2}-\d{2}/),
    phone: Joi.number()
      .min(9)
      .max(10)
      .required()
      .regex(/^[789]\d{9}$/),
    city: Joi.string().lowercase().trim().max(50).required(),
    state: Joi.strict().lowercase().trim().max(50).required(),
    pincode: Joi.number()
      .required()
      .min(6)
      .regex(/^[1-9][0-9]{5}$/),
  };
  return Joi.validate(user, schema);
};
