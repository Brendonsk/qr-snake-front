<template>
  <div class="all-cad">
    <div class="camp-css">
      <v-text-field
        label="Numero do Chip"
        outlined
        align="center"
        v-model="chip"
      ></v-text-field>

      <v-text-field
        label="Especie"
        outlined
        align="center"
        v-model="especie"
      ></v-text-field>

      <v-text-field
        label="Nome Comum"
        outlined
        align="center"
        v-model="nome"
      ></v-text-field>

      <v-select
        :items="denticoes"
        label="Denticao"
        outlined
        align="center"
        v-model= "denticao"
         
      ></v-select>

      <v-select
        :items="reproducoes"
        label="Reproducao"
        outlined
        align="center"
        v-model="reproducao"
         
      ></v-select> 

      <v-text-field
        label="Alimentacao"
        outlined
        align="center"
        multiple
        v-model="alimentacao"
      ></v-text-field>

      <v-select
        :items="habitats"
        label="Habitat"
        outlined
        align="center"
        multiple
        v-model="habitat"
         
      ></v-select>    

      <v-menu
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="auto"
         
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="Data de Chegada"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          @input="menuChegada = false"
        ></v-date-picker>
      </v-menu>

      <v-text-field
        label="Local de origem"
        outlined
        align="center"
        v-model="origem"
      ></v-text-field>     

      <v-text-field
        label="Municipio"
        outlined
        align="center"
        v-model="municipio"
      ></v-text-field>

      <v-select
        :items="afirmacao"
        label="Term./Doacao"
        outlined
        align="center"
        v-model="confirmacao"
      ></v-select> 

      <v-text-field
        label="Massa (g) de entrada"
        outlined
        align="center"
        v-model="massa"
      ></v-text-field>    

      <v-text-field
        label="Total - Entrada"
        outlined
        align="center"
        v-model="total"
      ></v-text-field>

      <v-text-field
        label="Cauda - Entrada"
        outlined
        align="center"
        v-model="cauda"
      ></v-text-field>

      <v-select
        :items="idades"
        label="Idade"
        outlined
        align="center"
        v-model="idade"
      ></v-select>     

      <v-select
        :items="sexos"
        label="Sexo"
        outlined
        align="center"
        v-model="sexo"
      ></v-select>    

      <v-select
        :items="situacoes"
        label="Situacao"
        outlined
        align="center"
        v-model="situacao"
      ></v-select>
      <v-textarea
        outlined
        placeholder="Observações"
        row="2"
        v-model="observacao"
      >
        Observações
      </v-textarea>
    </div>
    <div>
      <v-btn
        class="ma-2"
        outlined
        color="indigo"
        @click="goBack"
      >
        Voltar
      </v-btn>
      <v-btn
        class="ma-2"
        outlined
        color="indigo"
        @click="register"
      >
        Cadastrar Animal
      </v-btn>
    </div>
  </div>
</template>

<script>
import animalResource from "../api/resources/animal"
export default {
  name: 'CadastrarAnimal',
  data: () => ({
    sexos: ['Macho', 'Femea', 'Não identificado'],
    reproducoes: ['Viviparidade', 'Oviparidade', 'Não identificado'],
    habitats: ['Terrícula', 'Arborícola', 'Subterrânea', 'Aquática'],
    afirmacao: ['Sim', 'Não', 'N/A'],
    idades: ['Filhote', 'Jovem', 'Adulto'],
    situacoes: ['Viva', 'Óbito', 'Reintroduzida'],
    denticoes: ['Solenóglifa', 'Áglifa', 'Opistóglifa', 'Proteróglifa', 'Não identificado'],
    date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    menuChegada: false,
    menuObito: false,
    chip: '',
    sexo: '',
    reproducao: '',
    habitat: '',
    confirmacao: '',
    idade: '',
    situacao: '',
    denticao: '',
    menuC: '',
    menuO: '',
    especie: '',
    nome: '',
    alimentacao: '',
    origem: '',
    municipio: '',
    massa: '',
    total: '',
    cauda: '',
    observacao: '',
  }),
  methods: {
    goBack() {
      this.$router.push('/search');
    },

    async register() {
      
      const animal = await animalResource.post({chip: this.chip});
      console.log(animal);
    }
  },
}
</script>

<style lang="scss" scoped>
.all-cad {
  margin-left: 1% 3%;
  margin-right: 1% 3%;
}

.main-css{
  padding: 1% 3%;
  display: flex;
  justify-content: space-between;
}

.component-css{
  padding: 1% 3%;
  display: flex;
  justify-content: space-between;
}

.id-css{
  padding: 1% 3%;
  display: flex;
  justify-content: space-between;
}

.chip-css{
  display: flex;
  justify-content: space-between;
  max-width: 50%;
}

.camp-css{
  padding: 1% 3%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>