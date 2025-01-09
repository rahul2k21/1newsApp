const generateReferCode = () => {
  const characters =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let referCode = "";
  for (let i = 0; i < 6; i++) {
    referCode += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return referCode.toUpperCase();
};

const generateMoreThen800RandomNumber = () => {
  return Math.floor(Math.random() * (9999 - 8000 + 1)) + 8000;
};

const generateLessThen1999RandomNumber = () => {
  return Math.floor(Math.random() * 1000) + 1000;
};

const randomBombNo =()=>{
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  return randomNumber
}

module.exports = {
  generateReferCode,
  generateMoreThen800RandomNumber,
  generateLessThen1999RandomNumber,
  randomBombNo
};

