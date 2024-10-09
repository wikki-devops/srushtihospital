import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent {
  pagetitle = 'Our Hospital Locations';

  locations: any[] = [
    {
      place: 'Srushti Hospital - Ramapuram', 
      location: '75 Bed Fertility & Womens Hospital, No 1, Padmavathy St, Thirumalai Nagar, Thiru Nagar, Ramapuram, Chennai, Tamil Nadu 600089, India', 
      phone: '+91 8508501111', 
      mail: 'care@srushtihospital.com',
      mapUrl: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6728.659958738864!2d80.18134255351727!3d13.036452126601274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5260d467598631%3A0xb1550dc2509bc289!2sSrushti%20Fertility%20Centre%20%26%20Women%27s%20Hospital%20-%20Ramapuram!5e0!3m2!1sen!2sin!4v1727774656490!5m2!1sen!2sin'
      )
    },
    {
      place: 'Srushti Hospital - Porur', 
      location: 'Fertility Centre, 113, Mount Poonamallee Rd, Porur, Chennai, Tamil Nadu 600116, India', 
      phone: '+91 8508502222', 
      mail: 'care@srushtihospital.com',
      mapUrl: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.104356368765!2d80.16738147454747!3d13.029026013617719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52676834ff5887%3A0x64d4c649a8b7db98!2sSrushti%20Women%27s%20Clinic%20%26%20Fertility%20Centre%20-%20Porur!5e0!3m2!1sen!2sin!4v1727776616137!5m2!1sen!2sin'
      )
    },
    {
      place: 'Srushti Hospital - Kotturpuram', 
      location: 'Fertility Centre - City Centre, Kotturpuram, Chennai, Tamil Nadu, India', 
      phone: '+91 8508503333', 
      mail: 'care@srushtihospital.com',
      mapUrl: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.190564949001!2d80.24009337454738!3d13.02353351373862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267a5501bef19%3A0x340a5d5a339c5a0b!2sSrushti%20Women%27s%20Fertility%20Hospital%20-%20Kotturpuram!5e0!3m2!1sen!2sin!4v1727776400027!5m2!1sen!2sin'
      )
    }
  ];
  constructor(private sanitizer: DomSanitizer) {}

}
