<template>
	<div class="container-fluid">
		<div id="about" class="row text-center">
			<div class="col-sm-10 offset-sm-1">
				<div class="row d-block d-sm-none">
					<div class="col-md-6">
						<h3>{{about_title}}</h3>
						<img class="img-fluid" src="/img/Logo_old_coin.png">
					</div>
					<div class="col-md-6">
						<p v-html="truncate_message"></p>
						<button type="button" class="btn btn-outline-secondary" v-on:click="truncate_size == 197 ? (truncate_size = 5000, botton_mess = 'Скрыть текст') : (truncate_size = 197, botton_mess = 'Узнать больше')">{{botton_mess}}</button>
					</div>
				</div>
				<div class="d-none d-sm-block">
					<div class="row">
						<div class="col-md-6">
							<img class="img-fluid" src="/img/Logo_old_coin.png">
						</div>
						<div class="col-md-6 text-left" style="color: #ffe2c5;">
							<h3 style="text-transform: uppercase;">{{about_title}}</h3>
							<p v-html="about_message"></p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="quests">
			<div class="container">
				<div class="row text-center" style="margin-bottom: 35px;">
					<div class="col-sm-10 offset-sm-1">
						<br>
			  			<h1 style="margin-bottom: 0px; margin-top: 15px;">ПРЕДЛАГАЕМЫЕ КВЕСТЫ</h1>
			  		</div>
				</div>
				<div class="row">
					<div class="col-12 text-center">
						<ul class="nav nav-tabs">
						  <li class="nav-item">
						    <button type="button" class="btn btn-link nav-link" v-bind:class="[level.level == 'first' ? 'active' : '']" v-on:click="level = first_level">I уровня:</button>
						  </li>
						  <li class="nav-item">
						    <button type="button" class="btn btn-link nav-link" v-bind:class="[level.level == 'second' ? 'active' : '']" v-on:click="level = second_level">II уровня:</button>
						  </li>
						  <li class="nav-item">
						    <button type="button" class="btn btn-link nav-link" v-bind:class="[level.level == 'third' ? 'active' : '']" v-on:click="level = third_level">III уровня:</button>
						  </li>
						</ul>
					</div>
				</div>
				<div class="card-deck">
					<div class="row">
						<div id="level" class="col-12">
							<div style="padding: 1.25rem;">
								<p>{{level.description}}</p>
							</div>
						</div>
						<div :style="{ backgroundImage: 'url(' + level.image + ')' }" style="background-position: top; background-size: cover; height: 700px; display: table; margin: 0px 20px 10px 20px;" v-if="quests_filtred(level.level).length == 0">
							<h1 class="display-1 text-center" style="margin-bottom: 100px;  display: table-cell; vertical-align: bottom; background: linear-gradient(rgba(0, 0, 0, 0.46), #343a40f0); padding-bottom: 20px; color: white;">В этом разделе пока нет доступных квестов.</h1>
						</div>
						<div class="col-md-6 col-lg-6 col-xl-3"  :class="[quest.active ? 'col-sm-12 col-12' : 'col-sm-6 col-6']" v-for="quest in quests_filtred(level.level)">
						  <div class="card" :class="[quest.active ? '' : 'quest_not_active']">
						    <a :href='"/quest/"+quest.id'><img class="card-img-top" :src="quest.image" alt="Card image cap"></a>
						    <div class="card-body">
					      		<h5 class="card-title">{{quest.title}}</h5>
						      <p class="card-text">
						      	<ul class="list-group list-group-flush">
						      		<li class="list-group-item">
							      		<h6 class="inline-block" :class="[quest.date.start == ''? 'hide' : '']">Старт: </h6><span class="text-right">{{quest.date.start}}</span><br>
								  		<h6 class="inline-block" :class="[quest.date.finish == ''? 'hide' : '']">Финиш: </h6><span class="text-right">{{quest.date.finish}}</span><br>
										<h6 class="inline-block" :class="[quest.duration == ''? 'hide' : '']">Продолжительность: </h6><span class="text-right">{{quest.duration}}</span>
									</li>
									<li class="list-group-item"><h6 class="inline-block"  :class="[quest.location == ''? 'hide' : '']">Локация: </h6><span class="text-right">{{quest.location}}</span></li>
								</ul>
						      </p>
						    </div>
						    <div class="card-footer" v-if="quest.active">
						      <a :href='"/quest/"+quest.id' type="button" class="btn btn-block align-middle">Подробнее</a>
						    </div>
						    <div class="card-footer" v-if="!quest.active">
						      <a :href='"/quest/"+quest.id' type="button" class="btn btn-block align-middle disabled">Ожидается</a>
						    </div>
						  </div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="benefits">
			<div class="container">
				<div class="row">
					<div class="col-md-12 text-center"><h1 style="margin-bottom: 42px; margin-top: 12px;">ПРЕИМУЩЕСТВА КВЕСТА НА ЯХТЕ:</h1></div>
				</div>
		  		<!-- <div class="row" :class="[ index % 2? 'flex-row-reverse' : 'flex-row']" v-for="(benefit, index) in benefits"> -->
		  		<div class="row">
		  			<div class="col-md-6" v-for="(benefit, index) in benefits">
		  				<div class="card">
		  					<div class="card-block">
				  				<h2 class="card-title">{{benefit.title}}</h2>
				  				<div class="card-text align-bottom" :style="{ 'background-image': 'url(' + benefit.image + ')' }">
				  					<p>{{benefit.descr}}</p>
				  				</div>
			  				</div>
			  			</div>
		  			</div>
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
            	quests: [
            		{
            			id: 0,
            			title: "Сокровище Османской Империи",
            			image: 'img/Lara_2.png',
            			description: "Взятие турками Константинополя -<br> одно из самых загадочных и судьбоносных событий в истории европейской цивилизации. Участникам экспедиции предстоит проникнуть в тайну падения Константинополя и отправиться на поиски одного из самых таинственных артефактов в истории человечества. На пути к цели им предстоит управлять яхтой, разгадывать логические и творческие загадки, погрузиться в историю двух империй, преодолевать пески, подниматься в горы, опускаться под воду, столкнуться с опасностями.",
            			location: "Южное побережье Турции",
            			price: 1200,
            			member: 6,
            			date: {
            				start: "09.06.2018",
            				finish: "16.06.2018",
            			},
            			duration: '7 дней',
            			level: 'first',
            			age_limit: "18+",
            			active: true,
            		},
            		{
            			id: 1,
            			title: "Аргонавты. Утраченное наследие.",
            			image: 'img/Argonautos.png',
            			description: "",
            			location: "Кикладские острова. Греция.",
            			price: 0,
            			member: 0,
            			date: {
            				start: "",
            				finish: "",
            			},
            			duration: '',
            			level: 'first',
            			age_limit: "18+",
            			active: false,
            		},
            		{
            			id: 2,
            			title: "Секрет викингов.",
            			image: 'img/Tor.png',
            			description: "",
            			location: "Фьерды Норвегия",
            			price: 0,
            			member: 0,
            			date: {
            				start: "",
            				finish: "",
            			},
            			duration: '',
            			level: 'first',
            			age_limit: "18+",
            			active: false,
            		},
            		{
            			id: 3,
            			title: "В поисках ваджры.",
            			image: 'img/Tailand.png',
            			description: "",
            			location: "Тайланд",
            			price: 0,
            			member: 0,
            			date: {
            				start: "",
            				finish: "",
            			},
            			duration: '',
            			level: 'first',
            			age_limit: "18+",
            			active: false,
            		},
            	],
                about_title: 'Отдых в формате приключения',
                about_message: '- Для тех, кто выбирает активный отдых и стремится расширить свои знания путешествуя и исследуя мир.<br> - Предлагаем путешествие на яхте, построенное по специально написанному оригинальному сценарию. Сюжет основан на исторических событиях, привязанных к местности где проходит путешествие и содержит требующие решения задачи. Разгадка которых позволяет перемещаться от локации к локации, исследуя культурно-исторический контекст местности.<br> - Формат отдыха предполагает: активное участие, командную работу, физические нагрузки, управление яхтой, высадку на берег, изучение достопримечательностей, ориентирование на местности, решение головоломок и задач.',
                botton_mess: 'Узнать больше',
                truncate_size: 197,
                level: {},
                first_level: {
                	level: 'first',
                	title: 'Квест первого уровня',
                	description: 'Это квест для одной команды построеный по линейному сценарию. В котором нужно за определенное время пройти по всем локациям и, разгадав загадки, найти главный тайник квеста. Как правило расчитан на 7-10 дней. Уровень подготовки не имеет значения, квест расчитан как на бывалых яхтсменов так и на новичков не имеющих опыта в парусном яхтинге.',
                	image: ''
                },
                second_level: {
                	level: 'second',
                	title: 'Квест второго уровня',
                	description: 'Это квест для нескольких команд построеный по линейному сценарию. В котором главной целью является опередеить соперников в прохождении локаций и разгадывании загадок и первыми найти главный тайник квеста. Как правило расчитан на 7-10 дней. Уровень подготовки важен и допускаются только участники прошедшие как минимум пять квестов первого уровня.',
                	image: '/img/second_level.jpg'
                },
                third_level: {
                	level: 'third',
                	title: 'Квест третьего уровня',
                	description: 'Это квест-соревнование для нескольких команд полностью построеный по нелинейному сценарию. Основная особенность этого уровня - расширенная география (может распространяться на несколько стран или континентов) и необходимость добираться до цели как на яхте так и на других средства передвижения, ткаих как джип или самолет малой авиации. Уровень подготовки критичен и допускаются только команды победившие в квестах второго уровня.',
                	image: '/img/third_level.jpg'
                },
                benefits: [
                	{
                		title: 'практика управления яхтой',
                		descr: 'Если вы новичок, опытный шкипер научит вас основам управления яхтой. Вы научитесь самостоятельно ставить паруса, вязать узлы, стоять у штурвала, швартоваться в порту. Это - незабываемые ощущения, когда парусник подчиняется вашим командам и каждому повороту штурвала. Если же вы опытный мореплаватель, наш квест позволит получить дополнительный опыт управления парусником, прокладывая курс к вашей цели..',
                		image: '/img/tenor.gif'
                	},
                	{
                		title: 'командная работа',
                		descr: 'Ничто так не объединяет людей, как совместная работа над покорением водной стихии и усмирением ветра! На яхте можно почувствовать, как совершенно разные люди работают вместе бок о бок и движутся к единой цели. Если вам нужно сплотить ваш коллектив и просто хорошо провести время с коллегами, то квест на яхте точно вам подойдет.',
                		image: '/img/team_work_2.jpg'
                	},
                	{
                		title: 'интересные загадки',
                		descr: 'Важнейшими элементами путешествия в жанре квеста являются собственно повествование и исследование мира, а ключевую роль в этом процессе играют решение головоломок и задач. Мы постарались ранообразить Ваше путешевсвие загадкам которые потребуют от вас интеллектуальных и творческих усилий.',
                		image: '/img/zagadki_1.png'
                	},
                	{
                		title: 'исторические сведения',
                		descr: 'Часто мы смотрим на древние развалины, памятники архитектуры, только догадываясь, какая история скрыта за ними. Мы собрали для вас краткую информацию по каждой локации, куда вы попадаете. Ваше путешествие наполнится реальными историческими событиями.',
                		image: '/img/giphy.gif'
                	},
                	{
                		title: 'физическая активность',
                		descr: 'Помимо разгадывания загадок, игра предполагает активные поиски тайников в древних крепостях и гробницах. Для достижения своей цели Вам нужно будет подниматься горными тропами, опускаться под воду, исследовать занесенные песком древние города и многое другое.',
                		image: '/img/tumblr_mirm9tmkED1qcy5lco2_500.gif'
                	},
                	{
                		title: 'исторические места',
                		descr: 'Далеко не всегда, попадая в новое место, люди знают что можно здесь увидеть. Мы постарались чтобы вы не пропустили самого интересного и в каждой локации квеста увидили скрытое от глаз обычных туристов.',
                		image: '/img/istorical_place.jpg'
                	},
                	{
                		title: 'красивая природа',
                		descr: 'Вы увидите не только завораживающие морские восходы и закаты, почувствуете стихию воды и ветра но и сможете заглянуть в подводный мир. Поднимаясь в горы вы увидите необычные растения и насладитесь прекрасными пейзажами.',
                		image: '/img/beutiful_nature.jpg'
                	},
                	{
                		title: 'перезагрузка',
                		descr: 'Лучший отдых это смена вида деятельности. Квест на яхте это отличная возможность отвлечься от рабочей рутины и перезагрузиться для новых побед, набраться сил и идей.',
                		image: '/img/IndyTrustMe.gif'
                	}
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
		    },
		    quests_filtred: function(level) {
		    	return this.quests.filter(function (quest) {
			    	return quest.level == level
			    })
		    }
		},
		created: function () {
			this.level = this.first_level;		    
		}
    }
</script>
<style>
	body {
		background-image: url(/images/bg_1800x1024.jpg);
    	background-attachment: fixed;
	}
	.carusel-my	{
		background-color: #0f0f12;
		background-size: contain;
		background-position: center;
    	background-repeat: no-repeat;
		font-family: 'Roboto Condensed', sans-serif;
	}
	.title {
		font-family: 'PT Sans', sans-serif;
	}
	#about {
		/*background-image: url(bg_1800x1024.jpg);
		background-size: cover;*/
		padding-bottom: 25px;
    	padding-top: 25px;
	}
	#image {
		
	}
	#descr {
		margin-top: 100%;
	}
	#details span {
		font-size: 18px;
		font-weight: bold;
		float: right;
	}
	#details .icon {
		margin-top: auto;
    	margin-bottom: auto;
	}
	#details h6 {
		font-family: "Open Sans", Helvetica, Arial, sans-serif;
		font-size: 14px;
	}
	.content {
		margin-right: 10px;
		margin-left: 10px;
		margin-bottom: 25px;
	}
	#level p {
		margin: 15px;
	}
	#quests {
		background-image: url(/img/background-2.png);
		/*background-color: #413a2d;*/
		margin-right: -15px;
    	margin-left: -15px;
		padding-bottom: 50px;
		background-position: top;
	    background-size: auto;
	    filter: drop-shadow(16px 16px 10px rgba(0,0,0,0.9));
	}
	#quests h1 {
		/*font-family: 'Cormorant Unicase', serif;*/
		/*margin-bottom: 0px;
	    margin-top: 10px;*/
	    /*font-size: 58px;*/
	    /*color: #6f5327;*/
	    /*color: #1b1b1b;*/
	    color: #3c3126;
	}
	#quests .nav-tabs {
		border-bottom: 0px;
	}
	#quests .nav-tabs .nav-link {
		border: 0px solid transparent;
    	background-color: #383228;
    	margin: 0px 1px 0px 1px;
	}
	#quests .nav-tabs .nav-link.active {
		color: #f9f5ee;
    	background-color: #1b1b1b;
	}
	#quests .nav-tabs .nav-item {
		width: 32.5%;
		margin: 0px 1px 0px 1px;
	}
	#quests .nav-tabs .nav-item button {
		color: #757575;
		width: 100%;
		background-image: none;
		border-bottom-left-radius: 0;
    	border-bottom-right-radius: 0;
	}
	#quests .quest_not_active a {
		pointer-events: none;
	}
	#quests .quest_not_active {
		filter: brightness(0.5);
	}
	#quests .btn {
		color: white;
	    background-image: url(/img/button-lg.jpg);
	    -webkit-appearance: button-bevel;
	}
	#quests .card-deck {
		padding-left: 5px;
    	padding-right: 5px;
    	padding-top: 10px;
    	background: rgb(27, 27, 27);
	}
	#quests .card-deck .card {
		margin-right: 10px;
    	margin-left: 10px;
	}
	#quests .card-footer {
	    padding: 0;
	}
	#quests .card-footer .btn {
		border-radius: 0;
	}
	#quests .card-body {
	    font-family: 'Open Sans Condensed', sans-serif;
	    height: 240px;
	    display: table;
    	width: 100%;
	}
	#quests .card-body .card-text {
		display: table-row;
    	vertical-align: bottom;
	}
	#quests .card-title {
	    font-family: 'Cuprum', sans-serif;
	    height: 45px;
	}
	#quests .card .inline-block {
	    
	}
	#quests .card .text-right {
	    float: right;
	    font-size: 18px;
	}
	.content .list-group-item {
		background-color: transparent;
		border-bottom-color: antiquewhite;
	}
	.inline-block {
	    display: inline-block;
	    margin-right: 5px;
	}
	#quests .card {
		background-color: rgba(0, 0, 0, 0.3);
		margin-bottom: 40px;
	}
	#quests .card .list-group-item {
		background-color: transparent;
		border-bottom-color: antiquewhite;
		padding: 1px;
	}
	#benefits .card {
		background-color: transparent;
	}
	#benefits .card .card-block{
		margin-bottom: 27px;
	}
	#benefits .card .card-text{
		height: 260px;
    	background-size: cover;
    	background-position: center;
    	display: table;
	}
	#benefits .card .card-title{
		margin-left: 15px;
	}
	#benefits .card .card-text p{
		display: table-cell;
    	vertical-align: bottom;
    	line-height: 17px;
    	padding: 21px;
    	background: linear-gradient(rgba(0,0,0,.075), #343a40cf);
	}
	#benefits {
		/*background-image: url(/images/bg_1800x1024.jpg?e42ae58…);
    	background-attachment: fixed;*/
    	color: rgb(255, 226, 197);
	}
	.bd-callout {
	    padding: 1.25rem;
	    margin-top: 1.25rem;
	    margin-bottom: 1.25rem;
	    /*border: 1px solid #eee;*/
	    /*border-left-width: .25rem;*/
	    /*border-radius: .25rem;*/
	}
	.hide {
		display: none;
	}

</style>