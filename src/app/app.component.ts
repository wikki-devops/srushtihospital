import { Component, Renderer2} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'srushtihospital';
  constructor(private renderer: Renderer2) { }
  ngAfterViewInit() {
    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';

    script.src = 'assets/js/jquery-3.7.0.min.js';
    script.src = 'assets/js/jquery-3.7.1.min.js';
    script.src = 'assets/js/bootstrap.min.js';
    script.src = 'assets/js/validator.min.js';
    script.src = 'assets/js/jquery.slicknav.js';
    script.src = 'assets/js/swiper-bundle.min.js';
    script.src = 'assets/js/jquery.waypoints.min.js';
    script.src = 'assets/js/jquery.counterup.min.js';
    script.src = 'assets/js/jquery.magnific-popup.min.js';
    script.src = 'assets/js/SmoothScroll.js';
    script.src = 'assets/js/parallaxie.js';
    script.src = 'assets/js/gsap.min.js';
    script.src = 'assets/js/magiccursor.js';
    script.src = 'assets/js/SplitText.js';
    script.src = 'assets/js/ScrollTrigger.min.js';
    script.src = 'assets/js/wow.js';
    script.src = 'assets/js/function.js';
    this.renderer.appendChild(document.body, script);

  }
}
