console.log('person1: shows ticket');
console.log('person2: shows ticket');

const wifeBringingTicket = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ticket');
    },3000)
});

const getPopcorn = wifeBringingTicket.then((t)=>{
    console.log('wife: i have the tickets');
    console.log('hus: we should go in');
    console.log('wife: no, Im hungry');
    return new Promise((resolve,reject)=>resolve(`${t} popcorn`));
});

const getButter = getPopcorn.then((t)=>{
    console.log('hus: i have the popcorns');
    console.log('hus: we should go in');
    console.log('wife: no, I need butter on popcorn');
    return new Promise((resolve,reject)=>resolve(`${t} butter`));
})

const getColdDrinks = getButter.then((t)=>{
    console.log('hus: i have the got butter on popcorns');
    console.log('hus: anything else?');
    console.log('wife: i need cold drinks as well');
    return new Promise((resolve,reject)=>resolve(`${t} colddrinks`))
})

getColdDrinks.then((t)=>console.log(t))

console.log('person4: shows ticket');
console.log('person5: shows ticket');