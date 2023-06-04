import axios from "axios"
import {ref} from "vue"

export const useGetData = ()=> {
   
    const data = ref(null)
    const loading = ref(true)
    let error = ref(null);

    const getpokemones = async (link)=>{
        try{
            loading.value = true;
            let res = await axios.get(link)
            data.value = res.data;
            console.log(res)
         }catch(e){
        error.value = "algo salió mal"
         }finally{
            loading.value = false;
         }
        }
        
        return{
            getpokemones,
            data,
            loading,
            error
        }
        
}