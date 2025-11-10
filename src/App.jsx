import { useState } from 'react'
import confetti from 'canvas-confetti'

function App() {
  const [showCredentials, setShowCredentials] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleSurpriseClick = () => {
    setIsAnimating(true)
    
    // Confetti animation
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })

    // Additional confetti burst after a delay
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
      })
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
      })
    }, 250)

    // Show credentials after animation
    setTimeout(() => {
      setShowCredentials(true)
      setIsAnimating(false)
    }, 800)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 flex items-center justify-center p-4">
      <div className="text-center space-y-8 max-w-md w-full">
        <h1 className="text-6xl md:text-7xl font-bold text-gray-800 mb-8 animate-fade-in">
          hello noobs!
        </h1>
        
        {!showCredentials && (
          <button
            onClick={handleSurpriseClick}
            disabled={isAnimating}
            className={`px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xl font-semibold rounded-lg shadow-lg transform transition-all duration-200 hover:scale-110 hover:shadow-xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed ${
              isAnimating ? 'animate-bounce' : ''
            }`}
          >
            click on the surprise
          </button>
        )}

        {showCredentials && (
          <div className="mt-8 space-y-4 animate-fade-in-up">
            <div className="bg-white rounded-lg shadow-lg p-6 space-y-3">
              <div className="text-left">
                <p className="text-gray-700 text-base mb-3">
                  try this login on insta...
                </p>
                <p className="text-gray-600 text-lg">
                  <span className="font-semibold">username:</span> brr_finstaaaa
                </p>
                <p className="text-gray-600 text-lg">
                  <span className="font-semibold">password:</span> newpassword79!
                </p>
                <p className="text-gray-700 text-base mt-3">
                  welocme to the fam :)!!!!
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App

