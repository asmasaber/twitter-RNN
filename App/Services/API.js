export default {
  login: data => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          data &&
          ((data.email === 'asma' || data.email === 'asmaa@email.com') &&
            data.password === '123')
        ) {
          resolve({
            ok: true,
            data: {
              token: 'dummy token',
            },
          });
        } else {
          resolve({
            ok: false,
            data: {
              error:
                'we could not verfiy your credentials. plz double-check and try again. ',
            },
          });
        }
      }, 5000);
    });
  },
  signup: data => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          ok: true,
          data: {
            email: data.email,
          },
        });
      }, 5000);
    });
  },
};
