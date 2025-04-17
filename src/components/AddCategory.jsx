import { useState } from 'react';

                            //props.setCategories
export const AddCategory = ({ onNewCategory }) => {
    
    const [ inputValue, setInputValue ] = useState('');

    // const onInputChange = (event) => {
    //     setInputValue( event.target.value );
    // };
    const onInputChange = ({target}) => {
        setInputValue( target.value );
    };

    const onSubmit = (event) => {
        event.preventDefault();
        //console.log(inputValue);
        if(inputValue.trim().length <= 1) return;

        // setCategory(categories => [inputValue, ...categories]);
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
            type="text"
            placeholder="Buscar gifs" 
            value ={ inputValue }
            // onChange={ (event) => onInputChange(event) }
            onChange={ onInputChange }
        />
        </form>  
    )
}

