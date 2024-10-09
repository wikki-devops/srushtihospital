import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  pagetitle = 'Who we are?';
  needs: any[] = [
    { icons: '', title: 'Green IVF' },
    { icons: '1.webp', title: 'Mini IVF' },
    { icons: '3.webp', title: 'IVF' },
    { icons: '2.webp', title: 'IUF' },
    { icons: '4.webp', title: 'Pre-Genetic Diagnosis' },
    { icons: '4.webp', title: 'ICSI Assisted Hatching' },
    { icons: '4.webp', title: 'Surrogacy programmes' },
    { icons: '4.webp', title: 'TESE' },
    { icons: '4.webp', title: 'Donor programmes' },
  ];

  doctors: any[] = [
    { image: 'assets/images/doctors/1.jpg', name: 'Dr.Divya Sivaraman', specialist: "Medical Director", years: "10 years experience", education: "MBBS, DNB, DRCOG, DFFP(UK)", location: "Kotturpuram" },
    { image: 'assets/images/doctors/2.jpg', name: 'Dr.Priya Prabhakar', specialist: "Chief Executive Officer", years: "25 years experience", education: "MDS, MBA", location: "porur" },
  ];

}
