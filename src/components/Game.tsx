import { useState } from "react";


function Game() {


    // States
    const [player_option, setGame_options] = useState<string | null>(null)

    // For random number
    const [min, setMin] = useState<number>(0)
    const [max, setMax] = useState<number>(2)
    const [random, setRandom] = useState<number>(2)

    const [computer_choice, setComputer_choice] = useState<number>(2)

    // Score
    const [pScore, setPScore] = useState<number>(0)
    const [cScore, setCScore] = useState<number>(0)

    const options_array: any[] = ["rock", "paper", "scissors"]

    const Rps = (e: any) => {
        //Player
        const button_value = e.target.value
        setGame_options(options_array[button_value])
        //Computer
        setRandom(Math.floor(Math.random() * (max - min + 1)) + min)
        setComputer_choice(options_array[random]) //tog any på array pga denna


        if (button_value == 0 && random == 1 || button_value == 1 && random == 2 || button_value == 2 && random == 0) {
            setCScore(cScore + 1)

        } else if (button_value == computer_choice) {
            console.log("Tie!")
        } else {
            setPScore(pScore + 1)


        }
        

    }

    return (
        <div className="Game">

            <button value={0} onClick={Rps}>rock</button>
            <button value={1} onClick={Rps}>paper</button>
            <button value={2} onClick={Rps}>scissors</button>
            <div>You: {player_option}</div>
            <div>Comp: {computer_choice}</div>
            <div>Player Score: {pScore}</div>
            <div>Computer Score: {cScore}</div>

            <button >Reset</button>


        </div>
    )

}
export default Game