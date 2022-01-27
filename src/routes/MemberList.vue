<template>
    <h1>{{ memberlist }}</h1>
</template>
<script>
import axios from 'axios';
export default{
    data(){
        return{
            memberlist:[],
            loading:false
        }
    },
    async created(){
        const url='http://localhost:8282/mvc1/member/ajaxList.do';
        const res=await axios.get(url);
        this.memberlist=res.data.memberlist;
    }
}
</script>
