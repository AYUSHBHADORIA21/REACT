import React from "react";
import { useState } from "react";
import UserContext from "./UserContextt";

//ye hamne banay hai storeroom 

//{Children} ? jo bhi prop aa rha he usko as it is pass kar lo , generic naming
const UserContextProvider = ({Children})=>{

    const [user , setUser] = useState(null);
    return(
        <UserContext.Provider value = {{user , setUser}}>
        {Children}
        {/* //koi bhi component ae ese he pass kar do */}
        </UserContext.Provider>
    )
}

export default UserContextProvider