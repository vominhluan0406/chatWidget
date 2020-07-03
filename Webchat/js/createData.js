var ronaldo = {
    "friend": [
        "Neymar",
        "Messi",
        "Kaka"
    ],
    "image": "img/person3.jpg"
}
var neymar = {
    "friend": [
        "Messi",
        "Ronaldo",
        "Kaka"
    ],
    "image": "img/person2.png"
}
var messi = {
    "friend": [
        "Kaka",
        "Ronaldo",
        "Neymar"
    ],
    "image": "img/person1.png"
}
var kaka = {
    "friend": [
        "Messi",
        "Ronaldo",
        "Neymar"
    ],
    "image": "img/person3.png"
}
var neymar_messi = [
    {
        "message": "Hi",
        "Sender": "Neymar"
    },
    {
        "message": "Hello",
        "Sender": "Messi"
    },
    {
        "message": "How old are you?",
        "Sender": "Neymar"
    },
    {
        "message": "Fine",
        "Sender": "Messi"
    },
    {
        "message": "OK",
        "Sender": "Neymar"
    }
]
localStorage.setItem("Ronaldo", JSON.stringify(ronaldo));
localStorage.setItem("Neymar", JSON.stringify(neymar));
localStorage.setItem("Messi", JSON.stringify(messi));
localStorage.setItem("Kaka", JSON.stringify(kaka));
localStorage.setItem("Neymar Messi", JSON.stringify(neymar_messi));
localStorage.setItem("Neymar Ronaldo", JSON.stringify(neymar_messi));