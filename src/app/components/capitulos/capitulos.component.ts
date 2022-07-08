import { Component } from '@angular/core';
import { AppRestService } from 'src/app/service/app-rest.service';
import { capitulosDTO, personajesDTO} from 'src/app/appListados/appListados';
import { Router } from '@angular/router';
import { Token } from '@angular/compiler';


@Component({
  selector: 'app-capitulos',
  templateUrl: './capitulos.component.html',
  styles: [
  ]
})

export class CapitulosComponent  {

  listaCapitulos: capitulosDTO[] = [];

  constructor( private appiCapitulos: AppRestService,
    private router : Router) {
    this.appiCapitulos.getDataCapitulos()
      .subscribe(( dataCapitulos: any ) =>{
      this.listaCapitulos = dataCapitulos.results;
      this.setNameUrlPersonajes();
    });
  }

  setNameUrlPersonajes(){
    for ( let i = 0; i < this.listaCapitulos.length; i++ ) {
      const dataNamePersonajes = this.listaCapitulos[i];
      let  urlPersonajes = dataNamePersonajes.characters
      dataNamePersonajes.personajes = [];

      for (let j = 0; j < urlPersonajes.length; j++) {
        const urli = urlPersonajes[j];
        let personaje = { url:urli,name:"" };

          this.appiCapitulos.getUrlListadoPersonajes( urli )
          .subscribe(( result:any )=> {
            personaje.name = result.name;
          });
          dataNamePersonajes.personajes.push( personaje );
      }
    }
  }

 // metodo para filtrar busqueda en el buscador para capitulos

  setUrlSearchCapitulos( termino: string ){
    this.appiCapitulos.getFilterPersonajes( termino )
      .subscribe( ( data: any ) => {
        this.listaCapitulos = data.results;
        this.setNameUrlPersonajes();
      });
  }

  verCapitulos( item : personajesDTO ){
    let url=item.url;
    this.router.navigate(['/personaje',url.split('/')[5]]);
  }
  ngOnInit(): void {
  let Token = this.getToken();
    console.log(Token);
  }
  getToken(){
    return localStorage.getItem('token');
  }
}
