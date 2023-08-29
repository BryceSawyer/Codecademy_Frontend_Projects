// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]

const visa = [
    "4556059133449617",
    "4410380991281041",
    "4024007148821157985"
];

const masterCard = [
    '5324464969560065',
    '5165964969880936',
    '5355125412024908'
];

const AMEX = [
    '348456817888824',
    '376092030404407',
    '372784529626524'
];

const discover = [
    '6011276535177323',
    '6011515162669031',
    '6011232577852672888'
];

const JCB = [
    '3533139752325908',
    '3537483863693788',
    '3530589319207760055'
];

const dinersClubNorthAmerica = [
    '5479076593456891',
    '5585263200274435'
];

const dinersClubCarteBlanche = [
    '30502424700606',
    '30136287491159',
    '30007804602695'
];

const dinersClubInternational = [
    '36327274225635',
    '36107587652158',
    '36740508389557'
];

const maestro = [
    '6763260209445521',
    '6761739015779506',
    '5038782615542832'
];

const visaElectron = [
    '4844945193342548',
    '4917673111985865',
    '4844643726516973'
];

const instaPayment = [
    '6396129538724846',
    '6387676349948759',
    '6397170812267598'
];

const creditCardNumberStrings = [
    visa,
    masterCard,
    AMEX,
    discover,
    JCB,
    dinersClubNorthAmerica,
    dinersClubCarteBlanche,
    dinersClubInternational,
    maestro,
    visaElectron,
    instaPayment
]

// Add your functions below:

const validateCard = card => {
    const sum = card.reduceRight((sum, digit, index) =>
        sum + ((card.length - index) % 2 === 0 ? digit * 2 % 9 || digit : digit));

    return sum % 10 === 0;
};

const findInvalidCards = cards =>
    cards.filter(card => !validateCard(card));


const idInvalidCardCompanies = cards =>
    [...new Set(findInvalidCards(cards).map(card => ({
        3: 'Amex',
        4: 'Visa',
        5: 'Mastercard',
        6: 'Discover'
    }[card[0]] || 'Company not Found')))];


// multiple cards
console.log(idInvalidCardCompanies(batch))
// single card
console.log(idInvalidCardCompanies([mystery1]))








