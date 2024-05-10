const btnCalc = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calcAge() {
  const birthdayVal = birthdayEl.value;
  if (birthdayVal === "") {
    alert("Please enter your birthday");
  } else {
    const age = getAge(birthdayVal);
    resultEl.innerText = `Your age is ${age} ${
      age > 1 ? "years" : "year"
    } old.`;
  }
}

function getAge(birthdayVal) {
  const currentDate = new Date();
  const birthDate = new Date(birthdayVal);

  let age = currentDate.getFullYear() - birthDate.getFullYear();
  const month = currentDate.getMonth() - birthDate.getMonth();

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

btnCalc.addEventListener("click", calcAge);
