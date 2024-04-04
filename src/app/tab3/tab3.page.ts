import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}
  itens: any[] = [
    {
      id: 1,
      nome: "Finn",
      
      imagem: "../../assets/img/finn.jpg"
    },
    {
      id: 2,
      nome: "jack",
     
      imagem: "../../assets/img/jack.jpg"
    },
    {
      id:3,
      nome: "Marceline",
      imagem: "../../assets/img/marceline.jpg"
    },
    {
      id:4,
      nome:"Princessa jujuba",
      imagem:"../../assets/img/horaDaAventura.jpg"
    }
  ];  
  
  
  
  
}
