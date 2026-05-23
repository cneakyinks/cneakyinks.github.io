"use client"

import type React from "react"
import { useRef, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { UndoIcon, SendIcon } from "lucide-react"

const colors = [
  { color: "#00FFFF", shadow: "0 0 10px #00FFFF" },
  { color: "#FFFFFF", shadow: "0 0 10px #FFFFFF" },
]

interface InteractivePaintProps {
  onSend?: (canvasDataURL: string, message?: string) => void
}

export default function InteractivePaint({ onSend }: InteractivePaintProps = {}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [color, setColor] = useState("#00FFFF")
  const [history, setHistory] = useState<ImageData[]>([])
  const [currentStep, setCurrentStep] = useState(-1)
  const [isSending, setIsSending] = useState(false)
  const [message, setMessage] = useState("")
  const [hasStartedDrawing, setHasStartedDrawing] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext("2d")
    if (context && canvas) {
      const containerWidth = containerRef.current?.clientWidth || 1000
      canvas.width = containerWidth
      canvas.height = containerWidth / 2
      context.fillStyle = "#121212"
      context.fillRect(0, 0, canvas.width, canvas.height)

      const initialState = context.getImageData(0, 0, canvas.width, canvas.height)
      setHistory([initialState])
      setCurrentStep(0)
    }
  }, [])

  const saveState = () => {
    const canvas = canvasRef.current
    const context = canvas?.getContext("2d")
    if (context) {
      const currentState = context.getImageData(0, 0, canvas.width, canvas.height)
      const newHistory = history.slice(0, currentStep + 1)
      setHistory([...newHistory, currentState])
      setCurrentStep(newHistory.length)
    }
  }

  const undo = () => {
    if (currentStep > 0) {
      const newStep = currentStep - 1
      setCurrentStep(newStep)

      const canvas = canvasRef.current
      const context = canvas?.getContext("2d")
      if (context) {
        context.putImageData(history[newStep], 0, 0)
      }
    }
  }

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    const context = canvas?.getContext("2d")
    if (context) {
      const rect = canvas.getBoundingClientRect()
      const scaleX = canvas.width / rect.width
      const scaleY = canvas.height / rect.height
      let x, y
      if ("touches" in e) {
        x = (e.touches[0].clientX - rect.left) * scaleX
        y = (e.touches[0].clientY - rect.top) * scaleY
      } else {
        x = (e.clientX - rect.left) * scaleX
        y = (e.clientY - rect.top) * scaleY
      }
      context.beginPath()
      context.moveTo(x, y)
      setIsDrawing(true)
      setHasStartedDrawing(true)
    }
  }

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return
    const canvas = canvasRef.current
    const context = canvas?.getContext("2d")
    if (context) {
      const rect = canvas.getBoundingClientRect()
      const scaleX = canvas.width / rect.width
      const scaleY = canvas.height / rect.height
      let x, y
      if ("touches" in e) {
        x = (e.touches[0].clientX - rect.left) * scaleX
        y = (e.touches[0].clientY - rect.top) * scaleY
      } else {
        x = (e.clientX - rect.left) * scaleX
        y = (e.clientY - rect.top) * scaleY
      }
      context.lineTo(x, y)
      context.strokeStyle = color
      context.lineWidth = 4
      context.lineCap = "round"
      context.stroke()
    }
  }

  const stopDrawing = () => {
    if (isDrawing) {
      saveState()
    }
    setIsDrawing(false)
  }

  const sendArtwork = () => {
    setIsSending(true)

    // Get canvas data as base64 URL
    const canvas = canvasRef.current
    if (canvas && onSend) {
      const dataURL = canvas.toDataURL("image/png")
      onSend(dataURL, message)
    }

    setTimeout(() => {
      setIsSending(false)
      setMessage("") // Clear message after sending
    }, 2000)
  }

  return (
    <div
      ref={containerRef}
      className="bg-zinc-900 border-2 border-cyan-500 shadow-lg rounded-lg overflow-hidden w-full"
    >
      <div className="p-4">
        <div className="mb-4 flex justify-center space-x-4">
          {colors.map((c) => (
            <div
              key={c.color}
              className={`w-8 h-8 rounded-full transition-all duration-200 cursor-pointer ${
                color === c.color ? "ring-2 ring-cyan-400 scale-110" : ""
              }`}
              style={{
                backgroundColor: c.color,
                boxShadow: c.shadow,
              }}
              onClick={() => setColor(c.color)}
            />
          ))}
        </div>
        <div className="relative w-full" style={{ paddingBottom: "50%", touchAction: "none" }}>
          <canvas
            ref={canvasRef}
            width={1000}
            height={500}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseOut={stopDrawing}
            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={stopDrawing}
            className="bg-zinc-800 rounded-lg absolute top-0 left-0 w-full h-full touch-none"
          />
          {!hasStartedDrawing && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <p className="text-gray-500 opacity-50 text-lg">Doodle here!</p>
            </div>
          )}
          {isSending && (
            <div
              className="absolute top-0 left-0 w-full h-full bg-zinc-900 rounded-lg opacity-80 flex items-center justify-center"
              style={{
                animation: "float-up 2s ease-out forwards",
              }}
            >
              <img
                src={canvasRef.current?.toDataURL() || "/placeholder.svg"}
                alt="Sent Artwork"
                className="w-3/4 h-3/4 object-contain rounded-lg"
                style={{
                  animation: "float-up 2s ease-out forwards, fade-out 2s ease-out forwards",
                }}
              />
            </div>
          )}
        </div>
        <div className="mt-4">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Leave me a message!"
            className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-400 resize-none focus:outline-none focus:border-cyan-400 transition-colors"
            rows={1}
            maxLength={500}
          />
          <div className="text-right text-xs text-gray-500 mt-1">{message.length}/500</div>
        </div>
        <div className="mt-4 flex justify-between">
          <Button
            variant="outline"
            className="text-cyan-400 border-cyan-400 hover:bg-cyan-400 hover:text-black bg-transparent"
            onClick={undo}
            disabled={currentStep <= 0}
          >
            <UndoIcon className="w-5 h-5 mr-2" />
            Undo
          </Button>
          <Button
            variant="outline"
            className="text-cyan-400 border-cyan-400 hover:bg-cyan-400 hover:text-black bg-transparent"
            onClick={sendArtwork}
            disabled={isSending}
          >
            <SendIcon className="w-5 h-5 mr-2" />
            {isSending ? "Sending..." : "Send"}
          </Button>
        </div>
      </div>
      <style jsx global>{`
        @keyframes float-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-100%); }
        }
        @keyframes fade-out {
          0% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>
    </div>
  )
}
