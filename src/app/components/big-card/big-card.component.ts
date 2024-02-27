import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {
@Input()
photoCover:string = ""
@Input()
cardTitle:string = ""
@Input()
cardDescription:string = "O reinado da Marvel Studios conta como a empresa se livrou da falência e se tornou um dos negócios mais lucrativos do planeta. Frente ao fracasso dos filmes mais recentes, estaria esse império ameaçado?"
@Input()
Id:string = "0"

}
