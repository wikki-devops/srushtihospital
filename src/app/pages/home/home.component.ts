import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  services: any[] = [
    { icons: '5.webp', title: 'Reproductive surgeries', description: "Reproductive surgeries like hysterolaparoscopy, myomectomy, and conservative surgery minimally invasive solutions for infertility and reproductive health issues" },
    { icons: '1.webp', title: 'Cryopreservation', description: "Preserving Women's Fertility for the Future" },
    { icons: '3.webp', title: 'Embryology & Fertility Solutions', description: "Advanced techniques in IVF, genetic screening, and fertility preservation." },
    { icons: '2.webp', title: 'Boosting IVF Success with Acupuncture', description: "Acupuncture reduces stress, enhances hormonal response,aiding fertility treatments." },
    { icons: '4.webp', title: 'Comprehensive Clinical Fertility Services', description: "Expert solutions for IVF failure, azoospermia, PCOS, and fertility preservation." },
  ];

  steps: any[] = [
    { image: '1.png', title: 'Ovarian Stimulation', description: "The woman receives fertility medications to stimulate multiple egg production." },
    { image: '2.png', title: 'Egg Retrieval & Sperm Collection', description: "Eggs are collected from the ovaries, and sperm is provided by the male partner or donor." },
    { image: '3.png', title: 'Fertilization & Embryo Culture', description: "Eggs and sperm are combined to allow fertilization, and embryos are cultured for development." },
    { image: '4.png', title: 'Embryo Transfer & Support', description: "One or more embryos are transferred into the uterus, followed by hormonal support and pregnancy testing." },
  ];

}
