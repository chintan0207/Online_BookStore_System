import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { error } from 'console';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent implements OnInit {

  book: Book = new Book();
  validateForm: FormGroup;

  constructor(private bookService: BookService,
    private router: Router, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      
      id: [this.book.id, Validators.required],
      bookName: [this.book.bookName, Validators.required],
      author: [this.book.author, Validators.required],
      bookPrice: [this.book.bookPrice, Validators.required],

    })

  }

  saveBook() {
    this.bookService.addBook(this.book).subscribe(data => {
      console.log(data);
      this.goToBookList();
    }, error => console.log(error))
  }

  goToBookList() {
    this.router.navigate(['/booklist'])
  }


  onSubmit() {
    if (this.validateForm) {
      if (this.validateForm.valid) {

        this.book = { ...this.validateForm.value };
        console.log(this.book);
         this.saveBook();
      } else {
        alert('Please fill in all required fields');
      }
    }
  }

}
