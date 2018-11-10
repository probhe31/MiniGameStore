import { Component, OnInit } from '@angular/core';
import { Game } from '../game.model';

@Component({
  selector: 'app-featured-game-section',
  templateUrl: './featured-game-section.component.html',
  styleUrls: ['./featured-game-section.component.css']
})
export class FeaturedGameSectionComponent implements OnInit {

  games : Game[] = [
    new Game('Sugary Fright', 'A halloween themed multiplayer game','../assets/images/game1_tumb.png'),
    new Game('Resurgent', 'A post-apocalyptic narrative-driven adventure.','../assets/images/game2_tumb.png'),
    new Game('Montana Mike™ (ZX Spectrum Next) Digital Download', 'Embark on a dangerous treasure filled quest into the deepest lost tombs and catacombs.','../assets/images/game3_tumb.png'),    
    new Game('Montana Mike™ (ZX Spectrum Next) Digital Download', 'Embark on a dangerous treasure filled quest into the deepest lost tombs and catacombs.','../assets/images/game3_tumb.png'),    
    new Game('Montana Mike™ (ZX Spectrum Next) Digital Download', 'Embark on a dangerous treasure filled quest into the deepest lost tombs and catacombs.','../assets/images/game3_tumb.png'),    
    new Game('Montana Mike™ (ZX Spectrum Next) Digital Download', 'Embark on a dangerous treasure filled quest into the deepest lost tombs and catacombs.','../assets/images/game3_tumb.png'),    
    new Game('Montana Mike™ (ZX Spectrum Next) Digital Download', 'Embark on a dangerous treasure filled quest into the deepest lost tombs and catacombs.','../assets/images/game3_tumb.png'),    
    new Game('Montana Mike™ (ZX Spectrum Next) Digital Download', 'Embark on a dangerous treasure filled quest into the deepest lost tombs and catacombs.','../assets/images/game3_tumb.png'),    
    new Game('Montana Mike™ (ZX Spectrum Next) Digital Download', 'Embark on a dangerous treasure filled quest into the deepest lost tombs and catacombs.','../assets/images/game3_tumb.png')    
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
