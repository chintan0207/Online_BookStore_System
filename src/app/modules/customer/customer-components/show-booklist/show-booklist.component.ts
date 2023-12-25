import { Component } from '@angular/core';
import { Book } from '../../../../book';
import { BookService } from '../../../../book.service';
import { Router } from '@angular/router';

import { error } from 'console';

@Component({
  selector: 'app-show-booklist',
  templateUrl: './show-booklist.component.html',
  styleUrl: './show-booklist.component.css'
})
export class ShowBooklistComponent {

  
  books: Book[];
  searchTerm: string = '';

  constructor(private bookService: BookService,
    private router: Router){

  }

  ngOnInit(): void {
    this.getBooks();
    
  }



  private getBooks(){
    event?.preventDefault();
      this.bookService.getBooksList().subscribe((data:any) => {
        this.books = data;
      })
  }

  

  bookDetails(id: number){
        this.router.navigateByUrl(`customer/book-details/${id}`);
  }

  // addMyBook(id: number){
  //   this.bookService.getBookById(id).subscribe((res) =>{
  //     this.book = res;
  //     console.log(res)
  //     this.addBookToMyBooks();
  //   },error => console.log(error))
    
  // }

  // addBookToMyBooks(){
  //   this.myBookService.addBookToMyBooks(this.book).subscribe
  // }


  onSearch() {
    this.bookService.getBooksByName(this.searchTerm).subscribe((data: any) => {
      this.books = data;
    });
   

    }

}
