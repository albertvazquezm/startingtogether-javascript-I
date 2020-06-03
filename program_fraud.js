/**
 * ATM
 */

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


const withdraw = (creditCardNumber, quantity) => {
    const account = ACCOUNTS.find(acc => acc.creditCardNumber === creditCardNumber);
    if(!account) {
        throw new Error(`account not found`);
    }
    account.balance
}