app.component('sidebar-sandy-goreraza', {
	
 data() {
        return {

            // sandygoreraza : true,
            cv_name : 'Sandy Goreraza Resume',
            cv_owner : 'Sandy Goreraza',
            designation : 'Senior Software Engineer',
            certificates_header : 'Professional Certifications'
        }
    },	
	
	
	
    template:
          `
  
  <!-- header -->
	<header class="left float-left shadow-dark" id="header">
		<button type="button" class="close" aria-label="Close">
			<span aria-hidden="true">&times;</span>
		</button>
		<div class="header-inner d-flex align-items-start flex-column">
			<!--<a href="index.html"><img src="https://via.placeholder.com/70x70" alt="Sandy Goreraza" /></a>-->
			 
			<a href="index.html" class="site-title dot mt-3" style="font-size: 24px !important;">{{  cv_owner }}</a>
			 
			<span class="site-slogan">{{  designation }}</span>
			
			<!-- navigation menu -->
			<nav>
				<ul class="vertical-menu scrollspy">
					<li><a href="#home" class="active"><i class="icon-home"></i>Home</a></li>
					<li><a href="#about"><i class="icon-user"></i>About</a></li>
					<li><a href="#skills"><i class="icon-umbrella"></i>Skills</a></li>
					<li><a href="#resume"><i class="icon-pencil"></i>Experience</a></li>
					<li><a href="#certificates"><i class="icon-graduation"></i>Certifications</a></li>
					<li><a href="#services"><i class="icon-bulb"></i>Services</a></li>
					<li><a href="#works"><i class="icon-grid"></i>Works</a></li>
					<li><a href="#sociallinks"><i class="icon-user-follow"></i>Social Media</a></li>
					<li><a href="#contact"><i class="icon-phone"></i>Contact</a></li>
				</ul>
			</nav>
			
			<!-- footer -->
			<div class="footer mt-auto">

				<!-- social icons -->
				<!--<ul class="social-icons list-inline">
					<li class="list-inline-item"><a href="https://facebook.com/sandy.goreraza"><i class="fab fa-facebook-f"></i></a></li>
					<li class="list-inline-item"><a href="#"><i class="fab fa-twitter"></i></a></li>
					<li class="list-inline-item"><a href="#"><i class="fab fa-instagram"></i></a></li>
					<li class="list-inline-item"><a href="#"><i class="fab fa-youtube"></i></a></li>
					<li class="list-inline-item"><a href="#"><i class="fab fa-github"></i></a></li>
				</ul>-->

				<!-- copyright -->
				<span class="copyright">© {{  printYear() }} {{  cv_name }}</span>
			</div>
		</div>
	</header>
  
  
`,
    methods: {
        sandygoreraza() {

        },

        printDate: function () {
            return new Date().toLocaleDateString();
        },
        printTime: function () {
            return new Date().toLocaleTimeString();
        },
        printYear: function () {
            return new Date().getFullYear();
        },
        printTimestamp: function () {
            return Date.now();
        },
        printFullDate: function(){
            return new Date();
        }




    }
})
