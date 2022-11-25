import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(productList:any[],filterString:string,propName:string) {
    const result:any=[];
    if(!productList || filterString=='' || propName==''){
      return productList
    }
    productList.forEach((products:any)=>{
      if(products[propName].trim().toLowerCase().includes(filterString.toLowerCase())){
        result.push(products)
      }
    })
    return result;
  }

}
