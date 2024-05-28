const {createApp} = Vue


createApp({
    data(){
        return{
            message: 'Hello Vue!!',
            urlImg: 'https://www.nerdface.it/wp-content/uploads/2023/01/la-gigantesca-ironia-del-bassissimo-gigi-la-trottola.jpg',
            classes: ''
        }
    },
    methods:{
        attivaClass: function(){
            let imgEl = document.querySelector('#imgUserClass');
            imgEl.classList.toggle('filtroImmagine');

        }
    }
}).mount('#test')