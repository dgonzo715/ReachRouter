const DisplayColorWord = (props) => {
    const style = {
        color: props.color1, 
        background: props.color2,
    }
    return <h1 style={style}>The word is:{props.word}</h1>;


}
 
export default DisplayColorWord;