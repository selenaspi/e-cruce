import './searcherStyles.css'
const mGlass = 'images/icons/lupa.png'

function Searcher() {
    return (
        <div className="searcher-conteiner">
            <div><img src={mGlass} className="mag-glass" /></div>
            <input type='text'/>
        </div> 
    )
}

export default Searcher;