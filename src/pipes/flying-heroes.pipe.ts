import { Pipe, PipeTransform } from '@angular/core';

import { Flyer } from '../models/heroes';

//PURE PIPE
@Pipe({ name: 'flyingHeroes'}) 
export class FlyingHeroesPipe implements PipeTransform {
	transform(allHeroes: Flyer[]) {
		return allHeroes.filter(hero => hero.canFly);
	}
}
//Copy FlyingHeroesPipe and change the pure flag
@Pipe({
	name: 'flyingHeroesImpure',
	pure: false
})
export class FlyingHeroesImpurePipe extends FlyingHeroesPipe {}