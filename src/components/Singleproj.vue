<template>
  <div class="singleproj" >
      
      <div class="flexing">
          <div>
            <h3 @click="showdetail=!showdetail" :class="{complete:project.complete}">{{project.title}}</h3>
            
          </div>
          <div>
            <span class="material-icons" @click="deleteproj">
                delete
            </span>

            <router-link :to="{name:'EditProj',params:{id:project.id}}">
                <span class="material-icons">
                     edit
                </span>
            </router-link>
            
            <span class="material-icons" @click="completeproj">
                done
            </span>
          </div>
      </div>
       <p v-if="showdetail">{{project.detail}}</p> 
  </div>
</template>

<script>
export default {
props:['project'],
data(){
    return{
        showdetail:false,
        api:"http://localhost:3000/projects/"
    }
},
methods:{
    deleteproj(){
        fetch(this.api+this.project.id,{method:"DELETE"})
        .then(()=>{
            this.$emit("delete",this.project.id)
        })
        .catch((err)=>{
            console.log(error);
        })
    },
    completeproj(){
        fetch(this.api+this.project.id,{
            method:"PATCH",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(
                {
                    complete:!this.project.complete
            }
            )
            })
        .then(()=>{
            this.$emit("complete",this.project.id)
        })
        .catch((err)=>{
            console.log(error);
        })
    }
}
}
</script>

<style>
.singleproj{
    background-color: #fadbe4;
    border: pink solid 3px;
    border-radius: 8px;
    margin: 10px;
    padding: 20px;
    
    
}
h3{
    color: rgb(243, 154, 154);
    cursor: pointer;
}
p{
    color:#bbb;
}
.flexing{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.material-icons{
    
    color: rgb(248, 158, 173);
    padding: 2px;
    margin: 2px;
}
span:hover{
    color: rgb(235, 131, 131);
    cursor: pointer;
}
.complete{
    color:rgb(155, 194, 178);
}
</style>