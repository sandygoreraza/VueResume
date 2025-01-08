app.component('intro-sandy-goreraza', {
	
	data(){
		return{
		  cv_owner : 'Sandy Goreraza',	
		  profile : "A professional Software Engineer with more than 10 years' experience in 
			software development and architecture. Ready to bring a blend of technical expertise
			and business acumen to the table. Meticulous attention to detail and efficiency in a fast-paced environment. 
				Committed to delivering high-quality solutions that align with business objectives."
           
		}
		
	},
	
    template:
          `
  
  
  	<!-- section hero intor -->
		<section class="hero background parallax shadow-dark d-flex align-items-center" id="home" data-image-src="https://via.placeholder.com/900x400">
			<div class="cta mx-auto mt-2">
				<h1 class="mt-0 mb-4">{{  cv_owner }}<span class="dot"></span></h1>
				<p class="mb-4" style="text-align: justify;
  text-justify: inter-word;">{{  profile }}</p>
				<!--<a href="#" class="btn btn-default btn-lg mr-3"><i class="icon-grid"></i>View Portfolio</a>-->
				<div class="spacer d-md-none d-lg-none d-sm-none" data-height="10"></div>
				<!--<a href="#contact" class="btn btn-border-light btn-lg scrollspy"><i class="icon-envelope"></i>Contact me</a>-->
			</div>
			<div class="overlay"></div>
		</section>
  
  
  
  
`
})




