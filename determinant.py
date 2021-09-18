def minor(A, i ,j):
    # return the i,j-th minor of A
    # i-th row and j-th column removed from A

    #initialize min to be [[],[],[]...]
    min = []
    for k in range(len(A)-1): # can't use i again
        min.append([])
    count = 0 # track which row of the MINOR we're at.
    # need the row to avoid index error (minor has one less row)

    for row in range(len(A)):
        if row != i: # skip the i-th row
            for col in range(len(A[0])):
                if col != j: # skip the j-th column
                    min[count].append(A[row][col])
            count += 1

    return min

def det(A):
    # returns the determinant using the Laplace expansion formula
    # run across the first row of A
    # assume A is square
    if len(A) <= 1:
        return A[0][0]
    res = 0
    for j in range(len(A[0])):
        # recursive formula of the det using Laplace expansion
        res += A[0][j] * (-1)**j * det(minor(A,0,j))

    return res
