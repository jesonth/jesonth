// items
// pageNumber
// pagesize

import _ from 'lodash';



export function paginate(items, pageNumber, pageSize){

    const startIndex = (pageNumber -1) * pageSize
    console.log(Myitems: ${items})
    console.log(MyPageNumber: ${pageNumber})
    console.log(Start Index: ${startIndex})
     function Chain - Functional Programming
    return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();

}