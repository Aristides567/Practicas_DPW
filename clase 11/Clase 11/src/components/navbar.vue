<script setup>

import {ref, computed} from 'vue'



const firstName = ref("Aristides")
const lastName = ref("Alfonso")
const age = ref(30)

const name = ref("Manuel")

const fullName = computed(() =>  firstName.value + " " + lastName.value)

const products = ref([
    {name: "Laptop", available: true}, 
    {name: "Licuadora", available: false}, 
    {name: "Teclado", available: true}
])

const cart = ref([
    {product: "Camisa", price: 20, amount: 2 },
    {product: "Pantalones", price: 30, amount: 1 },
    {product: "Zapatillas", price: 50, amount: 3 }
])

const Name = computed({
    get: () => name.value.toUpperCase(),
    set: (newName) => name.value = newName.toLowerCase()
})

const availables = computed(() => {
    return products.value.filter(product => product.available)
})

const totalCart = computed(() => {
    return cart.value.reduce((acc, item) => acc + item.price * item.amount, 0)
})

const isAdult = computed(() => age.value >= 18)

</script>

<template>
    <div class="container" >

        <div class="card" >
            <h1>My Profile</h1>
            <p>First Name: {{ firstName }}</p>
            <p>Last Name: {{ lastName }}</p>
            <p>FullName: {{ fullName }}</p>
            <p>Age: {{ age }}</p>
            <p>Is Adult: {{ isAdult }}</p>
            <span>👻</span>
        </div>

        <div class="card" >
            <input type="text" v-model="Name" style="text-align: center;">
            <p>Nombre Original: <span style="font-weight: bold;">{{ name }}</span></p>
        </div>


        <div class="product">
            <h2>Productos Disponibles</h2>
            <ul>
                <li v-for="product in availables" :key="product.name">{{ product.name }}</li>
            </ul>
        </div>


        <div class="cart">
            <h2>Carrito</h2>
            <ul>
                <li class="list" v-for="item in cart" :key="item.product
                ">
                    {{ item.product }} 
                    <br> - Precio: {{ item.price }} 
                    <br>- Cantidad: {{ item.amount }}
                </li>
            </ul>
            <p style="color: brown; font-weight: bold;">Total a pagar: ${{ totalCart }}</p>
        </div>

    </div>
</template>

<style scoped>
.container{
  display: flex; 
  gap: 3em; 
  justify-content: center; 
  flex-wrap: wrap;
  height: 100vh; 
  align-items: center;
}

.card {
  text-align: center;
  border: solid 1px black; 
  padding: 1em; 
  border-radius: 1em; 
  width: 300px; 
  box-sizing: border-box; 
  background-color: white; 
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  gap: 1em; 
  color: black; 
  height: 420px; 
  overflow-y: auto; 
  filter: drop-shadow(30px 10px 4px rgba(0,0,0,0.5));
}

.product {
  text-align: left;
  border: solid 1px black; 
  padding: 1em; 
  border-radius: 1em; 
  width: 300px; 
  box-sizing: border-box; 
  background-color: white; 
  display: flex; 
  flex-direction: column; 
  gap: 1em; 
  color: black; 
  height: 420px; 
  overflow-y: auto; 
  filter: drop-shadow(30px 10px 4px rgba(0,0,0,0.5));
}

.product h2 {
  text-align: center;
}

.cart {
  text-align: left;
  border: solid 1px black; 
  padding: 1em; 
  border-radius: 1em; 
  width: 300px; 
  box-sizing: border-box; 
  background-color: white; 
  display: flex; 
  flex-direction: column; 
  gap: 1em; 
  color: black; 
  height: 420px; 
  overflow-y: auto; 
  filter: drop-shadow(30px 10px 4px rgba(0,0,0,0.5));
}

.cart h2 {
  text-align: center;
}

.card .list {
  list-style: none;
  text-align: left;
}
</style>