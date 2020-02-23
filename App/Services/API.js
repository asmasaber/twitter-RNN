import feedTemplate from './feedTemplate';
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
  feeds: {
    get: data => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const {pageSize} = data;
          resolve({
            ok: true,
            data: {
              items: Array.apply(null, Array(pageSize)).map(function() {
                return feedTemplate();
              }),
            },
          });
        }, 0);
      });
    },
  },
  profile: {
    get: data => {
      return new Promise((resolve, reject) => {
        resolve({
          ok: true,
          data: {
            name: 'Asma Saber',
            bio: 'Frontend Devloper',
            location: 'Assyt',
            website: '',
            dateOfBirth: '',
          },
        });
      });
    },
    post: data => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            ok: true,
            data,
          });
        }, 1000);
      });
    },
  },
};
