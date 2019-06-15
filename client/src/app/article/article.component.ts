import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ArticleService } from '../shared/article.service';
import { ArticlesListComponent } from '../articles-list/articles-list.component';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() data: any;
  constructor(
    private datePipe: DatePipe,
    private _articleService: ArticleService,
    private articlesList: ArticlesListComponent) { }

  ngOnInit() {
  }

  public deleteArticle(id):void{
    this._articleService.deteleArticle(id)
      .subscribe(response=>{ 
        // console.log(response);
        for(let i=0; i<this.articlesList.data_array.length; i++){
          if(this.articlesList.data_array[i]._id == id){
            this.articlesList.data_array.splice(i,1);
          }
        }
      },error=>{
        if(<any>error){
          console.log(error);
        }
      });
  }

  //returns formatted date based on date comparison  
  formatDay(date): string{
    let today = new Date();
    let fecha = new Date(date);
    let yesterday = ( d => new Date(d.setDate(d.getDate()-1)) )(new Date);

    if(this.isSameDate(today, fecha))        
      return this.datePipe.transform(fecha,'hh:mm a');
    else if (this.isSameDate(yesterday, fecha))
      return 'Yesterday'
    else                                       
      return this.datePipe.transform(fecha,'MMMM d');
  }
  //checks if two dates are identical
  isSameDate(d1, d2){
    return d1.getDate() === d2.getDate() && d1.getMonth() === d2.getMonth() && d1.getFullYear() === d2.getFullYear();
  }

}