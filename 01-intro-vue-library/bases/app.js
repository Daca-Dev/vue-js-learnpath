
console.log('Start app');


const app = Vue.createApp({
    // template: `
    //     <h1>Hello world!</h1>
    //     <hr />
    //     <p> {{ 1 + 1 }}</p>
    // `,
    data() {
        return {
            message: 'A great power, carry a great responsability',
            author: 'Ben Parker',
        }
    },
    methods: {
        changeQuote() {
            console.log('Hello world again');
            // this ref the variables in data()
            this.author = 'David Casas';
            this.changeCase();
        },
        changeCase() {
            this.message = this.message.toUpperCase();
        }
    },
});

app.mount('#myApp');