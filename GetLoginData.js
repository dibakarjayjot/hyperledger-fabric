export default function GetLoginData(type) {
 let BaseURL = 'http://35.229.19.138:3000/api/org.authentication.whey.'+type;
 //let BaseURL = 'http://localhost/PHP-Slim-Restful/api/';
 return new Promise((resolve, reject) =>{
 fetch(BaseURL, {
method: 'GET',
headers: {
    "Content-Type": "application/json"
  }

})
.then((response) => response.json())
.then((responseJson) => {
 resolve(responseJson);
})
.catch((error) => {
 reject(error);
});
});
}
