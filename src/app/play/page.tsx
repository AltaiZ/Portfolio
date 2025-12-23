"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";

export default function NumberGuessing() {
  // 1. ТОГЛООМЫН САНАХ ОЙ (STATE)
  const [targetNumber, setTargetNumber] = useState(0); // Компьютерын санасан тоо
  const [guess, setGuess] = useState("");              // Таны бичиж буй тоо
  const [message, setMessage] = useState("");          // Хариу мэдээлэл
  const [attempts, setAttempts] = useState(0);         // Оролдлогын тоо
  const [isGameOver, setIsGameOver] = useState(false); // Тоглоом дууссан эсэх

  // Шинэ тоглоом эхлүүлэх функц
  const startNewGame = () => {
    setTargetNumber(Math.floor(Math.random() * 100) + 1);
    setGuess("");
    setMessage("Just enter a number between 1 and 100!");
    setAttempts(0);
    setIsGameOver(false);
  };

  // Хуудас анх нээгдэхэд тоглоомыг эхлүүлэх
  useEffect(() => {
    startNewGame();
  }, []);

  // Таах товч дарахад ажиллах логик
  const handleGuess = () => {
    const numGuess = parseInt(guess);

    // Алдаа шалгах
    if (isNaN(numGuess) || numGuess < 1 || numGuess > 100) {
      setMessage("Just enter a number between 1 and 100!");
      return;
    }

    setAttempts(attempts + 1);

    if (numGuess === targetNumber) {
      setMessage(`Correct! ${attempts + 1} Attempts.`);
      setIsGameOver(true);
    } else if (numGuess < targetNumber) {
      setMessage("There is a low!");
    } else {
      setMessage("There is a lot!");
    }
    setGuess("");
  };

  return (
    <div className="flex justify-center items-center h-screen w-full bg-[url(/76239.jpg)] bg-no-repeat bg-center bg-cover relative">
    <div className="absolute w-full h-screen bg-black/50 flex justify-center items-center">
        <Card className="flex flex-col justify-center items-center gap-5">
        <h1 className="text-2xl font-semibold">GUESS THE NUMBER</h1>
      
      <p>{message}</p>

      {!isGameOver ? (
        <div className="flex gap-4">
  <Input
    type="number"
    value={guess}
    onChange={(e) => setGuess(e.target.value)}
    onKeyDown={(e) => {
      if (e.key === "Enter") {
        handleGuess();
      }
    }}
    placeholder="Write Numbers"
  />
  <Button onClick={handleGuess}>Guess</Button>
</div>
      ) : (
        <Button onClick={startNewGame}>Play Again</Button>
      )}

      <div>
        <p>Attempts: {attempts}</p>
        {isGameOver && <p>The number is correct: {targetNumber}</p>}
      </div>
    </Card>
    </div>
    </div>
  );
}