import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  images: string[] = [];
  ii:number[] = [];
  images2: string[] = [];
  scrollValue: string = '0';

  ngOnInit(): void {
    for (let i = 1; i <=93; i++) {
      this.images.push("assets/images/portfolio/${i}.png");
      this.ii.push(i);
      this.images2.push("assets/images/portfolio2/${i}.png");
      console.log(this.ii)
    }
  }
  
  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
      this.scrollValue = (window.pageYOffset / (document.body.offsetHeight - window.innerHeight)).toString();
      this.el.nativeElement.style.setProperty('--scroll', this.scrollValue);
  }



}
