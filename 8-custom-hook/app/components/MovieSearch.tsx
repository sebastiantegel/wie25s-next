import { useState } from "react";

type MovieSearchProps = {
  searchMovies: (title: string) => void;
};

export const MovieSearch = ({ searchMovies }: MovieSearchProps) => {
  const [userInput, setUserInput] = useState<string>("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        searchMovies(userInput);

        setUserInput("");
      }}
    >
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button>Sök</button>
    </form>
  );
};
