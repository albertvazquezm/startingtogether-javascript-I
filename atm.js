/**
 * ATM
 */

// ACCOUNTS LIST

const MAX_ATTEMPTS = 3;

const ACCOUNTS = [
    {
        number: `182374`,
        name: `Juan`,
        balance: 1700,
        pin: '1863'
    },
    {
        number: `486375`,
        name: `Anna`,
        balance: 2900,
        pin: '5883'
    },
    {
        number: `112373`,
        name: `Luisa`,
        balance: 21700,
        pin: '0097'
    }
]

// SUBTRACT FN

const subtractFromAccount = (number, amount) => {
    const accountWereLookingFor = ACCOUNTS.find((account) => {
        if (account.number === number) {
            return true;
        } else {
            return false;
        }
    });
    if (!accountWereLookingFor) {
        throw new Error(`account does not exist`);
    }
    accountWereLookingFor.balance -= amount;
}

const checkAccountPin = (number, pin) => {
    const accountWereLookingFor = ACCOUNTS.find((account) => {
        if (account.number === number) {
            return true;
        } else {
            return false;
        }
    });
    if(accountWereLookingFor.failedAttempts >= MAX_ATTEMPTS) {
        return false;
    }
    if (accountWereLookingFor.pin === pin) {
        return true;
    } else {
        if (!accountWereLookingFor.failedAttempts) {
            accountWereLookingFor.failedAttempts = 0;
        }
        accountWereLookingFor.failedAttempts++;
    }
}

// WITHDRAW PUBLIC FN

const withdraw = (number, pin, amount) => {
    if (checkAccountPin(number, pin)) {
        subtractFromAccount(number, amount);
    } else {
        console.log('pin incorrecto');
    }
}

// FRAUD

for (let n = 0; n < 10000; n++) {
    const pin = n.toFixed(0).padStart(4, '0');
    withdraw('112373', pin, 20000)
}

console.log(ACCOUNTS);
