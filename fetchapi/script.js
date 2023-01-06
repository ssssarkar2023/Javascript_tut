/*
fetch api allows us to make http requests to server from web browsers.
fetch() uses the Promise to deliver more flexible features to make requests to server from the web browsers.
fetch() method which is available in global scope which instructs the browser to send a URL.
This method requires only one parameter which is URL of the resource which we want to fetch.
*/
function getData() {
    fetch('https://reqres.in/api/users?page=2')
        .then(data => {
            return data.json();
        }).then(result => {
            console.log(result);

            result.data.forEach(user => {
                console.log(user.first_name);
            });
        }).catch(err => {
            console.log(err);
        }).finally(
            () => {
            console.log("Successfully Done...")
            }
        );

}
getData();