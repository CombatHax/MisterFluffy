const ip = "0.0.0.0:80";
const uuid = localStorage.getItem("UUID");
let account;
console.log(uuid);
async function getAccount() {
    let res = await fetch(`/accounts/${uuid}`).then(res => res.json()).then(data => data);
    return res;
}
if(uuid != 'null' || uuid != null) {
    account = getAccount();
}