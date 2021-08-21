app.component('contact-sandy-goreraza', {

data(){
return{

title : 'Get in touch',
email : 'gorerazasandy10@gmail.com.',
            Address : 'Mabvuku Police Camp,Old Mabvuku, Harare, Zimbabwe.',
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

				<div class="col-md-8">
					<!-- Contact Form -->
					<form id="contact-form" class="contact-form" method="post" action="form/contact.php">
						
						<div class="messages"></div>
						
						<div class="row">
							<div class="column col-md-6">
								<!-- Name input -->
								<div class="form-group">
									<input type="text" class="form-control" name="InputName" id="InputName" placeholder="Your name" required="required" data-error="Name is required.">
									<div class="help-block with-errors"></div>
								</div>
							</div>
							
							<div class="column col-md-6">
								<!-- Email input -->
								<div class="form-group">
									<input type="email" class="form-control" id="InputEmail" name="InputEmail" placeholder="Email address" required="required" data-error="Email is required.">
									<div class="help-block with-errors"></div>
								</div>
							</div>

							<div class="column col-md-12">
								<!-- Email input -->
								<div class="form-group">
									<input type="text" class="form-control" id="InputSubject" name="InputSubject" placeholder="Subject" required="required" data-error="Subject is required.">
									<div class="help-block with-errors"></div>
								</div>
							</div>
					
							<div class="column col-md-12">
								<!-- Message textarea -->
								<div class="form-group">
									<textarea name="InputMessage" id="InputMessage" class="form-control" rows="5" placeholder="Message" required="required" data-error="Message is required."></textarea>
									<div class="help-block with-errors"></div>
								</div>
							</div>
						</div>

						<button type="submit" name="submit" id="submit" value="Submit" class="btn btn-default"><i class="icon-paper-plane"></i>Send Message</button><!-- Send Button -->

					</form>
					<!-- Contact Form end -->
					

					
				</div>

			</div>
			
			
			

		</section>	
 
`
})







app.component('coming-soon-contact-sandy-goreraza', {

data(){
return{

title : 'Get in touch - Contact Form Coming Soon'



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
			<a href="mailto:gorerazasandy10@gmail" class="btn btn-default mr-3"><i class="icon-envelope-letter"></i>Email</a>
			</div>	
			
				<div class="col-md-6" style="text-align: center;">
					
					<a href="tel:+263778218850" class="btn btn-alt mt-2 mt-md-0 mt-xs-2"><i class="icon-phone"></i>Hire me</a>
				</div>	
				</div>
			</div>
		</section>
 
`
})
