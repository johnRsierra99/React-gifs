import React from 'react'
import { useState } from 'react';
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One Punch']);
  const onAddCategory = (newCategory) => {

    if (categories.includes(newCategory)) {
      return;
    }
    //categories.push(newCategory);
    console.log(newCategory);
    setCategories( [newCategory, ...categories] );
    //setCategories( cat => [...categories, 'Valorant'] );
  }
  
  
  console.log(categories);

  return (
    <>
        
        <h1>GifExpertApp</h1>

        
        <AddCategory 
          onNewCategory= { value => onAddCategory(value)}
          currentCategories = {categories}
        />

        
        
        { categories.map( (category) => (
          <GifGrid key={category} category={category}/>
          )) 
        }
      
          
    </>
  )
}
