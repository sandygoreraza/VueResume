app.component('portfo-sandy-goreraza', {
		
	data(){
		return{
		title : 'Portfolio'
           
		}
		
	},
	
	
    template:
          `
 	<!-- section works -->
		<section id="works" class="shadow-blue white-bg padding">
			<h3 class="section-title">{{ title }}</h3>
			<div class="spacer" data-height="80"></div>

			<!-- portfolio filter (desktop) -->
			<ul class="portfolio-filter list-inline">
				<li class="current list-inline-item" data-filter="*">Projects</li>
				<li class="list-inline-item" data-filter=".custom">Custom</li>
				<li class="list-inline-item" data-filter=".wordpress">WordPress</li>
				<li class="list-inline-item" data-filter=".flask">Flask</li>
  				<li class="list-inline-item" data-filter=".dotnet">ASP .Net</li>
				<li class="list-inline-item" data-filter=".laravel">Laravel</li>
   				<li class="list-inline-item" data-filter=".vuejs">Vue.js</li>
      				<li class="list-inline-item" data-filter=".reactjs">React js</li>
				<li class="list-inline-item" data-filter=".crm">VtigerCRM</li>
				<li class="list-inline-item" data-filter=".javaee">Java EE</li>
				<li class="list-inline-item" data-filter=".video">Video</li>
			</ul>

			<!-- portfolio filter (mobile) -->
			<div class="pf-filter-wrapper mb-4">
				<select class="portfolio-filter-mobile">
					<option value="*">Projects</option>
					<option value=".custom">Custom</option>
					<option value=".flask">Flask</option>
     					<option value=".dotnet">ASP .Net</option>
					<option value=".laravel">Laravel</option>
					<option value=".vuejs">Vue.js</option>
					<option value=".reactjs">React js</option>
                                        <option value=".crm">VtigerCRM</option>
					<option value=".javaee">Java EE</option>
 					<option value=".video">Video</option>
				</select>
			</div>

			<!-- portolio wrapper -->
			<div class="row portfolio-wrapper">
				
				<!-- portfolio item -->
				<div class="col-md-4 col-sm-6 grid-item video">
					<a target="_blank" href="https://www.youtube.com/embed/zu_pRjaEVQo">
						<div class="portfolio-item">
							<div class="details">
								<h4 class="title">Virtual-Exhibition</h4>
								<span class="term">video Tutorials</span>
							</div>
							<span class="plus-icon">+</span>
							<div class="thumb">
							<iframe width="245" height="184" src="https://www.youtube.com/embed/zu_pRjaEVQo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
								<div class="mask"></div>
							</div>
						</div>
					</a>
				</div>
				



                               <!-- portfolio item -->
				<div class="col-md-4 col-sm-6 grid-item javaee">
					<a target="_blank" href="#javaee">
						<div class="portfolio-item">
							<div class="details">
								<h4 class="title">Warehouse Management System (ED Logistics)</h4>
								<span class="term">JSP</span>
							</div>
							<span class="plus-icon">+</span>
							<div class="thumb" style="height : 184px;width: 245px;">
						<img src="./images/WarehouseEDL.png" alt="Warehouse EDL" />
								<div class="mask"></div>
							</div>
						</div>
					</a>
				</div>
    
				
				<!-- portfolio item -->
				<div class="col-md-4 col-sm-6 grid-item flask">
					<a target="_blank" href="https://github.com/sandygoreraza/FlaskTaskManagementSampleApp">
						<div class="portfolio-item">
							<div class="details">
								<h4 class="title">Task Management Platform</h4>
								<span class="term">flask Framework</span>
							</div>
							<span class="plus-icon">+</span>
							<div class="thumb" style="height : 184px;width: 245px;">
						<img src="./images/Tasks_Mgt_flask.png" alt="flask" />
								<div class="mask"></div>
							</div>
						</div>
					</a>
				</div>

    
				
				
				<!-- portfolio item -->
				<div class="col-md-4 col-sm-6 grid-item laravel">
					<a target="_blank" href="https://crm.miod.mu/mymiod/login">
						<div class="portfolio-item">
							<div class="details">
								<h4 class="title">Client Portal for Mauritius Institute of Directors</h4>
								<span class="term">Laravel and Vue.js Framework(s)</span>
							</div>
							<span class="plus-icon">+</span>
							<div class="thumb" style="height : 184px;width: 245px;">
							<img src="./images/MyMIoD.png" alt="MyMIoD" />
								<div class="mask"></div>
							</div>
						</div>
					</a>
				</div>



    			<!-- portfolio item -->
				<div class="col-md-4 col-sm-6 grid-item dotnet">
					<a target="_blank" href="https://algorythmics.mu/">
						<div class="portfolio-item">
							<div class="details">
								<h4 class="title">KYC Portal</h4>
								<span class="term">ASP .Net</span>
							</div>
							<span class="plus-icon">+</span>
							<div class="thumb" style="height : 184px;width: 245px;">
							<img src="./images/KYC_Portal.png" alt="KYC Portal" />
								<div class="mask"></div>
							</div>
						</div>
					</a>
				</div>




                            <!-- portfolio item -->
				<div class="col-md-4 col-sm-6 grid-item crm">
					<a target="_blank" href="https://crm.miod.mu/">
						<div class="portfolio-item">
							<div class="details">
								<h4 class="title">Customer Relation Management Portal for Mauritius Institute of Directors</h4>
	
								<span class="term mt-2">VtigerCRM Framework</span>
							</div>
							<span class="plus-icon">+</span>
							<div class="thumb" style="height : 184px;width: 245px;">
							<img src="./images/VtigerCRM.png" alt="CRM MIoD" />
								<div class="mask"></div>
							</div>
						</div>
					</a>
				</div>


 


     <!-- portfolio item -->
				<div class="col-md-4 col-sm-6 grid-item reactjs">
					<a href="#reactjs">
						<div class="portfolio-item">
							<div class="details">
								<h4 class="title">EPP Client Portal for Domain Management(Front-end)</h4>
								<span class="term">React js Library</span>
							</div>
							<span class="plus-icon">+</span>
							<div class="thumb" style="height : 184px;width: 245px;">
							<img src="./images/epp_portal.png" alt="MyMIoD" />
								<div class="mask"></div>
							</div>
						</div>
					</a>
				</div>



     <!-- portfolio item -->
				<div class="col-md-4 col-sm-6 grid-item flask">
					<a href="#flask">
						<div class="portfolio-item">
							<div class="details">
								<h4 class="title">EPP Client Portal for Domain Management (Back-end)</h4>
								<span class="term">Flask Framework</span>
							</div>
							<span class="plus-icon">+</span>
							<div class="thumb" style="height : 184px;width: 245px;">
							<img src="./images/epp_portal.png" alt="MyMIoD" />
								<div class="mask"></div>
							</div>
						</div>
					</a>
				</div>



                                	<div class="col-md-4 col-sm-6 grid-item laravel">
					<a target="_blank" href="http://meetings.sanganaitourismexpo.com/participant/login">
						<div class="portfolio-item">
							<div class="details">
								<h4 class="title">Travel Expo Meetings and Conference Portal</h4>
								<span class="term">Laravel Framework</span>
							</div>
							<span class="plus-icon">+</span>
							<div class="thumb" style="height : 184px;width: 245px;">
							<img src="./images/Sanganai-Hlanganani-.png" alt="MyMIoD" />
								<div class="mask"></div>
							</div>
						</div>
					</a>
				</div>
				
				
				
			 

				<!-- portfolio item -->
				<div class="col-md-4 col-sm-6 grid-item wordpress design">
					<a target="_blank" href="https://travelwithme.co.zw/">
						<div class="portfolio-item">
							<div class="details">
								<h4 class="title">Travelwithme</h4>
								<span class="term">Personal Blog CMS</span>
							</div>
							<span class="plus-icon">+</span>
							<div class="thumb"  style="height : 184px;width: 245px;">
								<img src="./images/Travel-with-me-–-Just-another-WordPress-site.png" alt="Travelwithme" />
								<div class="mask"></div>
							</div>
						</div>
					</a>
				</div>

				<!-- portfolio item -->
				<div class="col-md-4 col-sm-6 grid-item custom">
					<a target="_blank" href="https://sanganaitourismexpo.com/">
						<div class="portfolio-item">
							<div class="details">
								<h4 class="title">Virtual Exhibition Platform</h4>
								<span class="term">custom system</span>
							</div>
							<span class="plus-icon">+</span>
							<div class="thumb" style="height : 184px;width: 245px;">
								<img src="./images/Sanganai-Hlanganani-Matchmaking-®-2021.png" alt="Virtual-Exhibition" />
								<div class="mask"></div>
							</div>
						</div>
					</a>
				</div>


       <!-- portfolio item -->
				<div class="col-md-4 col-sm-6 grid-item vuejs">
					<a target="_blank" href="https://crm.miod.mu/mymiod/login">
						<div class="portfolio-item">
							<div class="details">
								<h4 class="title">Client Portal for Mauritius Institute of Directors</h4>
								<span class="term">Laravel and Vue.js Framework(s)</span>
							</div>
							<span class="plus-icon">+</span>
							<div class="thumb" style="height : 184px;width: 245px;">
							<img src="./images/MyMIoD.png" alt="MyMIoD" />
								<div class="mask"></div>
							</div>
						</div>
					</a>
				</div>

			

				<!-- portfolio item -->
				<div class="col-md-4 col-sm-6 grid-item custom">
					<a target="_blank" href="https://app.zimbabwetourism.net/">
						<div class="portfolio-item">
							<div class="details">
								<h4 class="title">e-Registration - Tourism Industry</h4>
								<span class="term">custom system</span>
							</div>
							<span class="plus-icon">+</span>
							<div class="thumb" style="height : 184px;width: 245px;">
								<img src="./images/Zimbabwe-Tourism-Authority-e-Registration.png" alt="e-Registration" />
								<div class="mask"></div>
							</div>
						</div>
					</a>
				</div>

				<!-- portfolio item -->
				<div class="col-md-4 col-sm-6 grid-item wordpress design">
					<a target="_blank" href="https://travel24tours.co.zw/">
						<div class="portfolio-item">
							<div class="details">
								<h4 class="title">Travel24tours</h4>
								<span class="term">Travel Agency CMC</span>
							</div>
							<span class="plus-icon">+</span>
							<div class="thumb" style="height : 184px;width: 245px;">
								<img src="./images/Travel24tours.png" alt="Travel24tours" />
								<div class="mask"></div>
							</div>
						</div>
					</a>
				</div>

			</div>
			
			<!-- more button -->
			<div class="load-more text-center mt-4">
				<a href="javascript:" class="btn btn-default"><i class="fas fa-circle-notch"></i> Load more</a>
				<!-- numbered pagination (hidden for infinite scroll) -->
				<ul class="portfolio-pagination list-inline d-none">
					<li class="list-inline-item">1</li>
					<li class="list-inline-item"><a href="#">2</a></li>
				</ul>
			</div>
		</section>
`
})
