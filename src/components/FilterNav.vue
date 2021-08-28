<template>
  <nav class="filternav">
      <button @click="filterby('all')" :class="{active : current==='all'}">ALL</button>
      <button @click="filterby('complete')" :class="{active : current==='complete'}">COMPLETE</button>
      <button @click="filterby('ongoing')" :class="{active : current==='ongoing'}">ONGOING</button>
  </nav>
  
</template>

<script>
export default {
    props:['current'],
    methods:{
    filterby(value){
        this.$emit("filtervalue",value)
    }
}
}
</script>

<style>
.filternav button {
    background:none;
    border:none;
    color:rgb(248, 158, 173);
    outline:none;
    font-size:12px;
    text-transform: uppercase;
    margin-right: 10px;
    letter-spacing: 1px;
    font-weight: bold;
    cursor:pointer;
}
button.active {
    color: rgb(235, 131, 131);
}
</style>