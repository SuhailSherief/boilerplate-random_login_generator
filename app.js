const app = Vue.createApp({
    data(){
        return{
            firstName : 'Deva',
            lastName : 'Kamalam',
            email : 'DevaKamalam@example.com',
            gender : 'male',
            picture : 'https://randomuser.me/api/portraits/men/1.jpg',
            phNo : '23342629',
            userName : 'getomc',
            password : 'm346gh67',
        }
    },
    methods: {
        async getUser(){
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()
            console.log(results)
            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large
            this.phNo = results[0].phone
            this.userName = results[0].login.username
            this.password = results[0].login.password
        },
    },
})

app.mount('#app')