app.component('contact-sandy-goreraza', {

data(){
return{

title : 'Get in touch',
email : 'sandygoreraza@hotmail.com.',
            Address : '12125 Timire Park, Ruwa, Harare, Zimbabwe.',
            phonenumber : '+263 778 218 850 / +263 773 300 994',


}	
	
	
	
},
	
    template:
          `
<!-- section contact -->
		<section id="contact" class="shadow-blue white-bg padding">
<h3 class="section-title">{{ title }}</h3>
			<div class="spacer" data-height="80"></div>

			<div class="row">
				
				<div class="col-md-4 mb-4 mb-md-0">
					<!-- contact info -->
					<div class="contact-info mb-5">
						<i class="icon-phone"></i>
						<div class="details">
							<h5>Phone</h5>
							<span>{{ phonenumber }}</span>
						</div>
					</div>
					<div class="contact-info mb-5">
						<i class="icon-envelope"></i>
						<div class="details">
							<h5>Email address</h5>
							<span>{{ email }}</span>
						</div>
					</div>
					<div class="contact-info">
						<i class="icon-location-pin"></i>
						<div class="details">
							<h5>Location</h5>
							<span>{{ Address }}</span>
						</div>
					</div>
				</div>

			

			</div>
			
			
			

		</section>	
 
`
})







app.component('contact-sandy-goreraza-v2', {

data(){
return{

title : 'Get in touch'



}	
	
	
	
},
	
    template:
          `

 
 <!-- section about -->
		<section id="contact" class="shadow-blue white-bg padding">
			<h3 class="section-title">{{ title }}</h3>
			<div class="spacer" data-height="80"></div>

			<div class="row">
			
			<div class="col-md-6" style="text-align: center;">
			<a href="mailto:sandygoreraza@hotmail.com" class="btn btn-default mr-3"><i class="icon-envelope-letter"></i>Email</a>
			</div>	
			
				<div class="col-md-6" style="text-align: center;">
					
					<a href="tel:+263778218850" class="btn btn-alt mt-2 mt-md-0 mt-xs-2"><i class="icon-phone"></i>Hire me</a>
				</div>	
				</div>
			</div>
		</section>
 
`
})
