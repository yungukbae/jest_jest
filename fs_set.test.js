const fn = require("./fn");

let num = 0;
let user;
//각 테스트 ``ex)test()...`` 가 실행되기전에 매번 실행된다
beforeEach(() => {
  num = 0;
});

//각 테스트 ``ex)test()...`` 가 실행된 직후에 매번 실행된다
afterEach(() => {});

//테스트 실행전 한번 실행
beforeAll(async () => {
  user = await fn.connectDB();
});

//모든 테스트 마친후 한번 실행
afterAll(() => {
  fn.disconnectDB();
});

test("0 + 1 = 1", () => {
  num = fn.add(num, 1);
  expect(num).toBe(1);
});
test("0 + 2 = 2", () => {
  num = fn.add(num, 2);
  expect(num).toBe(2);
});
test("0 + 3 = 3", () => {
  num = fn.add(num, 3);
  expect(num).toBe(3);
});
test("0 + 4 = 4", () => {
  num = fn.add(num, 4);
  expect(num).toBe(4);
});

test("유저 이름 가져오기", () => {
  expect(user.name).toBe("mike");
});

test("유저 나이 가져오기", () => {
  expect(user.age).toBe(30);
});

//비슷한 작업끼리 묶는 함수
describe("Car관련 작업", () => {
  let car;
  //이 describe내부에서만 동작한다
  beforeAll(async () => {
    car = await fn.connectCarDB();
  });
  //이 describe내부에서만 동작한다
  afterAll(() => {
    fn.disconnectCarDB();
  });

  test("차량 브랜드 가져오기", () => {
    expect(car.brand).toBe("bmw");
  });

  test("차량 이름 가져오기", () => {
    expect(car.name).toBe("z4");
  });
});

// only의 경우 해당 테스트만 테스트후 다른 테스트는 생략한다!!
test.only("0 + 4 = 4", () => {
  num = fn.add(num, 4);
  expect(num).toBe(4);
});
