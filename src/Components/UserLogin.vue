<template>
    <div class="login container mx-auto py-8 bg-red-950 min-h-screen items-center justify-center min-w-[100%]" v-if="!isAuthenticated">
        <h1 class="text-3xl font-bold text-center mb-6 text-white" >Login</h1>
        <form class="max-w-md mx-auto r flex flex-col items-center gap-8" @submit.prevent="login">
            <div class="w-[20em]">
                <label for="username" class="block text-white text-left">Usuário:</label>
                <input type="text" id="username" v-model="username"
                    class="w-full px-4 py-2 border border-gray-300 rounded-md" />
            </div>
            <div class="w-[20em]">
                <label for="password" class="block text-white text-left">Senha:</label>
                <input type="password" id="password" v-model="password"
                    class="w-full px-4 py-2 border border-gray-300 rounded-md" />
            </div>
            <button type="submit" class="w-[70%] bg-white text-red-950 py-2 px-2 border-2 border-gray-300 rounded-md hover:bg-gray-300 mt-7">
                Entrar
            </button>
            <img src="logo_cafe_com_escrita.png" alt="Exprezzo Cafe">
        </form>
    </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      if (this.username === 'admin' && this.password === '1234') {
        localStorage.setItem('isAuthenticated', 'true'); 
        this.$router.push({ name: 'Dashboard' }); 
      } else {
        alert('Credenciais inválidas.');
      }
    }
  }
};
</script>