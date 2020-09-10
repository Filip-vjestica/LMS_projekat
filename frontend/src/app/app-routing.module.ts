import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthRouteService } from './service/auth-route/auth-route.service';
import { HomePublicComponent } from './public/home/home.component';
import { HomePrivateComponent } from './private/home/home.component';
import { UniverzitetiComponent } from './private/home/administrator/univerziteti/univerziteti.component';
import { DrzaveComponent } from './private/home/administrator/drzave/drzave.component';
import { MestaComponent } from './private/home/administrator/mesta/mesta.component';
import { AdreseComponent } from './private/home/administrator/adrese/adrese.component';
import { FakultetiComponent } from './private/home/administrator/fakulteti/fakulteti.component';
import { IshodiComponent } from './private/home/administrator/ishodi/ishodi.component';
import { StudentiNaGodiniComponent } from './private/home/administrator/studenti-na-godini/studenti-na-godini.component';
import { NastavniciComponent } from './private/home/administrator/nastavnici/nastavnici.component';
import { RegistrovaniKorisniciComponent } from './private/home/administrator/registrovani-korisnici/registrovani-korisnici.component';
import { ZvanjaComponent } from './private/home/administrator/zvanja/zvanja.component';
import { TipoviZvanjaComponent } from './private/home/administrator/tipovi-zvanja/tipovi-zvanja.component';
import { NaucneOblastiComponent } from './private/home/administrator/naucne-oblasti/naucne-oblasti.component';
import { PermissionsComponent } from './private/home/administrator/permissions/permissions.component';
import { UserPermissionsComponent } from './private/home/administrator/user-permissions/user-permissions.component';
import { PohadjanjaPredmetaComponent } from './private/home/administrator/pohadjanja-predmeta/pohadjanja-predmeta.component';
import { NastavniciNaRealizacijamaComponent } from './private/home/administrator/nastavnici-na-realizacijama/nastavnici-na-realizacijama.component';
import { RealizacijePredmetaComponent } from './private/home/administrator/realizacije-predmeta/realizacije-predmeta.component';
import { AdreseUniverzitetiComponent } from './private/home/administrator/adrese-univerziteti/adrese-univerziteti.component';
import { AdreseFakultetiComponent } from './private/home/administrator/adrese-fakulteti/adrese-fakulteti.component';
import { AdreseRegistrovaniKorisniciComponent } from './private/home/administrator/adrese-registrovani-korisnici/adrese-registrovani-korisnici.component';
import { CardDrzavaComponent } from './private/home/administrator/drzave/card-drzava/card-drzava.component';
import { CardMestoComponent } from './private/home/administrator/mesta/card-mesto/card-mesto.component';
import { CardAdresaComponent } from './private/home/administrator/adrese/card-adresa/card-adresa.component';
import { CardUniverzitetComponent } from './private/home/administrator/univerziteti/card-univerzitet/card-univerzitet.component';
import { CardFakultetComponent } from './private/home/administrator/fakulteti/card-fakultet/card-fakultet.component';
import { CardIshodComponent } from './private/home/administrator/ishodi/card-ishod/card-ishod.component';
import { CardStudentNaGodiniComponent } from './private/home/administrator/studenti-na-godini/card-student-na-godini/card-student-na-godini.component';
import { CardNastavnikComponent } from './private/home/administrator/nastavnici/card-nastavnik/card-nastavnik.component';
import { CardRegistrovaniKorisnikComponent } from './private/home/administrator/registrovani-korisnici/card-registrovani-korisnik/card-registrovani-korisnik.component';
import { CardZvanjeComponent } from './private/home/administrator/zvanja/card-zvanje/card-zvanje.component';
import { CardTipZvanjaComponent } from './private/home/administrator/tipovi-zvanja/card-tip-zvanja/card-tip-zvanja.component';
import { CardNaucnaOblastComponent } from './private/home/administrator/naucne-oblasti/card-naucna-oblast/card-naucna-oblast.component';
import { CardPermissionComponent } from './private/home/administrator/permissions/card-permission/card-permission.component';
import { CardUserPermissionComponent } from './private/home/administrator/user-permissions/card-user-permission/card-user-permission.component';
import { CardPohadjanjePredmetaComponent } from './private/home/administrator/pohadjanja-predmeta/card-pohadjanje-predmeta/card-pohadjanje-predmeta.component';
import { CardNastavnikNaRealizacijiComponent } from './private/home/administrator/nastavnici-na-realizacijama/card-nastavnik-na-realizaciji/card-nastavnik-na-realizaciji.component';
import { CardRealizacijaPredmetaComponent } from './private/home/administrator/realizacije-predmeta/card-realizacija-predmeta/card-realizacija-predmeta.component';
import { CardAdresaUniverzitetComponent } from './private/home/administrator/adrese-univerziteti/card-adresa-univerzitet/card-adresa-univerzitet.component';
import { CardAdresaFakultetComponent } from './private/home/administrator/adrese-fakulteti/card-adresa-fakultet/card-adresa-fakultet.component';
import { CardAdresaRegistrovaniKorisnikComponent } from './private/home/administrator/adrese-registrovani-korisnici/card-adresa-registrovani-korisnik/card-adresa-registrovani-korisnik.component';
import { StudijskiProgramiComponent } from './private/home/administrator/studijski-programi/studijski-programi.component';
import { CardStudijskiProgramComponent } from './private/home/administrator/studijski-programi/card-studijski-program/card-studijski-program.component';
import { GodineStudijaComponent } from './private/home/administrator/godine-studija/godine-studija.component';
import { CardGodinaStudijaComponent } from './private/home/administrator/godine-studija/card-godina-studija/card-godina-studija.component';
import { CardPredmetComponent } from './private/home/administrator/predmeti/card-predmet/card-predmet.component';
import { PredmetiComponent } from './private/home/administrator/predmeti/predmeti.component';

const routes: Routes = [
  {
    path: "public-home",
    component: HomePublicComponent,
    children: [
    ]
  },
  {
    path: "private-home",
    component: HomePrivateComponent,
    // canActivate: [AuthRouteService],
    // canActivateChild: [AuthRouteService],
    data: {
      allowedRoles: ["ROLE_ADMINISTRATOR","ROLE_ADMINISTRATIVNO_OSOBLJE","ROLE_NASTAVNIK","ROLE_STUDENT"]
    },
    children: [
      {
        path: "drzave",
        component: DrzaveComponent,
        data: {
          allowedRoles: ["ROLE_ADMINISTRATOR","ROLE_ADMINISTRATIVNO_OSOBLJE"]
        }
      },
      {
        path: "drzave/drzava/:id",
        component: CardDrzavaComponent,
        data: {
          allowedRoles: ["ROLE_ADMINISTRATOR","ROLE_ADMINISTRATIVNO_OSOBLJE"]
        }
      },
      {
        path: "mesta",
        component: MestaComponent,
        data: {
          allowedRoles: ["ROLE_ADMINISTRATOR","ROLE_ADMINISTRATIVNO_OSOBLJE"]
        }
      },
      {
        path: "mesta/mesto/:id",
        component: CardMestoComponent,
        data: {
          allowedRoles: ["ROLE_ADMINISTRATOR","ROLE_ADMINISTRATIVNO_OSOBLJE"]
        }
      },
      {
        path: "adrese",
        component: AdreseComponent,
        data: {
          allowedRoles: ["ROLE_ADMINISTRATOR","ROLE_ADMINISTRATIVNO_OSOBLJE"]
        }
      },
      {
        path: "adrese/adresa/:id",
        component: CardAdresaComponent,
        data: {
          allowedRoles: ["ROLE_ADMINISTRATOR","ROLE_ADMINISTRATIVNO_OSOBLJE"]
        }
      },
      {
        path: "univerziteti",
        component: UniverzitetiComponent,
        data: {
          allowedRoles: ["ROLE_ADMINISTRATOR","ROLE_ADMINISTRATIVNO_OSOBLJE"]
        }
      },
      {
        path: "univerziteti/univerzitet/:id",
        component: CardUniverzitetComponent,
        data: {
          allowedRoles: ["ROLE_ADMINISTRATOR","ROLE_ADMINISTRATIVNO_OSOBLJE"]
        }
      },
      {
        path: "fakulteti",
        component: FakultetiComponent,
        data: {
          allowedRoles: ["ROLE_ADMINISTRATOR","ROLE_ADMINISTRATIVNO_OSOBLJE"]
        }
      },
      {
        path: "fakulteti/fakultet/:id",
        component: CardFakultetComponent,
        data: {
          allowedRoles: ["ROLE_ADMINISTRATOR","ROLE_ADMINISTRATIVNO_OSOBLJE"]
        }
      },
      {
        path: "studijski-programi",
        component: StudijskiProgramiComponent,
        data: {
          allowedRoles: ["ROLE_ADMINISTRATOR","ROLE_ADMINISTRATIVNO_OSOBLJE"]
        }
      },
      {
        path: "studijski-programi/studijski-program/:id",
        component: CardStudijskiProgramComponent,
        data: {
          allowedRoles: ["ROLE_ADMINISTRATOR","ROLE_ADMINISTRATIVNO_OSOBLJE"]
        }
      },
      {
        path: "godine-studija",
        component: GodineStudijaComponent,
        data: {
          allowedRoles: ["ROLE_ADMINISTRATOR","ROLE_ADMINISTRATIVNO_OSOBLJE"]
        }
      },
      {
        path: "godine-studija/godina-studija/:id",
        component: CardGodinaStudijaComponent,
        data: {
          allowedRoles: ["ROLE_ADMINISTRATOR","ROLE_ADMINISTRATIVNO_OSOBLJE"]
        }
      },
      {
        path: "predmeti",
        component: PredmetiComponent,
        data: {
          allowedRoles: ["ROLE_ADMINISTRATOR","ROLE_ADMINISTRATIVNO_OSOBLJE"]
        }
      },
      {
        path: "predmeti/predmet/:id",
        component: CardPredmetComponent,
        data: {
          allowedRoles: ["ROLE_ADMINISTRATOR","ROLE_ADMINISTRATIVNO_OSOBLJE"]
        }
      },
      {
        path: "ishodi",
        component: IshodiComponent,
        data: {
          allowedRoles: ["ROLE_ADMINISTRATOR","ROLE_ADMINISTRATIVNO_OSOBLJE"]
        }
      },
      {
        path: "ishodi/ishod/:id",
        component: CardIshodComponent,
        data: {
          allowedRoles: ["ROLE_ADMINISTRATOR","ROLE_ADMINISTRATIVNO_OSOBLJE"]
        }
      },
      {
        path: "studenti-na-godini",
        component: StudentiNaGodiniComponent,
        data: {
          allowedRoles: ["ROLE_ADMINISTRATOR","ROLE_ADMINISTRATIVNO_OSOBLJE"]
        }
      },
      {
        path: "studenti-na-godini/student-na-godini/:id",
        component: CardStudentNaGodiniComponent,
        data: {
          allowedRoles: ["ROLE_ADMINISTRATOR","ROLE_ADMINISTRATIVNO_OSOBLJE"]
        }
      },
      {
        path: "nastavnici",
        component: NastavniciComponent,
        data: {
          allowedRoles: ["ROLE_ADMINISTRATOR","ROLE_ADMINISTRATIVNO_OSOBLJE"]
        }
      },
      {
        path: "nastavnici/nastavnik/:id",
        component: CardNastavnikComponent,
        data: {
          allowedRoles: ["ROLE_ADMINISTRATOR","ROLE_ADMINISTRATIVNO_OSOBLJE"]
        }
      },
      {
        path: "registrovani-korisnici",
        component: RegistrovaniKorisniciComponent,
        data: {
          allowedRoles: ["ROLE_ADMINISTRATOR","ROLE_ADMINISTRATIVNO_OSOBLJE"]
        }
      },
      {
        path: "registrovani-korisnici/registrovani-korisnik/:id",
        component: CardRegistrovaniKorisnikComponent,
        data: {
          allowedRoles: ["ROLE_ADMINISTRATOR","ROLE_ADMINISTRATIVNO_OSOBLJE"]
        }
      },
      {
        path: "zvanja",
        component: ZvanjaComponent,
        data: {
          allowedRoles: ["ROLE_ADMINISTRATOR","ROLE_ADMINISTRATIVNO_OSOBLJE"]
        }
      },
      {
        path: "zvanja/zvanje/:id",
        component: CardZvanjeComponent,
        data: {
          allowedRoles: ["ROLE_ADMINISTRATOR","ROLE_ADMINISTRATIVNO_OSOBLJE"]
        }
      },
      {
        path: "tipovi-zvanja",
        component: TipoviZvanjaComponent,
        data: {
          allowedRoles: ["ROLE_ADMINISTRATOR","ROLE_ADMINISTRATIVNO_OSOBLJE"]
        }
      },
      {
        path: "tipovi-zvanja/tip-zvanja/:id",
        component: CardTipZvanjaComponent,
        data: {
          allowedRoles: ["ROLE_ADMINISTRATOR","ROLE_ADMINISTRATIVNO_OSOBLJE"]
        }
      },
      {
        path: "naucne-oblasti",
        component: NaucneOblastiComponent,
        data: {
          allowedRoles: ["ROLE_ADMINISTRATOR","ROLE_ADMINISTRATIVNO_OSOBLJE"]
        }
      },
      {
        path: "naucne-oblasti/naucna-oblast/:id",
        component: CardNaucnaOblastComponent,
        data: {
          allowedRoles: ["ROLE_ADMINISTRATOR","ROLE_ADMINISTRATIVNO_OSOBLJE"]
        }
      },
      {
        path: "permissions",
        component: PermissionsComponent,
        data: {
          allowedRoles: ["ROLE_ADMINISTRATOR","ROLE_ADMINISTRATIVNO_OSOBLJE"]
        }
      },
      {
        path: "permissioins/permission/:id",
        component: CardPermissionComponent,
        data: {
          allowedRoles: ["ROLE_ADMINISTRATOR","ROLE_ADMINISTRATIVNO_OSOBLJE"]
        }
      },
      {
        path: "user-permissions",
        component: UserPermissionsComponent,
        data: {
          allowedRoles: ["ROLE_ADMINISTRATOR","ROLE_ADMINISTRATIVNO_OSOBLJE"]
        }
      },
      {
        path: "user-permissions/user-permission/:id",
        component: CardUserPermissionComponent,
        data: {
          allowedRoles: ["ROLE_ADMINISTRATOR","ROLE_ADMINISTRATIVNO_OSOBLJE"]
        }
      },
      {
        path: "pohadjanja-predmeta",
        component: PohadjanjaPredmetaComponent,
        data: {
          allowedRoles: ["ROLE_ADMINISTRATOR","ROLE_ADMINISTRATIVNO_OSOBLJE"]
        }
      },
      {
        path: "pohadjanja-predmeta/pohadjanje-predmeta/:id",
        component: CardPohadjanjePredmetaComponent,
        data: {
          allowedRoles: ["ROLE_ADMINISTRATOR","ROLE_ADMINISTRATIVNO_OSOBLJE"]
        }
      },
      {
        path: "nastavnici-na-realizacijama",
        component: NastavniciNaRealizacijamaComponent,
        data: {
          allowedRoles: ["ROLE_ADMINISTRATOR","ROLE_ADMINISTRATIVNO_OSOBLJE"]
        }
      },
      {
        path: "nastavnici-na-realizacijama/nastavnik-na-realizaciji/:id",
        component: CardNastavnikNaRealizacijiComponent,
        data: {
          allowedRoles: ["ROLE_ADMINISTRATOR","ROLE_ADMINISTRATIVNO_OSOBLJE"]
        }
      },
      {
        path: "realizacije-predmeta",
        component: RealizacijePredmetaComponent,
        data: {
          allowedRoles: ["ROLE_ADMINISTRATOR","ROLE_ADMINISTRATIVNO_OSOBLJE"]
        }
      },
      {
        path: "realizacije-predmeta/realizacija-predmeta/:id",
        component: CardRealizacijaPredmetaComponent,
        data: {
          allowedRoles: ["ROLE_ADMINISTRATOR","ROLE_ADMINISTRATIVNO_OSOBLJE"]
        }
      },
      {
        path: "adrese-univerziteti",
        component: AdreseUniverzitetiComponent,
        data: {
          allowedRoles: ["ROLE_ADMINISTRATOR","ROLE_ADMINISTRATIVNO_OSOBLJE"]
        }
      },
      {
        path: "adrese-univerziteti/adresa-univerzitet/:id",
        component: CardAdresaUniverzitetComponent,
        data: {
          allowedRoles: ["ROLE_ADMINISTRATOR","ROLE_ADMINISTRATIVNO_OSOBLJE"]
        }
      },
      {
        path: "adrese-fakulteti",
        component: AdreseFakultetiComponent,
        data: {
          allowedRoles: ["ROLE_ADMINISTRATOR","ROLE_ADMINISTRATIVNO_OSOBLJE"]
        }
      },
      {
        path: "adrese-fakulteti/adresa-fakultet/:id",
        component: CardAdresaFakultetComponent,
        data: {
          allowedRoles: ["ROLE_ADMINISTRATOR","ROLE_ADMINISTRATIVNO_OSOBLJE"]
        }
      },
      {
        path: "adrese-registrovani-korisnici",
        component: AdreseRegistrovaniKorisniciComponent,
        data: {
          allowedRoles: ["ROLE_ADMINISTRATOR","ROLE_ADMINISTRATIVNO_OSOBLJE"]
        }
      },
      {
        path: "adrese-registrovani-korisnici/adrese-registrovani-korisnik/:id",
        component: CardAdresaRegistrovaniKorisnikComponent,
        data: {
          allowedRoles: ["ROLE_ADMINISTRATOR","ROLE_ADMINISTRATIVNO_OSOBLJE"]
        }
      },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }