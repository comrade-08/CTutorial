import pandas as pd

data = pd.read_excel('https://docs.google.com/spreadsheets/d/1s2LMqt6weV0qpqgN3KxWlBnJJWbbooakql35dhWufGA/edit?usp=sharing')
frame = pd.DataFrame(data)
print(frame.to_string())