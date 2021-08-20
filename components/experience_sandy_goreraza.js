app.component('pro-experience-sandy-goreraza', {
		
	data(){
		return{
		title : 'PROFESSIONAL EXPERIENCE'
		}
		
	},
	
	
    template:
          `
 <!-- section experience -->
		<section id="resume" class="shadow-blue white-bg padding">
			<h3 class="section-title">{{ title }}</h3>
			<div class="spacer" data-height="80"></div>

			<!-- timeline -->
			<div class="timeline">
				<div class="entry">
					<div class="title">
						<span>March 2014 - Date </span>
					</div>
					<div class="body">
						<h4 class="mt-0">Senior Full Stack Web Developer</h4>
						<h5 class="mt-1" style="color:#000080;font-size: 0.25rem !important;">Zimbabwe Tourism Authority </h5>
						<p style="text-align: justify;">Incumbent develops, recommends and maintains systems
						appropriate and optimal for the corporate. Implements aspects 
						of web development including web forms, interactive databases, 
						encrypted data access, and maintaining data security.</p>
					</div>
				</div>
				<div class="entry">
					<div class="title">
						<span>Feb 2019 – May 2019</span>
					</div>
					<div class="body">
						<h4 class="mt-0">FREELANCER WEB DESIGNER</h4>
						<h5 class="mt-1" style="color:#000080;font-size: 0.25rem !important;">Place of Stone</h5>
						<p>Undertook a project that led to the design, development and launch of an online travel booking portal for the Company.</p>
					</div>
				</div>
				<div class="entry">
					<div class="title">
						<span>Feb 2017 – April 2018</span>
					</div>
					<div class="body">
						<h4 class="mt-0">LEAD BACKEND DEVELOPER</h4>
						<h5 class="mt-1" style="color:#000080;font-size: 0.25rem !important;">CST Advisory Services </h5>
						<p>Led a team of IT Professionals in the role of Senior Web Developer on a croud funding portal.</p>
					</div>
				</div>
				<span class="timeline-line"></span>
			</div>
		</section>
 
 
`
})
