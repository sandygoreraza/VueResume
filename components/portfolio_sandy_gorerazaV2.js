app.component('v1portfolio-sandy-goreraza', {
		
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
				<li class="current list-inline-item" data-filter="*">All Projects</li>
				<li class="list-inline-item" data-filter=".custom">Custom Systems</li>
				<li class="list-inline-item" data-filter=".wordpress">WordPress</li>
				<li class="list-inline-item" data-filter=".flask">Flask</li>
				<li class="list-inline-item" data-filter=".laravel">Laravel</li>
				<li class="list-inline-item" data-filter=".codeigniter">CodeIgniter</li>
				<li class="list-inline-item" data-filter=".video">Video</li>
			</ul>

			<!-- portfolio filter (mobile) -->
			<div class="pf-filter-wrapper mb-4">
				<select class="portfolio-filter-mobile">
					<option value="*">Everything</option>
					<option value=".wordpress">WordPress</option>
					<option value=".video">Video</option>
					<option value=".flask">Flask</option>
					<option value=".laravel">Laravel</option>
					<option value=".codeigniter">CodeIgniter</option>
					<option value=".custom">Custom Systems</option>
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
					<a href="#laravel">
						<div class="portfolio-item">
							<div class="details">
								<h4 class="title">Client Portal for Mauritius Institute of Directors</h4>
								<span class="term">Laravel Framework</span>
							</div>
							<span class="plus-icon">+</span>
							<div class="thumb" style="height : 184px;width: 245px;">
							<img src="./images/MyMIoD.png" alt="MyMIoD" />
								<div class="mask"></div>
							</div>
						</div>
					</a>
				</div>



                                	<div class="col-md-4 col-sm-6 grid-item laravel">
					<a href="#laravel">
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
				<div class="col-md-4 col-sm-6 grid-item codeigniter">
					<a  href="#codeigniter">
						<div class="portfolio-item">
							<div class="details">
								<h4 class="title">Crowd Funding Platform</h4>
								<span class="term">Codeigniter Framework</span>
							</div>
							<span class="plus-icon">+</span>
							<div class="thumb" style="height : 184px;width: 245px;">
							<img src="./images/codeIgnitor_funding.png" alt="CodeIgniter" />
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
				<div class="col-md-4 col-sm-6 grid-item wordpress">
					<a href="#Place-of-Stone">
						<div class="portfolio-item">
							<div class="details">
								<h4 class="title">Place of Stone</h4>
								<span class="term">Travel CMS</span>
							</div>
							<span class="plus-icon">+</span>
							<div class="thumb" style="height : 184px;width: 245px;">
								<img src="./images/Place-of-Stone.png" alt="Place-of-Stone" />
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
