<style lang='less' scoped >
.carouse{
	width: 100%;
	position:relative;
	.img-list{
		width:100%;
		position: relative;
		img{
			position:absolute;
			width:100%;
		}
	}
	.rotateY-enter-active, .rotateY-leave-active, 
	.rotateX-enter-active, .rotateX-leave-active, 
	.translateX-enter-active, .translateX-leave-active, 
	.translateY-enter-active, .translateY-leave-active, 
	{
		transition:all 0.7s;
	}

	.rotateY-enter, .rotateY-leave-active, 
	.rotateX-enter, .rotateX-leave-active,
	.translateX-enter, .translateX-leave-active,
	.translateY-enter, .translateY-leave-active
	{
		opacity:0;
	}

	.rotateY-enter, .rotateY-leave-active{
		transform:rotateY(180deg);
	}
	.rotateX-enter, .rotateX-leave-active {
		 transform:rotateX(180deg);
	}
	translateX-enter, .translateX-leave-active {
		transform:translateX(30px);
	}
	translateY-enter, .translateY-leave-active {
		transform:translateY(30px);
	}
	ul{
		width: 100%;
		position: absolute;
		list-style: none;
		bottom:0.2rem;
		z-index:9;
		text-align:center;
		li{
			width:3%;
			height:0.3rem;
			border-radius:0.5rem;
			background-color:#999999;
			position:relative;
			margin:0px 2%;
			display:inline-block;
		}
		.active{
			background-color:#63B8FF;
		}
	}
}
</style>

<template>
	<div v-carousel class='carouse'>
			<v-touch v-on:swipeleft="addActive" v-on:swiperight="reduceActive" class="img-list"  >
				<transition-group :name="type" >
					<v-touch tag="img" :class="[ active === index ? 'img-active' : '']" v-show="active === index" v-for="(img, index) in dataList" :src='img.src' :key="index" v-on:tap="routerLink(img.href)"    />
				</transition-group>
			</v-touch>
		<ul>
			<v-touch v-on:tap="setActive(index)" tag="li"  :class="[ index === active ? 'active' : '' ]" v-for="(i, index) in dataList" :key='index' ></v-touch>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'VueCarousel',
		data (){
			return {
				active: 0
			}
		},
		props: {
			dataList: Array,
			type: { 
				type: String,
				default: 'rotateY'
			},
			routerOpen: {
				type: Boolean,
				default: false
			}
		},
		created: function(){
			this.timeCarousel();
		},
		methods: {
			addActive (){
				if(this.active < this.dataList.length - 1){
					this.active += 1;
				}else{
					this.active = 0;
				}
			},
			reduceActive (){
				if(this.active > 0){
					this.active -= 1;
				}else{
					this.active = this.dataList.length - 1;
				}
			},
			setActive (value){
				this.active = value;
			},
			timeCarousel (){
				let timer = setInterval(() => {
					this.addActive();
				},4000);
			},
			routerLink (value){
				if(value){
					if(this.routerOpen){
						this.$router.push(value);
					}else{
						window.location.href = value;
					}

				}
			}
		},
		directives: {
			'carousel': function(el){
				let oImg = el.querySelector('.img-active');
				let loadSize = function(){
					oImg = el.querySelector('.img-active');
					el.style.height = oImg.offsetHeight + 'px';
				}
				//避免初始化前获取了图片高度为0
				oImg.addEventListener('load', function(){
					loadSize();
				});
				//当容器大小改变则重新计算
				window.addEventListener('resize', function(){
					loadSize();
				});
			}
		}

	}
</script>
