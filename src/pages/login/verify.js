const verify = (value) => {
  let errorObj = {};

  console.log(1111,value);

  if (!value.account) {
    errorObj.account = '請輸入帳號';
  }

  if (!value.password) {
    errorObj.password = '請輸入密碼';
  }

  return errorObj;

  // required: (val) => {
  //   if(val !== null && val !== undefined && val !== '') return '欄位不可為空'
  // },
  // // account:
};

export default verify;