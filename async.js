const myLoader = () => {
    return new Promise((resolve, reject) => {
        const success = Math.random();
        if(success <= 0.5){
            resolve(success)
        }
        else{
            reject(success)
        }
    })
}

myLoader()
.then(data => console.log('resolve data', data))
.catch(err => console.log('rejected with value', err))


fetch('')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))


async function loadData(){
    const res = await fetch('');
    const data = await res.json();
    console.log(data);
}

const taskLoader = async() => {
    const res = await fetch('');
    const data = await res.json();
    console.log(data);
}

loadData();






















// console.log(1);
// console.log(2);
// setTimeout(() => {
//     console.log('lazy logged');
// }, 4000)
// console.log(4);
// console.log(5);
// console.log(6);

// function doSomething(){
//     console.log(3);
// }