import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private el: ElementRef) {}


  Port() {
    console.log("girdik");
    
    // Sayfanın altına doğru kaydırmak için sayfa boyutunu kullan
    const windowHeight = window.innerHeight;
    window.scrollTo(0, windowHeight * 1.2);
  }

}
