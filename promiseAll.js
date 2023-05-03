const posts = [
    { title: 'Post one', body:'This is post one'},
    { title: 'Post two', body:'This is post two'},
];

const user = {
    name: 'Pranav',
    lastActivity: new Date()
}
    
function getPosts(){
    setTimeout(()=>{
        posts.forEach(post=>{
            console.log(post.title);
        })
        console.log('Last active on:',user.lastActivity);
    },1000);
}
    
function createPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'Post three'});
            resolve()
        }, 3000)
    }) 
}

function updateLastUserActivityTime() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            lastActivity = new Date();
            resolve();
        },1000)
    })
}

const promise1 = createPost().then(()=>{});
const promise2 = updateLastUserActivityTime().then(()=>{});

//Promise.all([promise1,promise2]).then(getPosts);

Promise.all([promise1,promise2]).then(()=>{
    getPosts()}).then(()=>{
        deletePost().then(()=>{
            updateLastUserActivityTime().then(()=>{
                console.log("After deletion:");
                getPosts()
            }).catch(err=>console.log(err))
        }).catch(err=>console.log(err))
    }).catch(err=>console.log(err))


function deletePost(){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if(posts.length > 0){
                const poppedElement  = posts.pop();
                resolve(poppedElement);
            } else {
                reject("ERROR: ARRAY IS EMPTY")
            }
        }, 1000)
    })
}

// deletePost().then(()=>{
//     console.log("After deletion:")
//     getPosts()
// }).catch(err=>{console.log(err)});