import React, { useCallback, useState } from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';
import Categories from './components/Categories';

const App = () => {
  // const [data, setData] = useState(null);
  // const onClick = async () => {
  //   console.log("onClick");
  //   try {
  //     const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=e66e65d2cf6840ac8431440a0f8c1d8a',);
  //     console.log("response: " + JSON.stringify(response));
  //     setData(response.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }
  // e66e65d2cf6840ac8431440a0f8c1d8a
  const [category, setCategory] = useState('all');
  const onSelect = useCallback(category => setCategory(category), []);

  return (
    <>
      <Categories category={category} onSelect={onSelect}/>
      <NewsList category={category}/>
    </>
  );
};

export default App;