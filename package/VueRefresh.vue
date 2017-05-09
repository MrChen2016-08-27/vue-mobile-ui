<template>
	<v-touch :options="{ touchAction: 'auto' }" :pan-options="{ direction: 'down', threshold: distance }" v-on:panend="downRefresh" :tag=tag >
		<slot></slot>
	</v-touch>
</template>

<script>
	export default {
		name: 'VueRefresh',
		data (){
			return {
			}
		},
		props:{
			tag: {
				type: String
			},
			/*触发需要的距离*/
			distance: {
				type: Number,
				default: 160
			}
		},
		methods: {
			downRefresh (ev){
				let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
				if( scrollTop <= 0 ){
					this.$emit('downRefresh');
				}


			}
		}
	}
</script>