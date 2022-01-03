def GE(A):
    '''
    Perform Gaussian Elimination on A.
    To compute the inverse, add the identity matrix to the right of A
    [A|I] => [I|A^-1]
    Extract A inverse by taking the right matrix
    '''
    # GE column by column by eliminanting all zeros below
    iterate = min(len(A[0]), len(A))
    for j in range(iterate):
        toSwap = j
        #find first non-zero row, toSwap is the row to swap (pivot)
        while toSwap < len(A) and A[toSwap][j] == 0:
            toSwap += 1
        # all zeros: go to next column to GE
        if toSwap == len(A):
            continue
        # swap so top row has leading non-zero
        A[j], A[toSwap] = A[toSwap], A[j]

        for i in range(0, len(A)): # i is each row
            if A[i][j] == 0 or i==j:
                continue
            factor = -A[j][j]/A[i][j]
            scale = -A[i][j]/A[j][j]
            for k in range(j, len(A[i])):
                A[i][k] = A[j][k]*scale + A[i][k]

    for i in range(len(A)):
        factor = A[i][i]
        for j in range(len(A[0])):
            A[i][j] /= factor
            A[i][j] = round(A[i][j], 5) # round to eliminate decimals

    return A
