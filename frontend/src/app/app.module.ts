import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePublicComponent } from './public/home/home.component';
import { HomePrivateComponent } from './private/home/home.component';
import { AdministratorComponent } from './private/home/administrator/administrator.component';
import { NastavnikComponent } from './private/home/nastavnik/nastavnik.component';
import { StudentComponent } from './private/home/student/student.component';
import { AdministrativnoOsobljeComponent } from './private/home/administrativno-osoblje/administrativno-osoblje.component';
import { DrzaveComponent } from './private/home/administrator/drzave/drzave.component';
import { MestaComponent } from './private/home/administrator/mesta/mesta.component';
import { AdreseComponent } from './private/home/administrator/adrese/adrese.component';
import { AdreseUniverzitetiComponent } from './private/home/administrator/adrese-univerziteti/adrese-univerziteti.component';
import { AdreseFakultetiComponent } from './private/home/administrator/adrese-fakulteti/adrese-fakulteti.component';
import { AdreseRegistrovaniKorisniciComponent } from './private/home/administrator/adrese-registrovani-korisnici/adrese-registrovani-korisnici.component';
import { UniverzitetiComponent } from './private/home/administrator/univerziteti/univerziteti.component';
import { StudentiNaGodiniComponent } from './private/home/administrator/studenti-na-godini/studenti-na-godini.component';
import { IshodiComponent } from './private/home/administrator/ishodi/ishodi.component';
import { RealizacijePredmetaComponent } from './private/home/administrator/realizacije-predmeta/realizacije-predmeta.component';
import { NastavniciNaRealizacijamaComponent } from './private/home/administrator/nastavnici-na-realizacijama/nastavnici-na-realizacijama.component';
import { PohadjanjaPredmetaComponent } from './private/home/administrator/pohadjanja-predmeta/pohadjanja-predmeta.component';
import { RegistrovaniKorisniciComponent } from './private/home/administrator/registrovani-korisnici/registrovani-korisnici.component';
import { NastavniciComponent } from './private/home/administrator/nastavnici/nastavnici.component';
import { ZvanjaComponent } from './private/home/administrator/zvanja/zvanja.component';
import { TipoviZvanjaComponent } from './private/home/administrator/tipovi-zvanja/tipovi-zvanja.component';
import { NaucneOblastiComponent } from './private/home/administrator/naucne-oblasti/naucne-oblasti.component';
import { UserPermissionsComponent } from './private/home/administrator/user-permissions/user-permissions.component';
import { PermissionsComponent } from './private/home/administrator/permissions/permissions.component';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTreeModule } from '@angular/material/tree';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {A11yModule} from '@angular/cdk/a11y';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { TabelaDrzaveComponent } from './private/home/administrator/drzave/tabela-drzave/tabela-drzave.component';
import { CreateDrzavaComponent } from './private/home/administrator/drzave/create-drzava/create-drzava.component';
import { EditDrzavaComponent } from './private/home/administrator/drzave/edit-drzava/edit-drzava.component';
import { CardDrzavaComponent } from './private/home/administrator/drzave/card-drzava/card-drzava.component';
import { CreateMestoComponent } from './private/home/administrator/mesta/create-mesto/create-mesto.component';
import { EditMestoComponent } from './private/home/administrator/mesta/edit-mesto/edit-mesto.component';
import { CardMestoComponent } from './private/home/administrator/mesta/card-mesto/card-mesto.component';
import { TabelaAdreseComponent } from './private/home/administrator/adrese/tabela-adrese/tabela-adrese.component';
import { TabelaMestaComponent } from './private/home/administrator/mesta/tabela-mesta/tabela-mesta.component';
import { CardAdresaComponent } from './private/home/administrator/adrese/card-adresa/card-adresa.component';
import { EditAdresaComponent } from './private/home/administrator/adrese/edit-adresa/edit-adresa.component';
import { CreateAdresaComponent } from './private/home/administrator/adrese/create-adresa/create-adresa.component';
import { CreateUniverzitetComponent } from './private/home/administrator/univerziteti/create-univerzitet/create-univerzitet.component';
import { EditUniverzitetComponent } from './private/home/administrator/univerziteti/edit-univerzitet/edit-univerzitet.component';
import { TabelaUniverzitetiComponent } from './private/home/administrator/univerziteti/tabela-univerziteti/tabela-univerziteti.component';
import { CardUniverzitetComponent } from './private/home/administrator/univerziteti/card-univerzitet/card-univerzitet.component';
import { TabelaFakultetiComponent } from './private/home/administrator/fakulteti/tabela-fakulteti/tabela-fakulteti.component';
import { CardFakultetComponent } from './private/home/administrator/fakulteti/card-fakultet/card-fakultet.component';
import { EditFakultetComponent } from './private/home/administrator/fakulteti/edit-fakultet/edit-fakultet.component';
import { CreateFakultetComponent } from './private/home/administrator/fakulteti/create-fakultet/create-fakultet.component';
import { CardIshodComponent } from './private/home/administrator/ishodi/card-ishod/card-ishod.component';
import { EditIshodComponent } from './private/home/administrator/ishodi/edit-ishod/edit-ishod.component';
import { CreateIshodComponent } from './private/home/administrator/ishodi/create-ishod/create-ishod.component';
import { TabelaIshodiComponent } from './private/home/administrator/ishodi/tabela-ishodi/tabela-ishodi.component';
import { TabelaNastavniciComponent } from './private/home/administrator/nastavnici/tabela-nastavnici/tabela-nastavnici.component';
import { CreateNastavnikComponent } from './private/home/administrator/nastavnici/create-nastavnik/create-nastavnik.component';
import { EditNastavnikComponent } from './private/home/administrator/nastavnici/edit-nastavnik/edit-nastavnik.component';
import { CardNastavnikComponent } from './private/home/administrator/nastavnici/card-nastavnik/card-nastavnik.component';
import { CardNastavnikNaRealizacijiComponent } from './private/home/administrator/nastavnici-na-realizacijama/card-nastavnik-na-realizaciji/card-nastavnik-na-realizaciji.component';
import { EditNastavnikNaRealizacijiComponent } from './private/home/administrator/nastavnici-na-realizacijama/edit-nastavnik-na-realizaciji/edit-nastavnik-na-realizaciji.component';
import { CreateNastavnikNaRealizacijiComponent } from './private/home/administrator/nastavnici-na-realizacijama/create-nastavnik-na-realizaciji/create-nastavnik-na-realizaciji.component';
import { TabelaNastavniciNaRealizacijamaComponent } from './private/home/administrator/nastavnici-na-realizacijama/tabela-nastavnici-na-realizacijama/tabela-nastavnici-na-realizacijama.component';
import { TabelaNaucneOblastiComponent } from './private/home/administrator/naucne-oblasti/tabela-naucne-oblasti/tabela-naucne-oblasti.component';
import { CreateNaucnaOblastComponent } from './private/home/administrator/naucne-oblasti/create-naucna-oblast/create-naucna-oblast.component';
import { EditNaucnaOblastComponent } from './private/home/administrator/naucne-oblasti/edit-naucna-oblast/edit-naucna-oblast.component';
import { CardNaucnaOblastComponent } from './private/home/administrator/naucne-oblasti/card-naucna-oblast/card-naucna-oblast.component';
import { CardPermissionComponent } from './private/home/administrator/permissions/card-permission/card-permission.component';
import { EditPermissionComponent } from './private/home/administrator/permissions/edit-permission/edit-permission.component';
import { CreatePermissionComponent } from './private/home/administrator/permissions/create-permission/create-permission.component';
import { TabelaPermissionsComponent } from './private/home/administrator/permissions/tabela-permissions/tabela-permissions.component';
import { TabelaPohadjanjaPredmetaComponent } from './private/home/administrator/pohadjanja-predmeta/tabela-pohadjanja-predmeta/tabela-pohadjanja-predmeta.component';
import { CreatePohadjanjePredmetaComponent } from './private/home/administrator/pohadjanja-predmeta/create-pohadjanje-predmeta/create-pohadjanje-predmeta.component';
import { EditPohadjanjePredmetaComponent } from './private/home/administrator/pohadjanja-predmeta/edit-pohadjanje-predmeta/edit-pohadjanje-predmeta.component';
import { CardPohadjanjePredmetaComponent } from './private/home/administrator/pohadjanja-predmeta/card-pohadjanje-predmeta/card-pohadjanje-predmeta.component';
import { TabelaRealizacijePredmetaComponent } from './private/home/administrator/realizacije-predmeta/tabela-realizacije-predmeta/tabela-realizacije-predmeta.component';
import { CreateRealizacijaPredmetaComponent } from './private/home/administrator/realizacije-predmeta/create-realizacija-predmeta/create-realizacija-predmeta.component';
import { EditRealizacijaPredmetaComponent } from './private/home/administrator/realizacije-predmeta/edit-realizacija-predmeta/edit-realizacija-predmeta.component';
import { CardRealizacijaPredmetaComponent } from './private/home/administrator/realizacije-predmeta/card-realizacija-predmeta/card-realizacija-predmeta.component';
import { CardRegistrovaniKorisnikComponent } from './private/home/administrator/registrovani-korisnici/card-registrovani-korisnik/card-registrovani-korisnik.component';
import { EditRegistrovaniKorisnikComponent } from './private/home/administrator/registrovani-korisnici/edit-registrovani-korisnik/edit-registrovani-korisnik.component';
import { CreateRegistrovaniKorisnikComponent } from './private/home/administrator/registrovani-korisnici/create-registrovani-korisnik/create-registrovani-korisnik.component';
import { TabelaRegistrovaniKorisniciComponent } from './private/home/administrator/registrovani-korisnici/tabela-registrovani-korisnici/tabela-registrovani-korisnici.component';
import { TabelaStudentiNaGodiniComponent } from './private/home/administrator/studenti-na-godini/tabela-studenti-na-godini/tabela-studenti-na-godini.component';
import { CreateStudentNaGodiniComponent } from './private/home/administrator/studenti-na-godini/create-student-na-godini/create-student-na-godini.component';
import { EditStudentNaGodiniComponent } from './private/home/administrator/studenti-na-godini/edit-student-na-godini/edit-student-na-godini.component';
import { CardStudentNaGodiniComponent } from './private/home/administrator/studenti-na-godini/card-student-na-godini/card-student-na-godini.component';
import { TabelaTipoviZvanjaComponent } from './private/home/administrator/tipovi-zvanja/tabela-tipovi-zvanja/tabela-tipovi-zvanja.component';
import { CreateTipZvanjaComponent } from './private/home/administrator/tipovi-zvanja/create-tip-zvanja/create-tip-zvanja.component';
import { EditTipZvanjaComponent } from './private/home/administrator/tipovi-zvanja/edit-tip-zvanja/edit-tip-zvanja.component';
import { CardTipZvanjaComponent } from './private/home/administrator/tipovi-zvanja/card-tip-zvanja/card-tip-zvanja.component';
import { EditUserPermissionComponent } from './private/home/administrator/user-permissions/edit-user-permission/edit-user-permission.component';
import { CreateUserPermissionComponent } from './private/home/administrator/user-permissions/create-user-permission/create-user-permission.component';
import { CardUserPermissionComponent } from './private/home/administrator/user-permissions/card-user-permission/card-user-permission.component';
import { TabelaUserPermissionsComponent } from './private/home/administrator/user-permissions/tabela-user-permissions/tabela-user-permissions.component';
import { TabelaZvanjaComponent } from './private/home/administrator/zvanja/tabela-zvanja/tabela-zvanja.component';
import { CardZvanjeComponent } from './private/home/administrator/zvanja/card-zvanje/card-zvanje.component';
import { CreateZvanjeComponent } from './private/home/administrator/zvanja/create-zvanje/create-zvanje.component';
import { EditZvanjeComponent } from './private/home/administrator/zvanja/edit-zvanje/edit-zvanje.component';
import { EditAdresaUniverzitetComponent } from './private/home/administrator/adrese-univerziteti/edit-adresa-univerzitet/edit-adresa-univerzitet.component';
import { CreateAdresaUniverzitetComponent } from './private/home/administrator/adrese-univerziteti/create-adresa-univerzitet/create-adresa-univerzitet.component';
import { CardAdresaUniverzitetComponent } from './private/home/administrator/adrese-univerziteti/card-adresa-univerzitet/card-adresa-univerzitet.component';
import { TabelaAdreseUniverzitetaComponent } from './private/home/administrator/adrese-univerziteti/tabela-adrese-univerziteta/tabela-adrese-univerziteta.component';
import { TabelaAdreseFakultetiComponent } from './private/home/administrator/adrese-fakulteti/tabela-adrese-fakulteti/tabela-adrese-fakulteti.component';
import { CardAdresaFakultetComponent } from './private/home/administrator/adrese-fakulteti/card-adresa-fakultet/card-adresa-fakultet.component';
import { CreateAdresaFakultetComponent } from './private/home/administrator/adrese-fakulteti/create-adresa-fakultet/create-adresa-fakultet.component';
import { EditAdresaFakultetComponent } from './private/home/administrator/adrese-fakulteti/edit-adresa-fakultet/edit-adresa-fakultet.component';
import { EditAdresaRegistrovaniKorisnikComponent } from './private/home/administrator/adrese-registrovani-korisnici/edit-adresa-registrovani-korisnik/edit-adresa-registrovani-korisnik.component';
import { CreateAdresaRegistrovaniKorisnikComponent } from './private/home/administrator/adrese-registrovani-korisnici/create-adresa-registrovani-korisnik/create-adresa-registrovani-korisnik.component';
import { CardAdresaRegistrovaniKorisnikComponent } from './private/home/administrator/adrese-registrovani-korisnici/card-adresa-registrovani-korisnik/card-adresa-registrovani-korisnik.component';
import { TabelaAdreseRegistrovaniKorisniciComponent } from './private/home/administrator/adrese-registrovani-korisnici/tabela-adrese-registrovani-korisnici/tabela-adrese-registrovani-korisnici.component';
import { FakultetiComponent } from './private/home/administrator/fakulteti/fakulteti.component';
import { StudijskiProgramiComponent } from './private/home/administrator/studijski-programi/studijski-programi.component';
import { CardStudijskiProgramComponent } from './private/home/administrator/studijski-programi/card-studijski-program/card-studijski-program.component';
import { CreateStudijskiProgramComponent } from './private/home/administrator/studijski-programi/create-studijski-program/create-studijski-program.component';
import { EditStudijskiProgramComponent } from './private/home/administrator/studijski-programi/edit-studijski-program/edit-studijski-program.component';
import { TabelaStudijskiProgramiComponent } from './private/home/administrator/studijski-programi/tabela-studijski-programi/tabela-studijski-programi.component';
import { GodineStudijaComponent } from './private/home/administrator/godine-studija/godine-studija.component';
import { CardGodinaStudijaComponent } from './private/home/administrator/godine-studija/card-godina-studija/card-godina-studija.component';
import { TabelaGodineStudijaComponent } from './private/home/administrator/godine-studija/tabela-godine-studija/tabela-godine-studija.component';
import { EditGodinaStudijaComponent } from './private/home/administrator/godine-studija/edit-godina-studija/edit-godina-studija.component';
import { CreateGodinaStudijaComponent } from './private/home/administrator/godine-studija/create-godina-studija/create-godina-studija.component';
import { PredmetiComponent } from './private/home/administrator/predmeti/predmeti.component';
import { CardPredmetComponent } from './private/home/administrator/predmeti/card-predmet/card-predmet.component';
import { CreatePredmetComponent } from './private/home/administrator/predmeti/create-predmet/create-predmet.component';
import { EditPredmetComponent } from './private/home/administrator/predmeti/edit-predmet/edit-predmet.component';
import { TabelaPredmetiComponent } from './private/home/administrator/predmeti/tabela-predmeti/tabela-predmeti.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePublicComponent,
    HomePrivateComponent,
    UniverzitetiComponent,
    AdministratorComponent,
    NastavnikComponent,
    StudentComponent,
    AdministrativnoOsobljeComponent,
    DrzaveComponent,
    MestaComponent,
    AdreseComponent,
    AdreseUniverzitetiComponent,
    AdreseFakultetiComponent,
    AdreseRegistrovaniKorisniciComponent,
    UniverzitetiComponent,
    StudentiNaGodiniComponent,
    IshodiComponent,
    RealizacijePredmetaComponent,
    NastavniciNaRealizacijamaComponent,
    PohadjanjaPredmetaComponent,
    RegistrovaniKorisniciComponent,
    NastavniciComponent,
    ZvanjaComponent,
    TipoviZvanjaComponent,
    NaucneOblastiComponent,
    UserPermissionsComponent,
    PermissionsComponent,
    TabelaDrzaveComponent,
    CreateDrzavaComponent,
    EditDrzavaComponent,
    CardDrzavaComponent,
    TabelaMestaComponent,
    CreateMestoComponent,
    EditMestoComponent,
    CardMestoComponent,
    TabelaAdreseComponent,
    TabelaMestaComponent,
    CardAdresaComponent,
    EditAdresaComponent,
    CreateAdresaComponent,
    CreateUniverzitetComponent,
    EditUniverzitetComponent,
    TabelaUniverzitetiComponent,
    CardUniverzitetComponent,
    TabelaFakultetiComponent,
    CardFakultetComponent,
    EditFakultetComponent,
    CreateFakultetComponent,
    CardIshodComponent,
    EditIshodComponent,
    CreateIshodComponent,
    TabelaIshodiComponent,
    TabelaNastavniciComponent,
    CreateNastavnikComponent,
    EditNastavnikComponent,
    CardNastavnikComponent,
    CardNastavnikNaRealizacijiComponent,
    EditNastavnikNaRealizacijiComponent,
    CreateNastavnikNaRealizacijiComponent,
    TabelaNastavniciNaRealizacijamaComponent,
    TabelaNaucneOblastiComponent,
    CreateNaucnaOblastComponent,
    EditNaucnaOblastComponent,
    CardNaucnaOblastComponent,
    CardPermissionComponent,
    EditPermissionComponent,
    CreatePermissionComponent,
    TabelaPermissionsComponent,
    TabelaPohadjanjaPredmetaComponent,
    CreatePohadjanjePredmetaComponent,
    EditPohadjanjePredmetaComponent,
    CardPohadjanjePredmetaComponent,
    TabelaRealizacijePredmetaComponent,
    CreateRealizacijaPredmetaComponent,
    EditRealizacijaPredmetaComponent,
    CardRealizacijaPredmetaComponent,
    CardRegistrovaniKorisnikComponent,
    EditRegistrovaniKorisnikComponent,
    CreateRegistrovaniKorisnikComponent,
    TabelaRegistrovaniKorisniciComponent,
    TabelaStudentiNaGodiniComponent,
    CreateStudentNaGodiniComponent,
    EditStudentNaGodiniComponent,
    CardStudentNaGodiniComponent,
    TabelaTipoviZvanjaComponent,
    CreateTipZvanjaComponent,
    EditTipZvanjaComponent,
    CardTipZvanjaComponent,
    EditUserPermissionComponent,
    CreateUserPermissionComponent,
    CardUserPermissionComponent,
    TabelaUserPermissionsComponent,
    TabelaZvanjaComponent,
    CardZvanjeComponent,
    CreateZvanjeComponent,
    EditZvanjeComponent,
    EditAdresaUniverzitetComponent,
    CreateAdresaUniverzitetComponent,
    CardAdresaUniverzitetComponent,
    TabelaAdreseUniverzitetaComponent,
    TabelaAdreseFakultetiComponent,
    CardAdresaFakultetComponent,
    CreateAdresaFakultetComponent,
    EditAdresaFakultetComponent,
    EditAdresaRegistrovaniKorisnikComponent,
    CreateAdresaRegistrovaniKorisnikComponent,
    CardAdresaRegistrovaniKorisnikComponent,
    TabelaAdreseRegistrovaniKorisniciComponent,
    FakultetiComponent,
    StudijskiProgramiComponent,
    CardStudijskiProgramComponent,
    CreateStudijskiProgramComponent,
    EditStudijskiProgramComponent,
    TabelaStudijskiProgramiComponent,
    GodineStudijaComponent,
    CardGodinaStudijaComponent,
    TabelaGodineStudijaComponent,
    EditGodinaStudijaComponent,
    CreateGodinaStudijaComponent,
    PredmetiComponent,
    CardPredmetComponent,
    CreatePredmetComponent,
    EditPredmetComponent,
    TabelaPredmetiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    AppRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTreeModule,
    MatTabsModule,
    DragDropModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatIconModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatRippleModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
    PortalModule,
    ScrollingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
