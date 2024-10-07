<template>
  <div>
    <header>
    <h1>Dashboard Financeiro - Exprezzo Cafeteria</h1>
    <img src="@/assets/logo_cafe_com_escrita_exprezzo.png" alt="Logo da Exprezzo Cafeteria"/>
    </header>
        <main>
            <table>
                <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Tipo</th>
                    <th>Quantidade</th> 
                    <th>Valor (R$)</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(entrada, index) in entradas" :key="index">
                    <td>{{ entrada.descricao }}</td>
                    <td>Entrada</td>
                    <td>{{ entrada.quantidade }}</td> 
                    <td>{{ entrada.valor }}</td>
                </tr>
                <tr v-for="(saida, index) in saidas" :key="index">
                    <td>{{ saida.descricao }}</td>
                    <td>Saída</td>
                    <td>{{ saida.quantidade }}</td> 
                    <td>{{ saida.valor }}</td>
                </tr>
                </tbody>
            </table>
            </main>
    </div>
</template>
