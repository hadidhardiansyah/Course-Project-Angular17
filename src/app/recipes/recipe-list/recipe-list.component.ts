import { Component } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Recipe 1', 'Desc 1', 'https://www.skinnytaste.com/wp-content/uploads/2023/09/Lasagna-12.jpg'),
    new Recipe('Recipe 2', 'Desc 2', 'https://www.skinnytaste.com/wp-content/uploads/2023/09/Lasagna-12.jpg')
  ];
}
