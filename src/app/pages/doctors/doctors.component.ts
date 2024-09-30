import { Component } from '@angular/core';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent {
  pagetitle = 'Our Doctors';
  doctors: any[] = [
    { image: 'assets/images/doctors/3.webp', name: 'Dr.S.Samundi Sankari', specialist: "Founder & Chief Consultantt", years: "25 years experience", education: "MD, DGO, DA, DOL, FICOG", location: "porur" },
    { image: 'assets/images/doctors/1.jpg', name: 'Dr.Divya Sivaraman', specialist: "Medical Director", years: "10 years experience", education: "MBBS, DNB, DRCOG, DFFP(UK)", location: "Kotturpuram" },
    { image: 'assets/images/doctors/2.jpg', name: 'Dr.Priya Prabhakar', specialist: "Chief Executive Officer", years: "25 years experience", education: "MDS, MBA", location: "porur" },
  ];
}
