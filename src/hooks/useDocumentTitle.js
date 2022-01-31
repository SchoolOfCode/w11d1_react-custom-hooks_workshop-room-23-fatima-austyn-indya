import React, {useEffect} from "react";
// 1.1: In `src/hooks/useDocumentTitle.js`, create a custom `useDocumentTitle` hook that takes in a title and 
// changes the document's title accordingly. Use this hook in the `BasicCounter` component so that the document 
// title always reflects the `count`.


function useDocumentTitle(title){
    
    useEffect(() => {document.title=title})
  
}

export default useDocumentTitle;
