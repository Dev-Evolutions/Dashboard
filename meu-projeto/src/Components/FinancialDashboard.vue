<template>
  <div>
    <header>
      <h1>Dashboard Financeiro - Exprezzo Cafeteria</h1>
      <img src="" alt="Logo da Exprezzo Cafeteria"/>
    </header>

    <main>
      <table id="table-entradas-saidas" class="flex flex-col">
        <thead>
          <tr class="text-md flex flex-row bg-gray-200">
            <th>Descrição</th>
            <th>Tipo</th>
            <th>Quantidade</th> 
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(entrada, index) in entradas" :key="index" class="bg-green-100 flex flex-row pt-2 text-center" id="entradas">
            <td class="w-24 h-12">{{ entrada.descricao }}</td>
            <td class="w-24 h-12">Entrada</td>
            <td class="w-24 h-12">
              <input type="number" v-model="entrada.quantidade" class="w-12 text-center" min="0" @input="atualizarValorEntrada" />
            </td>
            <td class="w-24 h-12">{{ calcularValorEntrada(entrada) }}</td>
          </tr>
          <tr v-for="(saida, index) in saidas" :key="index" class="bg-red-100 flex flex-row pt-2 text-center">
            <td class="w-24 h-12">{{ saida.descricao }}</td>
            <td class="w-24 h-12">Saída</td>
            <td class="w-24 h-12">
              <input type="number" v-model="saida.quantidade" class="w-12 text-center" min="0" @input="atualizarValorSaida" />
            </td>
            <td class="w-24 h-12">{{ calcularValorSaida(saida) }}</td>
          </tr>
        </tbody>
      </table>

      <div class="mt-8 flex justify-center">
        <h2 class="text-xl font-bold text-green-600">Saldo do Fluxo de Caixa: {{ saldo }} R$</h2>
      </div>

      <div class="mt-8">
        <h3 class="bg-red-950 text-white py-4 rounded-lg flex justify-center items-center text-2xl font-bold">Vendas Mensais</h3>
        <canvas id="vendasMensais"></canvas>
      </div>
    </main>
  </div>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  data() {
    return {
      entradas: [
        { descricao: "Venda de Café", valorUnitario: 15, quantidade: 200 },
        { descricao: "Venda de Produtos", valorUnitario: 14, quantidade: 500 },
        { descricao: "Serviços Extras", valorUnitario: 50, quantidade: 150 }
      ],
      saidas: [
        { descricao: "Compra de Ingredientes", valorUnitario: 40, quantidade: 100 },
        { descricao: "Manutenção", valorUnitario: 200, quantidade: 5 },
        { descricao: "Salários", valorUnitario: 150, quantidade: 20 }
      ]
    };
  },
  computed: {
    saldo() {
      const totalEntradas = this.entradas.reduce((total, entrada) => total + this.calcularValorEntrada(entrada), 0);
      const totalSaidas = this.saidas.reduce((total, saida) => total + this.calcularValorSaida(saida), 0);
      return totalEntradas - totalSaidas;
    }
  },
  methods: {
    calcularValorEntrada(entrada) {
      return entrada.valorUnitario * entrada.quantidade;
    },
    calcularValorSaida(saida) {
      return saida.valorUnitario * saida.quantidade;
    },
    atualizarValorEntrada() {
      // Lógica de atualização não é necessária aqui
    },
    atualizarValorSaida() {
      // Lógica de atualização não é necessária aqui
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
              borderWidth: 1
            },
            {
              label: "Produtos Vendidos (unidades)",
              data: [80, 90, 100, 150, 140, 160],
              backgroundColor: "rgba(153, 102, 255, 0.2)",
              borderColor: "rgba(153, 102, 255, 1)",
              borderWidth: 1
            }
          ]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }
};
</script>

<style>
#table-entradas-saidas th {
  width: 11rem;
  text-align: center;
}
</style>
