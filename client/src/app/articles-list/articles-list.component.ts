import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../shared/article.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css'],
  providers:[ArticleService]
})
export class ArticlesListComponent implements OnInit {
  
  public data_array = [];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    console.log('Article-List component ready.');
    this.getAllPost();
  }

  getAllPost(){
    this.articleService.getArticles()
    .subscribe(result => {
        this.data_array = result['articles'];
      },
      error=>{
        console.log(error);
      }
    );
  }

  printURL(url){
    console.log('La url del articulo: ' + url);
  }
}
