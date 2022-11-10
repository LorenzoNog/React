const CustomFetch = (time,task) =>{
    console.log(task)
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(task)
        },3000)
    })
}
export default CustomFetch