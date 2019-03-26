import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import { Kamer} from 'src/app/models/kamer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * @title Table with sorting
 */
@Component({
  selector: 'app-kamer-tabel',
  templateUrl: './kamer-tabel.component.html',
  styleUrls: ['./kamer-tabel.component.scss'],

})
export class KamerTabelComponent implements OnInit {

@Input() public kamers$?: Observable<Kamer[]>;

  public displayedColumns: string[] = [
    "kamerNaam",
    "kamerType",
    "kamerLigging",
    "aantalPersonen",
    "prijs"
  ];

  public dataSource$?: Observable<MatTableDataSource<Kamer>>;

  //@ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource$ = this.kamers$ && this.kamers$.pipe(
      map(kamers => new MatTableDataSource(kamers)),
      map(metaDataSource => {
        metaDataSource.sort = this.sort
        return metaDataSource;
      })
    );

  }
}
