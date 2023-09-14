import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-headerb',
  templateUrl: './headerb.component.html',
  styleUrls: ['./headerb.component.css']
})
export class HeaderbComponent {

  constructor(private el: ElementRef) {}


  Port() {
    console.log("girdik");
    
    // Sayfanın altına doğru kaydırmak için sayfa boyutunu kullan
    const windowHeight = window.innerHeight;
    window.scrollTo(0, windowHeight * 1.15);
  }

}
