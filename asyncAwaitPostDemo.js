const posts = [
    { title: 'Post one', body:'This is post one'},
    { title: 'Post two', body:'This is post two'},
];

//console.log("Before making any changes time:", new Date());

const user = {
    name: 'Pranav',
    lastActivity: new Date()
}

function getPosts(){
    setTimeout(()=>{
        posts.forEach(post=>{
            console.log(post.title);
        })
        //console.log('Last active on:',user.lastActivity);
    },1000);
}

async function fun(){
    const createPost = new Promise( (resolve, reject) => {
                        setTimeout( () => {
                        posts.push({title: 'Post three', body: 'This is post three'});
                        resolve()
                        }, 3000)
                    })

    await createPost;

    getPosts();

    const deletePost = new Promise((resolve, reject) => {
                        setTimeout( () => {
                            if(posts.length > 0){
                                const poppedElement  = posts.pop();
                                resolve(poppedElement);
                            } else {
                                reject("ERROR: ARRAY IS EMPTY")
                            }
                        }, 1000)
                    })
    
    const deletedPost = await deletePost;

    console.log(`Deleted post: ${deletedPost.title}`)

    getPosts();

}

fun().then();