import { role } from "../models/role.model.js";

export async function CreatRoleService(data){ 
        const result = await role.create(data);                          //Creat Role Query
        return result   
   
}
export async function getRoleService(id){
       const result = await role.findById(id);                         //Get Role By Id Query
         return result        
   
}
export async function getAllRoleService(){
   
        const result = await role.find();                              //Get All Role Query
        return result        
   
}

export async function updateRoleService(data,id){
     
        const result = await role.indByIdAndUpdate(data,id);         //Update Role By ID Query
          return result     
}

export async function deleteRoleService(id){
     
        const result = await role.findByIdAndDelete(id);             //Delete Role By Id Query
         return result    
}