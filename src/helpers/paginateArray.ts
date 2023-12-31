import { dataCard } from "../types/dataCard";

/*
    seleciona os itens do array com base nos parametros de paginação
*/


export const  paginateItems = (array:dataCard[], currentPage:number) => {
    const pageSize = 21;
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    
    return array.slice(startIndex, endIndex);
}