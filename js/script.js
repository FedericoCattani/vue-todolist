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
      errorMsg: '',
      newTaskStrg: '',
    }
  },

  methods:{

    removeTask(index){
      this.errorMsg = ''
      if (this.tasks[index].done) {
        this.tasks.splice(index,1)
      } else {
        this.writeErrorMsg('Attenzione! Non puoi eliminare questa task se non è stata fatta.')
      }
      
    }, 

    writeErrorMsg(msg){
      this.errorMsg = msg
      setTimeout(() => {
        this.errorMsg = ''
      }, 2500)
      
    },

    addNewTask(){

      if(this.newTaskStrg.length > 4){
        
      } else{
        this.writeErrorMsg('Attenzione! La task deve essere almeno di cinque caratteri.')
      }
    }
    
  }

}).mount('#app')