import { Heart } from "lucide-react";

export default function HeartRating({ value, onVote }) {
  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((num) => (
        <Heart
          key={num}
          className={`w-8 h-8 cursor-pointer transition-colors ${
            num <= value ? "fill-red-500 stroke-red-500" : "stroke-gray-400"
          }`}
          onClick={() => onVote(value === 1 && num === 1 ? 0 : num)}
        />
      ))}
    </div>
  );
}
