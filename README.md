# Random Quote Machine
A simple React application that fetches and displays random quotes using the Quotable API. Users can generate new quotes and share them on Twitter.
## Features:-
- Fetches random quotes from the Quotable API.
- Displays the quote and its author.
- Allows users to generate a new quote with a button click.
- Provides a "Tweet" button to share the quote on Twitter.
## Components:-
The application is built using the following components:

### 1. App Component:-
The main component that manages the state and logic of the application.

Fetches a random quote from the API and displays it using the Card and CardContent components.

Provides a button to fetch a new quote and a link to share the quote on Twitter.

### 2. Button Component:-
A reusable button component that handles click events.

Used to trigger the fetching of a new quote.

### 3. Card Component:-
A reusable wrapper component for creating card layouts.

Used to display the quote and author in a visually appealing way.

### 4. CardContent Component:-
A reusable component for structuring content inside a card.

Used to display the quote text, author, and action buttons.

## Code Structure:-
### 1. State Management:-
The App component uses the useState hook to manage two pieces of state:

quote: Stores the fetched quote text.

author: Stores the author of the quote.

### 2. Fetching Quotes:-
The fetchQuote function fetches a random quote from the Quotable API using the fetch API.

The useEffect hook calls fetchQuote when the component mounts to load the first quote.

### 3. Rendering the UI:-
The Card component wraps the CardContent component, which contains:

The quote text (\<p id="text">\).

The author (\<p id="author">\).

A Button to fetch a new quote.

A "Tweet" link to share the quote on Twitter.

### 4. Sharing on Twitter:-
The "Tweet" link uses Twitter's intent/tweet URL to pre-fill a tweet with the quote and author.

The encodeURIComponent function ensures that special characters in the quote and author are properly encoded for the URL.

## How It Works:-
### When the application loads:

- The useEffect hook triggers the fetchQuote function.

- A random quote is fetched from the Quotable API and displayed.

### When the user clicks the "Another One" button:

- The newQuote function is called, which fetches a new quote and updates the state.

### When the user clicks the "Tweet" link:

- The quote and author are encoded into a URL, and the user is redirected to Twitter to share the quote.
