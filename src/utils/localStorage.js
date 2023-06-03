export function setLocalStorage(userName){
let storageData = [];
if(getLocalStorage()){
    storageData = getLocalStorage();
}
 let response = storageData.find(element => element.toLowerCase() === userName.toLowerCase());
 !response && storageData.push(userName)
 
localStorage.setItem("userList",JSON.stringify(storageData));
}

export function getLocalStorage(){
    let storageData = JSON.parse(localStorage.getItem("userList"));
    return storageData;
}