import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { MaterialComponent } from './material/material.component';
import { FormEditorComponent } from './form-editor/form-editor.component';
import { FilterComponent } from './filter/filter.component';
import { AsyncComponent } from './async/async.component';
import { TagsInputComponent } from './tags-input/tags-input.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ExpandableTableComponent } from './expandable-table/expandable-table.component';

import { MyErrorDirective } from './directives/attr-error';
import { MyCustomIfDirective } from './directives/structure-if';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    TopBarComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    MaterialComponent,
    FormEditorComponent,
    FilterComponent,
    AsyncComponent,
    TagsInputComponent,
    ExpandableTableComponent,
    MyErrorDirective,
    MyCustomIfDirective
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    FormsModule,
    MatCheckboxModule,
    MatSelectModule,
    MatInputModule,
    MatAutocompleteModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    MatIconModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
