<template>
	<v-touch v-on:pandown="downRefresh" :tag=tag >
		<slot></slot>
	</v-touch>
</template>

<script>
	export default {
		name: 'VueRefresh',
		data (){
			return {
			    /*oepn用于避免频繁触发*/
				open: false
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
				let obj = this.$el;
				obj.addEventListener('touchstart', () => {
					this.open = true;
				});
				let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
				if(scrollTop <= 0 && ev.deltaY >= this.distance && this.open === true){
						this.open = false;
						this.$emit('downRefresh');
				}


			}
		}
	}
</script>