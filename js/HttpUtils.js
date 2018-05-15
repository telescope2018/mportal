export default class HttpUtils{
    static get(url){
        return new Promise((resolve,reject)=>{
            let timeout = 5000;
            setTimeout(function() {
                reject(new Error("timeout"))
            }, timeout)
            fetch(url)
                .then(response=>response.json())
                .then(result=>{
                    resolve(result);
                })
                .catch(error=>{
                    reject(error);
                })
        })
    }

    static post(url,data){
        return new Promise((resolve,reject)=>{
            let timeout = 5000;
            setTimeout(function() {
                reject(new Error("网络出错，请稍后再试"))
            },timeout)
            fetch(url,{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(data)
            })
                .then(response=>response.json())
                .then(result=>{
                    resolve(result);
                })
                .catch(error=>{
                    reject(error);
                })
        })
    }
}