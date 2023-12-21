import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {

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
      this.bookService.getBooksList().subscribe(data => {
        this.books = data;
      })
  }

  updateBook(id: number){
     this.router.navigate(['/updatebook',id])
    
  }

  deleteBook(id: number){
        this.bookService.deleteBook(id).subscribe(data =>{
          console.log(data);
          this.getBooks();
        })
  }

  bookDetails(id: number){
        this.router.navigate(['/bookdetails',id]);
  }

  

  onSearch() {
    this.bookService.getBooksByName(this.searchTerm).subscribe((data: any) => {
      this.books = data;
    });
   

}





}

