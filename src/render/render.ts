export const renderBoard = (boardId: string) => {
  const board = document.getElementById(boardId)
  const canvasId = `canvas-${boardId}`
  let canvas = document.getElementById(canvasId)
  if (!canvas) {
    canvas = document.createElement('canvas')
    board?.appendChild(canvas)
  }
}
