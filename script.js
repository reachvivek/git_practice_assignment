// console.log('person1: shows ticket')
// console.log('person2: shows ticket')

// //1) Promises
// const promiseWifeBringingTickets=new Promise((resolve,reject)=>{
// 	setTimeout(()=>{
// 		resolve('ticket')
// 	}, 3000)
// })

// const getPopcorn= promiseWifeBringingTickets.then((t)=>{
// 	console.log('wife: I have the tickets')
// 	console.log('husband: we should go in')
// 	console.log('wife: no i am hungry!')
// 	return new Promise((resolve, reject)=>{
// 		resolve(`${t} popcorn`)
// 	})
// })

// const getButter=getPopcorn.then((t)=>{
// 	console.log('husband: i have got the popcorn')
// 	console.log('wife: i want butter!')
// 	return new Promise((resolve, reject)=>{
// 		resolve(`${t} butter`)
// 	})
// })

// const getColdDrinks=getButter.then((t)=>{
// 	console.log('husband: i got butter')
// 	console.log("wife: I want cold drinks")
// 	return new Promise((resolve, reject)=>{
// 		resolve(`${t} cold drinks`)
// 	})
// })


// getColdDrinks.then((t)=>{
// 	console.log('husband: i got cold drinks')
// 	console.log(`${t}`)
// })



// 2) Async Functions

// const preMovie=async()=>{
// 	const promiseWifeBringingTickets=new Promise((resolve,reject)=>{
// 		setTimeout(()=>{
// 			resolve('ticket')
// 		}, 5000)
// 	})

// 	const getPopcorn= new Promise((resolve, reject)=>{
// 		resolve(`popcorn`)
// 	})

// 	const getButter=getPopcorn.then((t)=>{
// 		return new Promise((resolve, reject)=>{
// 			resolve(`butter`)
// 		})
// 	})

// 	const getColdDrinks=getButter.then((t)=>{
// 		return new Promise((resolve, reject)=>{
// 			resolve('cold drinks')
// 		})
// 	})

// 	let ticket=await promiseWifeBringingTickets;
	
// 	let [popcorn, butter, colddrink]= await Promise.all([getPopcorn, getButter, getColdDrinks]);
	
// 	console.log(popcorn, butter, colddrink)

// 	return ticket
// }

// preMovie().then((t)=>{
// 	console.log(`person3: shows ${t}`)
// })

// console.log('person4: shows ticket')
// console.log('person5: shows ticket')


const posts=[
	{title: "Post 1", body:"This is Post 1", createdAt: new Date(new Date().setTime(new Date().getTime()-5990000))},
	{title: "Post 2", body:"This is Post 2", createdAt: new Date(new Date().setTime(new Date().getTime()-200000))}
]

function getPosts(){
	setTimeout(()=>{
		let output=''
		posts.forEach(post=>{
			output+=`<li>${post.title} : ${post.body} - created ${timeSince(post.createdAt)}</li>`
		})
		document.querySelector('.msg').innerHTML=output
	}, 1000)
}

function timeSince(date) {
	var seconds = Math.floor((new Date() - date) / 1000);
	var interval = seconds / 31536000;
	if (interval > 1) {
		return Math.floor(interval) + " years ago";
	}
	interval = seconds / 2592000;
	if (interval > 1) {
		return Math.floor(interval) + " months ago";
	}
	interval = seconds / 86400;
	if (interval > 1) {
		return Math.floor(interval) + " days ago";
	}
	interval = seconds / 3600;
	if (interval > 1) {
		return Math.floor(interval) + " hours ago";
	}
	interval = seconds / 60;
	if (interval > 1) {
		return Math.floor(interval) + " minutes ago";
	}
	return Math.floor(seconds) + " seconds ago";
}

setInterval(()=>{
	getPosts()
},1000)

let i=3

let createPost=async()=>{

	let post={
		title:"Post "+i, body:" This is Post "+i++, createdAt: new Date()
	}

	let myPromise=new Promise((resolve, reject)=>{
		setTimeout(()=>{
			posts.push(post)
			resolve(posts)
		}, 2000)
	})

	await myPromise;
	
	return myPromise
}

let myInt=setInterval(()=>{
	if (i==5){
		clearInterval(myInt)
	}
	createPost().then((posts)=>{
	getPosts()
	console.log(posts)
})}, 2000)


