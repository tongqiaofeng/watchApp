<template>
	<web-view :src="jumpPath"></web-view>
</template>

<script>
export default {
	data() {
		return {
			jumpPath: '',
		};
	},
	onLoad(option) {
		let url = option.url;
		this.jumpPath = url;
	},
};
</script>

<style></style>
