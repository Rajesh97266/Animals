function App(){
    const handleClick = () => {
        console.log('Button Was Clicked ');
    }
    return <div>
        <button onClick={handleClick}>Add Animal</button>
    </div>
}

export default App
