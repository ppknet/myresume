import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  @Input() name: string;
  member: {}
  CreateMember() { 
    
  }

  ngOnInit() {
    this.resetMember();
  }
  resetMember() {

    this.member = {};
  }
}

