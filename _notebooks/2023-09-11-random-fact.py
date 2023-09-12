import randfacts as rf

print("Random Facts")

while True:
    input("Press Enter for a fact...")
    fact = rf.get_fact()
    print(fact)