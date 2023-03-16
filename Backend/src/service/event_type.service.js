import { event } from "../models/event_type.model.js";


export async function CreatEvent_TypeService(data){ 
        const result = await event.create(data);                          //Creat Event_Type Query
        return result   
   
}
export async function getEvent_TypeService(id){
     
        const result = await event.findById(id);                          //Get Event_Type By Id Query
         return result        
   
}
export async function getAllEvent_TypeService(){
   
        const result = await event.find();                               //Get All Event_Type Query
         return result        
   
}

export async function updateEvent_TypeService(data,id){
     
        const result = await event.findByIdAndUpdate(data,id);          //Update Event_Type By Id Query
          return result     
}

export async function deleteEvent_TypeService(id){
     
        const result = await event.findByIdAndDelete(id);              //Delete Event_Type By ID query
         return result    
}