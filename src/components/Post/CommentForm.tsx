'use client'
import { ChangeEvent, FormEvent, useState } from 'react'
import { Comment } from '../../../data'

interface CommentFormProps {
  onAddComment: Function
}

export default function CommentForm({ onAddComment }: CommentFormProps) {
  const [isFocus, setIsFocus] = useState(false)
  const [textAreaContent, setTextAreaContent] = useState('')
  const isTextAreaEmpty = textAreaContent === ''

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
      publishedAt: new Date(),
      likes: 0,
    }
    setTextAreaContent('')
    onAddComment(comment)
  }

  function handleTextAreaContent(event: ChangeEvent<HTMLTextAreaElement>) {
    setTextAreaContent(event?.target?.value)
    event.target.setCustomValidity('')
  }

  function handleNewCommentInvalid(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('O campo é obrigatório')
  }

  return (
    <form onSubmit={handleCreateNewComment}>
      <div className="flex flex-col pt-6 pb-4 gap-4 border-t border-t-zinc-700">
        <label>Deixe seu comentário</label>
        <textarea
          onClick={handleTextAreaFocus}
          onBlur={handleTextAreaBlur}
          onChange={handleTextAreaContent}
          onInvalid={handleNewCommentInvalid}
          value={textAreaContent}
          className="p-4 rounded-lg bg-zinc-900 resize-none"
          placeholder="Insira aqui o conteúdo do seu comentário"
          name="comment"
          rows={3}
          required
        />
      </div>

      <button
        disabled={isTextAreaEmpty}
        className={`font-bold px-6 py-4 bg-sky-600 rounded-lg transition-all duration-300 ease-in-out
            ${isTextAreaEmpty ? 'opacity-30' : ''}
            ${isFocus ? 'visible' : 'hidden'} 
          `}
      >
        Publicar
      </button>
    </form>
  )
}
