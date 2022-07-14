import React, { useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import { loadCharacters } from './features/allCharacters/allCharactersSlice'
import AllCharacters from './features/allCharacters/AllCharacters';
import Search from './features/search/Search';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Spinner from './components/Spinner';
import Error from './components/Error';
import Card from 'react-bootstrap/Card'
import Paginator from './features/page/Page';

const App = () => {

    const dispatch = useDispatch();
    const { info, isLoading, hasError } = useSelector((state) => state.allCharacters);

    useEffect(() => {
        dispatch(loadCharacters())
    }, [])

    function setContent() {
        if (isLoading) {
          return <div className='text-center'><Spinner /></div>;
        }
        else if (hasError) {
          return <div className='text-center'><Error /></div>;
        }
        else {
            return <div><AllCharacters /><Paginator info={info} /></div>;
        }
      }

    return(
        <div id='App'>
            <header>
                <h1>Rick and Morty</h1>
            </header>
            <main>
                <Card>
                    <Card.Header>
                        <div className='row d-flex align-items-center justify-content-between align-items-md-center align-items-lg-center'>
                            <div className='col-7'>
                                <Card.Title>Find your character</Card.Title>
                                <Card.Text className='text-muted small'>
                                    If you are a rick and morty geek this is your place. 
                                    Here you find all the information about the characters, chapters and locations. Have fun.
                                </Card.Text>
                            </div>
                            <div className='col-5'>
                                <Search />
                            </div>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        {setContent()}
                    </Card.Body>
                </Card>
            </main>
        </div>
    );

}

export default App