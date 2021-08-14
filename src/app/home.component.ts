import { Component} from '@angular/core';
  
@Component({
  selector: 'home-app',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ]
})
export class HomeComponent { 
  team = 'Metallurg Magnitogorsk';
  imgLogo = "https://www.khl.ru/images/teams/ru/1045/37";
  coach1 = "https://www.khl.ru/upload/medialibrary/a0b/a0b07dcb100da8ef6e7b4378155c15ea.jpg";
  coach2 = "https://cdn-st1.rtr-vesti.ru/vh/pictures/xw/212/955/1.jpg";
  roaster =["Мозякин" , "Зарипов" , "Коварж" , "Кошечкин" , "Прохоркин" , "Голдобин"];
  coach: boolean = true;
  player1 = "Кулемин";
  player2 = "Яковлев";
  player3 = "Олкинуора";  
  toggle() {
    this.coach = !this.coach
  };
  addPlayer(){    
    this.roaster.push(this.player1);    
  }
  addPlayer2(){    
    this.roaster.push(this.player2);    
  }
  addPlayer3(){    
    this.roaster.push(this.player3);    
  }

  cups: number;
 }
