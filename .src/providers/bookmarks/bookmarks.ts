import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import { Storage} from "@ionic/storage"
@Injectable()
export class BookmarksProvider {

  constructor(public http: Http,
              public storage: Storage) {
  }

  bookMark(){
    return this.storage.get('bookmarks').then(bookmarks=>{
      if(bookmarks == null){
        bookmarks = [];
      }
      return bookmarks
    })
  }

  isBookmared(id : number){
    return this.bookMark().then(salon => {
      for (let i = 0; i< salon.length; i++){
        if (salon[i].id == id){
          return true
        }
      }
      return false;
    })
  }

  addBookmark(salon:any){
    this.bookMark().then(salon =>{
      salon.push(salon);
      this.save(salon)
    })
  }

  save(salon){
    this.storage.set('bookmarks', salon);
  }

  removeBookmared(salon: any){
    this.bookMark().then(salon =>{
      salon.splice(salon.findIndex(elm => elm.id == salon.id),1)
      this.save(salon)
    })
  }
}
