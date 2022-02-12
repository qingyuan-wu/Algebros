# functions computing some basic matrix operations: addition, exponentiation, determinant

# multiply matrices A and B, assume valid dimensions
def multiply(A, B):
    res = []
    for i in range(len(A)):
        res.append([])

    for i in range(len(A)):

        for k in range(len(B[0])):
            entry = 0
            for j in range(len(A[0])):
                entry += A[i][j] * B[j][k]
            res[i].append(entry)


    return res

def upperTriangular(A):
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



        for i in range(j+1, len(A)): # i is each row
            if A[i][j] == 0:
                continue
            factor = -A[j][j]/A[i][j]
            for k in range(j, len(A[i])):
                A[i][k] = A[j][k] + A[i][k]*factor

    return A

def GE(A):
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

def swap(A,a,b):
    # swap rows a and b
    A[a], A[b] = A[b], A[a]



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

def power(A, n):
    # computes A^n, where A is a square matrix and n a positive integer

    res = A
    for i in range(1,n):
        res = multiply(res,A)

    return res

def proj(u, a):
    # projection of a onto u; a and u are lists of the same length
    res = []
    dot = 0
    sqr = 0
    for e1, e2 in zip(u, a):
        dot += e1*e2
        sqr += e1*e1
    for i in range(len(u)):
        res.append(dot/sqr*u[i])

    return res
def sub(a, b):
    # a, b are vectors
    # store result in a

    for i in range(len(a)):
        a[i] -= b[i]


def QR_decompose(A):
    res = [[]]*len(A)
    for i in range(len(A)):
        u = []
        u_o = []
        for j in range(len(A[0])):
            u.append(A[j][i])
            u_o.append(A[j][i]) # need for projection

        for k in range(i):
            basis = []
            for l in range(len(res)):
                basis.append(res[l][k])
            sub(u, proj(basis, u_o))
        for x in range(len(A)):
            res[x].append(u[x])

    return res
A =[[12,-51,4],[6,167,-68],[-4,24,-41]]
print(QR_decompose(A))

# tests
# A = [[1,0,0],
#     [0,5,0],
#     [0,0,9]]
#
# B = [[12,2],
#     [4,5]]
#
# C = [[1,2,3,9],
#     [11,5,6,-4],
#     [7,8,12,-11],
#     [8,-7,5,4]]
#
# print(minor(A,0,0))
# print(det(A))
#
# print("-----")
# print(minor(B,0,0))
# print(det(B))
#
# print("-----")
# print(minor(C, 1,1))
# print(det(C))
# NOTEEE upperTriangular and GE change the original functions, be cautious!
# A=[[8,-6,2],[-6,7,-4],[2,-4,3]]
# A = [[1,-1,2,3],[3,1,-2,24],[-4,6,1,2]]
# A=[[4,4,3],[5,-2,6],[-3,4,5]]
A=[[0,-3,-2,1,0,0],[1,-4,-2,0,1,0],[-3,4,1,0,0,1]]
print(det(A))
# print(upperTriangular(A))
print(GE(A))
print('-------')