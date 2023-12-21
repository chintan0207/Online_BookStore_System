import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  id:number;

  private baseURL = "http://localhost:8080/api/book";

  constructor(private httpclient: HttpClient) { }

  getBooksList(): Observable<Book[]>{
    return this.httpclient.get<Book[]>("http://localhost:8080/api/book/name/");
  }

  deleteBook(id: number): Observable <object>{
    return this.httpclient.delete<object>(`${this.baseURL}/${id}`);
  } 

  addBook(book: Book): Observable<object>{
   return  this.httpclient.post(`${this.baseURL}/addbook`,book)
  }

  getBookById(id:number): Observable<Book>{
   return this.httpclient.get<Book>(`${this.baseURL}/${id}`)
  }

  updateBook(id: number, book: Book): Observable<object>{
    return this.httpclient.put(`${this.baseURL}/${id}`,book)
  }

  getBooksByName(bookName: string): Observable<any> {
    return this.httpclient.get(`${this.baseURL}/name/${bookName}`);
  }

}
