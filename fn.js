const fn = {
  add: (a, b) => a + b,
  makeUser: (name, age) => ({ name, age, gender: undefined }),
  throwErr: () => {
    throw new Error("xx");
  },
  get: (callBack) => {
    const name = "mike";
    setTimeout(() => {
      callBack(name);
    }, 3000);
  },
  error: (callBack) => {
    const name = "mike";
    setTimeout(() => {
      throw new Error("server err");
    }, 3000);
  },
  getAge: () => {
    const age = 30;
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(age);
      }, 3000);
    });
  },
  getReject: () => {
    const age = 30;
    return new Promise((res, rej) => {
      setTimeout(() => {
        rej("error");
      }, 3000);
    });
  },
};

module.exports = fn;
