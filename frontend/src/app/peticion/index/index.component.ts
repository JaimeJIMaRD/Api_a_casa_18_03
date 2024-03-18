import { Component, OnInit } from '@angular/core';
import { PeticionService } from '../peticion.service';
import { Peticion } from '../peticion';
import { AuthService } from 'src/app/shared/auth.service';
import { AuthStateService } from 'src/app/shared/auth-state.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/shared/token.service';
      
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
      
  peticiones: Peticion[] = [];
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public peticionService: PeticionService,
    private authService: AuthService,
    private auth: AuthStateService,
    public token: TokenService,
    public routes: Router,
    ) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.peticionService.getAll().subscribe((data: Peticion[])=>{
      this.peticiones = data;
      console.log(this.peticiones);
    })  
    this.auth.userAuthState.subscribe((val) => {
      this.isSignedIn = val;
    });
    this.getUserLogged();
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deletePeticion(id:number){
    this.peticionService.delete(id).subscribe(res => {
         this.peticiones = this.peticiones.filter(item => item.id !== id);
         console.log('Post deleted successfully!');
    })
  }
    getUserLogged(){
      this.authService.profileUser().subscribe((data)=>{
        this.loggedUser = data;
        console.log(this.loggedUser)
      })
      console.log(this.loggedUser)
    }
  loggedUser(loggedUser: any) {
    throw new Error('Method not implemented.');
  }
}