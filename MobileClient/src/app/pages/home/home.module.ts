import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import {MainSearchBarComponent} from './main-search-bar/main-search-bar.component';
import {TranslateModule} from '@ngx-translate/core';
import {FooterComponent} from '../../components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    TranslateModule,
  ],
  declarations: [HomePage, MainSearchBarComponent, FooterComponent]
})
export class HomePageModule {}
