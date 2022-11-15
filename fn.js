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
  connectDB: () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res({
          name: "mike",
          age: 30,
        });
      }, 500);
    });
  },
  disconnectDB: () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res();
      }, 500);
    });
  },
  connectCarDB: () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res({
          brand: "bmw",
          name: "z4",
          color: "red",
        });
      }, 500);
    });
  },
  disconnectCarDB: () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res();
      }, 500);
    });
  },
  createUser: (name) => {
    console.log("실제 유저가 생성되었습니다.");
    return name;
  },
};

module.exports = fn;
