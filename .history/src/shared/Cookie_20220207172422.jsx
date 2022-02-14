//getcookie는 name으로 value를 가져옴
const getCookie = name => {
  let value = document.cookie;
  //이름을 가지고 짜르게 되면, map이나 for문을 거치지 않아도 됨.

  let parts = value.split('; ${name}='); // aa=bb (; user_id) = aaa

  //if문을 통해 우리가 원하는 cookie값이 없음을 대비함.
};

//exp = 5는 exp를 받아오지 않아도 기본값으로 지정해 준다.
const setCookie = (name, value, exp = 5) => {
  let data = new Date();
  data.setTime(data.getTime() + exp * 24 * 60 * 60 * 1000);

  document.cookie = `${name}=${value}; expires=${data.toUTCString()}`;
};

//이름만 받아오면 됨? 만료일은 한참전으로 돌려서 지우면 되니까?
const deleteCookie = name => {};

export { getCookie, setCookie, deleteCookie };
