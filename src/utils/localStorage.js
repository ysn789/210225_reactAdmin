
export default {
    saveUser(key,value){
       localStorage.setItem(key,JSON.stringify(value))//只能存字符串
    },
    getUser(key){
        return  JSON.parse(localStorage.getItem(key) || '{}')
    },
    removeUser(key){
        localStorage.removeItem(key)
    }
}