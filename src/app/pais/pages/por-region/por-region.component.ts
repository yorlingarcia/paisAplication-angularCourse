import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [],
})
export class PorRegionComponent {
  hayError: boolean = false;
  regiones: Country[] = [];

  region: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  regionActiva: string = '';

  paises: Country[] = [];

  constructor(private paisService: PaisService) {}

  getClassCss(reg: string): string {
    return reg === this.regionActiva
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

  activateRegion(region: string) {
    if (region === this.regionActiva) {
      return;
    }
    this.regionActiva = region;
    //this.paises = [];
    this.paisService.buscarRegion(region).subscribe(
      (regionesBusqueda) => {
        //console.log(regionesBusqueda);
        this.paises = regionesBusqueda;
      },
      (err) => {
        this.paises = [];
      }
    );
  }
}
