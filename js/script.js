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
      ],
      errorMsg: ''
    }
  },

  methods:{

    removeTask(index){
      this.errorMsg = ''
      if (this.tasks[index].done) {
        this.tasks.splice(index,1)
      } else {
        this.errorMsg = 'Attenzione! Non puoi eliminare questa task se non è stata fatta.'
      }
      
    }
  }

}).mount('#app')