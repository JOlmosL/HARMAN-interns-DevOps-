lines = ['This is a line', 'This line must match ABC', 'This is another line']
for x in lines:
    if 'ABC' in x:
        print('X | ', x)
    elif 'ABC' not in x:
        print('0 | ', x)
loop = True
while loop == True:
    y = input()
    if 'ABC' in y:
        print('X | ', y)
    elif 'ABC' not in y:
        print('0 | ', y)
    
    if y == 0:
        break
    loop = False