import { useState } from 'react';


export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInpitValue] = useState('');

    const onInputChange = ({ target }) => {
        //console.log(target.value);
        setInpitValue(target.value);
    }
    const onSubmit = ( event ) => {
        event.preventDefault();
        
        if (inputValue.trim().length <= 1) return;

        //setCategories( Categories => [inputValue, ...Categories]);
        onNewCategory( inputValue.trim() );
        setInpitValue('');
    }


  return (
    <form onSubmit={ onSubmit }>
    <input type="text" placeholder="Buscar gifs" value={ inputValue }
    onChange={ onInputChange}/>

    </form>
  )
}
