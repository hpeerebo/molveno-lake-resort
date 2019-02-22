import { Component } from '@angular/core';
import { Tafel } from 'src/app/models/tafel';

@Component({
  selector: 'app-tafels',
  templateUrl: './tafels.component.html',
  styleUrls: ['./tafels.component.scss']
})

export class TafelsComponent {

  backendData = [
    { tafelNummer: 1, aantalPersonen: 4, vrij: true  },
    { tafelNummer: 2, aantalPersonen: 4, vrij: true  },
    { tafelNummer: 3, aantalPersonen: 2, vrij: false  },
    { tafelNummer: 4, aantalPersonen: 4, vrij: true  },
    { tafelNummer: 5, aantalPersonen: 4, vrij: false  },
    { tafelNummer: 6, aantalPersonen: 6, vrij: true  },
    { tafelNummer: 7, aantalPersonen: 2, vrij: true  },
    { tafelNummer: 8, aantalPersonen: 4, vrij: false  },
    { tafelNummer: 9, aantalPersonen: 4, vrij: true  },
    { tafelNummer: 10, aantalPersonen: 2, vrij: false  },
    { tafelNummer: 11, aantalPersonen: 4, vrij: true  },
    { tafelNummer: 12, aantalPersonen: 4, vrij: true  },
    { tafelNummer: 13, aantalPersonen: 6, vrij: false  },
    { tafelNummer: 14, aantalPersonen: 2, vrij: true  },
    { tafelNummer: 15, aantalPersonen: 2, vrij: true  }
  ];

  tafels: Tafel[] = this.backendData.map(data => new Tafel(data.tafelNummer, data.aantalPersonen, data.vrij));

  // show free items in table (free item = true)
  // show all items with show = false
  show = true;
  tableFilterFunction(table: any): boolean {
    return table.vrij;
  }

}
