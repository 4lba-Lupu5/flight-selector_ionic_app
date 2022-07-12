import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'payement',
    loadChildren: () => import('./payement/payement.module').then( m => m.PayementPageModule)
  },
  {
    path: 'payement-reussi',
    loadChildren: () => import('./payement-reussi/payement-reussi.module').then( m => m.PayementReussiPageModule)
  },
  {
    path: 'liste-reservations',
    loadChildren: () => import('./liste-reservations/liste-reservations.module').then( m => m.ListeReservationsPageModule)
  },
  {
    path: 'acceuil',
    loadChildren: () => import('./acceuil/acceuil.module').then( m => m.AcceuilPageModule)
  },
  {
    path: 'con-ins',
    loadChildren: () => import('./con-ins/con-ins.module').then( m => m.ConInsPageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'reservation',
    loadChildren: () => import('./reservation/reservation.module').then( m => m.ReservationPageModule)
  },
  {
    path: 'liste-vols',
    loadChildren: () => import('./liste-vols/liste-vols.module').then( m => m.ListeVolsPageModule)
  },
  {
    path: 'vol-delta-airlines',
    loadChildren: () => import('./vol-delta-airlines/vol-delta-airlines.module').then( m => m.VolDeltaAirlinesPageModule)
  },
  {
    path: 'vol-air-moldova',
    loadChildren: () => import('./vol-air-moldova/vol-air-moldova.module').then( m => m.VolAirMoldovaPageModule)
  },
  {
    path: 'vol-turkish-airlines',
    loadChildren: () => import('./vol-turkish-airlines/vol-turkish-airlines.module').then( m => m.VolTurkishAirlinesPageModule)
  },
  {
    path: 'vol-qatar-airways',
    loadChildren: () => import('./vol-qatar-airways/vol-qatar-airways.module').then( m => m.VolQatarAirwaysPageModule)
  },
  {
    path: 'vol-air-france',
    loadChildren: () => import('./vol-air-france/vol-air-france.module').then( m => m.VolAirFrancePageModule)
  },
  {
    path: 'vol-lufthansa-airlines',
    loadChildren: () => import('./vol-lufthansa-airlines/vol-lufthansa-airlines.module').then( m => m.VolLufthansaAirlinesPageModule)
  },
  {
    path: 'vol-air-austral',
    loadChildren: () => import('./vol-air-austral/vol-air-austral.module').then( m => m.VolAirAustralPageModule)
  },
  {
    path: 'payer-delta',
    loadChildren: () => import('./payer-delta/payer-delta.module').then( m => m.PayerDeltaPageModule)
  },
  {
    path: 'payer-moldova',
    loadChildren: () => import('./payer-moldova/payer-moldova.module').then( m => m.PayerMoldovaPageModule)
  },
  {
    path: 'payer-turkish',
    loadChildren: () => import('./payer-turkish/payer-turkish.module').then( m => m.PayerTurkishPageModule)
  },
  {
    path: 'payer-qatar',
    loadChildren: () => import('./payer-qatar/payer-qatar.module').then( m => m.PayerQatarPageModule)
  },
  {
    path: 'payer-france',
    loadChildren: () => import('./payer-france/payer-france.module').then( m => m.PayerFrancePageModule)
  },
  {
    path: 'payer-lufthansa',
    loadChildren: () => import('./payer-lufthansa/payer-lufthansa.module').then( m => m.PayerLufthansaPageModule)
  },
  {
    path: 'payer-austral',
    loadChildren: () => import('./payer-austral/payer-austral.module').then( m => m.PayerAustralPageModule)
  },
  {
    path: 'payer-burkina',
    loadChildren: () => import('./payer-burkina/payer-burkina.module').then( m => m.PayerBurkinaPageModule)
  },
  {
    path: 'vol-air-burkina',
    loadChildren: () => import('./vol-air-burkina/vol-air-burkina.module').then( m => m.VolAirBurkinaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
