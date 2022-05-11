import { Context, logging, storage, PersistentMap } from 'near-sdk-as'


const recipientList = new PersistentMap<string, string[]> ('RL')
const totalSent = new PersistentMap<string, i32[]> ('TS')

export function addFunds(recipient:string, amount:i32):void {
    if(recipientList.contains(Context.sender)) {
        let getList = recipientList.getSome(Context.sender)
        let getTotals = totalSent.getSome(Context.sender)

        logging.log("User exits within list, updating lists")

        if (getList.includes(recipient)) {
            let getIndex = getList.indexOf(recipient)
            let oldTotal = getTotals[getIndex]
            let newTotal = oldTotal + amount
            getTotals[getIndex] = newTotal
            totalSent.set(Context.sender, getTotals)
        } else {
            getList.push(recipient);
            recipientList.set(Context.sender, getList);
            getTotals.push(amount);
            totalSent.set(Context.sender, getTotals)
        }
    } else {
        logging.log("User doesn't exist within storage, adding new user")
        recipientList.set(Context.sender, [recipient])
        totalSent.set(Context.sender, [amount])
    }
}