import { Box } from '@material-ui/core'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { renderBoard } from './render/render'

const boardSize = 8

export enum PieceType {
  Queen,
  Rook,
  Bishop,
  Knight,
  Pawn,
}

export interface Piece {
  coord: [number, number]
  type: PieceType
  possibleMoves: [number, number][]
}

export const BoardComponent = () => {
  const [boardId, setBoardId] = useState('')
  useEffect(() => {
    setBoardId(uuidv4())
  }, [])

  useEffect(() => {
    if (boardId) {
      renderBoard(boardId)
    }
  }, [boardId])

  return <Box id={boardId}></Box>
}
