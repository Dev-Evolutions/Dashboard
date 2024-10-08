<template>
  <div class="flex flex-col h-screen overflow-hidden">
    <header class="bg-red-950 text-white py-4 rounded-lg flex justify-center items-center mb-8">
        <h1 class="text-3xl font-bold">Dashboard Financeiro - Exprezzo Cafeteria</h1>
        <img src="@/assets/logo_cafe_com_escrita_exprezzo.png" alt="Logo da Exprezzo Cafeteria" class="w-30 h-20 ml-4" />
      </header>

    <main class="flex flex-1 overflow-hidden">
      <aside class="w-1/3 sm:w-1/4 bg-red-950 text-white p-4 flex flex-col items-center">
        <img src="@/assets/usuario.jpg" alt="Foto do Usuário" class="w-20 h-20 rounded-full mb-2" />
        <h2 class="text-sm font-bold">Usuário: Enrico Gostoso</h2>
        <p class="text-xs text-gray-300 mb-2">Administrador</p>
        <button @click="logout" class="bg-green-500 text-white text-xs px-3 py-1 rounded mt-1 hover:bg-green-600">Sair</button>
      </aside>

      <div class="flex-grow p-1 overflow-auto">
        <section class="grid grid-cols-2 gap-4 mb-8">
          <div class="bg-green-100 p-4 rounded-lg">
            <h2 class="text-lg font-bold">Clientes Atendidos</h2>
            <p class="text-2xl font-bold text-green-600">{{ clientesAtendidos }}</p>
          </div>
          <div class="bg-green-100 p-4 rounded-lg">
            <h2 class="text-lg font-bold">Total de Vendas</h2>
            <p class="text-2xl font-bold text-green-600">R$ {{ totalVendas.toFixed(2) }}</p>
          </div>
        </section>

        <table id="table-entradas-saidas" class="w-full text-xs">
          <thead>
            <tr class="text-xs bg-gray-200">
              <th class="text-left p-1">Descrição</th>
              <th class="text-left p-1">Tipo</th>
              <th class="text-left p-1">Quantidade</th>
              <th class="text-left p-1">Valor (R$)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(entrada, index) in entradas" :key="index" class="bg-green-100 text-center">
              <td class="p-1">{{ entrada.descricao }}</td>
              <td class="p-1">Entrada</td>
              <td class="p-1">
                <input type="number" v-model.number="entrada.quantidade" class="w-14 text-center text-xs p-1" />
              </td>
              <td class="p-1">R$ {{ (entrada.valor * entrada.quantidade).toFixed(2) }}</td>
            </tr>
            <tr v-for="(saida, index) in saidas" :key="index" class="bg-red-100 text-center">
              <td class="p-1">{{ saida.descricao }}</td>
              <td class="p-1">Saída</td>
              <td class="p-1">
                <input type="number" v-model.number="saida.quantidade" class="w-14 text-center text-xs p-1" />
              </td>
              <td class="p-1">R$ {{ (saida.valor * saida.quantidade).toFixed(2) }}</td>
            </tr>
          </tbody>
        </table>

        <div class="mt-2 flex justify-center">
          <h2 class="text-xs font-bold text-green-600">Saldo do Fluxo de Caixa: R$ {{ saldo.toFixed(2) }}</h2>
        </div>

        <div class="mt-2">
          <h3 class="bg-red-950 text-white py-1 rounded-lg flex justify-center items-center text-sm font-bold">Vendas Mensais</h3>
          <canvas id="vendasMensais" class="w-full h-32"></canvas>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  data() {
    return {
      clientesAtendidos: 150,
      totalVendas: 20000,
      entradas: [
        { descricao: "Venda de Café", valor: 15, quantidade: 200 },
        { descricao: "Venda de Produtos", valor: 30, quantidade: 500 },
        { descricao: "Serviços Extras", valor: 50, quantidade: 150 },
      ],
      saidas: [
        { descricao: "Compra de Ingredientes", valor: 20, quantidade: 100 },
        { descricao: "Manutenção", valor: 200, quantidade: 5 },
        { descricao: "Salários", valor: 300, quantidade: 20 },
      ],
    };
  },
  computed: {
    saldo() {
      const totalEntradas = this.entradas.reduce((total, entrada) => total + entrada.valor * entrada.quantidade, 0);
      const totalSaidas = this.saidas.reduce((total, saida) => total + saida.valor * saida.quantidade, 0);
      return totalEntradas - totalSaidas;
    },
  },
  mounted() {
    this.renderChart();
  },
  methods: {
    logout() {
      alert("Você saiu do sistema!");
    },
    renderChart() {
      const ctx = document.getElementById("vendasMensais").getContext("2d");
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
          datasets: [
            {
              label: "Café Vendido (unidades)",
              data: [50, 100, 150, 200, 180, 220],
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
            {
              label: "Produtos Vendidos (unidades)",
              data: [80, 90, 100, 150, 140, 160],
              backgroundColor: "rgba(153, 102, 255, 0.2)",
              borderColor: "rgba(153, 102, 255, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    },
  },
};
</script>

<style>
#table-entradas-saidas th {
  text-align: left;
}
</style>
