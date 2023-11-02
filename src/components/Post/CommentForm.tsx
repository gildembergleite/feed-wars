'use client'
import { FormEvent, useState } from 'react'
import { Comment } from '../../../data'

interface CommentFormProps {
  onAddComment: Function
}

export default function CommentForm({ onAddComment }: CommentFormProps) {
  const [isFocus, setIsFocus] = useState(false)
  const [textAreaContent, setTextAreaContent] = useState('')

  function handleTextAreaFocus() {
    setIsFocus(true)
  }
  function handleTextAreaBlur() {
    setTimeout(() => {
      setIsFocus(false)
    }, 150)
  }

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault()
    const comment: Comment = {
      userId: 0,
      content: textAreaContent,
    }
    setTextAreaContent('')
    onAddComment(comment)
  }

  return (
    <form onSubmit={handleCreateNewComment}>
      <div className="flex flex-col pt-6 pb-4 gap-4 border-t border-t-zinc-700">
        <label>Deixe seu comentário</label>
        <textarea
          onFocus={handleTextAreaFocus}
          onBlur={handleTextAreaBlur}
          onChange={(event) => setTextAreaContent(event.target.value)}
          value={textAreaContent}
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
    </form>
  )
}
