def valid_sudoku(board):
    row = []
    for i in range(len(board)):
        row = []
        for j in range(len(board)):
            if board[i][j] != "." and board[i][j] in row:
                return False
            else:
                row.append(board[i][j]) 
    col = []
    for i in range(len(board)):
        col = []
        for j in range(len(board)):
            if board[j][i] != "." and board[j][i] in col:
                return False
            else:
                col.append(board[j][i])
    #check grid wise
    check = [[0,3], [3,6], [6,9]]
    duplicates = []
    for row_band in check:
        for col_band in check:
            duplicates = []
            for x in range(row_band[0], row_band[1]):
                for y in range(col_band[0], col_band[1]):
                    if board[x][y]!="." and (int(board[x][y]) <=0 or int(board[x][y]) >9):
                        return False
                    elif board[x][y] != "." and board[x][y] in duplicates:
                        return False
                    else:
                        duplicates.append(board[x][y])
    return True
board =[["1","2",".",".","3",".",".",".","."],
 ["4",".",".","5",".",".",".",".","."],
 [".","9","8",".",".",".",".",".","3"],
 ["5",".",".",".","6",".",".",".","4"],
 [".",".",".","8",".","3",".",".","5"],
 ["7",".",".",".","2",".",".",".","6"],
 [".",".",".",".",".",".","2",".","."],
 [".",".",".","4","1","9",".",".","8"],
 [".",".",".",".","8",".",".","7","9"]]

print(valid_sudoku(board))