import { Component } from '@angular/core'
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent {
  noticesArray = [
    {
      titulo: 'Noticia 1',
      img: '',
      likes: 2347
    },
    {
      titulo: 'Noticia 2',
      img: '',
      likes: 543543
    },
    {
      titulo: 'Noticia 3',
      img: '',
      likes: 5343
    },
    {
      titulo: 'Noticia 4',
      img: '',
      likes: 53343
    }
  ]

  constructor(private toastr: ToastrService) {}

  onVerify(): void {
    this.toastr.info('Verificado', '', {
      timeOut: 5000
    })
  }
}
