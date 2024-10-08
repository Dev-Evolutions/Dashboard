<template>
    <div class="login container mx-auto py-8" v-if="!isAuthenticated">
        <h1 class="text-3xl font-bold text-center mb-6">Login</h1>
        <form class="max-w-md mx-auto" @submit.prevent="login">
            <div class="mb-4">
                <label for="username" class="block text-gray-700">Usuário:</label>
                <input type="text" id="username" v-model="username"
                    class="w-full px-4 py-2 border border-gray-300 rounded-md" />
            </div>
            <div class="mb-4">
                <label for="password" class="block text-gray-700">Senha:</label>
                <input type="password" id="password" v-model="password"
                    class="w-full px-4 py-2 border border-gray-300 rounded-md" />
            </div>
            <button type="submit" class="w-full bg-red-950 text-white py-2 px-4 rounded-md hover:bg-green-700">
                Entrar
            </button>
        </form>
    </div>
    <div v-else>
        <Dashboard/>
    </div>
</template>

<script>
import Dashboard from './Dashboard.vue';

export default {
    data() {
        return {
            username: '',
            password: '',
            isAuthenticated: false
        };
    },
    methods: {
        login() {
            if (this.username === 'admin' && this.password === '1234') {
                this.isAuthenticated = true;
            } else {
                alert('Credenciais inválidas.');
            }
        }
    },
    components: {
    Dashboard
  }
    
};
</script>