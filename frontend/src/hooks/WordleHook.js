import { useState } from 'react';


const WordleHook = (solution) => {
    const [turn, setTurn] = useState(0);
    const [currentGuess, setCurrentGuess] = useState('');
    const [guesses, setGuesses] = useState([...Array(6)]); //each guess in an array
    const [history, setHistory] = useState([]); //each guess is a string
    const [isCorrect, setIsCorrect] = useState(false);
    const [usedKeys, setUsedKeys] = useState({})

    //format guess into array of letter objects & colors
    const formatGuess = () => {
        //console.log('formatting the guess =', currentGuess)

        let solutionArray = [...solution]   //string to array of indv letters
        let formattedGuess = [...currentGuess].map((l) => {
            return{ key: l, color:'grey'}
        })                                  //string to array of indv letters + color property
   

        //find green letters
        formattedGuess.forEach((l,i) => {
            if (solutionArray[i] === l.key) {
                formattedGuess[i].color = 'green'
                solutionArray[i]=null
            }
        })
        
        //find yellow letter
        formattedGuess.forEach((l,i) => {
            if (solutionArray.includes(l.key) && l.color !== 'green'){
                formattedGuess[i].color = 'yellow'
                solutionArray[solutionArray.indexOf(l.key)] = null

            }
        })

        return formattedGuess
   
    }


    /**add new guess to guess state
     * update correct state
     * add 1 to turn    **/
    const addNewGuess = (formattedGuess) => {
        if (currentGuess === solution){
            setIsCorrect(true)
        } 
        setGuesses((prevGuesses) =>{
            let newGuesses = [...prevGuesses]
            newGuesses[turn] = formattedGuess
            return newGuesses
        })
        setHistory((preHistory) => {
            return [...preHistory, currentGuess]
        })
        setTurn((prevTurn) =>{
            return prevTurn +1
        })
        setUsedKeys((prevUsedKeys) => {
            let newKeys ={...prevUsedKeys}

            formattedGuess.forEach((l) => {
                const currentColor = newKeys[l.key]

                if(l.color === 'green'){
                    newKeys[l.key] = 'green'
                    return
                }
                if (l.color === 'yellow'&& currentColor !== 'green'){
                    newKeys[l.key] = 'yellow'
                    return
                }
                if (l.color === 'grey' && currentColor !== 'green' && currentColor !== 'yellow'){
                    newKeys[l.key] = 'grey'
                    return
                }
            })
            return newKeys
        })
        setCurrentGuess('')
    }

    //keyup event & track progress-- if user presses enter = new guess
    const handleKeyup = ({ key }) => {
        //console.log(key)

        if (key ==='Enter'){
            //add guess when > 5
            if(turn > 5){
                console.log('you used all your guesses :(')
                return
            }
            //no dupicate
            if(history.includes(currentGuess)){
                console.log('you already tried that word')
                return
            }
            //check work 5 char long
            if(currentGuess.length !==5){
                console.log('word must be 5 char long')
                return
            }
            const formatted = formatGuess()
            addNewGuess(formatted)
        }

        if (key === 'Backspace'){
            setCurrentGuess((prev) => {
                return prev.slice(0, -1)
            })
            return
        }

        //regex- only letter key & max 5 letters
        if (/^[A-Za-z]$/.test(key)) {
            if(currentGuess.length < 5 ){
                setCurrentGuess((prev) => {
                    return prev + key
                })
            }
        }

    } 

    //to use outside the hook
    return{turn, currentGuess, guesses, isCorrect, usedKeys, handleKeyup}

}

export default WordleHook