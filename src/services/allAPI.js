import CommonAPI from "./CommonAPI";
import { ServerURL } from "./ServerURL";

export const addDonationEvent=async(eventData)=>{
    return CommonAPI('POST',`${ServerURL}/events`,eventData)
}
export const getDonationEvent=async()=>{
    return CommonAPI('GET',`${ServerURL}/events`,{})
}
export const UpdateDonationEventAPI=async(id,eventData)=>{
    return CommonAPI('PUT',`${ServerURL}/events/${id}`,eventData)
}
//delete
export const deleteEventAPI=async(id)=>{
    return await CommonAPI('DELETE',`${ServerURL}/events/${id}`,{})
}