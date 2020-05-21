import { Component } from '@angular/core';

@Component({
  selector: 'my-home',
 // templateUrl: './home.component.html',
  template: `<div class="container">
	<div class="row">
		<div class="col-md-3">
			<nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
				<a class="navbar-brand js-scroll-trigger" href="#page-top">

					<span class="d-none d-lg-block">
          
        </span>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger active" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#experience">Experience</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#education">Education</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#skills">Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#interests">Interests</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#awards">Awards</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  <div class="col-md-9"><h1><span class="d-block d-lg-none">{{name}}</span></h1>
  <div><h3><span>{{profileSummary}}</span></h3></div></div>
  <div class="fixed-top">

   
  </div>
</div>
</div>`,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  name = 'Praveen Kanase';
  profileSummary="Sr .Net Developer with 12 yrs of experience in Web /Windows development using .Net";
}
