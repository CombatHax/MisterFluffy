const ip = '0.0.0.0:3000';
const uuid = localStorage.getItem("UUID");
const account = fetch(`/accounts/${uuid}`)
.then(res => res.json())
.then(data => {
    return data;
});
async function getRequest(where) {
    let balls = await fetch(where)
    .then(res => res.json())
    .then(data => {
        return data;
    });
    return balls;
}