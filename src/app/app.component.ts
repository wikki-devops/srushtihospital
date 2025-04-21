import { Component, Renderer2 } from '@angular/core';

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
    script.src = 'https://cdn.jsdelivr.net/gh/wikki-devops/godparticles@main/js/jquery.js';
    script.src = 'https://cdn.jsdelivr.net/gh/wikki-devops/godparticles@main/js/vendors.min.js';
    script.src = 'https://cdn.jsdelivr.net/gh/wikki-devops/godparticles@main/js/main.js';

    this.renderer.appendChild(document.body, script);

  }

}
