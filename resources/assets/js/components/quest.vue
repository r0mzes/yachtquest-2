<template>
	<div class="container" style="margin-top: 2vh;">
	  	<div class="content">
	  		<div class="row">
	  			<div class="col-sm-6">
	  				<img class="img-fluid" src="/img/Lara_2.png">
	  			</div>
	  			<div id="quest_details" class="col-sm-6">
	  				<h2 class="text-center">{{title}}</h2>
					<ul class="list-group list-group-flush">
					  <li class="list-group-item">
					  	<p style="line-height: 1;" v-html="message"></p>
					  </li>
					  <li class="list-group-item">
					  	<h6>Локация</h6>
					  	<span>Южное побережье Турции.</span>
					  </li>
					  <li class="list-group-item">
					  	<h6>Уровень сложности</h6>
					  	<div class="img-group">
						  	<img src="/img/sailing-boat-sailing.png" class="img-thumbnail">
						  	<img src="/img/spyglass.png" class="img-thumbnail">
						  	<img src="/img/man-in-canoe.png" class="img-thumbnail">
						  	<img src="/img/climbing-with-rope.png" class="img-thumbnail">
						  	<img src="/img/man-swimming.png" class="img-thumbnail">
						  	<img src="/img/lantern-on.png" class="img-thumbnail">
						  	<img src="/img/hiking.png" class="img-thumbnail">
						</div>
						<div class="clearfix"></div>
						<div class="text-right">
							<p style="line-height: 1; margin-top: 10px;" v-html="level_description"></p>
						</div>
					  </li>
					  <li class="list-group-item">
					  	<h6>Количество человек в команде</h6>
					  	<span>{{member}}</span>
					  </li>
					  <li class="list-group-item">
					  	<h6>Возрастное ограничение</h6>
					  	<span>18+</span>
					  </li>
					  <li class="list-group-item">
					  	<div class="row">
						  	<div class="col-2">
						  		<i class="far fa-calendar-alt fa-2x"></i>
						  	</div>
						  	<div class="col-10 date_quest">
						  		<ul class="list-group list-group-flush">
									<li class="list-group-item">
										<h6 class="inline-block">Старт: </h6><span>{{date_start}}</span>
									</li>
									<li class="list-group-item">
										<h6 class="inline-block">Финиш: </h6><span>{{date_finish}}</span>
									</li>
									<li class="list-group-item">
										<h6 class="inline-block">Продолжительность: </h6><span>{{duration}}</span>
									</li>
								</ul>
							  	<br>
							</div>
						</div>
					  </li>
					  <li class="list-group-item">
					  	<h6>Стоимость</h6>
				  		<span>1200 €</span>
					  </li>
					  	<li class="list-group-item">
							<a href="https://docs.google.com/forms/d/e/1FAIpQLSeQDMDjJxDw84zUtcV8MUKVvRaRZDlEHYlwOMMSu9KVfPzrGg/viewform" type="button" class="btn btn-danger btn-lg btn-block align-middle">Зарегестрироваться</a>
						</li>
					</ul>
				</div>
				<div class="col-md-12"><br></div>
				<div class="col-md-6">
					<h4>Место начала квеста: <br><small>Турция. Город Фетхие. Памятник Ататюрку на набережной возле Starbaks</small><br> Время: <small>09.06.2018 в 10:00</small></h4>
					<div id="map_container">
						<div id="map">
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13242.019957799586!2d29.103989236425583!3d36.623964129762165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDM3JzI2LjMiTiAyOcKwMDYnNDUuOSJF!5e1!3m2!1sru!2sua!4v1520537763756" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
						</div>
					</div>
				</div>
				<div class="col-md-6">
					<h4>В стоимость входит:</h4>
					<ul class="list-group list-group-flush">
						<li class="list-group-item" v-for="item in included_in_the_price">{{item}}</li>
					</ul>
					<br>
					<h4>В стоимость не входит:</h4>
					<ul class="list-group list-group-flush">
						<li class="list-group-item" v-for="item in the_price_does_not_include">{{item}}</li>
					</ul>
				</div>
				<div class="col-sm-12 d-block d-sm-none">
					<a href="https://docs.google.com/forms/d/e/1FAIpQLSeQDMDjJxDw84zUtcV8MUKVvRaRZDlEHYlwOMMSu9KVfPzrGg/viewform" type="button" class="btn btn-danger btn-lg btn-block align-middle">Зарегестрироваться</a>
				</div>
	  		</div>
	  	</div>
	</div>
</template>
<script>
	export default {
        mounted() {
            console.log('Component mounted')
        },
        data: function () {
            return {
                message: 'Взятие турками Константинополя -<br> одно из самых загадочных и судьбоносных событий в истории европейской цивилизации. Участникам экспедиции предстоит проникнуть в тайну победы османов в этой решительной битве и отправиться на поиски одного из самых таинственных артефактов в истории человечества.',
                title: 'Сокровище Османской Империи',
                level_description: 'Увлекательное путешевсвие по средиземному морю у берегов Турции.<br> В процессе которого вам предстоит:<br> - управлять яхтой<br> - разгадывать загадки<br> - прокладывать себе курс<br> - побывать в исторических местах<br> - искать тайники в древних крепостях и гробницах<br> - пробираться горными тропами<br> - опускаться под воду<br> - исследовать занесенные песком древние города<br> - преодолев трудности, разгадать тайну и добыть сокровище османской империи.',
                price: 1200,
                member: 6,
                date_start: "09.06.2018",
                date_finish: "16.06.2018",
                duration: '7 дней',
                about_title_size: 100,
                truncate_size: 199,
                botton_mess: 'Узнать больше',
                included_in_the_price: [
                	'аренда парусной яхты',
                	'заправка яхты топливом',
                	'стоянки в маринах',
                	'питание на борту яхты (без учета алкоголя)',
                	'ужины в рыбацких ресторанах',
                	'постельное белье и полотенца',
                	'резиновая лодка с двигателем и топлово к ней',
                	'услуги капитана',
                	'услуги команды сопровождения квеста',
                	'аренда дополнительного реквизита',
                	],
                the_price_does_not_include: [
                	'перелет',
                	'трансфер до точки начала квеста',
                	'отель (если понадобиттся)',
                	'страховка'
                ]
            }
        },
        filters: {
		  	truncate: function(string) {
		  		console.log(this.truncate_size)
		    	return string.substring(0, this.truncate_size) + '...';
		    }
		},
		computed: {
		    truncate_message: function () {
		    	return this.about_message.substring(0, this.truncate_size)
		    }
		},
		methods: {
			moment(...args) {
		        return moment(...args);
		    }
		}
    }
</script>
<style>
	#carusel-my	{
		/*background-image: url(bg_1800x1024.jpg);*/
		/*background: none no-repeat 50% 0 scroll transparent;*/
		/*background-image: url(Lara_2.png);*/
		background-color: #0f0f12;
		background-size: contain;
		background-position: center;
    	background-repeat: no-repeat;
		font-family: 'Roboto Condensed', sans-serif;
		/*height: 690px;*/
	}
	.title {
		font-family: 'PT Sans', sans-serif;
	}
	#about {
		background-image: url(bg_1800x1024.jpg);
		background-size: cover;
		padding-bottom: 25px;
    	padding-top: 25px;
	}
	#image {
		/*background-image: url(Lara_2.png);*/
	}
	#descr {
		/*margin-right: 60px;*/
		margin-top: 100%;
	}
	#quest_details .img-group {
		float: right;
	}
	#quest_details .img-group .img-thumbnail {
		background-color: transparent;
	}
	#quest_details span {
		font-size: 18px;
		font-weight: bold;
		float: right;
	}
	#quest_details h6 {
		font-family: "Open Sans", Helvetica, Arial, sans-serif;
		font-size: 14px;
		float: left;
	}
	.content {
		margin-right: 10px;
		margin-left: 10px;
		margin-bottom: 25px;
	}
	.btn {
	    /*background-image: url(button-lg.jpg);*/
	}
	.content .list-group-item {
		background-color: transparent;
		border-bottom-color: antiquewhite;
	}
	 .date_quest .list-group-item {
		border: 0;
		padding: 0;
	}
	.inline-block {
	    display: inline-block;
	    margin-right: 5px;
	}
</style>