/**
 * @returns {Object} quote information
 */
const fetchQuote = async() => {
   const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes')
    const data = await res.json();
   return data[0]
}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingbadApp = async(element) => {
    document.querySelector("#app-title").innerHTML = 'Breakingbad App'
    element.innerHTML = 'Loading...';
    
      const qouteLabel = document.createElement('blockquote');
      const authoLabel = document.createElement('h3');
      const nextQuoteButton = document.createElement('button');
      nextQuoteButton.innerText = 'Next Quote'

      const renderQuote = (data) => {
         qouteLabel.innerHTML = data.quote;
         authoLabel.innerHTML = data.author;
         element.replaceChildren(qouteLabel, authoLabel, nextQuoteButton)
      }


      fetchQuote()
         .then(renderQuote);
      
      nextQuoteButton.addEventListener('click', async() => {
         element.innerHTML = 'Loading...';
         renderQuote(await fetchQuote())
      })

}