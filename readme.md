# React hook form

## 특징

- Less code
- Better validation
- Better Error (set, clear, display)
- Have control over inputs
- Don't deal with events
- Easier Inputs

useForm은 Hook임

## 선언하기

```js
import { useForm } from "react-hook-form";
...
const {register, watch} = useForm();
return(
    <form>
       <input type="text" {...register("username")} placeholder="" />
        <input type="email" {...register("email")} placeholder="Only @naver.com" />
        <input type="password" {...register("password")} placeholder="Min 10 characters" />
    </form>

)
```

```js
console.log(register("name"));

name: "email"
onBlur: ƒ onChange(_x14)
onChange: ƒ onChange(_x14)
ref: ƒ ref(_x17)
```

```js
console.log(watch);

{username: 'holim', email: 'l@naver.com', password: '123456'}
```

## register 속성

required

```js
<form>
  <input type="text" {...register("username", { required: true })} placeholder="" />
</form>
```

## handleSubmit(onValid, onInvalid);

register의 조건에 부합하면 onValid함수가 실행되고 조건에 맞지 않으면 onInvalid가 실행됨

```js
const { register, watch, handleSubmit } = useForm();
const onValid = () => {
  console.log("Valid");
};
const onInvalid = () => {
  console.log("Invalid");
};
return (
  <form onSubmit={handleSubmit(onValid, onInvalid)}>
    <input type="text" {...register("username", { required: true })} placeholder="" />
  </form>
);
// input에 아무것도 입력하지 않으면 register의 조건에서 required가 false가 되기 때문에 onInvalid함수가 실행됨
```

```js
const { register, watch, handleSubmit } = useForm();
const onValid = (data) => {
  console.log(data);
  /* 
  {username: 'abcde', email: 'a@n.com', password: '123123123123'}
  */
};
const onInvalid = (error) => {
  console.log(error);
  /*
{username: {…}, email: {…}, password: {…}}
email: {type: 'required', message: '', ref: input}
password: {type: 'required', message: '', ref: input}
username: {type: 'required', message: '', ref: input}
  */
};
return (
  <form onSubmit={handleSubmit(onValid, onInvalid)}>
    <input type="text" {...register("username", { required: true })} placeholder="" />
  </form>
);
```

```js
<input
  type="password"
  {...register("password", {
    required: "Please write down your password.",
    minLength: {
      message: "Password has to be more than 10 chars.",
      value: 10,
    },
  })}
  placeholder="Min 10 characters"
/>
// input에 아무것도 입력하지 않으면 Please write down your password. 메시지 출력
// 최소 길이가 10이 안되면 Password has to be more than 10 chars. 메시지 출력
```
