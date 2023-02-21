import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [],
})
export class VerPaisComponent implements OnInit {
  pais!: Country; // obligar a que pueda ser nulo con !

  constructor(
    private activateRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    this.activateRoute.params // observable
      .pipe(
        switchMap(({ id }) => this.paisService.getPaisPorAlpha(id)),
        // forma corta de imprimir en consola de lo que esta en el observable
        tap((resp) => console.log(resp))
      )
      .subscribe((pais) => {
        console.log('ver-pais');
        console.log('visto: ', pais);
        this.pais = pais[0];
        console.log('Asignado');
        console.log(this.pais);

        //this.pais = pais;
      });
  }
}
