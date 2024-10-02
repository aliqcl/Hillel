const CountryInfo = ({ country }) => {
    if (typeof country === 'object' && country !== null) {
      return (
        <ul>
          {Object.keys(country).map((key) => (
            <li key={key}>
              <strong>{key}:</strong> {Array.isArray(country[key]) ? null : typeof country[key] === 'object' ? null : country[key]}
              {typeof country[key] === 'object' ? <CountryInfo country={country[key]} /> : null}
            </li>
          ))}
        </ul>
      );
    }
    return null;
    
  };

  export default CountryInfo;