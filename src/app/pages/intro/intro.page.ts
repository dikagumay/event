import { Component, ViewChild } from '@angular/core';
import { IonSlides, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage {

  constructor(
    public menu: MenuController,
    public router: Router,
    public storage: Storage
  ) {}

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  }

}
