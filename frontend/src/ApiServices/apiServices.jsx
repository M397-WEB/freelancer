import axios from "axios";
import * as qs from "qs";

const BASE_URL = "http://localhost:5005/api/";
export const BASE_IMAGE_URL = "http://localhost:5005/";

class apiServices {

    getToken(){
        let obj = {
            authorization:sessionStorage.getItem("token")
        }
        return obj;
    }
    
    // Technologies
    addTechonology(data) {
        return axios.post(BASE_URL + "technology/add", data, {headers:this.getToken()});
    }

    getallTechnology(data) {
        return axios.post(BASE_URL + "technology/getall", qs.stringify(data));
    }

    getsingleTechnology(data) {
        return axios.post(BASE_URL + "technology/getsingle", qs.stringify(data));
    }

    deleteTechnology(data) {
        return axios.post(BASE_URL + "technology/delete", qs.stringify(data),{headers:this.getToken()});
    }

    updateTechnology(data) {
        return axios.post(BASE_URL + "technology/update", data, {headers:this.getToken()});
    }

    //posts
    addOrder(data) {
        return axios.post(BASE_URL + "order/add", data,{headers:this.getToken()})
    }
    
    getallOrders(data) {
        return axios.post(BASE_URL + "order/getall", qs.stringify(data));
    }

    

    getsingleOrder(data) {
        return axios.post(BASE_URL + "order/getsingle", qs.stringify(data));
    }

    

    
    
    // developers
    customerRegister(data) {
        return axios.post(BASE_URL + "customer/register", data);
    }

   

    // Client
    userRegister(data) {
        return axios.post(BASE_URL + "client/register", data, {
            headers: { "Content-Type": "multipart/form-data" }
        });
    }


    getallCustomerData(data) {
        return axios.post(BASE_URL + "client/getall", qs.stringify(data));
    }
    getsingleClientData(data) {
        return axios.post(BASE_URL + "client/getsingle", qs.stringify(data));
    }

    updateClientStatus(data) {
        return axios.post(BASE_URL + "client/updatestatus", data,{headers:this.getToken()});
    }

    updateClientData(data) {
        return axios.post(BASE_URL + "client/update", data, {headers:this.getToken()});
    }

    



   

    updateOrderStatus(data) {
        return axios.post(BASE_URL + "order/updatestatus", data,{headers:this.getToken()});
    }
    

    
    // Login / User Management
    login(data) {
        return axios.post(BASE_URL + "user/login", data);
    }

    updateUserStatus(data) {
        return axios.post(BASE_URL + "user/updatestatus", data,{headers:this.getToken()});
    }

    // tasks
    addProject(data) {
        return axios.post(BASE_URL + "project/add", data, {headers:this.getToken()});
    }

    getallProjects(data) {
        return axios.post(BASE_URL + "project/getall", qs.stringify(data));
    }
    
   

    //reviews

    addReviews(data) {
        return axios.post(BASE_URL + "review/add", data,{headers:this.getToken()});
    }

    getallReviews(data) {
        return axios.post(BASE_URL + "review/getall", qs.stringify(data));
    }


    //enquiry
    addEnquiry(data) {
        return axios.post(BASE_URL + "enquiry/add", data);
    }
    getallEnquiries(data) {
        return axios.post(BASE_URL + "enquiry/getall", qs.stringify(data));
    }


    

   
   

    
  
}

export default new apiServices();