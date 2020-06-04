/**
 * ATM
 */

// ACCOUNTS LIST

const ACCOUNTS = [
    {
        creditCardNumber: `000111202`,
        pin: `1212`,
        balance: 1300
    },
    {
        creditCardNumber: `030141632`,
        pin: `9990`,
        balance: 1800
    },
    {
        creditCardNumber: `180415282`,
        pin: `0987`,
        balance: 29000
    }
]

// SUBTRACT FN

const subtractFromAccount = (creditCardNumber, quantity) => {
    const account = ACCOUNTS.find(acc => acc.creditCardNumber === creditCardNumber);
    if (!account) {
        throw new Error(`account not found`);
    }
    if (account.balance < quantity) {
        throw new Error(`not enough money`);
    }
    account.balance -= quantity;
}

// AUTH FN

const authentication = (creditCardNumber, pin) => {
    const account = ACCOUNTS.find(acc => acc.creditCardNumber === creditCardNumber);
    if (!account) {
        throw new Error(`account not found`);
    }
    if (account.pin !== pin) {
        throw new Error(`incorrect pin`);
    }
    return true;
}

// WITHDRAW PUBLIC FN

const withdraw = (creditCardNumber, pin, quantity) => {
    if (authentication(creditCardNumber, pin)) {
        subtractFromAccount(creditCardNumber, quantity);
        console.log(`successfully withdraw ${quantity}`)
    }

}

// FRAUD

for (let n = 0; n < 10000; n++) {
    const pin = n.toFixed(0).padStart(4, '0');
    try {
        withdraw('180415282', pin, 28000)
    } catch (e) {

    }
}

console.log(ACCOUNTS);