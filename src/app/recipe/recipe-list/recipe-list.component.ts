import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Steak', 'Using this recipe you can prepare a delicious steak', 'https://www.thespruceeats.com/thmb/kxu3tr3tIob-' +
    'VCMNTKc5b7g2VFA=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/marinated-top-round-steak-3060302-hero-02-' +
    'ed071d5d7e584bea82857112aa734a94.jpg'),
    new Recipe('Steak2', '2Using this recipe you can prepare a delicious steak', 'https://www.thespruceeats.com/thmb/kxu3tr3tIob-' +
      'VCMNTKc5b7g2VFA=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/marinated-top-round-steak-3060302-hero-02-' +
      'ed071d5d7e584bea82857112aa734a94.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
