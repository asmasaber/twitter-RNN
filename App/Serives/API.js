export default {
  login: data => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data && (data.username === 'asma' && data.password === '123')) {
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
};
