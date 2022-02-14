//getcookie는 name으로 value를 가져옴
const getCookie = name => {
  //cookie에 있는 user_id 앞에는 세미콜론(;)이 없어 if문에서 split이 안됨.
  let value = ';' + document.cookie;

  //이름을 가지고 짜르게 되면, map이나 for문을 거치지 않아도 됨.
  let parts = value.split(`; ${name}=`); // aa=bb (; user_id) = aaa

  //if문을 통해 우리가 원하는 cookie값이 없음을 대비함.
  if (parts.length === 2) {
    return parts.pop().split(';').shift();
  }
};

//exp = 5는 exp를 받아오지 않아도 기본값으로 지정해 준다.
const setCookie = (name, value, exp = 5) => {
  let date = new Date();
  date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);

  document.cookie = `${name}=${value}; expires=${date.toUTCString()}`;
};

const deleteCookie = name => {
  //이름만 받아오면 됨? 만료일은 한참전으로 돌려서 지우면 되니까?
  let date = new Date('2020-01-01').toUTCString();
  console.log(date);
  document.cookie = name + '=; expires=' + date;
};

export { getCookie, setCookie, deleteCookie };
