import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [],
})
export class PorRegionComponent {
  termino: string = '';
  hayError: boolean = false;
  regiones: Country[] = [];

  region: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  regionActiva: string = '';
  constructor() {}

  activateRegion(region: string) {
    this.regionActiva = region;
  }

  // constructor(private paisService: PaisService) {}

  // buscar(termino: string) {
  //   this.hayError = false;
  //   this.termino = termino;

  //   this.paisService.buscarRegion(this.termino).subscribe(
  //     (regionesBusqueda) => {
  //       console.log(regionesBusqueda);
  //       this.regiones = regionesBusqueda;
  //     },
  //     (err) => {
  //       this.hayError = true;
  //       this.regiones = [];
  //     }
  //   );
  // }

  // sugerencias(termino: string) {
  //   this.hayError = false;
  // }
}
