<template>
	<div>
		<p>{{message}}</p>
		<p>{{condition ? '这是真的' : '这是假的'}}</p>
		<p v-text="text"></p>
		<p v-html="html"></p>
		<p v-show="flag">show指令</p>
		<p v-if="grade === 'A'">A</p>
		<p v-else-if="grade === 'B'">B</p>
		<p v-else-if="grade === 'C'">C</p>
		<p v-else>D</p>
		<button v-on:click="btnTap">按钮点击</button>

		<div v-bind:style="style"></div>

		<div v-bind:class="['clA', 'clB']">clas属性</div>
		<div v-bind:class="cls">class属性2</div>
		<div v-bind:class="[clsFlag ? 'clA' : 'claB']">class属性3</div>

		<input v-model="inputText" type="text" />
		{{inputText}}

		<p v-for="item in arr" :key="item">{{item}}</p>

		<div @click="tapParent">
			<button @click.stop="tapChild">子集</button>
		</div>
		<form action="/">
			<button @click.prevent="submit">提交</button>
		</form>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue'

	const message: string = 'vue3学习'
	const condition: boolean = false
	const text: string = '文本指令'
	const html: string = '<section>html指令</section>'
	const flag: boolean = true
	const grade: string = 'B'
	const btnTap = () => {
		console.log('我是按钮')
	}
	
	type Style = {
		backgroundColor: string,
		height: string
	}
	const style: Style = {
		backgroundColor: 'red',
		height: '100px' 
	}

	type Cls = {
		clA: boolean,
		clB: boolean
	}
	const cls: Cls = {
		clA: true,
		clB: true
	}
	const clsFlag = true

	// const inputText: string = 'input some value' // 非响应式
	const inputText = ref('input some value')

	const arr: Array<number> = [1, 2, 3]

	const tapParent = () => {
		console.log('我是父级')
	}
	const tapChild = () => {
		console.log('我是子集')
	}

	const submit = () => {
		console.log('提交')
	}

</script>

<style>
	.clA {
		color: blue
	}
	.clB {
		border: 1px solid #000;
	}
</style>