import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterItems',
  pure: false
})
export class FilterItemsPipe implements PipeTransform {
  transform(items: Array<any>, selectedItems: Array<any>): Array<any> {
    const filtered = items.filter(
      (item: any) => selectedItems.find((o: any) => o.value === item.value) === undefined
    );

    return filtered.map(i => i);
  }
}
