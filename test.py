import requests

ids=[]

headers = {
    "accept": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzM4YjBjMDIxYmNiMzhkNzk5MzgyZGQzZjJmODFkNiIsInN1YiI6IjYzMWU3NDc1YzNhYTNmMDA5MTVlOTc0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FCZKY7BNEhBhzfwxjpiQ8XrsKE3uPqII-MnRAW3L214"
}


for i in range(5,10):
    url = "https://api.themoviedb.org/3/search/movie?query=star&include_adult=false&language=en-US&page="+str(i)
    response = requests.get(url, headers=headers)
    movieData=response.json()['results']
    for data in movieData:
        ids.append(data["id"])
print (ids)



korean_ids=[]
for id in ids:

    url = "https://api.themoviedb.org/3/movie/"+str(id)+"/translations"

    response = requests.get(url, headers=headers)
    movieData=response.json()['translations']
    for translation in movieData:
        for key in translation:
            if translation[key] in ['ko','KO',"KR",'kr','Korean','korean']:
                korean_ids.append(id)
                break
    
data_list = []

for id in korean_ids:
    url='https://api.themoviedb.org/3/movie/'+str(id)
    response = requests.get(url, headers=headers)
    movieData=response.json()

    data = {
        "backdrop_path": movieData.get('backdrop_path'),
        "poster_path": movieData.get('poster_path'),
        "original_title": movieData.get('original_title'),
        "overview": movieData.get('overview'),
        "genres": [genre['name'] for genre in movieData.get('genres', [])],
        "id": movieData.get('id'),
        "spoken_languages": [lang['name'] for lang in movieData.get('spoken_languages', [])]
    }

    data_list.append(data)


print(data_list)