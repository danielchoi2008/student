import random

print("Random Number Generator")

while True:
    input("Press Enter for a random number...")
    random_number = random.randint(1, 9)  # Generates a random number between 1 and 9
    print("Random Number:", random_number)
