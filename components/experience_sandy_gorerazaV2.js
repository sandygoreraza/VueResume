app.component('pro-experience-sandy-goreraza', {
		
	data(){
		return{
		title : 'PROFESSIONAL EXPERIENCE',
		WORPLACEONE : 'Zimbabwe Tourism Authority ',
		WORKPLACETWO : 'Place of Stone',
		WORKPLACETHREE : 'CST Advisory Services ',
		WORKPLACEFOUR : 'cybernaptics Ltd'
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
                                                <span><img src="./images/cybernapticslogo.png" class="rounded-circle mx-1-custome" alt="Cybernaptics" width="200" height="80"> </span>
						<span><div class="mb-2">Feb 2022 - Dec 2023</div></span>
					</div>
					<div class="body">
						<h4 class="mt-0">SOFTWARE DEVELOPER</h4>
						<h5 class="mt-1" style="color:#000080;font-size: 1.25rem !important;">{{ WORKPLACEFOUR }}</h5>
						<p style="text-align: justify;">Focused on frontend and backend web development, handling complex issues across the entire technology stack 
                                                                                and ensuring GDPR compliance. Revamped legacy code, customized CRM systems, and integrated Shopify and ERP APIs to streamline business
										operations. Contributed to all stages of the software lifecycle, implemented CI/CD pipelines with Azure DevOps, and performed
	                                                                        thorough testing. Additionally, translated customer requirements into actionable development stories.</p>
					</div>
					</div>
   
				<div class="entry">
					<div class="title">
                                                <span><img src="./images/ZTA-Logo-PNG.png" class="rounded-circle mx-2" alt="Zimbabwe Tourism Authority" width="100" height="100"> </span>
						<span><div class="mb-2">March 2014 - Jan 2022</div></span>
					</div>
					<div class="body">
						<h4 class="mt-0">SENIOR FULL STACK DEVELOPER</h4>
						<h5 class="mt-1" style="color:#000080;font-size: 1.25rem !important;">{{ WORPLACEONE }}</h5>
						<p style="text-align: justify;">Designed and implemented both frontend and backend solutions, ensuring system reliability through continuous support and 
                              software testing. Worked on enhancing product offerings, aligning them with business goals and design principles, and explored open-source tools to optimize development processes.
			      Upgraded existing software, ensured cross-platform compatibility, and integrated WebRTC technology for seamless communication. Additionally, 
	 resolved support issues, planned technical specifications and test plans, and developed custom software solutions for users. Also facilitated smooth software deployment and 
  successfully migrated legacy systems to modern platforms.</p>
					</div>
				</div>

    
				<div class="entry">
					<div class="title">
						<span>Feb 2019 – April 2020</span>
					</div>
					<div class="body">
						<h4 class="mt-0">FREELANCER WEB DESIGNER</h4>
						<h5 class="mt-1" style="color:#000080;font-size: 1.25rem !important;">{{ WORKPLACETWO }}</h5>
						<p>Led strategic website development initiatives, transforming mock-ups into dynamic web interfaces. Also managed backend development, ensuring website integrity, strengthening security protocols, and optimizing operational efficiency.</p>
					</div>
				</div>
				<div class="entry">
					<div class="title">
						<span>Feb 2017 – April 2017</span>
					</div>
					<div class="body">
						<h4 class="mt-0">LEAD BACKEND DEVELOPER</h4>
						<h5 class="mt-1" style="color:#000080;font-size: 1.25rem !important;">{{ WORKPLACETHREE }}</h5>
						<p>Orchestrated the development of a crowd funding portal, leading a team of 10 IT professionals; achieved a 40% increase in successful campaigns and raised $1.5 million in funding.</p>
					</div>
				</div>
				<span class="timeline-line"></span>
			</div>
		</section>
 
 
`
})
