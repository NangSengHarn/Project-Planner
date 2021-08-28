<template>
  <div class="home">
  </div>
  <div>
    <FilterNav @filtervalue="current=$event" :current="current"></FilterNav>
  </div>
  <div v-for="project in filterProj" :key="project.id">
    <Singleproj :project="project" @delete="deleteproj" @complete="completeproj"></Singleproj>
  </div>
  
</template>

<script>

import Singleproj from '../components/Singleproj'
import FilterNav from '../components/FilterNav'
export default {
  name: 'Home',
  components: {
    Singleproj,FilterNav
  },
  data(){
    return{
      projects:[],
      current:"all"
    }
  },
  methods:{
    deleteproj(id){
      this.projects=this.projects.filter(project=>{
        return project.id!=id;
      })
    },
    completeproj(id){
      let findproj=this.projects.find(project=>{
        return project.id===id;
      });
      findproj.complete=!findproj.complete
    }
  },
  computed:{
    filterProj(){
      if(this.current==="complete"){
        return this.projects.filter((project)=>{
          return project.complete
        })
      }
      if(this.current==="ongoing"){
        return this.projects.filter((project)=>{
          return !project.complete
        })
      }
      return this.projects;
    }
  },

  mounted(){
    fetch('http://localhost:3000/projects')
    .then((response)=>{
       return response.json()
    })
    .then((datas)=>{
        this.projects=datas
    })
    .catch(()=>{

    })
  }
}
</script>
