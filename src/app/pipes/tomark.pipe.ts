import{Pipe, PipeTransform,Component} from '@angular/core'

@Pipe({
    name:'tomark'
})

export class TomarkPipe implements PipeTransform
{
    transform(recipe,value){

       // let name=value.replace(/^\w/, c => c.toUpperCase());

        if( recipe && value )
        {
            var highlighted = recipe.replace(/${value}/g, `<span class="red">${value}</span>`);
            return highlighted;

        }
        else return recipe;
        
    }
}