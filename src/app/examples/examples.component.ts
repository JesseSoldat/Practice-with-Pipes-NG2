import { Component, OnInit } from '@angular/core';
import { Heroes } from '../../models/heroes';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.css']
})
export class ExamplesComponent implements OnInit {
	heroes: any[] = [];
	canFly: boolean = true;
	hero: string = '';
	mutate = true;
  constructor() {
  	this.reset();
  }

  ngOnInit() {
  }

  addHero() {
  	let h  = this.hero.trim();
  	if(!h) {return;}
  	let hero = {name: h, canFly: this.canFly};
  
  	if(this.mutate) {
  	
  		this.heroes.push(hero);
  		console.log('Mutate');
  		console.log(this.heroes);
  	} else {
      
  		this.heroes.concat(hero);
  		console.log('Dont Mutate');
  		console.log(this.heroes);
  	}
  	this.hero = '';
  }
  reset() {
  	this.heroes = Heroes.slice();
  }
}
