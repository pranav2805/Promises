console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async () => {
    const wifeBringingTicket = new Promise((resolve,reject)=>{
        setTimeout(()=> resolve('ticket'),3000)
    });

    const getPopcorn = new Promise((resolve,reject)=>{
        setTimeout(()=> resolve('popcorn'),3000)
    });

    const getButter = new Promise((resolve,reject)=>{
        setTimeout(()=> resolve('butter'),3000)
    });

    const getColdDrinks = new Promise((resolve,reject)=>{
        setTimeout(()=> resolve('colddrinks'),3000)
    });

    let ticket = await wifeBringingTicket;

    console.log('wife: i have the tickets');
    console.log('hus: we should go in');
    console.log('wife: no, Im hungry');

    let popcorn = await getPopcorn;

    console.log(`hus: i have the ${popcorn}`);
    console.log('hus: we should go in');
    console.log('wife: no, I need butter on popcorn');

    let butter = await getButter;

    console.log(`hus: i have the ${butter}`);
    console.log('hus: anything else?');
    console.log('wife: yes, I need colddrinks as well');

    let colddrinks = await getColdDrinks;

    console.log(`hus: i have the ${colddrinks}`);
    console.log('wife: ok, lets go now');
    console.log('hus: Thank God!!');    

    return ticket;
};

preMovie().then((m)=> console.log(`person3: shows ${m}`));


console.log('person4: shows ticket');
console.log('person5: shows ticket');
