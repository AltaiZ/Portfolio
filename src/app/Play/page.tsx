'use client'
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

export default function GuessNumberGame() {
  const [targetNumber, setTargetNumber] = useState(0);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("1-100 хооронд тоо таагаарай");
  const [attempts, setAttempts] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // Тоглоом эхлэхэд санамсаргүй тоо үүсгэх
  useEffect(() => {
    generateRandomNumber();
  }, []);

  const generateRandomNumber = () => {
    setTargetNumber(Math.floor(Math.random() * 100) + 1);
    setGuess("");
    setMessage("Шинэ тоглоом эхэллээ! 1-100 хооронд:");
    setAttempts(0);
    setGameOver(false);
  };

  const handleGuess = (e) => {
    e.preventDefault();
    const userGuess = parseInt(guess);

    if (isNaN(userGuess)) {
      setMessage("Зөвхөн тоо оруулна уу!");
      return;
    }

    setAttempts(prev => prev + 1);

    if (userGuess === targetNumber) {
      setMessage(`Баяр хүргэе! 🎉 Та ${attempts + 1} оролдлогоор таалаа.`);
      setGameOver(true);
    } else if (userGuess > targetNumber) {
      setMessage("Хэтэрхий их байна! Бага тоо оруулна уу. 👇");
    } else {
      setMessage("Хэтэрхий бага байна! Их тоо оруулна уу. 👆");
    }
    setGuess("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-4 text-white">
      <Card className="p-8 w-full max-w-md bg-white/10 backdrop-blur-md border-white/20 shadow-2xl text-center">
        <h1 className="text-3xl font-bold mb-6">Тоо Таах Тоглоом</h1>
        
        <div className="text-lg font-medium mb-6 min-h-[60px] flex items-center justify-center">
          {message}
        </div>

        {!gameOver ? (
          <form onSubmit={handleGuess} className="flex flex-col gap-4">
            <Input
              type="number"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              placeholder="Тоогоо оруулна уу..."
              className="bg-white text-black text-center text-xl h-14"
              autoFocus
            />
            <Button type="submit" className="w-full h-12 text-lg bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold">
              Таах
            </Button>
          </form>
        ) : (
          <Button onClick={generateRandomNumber} className="w-full h-12 text-lg bg-green-500 hover:bg-green-600 font-bold">
            Дахин эхлэх
          </Button>
        )}

        <div className="mt-6 text-sm opacity-80">
          Оролдлогын тоо: {attempts}
        </div>
      </Card>
    </div>
  );
}