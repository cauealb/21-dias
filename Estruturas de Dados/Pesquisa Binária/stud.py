array = list(range(0,10000000))
item = 3782

def pesquisaBinaria():
    baixo = 0
    alto = len(array) - 1
     
    while baixo < alto:
        meio = (baixo + alto) // 2
        if item == meio:
            return meio
        elif meio > item:
            alto = meio
        else:
            baixo = meio
    return meio


pesquisaBinaria()