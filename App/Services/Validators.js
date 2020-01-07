export const isRequied = (message = 'This field is required.') => ({
  validate: value => value.trim().length > 0,
  message,
});

export const email = (message = 'Not Filed Email.') => ({
  validate: value => {
    console.log('email', value);
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      `${value ? value.trim() : ''}`,
    );
  },

  message,
});

export const minLength = (
  length,
  message = `Min. Length should be ${length}`,
) => ({
  validate: value => value.length >= length,
  message,
});

export const maxLength = (
  length,
  message = `Max. Length should be ${length}`,
) => ({
  validate: value => value.length <= length,
  message,
});

export const password = (
  message = 'password should contain at least one (1) character from three (3) of the following categories: Uppercase letter (A-Z) Lowercase letter (a-z) Digit (0-9), Min Length 4 characters and Max 8 ',
) => ({
  validate: value => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/.test(value),
  message,
});

export const matches = (xValue, message = 'Not Matched') => ({
  validate: value => xValue() === value,
  message,
});
