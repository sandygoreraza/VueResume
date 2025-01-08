app.component('about-sandy-goreraza', {
		
	data(){
		return{
		value_proposition : 'An experienced, capable and agile IT Professional with a demonstrated ' +
                ' history of focus and accomplishment in formulating Systems development and ' +
                'administration solutions for large corporates. Through a balance of academia and ' +
                '“hands on” working experience, I have attained rare and transferable technical ' +
                'competencies that include a highly developed  goal orientation, effective team ' +
                'leadership and efficient task prioritisation. I believe that this mix of skills ' +
                'would add significant value to any employing organisation. ' + 'My value proposition for prospective employers is surmised as' +
                ' a transfer of technical and academic prowess, single minded focus and conceptual' +
                ' / practical agility in exchange for the acquisition of a higher level of ' +
                'professional learning, growth and development.',
            email : 'sandygoreraza@hotmail.com',
            Address : '12125 Timire Park, Ruwa, Harare, Zimbabwe.',
            phonenumber : '+263 778 218 850 / +263 773 300 994',
			cv_owner : 'Sandy Goreraza' 
           
		}
		
	},
	
	
    template:
          `
 
 
 <!-- section about -->
		<section id="about" class="shadow-blue white-bg padding">
			<h3 class="section-title">About Me</h3>
			<div class="spacer" data-height="80"></div>

			<div class="row">
				<div class="col-md-3">
					<img src="images/VECTORS-Adobe-Stock.png" alt="about" />
				</div>
				<div class="col-md-9">
					<h2 class="mt-4 mt-md-0 mb-4">Value Proposition</h2>
					<p class="mb-0" style="text-align: justify;
  text-justify: inter-word;">{{ value_proposition }}</p>
					<div class="row my-4">
						<div class="col-md-6">
							<p class="mb-2">Name: <span class="text-dark">{{  cv_owner }}</span></p>
							<p class="mb-0">Phone number: <span class="text-dark">{{ phonenumber }}</span></p>
						</div>
						<div class="col-md-6 mt-2 mt-md-0 mt-sm-2">
							<p class="mb-2">Address: <span class="text-dark">{{  Address }}</span></p>
							<p class="mb-0">Email: <span class="text-dark">{{  email }}</span></p>
						</div>
					</div>
					
					
	<!--<a href="./cv/Sandy_Goreraza_Resume.pdf" class="btn btn-default mr-3" download="./cv/Sandy_Goreraza_Resume.pdf">Download CV</a>-->	
					
					
					<!--<a href="#" class="btn btn-default mr-2"><i class="icon-cloud-download"></i>Download CV</a>-->
					<!--<a href="tel:+263778218850" class="btn btn-alt mt-2 mt-md-0 mt-xs-2"><i class="icon-phone"></i>Hire me</a>-->
				</div>
			</div>
		</section>
 
 
`
})
