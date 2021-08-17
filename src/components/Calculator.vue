<template>
  <div class="calculator">
    <div class="field-input">
      <field :current-value="currentValue"/>
    </div>
    <div class="button" @click="clear">C</div>
    <div class="button" @click="mark">+/-</div>
    <div class="button" @click="percent">%</div>
    <div class="button" @click="division">/</div>
    <div class="button" @click="addNumber('7')">7</div>
    <div class="button" @click="addNumber('8')">8</div>
    <div class="button" @click="addNumber('9')">9</div>
    <div class="button" @click="multiply">x</div>
    <div class="button" @click="addNumber('4')">4</div>
    <div class="button" @click="addNumber('5')">5</div>
    <div class="button" @click="addNumber('6')">6</div>
    <div class="button" @click="minus">-</div>
    <div class="button" @click="addNumber('1')">1</div>
    <div class="button" @click="addNumber('2')">2</div>
    <div class="button" @click="addNumber('3')">3</div>
    <div class="button" @click="plus">+</div>
    <div class="button" @click="addNumber('0')">0</div>
    <div class="button" @click="point">.</div>

    <div class="button result" @click="result">
      <result-button/>
    </div>

  </div>
</template>

<script>

import Field from "@/components/Field";
import ResultButton from "@/components/ResultButton";

export default {
  name: "calculator",
  components: { ResultButton, Field },
  data() {
    return {
      earlyValue: null,
      currentValue: 0,
      operator: null,
      clickOnOperator: false
    }
  },
  methods: {
    clear() {
      this.currentValue = ''
    },
    addNumber(number) {
      if ( this.clickOnOperator === true ) {
        this.currentValue = ''
        this.clickOnOperator = false
      }
      if ( this.currentValue === 0 ) {
        this.currentValue = number
      } else {
        this.currentValue = `${ this.currentValue }${ number }`
      }
    },
    plus() {
      this.operator = (a, b) => a + b
      this.earlyValue = this.currentValue
      this.clickOnOperator = true
    },
    minus() {
      this.operator = (a, b) => a - b
      this.earlyValue = this.currentValue
      this.clickOnOperator = true
    },
    multiply() {
      this.operator = (a, b) => a * b
      this.earlyValue = this.currentValue
      this.clickOnOperator = true
    },
    division() {
      this.operator = (a, b) => (a / b).toFixed( 4 )
      this.earlyValue = this.currentValue
      this.clickOnOperator = true
    },
    percent() {
      this.currentValue = (this.currentValue / 100).toFixed( 2 )
    },
    point() {
      if ( this.currentValue.indexOf( '.' ) === -1 ) {
        this.addNumber( '.' )
      }
    },
    mark() {
      if ( this.currentValue !== 0 )
        if ( this.currentValue.charAt( 0 ) === '-' ) {
          this.currentValue = this.currentValue.slice( 1 )
        } else {
          this.currentValue = `-${ this.currentValue }`
        }
    },
    result() {
      if ( this.currentValue === 0 || this.earlyValue === null ) {
        return this.currentValue
      }
      this.currentValue = this.operator( Number( this.earlyValue ), Number( this.currentValue ) )
      this.earlyValue = null
      this.clickOnOperator = true
    }
  }
}
</script>

<style scoped>
.calculator {
  height: 500px;
  width: 328px;
  background-color: #04002b;
  border-radius: 5px;
  border: 1px solid transparent;
  margin: 0 auto;
  font-size: 22px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
}

.field-input {
  grid-column: 1 / 5;
  background-color: #282828;
  color: white;
}

.button {
  background: #26006d;
  border: 1px solid #111;
  cursor: pointer;
  display: flex;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  color: #ffff;
  margin: 5px 4px;
}

.button:hover {
  background-color: #30009c;
}

.button:active {
  outline: none;
  border: 1px solid #000000BF;
  box-shadow: inset 0 0 5px #00000080;
}


.result {
  grid-column: 3/ 5;
  background-color: red;
}

.result:hover {
  background-color: #ff4444;
}
</style>
