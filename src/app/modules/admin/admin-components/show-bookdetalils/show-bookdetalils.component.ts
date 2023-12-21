import { Component } from '@angular/core';
import { Book } from '../../../../book';
import { BookService } from '../../../../book.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show-bookdetalils',
  templateUrl: './show-bookdetalils.component.html',
  styleUrl: './show-bookdetalils.component.css'
})
export class ShowBookdetalilsComponent {

  id:number;
  book: Book = new Book();

  constructor(private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router){ }


    ngOnInit(): void {
        this.id = this.route.snapshot.params['id'];
        this.bookService.getBookById(this.id).subscribe(data =>{
          this.book = data;
        },error => console.log(error))
    }


}
