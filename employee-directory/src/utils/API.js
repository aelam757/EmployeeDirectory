import axios from "axios";

export default {
    getAllemployees: function () {
        return axios.get("https://randomuser.me/api/?results=200&nat=us&inc=picture,name,phone,email,dob")
    }
};