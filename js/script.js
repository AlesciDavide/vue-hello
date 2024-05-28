const {createApp} = Vue


createApp({
    data(){
        return{
            message: 'Hello Vue!!',
            urlImg: 'https://www.nerdface.it/wp-content/uploads/2023/01/la-gigantesca-ironia-del-bassissimo-gigi-la-trottola.jpg',
            sceltaClasse: '',
        }
    },
    methods:{
        attivaClass: function(){
            this.sceltaClasse = this.sceltaClasse == 'filtroImmagine' ? '': 'filtroImmagine';

        }
    }
}).mount('#test')