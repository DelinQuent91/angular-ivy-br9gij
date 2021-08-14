import { Component} from '@angular/core';
  
@Component({
    selector: 'contact-app',
    template: `<h3>Контакты</h3>
    <img src="{{srcMap}}"/>
    <h4>Адрес: {{street}}</h4>
    <h4>Телефон: 8 (351) 949-83-88</h4>
    <button (click)="offSite()">Официальный сайт</button>
    `
})
export class ContactComponent {
    srcMap ="https://www.google.com/maps/vt/data=GdAeMqHfcOkxxyHpe7gy7UyOP4tGon0kW1gbMvzQitw5bk_f_CN0OpgEoJSmgOFfQ0JeOFdKApLHgcvP8WVJVcXrdB5WZUKT4Uo8raaqjxYRkQ-tkbRtY8oStqLIF8yjhkFHBV1g6m_FfVRBYAb3zJxww51x9doaX55qrH85r6UZfF5VCI3F4Ww";
    src="https://www.metallurg.ru/";
    street = "пр. Ленина, 105, Магнитогорск, Челябинская обл., 455038";
    offSite(){
        open(this.src); 
    }
 }