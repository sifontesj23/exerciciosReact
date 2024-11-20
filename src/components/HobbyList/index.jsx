function HobbyLista({hobbies}){
    return(
        //renderize uma lista (ul) que exiba cada hobby como um item (li).
        <div>    
        <h4>Lista de Hobbies</h4>
        <ul>
            <li>{hobbies[0]}</li>
            <li>{hobbies[1]}</li>
            <li>{hobbies[2]}</li>
        </ul>
        </div>

    )
}
export default HobbyLista;