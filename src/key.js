
const KeyUri = {
    BACKEND_URI : "http://localhost:5000/api"
    //  BACKEND_URI:"https://stingray-app-zzl7k.ondigitalocean.app/api"
    

}

const storedToken = localStorage.getItem('token') ? localStorage.getItem('token') : null;
const storedUserToken = localStorage.getItem('tokenuser') ? localStorage.getItem('tokenuser') : null;

const token = storedToken ? storedToken.slice(1, -1) : null;
const usertoken = storedUserToken ? storedUserToken.slice(1, -1) : null;

const config = {
    
    headers: {
    Accept: "application/json",
    // Authorization: token ? `Bearer ${token}`: undefined ||usertoken?`Bearer ${usertoken}`: undefined ,
    Authorization: (token ? `Bearer ${token}` : (usertoken ? `Bearer ${usertoken}` : undefined))    

}


};

export { KeyUri, config };
