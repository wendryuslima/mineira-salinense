
import { Star } from "lucide-react";

export function FiveStars() {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={20} color="#FFD700" />
      ))}
    </div>
  );
}
