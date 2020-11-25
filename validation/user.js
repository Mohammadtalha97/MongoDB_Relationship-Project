import Joi from "joi";

export const validateUserRegistration = (user) => {
  const schema = {
    name: Joi.string().min(5).max(50).trim().lowercase().required(),
    password: Joi.string()
      .required()
      .min(6)
      .regex(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/),
    email: Joi.string()
      .required()
      .trim()
      .lowercase()
      .email()
      .regex(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
  };

  return Joi.validate(user, schema);
};

export const validateUserLogin = (user) => {
  const schema = {
    email: Joi.string()
      .required()
      .trim()
      .lowercase()
      .email()
      .regex(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
    password: Joi.string().required().min(6),
  };
  return Joi.validate(user, schema);
};
