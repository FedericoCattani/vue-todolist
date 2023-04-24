const {createApp} = Vue;

createApp({

  data(){
    return{
      tasks:[
        {
          text:'Comprare pane',
          done: false
        },
        {
          text:'Comprare biscotti',
          done: true
        },
        {
          text:'Comprare latte',
          done: false
        }
      ]
    }
  },

  methods:{

    removeTask(index){
      this.tasks.splice(index,1)
    }
  }

}).mount('#app')