const ip = "0.0.0.0:3000";
const uuid = localStorage.getItem("UUID");
const account = fetch(`/accounts/${uuid}`).then(res => res.json())
console.log(account)