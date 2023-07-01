import requests
from bs4 import BeautifulSoup
from .models import Disease

url_list = [
    "https://www.myupchar.com/bn/disease/gastritis",
    "https://www.myupchar.com/bn/disease/anemia",
    "https://www.myupchar.com/bn/disease/angina",
    "https://www.myupchar.com/bn/disease/sleep-apnea",
    "https://www.myupchar.com/bn/disease/arthritis",
    "https://www.myupchar.com/bn/disease/asthma",
    "https://www.myupchar.com/en/disease/atrial-fibrillation",
    "https://www.myupchar.com/bn/disease/bronchitis",
    "https://www.myupchar.com/bn/disease/cardiomyopathy",
    "https://www.myupchar.com/bn/disease/cervical-pain",
    "https://www.myupchar.com/bn/disease/chikungunya",
    "https://www.myupchar.com/bn/disease/psoriatic-arthritis",
    "https://www.myupchar.com/bn/disease/chronic-kidney-disease",
    "https://www.myupchar.com/bn/disease/rheumatoid-arthritis",
]

def scrape_diseases():
    for url in url_list:
        response = requests.get(url)
        soup = BeautifulSoup(response.content, 'html.parser')
        title = soup.find('h1', class_='disese-heading').text.strip()
        summary = soup.find('div', class_='disese-des').text.strip()
        symptoms = []
        symptoms_section = soup.find('div', class_='symptoms')
        if symptoms_section:
            symptom_items = symptoms_section.find_all('li')
            symptoms = [item.text.strip() for item in symptom_items]

        disease = Disease(title=title, summary=summary, symptoms=symptoms)
        disease.save()
