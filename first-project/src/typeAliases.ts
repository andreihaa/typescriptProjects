type StringOrNum = string | number; 
type ObjWithName = {name: string, uid: StringOrNum}

const logDetails = (uid: StringOrNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`)
}

const greeting = (user: ObjWithName) => {
    console.log(`${user.name} say hello`);
}