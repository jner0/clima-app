const { leerInput, pausa, inquirerMenu } = require("./helpers/inquirer");

const main = async () => {
  let opt = "";

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case 1:
        console.log("Hola");
        break;
      case 2:
        console.log("Mundo");
        break;
      case 0:
        console.log("jeje");
        break;
    }

    if (opt !== 0) await pausa();
  } while (opt !== 0);
};

main();
