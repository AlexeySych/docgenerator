import { Component, OnInit } from '@angular/core';
import { BaseRandomizedComponent } from "../base-randomized/base-randomized.component";
import { Randomization} from "../utils";

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.sass']
})

export class LogoComponent extends  BaseRandomizedComponent{

  ngOnInit(): void {
  }
  logoWidth = Randomization.getRandomIntInclusive(100, 240) + 'px'
  logoHeight = Randomization.getRandomIntInclusive(80, 170) + 'px'
  horizontalMargin = Randomization.getRandom([10, 45, 75]) + '%'
  verticalMargin = Randomization.getRandomIntInclusive(20, 40) + 'px'

  logoUrls = [
    "url('https://logos-download.com/wp-content/uploads/2016/03/Rolex_logo.png')",
    "url('https://www.pngarts.com/files/3/Logo-Free-PNG-Image.png')",
    "url('https://dezov.s3.amazonaws.com/media/twitch-logo-png2c5-4796-8bfc-730d57da68f6.png')",
    "url('https://s1.logaster.com/static/v3/img/products/logo.png')",
    "url('https://argusdental.com/wp-content/uploads/2017/08/Master-Plan-Logo-PNG.png')",
  ]

  randomLogo = Randomization.getRandom(this.logoUrls)
}
