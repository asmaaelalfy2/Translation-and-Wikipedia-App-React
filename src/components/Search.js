import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Search() {
  const [searsh, setSearch] = useState('');
  const [results, setResults] = useState([]);

  //    const  onSubmit=(e)=>{

  //     }

  useEffect(() => {
    //using async
    const srch = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: searsh,
        },
      });
      setResults(data.query.search);
    };

    //2-method
    // (async()=>{
    //     await axios.get('adsd')
    // })();

    //3-method
    //    axios.get('dasd').then(res=>{

    //    })

    const timeId = setTimeout(() => {
      if (searsh) {
        srch();
      }
    }, 400);

    return () => {
      clearTimeout(timeId);
    };
  }, [searsh]);

  const renderedResults = results.map((res) => {
    return (
      <div className='item' key={res.pageid}>
        <div className='right floated content'>
          <a
            className='ui button'
            href={`https://en.wikipedia.org?curid=${res.pageid}`}
          >
            Go
          </a>
        </div>
        <div className='content'>
          <div className='header'>{res.title}</div>
          <span dangerouslySetInnerHTML={{ __html: res.snippet }}></span>
        </div>
      </div>
    );
  });

  console.log(results);
  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Search</label>
          <input
            type='text'
            className='input'
            value={searsh}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
      </div>
      <div className='ui celled list'>{renderedResults}</div>
    </div>
  );
}

export default Search;
