import { Component, OnInit } from '@angular/core';
import { Book } from '../../../../book';
import { BookService } from '../../../../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-booklist',
  templateUrl: './show-booklist.component.html',
  styleUrl: './show-booklist.component.css'
})
export class ShowBooklistComponent implements OnInit {

  
  books: Book[];
  originalBooks: Book[];
  searchTerm: string = '';

  constructor(private bookService: BookService,
    private router: Router){

  }

  ngOnInit(): void {
    this.getBooks();
  }

  private getBooks(){
    event?.preventDefault();
      this.bookService.getBooksList().subscribe(data => {
        this.books = data;
      })
  }

  updateBook(id: number){
  
    this.router.navigateByUrl(`admin/update-book/${id}`);
    
  }

  deleteBook(id: number){
        this.bookService.deleteBook(id).subscribe(data =>{
          console.log(data);
          this.getBooks();
        })
  }

  bookDetails(id: number){
        this.router.navigateByUrl(`admin/show-bookdetails/${id}`)
  }

  
  onSearch() {
    this.bookService.getBooksByName(this.searchTerm).subscribe((data: any) => {
      this.books = data;
    });
   

}

}
