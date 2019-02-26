import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';

// modules
import { AppRoutingModule } from './app-routing.module';

// services
import { AlertService } from './services/alert.service';
import { AuthService } from './services/auth.service';

// pages
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { BoatsComponent } from './pages/boats/boats.component';
import { EditComponent } from './pages/edit/edit.component';

// components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';

// pages/*/components
import { BoatCardComponent } from './pages/boats/components/boat-card/boat-card.component';
import { CreateComponent } from './pages/create/create.component';

const appRoutes: Routes = [{ path: 'login', component: LoginComponent }];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    BoatsComponent,
    BoatCardComponent,
    EditComponent,
    CreateComponent,
    UnauthorizedComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true }),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule
  ],
  providers: [AuthService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule {}
