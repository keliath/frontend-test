const util = require("util");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

/* ========== Función números primos entre A y B ========== */
const getPrimeNumbersInRange = (a, b) => {
  const dataset = [...Array(+b - +a + 1).keys()].map((i) => i + +a);

  let primeNumbers = [];

  dataset.forEach((value, i) => {
    if (value === 1) return;

    const isPrime = () => {
      for (let i = 2, s = Math.sqrt(value); i <= s; i++)
        if (value % i === 0) return false;
      return !!value;
    };

    if (isPrime()) {
      primeNumbers.push(value);
    }
  });

  console.log("\nnúmeros primos:");
  console.log(util.inspect(primeNumbers, { maxArrayLength: null }));
};

/* ========== Función lectura de inputs ========== */
const init = () => {
  console.log("Obtener los números primos entre A y B");

  const readValues = () => {
    try {
      readline.question("Rango inicial: ", (a) => {
        readline.question("Rango final: ", (b) => {
          if (!isNaN(b) && +b > 0 && !isNaN(a) && +a > 0) {
            // obtener los numeros primos
            getPrimeNumbersInRange(a, b);
            readline.close();
          } else {
            console.log("valores no válidos \n");
            readValues();
          }
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  readValues();
};

init();
