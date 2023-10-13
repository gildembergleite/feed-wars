'use client'
import { useState } from 'react'

export default function CommentForm() {
  const [isFocus, setIsFocus] = useState(false)
  return (
    <div>
      <div className="flex flex-col pt-6 pb-4 gap-4 border-t border-t-zinc-700">
        <label>Deixe seu comentário</label>
        <textarea
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          className="p-4 rounded-lg bg-zinc-900 resize-none"
          placeholder="Insira aqui o conteúdo do seu comentário"
          name="comment"
          rows={3}
        />
      </div>
      {isFocus && (
        <button className="font-bold px-6 py-4 bg-sky-600 rounded-lg">
          Publicar
        </button>
      )}
    </div>
  )
}
