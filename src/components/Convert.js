import React, { useEffect, useState } from 'react';
import axios from 'axios';
function Convert({ Language, Text }) {
  const [Translated, setTranslated] = useState('');
  useEffect(() => {
    const TranslatedFun = async () => {
      const { data } = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params: {
            q: Text,
            target: Language.value,
            key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };
    TranslatedFun();
    // console.log('rendered');
  }, [Language, Text]);
  return (
    <div>
      <h1>{Translated}</h1>
    </div>
  );
}

export default Convert;
