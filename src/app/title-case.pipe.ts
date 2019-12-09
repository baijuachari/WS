import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {
  // convert the sentence with all prepositions in lower case (of, the etc) and the rest in with first character Capital letter
  // if the preposition is first word, then it should start with Capital.
  transform(value: string): any {
    return null;
  }

}
