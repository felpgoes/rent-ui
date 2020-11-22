export const validationPattern = {
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  number: /^[0-9\b]+$/,
  telefone: /^[1-9]{2}([2-8])[0-9]{3}[0-9]{4}$/,
  sequenciaIgualTelefone: /^([0-9])\1{3}[0-9]\1{3}$/,
  celular: /^[1-9]{2}(9[1-9])[0-9]{3}[0-9]{4}$/,
  sequenciaIgualCelular: /^([0-9])\1{4}[0-9]\1{3}$/,
  password: {
    regexValidate: /^([a-zA-Z0-9!z\"#$%&'()*+,-@./:;<=>?[\]^_`{|}~])*$/g,
    charValidate: /[a-z]/,
    camelValidate: /[A-Z]/,
    numberValidate: /[0-9]/,
    symbolValidate: /([!\"#$%&'()*+,-\/@./:;<=>?[\]^_`{|}~])/g,
    changePasswordValidate: /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W_]){1,})(?!.*\s).{6,}$/g,
  },
};

export const maskPattern = {
  Celular: [
    '(',
    /[1-9]/,
    /\d/,
    ')',
    ' ',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ],
  Residencial: [
    '(',
    /[1-9]/,
    /\d/,
    ')',
    ' ',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ],
};
export const isEmail = (email) => {
  return !!email.match(validationPattern.email);
};
export const isNumber = (number) => {
  return !!number.match(validationPattern.number);
};

export const isValidTelefone = (telefone) => {
  return !!telefone.match(validationPattern.telefone);
};
export const isLengthTelefone = (telefone) => {
  return !!(telefone.length > 10 || telefone.length < 12);
};
export const isSequenciaIgualTelefone = (telefone) => {
  return !!telefone
    .substring(2)
    .match(validationPattern.sequenciaIgualTelefone);
};

export const isValidMesmoTelefone = (telefone) => {
  return (
    isValidTelefone(telefone) &&
    isLengthTelefone(telefone) &&
    !isSequenciaIgualTelefone(telefone)
  );
};
export const isValidCelular = (celular) => {
  return !!celular.match(validationPattern.celular);
};
export const isLengthCelular = (celular) => {
  return !!(celular.length > 9 || celular.length < 11);
};
export const isSequenciaIgualCelular = (celular) => {
  return !!celular.substring(2).match(validationPattern.sequenciaIgualCelular);
};

export const isValidMesmoCelular = (celular) => {
  return (
    isValidCelular(celular) &&
    isLengthCelular(celular) &&
    !isSequenciaIgualCelular(celular)
  );
};

export const isValidPassword = (password) => {
  return !!password.match(validationPattern.password.regexValidate);
};
export const passwordHasSymbols = (password) => {
  return !!password.match(validationPattern.password.symbolValidate);
};
export const passwordSize = (password) => {
  return !!(password.length >= 8 && password.length <= 22);
};

export const isPartialEmail = (email) => {
  return !!email.includes('@');
};

export const isChangePassword = (password) => {
  return !!password.match(validationPattern.password.changePasswordValidate);
};
