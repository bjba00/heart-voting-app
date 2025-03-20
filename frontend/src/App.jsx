import { useState, useEffect } from "react";
import HeartRating from "./components/HeartRating";

const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

export default function App() {
  const [votes, setVotes] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch("/api/votes")
      .then((res) => res.json())
      .then((data) => setVotes(data));
  }, []);

  const handleVote = async (option, value) => {
    await fetch("/api/vote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ option, value }),
    });
    setVotes({ ...votes, [option]: value });
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Vote with Hearts</h1>
      <button
        onClick={() => setIsAdmin(!isAdmin)}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        {isAdmin ? "User View" : "Admin View"}
      </button>

      {isAdmin ? (
        <div>
          <h2 className="text-lg font-bold">Results</h2>
          {Object.entries(votes).map(([option, value]) => (
            <p key={option}>{option}: {value} hearts</p>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {options.map((option) => (
            <div key={option} className="flex flex-col items-center">
              <span className="text-lg font-medium mb-1">{option}</span>
              <HeartRating value={votes[option] || 0} onVote={(value) => handleVote(option, value)} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
