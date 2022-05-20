import styles from './styles.module.css'
import {useState} from "react";

type Props = {
    mainColor: string
    onSearch: (searchValue: string)=> void
}

export const SearchInput = ({mainColor, onSearch}: Props) =>{
    //STATE
    const [focused, setFocused] = useState(false)
    const [searchValue, setSearchValue] = useState('')

    //FUNCTIONS
    const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) =>{
        if(event.code === 'Enter'){
            onSearch(searchValue)
        }
    }


    return(
        <div className={styles.container} style={{borderColor: focused ? mainColor : '#FFF'}}>
            <div
                className={styles.button}
                onClick={()=> onSearch(searchValue)}
            ></div>
            <input
                type="text"
                className={styles.input}
                placeholder="Digite o nome do produto"
                onFocus={()=> setFocused(true)}
                onBlur={()=> setFocused(false)}
                onKeyUp={handleKeyUp}
                value={searchValue}
                onChange={(e)=> setSearchValue(e.target.value)}
            />
        </div>
    )
}
