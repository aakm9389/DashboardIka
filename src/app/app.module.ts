import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { VenteparmoisComponent } from './statistique/VenteParMois/venteparmois/venteparmois.component';
import { AchatParmoisComponent } from './statistique/achat-parmois/achat-parmois.component';
import { CommandeParMoisComponent } from './statistique/commande-par-mois/commande-par-mois.component';
import { NombreClientComponent } from './statistique/nombre-client/nombre-client.component';
import { RapportComponent } from './rapport/rapport.component';
import { CanauxComponent } from './rapport/canaux/canaux.component';
import { UtilisateurComponent } from './rapport/utilisateur/utilisateur.component';
import { ConversionComponent } from './rapport/conversion/conversion.component';

@NgModule({
  declarations: [
    AppComponent,
    StatistiqueComponent,
    VenteparmoisComponent,
    AchatParmoisComponent,
    CommandeParMoisComponent,
    NombreClientComponent,
    RapportComponent,
    CanauxComponent,
    UtilisateurComponent,
    ConversionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
