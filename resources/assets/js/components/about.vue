<template>
	<div class="container-fluid">
	  <div id="carusel-my" class="row">
	  		<div class="col-sm-5 text-center">
	  			<img src="img/RogerLogo_ready_brown-1.png">
	  		</div>
		    <div class="col-sm-7 text-center">
		    	<div id="descr">
		    		<h1>{{title}}</h1>
		    		<h1><small>{{subtitle}}</small></h1>
			    	<h3 v-html="message"></h3>
			    	<!-- <h1 class="title">{{title}}</h1> -->
			    	<!-- <img src="img/Title-1-24-1-sm.png"> -->
			    	<!-- <a href="#">ГОТОВ</a> -->
			    </div>
		    </div>
	  </div>
	</div>
</template>
<script>
	export default {
        mounted() {
            console.log('Component mounted.')
        },
        data: function () {
            return {
                message: 'Для людей, которые выбирают активный отдых и стремятся расширить свои знания путешествуя и исследуя.<br> Мы предлагаем путешествие на яхте, построенное на специально написанном оригинальном сценарии. Сюжет основан на исторических событиях, привязанных к местности где проходит путешествие и содержащий в себе требующие решения задачи. Разгадка которых позволяет продвигаться по сюжетной линии перемещаясь от локации к локации и исследовать культурно-исторический контекст местности. Сценарий расчитан на 7-10 дней.<br> Формат отдыха предполагает: активное участие, командную работу, физические нагрузки, управление яхтой, высадку на берег, исследование достопримечательностей, ориентирование на местности, решение головоломок и задач.',
                title: 'YACHT QUEST',
                subtitle: 'Отдых в формате приключения.'
            }
        }
    }
</script>
<style>
	#carusel-my	{
		background-image: url(bg_1800x1024.jpg);
		/*background: none no-repeat 50% 0 scroll transparent;*/
		background-size: cover;
		font-family: 'Roboto Condensed', sans-serif;

	}
	.title {
		font-family: 'PT Sans', sans-serif;
	}
	#descr {
		margin-right: 60px;
		margin-top: 60px;
		margin-bottom: 60px;
	}
	.content {
		margin-right: 50px;
		margin-left: 50px;
	}
	.btn {
	    /*background-image: url(button-lg.jpg);*/
	}
</style>