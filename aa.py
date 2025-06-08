score_list = [5,10,15,20,25,30]

sos=0
i = 0
while i< len(score_list):
    if i%2 ==0:
        sos+=score_list[i]
    i+=1
print(sos)        