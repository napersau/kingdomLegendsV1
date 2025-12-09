import { create } from 'zustand';

export const useGameStore = create((set) => ({
  gameState: null,
  isLoading: false,
  error: null,
  
  setGameState: (gameState) => set({ gameState }),
  
  setLoading: (isLoading) => set({ isLoading }),
  
  setError: (error) => set({ error }),
  
  resetGame: () => set({ gameState: null, error: null }),
}));
