app.component('services-sandy-goreraza', {
		
	data(){
		return{
		title : 'Services'
           
		}
		
	},
	
	
    template:
          `

		<!-- section services -->
		<section id="services" class="shadow-blue white-bg padding">
			<h3 class="section-title">{{ title }}</h3>
			<div class="spacer" data-height="80"></div>

			<div class="row">

				<div class="col-md-4 col-sm-6">
					<!-- service item -->
					<div class="service-item text-center">
						<i class="icon-globe icon-simple"></i>
						<h4 class="my-3">Software Development</h4>
						<p class="mb-0">Frontend and Backend Development.</p>
					</div>
					<div class="spacer" data-height="20"></div>
				</div>

				<div class="col-md-4 col-sm-6">
					<!-- service item -->
					<div class="service-item text-center">
						<i class="icon-chemistry icon-simple"></i>
						<h4 class="my-3">Software Versioning</h4>
						<p class="mb-0">Github and Azure DevOps.</p>
					</div>
					<div class="spacer" data-height="20"></div>
				</div>

				<div class="col-md-4 col-sm-6">
					<!-- service item -->
					<div class="service-item text-center">
						<i class="icon-directions icon-simple"></i>
						<h4 class="my-3">Microservices</h4>
						<p class="mb-0">Microservice Application.</p>
					</div>
					<div class="spacer" data-height="20"></div>
				</div>

				<div class="col-md-4 col-sm-6">
					<!-- service item -->
					<div class="service-item text-center">
						<i class="icon-rocket icon-simple"></i>
						<h4 class="my-3">SEO</h4>
						<p class="mb-0">Search Engine Optimisation tools and technique</p>
					</div>
					<div class="spacer d-md-none d-lg-none" data-height="20"></div>
				</div>

				<div class="col-md-4 col-sm-6">
					<!-- service item -->
					<div class="service-item text-center">
						<i class="icon-note icon-simple"></i>
						<h4 class="my-3">Whatsapp Chatbot</h4>
						<p class="mb-0">Whatsapp Chatbot API configuration.</p>
					</div>
					<div class="spacer d-md-none d-lg-none" data-height="20"></div>
				</div>

				<div class="col-md-4 col-sm-6">
					<!-- service item -->
					<div class="service-item text-center">
						<i class="icon-bubbles icon-simple"></i>
						<h4 class="my-3">Support</h4>
						<p class="mb-0">General Systems support provision.</p>
					</div>
				</div>

			</div>
		</section>

 
`
})
