import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ChatDefaultPageComponent } from './components/main-container/chat-area/chat-default-page/chat-default-page.component';
import { ChatRoomComponent } from './components/main-container/chat-area/chat-room/chat-room.component';
import { MainContainerComponent } from './components/main-container/main-container.component';

const routes: Routes = [
{
  path: '',
  component: MainContainerComponent,
  children:[
    { path : 'room/:id',component : ChatRoomComponent },
    { path : '',component : ChatDefaultPageComponent}
  ]
},
 {
   path : 'login',component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
