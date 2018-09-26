import{Pipe, PipeTransform,Component} from '@angular/core'

@Pipe({
    name:'search'
})

export class SearchPipe implements PipeTransform
{
    transform(recipes,value){

        let name=value.replace(/^\w/, c => c.toUpperCase());//first alphanumeric character to Upper Case

        if( recipes && value )
        {
            return recipes.filter(recipe=>{
            return recipe.name.includes(name)})
        }
        else return recipes;
        
    }
}