import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {MatButtonModule} from '@angular/material/button';

import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, MatButtonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent {
  right = faArrowRight;
  left = faArrowLeft;
  hidden = false;
  autoplay=true;
  currentSlide = 0;
  @Input() slides: any[] = [
    {
      'url': './assets/tvs_hosur.jpg',
      'title': 'Hosur',
      'description': 'Hosur plant'
    },
    {
      'url': './assets/tvs_mysore.jpg',
      'title': 'Hosur',
      'description': 'Hosur plant'
    },
    {
      'url': './assets/tvs_hp.jpg',
      'title': 'Hosur',
      'description': 'Hosur plant'
    },
  ];

  next(){
    let currentSlide = (this.currentSlide+1)%this.slides.length;
    this.jumpToSlide(currentSlide);
  }
  
  prev(){
    let currentSlide = (this.currentSlide-1)%this.slides.length;
    this.jumpToSlide(currentSlide);
  }

  jumpToSlide(index: number) {
    this.hidden = true;
    setTimeout(() => {
      this.currentSlide = index;
      this.hidden = false;
    }, 100);

  }

    constructor(){
      if(this.autoplay){
        setInterval(()=>{
          this.next();
        },2000);
      }
    }


    locations_list:{title:string;link:string}[]=[
      { title:'Hosur',link:'/hosur'},
      { title:'Mysore',link:'/hosur'},
      { title:'Himachal Pradesh',link:'/hosur'},
      { title:'Indonesia',link:'/hosur'}
    ];



  }

