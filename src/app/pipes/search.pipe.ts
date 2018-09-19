import{Pipe, PipeTransform,Component} from '@angular/core'

@Pipe({
    name:'search'
})

export class SearchPipe implements PipeTransform
{
    transform(recipes,value){
        let name=value.replace(/^\w/, c => c.toUpperCase());
        return recipes.filter(recipe=>{
            return recipe.name.includes(name)
        })
    }
}