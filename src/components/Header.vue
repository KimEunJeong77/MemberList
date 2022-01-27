<template>
    <header>   
        <ul class="nav nav-pills">
            <li 
                class="nav-item"
                v-for="nav in navigations"
                :key="nav.name"
                >
                <RouterLink 
                    class="nav-link" 
                    active-class="active" 
                    :to="nav.href">
                    {{ nav.name }}
                </RouterLink>
            </li>
        </ul>   
    </header> 
</template>
<script>
export default{
    data(){
        return{
            navigations:[
                {name:'Home',href:'/'},
                {name:'MemberList',href:'/memberlist/'}
            ]
        }
    }
}
</script>
<style scoped lang="scss">
header{		
    display:flex;	
    align-items: center;
    height: 70px;
    padding: 0 40px;
    .logo{
        margin-right: 40px;
    }
}
</style>