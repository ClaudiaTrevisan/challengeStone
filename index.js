//@ts-check

/**
 * @typedef {{item: string, quantity: number, price_by_unity: number}} List
 * @typedef {{[index: string]: number}} Result
 * @param {List[]} list
 * @param {string[]} emails
 * @returns {(Result | string)}
 */


const splittingBill = (list, emails ) =>{
    /**@type {(Result | string)} */let result = {};

    if(list.length <= 0 || emails.length <= 0) result = "Existem dados faltantes. Favor preencher todas as informações";

    /**@type {number} */let calc = 0;
    /**@type {number} */let rest = 0;
    /**@type {number} */let divisionInitial = 0;
    /**@type {number} */let divisionFinal = 0;
        
    for(let i = 0; i < list.length; i++){
        calc += list[i].price_by_unity * list[i].quantity + list[i].quantity
    };

    divisionInitial = Math.trunc(calc/emails.length) !== 0 ? Math.trunc(calc/emails.length) : calc/emails.length;

    divisionFinal = Number(divisionInitial.toFixed(2));

    if(calc%emails.length !== 0) rest = calc%emails.length;

    for(let email of emails){
        result[email] = divisionFinal
    };

    if(rest > 1){
        /**@type {string[]} */let arrayProvisory = []
        for(let num = 0; num < rest; num++){
            arrayProvisory.push(emails[num])
        }
        /**@type {number} */let divisionProvisory = rest/arrayProvisory.length
        for(let number = 0; number < arrayProvisory.length; number++){
            result[emails[number]] += divisionProvisory
        }
    }
    if(rest === 1){
        /**@type {number} */const randomNumber = Math.floor(Math.random() * ((emails.length - 1) - 0 + 1)) + 0;
        result[emails[randomNumber]] += rest;
    }

    return result
};

/**@type {List[]} */
const arrayItens = [
    {item: "banana", 
    quantity: 1, 
    price_by_unity: 100},
    {item: "maçã",
    quantity: 2, 
    price_by_unity: 350},
    {item: "Chocolate",
    quantity: 6,
    price_by_unity: 900},
    {item: "Arroz",
    quantity: 10,
    price_by_unity: 650},
    {item: "feijao",
    quantity: 10,
    price_by_unity: 650},
    {item: "carne",
    quantity: 5,
    price_by_unity: 1050},
    {item: "lentilha",
    quantity: 2,
    price_by_unity: 650},
    {item: "ovo",
    quantity: 2,
    price_by_unity: 1150},
    {item: "amaciante",
    quantity: 1,
    price_by_unity: 1650},
    {item: "caderno",
    quantity: 10,
    price_by_unity: 650},
    {item: "lapis colorido",
    quantity: 6,
    price_by_unity: 850},
    {item: "borracha",
    quantity: 5,
    price_by_unity: 550},
    {item: "lençol",
    quantity: 4,
    price_by_unity: 3650},
    {item: "Manga",
    quantity: 5,
    price_by_unity: 700}
];

/**@type {string[]} */
const arrayEmails = [
    'joao@email.com', 
    'claudia@email.com', 
    'lucas@email.com',
    'thales@email.com', 
    'giovanna@email.com', 
    'renato@email.com', 
    'jose@email.com', 
    'mateus@email.com', 
    'luis@email.com',
    'joacarlos@email.com',
    'dianasantos@email.com',
    'joanamaranhao@email.com',
    'guilherme@email.com',
    'arnaldojose@email.com',
    'flaviojose@email.com',
    'rodrigopaulo@email.com',
    'marianamaria@email.com',
    'leticiasilva@email.com',
    'ariele@email.com',
    'samantarodrigues@email.com',
    'sueliyvieira@email.com',
    'karinasampaio@email.com',
    'kerlenlima@email.com',
    'giseleaguiar@email.com',
    'adalziga@email.com',
    'tereza@email.com',
    'carmem@email.com',
    'gustavosantos@email.com',
    'sandramaria@email.com',
    'linda@email.com',
    'catarina@email.com',
    'lilith@email.com',
    'nanci@email.com',
    'joseane@email.com',
    'sabrina@email.com'
];

console.log(splittingBill(arrayItens, arrayEmails))