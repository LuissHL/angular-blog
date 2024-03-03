import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NoticiasService } from '../../service/noticias.service';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  photoCover:string = ""
  contentTitle:string = ""
  contentDescription:string = ""
  private id:string | null = "0"

  constructor(
    private route:ActivatedRoute,
    private notService:NoticiasService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get("id")
    )

    if(this.id != null) {
      let result = this.notService.buscar(this.id)
      this.photoCover = result.photoCover
      this.contentTitle = result.title
      this.contentDescription =result.description
    }
  }

}
