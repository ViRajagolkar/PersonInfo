class Userservice{

    getUsers(token){
        let promise = fetch("http://localhost:4070/api/users",{
                                method:"GET",
                                headers:{
                                    "Authorization":"bearer "+token
                                },
                            });
        return promise;
    }
}

export default Userservice;