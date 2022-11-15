const fn = require("./fn.js");

test("1은 1이야", () => {
  expect(1).toBe(1);
});

//failed
// test("2 더하기 3은 3이야", () => {
// expect(fn.add(2, 3)).toBe(3);
//   });

test("2 더하기 3은 5야", () => {
  expect(fn.add(2, 3)).not.toBe(3);
});

test("name=mike, age=30", () => {
  expect(fn.makeUser("mike", 30)).toEqual({ name: "mike", age: 30 });
});

//엄격 비교
//gender 라는 키가 undefined지만 check를 해줘야한다.
test("name=mike, age=30,toStrictEqual", () => {
  expect(fn.makeUser("mike", 30)).toStrictEqual({
    name: "mike",
    age: 30,
    gender: undefined,
  });
});

//toBeNull
//toBeUndefined
//toBeDefined

test("null은 null입니다", () => {
  expect(null).toBeNull();
});

//toBeTruthy
//toBeFalsy

test("0은 false입니다.", () => {
  expect(fn.add(1, -1)).toBeFalsy();
});

test("비어있는 문자열은 false입니다.", () => {
  expect(fn.add("", "")).toBeFalsy();
});

test("비어있지 않은 문자열은 true입니다.", () => {
  expect(fn.add("hello", "world")).toBeTruthy();
});

//toBeGreaterThan 크다
//toBeGreaterThanOrEqual 크거나 같다
//toBeLessThan 작다
//toBeLessThanOrEqual 작거나 같다

test("ID는 10자 이하여야 합니다.", () => {
  const id = "THE_BLACK";
  expect(id.length).toBeLessThanOrEqual(10);
});

//소수 비교

//falied
// test("0.1더하기 0.2는 0.3이여야 한다.", () => {
//   expect(fn.add(0.1, 0.2)).toBe(0.3);
// });

//toBeCloseTo=> 근사치 값인지 확인한다
test("0.1더하기 0.2는 0.3이어야 한다.", () => {
  expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3);
});

//대소문자 구분, h가
test("Hello wordl에 h의 존재여부", () => {
  expect("hello world").toMatch(/h/);
});

//배열에서 값찾기
test("유저 리스트에서 값 찾기", () => {
  const user = "mike";
  const userList = ["mike", "amie", "choi", "suger"];
  expect(userList).toContain(user);
});

//에러 발생 확인
test("에러가 발생했나요", () => {
  expect(() => fn.throwErr()).toThrow();
  //에러 본문으로 찾기
  expect(() => fn.throwErr()).toThrow("xx");
  //failed
  //   expect(() => fn.throwErr()).toThrow("oo");
});
