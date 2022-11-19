class Myheader extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
		<header>
    	<div class="container" class="text-center3">
      		<div class="row">
        		<div class="col-md-6 col-sm-6 col-xl-6">
          <span class="phone-icon" ><a href=https://goo.gl/maps/6G4FPnNyZHvKjzzC9>Itinéraire</a> <i class="fa fa-map-marker"></i>50, Zone Industrielle Zenata - Mohammedia - Maroc</span>
        		</div>
        <div class="col-md-4 col-sm-4 text-align-right col-xl-2">
          <span class="phone-icon"><i class="fa fa-phone"></i> 0522350304</span>
		</div>
		   <div class="col-md-6 col-sm-6 text-align-right col-xl-4">
           <span class="email-icon"><i class="fa fa-envelope-o"></i>  <a href="mailto:contact@directprint.ma?">contact@directprint.ma</a></span>
			</div>
 				
        </div>
      </div>
    </div>
  </header>
  <body>
	  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Directprint</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Acceuil <span class="sr-only">(current)</span></a> <div class="dropdown-menu" aria-labelledby="navbarDropdown"> 
				<a class="dropdown-item" href="Index.html">Acceuil</a>
				<a class="dropdown-item" href="Activites.html">Activités</a>
				<a class="dropdown-item" href="Studio.html">Le Studio</a>
              <a class="dropdown-item" href="Equipements.html">Les équipements</a>
              <a class="dropdown-item" href="Secteurs.html">Seteurs de la clientèle</a></div></li>
  <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Domaines d'activité</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="Commercial.html">Commercial</a>
              <a class="dropdown-item" href="Edition.html">Edition</a>
				 <a class="dropdown-item" href="Packaging.html">Packaging</a>
				<a class="dropdown-item" href="Etiquettes.html">Etiquettes</a></div></li>
  <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#"  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Ateliers</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown1">
              <a class="dropdown-item" href="Serigraphie.html">Sérigraphie</a>
              <a class="dropdown-item" href="Decoupe.html">Découpe </a>
				 <a class="dropdown-item" href="Embellissement.html">Embellissement</a>
				<a class="dropdown-item" href="Reliure.html">Reliure</a></div>
		  <li class="nav-item">
            <a class="nav-link" href="Galerie.html">Galerie</a></li>
          </li>
		  <li class="nav-item">
            <a class="nav-link" href="Contact.html">Contact</a>
          </li></ul> </div>
    </nav>)`;
		
	} 
} 

customElements.define('my-header', Myheader)

class Myfooter extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
<footer class="text-center">
      <div class="container">
        <div class="row">
				<section>
		      <div class="align-content-lg-center col-xl-12"><a href="https://www.linkedin.com/company/directprint/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BUUQl9AWaRDy1rgO90UaT4Q%3D%3D"</a> <img class="rounded-circle" src="ACCEUIL/372102050_LINKEDIN_ICON_TRANSPARENT_400.gif" alt="">
		      <a href="https://m.facebook.com/photo.php?fbid=760913185275198&id=100040695715276&set=a.760913158608534&eav=Afb9Tb43eJRaQfdCTd88MeGcbJ2CJRderzJhDp_Cpxy-lmBCn8jKUE58rsBfiYjo_1g&paipv=0&source=11&refid=17"</a><img class="rounded-circle" src="ACCEUIL/371907490_FACEBOOK_ICON_400.gif" alt="">
		      <a href="https://www.instagram.com/directprint_ma/#"</a><img class="rounded-circle" src="ACCEUIL/371907300_INSTAGRAM_ICON_400.gif" alt=""></
			   </section>
          <div class="col-12">
            <p>Copyright © Directprint 2022. All rights reserved.</p>
          </div>
        </div>
      </div>
		 </footer>
		`;
		
	} 
} 

customElements.define('my-footer', Myfooter)